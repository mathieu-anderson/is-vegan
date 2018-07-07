[![Build Status](https://travis-ci.org/hmontazeri/is-vegan.svg?branch=master)](https://travis-ci.org/hmontazeri/is-vegan) [![npm version](https://badge.fury.io/js/is-vegan.svg)](https://badge.fury.io/js/is-vegan) [![codecov](https://codecov.io/gh/hmontazeri/is-vegan/branch/master/graph/badge.svg)](https://codecov.io/gh/hmontazeri/is-vegan) [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

> This is a fork of https://github.com/hmontazeri/is-vegan adding support for the `other` category on top of `nonvegan` and `flagged` and fixing some build issue. Documentation might not be 100% accurate.

# is-vegan

Is-Vegan helps you to find out which food ingredients are vegan / non-vegan. It can answer that on 1 ingredient or on a list of ingredients. It uses a 850+ entries list of non-vegan ingredients.

[How to use?](#usage)

## Why?

We are aware that 'veganism' and the definition of it can be a hot topic. We created the non-vegan list keeping in mind that veganism in dietary terms, it denotes the practice of dispensing with all products derived wholly or partly from animals.

Our first step is the approach to help people understand, which products, and where applicable its ingredients, do not involve, or have involved, the use of any animal product, by-product or derivative. It is not driven about any vegan lifestyle choice or stereotype.
We welcome and appreciate any help and concerence regarding the nonvegan/canbevegan list.

Currently we are unfortunatly not adressing any other forms of exploitation of, and cruelty to, animals for clothing, cosmetics or any other purpose.

**Thank you all for your comments, we appreciate the discussion, as we grow and learn from your input.**

[All comments on Hacker News](https://news.ycombinator.com/item?id=16316140)

## Sources

We want to make sure that you understand how is-vegan is implemented. We analyzed as many good information websites for vegan / non-vegan ingredients as we found to get a very accurate list of ingredients. **However, feel free to send a pull request with an updated version of the list.**

Websites we parsed:

* [veganpeace](http://www.veganpeace.com/ingredients/ingredients.htm)
* [peta](https://www.peta.org/living/food/animal-ingredients-list/)
* [veganwolf](http://www.veganwolf.com/animal_ingredients.htm)

**and we added also a few ourselves...**

## Usage

### Add

```bash
yarn add is-vegan
```

or

```bash
npm install is-vegan --save
```

### example

```javascript
const isVegan = require('is-vegan');

// or

import * as isVegan from 'is-vegan';

// example for single ingredient
isVegan.isVeganIngredient('soy'); // true
isVegan.isVeganIngredient('milk'); // false

// example for list of ingredients
isVegan.isVeganIngredientList(['aspic', 'albumin']); // false
isVegan.isVeganIngredientList(['soy', 'cacao butter']); // true

// example for list of ingredients
isVegan.containsNonVeganIngredients(['aspic', 'albumin', 'soy']); // ['aspic', 'albumin']
isVegan.containsNonVeganIngredients(['soy', 'cacao butter']); // []

// example for list of ingredients wich contain flagged and non-vegan ingredients
isVegan.checkIngredients(['soy', 'cacao butter', 'pork', 'beef', 'glycine']);
// returns
// {
//   nonvegan: ['pork', 'beef'],
//   flagged: ['glycine']
// }

// or

import { checkIngredients } from 'is-vegan';

// example for list of ingredients wich contain flagged and non-vegan ingredients
checkIngredients(['soy', 'cacao butter', 'pork', 'beef', 'glycine']);

// returns
// {
//   nonvegan: ['pork', 'beef'],
//   flagged: ['glycine']
// }
```

### real world example

[Products searched on USDA Food Composition Databases](https://ndb.nal.usda.gov/ndb/search/list)

```javascript
const isVegan = require('is-vegan');

// MOSER ROTH, DARK CHOCOLATE
isVegan.isVeganIngredientList([
  'COCOA LIQUOR',
  'SUGAR',
  'COCOA BUTTER',
  'ALKALIZED REDUCED FAT COCOA POWDER',
  'SOY LECITHIN EMULSIFIER',
  'GROUND VANILLA'
]); // returns true
```

Checkout: [RunKit "is-vegan-playground" for more examples](https://runkit.com/hmontazeri/is-vegan-playground)

## Test

```bash
yarn test
```

## Alfred Workflow by Kyle Brumm (kjbrum)

[alfred-is-vegan](https://github.com/kjbrum/alfred-is-vegan)

## TODO

* extend list

## Authors

* Hamed Montazeri
* Meike Rittmeier
