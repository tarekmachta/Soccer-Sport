import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  //playerUrl = 'api/players';  //adresse
  playerUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }


  getAllPlayers() {
    return this.httpClient.get<{ message: string, players: any }>(`${this.playerUrl}/allPlayers`);
  }

  deletePlayer(id: string) {
    return this.httpClient.delete(`${this.playerUrl}/deletePlayer/${id}`);
  }

  addPlayer(player: any, image: File) {
    let formData = new FormData();
    formData.append('name', player.name);
    formData.append('dateOfBirth', player.dateOfBirth);
    formData.append('poste', player.poste);
    formData.append('image', image);

    return this.httpClient.post(`${this.playerUrl}/addPlayer`, formData);
  }

  editPlayer(match: any) {
    return this.httpClient.put(`${this.playerUrl}/editPlayer/${match._id}`, match);
  }
  getPlayerbyId(id: string) {
    return this.httpClient.get<{ match: any }>(`${this.playerUrl}/displayPlayer/${id}`)
  }


}

