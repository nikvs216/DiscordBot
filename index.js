const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
})

client.on('message', message => {
	if(message.content.startsWith(`${prefix}ping`)) {
		console.log(message.content);
		message.channel.send(`Pong! My ping is ${client.ws.ping} milliseconds.`);
	}
	if(message.content.startsWith(`${prefix}sand`)) {
		console.log(message.content);
		message.channel.send("Here's some sand", {files: ["https://i.imgur.com/1oFLjOe.jpg"]});
	}
})

client.login(token);