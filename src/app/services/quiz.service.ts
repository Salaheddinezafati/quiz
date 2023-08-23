import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  api:string='http://164.92.135.12:8080/kakoo-back-end/api/v1/open-ai/generate-question?count=10&jobTitleId=235&optionCount=4&skillIds=124,125,419';
  constructor(private http:HttpClient) { }


  getallquiz(){
    return this.http.post(this.api,{});
  }
}
