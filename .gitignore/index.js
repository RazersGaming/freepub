const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "*pub"

client.login("NTYxNTY4Mzc2NzQ5Njg2Nzg0.XJ-IEA.QpEvKW01ZSAXixPQXluiuHy0gak");

client.on('message' , message=>{
    if(message.content === "*pub membre"){
        message.reply("Il y a 114 membres actuelement !");
        console.log('logs');
    }
})

client.on('message' , message=>{
    if(message.content === "*pub Staff"){
        message.reply('Fondateur : RED Kilian');
        console.log('logs1');
    }
})
