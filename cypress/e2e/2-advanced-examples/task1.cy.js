
    // it("test command",()=>{
      // cy.visit('https://example.cypress.io/todo#/');
      
      // cy.get('h1')
      // cy.get('.new-todo').type('qqq')
      // cy.get('a').contains('Completed')
      // cy.get('input')
      // cy.get('div')
    //   cy.get('nav');
    //   cy.get('h1');
    //   cy.get('label');
    //   cy.get('ul');
    //   cy.get('input');
    //   cy.get('a'); 
    //  cy.get('div #navbar');
    //   cy.get('.footer')
    //   cy.get('.container')
    //   cy.get('.view')
    //   cy.get('[style="display: block;"]')
    //   cy.get('label').first();
    //   cy.get('label').last();
    //   cy.get('ul .view');
    //   cy.get('ul > li > .view')
    //   cy.get('label').eq(1);
    //   cy.get('li').eq(1);
    //   cy.get('ul').filter('.todo-list');
    //   cy.get('ul').filter('.navbar-nav');
    //   cy.get('a').filter('.dropdown-toggle')
    //   cy.contains('Pay electric bill')
    //   cy.get('a').contains('All')
    //   cy.get('ul > li > .dropdown-toggle')
    //   cy.get('ul > li > .selected')
    //   cy.get('ul > li > a').contains('All')
    //   cy.get('ul > li > a').contains('GitHub')
    //   cy.get('.navbar-nav').children().eq(2)
    //   cy.get('.navbar-nav').find('.dropdown-toggle')
    //   cy.get('ul').filter('.todo-list').children().contains('Walk the dog')
    // cy.get('ul :nth-child(2)')


    // should 
    // cy.get('.todo-button').should('not.be.visible');
    // cy.contains('All').should('be.visible')
    // cy.get('.todo-list li').first().should('have.text','Pay electric bill').and('contain','electric')
    // cy.get('.todo-list li').first().should('contain','electric')
    // cy.contains('All').should('have.class','selected')
    // cy.get('footer').first().should('have.css','display','block')
    // cy.get('.todo-list li').first().should('have.attr','data-id')
    // cy.contains('All').should('have.attr','class','selected') //for any attribyte
    // cy.get('.new-todo').should('be.empty')
    
      // cy.get('.new-todo', { setTimeout: 5000}).should('be.visible');
      // cy.get('.new-todo').type('new task {enter}')
      // cy.get('.todo-list li').contains('Pay electric bill').parent().within(()=>{
      //   cy.get('input').check()
      // })
      // cy.contains('new task').siblings('input').click()
      // // cy.get('.new-todo').click();
      
      // cy.get('.todo-list').within(()=>{
      //   cy.contains('Pay electric bill').parent().find('input').check()
      // })
// })
context('test example',()=>{
    it('check when add task',()=>{
    cy.visit('https://example.cypress.io/todo#/');
  
    cy.get('.new-todo').type('new task {enter}')
    cy.get('.new-todo').type('new task1 {enter}')
  
    cy.get('.todo-count strong').invoke('text').then((value)=>{
  
    cy.get('.todo-list li').should('have.length',value)

    })
      
  })

  it('wrap and invoke',()=>{

    const x={color1:"red",color2:"blue",func:function(){
      return `${this.color1} ${this.color2}`
    }}

    cy.wrap(x).invoke('func').should('eq','red blue')
    cy.wrap(x).its('color1').should('eq','red')
  })
  
})
