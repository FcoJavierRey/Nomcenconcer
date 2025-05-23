export class NomcenconcerData {

static get url() {
    return "https://wwwpre.educacion.org/educacion/pa/nomcenconcer/scripts/login.asp?";
  };

  
  static get testSuites() {
    return {
      registro: "Registro",
      autenticacion: "Nomcenconcer: Autenticación",
      ImpresionNominillas: "Nomcenconcer: Impresión de Nominillas",
      GeneracionNominillas: "Nomcenconcer: Certificados de Renta",
    };
  }

  
}
