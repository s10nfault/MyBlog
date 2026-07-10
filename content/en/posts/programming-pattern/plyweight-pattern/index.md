+++
date = '2026-07-07'
draft = true
title = 'Flyweight Pattern'
contentType = 'original'
tags = ["programming-patterns", "c-sharp"]
archives = ["2026-07"]
categories = ["reading-note"]
description = 'Learn how to use or fix problem with flyweight pattern!'

+++

Extracting shared properties and sharing them via a single object is the core idea of the **Flyweight Pattern**.

---

>[!TIP]
> This blog is a **reading note** summarized from [Game Programming Pattern](https://gameprogrammingpatterns.com/flyweight.html). You can get more interesting examples and explanations of the Flyweight Pattern from it!

## Contents
1. [Blocks in Sandbox Game](#1-blocks-in-sandbox-game)
2. [The Flyweight Pattern](#2-the-flyweight-pattern)

## 1. Blocks in Sandbox Game

Imagine you are developing a sandbox game where players can use blocks to build their own world.

Obviously, you need to define blocks in a **blocks' game**.

```c#
namespace Blocks;

///<summary>
/// The base of class of blocks.
/// </summary>
abstract class Block
{
    private Sprite _sprite;
    private BlockType _type;
    private string _name;

    protected Block(Sprite sprite, BlockType type, string name)
    {
        _sprite = sprite;
        _type = type;
        _name = name;
    }
}

/// <summary>
/// The enum is defined the block's physics type.
/// </summary>
enum BlockType
{
    Unbreakable,
    Soft,
    Median,
    Hard
}
```

Then, we implement the abstract class `Block` to several sub-classes.
``` C#
namespace Blocks;

class GrassBlock : Block
{
    public GrassBlock() : base (new self(), BlockType.Soft, "Grass"){}
}

class DirtBlock : Block
{
    public DirtBlock() : base (new self(), BlockType.Soft, "Dirt"){}
}
```


## 2. The Flyweight Pattern