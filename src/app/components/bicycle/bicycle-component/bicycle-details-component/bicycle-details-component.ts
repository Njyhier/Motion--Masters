import { Component, OnInit, signal, computed } from '@angular/core';
import { Bike } from '../../../../classes/bike/bike';

@Component({
  selector: 'app-bicycle-details-component',
  imports: [],
  templateUrl: './bicycle-details-component.html',
  styleUrl: './bicycle-details-component.css',
})
export class BicycleDetailsComponent implements OnInit {
  bike!: Bike;
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
    this.getBike().then(
      res => {
        this.bike = res;
        this.images.set(this.bike?.images ?? [])
      })
  }

 async getBike(){
  const res = await fetch(`${this.apiUrl}/1`);
  return await res.json()
  }
   setCurrentImageIndex(name: string): number{
    const tabImages = document.querySelectorAll('[name="img"]')
    let clickedImage = Array.from(tabImages).findIndex(a => a.getAttribute('name') === name)
    return clickedImage;
   }
}
