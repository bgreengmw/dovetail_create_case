import { Selector } from 'testcafe';
import page from './CreateCase_PageModelUK';
import { login, logout } from './helper.js';
import employee from './employee_data.json';
import concern_employee from './concern_employee_data.json';

fixture `Dovetail Create Case`
    .page `https://dev.dovetailnow.com/agent/login`
//----------------------------------------------------------------------------------------------------------------
// The Dovetail Create Case fixture includes all the tests for creating and validating the Create Case form.
// Refer to other fixtures for data driven tests for the Create Case form.
//----------------------------------------------------------------------------------------------------------------
// Login to the website using a helper function 
    .beforeEach( async t => {
            await login('English (United Kingdom)','annagreen','annagreen'); //language, username, password
    })

// Logout of the website using a helper function 
    .afterEach( async t => {
            await logout(); 
    });

//----------------------------------------------------------------------------------------------------------------
// Create Case Happy Path Test
// 
// Simple test to create a case with some minimal validation on labels and returned results. More extensive  
// validation tests are included in this fixture after this test.  These test may be turned on by removing the
// .skip after the test.skip entry.
// Imports ./CreateCase_PageModel and single entry ./employee_data.json and ./concern_employee_data.json files
// used for the date search fields.
//----------------------------------------------------------------------------------------------------------------
test('Create Case Happy Path Test', async t => {

// Select Create then Case from the Create dropdown menu
    console.log(" - Select Create Case");
    await t
        .click(Selector('#navbarSupportedContent a').withText('Create'))
        .click(Selector('#navbarSupportedContent a').withText('Case'))

// Validate we are on the Create Case form        
        .expect(page.createCaseLabel.exists).ok(); 

// Populate the Case fields
    console.log(" - Populate Case Fields");

// "Title" field
    await t        
        .typeText(page.titleInput, 'IT ') 
        .typeText(page.titleInput, 'Mnager', { replace: true }) // overwrote then deliberately misstyyped then corrected input text
        .typeText(page.titleInput, 'a', { caretPos: 1 })

        // Validate the Title field has "Manager" in it after overwrite and correction 
        .expect(page.titleInput.value).eql('Manager')

        // Validate label text is "Title"
        .expect(page.titleLabel.exists).ok();

// "Employee" search entry
    await t
        .click(page.employeeInput)
        .typeText(page.employeeInput, employee.name)
        .click(page.employeeSelect.withText(employee.name))
        .expect(page.employeeResult.textContent).contains(employee.resultText)
 
        // Validate label "Employee"
        .expect(page.employeeLabel.exists).ok()
        
// Select elipses to the right of the search entry
        .click(page.employeeEllipsis)

        // Validate the Prefeered name is "Barrett Test"         
        .expect((Selector('tbody').withText('Barrett Test')).exists).ok()
    
// "Concerning Employee" search entry
    await t
        .click(page.concernEmployeeInput)
        .typeText(page.concernEmployeeInput, concern_employee.name)
        .click(page.concernEmployeeSelect.withText(concern_employee.name))
        .expect(page.concernEmployeeResult.textContent).contains(concern_employee.resultText)

        // Validate label "Concerning Employee"
        .expect(page.concernEmployeeLabel.exists).ok()

// Select elipses to the right of the search entry
        .click(page.concernEmployeeEllipsis)

        // Validate the Prefeered name is "Gary Cox" 
        .expect((Selector('tbody').withText('Gary Cox')).exists).ok() 


// "Case Type" dropdown selection
        .click(page.caseTypeInput.withText('Please Specify').nth(5))
        .click(page.caseTypeInput.withText('Benefits').nth(7))
        .click(page.caseTypeInput.withText('Dental').nth(5))
        .click(page.caseTypeInput.withText('Medical').nth(7))

        .expect(page.caseTypeLabel.exists).ok()

        .expect(page.addDetailsLabel.exists).ok()
        .expect(page.addDetailsInput.withText('Benefit Type Chosen').exists).ok()

// "Status" dropdown selection
        .click(page.statusSelect)
        .click(page.statusInput.withText('On Hold'))
        .expect(page.statusLabel.exists).ok()
        
// "Priority" dropdown selection
        .click(page.prioritySelect)
        .click(page.priorityInput.withText('High'))
        .expect(page.priorityLabel.exists).ok()

// "Severity" dropdown selection
        .click(page.severitySelect)
        .click(page.severityInput.withText('Low'))
        .expect(page.severityLabel.exists).ok();

// "Sensitive" and "Available In Portal" check and Uncheck the two checkboxes
        for (const labelBox of page.boxCheckList) {
            await t
                .click(labelBox.label)
                .expect(labelBox.checkbox.checked).ok()
                .click(labelBox.checkbox)
                .expect(labelBox.checkbox.checked).notOk()
                .expect(labelBox.label.textContent).eql(labelBox.labelname);
        }

// "Notes" enter bold text "Test note." in the notes field
    await t
        .click('#bold-1 .fas.fa-bold')
        .click(page.notesInput)
        .typeText(page.notesInput, 'Test note.')

// "Files" select a bbc.txt file to upload
        .click(page.filesSelect)
        .setFilesToUpload('#create-case .uppy-FileInput-input', ['_uploads_\\bbc.txt'])
        .expect(page.filesLabel.exists).ok()
        .expect(page.filesText1.exists).ok()
        .expect(page.filesText2.exists).ok()

// "Label" add a label 
        .click(page.labelAdd)
        .click(page.labelSelect.withAttribute('data-text','Green'))
        .click(page.labelLabel)
        .expect(page.labelLabel.exists).ok()
        .expect(page.labelSelected.withText('Green').exists).ok()
        .click(page.labelClose)

// "Matching Solutions" check entries
        .expect(page.matchLabel.exists).ok()
        .expect(page.matchOutput.withExactText('2').exists).ok();
//        .expect((Selector('#main a').withText('benefits')).exists).ok()

// "Create" button select to create the case
    console.log(" - Click Create Button");
    await t
        .click(page.createButton)
        .wait(4000) //explicit wait for case to be created

// "Manager" case created
        // Validate the case was created 
        .expect(page.createVal.withText('Manager').exists).ok();


// "Create and Close button Test"
// The Create and Close button requires a Title and Employee minimum. 
// It will instantly create and close the case.

// Select Create then Case from the Create dropdown menu
    console.log(" - Select Create Case");
    await t
        .click(Selector('#navbarSupportedContent a').withText('Create'))
        .click(Selector('#navbarSupportedContent a').withText('Case'))

// Validate we are on the Create Case form        
        .expect(page.createCaseLabel.exists).ok(); 

// Populate the Case fields
    console.log(" - Populate Case Fields");

// "Title" field
    await t        
        .typeText(page.titleInput, 'IT ') 
        .typeText(page.titleInput, 'Mnager', { replace: true }) // overwrote then deliberately misstyyped then corrected input text
        .typeText(page.titleInput, 'a', { caretPos: 1 })

        // Validate the Title field has "Manager" in it after overwrite and correction 
        .expect(page.titleInput.value).eql('Manager')

        // Validate label text is "Title"
        .expect(page.titleLabel.exists).ok();

// "Employee" search entry
    await t
        .click(page.employeeInput)
        .typeText(page.employeeInput, employee.name)
        .click(page.employeeSelect.withText(employee.name))
        .expect(page.employeeResult.textContent).contains(employee.resultText)
 
        // Validate label "Employee"
        .expect(page.employeeLabel.exists).ok()

// "Create and Close" button select to create the case
    console.log(" - Click Create and Close Button");
    await t
        .click(page.createCloseButton)
        .wait(4000) //explicit wait for case to be created

// "Manager" case closed
        // Validate the case was created 
        .expect(page.createCloseVal.exists).ok();

})

