# vTranslit-scheme-Gran

Grantha scheme for [vTranslit](https://github.com/vipranarayan14/vtranslit).

## Installation

```bash
npm install vtranslit-scheme-gran 
```

## Node usage

```js
const { vTranslit } = require('vtranslit');
const { vTranslitSchemeGran } = require('vtranslit-scheme-gran');

const vtranslit = vTranslit([
  vTranslitSchemeGran
]);
```

## Browser usage

```html
<script src="path/to/vtranslit.js"></script>
<script src="path/to/vtranslit-scheme-gran.js"></script>
```

```js
const { vTranslit, vTranslitSchemeGran } = window;

const vtranslit = vTranslit([
  vTranslitSchemeGran
]);
```
