import { loginPage } from '../pageobjects/LoginPage';

export class LoginSteps {
	// public loginPage: LoginPage;

	public init() {
		this.navigateToHerokuappDirect();
		// this.loginPage = LoginPage.instance();
		// this.loginPage = new LoginPage();
	}

	public typeUserName() {
		loginPage.enterUsername('tomsmith');
	}

	public navigateToHerokuappDirect() {
		browser.url('/login');
	}
}

export const loginSteps = new LoginSteps();
