import 'cypress-iframe'
describe('WhateLabelMD Automation Testing', function () {

    it('BigEdsMeds Premature Ejaculation', function () {

        cy.visit("https://bigedsmeds.com/")
        cy.wait(2500)
        cy.get('#brxe-pghmxr').click({ force: true })
        cy.get('#brxe-xsxukc').click({ force: true })
        cy.get('#myBtn-mdl').click({force: true})
        cy.wait(1500);

        //Iframe starts Now

        // Registering a custom Cypress command
        Cypress.Commands.add('getIframeBody', () => {
            return cy
                .get('#232985604947874')
                .its('0.contentDocument.body')
                .should('not.be.empty')
                .then(cy.wrap);
        });

        // Usage of the custom command
        cy.getIframeBody().find('#form-pagebreak-next_186').should('be.visible').click();


        cy.getIframeBody().then(iframeBody => {

            // Interact with the specific select element with ID 'input_230'
            cy.wrap(iframeBody).find('select#input_208').select('California (CA)').should('have.value', 'California (CA)');
            cy.wrap(iframeBody).find('#form-pagebreak-next_185').click()
            cy.wrap(iframeBody).find('#first_211').type('MD PRANTO')
            cy.wrap(iframeBody).find('#last_211').type('Hassan')
            cy.wrap(iframeBody).find('#form-pagebreak-next_182').click()
            cy.wrap(iframeBody).find('#input_212').type('prantohasandu27@gmail.com')
            cy.wrap(iframeBody).find('#label_input_213_0').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_181').click()
            cy.wrap(iframeBody).find('#input_214_full').type('8796542345')

            // both checkbox checked or uncheckd
            
            cy.wrap(iframeBody).find('#label_input_215_1').should('not.be.checked')
            cy.wrap(iframeBody).find('#label_input_216_0').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_180').click()

            //Select Month, day, Year
            cy.wrap(iframeBody).find('select#input_102_month').select('November').should('have.value', '11');
            cy.wrap(iframeBody).find('select#input_102_day').select('30').should('have.value', '30');
            cy.wrap(iframeBody).find('select#input_102_year').select('1996').should('have.value', '1996');
            cy.wrap(iframeBody).find('#form-pagebreak-next_116').click();


            //Select Gender
            //cy.wrap(iframeBody.find('select#input_5').select('Male').should('have.value', 'Male').should('not.be.checked')
            cy.wrap(iframeBody).find('select#input_5').select('Male').should('have.value', 'Male');
            cy.wrap(iframeBody).find('#form-pagebreak-next_219').click()

            //Select Prescription Type (Yes/No?)
            cy.wrap(iframeBody).find('#label_input_103_1').should('not.be.checked')
            cy.wrap(iframeBody).find('#label_input_103_0').click()
            cy.wrap(iframeBody).find('#input_104').type('Yes, I have taken prescription')
            cy.wrap(iframeBody).find('#form-pagebreak-next_12').click()
            
            //What is your height??
            cy.wrap(iframeBody).find('select#input_221').select('5 ft 7 in').should('have.value', '5 ft 7 in');
            cy.wrap(iframeBody).find('#form-pagebreak-next_98').click()
            
            //Are you a Diabetic??
            cy.wrap(iframeBody).find('#label_input_223_1').should('not.be.checked')
            cy.wrap(iframeBody).find('#label_input_223_0').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_175').click();

            //Do you have High Blood Pressure / Heart Problems??
            cy.wrap(iframeBody).find('#label_input_224_1').should('not.be.checked')
            cy.wrap(iframeBody).find('#label_input_224_0').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_54').click();

            //Do you have any additional medical conditions?
            cy.wrap(iframeBody).find('#label_input_225_1').should('not.be.checked')
            cy.wrap(iframeBody).find('#label_input_225_0').click({force: true})
            cy.wrap(iframeBody).find('#input_243').type('Yes, I have some medical conditions')
            cy.wrap(iframeBody).find('#form-pagebreak-next_23').click();

            //Are you allergic to any medications?
            cy.wrap(iframeBody).find('#label_input_226_1').should('not.be.checked')
            cy.wrap(iframeBody).find('#label_input_226_0').click({force: true})
            cy.wrap(iframeBody).find('#input_242').type('Yes, I have some allergic medical conditions')
            cy.wrap(iframeBody).find('#form-pagebreak-next_26').click(); 
            
            //Have you recently experienced any allergy symptoms?
            cy.wrap(iframeBody).find('#label_input_227_1').should('not.be.checked')
            cy.wrap(iframeBody).find('#label_input_227_0').click({force: true})
            cy.wrap(iframeBody).find('#input_241').type('Yes, I experienced some of them')
            cy.wrap(iframeBody).find('#form-pagebreak-next_28').click(); 

            //Have you seen a doctor in the last 12 months?
            cy.wrap(iframeBody).find('#label_input_228_1').should('not.be.checked')
            cy.wrap(iframeBody).find('#label_input_228_0').click({force: true})
            cy.wrap(iframeBody).find('#form-pagebreak-next_46').click(); 

            //Have you taken P.E. medicine before?
            cy.wrap(iframeBody).find('#label_input_229_1').should('not.be.checked')
            cy.wrap(iframeBody).find('#label_input_229_0').click({force: true})
            cy.wrap(iframeBody).find('#input_240').type('Yes, I have taken')
            cy.wrap(iframeBody).find('#form-pagebreak-next_33').click(); 

            //Before ejaculation, do you ever have trouble getting or maintaining an erection that is satisfying enough for sex?
            cy.wrap(iframeBody).find('#label_input_230_1').should('not.be.checked')
            cy.wrap(iframeBody).find('#label_input_230_0').click({force: true})
            cy.wrap(iframeBody).find('#form-pagebreak-next_130').click();  
            
            //Select your blood pressure reading taken within the last 6 months?
            cy.wrap(iframeBody).find('#label_input_231_0').should('not.be.checked')
            cy.wrap(iframeBody).find('#label_input_231_1').click({force: true})
            cy.wrap(iframeBody).find('#label_input_231_2').should('not.be.checked')
            cy.wrap(iframeBody).find('#label_input_231_3').should('not.be.checked')
            cy.wrap(iframeBody).find('#form-pagebreak-next_132').click(); 

            //Do you have premature ejaculation or do you ejaculate sooner than you or your partner desires during sex?
            cy.wrap(iframeBody).find('#label_input_232_0').click()
            cy.wrap(iframeBody).find('#label_input_232_1').should('not.be.checked')

            //Checking with Everytime
            cy.wrap(iframeBody).find('#label_input_233_0').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_135').click(); 
            cy.wrap(iframeBody).find('#form-pagebreak-back_137').click({force: true}); 

            //Checking with sometimes
            cy.wrap(iframeBody).find('#label_input_233_1').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_135').click();
            cy.wait(1000);
            cy.wrap(iframeBody).find('#form-pagebreak-back_137').click({force: true});

            //checking with hardly ever
            cy.wrap(iframeBody).find('#label_input_233_2').click()
            cy.wrap(iframeBody).find('#form-pagebreak-next_135').click(); 

            //Are you stressed, bothered, or frustrated due to issues with ejaculations?
            cy.wrap(iframeBody).find('#label_input_234_1').should('not.be.checked')
            cy.wrap(iframeBody).find('#label_input_234_0').click({force: true})
            cy.wrap(iframeBody).find('#form-pagebreak-next_137').click(); 

            //When having sex, on average, how long does it take you to ejaculate?
            //Before vaginal or Anal Penetration
            cy.wrap(iframeBody).find('#label_input_235_0').click({force: true})
            cy.wrap(iframeBody).find('#form-pagebreak-next_139').click();  
            cy.wrap(iframeBody).find('#form-pagebreak-back_142').click();

            // 0-2 minutes after
            cy.wrap(iframeBody).find('#label_input_235_1').click({force: true})
            cy.wrap(iframeBody).find('#form-pagebreak-next_139').click();  
            cy.wrap(iframeBody).find('#form-pagebreak-back_142').click();

            // 2-5 minutes after
            cy.wrap(iframeBody).find('#label_input_235_2').click({force: true})
            cy.wrap(iframeBody).find('#form-pagebreak-next_139').click();  
            cy.wrap(iframeBody).find('#form-pagebreak-back_142').click();

            // 5 0r more minutes
            cy.wrap(iframeBody).find('#label_input_235_3').click({force: true})
            cy.wrap(iframeBody).find('#form-pagebreak-next_139').click();  

            //Have you ever or currently have any heart problems (including stent, irregular heart beat), low blood pressure, stroke, or circulation problems?
            cy.wrap(iframeBody).find('#label_input_236_1').should('not.be.checked')
            cy.wrap(iframeBody).find('#label_input_236_0').click({force: true})
            cy.wrap(iframeBody).find('#input_237').type('Yes, I have problems')
            cy.wrap(iframeBody).find('#form-pagebreak-next_142').click();

            //Please confirm that you do not have a history of heart disease
            cy.wrap(iframeBody).find('#label_input_238_1').click({force: true})
            cy.wrap(iframeBody).find('#label_input_238_0').should('not.be.checked')
            cy.wrap(iframeBody).find('#input_239').type('Yes, I have some issues')
            cy.wrap(iframeBody).find('#form-pagebreak-next_144').click();

            //Choose the medicine
            cy.wrap(iframeBody).find('#label_input_218_0').should('not.be.checked')
            cy.wrap(iframeBody).find('#label_input_218_1').click({force: true})
            cy.wrap(iframeBody).find('#label_input_218_2').should('not.be.checked')
            cy.wrap(iframeBody).find('#input_42').click(); 


    }       

}