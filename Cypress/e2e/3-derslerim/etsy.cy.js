describe("Urun ara, Fiyata gore sirala ve Sepete ekle", function() {


    before(()=> {

        //Etsy web sitesine gidilir        
        cy.visit("https://etsy.com");
        cy.url().should("include","etsy");
       

    });


    it('Sayfanin en altina in ve About gorundugunu dogrula', () => {

        cy.scrollTo("bottom");
        cy.get(':nth-child(3) > .wt-hide-xs').should('contain','About');
        cy.contains('About').should('be.visible');
        cy.wait(2000);

    });


    it('Urun ara', () => {

        cy.scrollTo('top');
        cy.get('#global-enhancements-search-query').type('bracelet{enter}');

    });

    
    it('Filtre kisminin secenekleri ve calistini dogrula', () => {

        cy.get('#sortby > .wt-menu__trigger').click();

        cy.wait(2000);

        //Siralama seceneklerini tanimla, kontrol etmek istedigimiz secenekler
        const siralamaSecenekleri = ['Relevancy', 'Lowest Price', 'Highest Price', 'Top Customer Reviews', 'Most Recent']

        siralamaSecenekleri.forEach((secenek) => {//her bir eleman icin dongu 

            cy.get('#sortby > .wt-menu__body a')//elementleri secer

            .contains(secenek)//belirli bir elementi bulmak icin kontrol edilmek isteneni arar

            .should('be.visible')

            .then(() => {//Onceki kodun tamamlanmasi ve beklenen islevi calistirir

                cy.log('"${secenek}" siralama secenegi gorunur.');//her adimi dogrular

            });

        });

        /*
           forEach: Bir dizi veya liste uzerinde iterasyon yapmak icin kullanilan bir dongu yapisidir.
           then: Onceki bir komutun tamamlanmasini bekler ve ardindan belirtilen islevi calistirir.
           cy.log: Bir log mesajini konsola yazdirmak icin kullanilan bir Cypress fonksiyonudur.
           const: Degisken tanimlamak icin kullanilan bir JavaScript anahtar kelimesidir. Sabir (degistirilemez) bir deger atamak icin kullanilir.


        */

    
        
    });

























})