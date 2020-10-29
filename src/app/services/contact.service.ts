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
      edad: 25,
      telefono: '3208764736',
      fecha_nacimiento: '03/01/1995',
      direccion: 'manzana L casa 9',
      correo: 'camibal1995@gmail.com'
    },
    {
      id: 2,
      nombre: 'Andres Villalba',
      edad: 20,
      telefono: '3108764876',
      fecha_nacimiento: '23/06/1998',
      direccion: 'calle 45 # 20-68',
      correo: 'andresvilllaba@gmail.com'
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
