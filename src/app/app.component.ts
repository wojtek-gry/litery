import {Component, Input} from '@angular/core';
import {questionsList} from "./fullQuestions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  question = questionsList[0];
}
