onst Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTYxNTY4Mzc2NzQ5Njg2Nzg0.XNrlow.4kKZAvqyqsWRzG80K-Ddse6Fq4k');
