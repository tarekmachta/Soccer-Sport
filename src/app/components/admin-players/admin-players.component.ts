import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-admin-players',
  templateUrl: './admin-players.component.html',
  styleUrls: ['./admin-players.component.css']
})
export class AdminPlayersComponent implements OnInit {

  players: any;
  constructor(private playerService:PlayerService, private router: Router) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(
      data => {
        this.players = data;
      }
    )
  }

  delete(id:string) {
    this.playerService.deletePlayer(id).subscribe(
      () => {
        console.log('player deleted successfully');
        this.router.navigate['admin'];
      }
    )

  }

}
