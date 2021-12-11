import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http"
import Exam from '../types/Exam';
@Injectable({
  providedIn: 'root'
})
export class ExamService {

  link_api = "http://localhost:3000/exam/"

  constructor(private http: HttpClient) { }

  getAllExams(){
    return this.http.get(this.link_api)
  }

  getOneExam(query: any){
    return this.http.get(this.link_api, {
        params: new HttpParams().set("_id", query.id)
      }
    )
  }

  createExam(exam: Exam){
    return this.http.post(this.link_api, exam)
  }

  deleteExam(id: String){
    return this.http.delete(this.link_api, {params: new HttpParams().set("_id", id as string)})
  }
}
