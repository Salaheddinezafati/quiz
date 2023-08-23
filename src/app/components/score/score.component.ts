import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  score: number | null = null;

  ngOnInit(): void {
    const storedScore = sessionStorage.getItem('score');
    if (storedScore) {
      this.score = parseInt(storedScore, 10);
    }
  }
}