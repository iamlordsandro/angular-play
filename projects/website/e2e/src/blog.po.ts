import { browser, by, element } from 'protractor';

export class BlogPage {
    async navigateTo(): Promise<string> {
        return browser.get('/blog');
    }

    async getTitleText(): Promise<string> {
        return element(by.tagName('wc-lib-page-title')).getText();
    }
}