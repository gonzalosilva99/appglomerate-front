import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div><h1>{{title}}</h1>
      <div>My first component</div>
      <pm-places></pm-places>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apm-new';
}
