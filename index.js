class User {
    message;
    username;

    constructor() {
        this.message = "Hello World"
        console.log(this.message)
    }

    getUserName() {
    }

    setUserName(name) {
      this.username = name
    }

    getUserStatus() {

    }
}


module.export = User;
