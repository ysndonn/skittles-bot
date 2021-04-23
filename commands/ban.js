module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("Bitch Got The Hammer https://tenor.com/view/elmo-fire-ban-syntheticllama-gif-21044291" );
        }else{
            message.channel.send(`I coudn't ban that member!`);
        }
    }
}