fetch("https://api.nftport.xyz/v0/nfts/contract_address/token_id?chain=ethereum", {
  "method": "GET",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Your API key"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
