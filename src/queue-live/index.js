'use strict'

let events = {
	"queue-live": {}
};

let tasks = [];


module.exports = {
	module: require('./queue-live.js'),
	name: 'queue-live',
	permissions: [],
	exposed: true,
	tasks: tasks,
	events: {
		group: 'queue-live',
		shorthands: events["queue-live"]
	}
};