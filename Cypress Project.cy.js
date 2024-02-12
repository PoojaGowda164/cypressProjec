//import cypress from 'cypress';
import 'cypress-soft-assertions'
//import { before } from 'cypress/types/lodash';
//import { beforeEach } from 'mocha';
///<reference types="Cypress"/>
///<reference types="Cypress-xpath"/>




describe("Cypress Project", ()=>{

  var jasondata;

  beforeEach(()=>{
cy.fixture('data').then(function(data){

jasondata=data;

})
  })




    var CUSTOMISATION_COST;
    var FIXED_COST;
    var TOTAL_COST;
    var INDICATIVE_DURATION;
    var CUSTOMISATION_COST_2;
    var FIXED_COST_2;
    var TOTAL_COST_2;
    var INDICATIVE_DURATION_2;
    var STUDIO_COST;
    
    
    
    it("1st Case",()=>{

     
        
    cy.viewport(1920, 1080);
    
    cy.visit("https://staging.engineer.ai/home");
    cy.get('.builderNowCta').click();
    cy.get('.closeButton > .icon-cancel').click();
    cy.get('.rightBlock').click();

    cy.get(':nth-child(1) > .templateCard > .header > .actionbx > .morebtn > .icon-plus').click();
    cy.get('.getStart > span').click();
    cy.get('.alreadyHave > .linkcolor').click();
    cy.get('#loginEmailInput').click().type(jasondata.username);  //Enter Username "simplilearnjuly2023@yopmail.com"
    cy.get('.relativeRow > .ng-pristine').type(jasondata.password);    //Enter Password "12345678"
    cy.get('.doneButton').click();
    cy.wait(35000);
    cy.get('.customizeCost > h3 > strong').then(($value)=>{
    
          CUSTOMISATION_COST=$value.text();
         
    
          cy.get('.reusableCost > h3 > strong').then(($value)=>{
    
              FIXED_COST=$value.text();
    
    
                       cy.get('.maxpriceBox > h3 > strong').then(($value)=>{
    
                         TOTAL_COST=$value.text();
        
                
                              cy.get('.durationBox > h3 > strong').then(($value)=>{
    
                            INDICATIVE_DURATION=$value.text();
    
                            cy.get('.nextButton').click();
    
                            cy.get('.builderCarePlus > .sectionIcon > .checkIcon > label').click();
                            //cy.get('.previewBottom > div > .nextButton').click();
    
                            
                            cy.wait(20000);  
                            cy.get('.customizeCost > h3 > strong').then(($value)=>{
    
                             CUSTOMISATION_COST_2=$value.text();
    
                             cy.get('.reusableCost > h3 > strong').then(($value)=>{
    
                                FIXED_COST_2=$value.text();
       
                                cy.get('.builder-care-wrap > strong').then(($value)=>{
    
                                    STUDIO_COST=$value.text();
           
                                    cy.get('.maxpriceBox > h3 > strong').then(($value)=>{
    
                                        TOTAL_COST_2=$value.text();
    
                                        cy.get('.durationBox > h3 > strong').then(($value)=>{
    
                                          INDICATIVE_DURATION_2=$value.text();
      
                                         
    
                                          
                                           
                                           
                                           
                                          cy.get('.customizeCost > h3 > strong').should('contain', CUSTOMISATION_COST);
                                          cy.get('.reusableCost > h3 > strong').should('contain', FIXED_COST);
                                          cy.get('.durationBox > h3 > strong').should('contain',INDICATIVE_DURATION); 
                                          cy.get('.maxpriceBox > h3 > strong').invoke('val').better('equal',TOTAL_COST);
                                          cy.screenshot("Total Cost Not Matching");

                                          //cy.softAssert(TOTAL_COST_2!=TOTAL_COST, "Cost on delivery page not matching with feature page cost");
                                          //cy.get("div[class='maxpriceBox totalCost'] h3 strong").wait(20000).should('contain', TOTAL_COST);
                                          

                                          cy.get('.previewBottom > div > .nextButton').click();

                                          cy.get('.popHolder > .ng-pristine').click().type("Project1");
                                          cy.get('.popHolder > button').click();

                                          cy.get('.costDuration > :nth-child(1) > p > strong').should('contain', CUSTOMISATION_COST_2);
                                          cy.get(':nth-child(2) > p > strong').invoke('val').better('equal',FIXED_COST_2);
                                      
                                          cy.get('.careContentRow > p > strong').invoke('val').better('equal',STUDIO_COST);
                                          cy.get('.detailRow > .ng-star-inserted > strong').invoke('val').better('equal',TOTAL_COST_2);


                            

                                          //cy.get(':nth-child(5) > .boldText').invoke('val').better('equal',INDICATIVE_DURATION_2);
                                          // const ele=cy.get(':nth-child(5) > .boldText');
                                          // let duration=ele.invoke('text');
                                          // cy.log(duration);
                                          //duration.better('equal',INDICATIVE_DURATION_2);
                                         
                                        

                                


                                        
                                            
                                         
                                        
    
                                          
                                          
    
                                           
    
                 
                 
                 
                 
                 
                 
                 
                     
                                            });
               
               
               
               
               
               
               
                   
                                          });
           
           
           
           
           
               
                                      });
       
       
       
       
       
           
                                  }); 
    
    
    
    
    
        
                               });                       
    
                            
                            });
                
                
                
                        });
    
              
                
             });
    
     });
    
    
        
    
     
    
       
       
    
    
     
    
    
     
        
    
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    })
    
    
    
    
    })