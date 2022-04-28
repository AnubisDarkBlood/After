module.exports = {
    '@tags': ['tincturi'],
    'My first test case'(browser) {
const mainQuery = 'tincturi';

const page = browser.page.contacts();

page
     .navigate()
        .setQuery(mainQuery)
        .search();
      }
}