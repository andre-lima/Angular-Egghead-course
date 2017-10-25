import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my apppppppppppp';

  onUpdate(id, text){
    //console.log(mail.id, event)
    this.mail.update(id, text)
  }

  constructor( @Inject('mail') private mail) {

  }
}
