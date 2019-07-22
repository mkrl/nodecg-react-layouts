'use strict'

// Replicants are being declared in the extension first.
// When modifying existing replicants / adding new properties be sure to also 
// update corresponding replicant JSON schema.

module.exports = nodecg => {

	// Current layout
	const layout = nodecg.Replicant('layout', {defaultValue: "standby"})

	// All available layouts
	const layouts = nodecg.Replicant('layouts', {defaultValue: [
		{"label": "Standby/Idle", "value": "standby"}, 
		{"label": "Talking/interview", "value": "talking"}, 
		{"label": "In-game camera", "value": "game"}, 
		{"label": "Stats/analytics", "value": "stats"}, 
	]})

	// List of people who appear on screen
	const people = nodecg.Replicant('people', {defaultValue: [
		{"name": "John Doe", "contact" : "@DudeMcPerson", "type": "twitter"}, 
		{"name": "Jane Dremel", "contact" : "biggamer", "type": "steam"}, 
		{"name": "Bert", "contact" : "MinecraftAnalytics", "type": "twitch"}, 
		{"name": "Bdale", "contact" : "linuxnerd312", "type": "github"}, 
		{"name": "Bystander", "contact" : "mkrl.xyz", "type": "web"}, 
	]})

	// Social media contact types. They are responsible for displaying a corresponding icon next to the contact data
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
	const guest1 = nodecg.Replicant('guest1', {defaultValue: ""})
	const guest2 = nodecg.Replicant('guest2', {defaultValue: ""})
	const guest3 = nodecg.Replicant('guest3', {defaultValue: ""})

	// Toggle nameplate visibility
	const namesVisible = nodecg.Replicant('namesVisible', {defaultValue: false})

	// Up next:
	const upnext = nodecg.Replicant('upnext', {defaultValue: "Broadcast"})
	const onNow = nodecg.Replicant('onnow', {defaultValue: "Interview"})
	const title = nodecg.Replicant('title', {defaultValue: "Show name"})

	// Toast message:
	const toast = nodecg.Replicant('toast', {defaultValue: "A short message to be displayed"})

	// Lower third
	const lowerThirdTitle = nodecg.Replicant('lowerThirdTitle', {defaultValue: "Something is happening at this very moment!"})
	const lowerThirdText = nodecg.Replicant('lowerThirdText', {defaultValue: "And it needs your attention"})
	const lowerThirdVisible = nodecg.Replicant('lowerThirdVisible', {defaultValue: false})
}
