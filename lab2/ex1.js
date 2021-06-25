/*
Create a simple Node script that converts 'www.miu.edu' domain name to 
the equivalent IP address.(Search and learn 'dns' module, resolve4)
*/


const dns = require('dns');
dns.lookup('www.miu.edu', function (error, address) {
    getAddress(address);
});

function getAddress(address) {
    console.log(address);
}