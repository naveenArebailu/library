import { Component } from '@angular/core';
let styles   = require('../styles.css');

@Component({
  selector: 'app-root',
  template: `<section>Section Part<br/>
            <button id="login" class="btn btn-primary">Login</button><br/>
           Input: <input type="textbox" class="form-control">
            </section>
            `,
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  title = 'MY FIRST OWN COMPONENT.!';
}
