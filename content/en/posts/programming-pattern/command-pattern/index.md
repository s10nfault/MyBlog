+++
date = '2026-07-02T19:37:28+08:00'
draft = true
title = 'Command Pattern'
contentType = 'original'
tags = ["programming-patterns"]
archives = ["2026-07"]
categories = ["reading-note"]
description = 'Learn how to use or fix problem with command pattern!'
+++

Building a bridge between inputs and actions to decouple with them is the core feature of command pattern.

## 1. The real life problem
When creating a player-controller character, we always face the problem of how to bind user inputs and character actions.

At first glance, this might not even seem like a problem. We can easily handel it using simple `if` statements.

```c#
public class Hero {

    public Hero(Vector2d position) {
        _position = position;
    }

    private Vector2D _position = new(0 , 0);

    //Some properties...

    public void Move() {
        if (Input.GetKeyDown(KeyCode.W))
            _position += Vector2d.Up;
        if (Input.GetKeyDown(KeyCode.A))
            _position += Vector2d.Left;
        if (Input.GetKeyDown(KeyCode.D))
            _position += Vector2d.Right;
        if (Input.GetKeyDown(KeyCode.S))
            _position += Vector2d.Down;
    }

    //Some Methods...
}
```

However, as players, we are often annoyed by bad default keybindings in other games.Therefore, as developers, we must supoort custom key configurations.

To store these configurations, we might use a `record` in C#.

> While C-like languages use `struct` or `class` for similar purposes, a C# `record` is **immutable** by default. This means it cannot be modified after creation; we must create a new instance if we want to change the keybindings.

```C#
public record KeyConfig (
    KeyCode MoveUp,
    KeyCode MoveLeft,
    KeyCode MoveRight,
    KeyCode MoveDown
);
```

And we can use it to refact the `Hero.Move()` method.

```C#
public class Hero {
    //Some properties...

    public void Move() {
        if (Input.GetKeyDown(KeyConfig.MoveUp))
            _position += Vector2d.Up;
        if (Input.GetKeyDown(KeyConfig.MoveLeft))
            _position += Vector2d.Left;
        if (Input.GetKeyDown(KeyConfig.MoveRight))
            _position += Vector2d.Right;
        if (Input.GetKeyDown(KeyConfig.MoveDown))
            _position += Vector2d.Down;
    }

    //Some Methods...
}
```

But a competed game is not only a few keybindings, but also has keybingdings such as hero's skill, UI controller, or multiple controll support.

[A picture to show how fragmentary it is.]

They made the programing structure to become fragmentation and inputs and actions couple together.

We actually don't want that happle, so we introduce the **Command Pattern**.

## 2. The Command Pattern

The core idea of Command pattern is turing command to a object. When the player press the button, the `Hero.Move()` doesn't get the message. Instead, it use a specific class to action by the input. And to action, it wraped the action by the class `Command`.

At first, we create the base class `Command`:

``` c#
public abstract class Command {
    
    public abstract void excute();

}
```

And, We design the subclass of `Command`:

```c#
public abstract class HeroMoveUpCommand : Command {

    public void excute {
        Hero.Position += Vector2d.UP;
    }

}

```
> Here, the `Vector2d Position` became a `Property`, a C# spcial way to define a class member. It can provide a convinent way or a sweet to creat a setter and getter easily by the statement `{get; set;}` behind the declaration.


We creat a class `HandelInput`, to handel the input and invoke the actions.

```c#
class HandelInput {

    private Action _heroMoveUp;
    private Action _heroMoveLeft;
    private Action _heroMoveRight;
    private Action _heroMoveDown;
    //Some Actions...

    public void Update() {
        if (Input.GetKeyDown(KeyConfig.MoveUp))
            _heroMoveUp();
        if (Input.GetKeyDown(KeyConfig.MoveLeft))
            _heroMoveLeft();
        if (Input.GetKeyDown(KeyConfig.MoveRight))
            _position += Vector2d.Right;
        if (Input.GetKeyDown(KeyConfig.MoveDown))
            _position += Vector2d.Down;
    }

}
```

## C#
Instead, We can use `Action`, a C# runtime defined `Delegate` used to action a specified behave without return, to build a *tunnel* between input and actions.