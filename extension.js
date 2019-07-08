'use strict'

// Replicants are being declared in the extension first

module.exports = nodecg => {
	const layout = nodecg.Replicant('layout', {defaultValue: "standby"})
	const layoutList = nodecg.Replicant('layouts', {defaultValue: ["standby", "talking", "game", "stats"]})
	const upnext = nodecg.Replicant('upnext', {defaultValue: "Stream topic"})
}
