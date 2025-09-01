---
layout: post
title: Schema Comparison
subtitle: (key, value) pair
tags: javascript ECMA6 jest testing
categories: tools
---

One problem I constantly have in JavaScript is checking what an object looks like. For example a remote call might need to have certain attributes and potentially nested attributes. So I created a [code solution](https://gist.github.com/bbody/0cd99962f72a5a4d3e437995e65e8651) to solve this problem for me.

## Arguments

* **comparison** - the object that is being compared with
* **schema** - the schema of what the object should look like
* **throwError** [optional] - will throw a JavaScript error if the arguments are invalid, defaults to false

## How to use

```javascript
const isObjectMappedToSchema = require('./schema-compare')

if (isObjectMappedToSchema(
		{key: {sub_key: "Something"}},
		{key: {sub_key: true}})) {
	console.log("Payload matches Schema")
}
```

## How to run tests

Tests are written with [Jest](https://jestjs.io/).

### Install Jest (If not already installed)

`npm install jest -g` 

### How to run tests

`jest`

## Code

<script src="https://gist.github.com/bbody/0cd99962f72a5a4d3e437995e65e8651.js"></script>