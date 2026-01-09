import { Component, inject, OnInit, signal } from '@angular/core';
import { BikeService } from '../../../services/bike/bike-service';
import { Bike } from '../../../classes/bike/bike';
import { Route, Router } from '@angular/router';
import { BicycleDetailsComponent } from './bicycle-details-component/bicycle-details-component';

const route: Route ={
    path:"bike",
    component: BicycleDetailsComponent
  }


@Component({
  selector: 'app-bicycle-component',
  imports: [],
  templateUrl: './bicycle-component.html',
  styleUrl: './bicycle-component.css',
})
export class BicycleComponent implements OnInit {
  private bicycleService = inject(BikeService);
  mbicycles = signal<Bike[]>([]);
  private router = inject(Router)
  
  ngOnInit(): void {
    this.renderBikes()
  }

  renderBikes(){
    this.bicycleService.getBicycles().subscribe({
      next: data => this.mbicycles?.set(data),
      error: () => alert('error'),
      complete() {
        console.log('bikes rendered');
      }
    })
  }
  goToBikeDetails(index: number){
    console.log('initializing bike details component')
    const bikeId = this.mbicycles()[index].id;
    this.router.navigate(['/bike'], {
      queryParams: {id: bikeId}
    })
  }
}
