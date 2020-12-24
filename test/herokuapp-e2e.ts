import { expect } from 'chai';
import loginSteps from '../steps/LoginSteps';

describe('webdriver.io page', () => {
	beforeEach(() => {
		console.log('before each');
	});
	afterEach(() => {
		browser.execute('window.sessionStorage.clear();');
		browser.execute('window.localStorage.clear();');
	});

	it('should have the right title', () => {
		browser.url('/login');
		loginSteps.enterUserName();

		browser.pause(1500);
	});
});
