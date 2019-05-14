const Discord = require('discord.js');
const client = new Discord.Client();
client.login("NTc3ODkwMjYxODg4NDAxNDM5.XNrojA.YDln-2B5SziMT1QOL2Hv3LiyVOQ");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
