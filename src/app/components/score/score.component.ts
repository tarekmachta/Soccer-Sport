import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  @Input() x: any;
  constructor() { }

  ngOnInit() {
  }

  resultScore(a: number, b: number) {
    if (a > b) {
      return ['Win', 'green'];
    } else if (a < b) {
      return ['Loss', 'red'];
    } else {
      return ['Draw', 'blue'];
    }
  }

  //scoreColor(a:number, b:number) {
  // if (a>b) {
  //  return 'green';
  //  } else if (a<b) {
  //    return 'red';
  //  } else {
  //   return 'blue';
  //   }

  //  }
}
