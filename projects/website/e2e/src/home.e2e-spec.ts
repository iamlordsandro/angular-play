import { browser, by, element, logging } from 'protractor';
import { HomePage } from './home.po';

describe('Home Page', () => {
  let page: HomePage;
  let logoImg = element(by.tagName('wc-lib-logo'));
  let svgIcon = element(by.tagName('svg'));

  beforeEach(() => {
    page = new HomePage();
  });

  it('should have logo in Home page DOM', async () => {
    expect(await page.getLogoImg()).toEqual('img');
  });

  it('should display logo in Home page', async () => {
    expect(await logoImg.isDisplayed());
  });

  it('should have chevron icon in Home page DOM', async () => {
    expect(await page.getSvgImg()).toEqual('svg');
  });

  it('should display chevron icon in Home page', async () => {
    expect(await svgIcon.isDisplayed());
  });

  it('should navigate to About page on clicking the logo in Home page', async () => {
    await browser.waitForAngularEnabled(false);
    logoImg.click();
    await browser.waitForAngularEnabled(true);
    expect(await page.getTitleText()).toEqual('About');
  });

  it('should navigate to About page on clicking the chevron icon in Home page', async () => {
    await browser.waitForAngularEnabled(false);
    logoImg.click();
    await browser.waitForAngularEnabled(true);
    expect(await page.getTitleText()).toEqual('About');
  });

  it('should navigate to About page on scroll down in Home page', async () => {
    await browser.waitForAngularEnabled(false);
    browser.executeScript('window.scrollTo(0, 0);').then(function () {
      async () => {
        await browser.waitForAngularEnabled(true);
        expect(await page.getTitleText()).toEqual('About');
      }
    });
  });

  it('should navigate to About page on heavy scroll down in Home page', async () => {
    await browser.waitForAngularEnabled(false);
    browser.executeScript('window.scrollTo(0, 1000);').then(function () {
      async () => {
        await browser.waitForAngularEnabled(true);
        expect(await page.getTitleText()).toEqual('About');
      }
    });
  });

  it('should display logo in Home page after browser refresh', async () => {
    browser.refresh()
    expect(await svgIcon.isDisplayed());
  });

  it('should display chevron icon in Home page after browser refresh', async () => {
    browser.refresh()
    expect(await svgIcon.isDisplayed());
  });

  afterEach(async () => {
    await page.navigateTo();
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
