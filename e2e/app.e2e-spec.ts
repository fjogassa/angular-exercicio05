import { AngularTestebootstrapPage } from './app.po';

describe('angular-testebootstrap App', () => {
  let page: AngularTestebootstrapPage;

  beforeEach(() => {
    page = new AngularTestebootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
