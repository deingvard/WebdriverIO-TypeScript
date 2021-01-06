import { expect } from 'chai';
import { loginSteps } from '../steps/LoginSteps';

describe('E2E Tests', () => {
	beforeEach(() => {
		// loginSteps = new LoginSteps();
		loginSteps.init();
		console.log('before each');
	});
	afterEach(() => {
		browser.execute('window.sessionStorage.clear();');
		browser.execute('window.localStorage.clear();');
	});

	it('should have the right title', () => {
		loginSteps.typeUserName();
		browser.pause(100);
	});
});
