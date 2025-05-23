export class Nominillaslements {
  static get Menu() {
    return {
      get  Nominillas() {
        return cy.contains('font', 'Nominillas').first();
        
      },

       get  Certificados() {
        return cy.contains('font', 'Certificados de la Renta').first();
        
      },

       get  Retribuciones() {
        return cy.contains('font', 'Nómina de Retribuciones').first();
        
      },
       get  Reintegros() {
        return cy.contains('font', 'Reintegro Cotización').first();
        
      },

      get  Incidencias() {
        return cy.contains('font', 'Informe de Incidencias').first();
        
      },
        get  CerficadosRenta() {
        return cy.contains('a', 'Certificado de la renta 2024').first();
        
      },
      
      
           
    }
}
}
