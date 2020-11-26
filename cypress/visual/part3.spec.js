describe('Part 3', () => {
    beforeEach(() => {
        cy.visit('/tlcHackathonMasterV2.html')

        cy.eyesOpen({
            appName: 'AppliFashion',
            browser: [
                { width: 1200, height: 800, name: 'chrome' },
                { width: 1200, height: 800, name: 'firefox' },
                { width: 1200, height: 800, name: 'edgechromium' },
                { width: 1200, height: 800, name: 'safari' },
                { deviceName: 'iPhone X' }
            ]
        })
    })

    afterEach(() => {
        cy.eyesClose()
    })

    it('Test 1', () => {
        cy.eyesCheckWindow({
            tag: 'main page',
            target: 'window',
            fully: true
        })
    })

    it('Test 2', () => {
        cy.get('#colors__Black').check()
        cy.get('#filterBtn').click()

        cy.eyesCheckWindow({
            tag: 'filter by color',
            target: 'region',
            selector: '#product_grid'
        })
    })

    it('Test 3', () => {
        cy.get('h3').contains('Appli Air x Night').click()

        cy.eyesCheckWindow({
            tag: 'product details',
            target: 'window',
            fully: true
        })
    })
})
