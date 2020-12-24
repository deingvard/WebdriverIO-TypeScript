import { expect } from 'chai';
import { LoginSteps } from '../steps/LoginSteps';

describe('E2E Tests', () => {
	let loginSteps: LoginSteps;

	beforeEach(() => {
		loginSteps = new LoginSteps();
		console.log('before each');
	});
	afterEach(() => {
		browser.execute('window.sessionStorage.clear();');
		browser.execute('window.localStorage.clear();');
	});

	it('should have the right title', () => {
		browser.url('/login');
		loginSteps.typeUserName();

		browser.pause(1500);
	});
});
