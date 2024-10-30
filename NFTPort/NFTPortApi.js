/* 
FOR -
   &chain=Ethereum, Polygon all supported by NFT Port
   &apikey=YourApiKeyToken 
read OVERVIEW/Or related field as per standard defined by TransparentNFTs to store inclusive data
*/
fetch("https://api.nftport.xyz/v0/nfts/contract_address/token_id?chain=thechain", {
  "method": "GET",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": YourAPIkeyToken
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
