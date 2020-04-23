const Discord = require('discord.js');

module.exports.run = async (bot, message, av) =>
{
    bot.on('guildMemberAdd', function (member) {
        member.createDM().then(function (channel) {
            channel.send('Coucou et bienvenue sur notre serveur !\n \
                Il te permet de travailler sur tes projets en groupe ou solo via des channels\n \
                Pour commencer, tu peux entrer .help pour obtenir plus d\'information. A plus !\n\n \
                PS: Ne m\'en veux pas s\'il arrive que je cause des problèmes, je suis en cours \n \
                de développement, mais je verrai de mon mieux pour t\'assister.\n')
        }).catch(console.error)
    })
}

module.exports.help = {
    name: 'welcome'
};