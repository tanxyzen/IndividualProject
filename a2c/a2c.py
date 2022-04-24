import gym
from stable_baselines3 import A2C
from stable_baselines3.common.env_util import make_atari_env
from stable_baselines3.common.vec_env import VecFrameStack
from stable_baselines3.common.callbacks import CheckpointCallback
from stable_baselines3.common.evaluation import evaluate_policy
import os
import re
from natsort import natsorted
import json
import numpy as np
import matplotlib.pyplot as plt
import plotly.graph_objects as go
import pandas as pd
import cv2
import glob

# train the agent
def train():
    # Create parallel environments using make_vec_env
    # There already exists an environment generator
    # that will make and wrap atari environments correctly
    # Here we are also multi-worker training (n_envs=16 => 16 environments)
    n_envs=16
    env = make_atari_env("BreakoutNoFrameskip-v4", n_envs)
    env = VecFrameStack(env, n_stack=4) # Give the agent frame-stacking as input to learn movement of the ball

    checkpoint_callback = CheckpointCallback(save_freq = max(int(5e4) // n_envs, 1), save_path='./logs/') # Save a checkpoint every 50,000 steps

    # ent_coef (float) – Entropy coefficient for the loss calculation
    # vf_coef (float) – Value function coefficient for the loss calculation
    model = A2C("CnnPolicy", env, ent_coef=0.1, vf_coef=0.25, verbose=1) # Instantiate the agent
    model.learn(total_timesteps=int(1e7), callback=checkpoint_callback) # Train the agent
    # model.save("breakout_a2c_1e7") # Save the agent
    # model = A2C.load("./logs/1.0/a2c_4000000_steps") # Load the trained agent

    # print("Observation Space--\n" +str(env.observation_space))
    # print("Action Space--\n"+str(env.action_space))
    # print("observation sample:", env.observation_space.sample())
    # print("action sample:", env.action_space.sample())

    # obs = env.reset()
    # while True:
    #     # A2C stochastic by default
    #     # setting deterministic=True leads to better performance
    #     action, _states = model.predict(obs, deterministic=True)
    #     obs, rewards, dones, info = env.step(action)
    #     env.render()

# collect mean score, std score & length
def score():
    n_envs=1
    env = make_atari_env("BreakoutNoFrameskip-v4", n_envs)
    env = VecFrameStack(env, n_stack=4) # Give the agent frame-stacking as input to learn movement of the ball

    directory = "./logs" # assign directory
    # iterate over files in that directory
    models = []
    for i in os.listdir(directory):
        models.append(i)

    models = natsorted(models) # natural sorting

    scores = []
    timesteps = []
    mean_scores = []
    std_scores = []
    mean_lengths = []
    for i in models[:100]:
        # retrieve timestep
        timestep = int(i.split("_")[0])
        timesteps.append(timestep)

        model = A2C.load("./logs/" + i) # Load the trained agent
        # n_eval_episodes is number of games instead of per life loss
        # Evaluate the loaded policy
        score_list, steps_list = evaluate_policy(model, env, n_eval_episodes=10, render=True, return_episode_rewards=True, deterministic=True)
        # print(f"mean_reward={mean_score:.2f} +/- {std_score}")
        mean_score = sum(score_list) / len(score_list)
        std_score = np.std(score_list)
        mean_length = sum(steps_list) / len(steps_list)

        mean_scores.append(mean_score)
        std_scores.append(std_score)
        mean_lengths.append(mean_length)

        print(i)
        print("Mean Score: " + str(mean_score))
        print("Std Score: " + str(std_score))
        print("Mean Length: " + str(mean_length))
        print("-------------------------------------------------")

    for i in range(len(timesteps)):
        scores.append({"timestep": timesteps[i], "mean": mean_scores[i], "std": std_scores[i], "length": mean_lengths[i]})

    # save as json file
    with open("scores.json", "w") as fp:
        json.dump(scores, fp)

# collect reward
def reward():
    directory = "./logs" # assign directory
    # iterate over files in that directory
    models = []
    for i in os.listdir(directory):
        models.append(i)

    models = natsorted(models) # natural sorting

    timesteps = []
    epoch_rewards = []
    rewards = []
    for i in models[:100]:
        # reset the environment every epoch (15000 steps)
        n_envs=1
        env = make_atari_env("BreakoutNoFrameskip-v4", n_envs)
        env = VecFrameStack(env, n_stack=4) # Give the agent frame-stacking as input to learn movement of the ball

        # retrieve timestep
        timestep = int(i.split("_")[0])
        timesteps.append(timestep)

        model = A2C.load("./logs/" + i) # Load the trained agent
        epoch_reward = 0
        obs = env.reset()
        for j in range(15000):
            action, _states = model.predict(obs, deterministic=True)
            obs, reward, done, info = env.step(action)
            epoch_reward += int(reward)
            env.render()

        env.close()

        epoch_rewards.append(epoch_reward)

        print(i)
        print("Epoch Reward: " + str(epoch_reward))
        print("-------------------------------------------------")

    for i in range(len(timesteps)):
        rewards.append({"timestep": timesteps[i], "reward": epoch_rewards[i]})

    # save as json file
    with open("rewards.json", "w") as fp:
        json.dump(rewards, fp)

# probability of actions taken
def action():
    n_envs=1
    env = make_atari_env("BreakoutNoFrameskip-v4", n_envs)
    env = VecFrameStack(env, n_stack=4) # Give the agent frame-stacking as input to learn movement of the ball

    directory = "./logs" # assign directory
    # iterate over files in that directory
    models = []
    for i in os.listdir(directory):
        models.append(i)

    models = natsorted(models) # natural sorting

    actions = []
    timesteps = []
    noop_probs = []
    fire_probs = []
    right_probs = []
    left_probs = []
    for i in models[:100]:
        # retrieve timestep
        timestep = int(i.split("_")[0])
        timesteps.append(timestep)

        model = A2C.load("./logs/" + i) # Load the trained agent
        action_list = []
        episodes = 50
        for j in range(episodes):
            obs = env.reset()
            done = False
            while done == False:
                action, _states = model.predict(obs, deterministic=True)
                obs, reward, done, info = env.step(action)
                action_list.append(action)
                env.render()

        noop_prob = action_list.count(0) / len(action_list)
        fire_prob = action_list.count(1) / len(action_list)
        right_prob = action_list.count(2) / len(action_list)
        left_prob = action_list.count(3) / len(action_list)

        noop_probs.append(noop_prob)
        fire_probs.append(fire_prob)
        right_probs.append(right_prob)
        left_probs.append(left_prob)

        print(i)
        print("Noop Prob: " + str(noop_prob))
        print("Fire Proob: " + str(fire_prob))
        print("Right Proob: " + str(right_prob))
        print("Left Proob: " + str(left_prob))
        print("-------------------------------------------------")

    for i in range(len(timesteps)):
        actions.append({"timestep": timesteps[i], "noop": noop_probs[i], "fire": fire_probs[i], "right": right_probs[i], "left": left_probs[i]})

    # save as json file
    with open("actions.json", "w") as fp:
        json.dump(actions, fp)

# collect score, length & action for parallel coordinates
def parallel_coord():
    n_envs=1
    env = make_atari_env("BreakoutNoFrameskip-v4", n_envs)
    env = VecFrameStack(env, n_stack=4) # Give the agent frame-stacking as input to learn movement of the ball

    directory = "./logs" # assign directory
    # iterate over files in that directory
    models = []
    for i in os.listdir(directory):
        models.append(i)

    models = natsorted(models) # natural sorting

    parallel_coord = []
    scores = []
    lengths = []
    noop_probs = []
    fire_probs = []
    right_probs = []
    left_probs = []
    for i in models[63:64]:
        # retrieve timestep
        timestep = int(i.split("_")[0])

        model = A2C.load("./logs/" + i) # Load the trained agent

        for j in range(30):
            actions = []
            episodes = 5
            obs = env.reset()
            for k in range(episodes):
                done = False
                while done == False:
                    action, _states = model.predict(obs, deterministic=True)
                    obs, reward, done, info = env.step(action)
                    actions.append(action)
                    env.render()

            env.close()

            # extract episode information
            episode_info = (info[0]["episode"])
            scores.append(list(episode_info.values())[0])
            lengths.append(list(episode_info.values())[1])

            noop_prob = actions.count(0) / len(actions)
            fire_prob = actions.count(1) / len(actions)
            right_prob = actions.count(2) / len(actions)
            left_prob = actions.count(3) / len(actions)

            noop_probs.append(noop_prob)
            fire_probs.append(fire_prob)
            right_probs.append(right_prob)
            left_probs.append(left_prob)

            print(i)
            print("score: " + str(list(episode_info.values())[0]))
            print("length: " + str(list(episode_info.values())[1]))
            print("noop_prob: " + str(noop_prob))
            print("fire_prob: " + str(fire_prob))
            print("right_prob: " + str(right_prob))
            print("left_prob: " + str(left_prob))
            print("-------------------------------------------------")


    for i in range(len(scores)):
        parallel_coord.append({"score": scores[i], "length": lengths[i], "noop": noop_probs[i], "fire": fire_probs[i], "right": right_probs[i], "left": left_probs[i]})

    # save as json file
    with open("parallel_coord.json", "w") as fp:
        json.dump(parallel_coord, fp)

def parallel_coord_chart():
    df = pd.read_json("./data/agent_of_interest/timestep_3200000/parallel_coord.json")
    # print(df.head())
    # print(df.columns)
    layout = go.Layout(margin=go.layout.Margin(
        t=50,  #top margin
        b=40, #bottom margin
        l=40, #left margin
        r=40 #right margin
        )
    )

    fig = go.Figure(data=
        go.Parcoords(
            line = dict(color = df["score"]),
            dimensions = list([
                dict(range = [0,400],
                    label = "score", values = df["score"]),
                dict(range = [0,10000],
                    label = "length", values = df["length"]),
                dict(range = [0,1],
                    label = "noop", values = df["noop"]),
                dict(range = [0,1],
                    label = "fire", values = df["fire"]),
                dict(range = [0,1],
                    label = "right", values = df["right"]),
                dict(range = [0,1],
                    label = "left", values = df["left"])
            ])
        ),
        layout = layout
    )

    fig.write_image("parallel_coord.png")

# collect reward frequency
def reward_freq():
    n_envs=1
    env = make_atari_env("BreakoutNoFrameskip-v4", n_envs)
    env = VecFrameStack(env, n_stack=4) # Give the agent frame-stacking as input to learn movement of the ball

    directory = "./logs" # assign directory
    # iterate over files in that directory
    models = []
    for i in os.listdir(directory):
        models.append(i)

    models = natsorted(models) # natural sorting

    for i in models[26:27]:
        # retrieve timestep
        timestep = int(i.split("_")[0])

        model = A2C.load("./logs/" + i) # Load the trained agent

        # collect 25 episodes of reward frequency (5 game simulations)
        sets = ["1", "2", "3", "4", "5"]
        for j in range(5):
            reward_freq = []
            count = 0
            set_rewards = 0
            episodes = 5
            obs = env.reset()
            for k in range(episodes):
                done = False
                while done == False:
                    action, _states = model.predict(obs, deterministic=True)
                    obs, reward, done, info = env.step(action)
                    count += 1
                    set_rewards += reward
                    reward_freq.append({"reward": int(set_rewards), "iteration": count})
                    env.render()

            env.close()

            print(timestep)
            print("Set " + sets[j] + " Rewards: " + str(set_rewards))
            print("-------------------------------------------------")

            # save as json file
            with open("reward_freq_" + sets[j] + ".json", "w") as fp:
                json.dump(reward_freq, fp)

# create reward frequency charts
def reward_freq_chart():
    sets = ["1", "2", "3", "4", "5"]
    plt.figure(figsize=(6, 6))
    plt.ylim([0, 108])
    plt.xlabel("Iteration")
    plt.ylabel("Reward")

    for i in range(5):
        # load JSON file
        f = open("./data/agent_of_interest/timestep_1350000/reward_freq/reward_freq_" + sets[i] + ".json")
        data = json.load(f)

        rewards = []
        iterations = []
        for j in data:
            rewards.append(j["reward"])
            iterations.append(j["iteration"])

        plt.plot(iterations, rewards, linewidth=1)

    plt.savefig("reward_freq", bbox_inches="tight")

    # Closing file
    f.close()

# stack frames for ball movement
def frame_stack():
    # store frame images as list
    frame_list = []
    frame_list = glob.glob("./data/agent_of_interest/timestep_3200000/frames_repeat/*.png")

    for i in range(len(frame_list)):
        background = cv2.imread("./data/agent_of_interest/timestep_3200000/frame.png")
        next_frame = cv2.imread(frame_list[i])
        # blend images together
        overlap = cv2.addWeighted(background, 1, next_frame, 1, 0)
        cv2.imwrite("./data/agent_of_interest/timestep_3200000/frame.png", overlap)
