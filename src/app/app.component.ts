import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  showSecret = false;
  clicks = [];

  onToggleSecret() {
    this.showSecret = !this.showSecret;
    this.clicks.push(Date.now());
  }

  isAfterFour(click: Date) {
    return this.clicks.indexOf(click) > 4;
  }

  getBackgroundColor(click: Date) {
    return this.isAfterFour(click) ? 'blue' : 'white';
  }
}
