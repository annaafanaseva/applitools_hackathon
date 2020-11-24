describe('Test 3', () => {
    before(() => {
        cy.eyesOpen({
            appName: 'AppliFashion',
            testName: 'Test 3',
            stepName: 'product details',
            browser: [
                { width: 1200, height: 800, name: 'chrome' },
                { width: 1200, height: 800, name: 'firefox' },
                { width: 1200, height: 800, name: 'edgechromium' },
                { width: 1200, height: 800, name: 'safari' },
                { deviceName: 'iPhone X' }
            ]
        })

        cy.visit('/tlcHackathonMasterV2.html')
    })

    after(() => {
        cy.eyesClose()
    })

    it('Product Details', () => {
        cy.get('h3').contains('Appli Air x Night').click()

        cy.eyesCheckWindow({
            target: 'window',
            fully: true
        })
    })
})