describe("Amazon Sayfasina Giris",()=>{//Test case

it("Tarayiciyi baslat ve Amazon sayfasini ac",()=>{
//Tarayiciyi baslatir ve Amazon sayfasini acar    
        cy.visit("/")//sayfaya gidilir
});


it("Cerezleri kabul et",()=>{//Steps
//Cerezleri kabul et butonuna tiklar
        cy.xpath("//input[@id='sp-cc-accept']").click();
});


it('Url ve Title kontrol et', () => {
//Url icinde amazon olmali        
        cy.url().should('include', 'amazon');
//Title icinde Amazon olmali        
        cy.title().should('include', 'Amazon');
});


it('Arama kutusuna bir urun yaz',()=>{
//Arama kutusuna "Samsung S23 Ultra" yazip Enter tusuna basar    
        cy.get('#twotabsearchtextbox').type('Samsung S23 Ultra{enter}');//seleniumdaki sendkeys yerine type kullanilir

//Cerezleri kabul et butonuna tiklar
        cy.xpath("//input[@id='sp-cc-accept']").click();
});


it('Anasayfaya geri don',()=> {
//Tum urunleri alip ilk urune tiklar    
//    cy.get('.s-result-list .s-result-item').eq(0).click(); eq secili elementleri sirasina gore belirli bir indexe gore secmemizi saglar

cy.go('back');//bir adim geri
//cy.go('forward'); bir adim ileri
});
 

it('Kategori secim kutusunda Elektronik sec', () => {
        cy.xpath("//input[@id='sp-cc-accept']").click();//Cerez kapatir
        cy.get('#searchDropdownBox').select('Elektronik');//dropdowndan Elektronik secer
});


it('Profilim sekmesine gec', () => {
        cy.get('#nav-link-accountList').click();
});


it('Bir hesap olusturunuz', () => {
//Belirtilen metni iceren bir HTML elementini secer        
        cy.contains("Amazon hesabınızı oluşturun").click();  

        cy.get(':nth-child(1) > :nth-child(2) > .a-form-label')
        .should("contain","Ad - Soyad")//Bu komut dogrulama komutudur. Seleniumdaki assert

//      cy.get('[for="ap_email"]')
//      .should("have.text","Cep telefonu numarası veya e-posta") Burada textin yanlarindaki bosluklardan dolayi failed verir

        cy.get('[for="ap_email"]')
        .should("be.visible","Cep telefonu numarası veya e-posta")//Burada bosluklar olsa da direkt text gorunur mu diye bakar gorunurse passed verir

//      cy.contains("Cep telefonu numarası veya e-posta").should('be.visible') Boyle de kullanilabilir passed verir
});



})


describe.only("Amazon Urun Arama",function () {//.only sadece Test case calisir

it('Ana sayfayi ziyaret et', () => {
        cy.visit("/")        
        cy.xpath("//input[@id='sp-cc-accept']").click();
});


it('Arama kutusunu bul ve urun adini gir', () => {
        const urunAdi = "alcatel 2019G";//String ifadesi olarak kullanilir
        cy.get('#twotabsearchtextbox').type(urunAdi).type('{enter}');
        cy.xpath("//input[@id='sp-cc-accept']").click();
});


it('Arama sonuclarini dogrula', () => {
        cy.get('.sg-col-inner')//class name aldik
        .should("have.length",35);//Secilen sayilarin sayisini dogrula
});

})