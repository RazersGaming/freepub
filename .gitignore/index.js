const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "*pub"

client.login("NTYwNTA3Njc4MDExNDI0NzY5.XJ-FNw.B6NmHW9sYQSmR6Vrhsn438uN5sY");

client.on('message' , message=>{
    if(message.content === "*pub ping"){
        message.reply("Pong");
        console.log('logs');
    }
})

client.on('message' , message=>{
    if(message.content === "*pub Staff"){
        message.reply('Fondateur : RED Kilian');
        console.log('logs1');
    }
})
