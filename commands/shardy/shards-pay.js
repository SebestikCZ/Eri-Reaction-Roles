const Discord = require('discord.js');
const db = require('quick.db');
const { verifyOverdrawn } = require('../../functions.js');

module.exports = {
    name : "pay",
    aliases : ["spay", "s-pay", "sa"],
    category : "shards",
    run: async(client, message, args) => {
        let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]).user;
        let given = db.fetch(`shards_${message.author.id}-${message.guild.id}`)
        let amount = args[1]


        const roleColor =
        message.guild.me.displayHexColor === "#000000"
        ? "#ffffff"
        : message.guild.me.displayHexColor;

        if(!member) {
            var embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("<:no:767754183444398101>  | **Nešpecifikoval si membera!**")
            return message.channel.send(embed)
        }
        if(isNaN(amount)) {
            var embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("<:no:767754183444398101>  | **Tento command akceptuje iba čísla!**")
            return message.channel.send(embed)
        }
        if(given < 0) {
            var embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("<:no:767754183444398101>  | **Nemáš dostatok shardov!**")
            return message.channel.send(embed)
        }
        if(message.content.includes('-')) {
            var embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("<:no:767754183444398101>  | **Nemôžeš poslať záporný počet shardov, debil****")
            return message.channel.send(embed)
        }
        if(member.isBot) {
            var embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("<:no:767754183444398101>  | **Nemôžeš poslať shardy samému sebe, debil**")
            return message.channel.send(embed)
        }
        

        const isNotInvalid = verifyOverdrawn(message, amount);
        if (!isNotInvalid) return message.reply("Nemůžeš darovat víc shardů, než máš");
        var embed = new Discord.MessageEmbed()
            .setColor(roleColor)
            .setTitle("**<:EV_Shard:776100019907592192> | Shards Pay**")
            .addField("**Platba prebehla úspešne**", `Gratulujem ` + "<@"+member.id+">" + '! ' + `Obdržal si **${amount} <:EV_Shard:776100019907592192>** od uživateľa ` + "<@"+message.author.id+">" + "!")
        message.channel.send(embed)
        db.add(`shards_${member.id}-${message.guild.id}`, `${amount}`)
        db.subtract(`shards_${message.author.id}-${message.guild.id}`, `${amount}`)

    }
}
