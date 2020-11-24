describe('Test 2', () => {
    before(() => {
        cy.eyesOpen({
            appName: 'AppliFashion',
            testName: 'Test 2',
            stepName: 'filter by color',
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

    it('Filtered Product Grid', () => {
        cy.get('#colors__Black').check()
        cy.get('#filterBtn').click()

        cy.eyesCheckWindow({
            target: 'region',
            selector: '#product_grid'
        })
    })
})