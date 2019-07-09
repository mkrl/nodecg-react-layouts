'use strict'

// Replicants are being declared in the extension first

module.exports = nodecg => {
	// Current layout
	const layout = nodecg.Replicant('layout', {defaultValue: "standby"})
	// All available layouts
	const layoutList = nodecg.Replicant('layouts', {defaultValue: [
		{"label": "Standby/Idle", "value" : "standby"}, 
		{"label": "Talking/interview", "value" : "talking"}, 
		{"label": "In-game camera", "value" : "game"}, 
		{"label": "Stats/analytics", "value" : "stats"}, 
	]})
	// List of people who appear on screen
	const people = nodecg.Replicant('people', {defaultValue: [
		{"name": "Host 1", "contact" : "@DudeMcPerson", "type": "twitter"}, 
		{"name": "Host 2", "contact" : "biggamer", "type": "steam"}, 
		{"name": "Guest 1", "contact" : "MinecraftAnalytics", "type": "twitch"}, 
		{"name": "Guest 2", "contact" : "linuxnerd312", "type": "github"}, 
		{"name": "Guest 3", "contact" : "mkrl.xyz", "type": "web"}, 
	]})
	const peopleContactTypes = [
		"twitter",
		"steam",
		"github",
		"twitch",
		"web",
	]

	// On-screen people at the moment
	const host1 = nodecg.Replicant('host1', {defaultValue: "Host 1"})
	const host2 = nodecg.Replicant('host2', {defaultValue: "Host 2"})
	const guest1 = nodecg.Replicant('guest1', {defaultValue: "Guest 1"})
	const guest2 = nodecg.Replicant('guest2', {defaultValue: "Guest 2"})
	const guest3 = nodecg.Replicant('guest3', {defaultValue: "Guest 3"})
	// Toggle nameplate visibility
	const namesVisible = nodecg.Replicant('namesVisible', {defaultValue: false})

	// Up next:
	const upnext = nodecg.Replicant('upnext', {defaultValue: "Stream topic"})
}
