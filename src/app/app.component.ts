import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';

  calcul(a: number, b: number) {
    return a + b;
  }

  minElt(T) {
    let min = T[0];
    for (let i = 0; i < T.lenght; i++) {
      if (T[i] < min) {
        min = T[i];
      }
    }
    return min;
  }

  nbrChar(T) {
    let T1 = Array();
    for (let i = 0; i < T.length; i++) {
      let ch = T[i] + ' : ' + T[i].length;
      T1.push(ch);
    }
    return T1;
  }

}

