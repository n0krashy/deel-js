

const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FixedRateFirstPaymentPage extends Page {
    /**
     * define selectors using getter methods
     */

    get firstPaymentTitle () {
        return $('//h4[normalize-space()="Define first payment date"]');
    }

    get submitButton () {
        return $('//button[@type="submit"]');
    }

    async submit () {
        await this.submitButton.click();
    }
}

module.exports = new FixedRateFirstPaymentPage();
