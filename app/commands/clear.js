const Discord = require('discord.js');

module.exports.run = async (bot, message, av) =>
{
    console.log("test");
    let argv = message.content.split(' ')
    argv.shift()
    let number = argv[0]
    message.delete()
    if (number == null) {
        message.channel.send({embed: {
            color: 10038562,
            description: ':negative_squared_cross_mark: **| Please specify a number !**'
        }})
        return
    } else {
        async function purge() {
            const fetched = await message.channel.messages.fetch({limit: number})

            message.channel.bulkDelete(fetched)
            .catch(error => message.channel.send({embed: {
                color: 3066993,
                description: ':white_check_mark: **| ' + number + ' message(s) ' +
                'a/ont bien été supprimé(s) !**'
            }})
        )}
        purge()
    }
}

module.exports.help = {
    name: 'clear'
};