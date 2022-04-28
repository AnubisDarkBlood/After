module.exports = {
    url: `http://www.vracii-lui-zamolxis.ro`,
    elements: {
         mainQueryInput: '[name="s"]',
         SearchGlass: '[class="art-search-button"]',
         SetAmount: '[name="cantitatea"]',
         Bascket: '[src="http://www.vracii-lui-zamolxis.ro/wp-content/uploads/2012/11/addauga_cos.png"]',
         Less: '[src="http://www.vracii-lui-zamolxis.ro/wp-content/uploads/2012/11/minus.png"]',
         Finalizeaza: '[src="http://www.vracii-lui-zamolxis.ro/wp-content/uploads/2012/11/finalizare.png"]',
         Nume: '[class="input-text qty text"]',
    }, 
    commands: [{
        setQuery(value) {
            return this
                .setValue('@mainQueryInput', value)
                
        },
        search() {
            return this
                .click('@SearchGlass')
                .waitForElementVisible('@SearchGlass')
                .setValue('@SetAmount', 2)
                .waitForElementVisible('@Bascket', 1000)
                .click('@Bascket')
                .waitForElementVisible('@Less', 1000)
                .click('@Less')
                .waitForElementVisible('@Less')
                .click('@Finalizeaza')
                .saveScreenshot('./screenshots/screen.png')
        
 },
    }]
    }