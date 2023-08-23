import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit{
  //title = 'testmoneycore';
  countscore:number=0;
  selectedOptions:string[]=[]
  loading: boolean = true; 
  questions!:any;
  constructor(private quiz:QuizService,private router:Router){

  }
  ngOnInit(): void {
    this.getallquiz();
  }

  getallquiz(){
    this.quiz.getallquiz().subscribe(res=>{
      this.questions = res;
      //console.log(res);
      this.loading = false;
    },err=>{
      console.log(err);
    })
  }

  change(answer:any,i:any){
    if (answer===this.selectedOptions[i]) {
      this.countscore+=1;
      console.log(answer===this.selectedOptions[i]);
      console.log(this.countscore);
    }
   
    console.log(answer+"  |||  "+this.selectedOptions);
  }

  onSubmit() {
    
    if (this.selectedOptions.length === this.questions.length) {
      
      console.log('Selected Options:', this.selectedOptions);
      sessionStorage.setItem("score",String(this.countscore));
      this.router.navigate(['score']);

    } else {
      console.log('Please answer all questions');
    }
  }

}
