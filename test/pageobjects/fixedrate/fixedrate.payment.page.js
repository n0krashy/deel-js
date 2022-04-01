

const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FixedRatePaymentPage extends Page {
    /**
     * define selectors using getter methods
     */
    get rate () {
        return $('[name="rate"]');
    }

    get currency () {
        return $('div[data-qa="currency-select"]');
    }

    get frequency () {
        return $('//div[contains(text(),"Monthly")]');
    }

    get submitButton () {
        return $('//button[@type="submit"]');
    }

    async setCurrency (currency) {
        await this.currency.click();
        const myCurrency = await $(`div=` + currency);
        myCurrency.click();
    }

    async setFrequency (frequency) {
        await this.frequency.click();
        const myFrequency = await $(`div=` + frequency);
        myFrequency.click();
    }

    async setRate (rate) {
        await this.rate.setValue(rate);
    }

    async submit () {
        await this.submitButton.click();
    }

    async fillMandatoryFields (rate, currency, frequency) {
        await this.setRate(rate)
        await this.setCurrency(currency);
        await this.setFrequency(frequency);
    }
}

module.exports = new FixedRatePaymentPage();
