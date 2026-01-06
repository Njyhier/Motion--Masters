import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { HomePage } from '../services/home-page';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-home-page',
  imports: [NgClass],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePageComponent implements OnInit, OnDestroy {
  currentView = signal<number>(0);
  private intervalId!: number;
  totalViews = 6;

  constructor(public homePageService: HomePage) {}

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => 
      this.currentView.update(v => (v + 1)%this.totalViews), 
      9000
    );
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}