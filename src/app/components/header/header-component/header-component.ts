import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  imagePath = signal<string>('../assets/img/logo.jpg');
  title = signal<string>('Motion Masters');
  motto = signal<string>('dont just hitch a ride, ride yourself')
}