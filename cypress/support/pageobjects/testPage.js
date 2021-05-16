/// <reference types = "Cypress" />
/* global Given, Then, And, Then */

import testElements from '../elements/testElements'
const testelements = new testElements
const url = Cypress.config("baseUrl")

class TestPage {

    acessarSite(){
        cy.visit(Url)
        cy.wait(2000)
        
    }

    clicarReportagem(){
        cy.get (testelements.clicarReportagem.contains('i-amphtml-fill-content i-amphtml-replaced-content')).clik ()
        cy.wait(2000)
    }
    validarReportagem(){
        cy.get(testelements.validarTitulo()).contains('São Paulo empata no fim com Corinthians, mas tabu continua')
    }
}
export default TestPage;
