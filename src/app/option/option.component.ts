import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  @Input()
  name!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
