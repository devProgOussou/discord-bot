require('dotenv').config({path: './.env'});

const { Client, Intents } = require('discord.js');

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

const prefix = "!";

client.on('messageCreate', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        message.reply(`Pong`);
    }
});

client.login(process.env.CLIENT_TOKEN);