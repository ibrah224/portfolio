import { Component } from '@angular/core';

interface ExperienceItem {
  period: string;
  title: string;
  organization: string;
  description: string;
  highlights: string[];
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  experiences: ExperienceItem[] = [
    {
      period: 'Projet académique',
      title: 'Application de gestion de stock',
      organization: 'Projet de formation',
      description: 'Conception et réalisation d’une application de gestion de stock.',
      highlights: ['Python et WinDev', 'Modélisation de base de données', 'Gestion des accès et sécurité', 'Déploiement sécurisé']
    },
    {
      period: '12 novembre — 22 janvier 2026',
      title: 'Formation en cybersécurité',
      organization: 'Orange Digital Guinée · Google Cybersecurity et OWASP',
      description: 'Formation axée sur l’audit et l’analyse de vulnérabilités, ainsi que la surveillance de la sécurité des flux de données.',
      highlights: ['Wireshark, Nmap et Nessus', 'Linux et Bash', 'Audit et analyse de vulnérabilités', 'Surveillance de la sécurité des flux de données']
    },
    {
      period: '9 — 18 mai 2025',
      title: 'Formation en leadership',
      organization: 'Université Amadou Dieng de Conakry',
      description: 'Développement de compétences relationnelles et de pilotage d’équipe.',
      highlights: ['Gestion des conflits', 'Prise de décision', 'Communication interpersonnelle']
    }
  ];
}
