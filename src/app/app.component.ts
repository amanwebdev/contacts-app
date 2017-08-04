import { Component, ViewEncapsulation } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: [
              './app.component.css',
              '../../node_modules/bulma/css/bulma.css',
              '../../node_modules/font-awesome/css/font-awesome.min.css',
              '../../node_modules/angular2-toaster/toaster.css'
            ]
})
export class AppComponent {
  public toasterconfig : ToasterConfig = 
    new ToasterConfig({animation: 'flyDown'});
}