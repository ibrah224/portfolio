import { Component } from '@angular/core';

@Component({
  selector: 'app-other-skills',
  imports: [],
  templateUrl: './other-skills.html',
  styleUrl: './other-skills.scss'
})
export class OtherSkills {
  groups = [
    {
      title: 'Langues',
      items: [
        { name: 'Français', level: 'Courant' },
        { name: 'Anglais', level: '' },
        { name: 'Soussou', level: 'Avancé' },
        { name: 'Pular', level: 'Langue maternelle' }
      ]
    },
    {
      title: 'Bureautique',
      items: [
        { name: 'Microsoft Word', level: 'Avancé' },
        { name: 'Microsoft Excel', level: 'Avancé' },
        { name: 'Microsoft PowerPoint', level: 'Avancé' }
      ]
    }
  ];
}
