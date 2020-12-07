import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  match:any={};
  matchForm:FormGroup;
  id:any;
  
  constructor(
    private formbuilder:FormBuilder, 
    private matchService:MatchService, 
    private router:Router, 
    private activated:ActivatedRoute) { }

 
  ngOnInit() {
    // le module ActivatedRoute permet de snapshoter (capturer)
    // l'URL active et mapper pour faire retourner le mapramètre ID
    this.id = this.activated.snapshot.paramMap.get('id');
    this.matchService.getMatchbyId(this.id).subscribe(
      data => {
        console.log('match', data);
        
        this.match = data.match;
      }
    )
    this.matchForm = this.formbuilder.group({
      teamOne:[''],
      teamTwo:[''],
      scoreOne:[''],
      scoreTwo:['']

    })
    
  }

  editMatch() {
    this.matchService.editMatch(this.match).subscribe(
      () => {
        this.router.navigate(['admin']);
      }

    )
  }

}
