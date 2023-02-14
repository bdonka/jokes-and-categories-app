import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/state.enum';

@Component({
  selector: 'app-success-remove-joke-alert',
  templateUrl: './success-remove-joke-alert.component.html',
  styleUrls: ['./success-remove-joke-alert.component.scss']
})
export class SuccessRemoveJokeAlertComponent implements OnInit{

  public StateEnum = State;
  public Removed = State.Removed;
  public Success = State.Success;

  constructor() {}

  ngOnInit(){}
}
