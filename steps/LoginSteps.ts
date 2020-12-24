import loginPage, { LoginPage } from '../pageobjects/LoginPage';

export class LoginSteps {
	public enterUserName() {
		loginPage.usernameInput.setValue('tomsmith');
	}
}

const loginSteps = new LoginSteps();
export default loginSteps;
