import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home-page/home-page';
import { HeaderComponent } from './components/header/header-component/header-component';

@Component({
  selector: 'app-root',
  imports: [HomePageComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Motion-Masters');
}
