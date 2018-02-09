/*

WHAT IS THIS?

This module demonstrates simple uses of Botkit's `hears` handler functions.

In these examples, Botkit is configured to listen for certain phrases, and then
respond immediately with a single line response.

*/

module.exports = function(controller) {

    controller.hears(['^hello$'], 'direct_message,direct_mention', function(bot, message) {
        bot.reply(message, "Hi there, you're on workspace: " + message.team)
    });


    controller.on('direct_message,direct_mention', function(bot, message) {
        if (matchKeywords(message.text) )
            bot.reply(message, "sentence contains graduation and subject");
        else
            bot.reply(message, "you said " + message.text);
    });

    controller.hears(['^say (.*)','^say'], 'direct_message,direct_mention', function(bot, message) {
        if (message.match[1]) {
             bot.reply(message, "ok, " + message.match[1]);
        } else {
            bot.reply(message, 'I will repeat whatever you say.')
        }
    });


};

var list = ['graduation', 'subject'];

var matchKeywords =  function(message){
    var strings = message.toLowerCase().split(" ");
    var containAll = true;

    for (var l = 0; l < list.length; l++){
        if (!containAll)
            return false;

        var containThis = false;
        for (var s = 0; s < strings.length; s++){
            if (list[l]===strings[s]){
                containThis = true;
                break;
            }
        }

        if(!containThis)
            return false;
    }
    return true;
}
