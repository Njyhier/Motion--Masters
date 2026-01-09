import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page';
import { BicycleComponent } from './components/bicycle/bicycle-component/bicycle-component';
import { MdriverComponent } from './components/mmdrivers/mdriver-component/mdriver-component';
import { MotorbikeComponent } from './components/motorbikes/motorbike-component/motorbike-component';
import { LoginComponent } from './components/login/login-component/login-component';
import { HomePage } from './components/home-page/home-page';
import { CarComponent } from './components/cars/car-component/car-component';
import { BlogsComponent } from './components/blogs/blogs-component/blogs-component';



export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'motorbikes',
    component: MotorbikeComponent
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'bicycles',
    component: BicycleComponent
  },
  {
    path:'home',
    component: HomePageComponent
  },
  {
    path: 'cars',
    component: CarComponent
  },
  {
    path: 'drivers',
    component: MdriverComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  }

];
