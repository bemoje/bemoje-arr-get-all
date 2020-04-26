# @bemoje/arr-get-all

Retrieve all elements in provided indexes array.

#### Version

<span><a href="https://npmjs.org/@bemoje/arr-get-all" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/arr-get-all" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/arr-get-all" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-arr-get-all.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/arr-get-all" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-arr-get-all.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/arr-get-all" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/arr-get-all" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-arr-get-all/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-arr-get-all" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/arr-get-all
npm install --save @bemoje/arr-get-all
npm install --save-dev @bemoje/arr-get-all
```

## Usage

```javascript
import arrGetAll from '@bemoje/arr-get-all'

const arr = ['a', 'b', 'c']

arrGetAll(arr, [3])
//=> [undefined]

arrGetAll(arr, [1])
//=> ['b']

arrGetAll(arr, [1, 2, 3])
//=> ['b', 'c', undefined]

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### arrGetAll

Retrieve all elements in provided indexes array.

##### Parameters

-   `arr` **[Array][3]** The array

-   `indexes` **[Array][3]&lt;[number][4]>** An array of indexes to get

##### Returns
**[Array][3]** The corresponding elements

[1]: #arrgetall

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number