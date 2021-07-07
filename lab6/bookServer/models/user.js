

class User {
    constructor(username, password,role){
        this.username = username;
        this.password = password;
        this.role = role;
    }
    login(){
        return user.find(u => u.username === this.username && u.password === this.password)
    }
    static init(){
        const users = [new User("kisanet", "admin123","admin"), 
                     new User("makele", "kisa234", "user")];
    }

}


module.exports = User;

