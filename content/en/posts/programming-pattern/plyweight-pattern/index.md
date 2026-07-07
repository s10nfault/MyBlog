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

Making every properties used repeatly in every Instances to store them into a specific class, and they can use the properties without any additional memory allocated is the core idea of the **Flyweight Pattern**.

---

>[!TIP]
> This blog is a **reading note** summarized from [Game Programming Pattern](https://gameprogrammingpatterns.com/flyweight.html). You can get more interesting examples and explanations of the Flyweight Pattern from it!

## Contents
1. [Blocks in Sandbox Game](#1-blocks-in-sandbox-game)
2. [The Flyweight Pattern](#2-the-flyweight-pattern)

## 1. Blocks in Sandbox Game

Imagine you are developing a sandbox game that players can use blocks to build their own world.

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
> [!NOTE]
> In 2D games, there are usually using sprite, a big image stored every frames of character's motions, as a way to reduce calls or pre-loading. In this example, it as the repeat property in the `Block` class.

Then, we implement the abstract class `Block` to several sub-classes.
``` C#
namespace Blocks;

class GrassBlock : Block
{
    public GrassBlock()
    {
        var sprite = new GrassBlockSprite();
        var type = BlockType.Soft;
        var name = "Grass";
        base.(sprite, type, name);
    }
}

class DirtBlock : Block
{
    public DirtBlock()
    {
        var sprite = new DirtBlockSprite();
        var type = BlockType.Soft;
        var name = "Dirt";
        base.(sprite, type, name);
    }
}
```


## 2. The Flyweight Pattern