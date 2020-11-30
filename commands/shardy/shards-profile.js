const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "s-profile",
    aliases: ["shardsprofile", "sprofile","shards"],
    category: "shards",
    run: async (client, message, args) => {
      message.delete()
      let member = message.mentions.users.first() || message.author;

      let shards = db.get(`shards_${member.id}-${message.guild.id}`) + "<:EV_Shard:776100019907592192>"

      const roleColor =
      message.guild.me.displayHexColor === "#000000"
        ? "#ffffff"
        : message.guild.me.displayHexColor;
        
      if(!shards || shards === undefined) {
        var embede = new Discord.MessageEmbed()
        .setColor(roleColor)
        .setThumbnail(member.avatarURL({dynamic:"gif"}))
        .setTitle("<:EV_Shard:776100019907592192> Shardy")
        .addField("Username:", member.username, false)
        .addField("Shardy: ", "0", false)
        .setFooter(message.author.username, message.author.avatarURL({dynamic:"gif"}))
        .setTimestamp()
        return message.channel.send(embede)
      }

      var embed = new Discord.MessageEmbed()
        .setColor(roleColor)
        .setThumbnail(member.avatarURL({dynamic:"gif"}))
        .setTitle("<:EV_Shard:776100019907592192> Shardy")
        .addField("Username:", member.username, false)
        .addField("Shardy:", shards, false)
        .setFooter(message.author.username, message.author.avatarURL({dynamic:"gif"}))
        .setTimestamp()
      return message.channel.send(embed)

  }
}