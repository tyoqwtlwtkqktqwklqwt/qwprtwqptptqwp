const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
var x = client.channels.get("541714496796885012");
if (x) x.join();
});

client.login(process.env.BOT_TOKEN);

client1.on('ready', () => {
var x = client.channels.get("541714496796885012");
if (x) x.join();
});

client1.login(process.env.BOT_TOKEN1);

client2.on('ready', () => {
var x = client.channels.get("541714496796885012");
if (x) x.join();
});

client2.login(process.env.BOT_TOKEN2);
