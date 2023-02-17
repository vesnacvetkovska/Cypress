describe('Proto Commerce test suit', () => {
   
    it("Calendar recursive for Inline Datepicker",()=>{
        cy.visit('https://demos.jquerymobile.com/1.4.5/datepicker/')
        const clickVisibleButton = () => {
            cy.get('.ui-datepicker-title').then( $mainContainer => {
                const monthYear = $mainContainer.children().text().trim()
                
                if ( !(monthYear==='December2018')) {
                    cy.get('.ui-datepicker-prev').click()
                    clickVisibleButton();    
                }
            });
        }
      
        clickVisibleButton()
        //select 16 th day from the month
        cy.get('a.ui-state-default.ui-btn').eq(15).click()
        cy.get('a.ui-state-default.ui-btn').eq(15).should(($el)=>{
            expect($el).to.have.class('ui-btn-active')
        })
        cy.get('#InlineDatepicker~div>div>input').should('have.value','12/16/2018')

    })



    it ('15 clicks',()=>{
        cy.visit('./countClicks.html')
        const clickButton = () => {
        cy.get('#demo').then( $clickCount => {
            const count = $clickCount.text()
            
            if ( !(count==='15')) {
                cy.get('body > button').click()
                clickButton();    
            }
            });
    }
        clickButton()
    });

     
  it ('tablePricePhyton', () => {
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

        //cy.log($card)
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