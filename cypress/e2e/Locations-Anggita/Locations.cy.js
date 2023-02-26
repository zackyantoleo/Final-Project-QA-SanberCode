describe('Locations List', () => {
beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.wait(2000);
    })

//Show all locations
it('Show all locations', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3) > ul > :nth-child(2)').click()
    })

//New location 
it('Go to new location form page', () => {
    defaultCommandTimeout: 1000
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3) > ul > :nth-child(2)').click()
    cy.get('.oxd-button--secondary').should('have.length', 3).click()
    })

it('New location - Success', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3) > ul > :nth-child(2)').click()
    cy.get('.orangehrm-header-container > .oxd-button--secondary').click()
    cy.wait(2000);

    cy.get(':nth-child(2) > .oxd-input').type('Pakuwon')
    })    

it('Search by Name - data exist', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3) > ul > :nth-child(2)').click()
    cy.get(':nth-child(2) > .oxd-input').type('Pakuwon')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.contains('Texas R&D')
    })

it('Search by City - data exist', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3) > ul > :nth-child(2)').click()
    cy.get(':nth-child(2) > .oxd-input').type('Pakuwon')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.contains('Texas')
    })

it('Search by Name - data non existed', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3) > ul > :nth-child(2)').click()
    cy.get(':nth-child(2) > .oxd-input').type('Surabayan')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.contains('No Records Found')
    })
    
})
