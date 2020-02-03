


// import { StudentSearchService } from './../../../services/student-search.service';
// import { StudentSearchComponent } from './../../global/student-search/student-search.component';
import { Component, OnInit } from '@angular/core';
import { Alumno } from './../../global/tables/model/alumno';
import listadeAlumnos from 'src/assets/json/alumnos.json';
import { StudentSearchService } from '../../../services/student-search.service';
import { FilestudentService } from '../file-student/file-student.service';
import { Student } from '../../../student';


@Component({
  selector: 'app-file-student',
  templateUrl: './file-student.component.html',
  styleUrls: ['./file-student.component.scss']
})

export class FileStudentComponent implements OnInit {

  Alumnos: any = listadeAlumnos;
  estudiantes: Alumno[] = [];
  selectedStudent: string = "";
  StudentSearchService: any;
  student: Alumno;
  today = new Date();
  getStudent() {

    for (let i = 0; i < this.Alumnos.length; i++) {

      if (this.selectedStudent == this.Alumnos[i].name) {
        console.log('Find');
        this.student = this.Alumnos[i];
        this.student.percentage = this.remainingPercentage(this.student);
      }
    }
    console.log(this.student);
    // console.log("Hoy es: " + new Date());
    // console.log(this.student);
    // let difference = (new Date(this.student.limitDate).valueOf()) - (new Date(this.student.startDate).valueOf());
    // console.log(difference / (1000 * 3600 * 24));
    // this.remainingPercentage(this.student);
  };

  changeItinerary(value: any) {
    this.student.itinerary = value;

  }

  remainingPercentage(student): number {
    let date1 = (new Date(this.today).valueOf()) - (new Date(this.student.startDate).valueOf());
    let date2 = (new Date(this.student.limitDate).valueOf()) - (new Date(this.student.startDate).valueOf());
    let percentage = Math.round((date1 / date2)*100);
    console.log(percentage);
    return percentage;

  }
  constructor() { }

  ngOnInit() {
  }

}


// var start = new Date(2015, 0, 1), // Jan 1, 2015
//     end = new Date(2015, 7, 24), // August 24, 2015
//     today = new Date(), // April 23, 2015
//     p = Math.round(((today - start) / (end - start)) * 100) + '%';
// // Update the progress bar
// $('.bar').css("width", p).after().append(p);


// https://stackoverflow.com/questions/29839270/percentage-between-two-dates-compared-to-today?rq=1

// https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/