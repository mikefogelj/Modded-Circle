//This class is a model for the data that we are using in firebase and is not actually called
export class signInData {
    private email: string;
    private password: string;
    //Constructor for mock model
    constructor(email: string, password: string){
        this.email = email;
        this.password = password;
    }
    //getter for email
    getEmail() :string {
        return this.email;
    }
    //getter for password
    getPassword() :string {
        return this.password; 
    }
}