const Discord = require("discord.js")
const db = require("quick.db")


module.exports = {
    name: "claim",
    category: "shards",
    run: async(client, message, args) => {
        message.delete()
        let member = message.author
        let claimamount = "50"
        let claimedRole = message.member.roles.cache.find(r => r.name === "Claimed")

        if (claimedRole) {
            let claimed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle(`**${member.username}**, svoji vánoční odměnu si **už vyzvednul!**`)

            message.channel.send(claimed)
        } else {
            let embed = new Discord.MessageEmbed()
                .setTitle("<:pepeSanta:782344286896259143> | **Vánočný claim**")
                .addField(`${member.username}, jako dárek jsme ti připsali **50** <:EV_Shard:776100019907592192>`, "Tento příkaz můžeš použiť **jenom jednou!**")
                .setFooter("Veselé vánoce přeje tým EventVerse", member.avatarURL({dynamic:"gif"}))
                .setColor(0xad0205)

                message.member.roles.add("780925492831715379");
            db.add(`shards_${member.id}-${message.guild.id}`,`${claimamount}`)
            message.channel.send(embed)
        }
    }
}

