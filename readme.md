# range-prompt

**A prompt to select a value in a range.**

[![asciicast](https://asciinema.org/a/93623.png)](https://asciinema.org/a/93623)

[![npm version](https://img.shields.io/npm/v/range-prompt.svg)](https://www.npmjs.com/package/range-prompt)
[![dependency status](https://img.shields.io/david/derhuerst/range-prompt.svg)](https://david-dm.org/derhuerst/range-prompt#info=dependencies)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/range-prompt.svg)](https://david-dm.org/derhuerst/range-prompt#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/range-prompt.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)

*range-prompt* uses [*cli-styles*](https://github.com/derhuerst/cli-styles) and [*prompt-skeleton*](https://github.com/derhuerst/prompt-skeleton) to have a look & feel consistent with [other prompts](https://github.com/derhuerst/prompt-skeleton#prompts-using-prompt-skeleton).


## Installing

```
npm install range-prompt
```


## Usage

```js
const rangePrompt = require('range-prompt')

rangePrompt('How much ice cream would you like?', {
	min: 0, max: 10, value: 2, step: .1, unit: 'kg'
})
.on('data', (item) => console.log('Changed to', item, 'kg'))
.on('abort', (item) => console.log('You aborted, having chosen', item, 'kg'))
.on('submit', (item) => console.log('You chose', item, 'kg'))
```


## Related

- [`date-prompt`](https://github.com/derhuerst/date-prompt)
- [`mail-prompt`](https://github.com/derhuerst/mail-prompt)
- [`multiselect-prompt`](https://github.com/derhuerst/multiselect-prompt)
- [`number-prompt`](https://github.com/derhuerst/number-prompt)
- [`select-prompt`](https://github.com/derhuerst/select-prompt)
- [`text-prompt`](https://github.com/derhuerst/text-prompt)
- [`tree-select-prompt`](https://github.com/derhuerst/tree-select-prompt)
- [`cli-autocomplete`](https://github.com/derhuerst/cli-autocomplete)
- [`switch-prompt`](https://github.com/derhuerst/switch-prompt)


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/range-prompt/issues).
