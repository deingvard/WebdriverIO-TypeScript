import { expect } from 'chai';
import { loginSteps } from '../steps/LoginSteps';

describe('E2E Tests', () => {
	beforeEach(() => {
		loginSteps.init();
	});
	afterEach(() => {
		browser.execute('window.sessionStorage.clear();');
		browser.execute('window.localStorage.clear();');
	});

	it('Check right title', () => {
		loginSteps.enterUserName('tomsmith');
		browser.pause(100);
	});
});
