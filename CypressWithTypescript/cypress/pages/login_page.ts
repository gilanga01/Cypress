// Export the LoginPage class
export class LoginPage {

    loginPage_username = '#uname'
    loginPage_password = '#pwd'
    loginPage_loginButton = '[type="submit"]'

    // Method to navigate to the login page
    navigate(url) {
        cy.visit (url)
    }
     
    // Method to enter the username
    enterUsername(username: string){
        cy.get(this.loginPage_username).type(username)
     }

     

     // Method to enter the password
     enterPassword(password: string) {
        cy.get(this.loginPage_password).type(password)
     }
     
     // Method to click the login button
     clickLogin(){
        cy.get(this.loginPage_loginButton).click();
     }
}
