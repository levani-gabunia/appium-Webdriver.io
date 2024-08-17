import { $ } from '@wdio/globals'
import mainPage from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends mainPage {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
}

export default new SecurePage();
