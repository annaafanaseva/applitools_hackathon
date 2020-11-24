describe('Test 3', () => {
    before(() => {
        cy.eyesOpen({
            appName: 'AppliFashion',
            testName: 'Test 3',
            stepName: 'product details',
            browser: [
                { width: 1200, height: 800, name: 'chrome' }
            ]
        })

        cy.visit('tlcHackathonMasterV1.html')
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