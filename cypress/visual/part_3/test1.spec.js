describe('Test 1', () => {
    before(() => {
        cy.eyesOpen({
            appName: 'AppliFashion',
            testName: 'Test 1',
            stepName: 'main page',
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

    it('Main Page', () => {
        cy.eyesCheckWindow({
            target: 'window',
            fully: true
        })
    })
})
