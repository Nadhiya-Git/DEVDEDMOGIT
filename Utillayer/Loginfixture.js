import{test as base} from '@playwright/test';
import{TestData} from '../playwright/Utillayer/TestData.json'

export const test=base.extend({


    loginpage: async({page},use)=>{

    
   username=page.locator("#username").fill(TestData.username);
password=page.locator("#password").fill(TestData.password);
login=page.locator("#submitBtn").click();
use(page);
}})
