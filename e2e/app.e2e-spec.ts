import { ReboucasMaskPage } from './app.po';

describe('reboucas-mask App', () => {
  let page: ReboucasMaskPage;

  beforeEach(() => {
    page = new ReboucasMaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
