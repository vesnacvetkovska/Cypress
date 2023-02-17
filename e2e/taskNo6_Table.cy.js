describe('Table', () => {
  
  it('tablePricePhyton', () => {
    cy.visit ('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('.table-display').scrollIntoView()
    cy.get('.table-display> tbody > tr > td:nth-child(2)').each(($elm, index, $list)=> {
      // text captured from row 
      const text = $elm.text();
      //cy.log(text);

      // element with Phyton course text
      cy.contains('.table-display> tbody > tr > td:nth-child(2)', new RegExp('Master Selenium Automation in simple Python Language'))
      .each($card => {
        cy.wrap($card)

        cy.log($card)
      })
      // matching criteria
      if (text.includes('Master Selenium Automation in simple Python Language')){
         // next sibling captured
         cy.get('.table-display> tbody > tr > td:nth-child(3)')
         .eq(index).then((priceColumn)=> {
            // text of following sibling
            const price = priceColumn.text()
            
            //assertion
            expect(price).to.contains('25');
         })
         
      }
   })
  })
})
