# The Block Developer Cookbook

This repository contains all of the create-block templates for the recipes that can be found at [https://blockdevelopercookbook.com/](https://blockdevelopercookbook.com/).

You can use this repo as a local development environment with the [`@wordpress/env`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/) package.

## Setup

Please ensure you have all of the [requirements for a block development environment](https://developer.wordpress.org/block-editor/getting-started/devenv/).

Checkout this repo.

```bash
git clone git@github.com:ryanwelcher/block-developer-cookbook.git
```

Navigate to the directory `block-developer-cookbook`

```bash
cd block-developer-cookbook
```

Install the dependencies

```bash
npm install
```

Start the development environment (make sure you have [Docker installed](https://www.docker.com/products/docker-desktop/))

```bash
npm run env start
```

## Using the recipes

Run any of the following scripts to scaffold a recipe and then follow the tutorial in either the Readme or at [https://blockdevelopercookbook.com/](https://blockdevelopercookbook.com/). The content of the tutorials on the website is also provided in the README for each scaffolded plugin.

| Script                                 | Recipe                                                                                                       |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `npm run prep:acronym-format`          | [Creating a custom format](https://blockdevelopercookbook.com/recipes/creating-a-custom-format/)             |
| `npm run prep:customize-build-process` | [Customize the build process](https://blockdevelopercookbook.com/recipes/customize-the-build-process/)       |
| `npm run prep:simple-fade-effect`      | [Simple Fade-in Effect](https://blockdevelopercookbook.com/recipes/simple-fade-in-effect/)                   |
| `npm run prep:transforms`              | [Block Transforms](https://blockdevelopercookbook.com/recipes/block-transforms/)                             |
| `npm run prep:post-meta-testimonial`   | [Post Meta Testimonial Block](https://blockdevelopercookbook.com/recipes/post-meta-testimonial-block/)       |
| `npm run prep:gallery-slider`          | [Interactive API Gallery Slider](https://blockdevelopercookbook.com/recipes/interactive-api-gallery-slider/) |
| `npm run prep:tape-style`              | [Custom Image block style](https://blockdevelopercookbook.com/recipes/custom-image-block-style/)             |
| `npm run prep:editorial-notes`         | [Editorial Notes](https://blockdevelopercookbook.com/recipes/editorial-notes/)                               |
| `npm run prep:word-counter`            | [Editorial Notes](https://blockdevelopercookbook.com/recipes/editorial-notes/)                               |

All of the these commands will scaffold a new plugin in the `plugins` directory of this repo, set some defaults, and assign them the custom block category of `Block Developer Cookbook'. Beyond that, there is no difference between the plugins scaffolded using these commands and the [templates published on NPM](https://www.npmjs.com/settings/block-developer-cookbook/packages) - in fact this repo uses those!
