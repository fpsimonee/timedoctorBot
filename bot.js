const fetch = require('node-fetch');
const Botkit = require('./node_modules/botkit/lib/Botkit.js');
const moment = require('moment');
const duration = require("moment-duration-format");

//time doctor api params
// let start_date = '2018-10-01';
// let end_date = '2018-10-02';
const company_id = '297294';
const access_token = 'M2IwNjFlMjc4YTI4YmY1MzVhNDA5YzRhOTE5ODQwNzIwZmU3OTM3NWNmMjA2OWRhNWJhNDlhMjEwODlmYzlmMw';
// 


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

controller.hears(['mes', 'mês'], 'direct_message,direct_mention,mention', function(bot, message) {    
    let start_date = moment().date(1).format('YYYY-MM-DD');
    let end_date = moment().date(31).format('YYYY-MM-DD');
    let total_hours = new Date();
    const url_get_time = 'https://webapi.timedoctor.com/v1.1/companies/297294/worklogs?access_token='+access_token+'&_format=json&start_date='+start_date+'&end_date='+end_date
    console.log("data inicio:"+start_date);
    fetch( url_get_time
         , {method: 'GET'})
    .then(response =>  response.json())
    .then(data =>  { 
        console.log(data); 
        let seconds = data.total;
        let duration = moment.duration(seconds, 'seconds');
        total_hours = duration.format('hh:mm');       
        console.log('logando o valor das horas: '+total_hours);
        var helloText = "Humano sua quantidade de horas no mês é: "+total_hours;
        bot.reply(message, helloText);
    });
});

controller.hears(['semana', 'semana'], 'direct_message,direct_mention,mention', function(bot, message) {    
    let start_date = moment().day(1).format('YYYY-MM-DD');
    let end_date = moment().day(5).format('YYYY-MM-DD');
    let total_hours = new Date();
    const url_get_time = 'https://webapi.timedoctor.com/v1.1/companies/297294/worklogs?access_token='+access_token+'&_format=json&start_date='+start_date+'&end_date='+end_date
    console.log("data inicio:"+start_date);
    fetch( url_get_time
         , {method: 'GET'})
    .then(response =>  response.json())
    .then(data =>  { 
        console.log(data); 
        let seconds = data.total;
        let duration = moment.duration(seconds, 'seconds');
        total_hours = duration.format('hh:mm');       
        console.log('logando o valor da semana: '+total_hours);
        var helloText = "Humano sua quantidade de horas na semana é: "+total_hours;
        bot.reply(message, helloText);
    });
});

controller.hears(['dia', 'dia'], 'direct_message,direct_mention,mention', function(bot, message) {    
    let start_date = moment().format('YYYY-MM-DD');
    let end_date = moment().format('YYYY-MM-DD');
    let total_hours = new Date();
    const url_get_time = 'https://webapi.timedoctor.com/v1.1/companies/297294/worklogs?access_token='+access_token+'&_format=json&start_date='+start_date+'&end_date='+end_date
    console.log("data inicio:"+start_date);
    fetch( url_get_time
         , {method: 'GET'})
    .then(response =>  response.json())
    .then(data =>  { 
        console.log(data); 
        let seconds = data.total;
        let duration = moment.duration(seconds, 'seconds');
        total_hours = duration.format('hh:mm');
        let total_day = moment().set('hour', 8);  
        
        
        console.log('logando o valor do dia: '+total_hours);
        var helloText = "Humano sua quantidade de horas no dia é: "+total_hours;
        bot.reply(message, helloText);
    });
});


controller.hears(['horas hoje', 'horas'], 'direct_message,direct_mention,mention', function(bot, message) {

});