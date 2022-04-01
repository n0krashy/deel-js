

const Page = require('../page');
const Calendar = require('../../assists/calendar');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FixedRateBasicPage extends Page {
    /**
     * define selectors using getter methods
     */
    get name () {
        return $('[name="name"]');
    }

    get scope () {
        return $('textarea[name="scope"]');
    }

    get defaultState () {
        return $('div[data-qa="contractor-tax-residence-province"]');
    }

    get defaultCountry () {
        return $('div[data-qa="contractor-tax-residence"] div[class="deel-ui__select__input-container"]');
    }

    get submitButton () {
        return $('//button[@type="submit"]');
    }

    async setCountry (country) {
        await this.defaultCountry.click();
        const myCountry = await $(`div=${country}`);
        myCountry.click();
    }

    async setState (state) {
        await this.defaultState.click();
        const myState = await $(`div=` + state);
        myState.click();
    }

    async setContractName (contractName) {
        await this.name.setValue(contractName);
    }

    async setScope (scope) {
        await this.scope.setValue(scope);
    }

    async setDay () {
        await Calendar.selectYesterday();
    }

    async submit () {
        await this.submitButton.click();
    }

    async fillMandatoryFields (contractName, country, state, scope) {
        await this.setContractName(contractName);
        await this.setCountry(country);
        await this.setState(state);
        await this.setScope(scope);
        await this.setDay();
        await this.submit();
    }
}

module.exports = new FixedRateBasicPage();
