# AFL Scoreboard

![Alt text](https://github.com/danieldbird/afl-scoreboard/blob/main/demo.gif?raw=true "Title")

## Tech Stack

This full stack project was created in an hour or so with React and vanilla CSS.

## The Project

This tiny project was created very quickly after my team won. It separates out components for re-use, and uses react state.

Left-click adds either a goal or behind, and right-click deducts a goal or behind, or resets the score.

## Learning Goals

Just to have fun, and work out a way to create an animated sliding counter.

## Challenges

The challenge was to workout how to do the slider. There would be many ways to do this. Some more complicated than others. I could create and destroy the numbers (elements) on the fly, however I just wanted to achieve the objective as quickly as possible.

I decided to simply create an array of 300 (scores can't possibly get that high, right?) using `[...Array(300).keys()]`. Then create the 300 numbers (elements), and stack them vertically with flex. I also obviously set the overflow to hidden on the parent container.

I then used a position of relative and decided to animate the scrolling with `top: 000%`, and update the style positions like so: `{ top: '-${goals}00%' }`.

My animation settings are: `transition: all 300ms ease-in-out;`.

With the correct line-height, this approach works perfectly.

## Given More Time

If I wanted to spend more time creating this into a fully fledged and reusable scoreboard, I would like to be able to click on the team logo and have a list of the team logos pop up to select.

## Cap Feathers 🪶

Problem solving without looking up solutions. Deciding on the quickest and easiest approach to achieve the objective.
