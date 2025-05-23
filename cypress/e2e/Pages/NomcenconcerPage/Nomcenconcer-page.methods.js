import { NomcenconcerData } from "./Nomcenconcer-page.data";
import { NomcenconcerElements } from "./Nomcenconcer-page.elements";

export class NomcenconcerMethods {
  static navigateToNomcenconcer() {
    cy.clearAllCookies();
    cy.clearLocalStorage()
    cy.visit(NomcenconcerData.url);
 }

static navigateToAutenticarOk() {
    cy.visit(NomcenconcerData.url);
 } 

static clicOnNominilla() {
    NomcenconcerElements.Menu.Nominillas.click();
  }

  static clicOnCertificados() {
    NomcenconcerElements.Menu.CertificadosRenta.click();
  }

  static clicOnRetenciones() {
    NomcenconcerElements.Menu.CertificadosRenta.click();
  }
 static verifySignedUser(username) {
    NomcenconcerElements.signedUser.should('exist');
  }  

  static verifyPermisos() {
    NomcenconcerElements.NoPermisos.should('exist');
  }  
}
