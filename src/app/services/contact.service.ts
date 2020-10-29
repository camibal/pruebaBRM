import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contact: Contact[] = [
    {
      id: 1,
      nombre: 'Camilo Ballesteros',
      telefono: '3208764736',
      fecha_nacimiento: '03/01/1995',
      direccion: 'manzana L casa 9',
      correo: 'camibal1995@gmail.com'
    },
    {
      id: 2,
      nombre: 'Andres Villalba',
      telefono: '3125963158',
      fecha_nacimiento: '16/12/1991',
      direccion: 'calle 45 # 20-68',
      correo: 'andresvilllaba@gmail.com'
    },
    {
      id: 3,
      nombre: 'Carlos Garcia',
      telefono: '3108764876',
      fecha_nacimiento: '23/06/1998',
      direccion: 'carrera 56 # 23-19',
      correo: 'carlos@outlook.com'
    },
    {
      id: 4,
      nombre: 'Malon Gutierres',
      telefono: '3054689235',
      fecha_nacimiento: '12/08/1978',
      direccion: 'calle 59 # 67-45',
      correo: 'marlon@gmail.com'
    },
    {
      id: 5,
      nombre: 'Amalia Sierra',
      telefono: '3125469761',
      fecha_nacimiento: '04/48/2002',
      direccion: 'carreraq 165 # 27-09',
      correo: 'amalia@gmail.com'
    }
  ];

  constructor() { }

  getUsersFromData(): Contact[] {
    return this.contact;
  }

  addUser(user) {
    user.id = this.contact.length + 1;
    this.contact.push(user);
  }
  updateUser(user: Contact) {
    const index = this.contact.findIndex(u => user.id === u.id);
    this.contact[index] = user;
  }
  deleteUser(user: Contact) {
    this.contact.splice(this.contact.indexOf(user), 1);
  }
}
