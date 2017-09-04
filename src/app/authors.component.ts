import { Component } from '@angular/core' ;
@Component({
    selector: 'authors',
    template: `<h1>{{title}}</h1>
    <ul>
        <li *ngFor="let author of authors">{{author}}</li>
    </ul>`,
})

export class AuthorsComponent {
    title = 'Authors!';
    authors = [
        'JJ', 'PP', 'SS'

    ];
}
