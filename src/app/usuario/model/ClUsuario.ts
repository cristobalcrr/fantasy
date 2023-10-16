
export class ClUsuario {
    id:number;
    correo: string;
    nombres: string;
    apellidos: string;
    edad: number;
    fonoContacto: number;
    clave: string;
  
    constructor(obj: any) {
      this.id = obj && obj.id || null
      this.correo = obj && obj.correo || null
      this.nombres = obj && obj.nombres || null
      this.apellidos = obj && obj.apellidos || null
      this.edad = obj && obj.edad || null
      this.fonoContacto = obj && obj.fonoContacto || null
      this.clave = obj && obj.clave || null

     }
  }

