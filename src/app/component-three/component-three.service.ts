import { Injectable } from '@angular/core';
import { QuoteModel } from "./QuoteModel";
@Injectable({
  providedIn: 'root'
})
export class ComponentThreeService {
  public quoteList: QuoteModel[] = [];
  private daysOfTheWeeks = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  constructor() {}

  addNewQuote(quote: String) {
    const date = new Date();
    const dayOfTheWeek = this.daysOfTheWeeks[date.getDate()];
    const day = date.getDay();
    const year = date.getFullYear();
    this.quoteList.push(
      new QuoteModel(quote, `${dayOfTheWeek} ${day}, ${year}`)
    );
    console.log('im addNewQuote',this.quoteList);
  }

  getQuote() {
    return this.quoteList;
  }
 
  removeQuote(index) {
    this.quoteList.splice(index, 1);
  }

  fetchQuotesFromServer() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([new QuoteModel("I love unit testing", "Mon 4, 2021")]);
      }, 2000);
    });
  }

}
