/* global Given, Then, When*/

import testPage from '../pageobjects/testPage'
const PageTest = new testPage



Given("acesso ao site da reportagem", () => {
    PageTest.abrirUrl();
        
})

When("seleciono a reportagem", () =>{
    PageTest.selecionarReportagem();
        
})

Then("valido a reportagem", () =>{
      PageTest.validarReportagem();
})