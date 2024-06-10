import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuarios: Usuario[] = [
    {usuario: 'jperez', nombre: 'Juan', apellido: 'perez', sexo: 'Masculino'},
    {usuario: 'adimaria', nombre: 'Angel', apellido: 'Di María', sexo: 'Masculino'},
    {usuario: 'rdepaul', nombre: 'Rodrigo', apellido: 'De Paul', sexo: 'Masculino'},
    {usuario: 'lmessi', nombre: 'Lionel Andrés', apellido: 'Messi', sexo: 'Masculino'},
    {usuario: 'laimar', nombre: 'Luciana', apellido: 'Aimar', sexo: 'Femenino'},
  
  ];
  constructor() { }

  getUsuario() {
    return this.listUsuarios.slice();
  }

  deleteUsuario(index: number) {
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario) {
    this.listUsuarios.unshift(usuario);
  }
}
