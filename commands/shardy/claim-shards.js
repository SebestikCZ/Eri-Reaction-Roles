const Discord = require("discord.js");
const db = require("quick.db");


module.exports = {
    name: "claim",
    category: "shards",
    run: async(client, message, args) => {
        message.delete()
        let user = message.author
        let claimamount = "50"
        //let claimedRole = message.member.roles.cache.find(r => r.name === "Claimed")

        const isClaimed = db.get(`${user.id}.claimed`);
        if (isClaimed) {
            let claimed = new Discord.MessageEmbed()
                .setColor("RED")
				.setAuthor(user.tag, user.avatarURL({dynamic: true}), "http://eventverse.eu")
                .setTitle(`Svoji vánoční odměnu si **již vyzvednul!**`);

            message.channel.send(claimed)
        } else {
            let embed = new Discord.MessageEmbed()
                .setTitle("<:pepeSanta:782344286896259143> | **Vánočný claim**")
                .addField(`${user.username}, jako dárek jsme ti připsali **50** <:EV_Shard:776100019907592192>`, "Tento příkaz můžeš použiť **jenom jednou!**")
                .setFooter("Veselé vánoce přeje tým EventVerse", user.avatarURL({dynamic: true}))
				.setTimestamp()
                .setColor(0xad0205);
                db.set(`${user.id}.claimed`, true);
                //message.member.roles.add("780925492831715379");
            db.add(`shards_${user.id}-${message.guild.id}`,`${claimamount}`)
            message.channel.send(embed)
        }
    }
}

