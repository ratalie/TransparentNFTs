/* 
FOR ERC1155 
https://api.polygonscan.com/api
   ?module=token
   &action=tokeninfo
   &contractaddress="MATICaddress"
   &apikey=YourApiKeyToken
read OVERVIEW field as per standard 
*/
var Web3 = require('web3');
    var web3 = new Web3(new Web3.providers.HttpProvider());
    var version = web3.version.api;

    $.getJSON('https://api.polygonscan.com/api/?module=token&action=gettokeninfo&address=ETHAddress', function (data) {
        var tokenInfo = "";
        tokenInfo = JSON.parse(data.result);     
    });
