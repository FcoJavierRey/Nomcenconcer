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

   static VerNominillasLink() {
    Nominillaslements.Menu.Nominillas.should('exist')
 }

}