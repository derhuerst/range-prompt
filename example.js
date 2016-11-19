'use strict'

const rangePrompt = require('.')

rangePrompt('How much ice cream would you like?', {
	min: 0, max: 10, value: 2, unit: 'kg'
})
// .on('data', (data) => console.log('Changed to', selected(data.value)))
.on('abort', (item) => console.log('You aborted, having chosen', item))
.on('submit', (item) => console.log('You chose', item))
