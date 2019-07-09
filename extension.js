'use strict'

// Replicants are being declared in the extension first

module.exports = nodecg => {
	const layout = nodecg.Replicant('layout', {defaultValue: "standby"})
	const layoutList = nodecg.Replicant('layouts', {defaultValue: [
		{"label": "Standby/Idle", "value" : "standby"}, 
		{"label": "Talking/interview", "value" : "talking"}, 
		{"label": "In-game camera", "value" : "game"}, 
		{"label": "Stats/analytics", "value" : "stats"}, 
	]})
	const upnext = nodecg.Replicant('upnext', {defaultValue: "Stream topic"})
}
