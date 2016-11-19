'use strict'

const precision = require('precision')
const ui = require('cli-styles')
const esc = require('ansi-escapes')
const chalk = require('chalk')
const window = require('window-size')
const width = require('string-width')
const wrap = require('prompt-skeleton')



// const isNumber = /[0-9]/

const round = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n)

const RangePrompt = {

	  reset: function () {
		// this.typed = ''
		this.value = this.initialValue
		this.emit()
		this.render()
	}

	, abort: function () {
		this.done = this.aborted = true
		this.emit()
		this.render()
		this.out.write('\n')
		this.close()
	}

	, submit: function () {
		this.done = true
		this.aborted = false
		this.emit()
		this.render()
		this.out.write('\n')
		this.close()
	}



	, up: function () {
		this.typed = ''
		if (this.value >= this.max) return this.bell()
		this.value = round(this.value += this.step, precision(this.step))
		this.emit()
		this.render()
	}
	, down: function () {
		this.typed = ''
		if (this.value <= this.min) return this.bell()
		this.value = round(this.value -= this.step, precision(this.step))
		this.emit()
		this.render()
	}



	// , _: function (n) {
	// 	if (!isNumber.test(n)) return this.bell()

	// 	const now = Date.now()
	// 	if ((now - this.lastHit) > 1000) this.typed = '' // 1s elapsed
	// 	this.typed += n
	// 	this.lastHit = now

	// 	this.value = Math.min(parseInt(this.typed), this.max)
	// 	if (this.value > this.max) this.value = this.max
	// 	if (this.value < this.min) this.value = this.min

	// 	this.emit()
	// 	this.render()
	// }



	, render: function () {
		let out = ''
		if (this.first) this.first = false
		else out += esc.eraseLines(2) + esc.cursorTo(0)

		out += [
			  ui.symbol(this.done, this.aborted)
			, chalk.bold(this.msg)
			, ui.delimiter(this.done)
			, this.value, chalk.gray(this.unit)
		].join(' ') + '\n'

		const size = this.size
			- width(this.min + '') - width(this.max + '')
			- 6 // spacing of 6
		const barWidth = width(this.bar)
		const left = Math.round((size - barWidth) * this.value / (this.max - this.min))
		const right = size - left - barWidth

		const leftBar = this.bar.repeat(Math.max(0, left) / barWidth)
		const rightBar = this.bar.repeat(Math.max(0, right) / barWidth)

		out += [
			  '', this.min
			, chalk.gray(leftBar)
			+ this.marker
			+ chalk.gray(rightBar)
			, this.max, ''
		].join(' ')

		this.out.write(out)
	}
}

RangePrompt.left = RangePrompt.down
RangePrompt.right = RangePrompt.up



const defaults = {
	  hint:    '– Use arrow keys or type a value.'
	, marker:  chalk.cyan.bold('●')
	, bar:     '–'

	, values:  []
	, value:   null
	, unit:    ''

	, min:     0
	, max:     100
	, step:    1
	, size:    window.width

	, done:    false
	, aborted: false
}

const rangePrompt = (msg, opt) => {
	if ('string' !== typeof msg) throw new Error('Message must be string.')
	if (Array.isArray(opt) || 'object' !== typeof opt) opt = {}

	let p = Object.assign(Object.create(RangePrompt), defaults, opt)

	p.msg = msg
	p.initialValue = p.value
	p.first = true

	return wrap(p)
}



module.exports = Object.assign(rangePrompt, {RangePrompt})
