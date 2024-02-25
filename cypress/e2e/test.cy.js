// it("visit command",()=>{
//   cy.visit('https://www.google.com/search',{
//     qs : {
//       "q" : "cypress"
//     }
//   })
// }) 


it("visit command",()=>{
  cy.visit('https://example.cypress.io/todo#/');
  // cy.get('h1').eq(3)
  // cy.get('input')
  // cy.get('div')
})

context('Actions', () => {
  it("visit command",()=>{
    cy.visit('https://example.cypress.io/todo#/');
    // cy.get('h1').eq(3)
    // cy.get('input')
    // cy.get('div')
  })

  
  
})
