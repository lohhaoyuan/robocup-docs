---
title: About RoboCup
description: Introduction to RoboCup and this documentation.
---

Welcome to the RoboCup documentation! This page should mainly serve as a hub to all other pages pertaining to Robocup, but it also briefly covers the "abouts" of Robocup.

## What is RoboCup?

<img src="/robocup-open-senrobo-gameplay.jpeg" alt="Stock footage of 2v2 Robocup Open match" width="100%"/>

To put it in the terms of Claude:

> RoboCup is an international initiative to promote AI, robotics, and related research by providing a standard problem that is engaging, publicly appealing, and easy to understand, but also challenging enough to be interesting from a research perspective.

To put it in the terms of Robocup's website:

> RoboCupJunior Soccer challenges teams of high school students to design, build, and program autonomous robots that compete in a fast-paced soccer environment. These robots must navigate the field, track the ball, and strategize their movements—all without human intervention. The competition provides an exciting platform for young engineers to develop skills in mechanical design, electrical engineering, and artificial intelligence.

To put it in our terms:

> Idk.

## The Game

Robots play in a 2v2 format, with the objective being to score as many points into the opposing goal as possible. Both robots come from the same team, and can be made using virutally any material (with the small exception of some hazardous materials. Refer to the rules for more information.)

Below highlights some key rules of the game.

## The Playfield

<img src="/soccer-field-drawing.png" alt="Dimensions of the Robocup Junior playfield" width="100%"/>

The playfield is the enclosed green-carpet area where all RoboCupJunior Soccer matches are played, complete with surrounding walls, goals, field markings, and ball-return slopes to keep the game flowing. While the general layout is standard across competitions, exact measurements and construction details are defined in the official field specifications, which are linked [here](https://robocup-junior.github.io/soccer-rules/master/field_specification.pdf) for reference.

### Procedures and length of a game

The game will consist of two halves. The duration of each half is 10-minutes. There will be a 5-minute break in between the halves.

<img src="/robocup-junior-match-procedure.png" alt="Illustration of the match procedure" width="100%">

### Kick-offs

Each half of the game begins with a kick-off. All robots must be located on their own side of the field. All robots must be halted. The ball is positioned by a referee in the center of the field.

More information can be found in [the rulebook (2026 draft)](https://robocup-junior.github.io/soccer-rules/2026-soccer-draft-rules/rules.html#kick-off)

### Out-of-bounds

While attempting to score, robots must avoid going out-of-bounds. These are marked with a white line. If a robot touches a wall or moves completely into the penalty area it will be called for being out of bounds. When this situation arises, the robot is removed from the field for a one-minute penalty. There is no time stoppage for the game itself. The robot is allowed to return if a kick-off occurs before the penalty has elapsed.

More information can be found in [the rulebook (2026 draft)](https://robocup-junior.github.io/soccer-rules/2026-soccer-draft-rules/rules.html#out-of-bounds).

### Damaged Robots

If a robot is damaged, it has to be taken off the field and must be fixed before it can play again. Even if repaired, the robot must remain off the field for at least one minute or until the next kick-off is due.

More information can be found in [the rulebook (2026 draft)](https://robocup-junior.github.io/soccer-rules/2026-soccer-draft-rules/rules.html#damaged-robots)

### Lack of progress

Lack of progress occurs if there is no progress in the gameplay for a reasonable period of time and the situation is not likely to change. After a visible and loud count, a referee will call lack of progress and will move the ball to the nearest unoccupied neutral spot. If this does not solve the lack of progress, the referee can call lack of progress again and move the ball to a different neutral spot in the same way.

More information can be found in [the rulebook (2026 draft)](https://robocup-junior.github.io/soccer-rules/2026-soccer-draft-rules/rules.html#lack-of-progress)

## Leagues

Robocup Junior Soccer is split into 2 leagues:
- Soccer Vision (formerly Soccer Open)
- Soccer Infrared (formerly Soccer Lightweight)

As the name (no longer) suggests, the main difference between these 2 leagues lies in the weight limit and the use of infrared.

To quote the 2026 draft rules:
> There are three main differences between the two leagues.\
> </br>
> Soccer Infrared is played using a special ball that emits an IR signal and robots may weigh up to 1.5 kg, and be up to 22cm in size.\
> </br>
> Soccer Vision is played using a brightly colored orange golf ball, robots have no weight restriction and may be up to 18cm in size.

<table width="100%" height="100%">
    <tr>
        <th>Soccer Vision (formerly Soccer Open)</th>
        <th>Soccer Infrared (formerly Soccer Lightweight)</th>
    </tr>
    <tr>
        <td width="50%">
            <img src="/robocup-open-stock-footage.jpg" alt="Stock footage of 2v2 Robocup Open match" width="100%"/>
        </td>
        <td width="50%">
            <img src="/robocup-lightweight-stock-footage.jpg" alt="Stock footage of 2v2 Robocup Lightweight match" width="100%"/>
        </td>
    </tr>
    <tr>
        <td width="50%">
            <img src="/robocup-junior-soccer-vision-ball.webp" alt="Stock footage of Robocup Open ball" width="100%"/>
        </td>
        <td width="50%">
            <img src="/robocup-junior-soccer-ir-ball.webp" alt="Stock footage of Robocup Lightweight ball" width="100%"/>
        </td>
    </tr>
</table>

## Strategies

Typically, one robot is used as a goalkeeper, while the other attempts to score.

## Robots

### Drive

Robots are usually constructed with a holonomic drive (also known as "X-drive" in vex terms)
- This comes in the form of 4 motors arranged in an "X" shape, allowing the robot to move in any direction instantly without needing to rotate its body first.

### Dribbler & Kicker
To aid in scoring, robots usually have a dribbler and kicker.
- Kicker: This comes in the form of an actuator, and is the mechanism that strikes the ball with force so the robot can score from a distance, clear the ball, or pass with speed.
- Dribbbler: This imparts a backspin on the ball, allowing the robot to maintain possession of the ball while moving

### Mirror
The robot needs to be able track the ball in order to score. In the vision league, this can only be done using a camera and image processing systems. In the infrared league, this can be done with a camera, but also IR sensors.
- In order to view the whole field with only one camera, a curved mirror is used to provide 360 degree vision for the robot i.e. catoptric system.

This section only briefly covers the various components of a Robocup robot. A more comprehensive documentation can be found [here](/reference/02-robots).