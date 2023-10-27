---
sidebar_position: 1
title: Introducing World Model
---

The world model originated from
[Ha and Schmidhuber, 2018b; Matsuo et al., 2022](https://qubitpi.github.io/worldmodels.github.io/). Basically, human
develop a mental model of the world based on what we are able to perceive with our limited senses. The decisions and
actions we make are based on this internal model. The image of the world around us, which we carry in our head, is just
a _model_. Nobody in his head imagines all the world, government or country. We have only selected **concepts, and
relationships** between them, and uses those to represent the real system.

:::tip What is a World Model?

With respect to [llm-reasoners](https://github.com/QubitPi/llm-reasoners), a **world model** is a _repurposed LLM_,
which builds a reasoning graph. In this graph, a node is called a **state** and a link is called an **action**. _The LLM
generates the link_

:::

### Language Model as World Model

In general, a world model predicts the next state of the reasoning after applying an action to the current state.
[RAP](https://github.com/QubitPi/RAP) enables us to instantiate the general concepts of state and action in different
ways depending on the specific reasoning problems at hand. 

[//]: # (With the definition of state and action, the reasoning process can thus be described as a)

[//]: # ([Markov decision process &#40;MDP&#41;]&#40;./MDP.pdf&#41;: given the current state $s_{t,t=0,1,...,T}$ , e.g., the initial state $s_0$,)

[//]: # (the LLM &#40;as a **reasoning agent**&#41; generates an action space by sampling from its generative distribution)

[//]: # ($a_t ∼ p&#40;a|s_t,c&#41;$, where $c$ is a proper prompt &#40;e.g., in-context demonstrations&#41;. Once an action is chosen, the world)

[//]: # (model then predicts the next state $s_{t+1}$ of the reasoning. Specifically, we repurpose the same LLM to obtain a state)

[//]: # (transition distribution $p&#40;s_{t+1}|s_t, a_t, c'&#41;$, where c' is another prompt to guide the LLM to generate a state.)

[//]: # ()
[//]: # (Continuing the process results in a reasoning trace, which consists of a sequence of interleaved states and actions)

[//]: # ($&#40;s_0, a_0, s_1, . . . , a_{T-1}, s_T&#41;$. Note that the full reasoning trace is simulated by the LLM itself &#40;as a)

[//]: # (reasoning agent with an internal world model&#41; without interacting with the external real environment. This resembles)

[//]: # (humans contemplating a possible plan in their minds. The capability of simulating future states, by introducing the)

[//]: # (world model, allows us to incorporate principled planning algorithms to efficiently explore the vast reasoning space)
