const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "s-remove",
    aliases: ["shards-remove", "remove-s", "sr", "s-rem"],
    category: "shards",
    run: async (client, message, args) => {
        message.delete()
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            var embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("<:no:767754183444398101>  | **Tento příkaz můžeš použít pouze můj diktátor**")
            return message.channel.send(embed)
            }
      
        let member = message.mentions.users.first();

        if(!member) {
            member = message.author
        }

        if(!args[1]) return message.channel.send("<:no:767754183444398101>  | **Nenapsal si počet, debil**")
        if(isNaN(args[1])) return message.channel.send("<:no:767754183444398101>  | **Můžeš použít pouze čísla, debil**")

        let reason = args.slice(2).join(" ")

        if(!reason) {
            reason = "Nebyl udaný důvod"
        }

        let shards = db.get(`shards_${member.id}-${message.guild.id}`)

        if(!shards || shards === undefined) {
            shards == "0"
        }
        
        if(args[1] > shards) {
            return message.channel.send("<:no:767754183444398101>  | **Tento user nemá žádné shardy, debil**")
        }

        var embed = new Discord.MessageEmbed()
            .setTitle("<:EV_Shard:776100019907592192> Shardy")
            .setThumbnail(member.avatarURL({dynamic:"gif"}))
            .addField("Vymazala jsem " + args[1] + " <:EV_Shard:776100019907592192>", reason)
            .setFooter(member.username, member.avatarURL({dynamic:"gif"}))
        message.channel.send(embed)

        db.add(`shards_${member.id}-${message.guild.id}`,`-${args[1]}`)
  }
}