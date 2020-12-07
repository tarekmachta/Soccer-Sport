import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {

  match: any = {};
  id: any;

  constructor(

    private matchService: MatchService,
    private activated: ActivatedRoute) { }


  ngOnInit() {
    // le module ActivatedRoute permet de snapshoter (capturer)
    // l'URL active et mapper pour faire retourner le mapramètre ID
    this.id = this.activated.snapshot.paramMap.get('id');
    this.matchService.getMatchbyId(this.id).subscribe(
      data => {
        this.match = data.match;
      }
    )


  }



}
