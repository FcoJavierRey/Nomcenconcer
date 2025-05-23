
import { NomcenconcerData } from "../Pages/NomcenconcerPage/Nomcenconcer-page.data";
import { NomcenconcerMethods } from "../Pages/NomcenconcerPage/Nomcenconcer-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(NomcenconcerData.testSuites.autenticacion, () => {
  it("Inicio de sesión válido", () => {
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
    Logger.step("Navegar a la página de inicio");
    NomcenconcerMethods.navigateToAutenticarOk();

   });

  it("Inicio de sesión inválido", () => {
    Logger.stepNumber(1);
    Logger.step("Navegar a la página de inicio");
    NomcenconcerMethods.navigateToNomcenconcer();

    Logger.stepNumber(2);
    Logger.step("Ingresar un nombre de usuario y/o contraseña inválidos");
    LoginMethods.insertUsername(LoginData.validCredentials.username);
    LoginMethods.insertPassword('contrasenainvalida');

    Logger.stepNumber(3);
    Logger.step('Hacer clic en "Conectar" para iniciar sesión');
    LoginMethods.clickOnLoginButton();
    Logger.verification("Verificar que se muestra un mensaje de error indicando que el inicio de sesión ha fallado");
    LoginMethods.verifyAlert();
  });

});
