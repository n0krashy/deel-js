const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const CreatePage = require('../pageobjects/create.page');
const FixedRateBasicPage = require('../pageobjects/payasyougo/payasyougo.basic.page');
const FixedRatePaymentPage = require('../pageobjects/payasyougo/payasyougo.payment.page');
const FixedRateFirstPaymentPage = require('../pageobjects/payasyougo/payasyougo.firstpayment.page');
const FixedRateSpecialClausePage = require('../pageobjects/payasyougo/payasyougo.specialclause.page');
const FixedRateCompliancePage = require('../pageobjects/payasyougo/payasyougo.compliance.page');
const ContractPage = require('../pageobjects/contract.page');
const contractType = "Pay As You Go";
let contractName = "New Pay As You Go";
let country = "United States";
let state = "Colorado";
let scope = "My scope";
let rate = "1000";
let currency = "GBP - British Pound";
let frequency = "Week"
let specialClause = "This is special Clause!";

describe('Create a Fixed Term contract', () => {
    it('should login with valid credentials', async () => {
        browser.maximizeWindow();
        await LoginPage.open();
        await expect(LoginPage.btnSubmit.toBeClickable());
        await LoginPage.login('14p8144@eng.asu.edu.eg', '@tKyTTPBB5Y4RRZ');
        await HomePage.cookiesDeclineButton.waitForClickable({ timeout: 20000 });
        await HomePage.whatIsNewCloseButton.waitForClickable({ timeout: 20000 });
        await expect(browser).toHaveUrl("https://app.letsdeel.com/");
    });

    it('should go to create a contract', async () => {
        await HomePage.createNewContract();
        await expect(browser).toHaveUrl("https://app.letsdeel.com/create");
    });

    it('should create a fixed term contract', async () => {
        await CreatePage.clickPayAsYouGo();
        await expect(browser).toHaveUrl("https://app.letsdeel.com/create/pay-as-you-go");
    });

    it('should fill first page', async () => {
        await FixedRateBasicPage.fillMandatoryFields(contractName, country, state, scope);
    });

    it('should fill payment page', async () => {
        await FixedRatePaymentPage.fillMandatoryFields(rate, currency, frequency);
        rate = await FixedRatePaymentPage.rate.getValue();
        await FixedRatePaymentPage.submit();
    });

    it('should skip first payment page', async () => {
        await expect(FixedRateFirstPaymentPage.firstPaymentTitle).toBeDisplayed();
        await FixedRateFirstPaymentPage.submit();
    });

    it('should add a special clause payment page', async () => {
        await FixedRateSpecialClausePage.addSpecialClause(specialClause);
    });

    it('should create the contract', async () => {
        await FixedRateCompliancePage.submit();
    });

    it('should verify the contract details', async () => {
        await expect(browser).toHaveUrlContaining('https://app.letsdeel.com/contract/')
        await expect(ContractPage.contractName).toHaveText(contractName);
        await expect(ContractPage.contractType).toHaveText(contractType);
        await expect(ContractPage.country).toHaveTextContaining(country);
        await expect(ContractPage.country).toHaveTextContaining(state);
        await expect(ContractPage.rate).toHaveTextContaining(rate);
        await expect(ContractPage.rate).toHaveTextContaining(frequency);
        await expect(ContractPage.scope).toHaveTextContaining(scope);
        await expect(ContractPage.specialClause).toHaveText(specialClause);
    });
});