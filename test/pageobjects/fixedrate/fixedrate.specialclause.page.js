

const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FixedRateBasicPage extends Page {
    /**
     * define selectors using getter methods
     */

    get addSpecialClauseButton () {
        return $('button[data-qa="add-a-special-clause"]');
    }

    get specialClauseTextField () {
        return $('<textarea />');
    }

    get submitButton () {
        return $('button[data-qa="next"]');
    }

    async setSpecialClause (specialClause) {
        await this.specialClauseTextField.setValue(specialClause);
    }

    async clickAddSpecialClause () {
        await this.addSpecialClauseButton.click();
    }

    async submit () {
        await this.submitButton.click();
    }

    async addSpecialClause (specialClause) {
        await this.clickAddSpecialClause();
        await this.setSpecialClause(specialClause);
        await this.submit();
    }
}

module.exports = new FixedRateBasicPage();
