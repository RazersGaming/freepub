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
