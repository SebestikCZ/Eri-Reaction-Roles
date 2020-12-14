module.exports = {
    async function verifyOverdrawn(message, amount) {
        const db = require('quick.db');
        let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]).user;
        let author = message.author;
        let shards = db.get(`shards_${author.id}-${message.guild.id}`);
        if (amount > shards) return false;
        else return true;
    }
}
