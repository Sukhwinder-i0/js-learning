// ***************** THIS  --> to refer the same/current context ****************************//

const user = {
    username: "Sukhwinder",
    website: "Github",

    welComeMessage:  function() {
        console.log(`${this.username}, welcome to github`);    // but if user.username -->> No Error [code will be executed]
    }

}

user.welComeMessage()
