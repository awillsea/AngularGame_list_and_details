import { outputAst } from '@angular/compiler';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  
  @Input() TheGame:Game = {
    title:'Fortnite',
    year: 2017,
    console: true
  }
  constructor() { }

  ngOnInit(): void {
  }
  editMode:boolean = false;
  editTitle:string = '';
  editYear:number = 0;
  editConsole:boolean = false;

  @Output() delete: EventEmitter<Game> = new EventEmitter<Game>();

  doDelete(){
    this.delete.emit(this.TheGame)
  }
  editGame(){
    this.editMode = true;
    this.editTitle = this.TheGame.title;
    this.editYear = this.TheGame.year;
    this.editConsole = this.TheGame.console
  }
  saveChanges(){
    this.TheGame.title = this.editTitle;
    this.TheGame.year = this.editYear;
    this.TheGame.console = this.editConsole;
    this.editMode = false;
  }
cancelChanges(){
this.editMode = false;
}
}
