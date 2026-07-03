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

Building a bridge between inputs and methods to decouple with them is the core feature of command pattern.

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
public record GameConfig (
    KeyCode MoveUp,
    KeyCode MoveLeft,
    KeyCode MoveRight,
    KeyCode MoveDown
);
```