/// <reference types="cypress" />

describe('Positive Login Test', () => {
    it('Success Login', () => {
        cy.login('Admin', 'admin123')

        cy.wait(2000)
        cy.url().should('contain', '/dashboard')
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible')
    })
})

describe('Negative Login Test', () => {
    it('Failed Login with Invalid Username', () => {
        cy.login('xxxxx', 'admin123')

        cy.wait(2000)
        cy.url().should('include', '/login')
        cy.get('.oxd-button').should('be.visible')
    })

    it('Failed Login with Invalid Password', () => {
        cy.login('Admin', 'xxxxx')

        cy.wait(2000)
        cy.url().should('include', '/login')
        cy.get('.oxd-button').should('be.visible')
    })

    it('Failed Login with Empty Username', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()

        cy.wait(2000)
        cy.url().should('include', '/login')
        cy.get('.oxd-button').should('be.visible')

    })

    it('Failed Login with Empty Password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get('.oxd-button').click()

        cy.wait(2000)
        cy.url().should('include', '/login')
        cy.get('.oxd-button').should('be.visible')

    })

    it('Failed Login with Empty Username & Password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com')

        cy.get('.oxd-button').click()

        cy.wait(2000)
        cy.url().should('include', '/login')
        cy.get('.oxd-button').should('be.visible')

    })

    it('Failed Login with Valid Username & Password in Uppercase', () => {
        cy.login('ADMIN', 'ADMIN123')

        cy.wait(2000)
        cy.url().should('include', '/login')
        cy.get('.oxd-button').should('be.visible')
    })
})