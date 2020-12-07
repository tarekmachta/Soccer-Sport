import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { StadiumService } from 'src/app/services/stadium.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: any;
  matches: any;
  stadiums: any;
  constructor(
    private matchService: MatchService, 
    private userService: UserService, 
    private stadiumService: StadiumService,
    private router: Router) { }

  ngOnInit() {

    this.stadiumService.getAllStadiums().subscribe(
      data => {
        console.log('here my stadiums', data.stadiums);
        
        this.stadiums = data.stadiums;
      }
    );
    
    this.getMatches();
    this.getUsers();
  }

  displayID(id: number) {
    alert(id);
  }

  getMatches() {
    this.matchService.getAllMatches().subscribe(
      data => {
        this.matches = data.matches;
      }
    );
  }

  delete(id: string) {
    this.matchService.deleteMatch(id).subscribe(
      () => {
        console.log('match deleted successfully');
        this.getMatches()
      }
    )

  }

  edit(id: any) {
    this.router.navigate([`edit-match/${id}`]);
  }

  display(id: any) {
    this.router.navigate([`display-match/${id}`]);
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data.users;
      }
    );
  }
  updateStadiums(stadiums : any){
    this.stadiums=stadiums
  }
}

