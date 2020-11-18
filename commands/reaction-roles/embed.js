const { MessageEmbed } = require("discord.js")

module.exports = {
    name : "reaction-message",
    run : async(client, message) => {
        const embed = new MessageEmbed()
            .setTitle("Reakčné role")
            .setDescription("Reaguj s 🔔 pre získanie role - <@&760153844075200622>\nReaguj s 📆 pre získanie role - <@&760154498089484288>")
            .setColor("GREEN")
    
        const msg = await message.channel.send(embed)
        await msg.react("🔔")
        await msg.react("📆")

    }

}