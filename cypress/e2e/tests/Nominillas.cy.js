
import { NomcenconcerData } from "../Pages/NomcenconcerPage/Nomcenconcer-page.data";
import { NomcenconcerMethods } from "../Pages/NomcenconcerPage/Nomcenconcer-page.methods";
import { NominillasMethods } from "../Pages/Nominillas/Nominillas.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(NomcenconcerData.testSuites.ImpresionNominillas, () => {
  it("Navegar a pantalla selección Nominillas", () => {
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
    Logger.step("Seleccionar link Nominillas");
    NomcenconcerMethods.clicOnNominilla();
    Logger.verification("Verificar que se muestra la página de Impresión de Nominillas");
    NominillasMethods.navigateToNominillasOk()
  });

   it("Seleccionar Nominillas", () => {
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
    Logger.step("Seleccionar link Nominillas");
    NomcenconcerMethods.clicOnNominilla();
    Logger.verification("Verificar que se muestra la página de Impresión de Nominillas");
    NominillasMethods.navigateToNominillasOk()

    Logger.stepNumber(3);
    Logger.step("Seleccionar una Nominilla");
    NominillasMethods.clicOnNominilla();
    Logger.verification("Verificar que se muestra la página de Impresión de Nominillas");
    NominillasMethods.navigateToImpreNominillasOk()
  });

  it("Seleccionar Retribuciones", () => {
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
    Logger.step("Seleccionar link Nominillas");
    NomcenconcerMethods.clicOnNominilla();
    Logger.verification("Verificar que se muestra la página de Impresión de Retribuciones");
    NominillasMethods.navigateToNominillasOk()

    Logger.stepNumber(3);
    Logger.step("Seleccionar una Retribución");
    NominillasMethods.clicOnRetribuciones();
    Logger.verification("Verificar que se muestra la página de Impresión de Retribuciones");
    NominillasMethods.navigateToImpreRetribucionesOk()
  });

  it("Seleccionar Reintegros Cotización", () => {
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
    Logger.step("Seleccionar link Nominillas");
    NomcenconcerMethods.clicOnNominilla();
    Logger.verification("Verificar que se muestra la página de Impresión de Reintegros");
    NominillasMethods.navigateToNominillasOk()

    Logger.stepNumber(3);
    Logger.step("Seleccionar un Reintegro de Cotización");
    NominillasMethods.clicOnReintegros();
    Logger.verification("Verificar que se muestra la página de Reintegros de Cotización");
    NominillasMethods.navigateToImpreReintegrosOk()
  });

  it("Seleccionar Informe de Incidencias", () => {
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
    Logger.step("Seleccionar link Nominillas");
    NomcenconcerMethods.clicOnNominilla();
    Logger.verification("Verificar que se muestra la página de Informe de Incidencias");
    NominillasMethods.navigateToNominillasOk()

    Logger.stepNumber(3);
    Logger.step("Seleccionar un nforme de Incidencias");
    NominillasMethods.clicOnIncidencias();
    Logger.verification("Verificar que se muestra la página de Informe de Incidencias");
    NominillasMethods.navigateToImpreIncidenciasOk()
  });
  
});