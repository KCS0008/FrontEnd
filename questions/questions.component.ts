import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private answerService: AnswerService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submit() {
    this.answerService.sendAnswers(this.answers)
      .subscribe(response => {
        console.log(response);
      });
  }
  answers= {
    question1: '',
    question2: '',
    question3 : '',
    question4 :'',
    question5 :'',
    question6 :''
  };
 result: number=0;

  calculateIndex() {
    let totalScore = 0;

    if (this.answers.question1 === 'yes') {
      totalScore += 50;
    }
    if (this.answers.question2 === 'yes') {
      totalScore += 50;
    }
    if (this.answers.question3 === 'yes') {
      totalScore += 50;
    }
    if (this.answers.question4 === 'yes') {
      totalScore += 50;
    }
    if (this.answers.question5 === 'yes') {
      totalScore += 50;
    }
    if (this.answers.question6 === 'yes') {
      totalScore += 50;
    }

    this.result = totalScore;
  }
}


