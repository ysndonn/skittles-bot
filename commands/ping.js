module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
       
        if(message.member.roles.cache.has('765609896535523328')){
            
        }
        if(message.member.roles.cache.has('765609896535523328')){
            message.channel.send('pong!');



        } else {
            message.channel.send('You dont have sufficient permissions to use this command.');
            
        }
        
    }
}