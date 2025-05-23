export class NomcenconcerElements {
  static get Menu() {
    return {
      get  Nominillas() {
        return cy.contains('font', 'Nominillas');
        
      },

       get  CertificadosRenta() {
        return cy.contains('font', 'Certificados de la Renta');
        
      },
           
    };
  }
  
   static get NoPermisos(){
    return cy.contains('td', 'No tiene permisos en esta aplicación');
  }
 static get signedUser() {
    return cy.contains('a', 'Inicio');
  }

}
