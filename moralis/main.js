/* Moralis init code */
const serverUrl = "https://fayclz18xahk.usemoralis.com:2053/server";
const appId = "wa0s4USqu1evIJEvlAFwy8PI7BCqqdRdfBhEJOdl";

// sending a token with token id = 1
var id = $("#id").val();
var receiver = $("#receiver").val();
const options = {type: "erc721",  
                 receiver: receiver,
                 contractAddress: "0xa8997ce074bc73fe9ec40406734fe5528ead84b1",
                 tokenId: id}
let result = await Moralis.transfer(options)


Moralis.start({ serverUrl, appId });
/* Authentication code */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({ signingMessage: "Log in using Moralis" })
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console(error);
      });
  }
}
async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}


document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;
