import { browser, logging, element, by, $$ } from 'protractor';
import { BlogPage } from './blog.po';

describe('Blog Page', () => {
  let page: BlogPage;
  let logoImg = element(by.className('navbar-logo'));
  let navbarItems = $$('.navbar-nav').$$('.nav-item');


  beforeEach(() => {
    page = new BlogPage();
  });

  it('should display Blog as title in Blog page', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Blog');
  });

  it('should display iamlordsandro logo in Blog page', async () => {
    expect(await logoImg.isDisplayed());
  });

  it('should navigate into About page on clicking the iamlordsandro logo in Blog page', async () => {
    await browser.waitForAngularEnabled(false);
    logoImg.click();
    await browser.waitForAngularEnabled(true);
    expect(await page.getTitleText()).toEqual('About');
  });

  it('should display Blog as title in Blog page after browser refresh', async () => {
    await browser.waitForAngularEnabled(false);
    browser.refresh()
    expect(await page.getTitleText()).toEqual('Blog');
  });

  it('should have About, Blog and Projects in the Navbar options', async () => {
    expect(await navbarItems.getText()).toEqual(['About', 'Blog', 'Projects']);
  });

  it('should have About as first element of the Navbar options', async () => {
    let li = $$('.navbar-nav li').first();
    expect(await li.getText()).toBe('About');
  })

  it('should have Blog as second element of the Navbar options', async () => {
    let li = $$('.navbar-nav li').get(1);
    expect(await li.getText()).toBe('Blog');
  })

  it('should have Projects as last element of the Navbar options', async () => {
    let li = $$('.navbar-nav li').last();
    expect(await li.getText()).toBe('Projects');
  })

  it('should navigate to About page on clicking the About item in the Navbar options', async () => {
    await browser.waitForAngularEnabled(false);
    let li = $$('.navbar-nav li').first();
    li.click();
    await browser.waitForAngularEnabled(true);
    expect(await page.getTitleText()).toEqual('About');
  });

  it('should remain into Blog page on clicking the Blog item in the Navbar options', async () => {
    await browser.waitForAngularEnabled(false);
    let li = $$('.navbar-nav li').get(1);
    li.click();
    await browser.waitForAngularEnabled(true);
    expect(await page.getTitleText()).toEqual('Blog');
  });

  it('should navigate to Projects page on clicking the Projects item in the Navbar options', async () => {
    await browser.waitForAngularEnabled(false);
    let li = $$('.navbar-nav li').last();
    li.click();
    await browser.waitForAngularEnabled(true);
    expect(await page.getTitleText()).toEqual('Projects');
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
