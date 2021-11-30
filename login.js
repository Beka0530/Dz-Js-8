class User {
    constructor(username, age, password,gender) {
        this.username = username
        this.age = age
        this.password = password
        this.gender = gender
    }
}


class Login extends User {
    constructor(username, age, password, gender) {
        super(username, age, password, gender);

    }

    _Username = "Bereke"

    Username(){
        console.log(`Username: ${this.username}`)
        if (this._Username) {
            this._Username = "Bereke"
        }else {

        }
    }

    Age() {
        console.log(`Age: ${this.age}`)
    }

    Password() {
        console.log(`Password: ${this.password}`)
    }

}


const login = new Login("beka.janatov", 19, "008678", "Male")
console.log(login)
login.Username()
login.Age()
login.Password()




const plusLogin = () => {
    document.getElementById("enter")

    if (this.username) {
            this.username = "beka.janatov"
    }else {
        if (this.password) {
            this.password = "008678"
        }else {
            // alert("Неверный пароль!")
        }
    }

}

plusLogin()


