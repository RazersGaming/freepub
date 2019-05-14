const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "*sprite"

client.login("NTYxNTY4Mzc2NzQ5Njg2Nzg0.XNrHAw.ZjAWPd6uiLBQkAJGSBvvuKlwU08");

client.on('message' , message=>{
    if(message.content === "*sprite membre"){
        message.reply("Il y a 114 membres actuelement !");
        console.log('logs');
    }
})

client.on('message' , message=>{
    if(message.content === "*sprite Staff"){
        message.reply('Fondateur : ajoute un staff *pub addstaff');
        console.log('logs1');
    }
})

})

client.on('message' , message=>{
    if(message.content === "*sprite Staff"){
        message.reply('Fondateur : ajoute un staff *pub addstaff');
        console.log('logs1');
    }
})

client.on('message' , message=>{
    if(message.content === "*sprite secu"){
        message.reply("@everyone Sécuriter activée avec sucess !");
        console.log('un membre viens de faire help');
    }
})

        
