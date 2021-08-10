import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addStudent(addStuFrm:NgForm){
    if(addStuFrm.invalid){
      return;
    }
  }

}
