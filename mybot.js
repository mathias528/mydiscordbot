const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs")
	

client.on("message", (message) => {

var admin = require("firebase-admin");

const serviceAccount = require("./madden-project-67765-firebase-adminsdk-q66tt-1aea6b2f42.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://madden-project-67765.firebaseio.com"
});
	
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

  if(command === 'ping') {
  message.channel.send('Pong!');
} else 
if (command === 'blah') {
  message.channel.send('Meh.');
}
});

client.login(config.token);
