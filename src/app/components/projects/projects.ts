import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Gestion des étudiants',
      description: "Application web pour gérer les inscriptions, les notes et les moyennes d'une promotion.",
      tags: ['Angular', 'Node.js', 'MongoDB'],
      github: '#',
    },
    {
      title: 'Système de bibliothèque',
      description: 'Application de gestion des livres, des emprunts et des retours avec base de données relationnelle.',
      tags: ['Java', 'MySQL'],
      github: '#',
    },
    {
      title: 'Chat en temps réel',
      description: 'Messagerie instantanée avec salons de discussion et utilisateurs connectés en direct.',
      tags: ['Node.js', 'Socket.io', 'TypeScript'],
      github: '#',
    },
    {
      title: 'Analyse de données',
      description: "Traitement et visualisation d'un jeu de données avec statistiques et graphiques.",
      tags: ['Python', 'Pandas', 'Matplotlib'],
      github: '#',
    },
  ];
}