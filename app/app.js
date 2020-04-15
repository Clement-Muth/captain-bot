const Discord = require('discord.js')
const bot = new Discord.Client()
const Warn = require('./commands/administration')
const Clear = require('./commands/administration')
const Helper = require('./commands/helper')

bot.login('Njk5NjQzNjg0MTAyMzQwNjM4.XpXc7w.3qiPIr4qDpJjORdv65C5RnTh4QI');

/* Set bot status */
bot.on('ready', function () {
    bot.user.setActivity('discord.js', { type: 'PLAYING' })
})

/* Send message to new member */
bot.on('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        channel.send('Coucou et bienvenue sur notre serveur !\n \
            Il te permet de travailler sur tes projets en groupe ou solo via des channels\n \
            Pour commencer, tu peux entrer .help pour obtenir plus d\'information. A plus !\n\n \
            PS: Ne m\'en veux pas s\'il arrive que je cause des problèmes, je suis en cours \n \
            de développement, mais je verrai de mon mieux pour t\'assister.\n')
    }).catch(console.error)
})

/* Reply message */
bot.on('message', function (message, member) {
    if (message.content === "hello Captain Bot") {
        message.reply('Hello, comment tu vas ?')
    }
    if (Helper.match(message)) {
        return Helper.action(message, bot, Discord)
    }
    if (Warn.match(message)) {
        return Warn.action(message)
    }
    if (Clear.match(message)) {
        return Clear.action(message)
    }
})