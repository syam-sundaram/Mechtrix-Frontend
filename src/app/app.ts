import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 title = 'WELCOME';
}
