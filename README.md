# Memory Game Project

[![MemoryGame last commit](https://img.shields.io/github/last-commit/google/skia.svg)](https://github.com/jdmedlock/arcadegame)
<br/>
[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)](https://github.com/jdmedlock/arcadegame/)

## Table of Contents

* [Overview](#overview)
* [How to Play](#how-to-play)
* [Player UI Feature](#player-ui-features)
* [Change Log](#change-log)
* [Contributing](#contributing)
* [Authors](#authors)
* [License](#license)

## Overview

The Arcade Game project was created as part of the Exploring JS section of the
[Udacity Front-End Web Developer Nanodegree Program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001). The
purpose of this assignment is to demonstrate mastery of the Javascript classes
and objects, but also to build on creating responsive and accessible web apps.

You can play the game here --> [Arcade Game](https://jdmedlock.github.io/arcadegame/)

## How to Play

This game is a browser-based game similar to the classic
[Frogger](https://en.wikipedia.org/wiki/Frogger) arcade game developed by
Konami in 1981.

In our game the objective is to move the players avatar from the starting point
at the bottom of the game board to the water at the top of the board - without
getting hit by a bug.

The bugs move at varying speeds from left-to-right across the paved lanes on
the board. The player uses keyboard arrow keys to move the avatar left, right,
up and down to move one block at a time.

When the game starts bugs always are always in the first column in their
respective row. However, the player avatar always starts in the bottom row, but
at a random column position for each game.

The game is won when the player's avatar reaches the water. However, if the
avatar collides with a bug the game is lost. At the end of a game they players
score is updated and the avatar is moved to the starting square.

## Player UI Features

In addition to the basic game play several UI components have been implemented
to provide the player with features to improve the overall experience.

* Score - The players score is represented as 'www / ggg' where 'www' is the
number of games won and 'ggg' is the number of games played

* Gems - These are collectibles that are added and removed based on the
players win percentage. A gem is added whenever the players win percentage
advances into the next higher percentile group. A gem is taken away when the win
percentage drops into the next lower percentile groups. There are four percentile
groups each representing a score as shown below

| Gems Accumulated | Win Percentile |
|:----------------:|:--------------:|
| 0 | 0-9% |
| 1 | 10-32% |
| 2 | 33-65% |
| 3 | 66-100% |

## Building & Running the Game

### Building on a Local Computer

To build the app on your local computer open a new terminal window and follow
the steps shown below.

| # | Command | Comments |
|:-:|:--------|:---------|
| 1 | `cd <parent-destination-directory>` | Navigate to the directory that will contain the application's sub-directory. |
| 2 | `git clone https://github.com/jdmedlock/arcadegame.git` | This creates the application sub-directory and populates it with the source code and documentation for the current release maintained on GitHub. |

At this point the app will be located at the directory
`<parent-destination-directory>/arcadegame` on your local computer.

This app has no external dependencies to any libraries or modules other than
the Javascript files in the `js` directory.

### Running on a Local Computer

When you have successfully downloaded the app from GitHub it can be run from
your browsers File menu by opening `index.html` located in the application
directory you created above.

## Change Log

For more information see [Change Log](https://github.com/jdmedlock/arcadegame/blob/development/CHANGELOG.md)

## Contributing

See [Contributing](https://github.com/jdmedlock/arcadegame/blob/development/CONTRIBUTING.md)
and our [Collaborator Guide](https://github.com/jdmedlock/arcadegame/blob/development/COLLABORATOR_GUIDE.md).

## Authors

Developers on this project can be found on the [Contributors](https://github.com/jdmedlock/arcadegame/graphs/contributors) page of this repo.

## License

[MIT](https://tldrlegal.com/license/mit-license)

