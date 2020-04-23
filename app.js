const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const config = require('./config.json');
const fs = require('fs');

/* Set bot status */
bot.on('ready', async () =>
{
    console.log(`${bot.user.username} is loggin !`)
    bot.user.setActivity('discord.js', { type: 'PLAYING' });
});

bot.commands = new Discord.Collection();

fs.readdir('./app/commands/', (err, files) =>
{
    if (err) throw err;
    console.log("ok")
    let jsFile = files.filter(f => f.split('.').pop() === 'js');
    if (jsFile.length <= 0) return;

    jsFile.forEach((f, i) =>
    {
        let props = require(`./app/commands/${f}`);
        bot.commands.set(props.help.name, props);
    });
});

/* main */
bot.on('message', async message =>
{
    let prefix = config.prefix;
    let messageArray = message.content.split(' ');
    let av = messageArray.slice(1);
    let command = messageArray[0];
    let commandFile = bot.commands.get(command.slice(prefix.length));
    
    if (message.author.bot || message.channel.type === 'dm') return;
    if (commandFile) commandFile.run(bot, message, av);
});

bot.login(config.token);