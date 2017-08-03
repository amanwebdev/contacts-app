import { VinovePage } from './app.po';

describe('vinove App', () => {
  let page: VinovePage;

  beforeEach(() => {
    page = new VinovePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
