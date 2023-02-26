class AddEmployeeObject {
  Click_PIM_Nav() {
    cy.get(":nth-child(2) > .oxd-main-menu-item").click();
  }
  Click_Add_Employee() {
    cy.get(".oxd-topbar-body-nav > ul > :nth-child(3)").click();
  }
  Type_Firstname(value) {
    cy.get(
      ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"
    ).type(value);
  }
  Type_Middlename(value) {
    cy.get(":nth-child(2) > :nth-child(2) > .oxd-input").type(value);
  }
  Type_Lastname(value) {
    cy.get(":nth-child(3) > :nth-child(2) > .oxd-input").type(value);
  }
  Check_EmployeeID() {
    cy.get(".oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input");
  }
  Clear_EmployeeID() {
    cy.get(
      ".oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).clear();
  }
  Click_Save() {
    cy.get(".oxd-button--secondary").click();
  }
  Input_Photo(value) {
    cy.fixture(value, { encoding: null }).as("foto");
    cy.get(".oxd-file-div > .oxd-icon-button > .oxd-icon").click();
    cy.get('input[type="file"]').selectFile("@foto", { force: true });
  }
  Click_LoginDetails() {
    cy.get(".oxd-switch-input").click();
  }
  Type_Username(value) {
    cy.get(
      ":nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(value);
  }
  Type_Password(value) {
    cy.get(
      ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(value);
  }
  Type_ConfirmPassword(value) {
    cy.get(
      ".oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(value);
  }
  Click_DisableStatus() {
    cy.get(
      ":nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input"
    ).click();
  }
}

export default AddEmployeeObject;
