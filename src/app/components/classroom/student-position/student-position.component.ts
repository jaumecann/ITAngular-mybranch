import { Component, OnInit, Input} from '@angular/core';
import { StudentSeatService, StudentSeat } from '../../../services/student-seat.service';



@Component({
  selector: 'app-student-position',
  templateUrl: './student-position.component.html',
  styleUrls: ['./student-position.component.scss']
})
export class StudentPositionComponent implements OnInit {

  students: StudentSeat[] = [];
  @Input() student: any = {};


  constructor( private _studentSeatService: StudentSeatService) {
  }

  ngOnInit() {
        // iniciate service
     /*  this.students = this._studentSeatService.getStudentSeat(); */
       //console.log(this.students);


       // añadir progreso aleatorio del alumno
       this.students = this._studentSeatService.addRandomDays();
  }


}
