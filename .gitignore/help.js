const Discord = require("discord.js");
const Commande = require ('./commande')

module.exports = class Ping extends Command {

    static match(message) {
        if(message.content === '*help') {
            return true
        }
    }

    static action(message) {

        let help = new Discord.RichEmbed()
            .setTitle('HELP')
            .setDescription('Liste des commandes')
            .addBlankField()
            .addField('*ping', 'Renvois pong')
            .addField('*info', 'Donne des infos')
            .setColor('0x206694')
            .setFooter('Fin')

        message.chanel.send(help)
    }
}
