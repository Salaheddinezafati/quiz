import { Component,OnInit } from '@angular/core';
import { QuizService } from './services/quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'testmoneycore';
  // constructor(private quiz:QuizService){

  // }
  // ngOnInit(): void {
  //   this.getallquiz();
  // }

  // getallquiz(){
  //   this.quiz.getallquiz().subscribe(res=>{
  //     console.log(res);
  //   })
  // }

}
