describe('Test 1', () => {
    before(() => {
        cy.eyesOpen({
            appName: 'AppliFashion',
            testName: 'Test 1',
            stepName: 'main page',
            browser: [
                { width: 1200, height: 800, name: 'chrome' }
            ]
        })

        cy.visit('/tlcHackathonDev.html')
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
