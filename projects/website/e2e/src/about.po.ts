import { browser, by, element } from 'protractor';

export class AboutPage {
    async navigateTo(): Promise<string> {
        return browser.get('/about');
    }

    async getTitleText(): Promise<string> {
        return element(by.tagName('wc-lib-page-title')).getText();
    }

}