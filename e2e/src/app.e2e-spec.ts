import { AppPage } from './app.po';

describe('When loading the main view, it ', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display right title', () => {
    page.navigateTo('/');
    expect(page.getParagraphText()).toEqual('Superloop - TODOs');
  });

  it("should show six todos", () => {
    let todos = element.all(by.css("tbody tr"));
    expect(todos.count()).toEqual(6);
  });

  it("should display the first todo (Pending) correctly", () => {
    let todoRow = element.all(by.css("tbody tr")).get(0);
      expect(todoRow.getText()).toEqual("1 Plan something This is a simple TODOs 10/05/2018\nPending");
  });

  it("should display the fourth todo (Done) correctly", () => {
    let todoRow = element.all(by.css("tbody tr")).get(3);
      expect(todoRow.getText()).toEqual("4 Maybe code something This is the real challange 31/03/2018 Done");
  });

  it("should display the add button", () => {
    expect(element(by.css(".btn-add")).isDisplayed()).toBeTruthy(); // Checking if element is displayed
    expect(element(by.css(".btn-add")).getText()).toEqual("Add new"); // Check if display text is correct
  });

});
