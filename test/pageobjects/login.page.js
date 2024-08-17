import { $ } from '@wdio/globals'
import mainPage from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends mainPage{
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get btnLogOut () {
        return $('button[type="logOut"]');
    }

    get btnProfile () {
        return $('button[type="profile"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async logOut() {
        await this.btnSubmit.click()
        await this.logOutSubmit.click();;
    }
}

export default new LoginPage();
