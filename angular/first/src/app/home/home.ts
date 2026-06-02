import { Component } from '@angular/core';
import { Right } from './right/right';
import { Left } from './left/left';

@Component({
  selector: 'app-home',
  imports: [Left,Right],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
