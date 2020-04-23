const Discord = require('discord.js');

module.exports.run = async (bot, message, av) =>
{
    const embed = new Discord.MessageEmbed()
    embed.setTitle(`Sondage create by ${message.author.username}`)
    .setColor('#dc143c')
    .setFooter('Choose one of this reaction.')
    let msg = await message.channel.send(embed);
    await msg.react('✅');
    await msg.react('❌');
}

module.exports.help = {
    name: "poll"
}