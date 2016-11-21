'use strict'

const rangePrompt = require('.')

rangePrompt('How much ice cream would you like?', {
	min: 0, max: 10, value: 2, step: .1, unit: 'kg'
})
// .on('data', (item) => console.log('Changed to', item, 'kg'))
.on('abort', (item) => console.log('You aborted, having chosen', item, 'kg'))
.on('submit', (item) => console.log('You chose', item, 'kg'))
