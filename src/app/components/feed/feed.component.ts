import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/app/services/exam.service';
import Exam from 'src/app/types/Exam';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor(private examService: ExamService) { }

  exams: Exam[] = []

  ngOnInit(): void {
    this.examService.getAllExams().subscribe(
      res => this.exams = res as Exam[],
      err => console.log(err)
    )
  }

}
