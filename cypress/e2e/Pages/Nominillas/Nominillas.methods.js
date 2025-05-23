import { NominillasData } from "./Nominillas.data";
import { Nominillaslements } from "./Nominillas.elements";

export class NominillasMethods {
 
static clicOnNominilla() {
   Nominillaslements.Menu.Nominillas.click();
  }

  static clicOnRetribuciones() {
    Nominillaslements.Menu.Retribuciones.click();
  }

   static clicOnReintegros() {
    Nominillaslements.Menu.Reintegros.click();
  }
  
  static clicOnIncidencias() {
    Nominillaslements.Menu.Incidencias.click();
  }

  static navigateToNominillasOk() {
      cy.visit(NominillasData.urlNominillas);
   } 

   static navigateToImpreNominillasOk() {
      cy.request(NominillasData.urlImpreNominillas);
   } 

   static navigateToImpreRetribucionesOk() {
      cy.url().should('include', NominillasData.urlImpreRetribuciones);
   } 

   static navigateToImpreReintegrosOk() {
      cy.url().should('include',NominillasData.urlImpreReintegros);
   } 

     static navigateToImpreIncidenciasOk() {
      cy.url().should('include',NominillasData.urlImpreIncidencias);
   } 

   static VerNominillasLink() {
    Nominillaslements.Menu.Nominillas.should('exist')
 }

}