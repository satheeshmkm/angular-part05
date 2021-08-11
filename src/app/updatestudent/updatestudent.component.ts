import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
  id:any;
  constructor(private http:HttpClient, private currentActiveRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.currentActiveRoute.params.subscribe((params)=>{
      this.id=+params['id'];
      console.log(this.id);

    });

  }

  updateStudent(updateStuFrm:NgForm){

  }

}
