
export class ClUsuario {
  id:number;
  email: string;
  nombre: string;
  apellido: string;
  edad: number;
  fonoContacto: number;

  constructor(obj: any) {
    this.id = obj && obj.id || null
    this.email = obj && obj.email || null
    this.nombre = obj && obj.nombre || null
    this.apellido = obj && obj.apellido || null
    this.edad = obj && obj.apellido || null
    this.fonoContacto = obj && obj.fonoContacto || null
   }
}
