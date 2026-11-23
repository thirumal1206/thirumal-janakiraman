---
title: Building Alfred at HackLab Robotics
date: 2026-11-23
description: Two days in Berlin, one robot arm, and why the language model never touches the motors.
---
On 21 and 22 November I took part in HackLab Robotics in Berlin, on the NormaCore track. NormaCore builds open robotics software and its own arm, the ElRobot: seven axes plus a gripper, driven by ST3215 servos, with a Station service that streams the cameras and takes motor commands over a small binary API. The brief was to connect a coding agent such as Claude or Codex to the Station so it can control the arm by looking through its cameras. Our team built Alfred, an assistant arm you can talk to.

![Camera view of the ElRobot over the hackathon table, with sweets marked by the vision step](/alfred-arm.jpg)

## What Alfred does

You say "Alfred, tidy my desk: pens left, snacks right". A camera finds the objects, Claude decides what to do and in which order, and the arm does it. If you say "stop" or press the stop button, it stops, every time.

## The one decision that mattered

Before the event we read what earlier teams and papers had found, and the pattern was clear: a vision language model is good at deciding *what* to pick and bad at saying exactly *where* it is in millimetres. So we split the work.

- The language model supervises. It chooses a target from numbered marks the vision step gives it, plans, checks the result and talks to you.
- Deterministic code does the geometry, the grasp and all of the safety: speed caps, workspace limits, a floor the gripper may not go below, and the stop.

The model never outputs joint angles or raw pixels. Safety lives in the arm server, not in a prompt, because a prompt can be talked out of a rule and a clamp cannot.

## Modes are MCP packs

One arm server owns motion, vision, limits and the stop. Each mode is a small pack that lists its tools, its speed and how Alfred should behave. "Table" tidies a desk at full speed. "Assist" helps someone with limited arm use, for example with a hand over, at 30% speed. A new mode is a new pack, not new motion code.

## On the real arm

Before the event we only had the Station's source code and a simulation, so we wrote the client from the protocol and tested everything in MuJoCo first. On the day the real ElRobot needed its own care: we calibrated the camera to the table with recorded robot points (about 5 mm error), found that the shoulder sagged under the factory torque limit, and made every command carry all eight motors after the Station's stop switched torque off. After that Alfred picked a pen, a cap, a servo box and sweets into bins, about 28 seconds an object, and dropped seven sweets into one bin in a little over two minutes.

## Measure, then claim

We kept a changelog of every experiment with its measured result. In a simulated run through MCP, the operator put 4 of 4 objects in the box. Halfway through we knocked one out on purpose; the next look found it and Alfred put it back. We also wrote down what failed: a thin pencil was too flat for the gripper and failed every time in simulation, so the operator was told to say so after two tries instead of pretending.

That habit, writing "not verified" next to anything we had not run on the real arm, saved us more than once when the hardware behaved differently from the simulation.

## What I took home

The same rules I use for agentic platforms at work held up on a robot: let the model decide, let code enforce, and never trust a claim that a check did not back. It was also simply a great weekend with good people.

The code is on GitHub: [thirumal1206/hacklab-2026-normacore](https://github.com/thirumal1206/hacklab-2026-normacore).
