import { Selector } from 'testcafe';
import { t } from 'testcafe';

export async function login(language, name, password) {
    await t
		.click('#language-text')
    .click(Selector('li').withText(language))
    .typeText('.required', name)
    .typeText(Selector('.required').nth(1), password)
    .click('#login-button');
};

export async function logout() {
    await t        
        .click(Selector('#navbarSupportedContent ul').withAttribute('class','navbar-nav'))
        .click(Selector('#navbarSupportedContent a').withText('Logout'));
};