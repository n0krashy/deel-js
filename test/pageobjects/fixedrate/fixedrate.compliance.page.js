

const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FixedRateCompliancePage extends Page {
    /**
     * define selectors using getter methods
     */

    get submitButton () {
        return $('button[data-qa="create-contract"]');
    }

    async submit () {
        await this.submitButton.click();
    }
}

module.exports = new FixedRateCompliancePage();
