import { browser, by, element } from 'protractor';

export class HomePage {
  async navigateTo(): Promise<string> {
    return browser.get('/home');
  }

  async getTitleText(): Promise<string> {
    return element(by.tagName('wc-lib-page-title')).getText();
  }

  async getLogoImg(): Promise<string> {
    return element(by.css('ws-root img')).getTagName();
  }

  async getSvgImg(): Promise<string> {
    return element(by.className('bi-chevron-down')).getTagName();
  }
}
