
const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Pub, *Prefix");
    console.log("Le bot a bien ete connecter");
});

bot.login("NTYwNTA3Njc4MDExNDI0NzY5.D31BKQ.uwxaKOiQf1kmiOQmCcLMtWsZP-I");
