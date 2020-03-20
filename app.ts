import * as dotenv from 'dotenv';
import * as Discord from 'discord.js';
import {testFunc} from './modules/Util';

dotenv.config();

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('message', (msg: Discord.Message)  => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

testFunc();
client.login(process.env.API_TOKEN);