describe('Employee List', () => {
beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
  })

  //Verify Search by Employee Name 
  it('Search by employee name - Names already registered', () => {
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Rebecca')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.contains('Rebecca')
    })
  
  it('Search by employee name - Unregistered Names', () => {
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('D1nd4')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.contains('No Records Found')
    })

  it('Search by employee name - Number', () => {
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('123456')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.contains('No Records Found')
    })

  it('Search by employee name - Symbol', () => {
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('@#$%&')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.contains('No Records Found')
    })

  //Verify Search by Employee Id
  it('Search by employee id - id already registered', () => {
    cy.get(':nth-child(2) > .oxd-input').type('0042')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.contains('0042')
    })

  it('Search by employee name - Unregistered id', () => {
    cy.get(':nth-child(2) > .oxd-input').type('00000000000000')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.contains('No Records Found')
    })
  
  //Verify Search by Employment Status
  it('Search by employee employee status', () => {
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click({force: true})
    cy.contains('Full-Time Contract').click()
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
  })

  // //Verify search by supervisor name
  it('Search by supervisor name - Supervisor name already registered', () => {
    cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Odis Adalwin')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.contains('Odis Adalwin')
    })

  // Verify search by sub unit
  it('Search by sub unit -  Success', () => {
    cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click({force: true})
    cy.contains('Quality Assurance').click()
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    })  

  //Delete one of employee list
  it('Delete - Success', () => {
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1)').click()
    cy.get('.oxd-button--label-danger').click()
    })  
  
  it('Delete - Cancel', () => {
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1)').click()
    cy.get('.oxd-button--text').click()
    })  

  // Edit data 
  it('Edit', () => {
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2)').click({force: true})
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('Antony')
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type('Sinisuka')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('Ginting')
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0123')
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('1999-02-02')
    cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click({force: true})
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
    }) 
  
  it('Edit - Empty employee id', () => {
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2)').click({force: true})
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
      }) 
    
  it('Edit - Employee id already to use', () => {
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2)').click({force: true})
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('0024')
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
    }) 
  
  it('Edit - work email success', () => {
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2)').click({force: true})
    cy.get(':nth-child(2) > .orangehrm-tabs-item').click({force: true})
    cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('dinda@gmail.com')
    cy.get('.oxd-form-actions > .oxd-button').click()
  })

  it('Edit - work email failed', () => {
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2)').click({force: true})
    cy.get(':nth-child(2) > .orangehrm-tabs-item').click({force: true})
    cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('dinda@g')
    cy.get('.oxd-form-actions > .oxd-button').click()
  })

  it('Edit - Job', () => {
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2)').click({force: true}) //masuk ke edit 
    cy.get(':nth-child(6) > .orangehrm-tabs-item').click({force: true}) //masuk ke edit job
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click({force: true}) //edit job title
    cy.wait(3000)
    cy.contains('Account Assistant').click({force: true})
    cy.get('.oxd-form-actions > .oxd-button').click()
  })
  

})