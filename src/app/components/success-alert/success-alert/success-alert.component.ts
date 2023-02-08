import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/state.enum';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent implements OnInit{

  public StateEnum = State;
  public Added = State.Added;
  public Success = State.Success;

  constructor() {}

  ngOnInit(){}
}