//----------------------------------------------------------------------------------------------------------------
// "Create and Close button Test"
// The Create and Close button requires a Title and Employee minimum. 
// It will instantly create and close the case.
//
// Imports ./CreateCase_PageModel.
//----------------------------------------------------------------------------------------------------------------
test('Create and Close button Test', async t => {

// Select Create then Case from the Create dropdown menu
    console.log(" - Select Create Case");
    await t
        .click(Selector('#navbarSupportedContent a').withText('Create'))
        .click(Selector('#navbarSupportedContent a').withText('Case'))

// Validate we are on the Create Case form        
        .expect(page.createCaseLabel.exists).ok(); 

// Populate the Case fields
    console.log(" - Populate Case Fields");

// "Title" field
    await t        
        .typeText(page.titleInput, 'IT ') 
        .typeText(page.titleInput, 'Mnager', { replace: true }) // overwrote then deliberately misstyyped then corrected input text
        .typeText(page.titleInput, 'a', { caretPos: 1 })

        // Validate the Title field has "Manager" in it after overwrite and correction 
        .expect(page.titleInput.value).eql('Manager')

        // Validate label text is "Title"
        .expect(page.titleLabel.exists).ok();

// "Employee" search entry
    await t
        .click(page.employeeInput)
        .typeText(page.employeeInput, employee.name)
        .click(page.employeeSelect.withText(employee.name))
        .expect(page.employeeResult.textContent).contains(employee.resultText)
 
        // Validate label "Employee"
        .expect(page.employeeLabel.exists).ok();
        
// "Create and Close" button select to create the case
    console.log(" - Click Create and Close Button");
    await t
        .click(page.createCloseButton)
        .wait(4000) //explicit wait for case to be created

// "Manager" case closed
        // Validate the case was created 
        .expect(page.createCloseVal.exists).ok();

})

//----------------------------------------------------------------------------------------------------------------
// Create Case All Labels and Elements Exist Test
// 
// Validates all labels and elements exist on the page.
// Imports ./CreateCase_PageModel.
//----------------------------------------------------------------------------------------------------------------
test.skip('Create Case Elements Exist Test', async t => {
})

//----------------------------------------------------------------------------------------------------------------
// Create Case Dropdown Elements Test
// 
// Validates all dropdown elements and values on the page.
// Imports ./CreateCase_PageModel.
//----------------------------------------------------------------------------------------------------------------
test.skip('Create Case Dropdown Elements Test', async t => {
})

//----------------------------------------------------------------------------------------------------------------
// Create Case Search Selection Elements Test
// 
// Validates all Search Selection elements and values on the page.
// Imports ./CreateCase_PageModel and multiple entry ./employee_data.json and ./concern_employee_data.json files
// used for the date search fields.
//----------------------------------------------------------------------------------------------------------------
test.skip('Create Case Search Selection Elements Test', async t => {
})

//----------------------------------------------------------------------------------------------------------------
// Create Case Notes Toolbar Elements Test
// 
// Validates all the Toolbar elements and Toolbar functions associated with the Notes form on the page.
// Imports ./CreateCase_PageModel
//----------------------------------------------------------------------------------------------------------------
test.skip('Create Case Notes Toolbar Elements Test', async t => {
})

//----------------------------------------------------------------------------------------------------------------
// Create Case Negative Testing
// 
// Negative testing includes testing field limits, illegal entries, etc. on this page
// Validates error handling
// Imports ./CreateCase_PageModel
//----------------------------------------------------------------------------------------------------------------
test.skip('Create Case Negative Testing', async t => {
});