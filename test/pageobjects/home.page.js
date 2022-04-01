

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get cookiesDeclineButton () {
        return $('#CybotCookiebotDialogBodyButtonDecline');
    }

    get whatIsNewCloseButton () {
        return $('.button.button-close');
    }

    get createNewContractButton () {
        return $('p=Create A Contract');
    }

    async declineCookies () {
        await this.cookiesDeclineButton.click();
    }

    async closeWhatIsNew () {
        await this.whatIsNewCloseButton.click();
    }

    async goToNewContract () {
        await this.createNewContractButton.click();
    }

    async createNewContract () {
        await this.declineCookies();
        await this.closeWhatIsNew();
        await this.goToNewContract();
    }
}

module.exports = new HomePage();
