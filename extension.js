'use strict'

// Replicants are being declared in the extension first

module.exports = nodecg => {
	// Current layout
	const layout = nodecg.Replicant('layout', {defaultValue: "standby"})
	// All available layouts
	const layoutList = nodecg.Replicant('layouts', {defaultValue: [
		{"label": "Standby/Idle", "value": "standby"}, 
		{"label": "Talking/interview", "value": "talking"}, 
		{"label": "In-game camera", "value": "game"}, 
		{"label": "Stats/analytics", "value": "stats"}, 
	]})
	// List of people who appear on screen
	const people = nodecg.Replicant('people', {defaultValue: [
		{"name": "John Doe", "contact" : "@DudeMcPerson", "type": "twitter"}, 
		{"name": "Jane Dremel", "contact" : "biggamer", "type": "steam"}, 
		{"name": "Herobrine_master_2006", "contact" : "MinecraftAnalytics", "type": "twitch"}, 
		{"name": "Bdale Garbee", "contact" : "linuxnerd312", "type": "github"}, 
		{"name": "Random bystander", "contact" : "mkrl.xyz", "type": "web"}, 
	]})

	const types = nodecg.Replicant('contactTypes', {defaultValue: [
		{"label": "Twitter", "value": "twitter"},
		{"label": "Steam", "value": "steam"},
		{"label": "GitHub", "value": "github"},
		{"label": "Twitch", "value": "twitch"},
		{"label": "Website", "value": "web"},
		{"label": "YouTube", "value": "youtube"},
		{"label": "Soundcloud", "value": "soundcloud"},
		{"label": "Reddit", "value": "reddit"},
		{"label": "Behance", "value": "behance"},
		{"label": "Telegram", "value": "telegram"},
	]})

	// On-screen people at the moment
	const host1 = nodecg.Replicant('host1', {defaultValue: "John Doe"})
	const host2 = nodecg.Replicant('host2', {defaultValue: "Jane Dremel"})
	const guest1 = nodecg.Replicant('guest1', {defaultValue: "Guest 1"})
	const guest2 = nodecg.Replicant('guest2', {defaultValue: ""})
	const guest3 = nodecg.Replicant('guest3', {defaultValue: ""})
	// Toggle nameplate visibility
	const namesVisible = nodecg.Replicant('namesVisible', {defaultValue: false})

	// Up next:
	const upnext = nodecg.Replicant('upnext', {defaultValue: "Stream topic"})
}
