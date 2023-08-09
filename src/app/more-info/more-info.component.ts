import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit, OnDestroy {

  name = 'Dynamiczna Mapa Jakości Powietrza';
  openModal: boolean = false;
  private countdownSubscription?: Subscription;

  constructor() {}
  
  closeModal() {this.openModal = false;}

  sessionDurationInSeconds = 1200;
  countdownSeconds = this.sessionDurationInSeconds;
  countdownDisplay = '';


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

      this.countdownDisplay = `Sesja: ${minutes} min ${seconds} sek`;

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
