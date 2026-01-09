import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { Bike } from '../../../../classes/bike/bike';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bicycle-details-component',
  imports: [],
  templateUrl: './bicycle-details-component.html',
  styleUrl: './bicycle-details-component.css',
})
export class BicycleDetailsComponent implements OnInit {
  bike!: Bike;
  private activatedRoute = inject(ActivatedRoute);
  private bikeId = signal<string>('');
  images = signal<string[]>([]);
  currentImageIndex = signal(4);
  currentImage = computed<string>(
    () => {
      let i = this.currentImageIndex();
      const images = this.images();
      return images[i] ?? '';
    }
  )
  private apiUrl = 'http://localhost:3000/bikes'; 

  ngOnInit(): void {
    this.activatedRoute?.queryParams.subscribe(
    params =>  {
      const bikeId =params['id'];
      if(bikeId){
        this.getBike(bikeId).then(res => {
          this.bike = res;
          this.images.set(this.bike.images || [])
        });
      }
    }    
   )

  }
 async getBike(id: string){
  const res = await fetch(`${this.apiUrl}/${id}`);
  return await res.json()
  }

}
