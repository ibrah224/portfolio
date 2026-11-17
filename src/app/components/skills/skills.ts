import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  groups = [
    { title: 'Frontend', items: ['HTML', 'CSS / SCSS', 'JavaScript', 'TypeScript', 'Angular'] },
    { title: 'Backend & Données', items: ['Node.js', 'Python', 'Java', 'PHP', 'C++', 'SQL / MySQL', 'MongoDB'] },
    { title: 'Outils', items: ['Git & GitHub', 'VS Code', 'Linux', 'Vercel'] },
  ];
}
