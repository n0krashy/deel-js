

const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MilestonePaymentPage extends Page {
    /**
     * define selectors using getter methods
     */
    get amount () {
        return $("input[data-qa='milestone-amount']");
    }

    get currency () {
        return $('div[data-qa="currency-select"]');
    }

    get milestone () {
        return $("input[data-qa='milestone-description']");
    }

    get submitButton () {
        return $('//button[@data-qa="next"]');
    }

    async setCurrency (currency) {
        await this.currency.click();
        const myCurrency = await $(`div=` + currency);
        myCurrency.click();
    }

    async setMilestone (milestone) {
        await this.milestone.setValue(milestone);
    }

    async setAmount (amount) {
        await this.amount.setValue(amount);
    }

    async submit () {
        await this.submitButton.click();
    }

    async fillMandatoryFields (currency, milestone, amount) {
        await this.setCurrency(currency);
        await this.setMilestone(milestone);
        await this.setAmount(amount)
    }
}

module.exports = new MilestonePaymentPage();
