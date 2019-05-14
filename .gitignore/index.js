const Discord = require('discord.js');
const client = new Discord.Client();
client.login("NTYxNTY4Mzc2NzQ5Njg2Nzg0.XNrlKw.61lLQGRfBx8yDDn2RoSVGlrpVw8");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('token');
