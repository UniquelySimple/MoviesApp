import { Component } from '@angular/core';

declare var closeLoginPrompt: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'contacts';

  closeButtonAction(): void{
    closeLoginPrompt();
  }
  
}
