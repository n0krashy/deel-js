const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const CreatePage = require('../pageobjects/create.page');
const MilestoneBasicPage = require('../pageobjects/milestone/milestone.basic.page');
const MilestonePaymentPage = require('../pageobjects/milestone/milestone.payment.page');
const MilestoneSpecialClausePage = require('../pageobjects/milestone/milestone.specialclause.page');
const MilestoneCompliancePage = require('../pageobjects/milestone/milestone.compliance.page');
const ContractPage = require('../pageobjects/contract.page');
let contractName = "New Milestone";
let country = "United States";
let state = "Colorado";
let scope = "My scope";
let amount = "150";
let currency = "GBP - British Pound";
let milestone = "Milestone 1"
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
        await CreatePage.clickMileStone();
        await expect(browser).toHaveUrl("https://app.letsdeel.com/create/milestone");
    });

    it('should fill first page', async () => {
        await MilestoneBasicPage.fillMandatoryFields(contractName, country, state, scope);
    });

    it('should fill payment page', async () => {
        await MilestonePaymentPage.fillMandatoryFields(currency, milestone, amount);
        amount = await MilestonePaymentPage.amount.getValue();
        await MilestonePaymentPage.submit();
    });

    it('should add a special clause payment page', async () => {
        await MilestoneSpecialClausePage.addSpecialClause(specialClause);
    });

    it('should create the contract', async () => {
        await MilestoneCompliancePage.submit();
    });

    it('should verify the contract details', async () => {
        await expect(browser).toHaveUrlContaining('https://app.letsdeel.com/contract/')
        await expect(ContractPage.contractName).toHaveText(contractName);
        await expect(ContractPage.country).toHaveTextContaining(country);
        await expect(ContractPage.country).toHaveTextContaining(state);
        await expect(ContractPage.amount).toHaveTextContaining(amount);
        await expect(ContractPage.milestone).toHaveText(milestone);
        await expect(ContractPage.scope).toHaveTextContaining(scope);
        await expect(ContractPage.specialClause).toHaveText(specialClause);
    });
});