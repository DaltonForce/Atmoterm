import { Component } from '@angular/core';
import { assetsData } from '../_assets/assets-data';
import { OfferService } from '../_services/offer.service';
import { categoriesData } from '../_assets/categories-data';
import { offertsData } from '../_assets/offerts-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  menuItems: string[] = ['E-Usługi'];
  jsonData = assetsData;
  matchingOffers: { text: string, count: number }[] = [];
  selectedOffer: string | null = null;
  offertsData = offertsData;

  constructor(private offerService: OfferService) {}


  ngOnInit() {
    this.matchingOffers = this.offerService.getMatchingOffers();
    if (this.matchingOffers.length > 0) {
      this.selectedOffer = this.matchingOffers[0].text;
      this.filterByOffer(this.selectedOffer);
    }
  }

  selectOffer(offerText: string): void {
    this.selectedOffer = this.selectedOffer === offerText ? null : offerText;
    this.filterByOffer(this.selectedOffer);
  }
  
  filterByOffer(selectedOffer: string | null): void {
    let filteredData: any[];
    
    if (selectedOffer === null) {
      filteredData = assetsData;
    } else {
      const selectedOffertItem = this.offertsData.find(item => item.text === selectedOffer);
      if (selectedOffertItem) {
        filteredData = assetsData.filter(item => item.offert === selectedOffertItem.offert);
      } else {
        filteredData = assetsData;
      }
    }
  
    this.jsonData = filteredData;
  }

  getSectionText(category: number): string {
    const selectedCategory = categoriesData.find(cat => cat.category === category);
    return selectedCategory ? selectedCategory.text : 'Brak nazwy katerogii';
  }

}
