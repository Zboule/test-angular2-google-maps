import { TestAngular2GoogleMapsPage } from './app.po';

describe('test-angular2-google-maps App', function() {
  let page: TestAngular2GoogleMapsPage;

  beforeEach(() => {
    page = new TestAngular2GoogleMapsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
