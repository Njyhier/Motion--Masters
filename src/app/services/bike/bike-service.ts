import { Injectable, signal } from '@angular/core';
import { Bike } from '../../classes/bike/bike';

@Injectable({
  providedIn: 'root',
})
export class BikeService {
  mbicycles = signal<Bike[]>([
    {id:1, serialNumber: "qwer232", brand:"MTB", model:"qweu", category: 'electric' },
    {id:1, serialNumber: "qwer232", brand:"MTB", model:"qweu", category: 'electric' },
    {id:1, serialNumber: "qwer232", brand:"MTB", model:"qweu", category: 'electric' },
    {id:1, serialNumber: "qwer232", brand:"MTB", model:"qweu", category: 'electric' },
    {id:1, serialNumber: "qwer232", brand:"MTB", model:"qweu", category: 'electric' }
    
  ])
  getBikes(){
    return this.mbicycles();
  }
}
