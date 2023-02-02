<reference cypress/>

class HomePage{
  navigatetoHomepage(){
    cy.visit("http://localhost:3000/#")
  }
  clickOnMenuIcon(){
    cy.get('data-testid="MenuIcon"').should(ariaHidden, true).click()
  }
  displayMenuitem(){
    cy.url({decode:true}).should('aria-hidden="true"')
  }
}

export default HomePage