export class Nominillaslements {
  static get Menu() {
    return {
      get  Nominillas() {
        return cy.contains('font', 'Nominillas').first();
        
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
           
    }
}
}
