import { Injectable, signal } from '@angular/core';
import { Homepage } from '../classes/homepage';

@Injectable({
  providedIn: 'root',
})
export class HomePage {
  slideShowImages = signal<Homepage []>([
    {imgUrl: "assets/im1.jpeg", imgCaption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur libero eos porro ipsa animi voluptatibus iste sit quasi deserunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim blanditiis magni doloremque laboriosam excepturi porro sint illum nobis, fugit expedita veniam possimus voluptas quisquam nam labore odit. Voluptas iusto minus exercitationem nesciunt quae distinctio nam dolore maxime alias iste."},
    {imgUrl: "assets/im2.jpeg", imgCaption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur libero eos porro ipsa animi voluptatibus iste sit quasi deserunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim blanditiis magni doloremque laboriosam excepturi porro sint illum nobis, fugit expedita veniam possimus voluptas quisquam nam labore odit. Voluptas iusto minus exercitationem nesciunt quae distinctio nam dolore maxime alias iste."},
    {imgUrl: "assets/im3.avif", imgCaption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur libero eos porro ipsa animi voluptatibus iste sit quasi deserunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim blanditiis magni doloremque laboriosam excepturi porro sint illum nobis, fugit expedita veniam possimus voluptas quisquam nam labore odit. Voluptas iusto minus exercitationem nesciunt quae distinctio nam dolore maxime alias iste."},
    {imgUrl: "assets/im4.avif", imgCaption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur libero eos porro ipsa animi voluptatibus iste sit quasi deserunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim blanditiis magni doloremque laboriosam excepturi porro sint illum nobis, fugit expedita veniam possimus voluptas quisquam nam labore odit. Voluptas iusto minus exercitationem nesciunt quae distinctio nam dolore maxime alias iste."},
    {imgUrl: "assets/im5.avif", imgCaption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur libero eos porro ipsa animi voluptatibus iste sit quasi deserunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim blanditiis magni doloremque laboriosam excepturi porro sint illum nobis, fugit expedita veniam possimus voluptas quisquam nam labore odit. Voluptas iusto minus exercitationem nesciunt quae distinctio nam dolore maxime alias iste."},
    {imgUrl: "assets/im6.avif", imgCaption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur libero eos porro ipsa animi voluptatibus iste sit quasi deserunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim blanditiis magni doloremque laboriosam excepturi porro sint illum nobis, fugit expedita veniam possimus voluptas quisquam nam labore odit. Voluptas iusto minus exercitationem nesciunt quae distinctio nam dolore maxime alias iste."}
  ])
  
}
