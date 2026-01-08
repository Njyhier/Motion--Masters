import { Component, inject, OnInit, signal } from '@angular/core';
import { BikeService } from '../../../services/bike/bike-service';
import { Bike } from '../../../classes/bike/bike';

@Component({
  selector: 'app-bicycle-component',
  imports: [],
  templateUrl: './bicycle-component.html',
  styleUrl: './bicycle-component.css',
})
export class BicycleComponent implements OnInit {
  private bicycleService = inject(BikeService);
  mbicycles = signal<Bike[]>([]);
  
  ngOnInit(): void {
    this.renderBikes()
  }

  renderBikes(){
    this.bicycleService?.getBicycles()?.subscribe({
      next: data => this.mbicycles?.set(data),
      error: () => alert('error'),
      complete() {
        console.log('bikes rendered');
      }
    })
  }
  search(){

  }
  sortBy(){

  }
  filter(){
    
  }
}
