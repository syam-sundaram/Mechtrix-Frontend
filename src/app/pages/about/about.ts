import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  standalone: true
})
export class About {
  years=10;
  members=50;
  studentBuilt=100;
}
