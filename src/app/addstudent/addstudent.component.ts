import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  stuObj:any={};
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  addStudent(addStuFrm:NgForm){
    if(addStuFrm.invalid){
      return;
    }
    this.stuObj={
    "name": addStuFrm.value.stuName,
    "email": addStuFrm.value.stuEmail
    };
    this.http.post('http://localhost:4444/students',this.stuObj).subscribe(()=>{
      this.router.navigate(['/']);
    });
  }

}
