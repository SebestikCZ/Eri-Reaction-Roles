const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true,
    partials : ["MESSAGE", "CHANNEL", "REACTION"]
});
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
client.on('ready', () => {
    client.user.setPresence({
        status: "online",
        activity: {
            name: "http://eventverse.fun",
            type: "LISTENING"
        }
    })
    console.log(`${client.user.username} ✅`)
})
client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})
client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '778601159589101578'){
        if(reaction.emoji.name === '🔔') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('760153844075200622')
            
            user.send('✅ | Pridala som ti **rolu Oznámení!**')
            
        }
    }
    if(reaction.message.id === '778601159589101578'){
        if(reaction.emoji.name === '📆') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('760154498089484288')
            user.send('✅ | Pridala som ti **rolu Events!**')
        }
    }
    if(reaction.message.id === '778601159589101578'){
        if(reaction.emoji.name === '🎉') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('760165732406263888')
            user.send('✅ | Pridala som ti **rolu Giveaway!**')
        }
    }
})

client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '778723984937975858'){
        if(reaction.emoji.name === '1️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('760149972833665065')
            user.send('✅ | Pridala som ti farbu **číslo #1**')
        }
    }
    if(reaction.message.id === '778723984937975858'){
        if(reaction.emoji.name === '2️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('760149903266807828')
            user.send('✅ | Pridala som ti farbu **číslo #2**')
        }
    }
    if(reaction.message.id === '778723984937975858'){
        if(reaction.emoji.name === '3️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('760149976591892530')
            user.send('✅ | Pridala som ti farbu **číslo #3**')
        }
    }
    if(reaction.message.id === '778723984937975858'){
        if(reaction.emoji.name === '4️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('760149978810679328')
            user.send('✅ | Pridala som ti farbu **číslo #4**')
        }
    }
})

client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === '778601159589101578'){
        if(reaction.emoji.name === '🔔') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('760153844075200622')
            user.send('❎ | Obobrala som ti **rolu Oznámení!**')
        }
    }
    if(reaction.message.id === '778601159589101578'){
        if(reaction.emoji.name === '📆') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('760154498089484288')
            user.send('❎ | Obobrala som ti **rolu Events!**')
        }
    }
    if(reaction.message.id === '778601159589101578'){
        if(reaction.emoji.name === '🎉') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('760165732406263888')
            user.send('❎ | Obobrala som ti **rolu Giveaway!**')
        }
    }
    if(reaction.message.id === '778723984937975858'){
        if(reaction.emoji.name === '1️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('760149972833665065')
            user.send('❎ | Odobrala som ti farbu **číslo #1**')
        }
    }
    if(reaction.message.id === '778723984937975858'){
        if(reaction.emoji.name === '2️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('760149903266807828')
            user.send('❎ | Odobrala som ti farbu **číslo #2**')
        }
    }
    if(reaction.message.id === '778723984937975858'){
        if(reaction.emoji.name === '3️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('760149976591892530')
            user.send('❎ | Odobrala som ti farbu **číslo #3**')
        }
    }
    if(reaction.message.id === '778723984937975858'){
        if(reaction.emoji.name === '4️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('760149978810679328')
            user.send('❎ | Odobrala som ti farbu **číslo #4**')
        }
    }
})



client.login(token)
