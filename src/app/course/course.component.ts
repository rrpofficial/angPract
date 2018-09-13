import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses = ["course 1", "course2","course3"];
  constructor() { }

  ngOnInit() {
  }

}
