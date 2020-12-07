import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-admin-matches',
  templateUrl: './admin-matches.component.html',
  styleUrls: ['./admin-matches.component.css']
})
export class AdminMatchesComponent implements OnInit {

  matches: any;
  constructor(private matchService: MatchService, private router: Router) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      data => {
        this.matches = data;
      }
    )
  }

  delete(id:string) {
    this.matchService.deleteMatch(id).subscribe(
      () => {
        console.log('match deleted successfully');
        this.router.navigate(['admin']);
      }
    )
  }

}
