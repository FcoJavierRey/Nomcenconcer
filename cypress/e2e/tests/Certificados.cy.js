
import { NomcenconcerData } from "../Pages/NomcenconcerPage/Nomcenconcer-page.data";
import { NomcenconcerMethods } from "../Pages/NomcenconcerPage/Nomcenconcer-page.methods";
import { NominillasMethods } from "../Pages/Nominillas/Nominillas.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(NomcenconcerData.testSuites.CertificadosRenta, () => {
  it("Navegar a pantalla selección Certificados", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página Sistema Centralizado de Autenticación");
    NomcenconcerMethods.navigateToNomcenconcer();

    Logger.stepNumber(2);
    Logger.step("Ingresar un nombre de usuario y contraseña válidos");
    LoginMethods.insertUsername(LoginData.validCredentials.username);
    LoginMethods.insertPassword(LoginData.validCredentials.password);

    Logger.stepNumber(3);
    Logger.step('Hacer clic en "Conectar" para iniciar sesión');
    LoginMethods.clickOnLoginButton();
      
    Logger.stepNumber(4);
    Logger.step("Navegar a la página de inicio Nomcenconcer");
    NomcenconcerMethods.navigateToAutenticarOk();

    Logger.stepNumber(5);
    Logger.step("Seleccionar link Certificados");
    NomcenconcerMethods.clicOnCertificados();
    Logger.verification("Verificar que se muestra la página de Certificados de Renta");
    NominillasMethods.navigateToCertificadosOk()
  });

   it("Seleccionar Certificados de Renta", () => {
    Logger.stepNumber(1);
    Logger.step("Iniciar sesión en intranet");
    NomcenconcerMethods.navigateToNomcenconcer();
   
    Logger.subStep("Ingresar un nombre de usuario y contraseña válidos");
    LoginMethods.insertUsername(LoginData.validCredentials.username);
    LoginMethods.insertPassword(LoginData.validCredentials.password);
    Logger.subStep('Hacer clic en "Conectar" para iniciar sesión');
    LoginMethods.clickOnLoginButton();
    Logger.subStep("Navegar a la página de inicio Nomcenconcer");
    NomcenconcerMethods.navigateToAutenticarOk();

    Logger.stepNumber(2);
    Logger.step("Seleccionar link Certificados");
    NomcenconcerMethods.clicOnCertificados();
    Logger.verification("Verificar que se muestra la página de Certificados de Renta");
    NominillasMethods.navigateToCertificadosOk()

    Logger.stepNumber(3);
    Logger.step("Seleccionar un Certificado de Renta");
    NominillasMethods.clicOnCertificadosRenta();
    Logger.verification("Verificar que se muestra la página de Impresión de Certificados de la Renta");
    NominillasMethods.navigateToImpreNominillasOk()
  });

  
});