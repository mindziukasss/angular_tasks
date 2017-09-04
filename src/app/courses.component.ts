import { Component } from '@angular/core' ;
@Component({
    selector:'courses',
    template:`<h1>{{title}}</h1>
    <ul>
        <li *ngFor="let course of courses">{{course}}</li>
    </ul>`,
})

export class CoursesComponent {
    title = 'Valio!';
    courses = [
        "P1", "P2", "P3"

    ]
}