# Tailwind boilerplate

https://codyscott1.github.io/tailwind-boilerplate/

Based on the half helix [Shopify Starter Theme](https://www.figma.com/file/GY13fltZXHlOZTwOJ9sIb4/Shopify-Starter-Theme-%5B2021%5D?node-id=3646%3A39750). Copy `tailwind.config.js` as a starting point.

The config is still a work in progress and needs updates to fully match the starter theme.

## Installation

`yarn`

## Preview

`yarn start`

## Build

`yarn build`

This will update the docs directory with a static version of the current preview. Github pages is serving that docs directory so pushing to main will update the build.

## Generating Styles

### Getting started

1. `yarn && cp .env.example .env`
2. set .env values

### Generating typography

1. `yarn typography`
2. Copy values from `typography.json` into your `tailwind.config.js`
3. Copy `typography.css` into your project and import the file to start using these typography values
