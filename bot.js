const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json')

client.on('message', msg => {
    for (i in config.reactions) {
        if (msg.content === config.reactions[i].message) {
            msg.react(config.reactions[i].reactionEmoji)
            .catch(console.error);
        }
    }
});

client.on('ready', () => {
  console.log(`Bot is up and running`);
});

client.login(config.token);
