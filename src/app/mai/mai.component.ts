import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mai',
  templateUrl: './mai.component.html',
  styleUrls: ['./mai.component.css']
})
export class MaiComponent implements OnInit {
  @Input()
  name!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
