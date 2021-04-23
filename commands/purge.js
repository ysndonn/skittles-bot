module.exports = {
    name: 'purge',
    description: 'Purges Method',
   async execute(message,){
        if(message.member.roles.cache.has("813539773805101127", "813540499100925973", "832870117435768864")){
            const deleteCount = parseInt(args[0], 10);
            const deleteMessage = `Deleted ${deleteCount} messages.`;
            
            if(!deletecount || deletecount > 100 || deletecount <2) return message.reply('I can only delete messasges between 2-100!');


            const fetched = await message.channel.fetchMessages({
                limit: deletecount
            });


            message.channel.bulkDelete(fetched)
            .catch(err => console.log(`Cannot delete messages because of error ${error}`))
            .then(() => message.channel.send(deleteMessage))
            .catch(err => {
             });
        }else {
            message.reply('you do not have permission to use this.');
        }
    }
}
    