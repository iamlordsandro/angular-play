import { browser, by, element } from 'protractor';

export class NotFoundPage {
    async navigateTo(): Promise<string> {
        return browser.get('/fake-page');
    }

    async getTitleText(): Promise<string> {
        return element(by.tagName('wc-lib-page-title')).getText();
    }
}