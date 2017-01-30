const request = require('request');

var stockRequest = (symbol, callback) => {
    request({
        url: 'http://finance.google.com/finance/info?client=ig&q=' + symbol,
        json: true
    }, (error, response, body) => {
        if (!error) {
            var data = JSON.parse(body.split('// ')[1]);
            callback(undefined, data);
        } else {
            callback('Stock not found.');
        }
    });
};

module.exports.stockRequest = stockRequest;