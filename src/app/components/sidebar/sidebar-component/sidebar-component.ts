import { Component } from '@angular/core';
// import { HomePageComponent } from '../../../home-page/home-page';
// import { HomePage } from '../../home-page/home-page';
// import { BicycleComponent } from '../../bicycle/bicycle-component/bicycle-component';
// import { MotorbikeComponent } from '../../motorbikes/motorbike-component/motorbike-component';
// import { MdriverComponent } from '../../mmdrivers/mdriver-component/mdriver-component';
import { RouterLink } from '@angular/router';
// import { routes } from '../../../app.routes';



@Component({
  selector: 'app-sidebar-component',
  imports: [RouterLink],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css',
})
export class SidebarComponent {
  // private router = inject(Router)
  // goToBicycles(){
  //   this.router.navigate(['/bicycles'])
  // }
  // goToMotorbikes(){
  //   this.router.navigate(['/motorbikes'])
  // }
  // goToCars(){
  //   this.router.navigate(['/cars'])
  // }
  // goToDrivers(){
  //   this.router.navigate(['/drivers'])
  // }
  // goToBlogs(){
  //   this.router.navigate(['/blogs'])
  // }
  
}
