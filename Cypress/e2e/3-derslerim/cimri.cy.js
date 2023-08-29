describe("Cimri Site Testi, ()", ()=> {

beforeEach(() => {
//Her test oncesinde Cimri sitesine git    
    cy.visit("https://www.cimri.com/");
});


/*
afterEach(() => {
//Her test sonrasinda sayfayi yenile
    cy.reload();

});
*/


it('Anasayfanin acildigini dogrulamalidir', () => {
    cy.url().should('eq','https://www.cimri.com/');
//Anasayfanin basligini dogrulamalidir    
    cy.title().should('include','Cimri');
});


it('Arama yapilmalidir ve sonuclar dogrulanmalidir', () => {
    const expectedText = 'Asus rog zephyrus'
    cy.get('.SearchBox_searchBarPlaceholder__bWMWC').click();
    cy.xpath("//input[@id='search-input']").type(expectedText);
    cy.wait(2000);
    cy.get(':nth-child(1) > .SuggestedKeywords_suggestedKeywordListItem__U22A1').click({force:true});//{force:true} sayesinde zorla tiklatiyoruz guclendiriyor
});



});