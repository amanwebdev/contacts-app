import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: [
              './app.component.css',
              '../../node_modules/bulma/css/bulma.css',
              '../../node_modules/font-awesome/css/font-awesome.min.css'
            ]
})
export class AppComponent {
  
}