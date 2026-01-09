import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header-component/header-component';
import { SidebarComponent } from './components/sidebar/sidebar-component/sidebar-component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SidebarComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Motion-Masters');
}
