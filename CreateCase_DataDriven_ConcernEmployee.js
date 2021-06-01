import { Selector } from 'testcafe';
import page from './CreateCase_PageModelUK';
import { login, logout } from './helper.js';
const dataSet = require('./concernEmployeeData.json');

fixture `Dovetail Create Case Data-Driven Concerning Employee Test`
    .page `https://dev.dovetailnow.com/agent/login`;

//----------------------------------------------------------------------------------------------------------------
// Create Case Data-Driven Concerning Employee Test
// 
// This test will create cases using a single Employee Name and Title and cycling through the 
// Concerning Employee Names entries in the imported ./concernEmployeeData.json file.
//----------------------------------------------------------------------------------------------------------------
dataSet.forEach(data => {
    test(`Create Case Data-Driven Concerning Employee Test '${data.name}'`, async t => {
        await t
//----------------------------------------------------------------------------------------------------------------
// Enter test code here
//----------------------------------------------------------------------------------------------------------------
    });
});

