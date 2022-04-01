

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get contractType () {
        return $('div[data-qa="contract-type"]');
    }

    get contractName () {
        return $('div[class="editable-text"]');
    }

    get rate () {
        return $('div[data-qa="rate"]');
    }

    // milestone
    get amount(){
        return $("p[data-qa='milestone-amount']");
    }

    get milestone(){
        return $("p[data-qa='milestone-description']");
    }

    get country () {
        return $('div[data-qa="contractors-country"]');
    }

    get scope () {
        return $('.scope-text');
    }

    get specialClause () {
        return $('.pre-wrap');
    }
}

module.exports = new LoginPage();
