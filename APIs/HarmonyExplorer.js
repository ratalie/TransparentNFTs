/* 
FOR HRC20, HRC721, HRC1155
https://explorer-v2-api.hmny.io/
   ?module=token
   &action=tokeninfo
   &contractaddress="ONEaddress"
   &apikey=YourApiKeyToken 
read OVERVIEW field as per standard 
*/
    var Web3 = require('web3');
    var web3 = new Web3(new Web3.providers.HttpProvider());
    var version = web3.version.api;

    $.getJSON('https://explorer-v2-api.hmny.io/?module=token&action=gettokeninfo&address=ETHAddress', function (data) {
        var tokenInfo = "";
        tokenInfo = JSON.parse(data.result);     
    });
