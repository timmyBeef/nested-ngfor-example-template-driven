import { Component, OnInit } from '@angular/core';
import { QuestionAnswersDto } from '../dto/question-answers.dto';
import { QuestionDto } from '../dto/question.dto';
import { AnswerDto } from '../dto/answer.dto';

@Component({
  selector: 'app-nested-ngfor-template-driven',
  templateUrl: './nested-ngfor-template-driven.component.html',
  styleUrls: ['./nested-ngfor-template-driven.component.css']
})
export class NestedNgforTemplateDrivenComponent implements OnInit {

  qaList: QuestionAnswersDto[];

  constructor() { }

  ngOnInit() {

    // init data
    this.qaList = [{
      question: <QuestionDto>{ questionContent: 'Do you have any hobbies?', questionOrder: 0, isDefaut: true },
      answers: [
        <AnswerDto>{ answerContent: 'I like to swim.', isDefaut: true },
        <AnswerDto>{ answerContent: 'I like to play basketball.', isDefaut: false },
        <AnswerDto>{ answerContent: 'I like to play badminton.', isDefaut: false }
      ]
    }];
  }

  addQuestionByIndex(qIndex) {
    const newQ = {
      question: { questionContent: '', questionOrder: null, isDefaut: true },
      answers: []
    };
    this.qaList.splice(qIndex, 0, newQ);

  }

  removeQuestionByIndex(qIndex: number) {
    if (qIndex > -1) {
      this.qaList.splice(qIndex, 1);
    }
  }

  addAns(qIndex: number) {
    const newA = { answerContent: '', isDefaut: false };
    this.qaList[qIndex].answers.push(newA);
  }

  removeAns(answers: any[], aIndex) {
    if (aIndex > -1) {
      answers.splice(aIndex, 1);
    }
  }

}
