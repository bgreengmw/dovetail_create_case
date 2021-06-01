// This Page Model was set up for UK English. Different page models would be used for different languages

import {t, Selector } from 'testcafe';

const label = Selector('label');
const input = Selector('input');

// Labels with check boxes
class BoxCheck {
    constructor (id, name) {
        this.label    = label.withAttribute('for', id); //label id
        this.checkbox = input.withAttribute('id', id); // checkbox id
        this.labelname = name;
    }
}

// Selection 2 appears as a separate dropdown list based on what is chosen in Selection1
// Additional Details appears as a separate list of items based on what is chosen in Selection2 
class CaseType {
    constructor (selection1, selection2, add_label, add_id) {
        this.selection1 = selection1; // selected item from the list
        this.selection2 = selection2;
        this.add_label = add_label; // Additional Details item label
        this.add_id = add_id; // Additional Details item element id
    }
}

class Status {
    constructor (selection) {
        this.selection = selection; // selected item from the list
    }
}

class Priority {
    constructor (selection) {
        this.selection = selection; // selected item from the list
    }
}

class Severity {
    constructor (selection) {
        this.selection = selection; // selected item from the list
    }
}

class Label {
    constructor (selection) {
        this.selection = selection; // selected item from the list
    }
}

class Toolbox {
    constructor (tool, item) {
        this.tool = tool; // selected tool
        this.item = item; // selected item from a tool dropdon list 
    }
}

