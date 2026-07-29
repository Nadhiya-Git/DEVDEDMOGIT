import{test} from '@playwright/test';
import{NavigatorLogin} from '../PageObject/Loginpage.js';
import testdata from '../Utillayer/TestData.json'
for(const data of testdata.logindata){
test(`testwith ${data.username}`,async({page})=>{

const loginTest= new NavigatorLogin(page)
 await loginTest.loginWithValidation(data.username,data.password);

});}