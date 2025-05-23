
import { LoginData } from "./pages/login/login.data";
import { LoginMethods } from "./pages/login/login.methods";
import { NomcenconcerMethods } from "./Pages/NomcenconcerPage/Nomcenconcer-page.methods";
import { Logger } from "./util/logger";

describe('Nomcenconcer: Login de usuario', ()=>{
    it('Login de usuario'), (username, password)=>{
            Logger.stepNumber(1);
            Logger.step("Navegar a la página de inicio de sesión");
            NomcenconcerMethods.navigateToNomcenconcer();
                    
            Logger.stepNumber(2);
            Logger.subStep("Ingresar un nombre de usuario y contraseña válidos");
            LoginMethods.insertUsername(LoginData.validCredentials.username);
            LoginMethods.insertPassword(LoginData.validCredentials.password);
        
            Logger.stepNumber(3);
            Logger.subStep("Hacer clic en botón Conectar");    
            LoginMethods.clickOnLoginButton();
           
            Logger.stepNumber(4); 
            Logger.subStep("Comprobar que muestra aplicación intranet Nomcenconcer");  
            NomcenconcerMethods.navigateToAutenticarOk();
    }
})