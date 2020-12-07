import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb() {

    let players = [
      { id: 1, name: 'Ronaldo', dateOfBirth: '05/02/1985', poste: 'ATK', image: 'assets/images/img_1.jpg' },
      { id: 2, name: 'Messi', dateOfBirth: '24/06/1987', poste: 'ATK', image: 'assets/images/img_2.jpg' },
      { id: 3, name: 'Salah', dateOfBirth: '15/06/1992', poste: 'ATK', image: 'assets/images/img_3.jpg' },
      { id: 4, name: 'Lukaku', dateOfBirth: '13/05/1993', poste: 'ATK', image: 'assets/images/img_1.jpg' },
      { id: 5, name: 'Aguero', dateOfBirth: '02/06/1988', poste: 'ATK', image: 'assets/images/img_2.jpg' },
      { id: 6, name: 'Ben Zema', dateOfBirth: '19/12/1987', poste: 'ATK', image: 'assets/images/img_3.jpg' },
      { id: 7, name: 'El Houni', dateOfBirth: '12/02/1994', poste: 'ATK', image: 'assets/images/img_1.jpg' },
      { id: 8, name: 'Khlifa', dateOfBirth: '14/10/1986', poste: 'ATK', image: 'assets/images/img_2.jpg' }
    ];

    let matches = [
      { id: 1, scoreOne: 2, scoreTwo: 3, teamOne: 'FCB', teamTwo: 'RMD' },
      { id: 2, scoreOne: 1, scoreTwo: 2, teamOne: 'JUV', teamTwo: 'INT' },
      { id: 3, scoreOne: 4, scoreTwo: 4, teamOne: 'LIV', teamTwo: 'MCI' },
      { id: 4, scoreOne: 3, scoreTwo: 1, teamOne: 'EST', teamTwo: 'CA' }
    ]
    

    return { players, matches };

  }
}
