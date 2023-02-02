import {Given, When, Then} from "cypress-cucumber-preprocessor"
import { HomePage } from "../Pages/HomePages.spec"


const HomePage = new HomePage()

Given("user navigates to the home page", ()=>{
  HomePage.navigatetoHomepage()
});

When("user clicks on the menu icon", ()=>{
  HomePage.clickOnMenuIcon()
});

Then("Menu modal should display items", ()=>{
  HomePage.displayMenuitems()
});

