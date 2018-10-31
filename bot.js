const fetch = require('node-fetch');
const Botkit = require('./node_modules/botkit/lib/Botkit.js');
const moment = require('moment');

//time doctor api params
let start_date = '2018-10-01';
let end_date = '2018-10-02';
const company_id = '297294';
const access_token = 'M2IwNjFlMjc4YTI4YmY1MzVhNDA5YzRhOTE5ODQwNzIwZmU3OTM3NWNmMjA2OWRhNWJhNDlhMjEwODlmYzlmMw';


var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: 'xoxb-2178085279-468079467107-Hdu4GQ6KdgAYfrBF5KwFbOqO'
}).startRTM();


controller.hears(['oi', 'olá'], 'direct_message,direct_mention,mention', function(bot, message) {
    var helloText = "Olá, humano, como posso ajudar?";

    bot.reply(message, helloText);
});

controller.hears(['horas hoje', 'horas'], 'direct_message,direct_mention,mention', function(bot, message) {
    let total_hours = '';
    console.log(message);
    fetch('https://webapi.timedoctor.com/v1.1/companies/297294/worklogs?access_token='+access_token+'&_format=json&start_date='+start_date+'&end_date='+end_date
         , {method: 'GET'})
    .then(response =>  response.json())
    .then(data =>  { 
        console.log(data); total_hours = data.total;         
        console.log('logando o valor das horas: '+total_hours);
        var helloText = "Quantidade de horas do time doctor "+((total_hours/60)/60);
        bot.reply(message, helloText);
    });
});