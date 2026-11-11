import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  stats = [
    { value: '4', label: 'Projets' },
    { value: '5+', label: 'Technologies' },
    { value: '100%', label: 'Motivation' },
  ];
}