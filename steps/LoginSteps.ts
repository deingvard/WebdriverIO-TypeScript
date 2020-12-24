import { LoginPage } from '../pageobjects/LoginPage';

export class LoginSteps {
	public loginPage: LoginPage;

	// public init() {
	// 	this.loginPage = LoginPage.instance();
	// 	// this.loginPage = new LoginPage();
	// }

	public typeUserName() {
		this.loginPage = LoginPage.instance();
		this.loginPage.enterUsername('tomsmith');
	}
}
