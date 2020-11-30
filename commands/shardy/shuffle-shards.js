const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name : "shuffle",
    category : "shards",
    run: async(client, message, args) => {
        message.delete()
        var shuffleFinish = "Test"
        var shuffled = "Test"
        var tip = "Prostně napiš **Test** pro free shardy!"
        var ShardEmoji = "<:EV_Shard:776100019907592192>"
        var shardvalue = 5
        var member = message.author
        const embed = {
            "description": "Rozlušti slovo:```\n" +shuffled +"```\n**Nápověda:** " +tip +"\n**Výhra:** 5 " +`${ShardEmoji}`,
            "color": 16740541,
            "author": {
              "name": "✏️ Word Shuffle 🧾"
            }
        };
        message.channel.send({ embed });
        client.on('message', message =>{
            if (message.content === shuffleFinish) {
              var ShardEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'EV_Shard');
              message.channel.send("**WoRd sHuFfLe!** > Vyhrál/a: <@"+message.author.id+"> | Slovo bylo: **" +shuffleFinish +"**!")
             // message.channel.send("**PS:** Shardy nejsou naprogramováné takže nic nedostaneš!")
              message.member.send("**[" +`${ShardEmoji}` +"]** +5 Shardů _(Word Shuffle)_")
              db.add(`shards_${member.id}-${message.guild.id}`,`${shardvalue}`)
            }
          })
             
    }
}