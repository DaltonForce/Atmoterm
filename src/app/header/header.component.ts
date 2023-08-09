import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  sessionDurationInSeconds = 1200;
  countdownSeconds = this.sessionDurationInSeconds;
  countdownDisplay = '';

  private countdownSubscription?: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    this.stopCountdown();
  }

  private startCountdown(): void {
    this.countdownSubscription = timer(0, 1000).subscribe(() => {
      this.countdownSeconds--;

      const minutes = Math.floor(this.countdownSeconds / 60);
      const seconds = this.countdownSeconds % 60;

      this.countdownDisplay = `${minutes} min ${seconds} sek`;

      if (this.countdownSeconds <= 0) {
        this.stopCountdown();
      }
    });
  }

  private stopCountdown(): void {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }
}