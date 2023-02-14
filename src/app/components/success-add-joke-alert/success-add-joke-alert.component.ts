import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/state.enum';

@Component({
  selector: 'app-success-add-joke-alert',
  templateUrl: './success-add-joke-alert.component.html',
  styleUrls: ['./success-add-joke-alert.component.scss']
})
export class SuccessAddJokeAlertComponent implements OnInit{

  public StateEnum = State;
  public Added = State.Added;
  public Success = State.Success;

  constructor() {}

  ngOnInit(){}
}
