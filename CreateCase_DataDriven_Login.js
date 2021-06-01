import { Selector } from 'testcafe';
import page from './CreateCase_PageModelUK';
import { login, logout } from './helper.js';
const dataSet = require('./loginData.json');

fixture `Dovetail Create Case Data-Driven Login Test`
    .page `https://dev.dovetailnow.com/agent/login`;

//----------------------------------------------------------------------------------------------------------------
// Create Case Data-Driven Login Test
// 
// This test will Create Cases by cycling through the different login names and password entries in the 
// imported ./loginData.json file.
//----------------------------------------------------------------------------------------------------------------
dataSet.forEach(data => {
    test(`Create Case Data-Driven Login Test '${data.name}'`, async t => {
        await t
//----------------------------------------------------------------------------------------------------------------
// Enter test code here
//----------------------------------------------------------------------------------------------------------------
    });
});