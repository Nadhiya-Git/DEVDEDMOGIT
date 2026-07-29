import { expect } from '@playwright/test';
export class NavigatorLogin{
//constructo
    constructor(page) {
        this.page = page;

        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.login = page.locator("#submitBtn");

        this.title = page.locator(".navbar-brand");
        this.hidepassword = page.locator(".mdi");
    }


async loginWithValidation(username,password) {
        await this.page.goto("https://dev-demo-g7-product.excelacom.in/Businessapp");
    await this.username.fill(username);
    await this.password.fill(password);
    await this.login.click();
    


}
async invalidcredational(username,password){
    await this.page.goto("https://dev-demo-g7-product.excelacom.in/Businessapp")
    await this.username.fill(username)
    await this.password.fill(password);
    await this.login.click();
  
}
async moddulevisibility(){

        await this.page.goto("https://dev-demo-g7-product.excelacom.in/Businessapp")
        await expect( this.title).toHavetext("Galaxy")
    await this.username.fill(username)
    await this.password.fill(password);
    await this.hidepassword.click();
    
    await expect(this.hidepassword).toHaveAttribute("aria-hidden",'true');

if(this.attribute==='true'){
    console.log("password is showing in ui");
}
    
}

}