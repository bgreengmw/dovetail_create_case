import { Selector } from 'testcafe';
import page from './CreateCase_PageModelUK';
import { login, logout } from './helper.js';
const dataSet = require('./employeeData.json');

fixture `Dovetail Create Case Data-Driven Employee Test`
    .page `https://dev.dovetailnow.com/agent/login`;

//----------------------------------------------------------------------------------------------------------------
// Create Case Data-Driven Employee Test
// 
// This test will create cases using a single Concerning Employee Name and Title and cycling through the 
// Employee Names entries in the imported ./employeeData.json file.
//----------------------------------------------------------------------------------------------------------------
dataSet.forEach(data => {
    test(`Create Case Data-Driven Employee Test '${data.name}'`, async t => {
        await t
//----------------------------------------------------------------------------------------------------------------
// Enter test code here
//----------------------------------------------------------------------------------------------------------------
    });
});