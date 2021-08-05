import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-studentmanagement',
  templateUrl: './studentmanagement.component.html',
  styleUrls: ['./studentmanagement.component.css']
})
export class StudentmanagementComponent implements OnInit {

  students:any=[];
  constructor(private stuSvc:StudentsService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.stuSvc.getAllStudents().subscribe((studentsResp)=>{
      this.students=studentsResp;
    });
  }

}
