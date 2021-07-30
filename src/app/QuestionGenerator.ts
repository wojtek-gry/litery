// declare var require: any

import {fileList, File} from "./files";
import {An, Answer, Qu} from "./mai/mai.component";


export class QuestionGenerator {
  title = 'my-app';

  sciezka() {
    let files = fileList.slice();
    let {letter, an} = this.getCorrect(files);

    let files2 = this.removeItem(files, letter);
    let option2 = this.getIncorrectAnswer(files2);
    let option3 = this.getIncorrectAnswer(files2);

    let qu = new Qu(0, letter.imageName, [an, option2, option3]);

    return qu;
  }

  private getCorrect(files: File[]) {
    return this.extracted(files, true);
  }

  private getIncorrectAnswer(files: File[]): Answer {
    return this.extracted(files, false).an;
  }

  private extracted(files: File[], isCorrect: boolean) {
    var ktora = this.losuj(files);
    let letter = files[ktora];
    console.log(letter);
    let answerImage = letter.images[0];
    let an = new An(0, answerImage, isCorrect);
    return {letter, an};
  }

  getA<T>(arr: Array<T>) {
    let min = 0;
    let max = arr.length;
    var number = Math.random() * (max - min) + min;
    console.log(number);
    return Math.round(number);
  }

  losuj<T>(arr: Array<T>) {
    let min = 0;
    let max = arr.length -1;
    var number = Math.random() * (max - min) + min;
    console.log(number);
    return Math.round(number);
  }

  losuj2(min: number, max: number) {
    var number = Math.random() * (max - min) + min;
    console.log(number);
    return Math.round(number);
  }

  removeItem<T>(arr: Array<T>, value: T): Array<T> {
    const index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }


}
