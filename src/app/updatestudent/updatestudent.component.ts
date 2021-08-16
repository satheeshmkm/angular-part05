import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
  id: any;
  allStudents: any = [];
  displayStudentInfo: any = {};
  existed: boolean = false;
  updatedStuInfo: any = {};


  constructor(private http: HttpClient, private currentActiveRoute: ActivatedRoute, private router: Router, private stuSrvc: StudentsService) { }

  ngOnInit(): void {
    this.currentActiveRoute.params.subscribe((params) => {
      this.id = +params['id']; // TO habdle it being undefined
      console.log(this.id);
    });
    this.stuSrvc.getAllStudents().subscribe((studentsObtained) => {
      this.allStudents = studentsObtained;
      for (var i = 0; i < this.allStudents.length; i++) {
        if (parseInt(this.allStudents[i].id) == this.id) {
          this.displayStudentInfo = this.allStudents[i];
          this.existed = true;
          break;
        } else {
          this.existed = false;
        }
      }
    })
  }

  updateStudent(updateStuFrm: NgForm) {
    if (updateStuFrm.invalid) {
      return;
    }
    this.updatedStuInfo = {
      "name": updateStuFrm.value.stuName,
      "email": updateStuFrm.value.stuEmail
    };
    const url = `${'http://localhost:4444/students'}/${this.id}`
    this.http.put(url, this.updatedStuInfo).subscribe(() => {
      this.router.navigate(['/'])
    })

  }

}
