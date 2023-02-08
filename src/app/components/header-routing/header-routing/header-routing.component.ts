import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/state.enum';

@Component({
  selector: 'app-header-routing',
  templateUrl: './header-routing.component.html',
  styleUrls: ['./header-routing.component.scss']
})
export class HeaderRoutingComponent implements OnInit{
  public StateEnum = State;
  public Jokes = State.Jokes;
  public MyJokes = State.MyJokes;

  constructor(){}

  ngOnInit(){}
}
