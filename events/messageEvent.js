const fs = require('fs');

module.exports = {
    name: 'message',
    execute(message, client) {
        //console.log(message.author);
        // Return early if the message is from a private channel or from the bot itself
        if (!message.guild || message.author.id == process.env.USER_ID) return;

        // Load replies from replies.json file
        const replies = require('../replies.json');

        // Check if the message is from the desired server and channel
        if (message.guild.id === process.env.SERVER_ID && message.channel.id === process.env.CHANNEL_ID) {
            // Check each message in the replies.json file
            for (const item of replies.messages) {
                if (message.content.toLowerCase() === item.message.toLowerCase()) {
                    // Generate a random delay between 1 and 10 seconds (1000 and 10000 milliseconds)
                    const delay = Math.floor(Math.random() * 10000) + 1000;

                    // Reply with the corresponding reply from replies.json after the random delay
                    setTimeout(() => {
                        message.reply(item.reply);
                    }, delay);

                    return; // Stop further processing
                }
            }
        }
    },
};
