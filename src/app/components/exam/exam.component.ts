import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';
import Exam from 'src/app/types/Exam';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private examService: ExamService) { }

  exam: any;

  ngOnInit(): void {
    this.examService.getOneExam(this.route.queryParams).subscribe(
      (res: any) => this.exam = res[0] as Exam,
      err => console.log(err)
    )
  }

}
