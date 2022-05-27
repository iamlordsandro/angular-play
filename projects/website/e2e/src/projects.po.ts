import { browser, by, element } from 'protractor';

export class ProjectsPage {
    async navigateTo(): Promise<string> {
        return browser.get('/projects');
    }

    async getTitleText(): Promise<string> {
        return element(by.tagName('wc-lib-page-title')).getText();
    }
}