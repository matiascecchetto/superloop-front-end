import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo(url: string) {
    return browser.get(url);
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getElement(selector: string) {
    return element(by.css('app-root ' + selector)).getText();
  }
}
