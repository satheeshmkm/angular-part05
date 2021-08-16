import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentmanagement',
  templateUrl: './studentmanagement.component.html',
  styleUrls: ['./studentmanagement.component.css']
})
export class StudentmanagementComponent implements OnInit {

  students: any = [];

  constructor(private stuSvc: StudentsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.stuSvc.getAllStudents().subscribe((studentsResp) => {
      this.students = studentsResp;
    });
  }

  deleteStudent(id: any) {
    if (confirm('Are you sure to delete')) {
      const url = `${'http://localhost:4444/students'}/${id}`;
      this.http.delete(url).subscribe(() => {
        this.getStudents();
      });
    }
  }

}
