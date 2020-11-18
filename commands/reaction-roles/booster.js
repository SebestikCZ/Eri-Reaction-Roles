const { MessageEmbed } = require("discord.js")

module.exports = {
    name : "reaction-message",
    run : async(client, message) => {
        const embed = new MessageEmbed()
            .setTitle("Booster farby")
            .setDescription("Reaguj pre získanie vybranej farby\n 1️⃣ - <@&760149972833665065>\n2️⃣ - <@&760149903266807828>\n 3️⃣ - <@&760149976591892530>\n 4️⃣ - <@&760149978810679328>")
            .setColor("0xa47dff")

        const msg = await message.channel.send(embed)
        await msg.react("1️⃣")
        await msg.react("2️⃣")
        await msg.react("3️⃣")
        await msg.react("4️⃣") 
    }

}