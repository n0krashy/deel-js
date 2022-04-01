

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get fixedRateButton () {
        return $('h4=Fixed Rate');
    }

    get payAsYouGoButton () {
        return $('h4=Pay As You Go');
    }

    get milestoneButton () {
        return $('h4=Milestone');
    }

    async clickFixedRate () {
        await this.fixedRateButton.click();
    }

    async clickMileStone () {
        await this.milestoneButton.click();
    }

    async clickPayAsYouGo () {
        await this.payAsYouGoButton.click();
    }
}

module.exports = new LoginPage();
