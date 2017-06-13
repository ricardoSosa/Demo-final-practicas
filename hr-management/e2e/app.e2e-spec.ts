import { SkillMatrixPage } from './app.po';

describe('Skill Matrix App', () => {
  let page: SkillMatrixPage;

  beforeEach(() => {
    page = new SkillMatrixPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
