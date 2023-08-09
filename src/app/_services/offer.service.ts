import { Injectable } from '@angular/core';
import { assetsData } from '../_assets/assets-data';
import { offertsData } from '../_assets/offerts-data';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor() { }

  getMatchingOffers(): { text: string, count: number }[] {
    const matchingOffers: { text: string, count: number }[] = [];

    offertsData.forEach(offer => {
      const count = assetsData.filter(item => item.offert === offer.offert).length;
      if (count > 0) {
        matchingOffers.push({ text: offer.text, count });
      }
    });

    return matchingOffers;
  }
}
