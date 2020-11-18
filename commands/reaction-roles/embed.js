const { MessageEmbed } = require("discord.js")

module.exports = {
    name : "reaction-message",
    run : async(client, message) => {
        const embed = new MessageEmbed()
            .setTitle("Reakčné role")
            .setDescription("Reaguj pre získanie role \n 🔔 - <@&760153844075200622>\n📆 - <@&760154498089484288>\n🎉 - <@&760165732406263888>")
            .setColor("0xa47dff")
    
        const msg = await message.channel.send(embed)
        await msg.react("🔔")
        await msg.react("📆")
        await msg.react("🎉")

    }

}
