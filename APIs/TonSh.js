/* 
FOR TON TOKENS-
https://api.ton.sh/
   &contractaddress="TONaddress"
   Here we will use the optional field "hash" from getTransaction METHOD_NAME to store and gather the description
*/
    $.getJSON('https://api.ton.sh/getTransactions?address=TONAddress', function (data) {
        var hash = "";
        hash = JSON.parse(data.result);     
    });
