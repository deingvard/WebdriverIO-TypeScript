import { Page } from './Page';

export class LoginPage extends Page {
	get usernameInput() {
		return $('#username');
	}

	public enterUsername(username: string) {
		this.usernameInput.setValue(username);
	}

	constructor() {
		super();
	}

	public static instance() {
		let page = new LoginPage();
		page.verifyIamOnPage();
		return page;
	}
}
