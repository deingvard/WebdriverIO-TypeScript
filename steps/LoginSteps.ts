import { LoginPage } from '../pageobjects/LoginPage';

export class LoginSteps {
	public loginPage: LoginPage;

	/**
	 * Initialize Login Page
	 */
	public init() {
		this.navigateToHerokuappDirect();
		this.loginPage = new LoginPage();
	}

	/**
	 * Enter data on the Herokuapp page
	 */
	public enterUserName(data) {
		this.loginPage.enterUsername(data);
	}

	/**
	 * Navigate to Herokuapp direct site
	 */
	public navigateToHerokuappDirect() {
		browser.maximizeWindow();
		browser.url('/login');
	}
}

export const loginSteps = new LoginSteps();
