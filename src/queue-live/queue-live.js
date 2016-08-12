'use strict'

class QueueLive {
	constructor() {
		this.emitter = message_bus;
	}

	init(cfg) {
	}

	launch() {
		return Promise.resolve(true);
	}

}

module.exports = QueueLive;
