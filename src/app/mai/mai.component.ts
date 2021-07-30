import {Component, Input, OnInit} from '@angular/core';

export interface Answer {
  id: number;
  imageName: string;
  isCorrect: boolean;
}
export interface Question {
  id: number;
  imageName: string;
  options: Answer[];
}

@Component({
  selector: 'app-mai',
  templateUrl: './mai.component.html',
  styleUrls: ['./mai.component.css']
})
export class MaiComponent implements OnInit {
  @Input()
  question!: Question;

  constructor() { }

  ngOnInit(): void {
  }

}
