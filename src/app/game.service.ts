import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  ListofGames:Game[]=[
    {
      title:'God of War',
      year:2022,
      console:true
    },
    {
      title:'Rocket League',
      year:2014,
      console:true
    }
  
  ]
  get(){
    return this.ListofGames
  }
}
