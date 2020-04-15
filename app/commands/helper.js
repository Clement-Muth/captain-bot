function emoji (message, id) {
    return message.emojis.get(id).toString()
}

module.exports = class Helper {
    static match (message) {
        return message.content.startsWith('.help')
    }
    static action (message, bot) {
        message.delete()
        message.channel.send ({embed: {
            color: 3066993,
            author: {
                name: bot.user.username,
                icon_url: 'https://discord.bots.gg/img/logo_transparent_coloured.png'
            },
            title: "Helper",
            url: "https://google.com",
            description: ':e_mail: : For question [Gmail](https://mail.google.com/)\n \
                          <:github:700079510388998174> : Follow-me on [Github](https://github.com/Clement-Muth)',
            fields: [{
                name: ":pencil: **Administration**\n",
                value: "`warn`, `test`, `test`, `test`, `test`, `test`, `test`\n \
                         `test`, `test`, `test`, `test`, `test`, `test`",
                inline: true,
            },
            {
                name: '\n\n:wrench: **Outils**\n',
                value: '`clear`',
            }],
            timestamp: new Date(),
            footer: {
                icon_url: 'https://discord.bots.gg/img/logo_transparent_coloured.png',
                text: "© Nost"
            }
        }})
    }
}