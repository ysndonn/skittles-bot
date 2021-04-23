const { Permissions } = require("discord.js");

module.exports ={
    name: 'scammer',
    aliases: [],
    permissions: [],
    description: 'open a dwc ticket!',
    async execute(message, args, cmd, client, discord){
        const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);
        channel.setParent('833216185708707881')

        channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: false,
            VIEW_CHANNLE: false
        })
        channel.updateOverwrite(message.author, {
            SEND_MESSAGES: true,
            VIEW_CHANNLE: true,
        });

        const reactionMessage = await channel.send('Please State the @ of the scammer and with proof! The scammer must be in this discord!');

        try{
  
            await reactionMessage.react("🔒")
            await reactionMessage.react("🗑️")
        }catch(err){
            channel.send('Error sending emojis!');
            throw err;
        }
        
        const collector = reactionMessage.createReactionCollector((reaction, user) => 
            message.guild.members.cache.find((member) => member.id === user.id).hasPermission('ADMINISTRATOR'),
            { dispose: true }
        );

        collector.on('collect', (reaction, user) => {
            switch (reaction.emoji.name){
                case "🔒":
                        channel.updateOverwrite(message.author, { SEND_MESSAGES: false});
                        break;
                        case "🗑️":
                            channel.send('Deleting this channel in 5 seconds!');
                            setTimeout(() => channel.delete(), 5000);
                            break;
            }
        });

        message.channel.send(`A middleman will be right with you! ${channel}`).then((msg) => {
            setTimeout(() => msg.delete(), 7000);
            setTimeout(() => message.delete(), 3000)
        }).catch((err) => {
            throw err;
        })
    },
};