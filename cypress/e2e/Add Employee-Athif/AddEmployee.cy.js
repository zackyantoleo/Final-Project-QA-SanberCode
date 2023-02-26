/// <reference types="cypress" />

import AddEmployeeObject from "../../support/PageObject/AddEmployeeObject";
const AddEmployee = new AddEmployeeObject();

describe("Positive Add Employee", () => {
  it("Success Add Employee", () => {
    cy.login("Admin", "admin123");
    cy.wait(2000);

    AddEmployee.Click_PIM_Nav();
    AddEmployee.Click_Add_Employee();
    cy.wait(2000);
    AddEmployee.Type_Firstname("Sanber");
    AddEmployee.Type_Middlename("Code");
    AddEmployee.Type_Lastname("QA");
    AddEmployee.Input_Photo("foto.jpg");
    cy.wait(3000);
    AddEmployee.Click_Save();
    cy.wait(2000);

    cy.url().should("contain", "/viewPersonalDetails");
  });

  it("Success Add Employee without Photo", () => {
    cy.login("Admin", "admin123");
    cy.wait(2000);

    AddEmployee.Click_PIM_Nav();
    AddEmployee.Click_Add_Employee();
    cy.wait(2000);
    AddEmployee.Type_Firstname("Sanber");
    AddEmployee.Type_Middlename("Code");
    AddEmployee.Type_Lastname("QA");
    AddEmployee.Clear_EmployeeID();
    AddEmployee.Click_Save();
    cy.wait(2000);

    cy.url().should("contain", "/viewPersonalDetails");
  });

  it("Success Add Employee without Middle Name", () => {
    cy.login("Admin", "admin123");
    cy.wait(2000);

    AddEmployee.Click_PIM_Nav();
    AddEmployee.Click_Add_Employee();
    cy.wait(2000);
    AddEmployee.Type_Firstname("Sanber");
    AddEmployee.Type_Lastname("QA");
    AddEmployee.Clear_EmployeeID();
    AddEmployee.Click_Save();

    cy.url().should("contain", "/viewPersonalDetails");
  });
  it("Success Add Employee without Employee ID", () => {
    cy.login("Admin", "admin123");
    cy.wait(2000);

    AddEmployee.Click_PIM_Nav();
    AddEmployee.Click_Add_Employee();
    cy.wait(2000);
    AddEmployee.Type_Firstname("Sanber");
    AddEmployee.Type_Middlename("Code");
    AddEmployee.Type_Lastname("QA");
    AddEmployee.Clear_EmployeeID();
    AddEmployee.Click_Save();

    cy.url().should("contain", "/viewPersonalDetails");
  });

  it("Success Add Employee with Login Details-Status Enable", () => {
    cy.login("Admin", "admin123");
    cy.wait(2000);

    AddEmployee.Click_PIM_Nav();
    AddEmployee.Click_Add_Employee();
    cy.wait(2000);

    AddEmployee.Type_Firstname("Sanber");
    AddEmployee.Type_Middlename("Code");
    AddEmployee.Type_Lastname("QA");
    AddEmployee.Clear_EmployeeID();

    AddEmployee.Click_LoginDetails();
    AddEmployee.Type_Username("zacky1");
    AddEmployee.Type_Password("Zaki12345.");
    AddEmployee.Type_ConfirmPassword("Zaki12345.");
    AddEmployee.Click_Save();

    cy.url().should("contain", "/viewPersonalDetails");
  });

  it("Success Add Employee with Login Details-Status Disable", () => {
    cy.login("Admin", "admin123");
    cy.wait(2000);

    AddEmployee.Click_PIM_Nav();
    AddEmployee.Click_Add_Employee();
    cy.wait(2000);

    AddEmployee.Type_Firstname("Sanber");
    AddEmployee.Type_Middlename("Code");
    AddEmployee.Type_Lastname("QA");
    AddEmployee.Clear_EmployeeID();

    AddEmployee.Click_LoginDetails();
    AddEmployee.Type_Username("zacky2");
    AddEmployee.Type_Password("Zaki12345.");
    AddEmployee.Type_ConfirmPassword("Zaki12345.");
    AddEmployee.Click_DisableStatus();
    AddEmployee.Click_Save();

    cy.url().should("contain", "/viewPersonalDetails");
  });
});
// ============================================================================================================
// ============================================================================================================
describe("Negative Add Employee", () => {
  it("Failed Add Employee without First Name", () => {
    cy.login("Admin", "admin123");
    cy.wait(2000);

    AddEmployee.Click_PIM_Nav();
    AddEmployee.Click_Add_Employee();
    cy.wait(2000);
    AddEmployee.Type_Middlename("Code");
    AddEmployee.Type_Lastname("QA");
    AddEmployee.Click_Save();

    cy.url().should("contain", "/addEmployee");
  });

  it("Failed Add Employee without Last Name", () => {
    cy.login("Admin", "admin123");
    cy.wait(2000);

    AddEmployee.Click_PIM_Nav();
    AddEmployee.Click_Add_Employee();
    cy.wait(2000);
    AddEmployee.Type_Firstname("Sanber");
    AddEmployee.Type_Middlename("Code");
    AddEmployee.Click_Save();

    cy.url().should("contain", "/addEmployee");
  });
  it("Failed Add Employee invalid Photo Format", () => {
    cy.login("Admin", "admin123");
    cy.wait(2000);

    AddEmployee.Click_PIM_Nav();
    AddEmployee.Click_Add_Employee();
    cy.wait(2000);
    AddEmployee.Type_Firstname("Sanber");
    AddEmployee.Type_Middlename("Code");
    AddEmployee.Type_Lastname("QA");
    AddEmployee.Input_Photo("example.json");
    cy.wait(3000);
    AddEmployee.Click_Save();
    cy.wait(2000);

    cy.url().should("contain", "/addEmployee");
  });

  it("Failed Add Employee invalid Username Format", () => {
    cy.login("Admin", "admin123");
    cy.wait(2000);

    AddEmployee.Click_PIM_Nav();
    AddEmployee.Click_Add_Employee();
    cy.wait(2000);

    AddEmployee.Type_Firstname("Sanber");
    AddEmployee.Type_Middlename("Code");
    AddEmployee.Type_Lastname("QA");

    AddEmployee.Click_LoginDetails();
    AddEmployee.Type_Username("123");
    AddEmployee.Type_Password("Zaki12345.");
    AddEmployee.Type_ConfirmPassword("Zaki12345.");
    AddEmployee.Click_Save();

    cy.url().should("contain", "/addEmployee");
  });
  it("Failed Add Employee invalid Password Format", () => {
    cy.login("Admin", "admin123");
    cy.wait(2000);

    AddEmployee.Click_PIM_Nav();
    AddEmployee.Click_Add_Employee();
    cy.wait(2000);

    AddEmployee.Type_Firstname("Sanber");
    AddEmployee.Type_Middlename("Code");
    AddEmployee.Type_Lastname("QA");

    AddEmployee.Click_LoginDetails();
    AddEmployee.Type_Username("zacky");
    AddEmployee.Type_Password("12345678");
    AddEmployee.Type_ConfirmPassword("12345678");
    AddEmployee.Click_Save();

    cy.url().should("contain", "/addEmployee");
  });
  it("Failed Add Employee Unmacth Confirm Password", () => {
    cy.login("Admin", "admin123");
    cy.wait(2000);

    AddEmployee.Click_PIM_Nav();
    AddEmployee.Click_Add_Employee();
    cy.wait(2000);

    AddEmployee.Type_Firstname("Sanber");
    AddEmployee.Type_Middlename("Code");
    AddEmployee.Type_Lastname("QA");

    AddEmployee.Click_LoginDetails();
    AddEmployee.Type_Username("zacky");
    AddEmployee.Type_Password("Zaki12345.");
    AddEmployee.Type_ConfirmPassword("12345678");
    AddEmployee.Click_Save();

    cy.url().should("contain", "/addEmployee");
  });

  it("Failed Add Employee with Existed Username", () => {
    cy.login("Admin", "admin123");
    cy.wait(2000);

    AddEmployee.Click_PIM_Nav();
    AddEmployee.Click_Add_Employee();
    cy.wait(2000);

    AddEmployee.Type_Firstname("Sanber");
    AddEmployee.Type_Middlename("Code");
    AddEmployee.Type_Lastname("QA");

    AddEmployee.Click_LoginDetails();
    AddEmployee.Type_Username("Admin");
    AddEmployee.Type_Password("Zaki12345.");
    AddEmployee.Type_ConfirmPassword("Zaki12345.");
    AddEmployee.Click_Save();

    cy.url().should("contain", "/addEmployee");
  });

  it("Failed Add Employee without Username", () => {
    cy.login("Admin", "admin123");
    cy.wait(2000);

    AddEmployee.Click_PIM_Nav();
    AddEmployee.Click_Add_Employee();
    cy.wait(2000);

    AddEmployee.Type_Firstname("Sanber");
    AddEmployee.Type_Middlename("Code");
    AddEmployee.Type_Lastname("QA");

    AddEmployee.Click_LoginDetails();
    AddEmployee.Type_Password("Zaki12345.");
    AddEmployee.Type_ConfirmPassword("Zaki12345.");
    AddEmployee.Click_Save();

    cy.url().should("contain", "/addEmployee");
  });
  it("Failed Add Employee without Password", () => {
    cy.login("Admin", "admin123");
    cy.wait(2000);

    AddEmployee.Click_PIM_Nav();
    AddEmployee.Click_Add_Employee();
    cy.wait(2000);

    AddEmployee.Type_Firstname("Sanber");
    AddEmployee.Type_Middlename("Code");
    AddEmployee.Type_Lastname("QA");

    AddEmployee.Click_LoginDetails();
    AddEmployee.Type_Firstname("zacky");
    AddEmployee.Type_ConfirmPassword("Zaki12345.");
    AddEmployee.Click_Save();

    cy.url().should("contain", "/addEmployee");
  });
  it("Failed Add Employee without Confirm Password", () => {
    cy.login("Admin", "admin123");
    cy.wait(2000);

    AddEmployee.Click_PIM_Nav();
    AddEmployee.Click_Add_Employee();
    cy.wait(2000);

    AddEmployee.Type_Firstname("Sanber");
    AddEmployee.Type_Middlename("Code");
    AddEmployee.Type_Lastname("QA");

    AddEmployee.Click_LoginDetails();
    AddEmployee.Type_Firstname("zacky");
    AddEmployee.Type_Password("Zaki12345.");
    AddEmployee.Click_Save();

    cy.url().should("contain", "/addEmployee");
  });
});