class Ellipsis {
    constructor (label_name) {
        this.ellipsis_label = label_name; // label name on list
    }

}
class Page {
    constructor () {
    
    // Create Case entry form
        this.createCaseLabel = Selector('#main div').withText('Create Case');

    // Title entry field and label
        this.titleInput = Selector('#title');     
        this.titleLabel = Selector('label').withExactText('Title');

    // Employee search field and label
        this.employeeInput = Selector('#employeeId-selectized');
        this.employeeLabel = Selector('label').withExactText('Employee')
        this.employeeSelect = Selector('#create-case span');
        this.employeeResult = Selector('.employee-selector').find('div').nth(6);
        this.employeeEllipsis = Selector('.employee-selector').find('i').withText('more_horiz');

    // Concerning Employee search field and label
        this.concernEmployeeInput = Selector('#concerningEmployeeId-selectized');
        this.concernEmployeeLabel = Selector('label').withExactText('Concerning Employee')
        this.concernEmployeeSelect = Selector('#create-case span');
        this.concernEmployeeResult = Selector('.concerning-selector').find('div').nth(6);
        this.concernEmployeeEllipsis = Selector('.concerning-selector').find('i').withText('more_horiz');

    // Ellipsis list items
    this.ellipsisList = [
        new Ellipsis('Preferred Name'),
        new Ellipsis('Primary Phone'),
        new Ellipsis('Primary Email'),
        new Ellipsis('Primary Site'),
        new Ellipsis('Employee Id'),
    ]        

    // Case Type dropdown selection
        this.caseTypeInput = Selector('#create-case div');
        this.caseTypeLabel = Selector('label').withExactText('Case Type');

        // Case Type list of items - Still need to collect element add_id's these elements are current greyed out in the form
        this.caseTypeList = [
            new CaseType('Please Specify','','',''),
            new CaseType('General HR','','',''),
            new CaseType('Benefits','Dental','Review Due Date',''),
            new CaseType('Benefits','Dental','MGR Interview(s) Done',''),
            new CaseType('Benefits','Dental','Employee(s) Inteviews Done',''),
            new CaseType('Benefits','Dental','HR Interview(s) Done',''),
            new CaseType('Benefits','Dental','Was a Benefit Chosen',''),
            new CaseType('Benefits','Dental','Benefit Type Chosen',''),
            new CaseType('Benefits','FMLA','',''),
            new CaseType('Benefits','Medical','Benefit Type Chosen',''),
            new CaseType('Benefits','Other','','',''),
            new CaseType('Benefits','Benefits:Policy','',''),
            new CaseType('Compensation','','',''),
            new CaseType('Employee Relations','Complaint','Witness 1',''),
            new CaseType('Employee Relations','Complaint','Witness 2',''),
            new CaseType('Employee Relations','Corrective Action','',''),
            new CaseType('Employee Relations','Accommodation','',''),
            new CaseType('HRIS','','',''),
            new CaseType('Payroll','','',''),
            new CaseType('Policies','','',''),
            new CaseType('Talent Acquisition','','',''),
            new CaseType('Talent Management','','',''),
            new CaseType('Termination','','Review Due Date',''),
            new CaseType('Time and Attendance','','',''),
            new CaseType('Training','Internal','',''),
            new CaseType('Training','External','',''),
            new CaseType('Test - FAs','','Full Time Employee?',''),
            new CaseType('Test - FAs','','Birthday',''),
            new CaseType('Test - FAs','','Test Attribute',''),
            new CaseType('Test - FAs','','Test Attribute 2',''),
            new CaseType('FA Testing','','birthday',''),
            new CaseType('FA Testing','','garyapitest3',''),
            new CaseType('FA Testing','','required string',''),
            new CaseType('FA Testing','','workgroup list ',''),
            new CaseType('FA Testing','','birthday','')
        ];

    // Additional Details optional list
        this.addDetailsInput = Selector('#create-case label');
        this.addDetailsLabel = Selector('#create-case h2').withText('Additional Details');

    // Status dropdown selection
        this.statusInput = Selector('#status option');
        this.statusLabel = Selector('label').withExactText('Status');
        this.statusSelect = Selector('#status');

        // Status list of items
        this.statusList = [
            new Status('Open'),
            new Status('On Hold'),
            new Status('Waiting'),
            new Status('Resolved: Resolved No - Issues')
        ];

    // Priority dropdown selection
        this.priorityInput = Selector('#priority option');
        this.priorityLabel = Selector('label').withExactText('Priority');
        this.prioritySelect = Selector('#priority');

        // Priority list of items
        this.priorityList = [
            new Priority('Urgent'),
            new Priority('High'),
            new Priority('Medium'),
            new Priority('Low')
        ];

    // Severity dropdown selection
        this.severityInput = Selector('#issueSeverity option');
        this.severityLabel = Selector('label').withExactText('Severity');
        this.severitySelect = Selector('#issueSeverity');

        // Severity list of items
        this.severityList = [
            new Severity('Urgent'), // selected item from the list
            new Severity('High'),
            new Severity('Medium'),
            new Severity('Low')
        ];

    // Checkbox list with labels
        this.boxCheckList = [
            new BoxCheck('isSensitive', 'Sensitive'), //label id, label name
            new BoxCheck('isAvailableInPortal', 'Available in Portal')
        ];

    // Toolbox above Note entr form
        this.toolBoxList = [ 
            new Toolbox('Fullscreen',''),
            new Toolbox('Bold (Ctrl+B)',''),
            new Toolbox('Italic (Ctrl+I)',''),
            new Toolbox('Underline (Ctrl+U)',''),
            new Toolbox('Colours',''),
            new Toolbox('Font Family','Arial'),
            new Toolbox('Font Family','Georgia'),
            new Toolbox('Font Family','Impact'),
            new Toolbox('Font Family','Tahoma'),
            new Toolbox('Font Family','Times New Roman'),
            new Toolbox('Font Family','Verdana'),
            new Toolbox('Font Family','Clear Sans Light'),
            new Toolbox('Font Size','8'),
            new Toolbox('Font Size','9'),
            new Toolbox('Font Size','10'),
            new Toolbox('Font Size','11'),
            new Toolbox('Font Size','12'),
            new Toolbox('Font Size','13'),
            new Toolbox('Font Size','14'),
            new Toolbox('Font Size','18'),
            new Toolbox('Font Size','24'),
            new Toolbox('Font Size','30'),
            new Toolbox('Font Size','36'),
            new Toolbox('Font Size','48'),
            new Toolbox('Font Size','60'),
            new Toolbox('Font Size','72'),
            new Toolbox('Font Size','96'),
            new Toolbox('Align','Align Left'),
            new Toolbox('Align','Align Center'),
            new Toolbox('Align','Align Right'),
            new Toolbox('Align','Align Justify'),
            new Toolbox('Ordered List','Default'),
            new Toolbox('Ordered List','Lower Alpha'),
            new Toolbox('Ordered List','Lower Greek'),
            new Toolbox('Ordered List','Lower Roman'),
            new Toolbox('Ordered List','Upper Alpha'),
            new Toolbox('Ordered List','Upper Roamn'),
            new Toolbox('Unordered List','Default'),
            new Toolbox('Unordered List','Circle'),
            new Toolbox('Unordered List','Disc'),
            new Toolbox('Unordered List','Square'),
            new Toolbox('Insert Table',''),
            new Toolbox('Insert Link (Ctrl+K)',''),
            new Toolbox('Insert Image (Ctrl+P)',''),
            new Toolbox('Insert Video','')
        ];

    // Files upload and drag and drop
        this.filesSelect = Selector('#create-case a').withText('Choose files');
        this.filesText1 = Selector('.add-attachment').withExactText('Choose files');
        this.filesText2 = Selector('span').withExactText('or drag them here');
        this.filesLabel = Selector('#create-case h2').withExactText('Files');

    // Notes
        this.notesInput = Selector('.fr-element').find('div p');

    // Restore Draft button
        this.restoreDraftButton = Selector('#create-case button').withText('Restore Draft');    

    // Label add
        this.labelAdd = Selector('#main i').withText('add');
        this.labelLabel = Selector('#main h5').withExactText('Labels');
        this.labelSelect = Selector('.popover-content').find('div');
        this.labelSelected = Selector('#main div');
        this.labelClose = Selector('.selected-labels').find('i').withText('close');

        //Label add list of items
        this.labelList = [
            new Label('Red'),
            new Label('Brown'),
            new Label('Orange'),
            new Label('Lime'),
            new Label('Green'),
            new Label('Teal'),
            new Label('Blue'),
            new Label('Purple'),
            new Label('Pink'),
            new Label('Magenta'),
            new Label('Black'),
            new Label('Crimson'),
            new Label('Fuschia'),
            new Label('Gold'),
            new Label('Indigo'),
            new Label('Aqua'),
            new Label('Navy'),
            new Label('Tan'),
            new Label('Silver'),
            new Label('Slate')
        ];

    // Matching Solutions oputput
        this.matchOutput = Selector('#main span');
        this.matchLabel = Selector('#main span').withExactText('Matching Solutions');
 
    // Create button
        this.createButton = Selector('#create-case button').withText('Create').nth(1);
        this.createVal = Selector('#main h3');

    // Create and Close button
        this.createCloseButton = Selector('.align-self-end').withText('Create and Close');
        this.createCloseVal = Selector('.status.dt-card').find('span').withText('Closed');


     }
 
}

export default new Page();