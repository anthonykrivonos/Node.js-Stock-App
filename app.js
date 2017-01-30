const request = require('request');
const yargs = require('yargs');
const stocks = require('./stocks/stocks.js');

const argv = yargs
    .options({
        s: {
            demand: true,
            alias: 'symbol',
            describe: 'Stock symbol to search for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

stocks.stockRequest(argv.s, (error, result) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Symbol: ${result[0].t}`);
        console.log(`Time: ${result[0].ltt}`);
        console.log(`Price: ${result[0].l}`);
    }
});