import {AxiosResponse} from 'axios';

import {QUOTE_TYPE_JEDI, QUOTE_TYPE_SITH} from '../globals/constants';
import {Quote, Quotes} from '../globals/types';
import {shuffleArray} from '../globals/utils';
import api from './api';

export default class QuotesService {
  static async fetchShuffledQuotes(length: number) {
    const quotes: Quotes = [];

    let jediCount = 0,
      sithCount = 0;

    while (jediCount + sithCount < length) {
      if (jediCount < length / 2) {
        const quote = await QuotesService.fetchJediQuote();
        if (!QuotesService.quoteExists(quote, quotes)) {
          quotes.push(quote);
          jediCount++;
        }
      }

      if (sithCount < length / 2) {
        const quote = await QuotesService.fetchSithQuote();
        if (!QuotesService.quoteExists(quote, quotes)) {
          quotes.push(quote);
          sithCount++;
        }
      }
    }

    return shuffleArray(quotes);
  }

  private static fetchJediQuote() {
    return new Promise<Quote>((resolve, reject) => {
      api
        .get('RandomStarWarsQuoteFromFaction/0')
        .then((res) => {
          resolve(QuotesService.getQuoteFromResponse(res));
        })
        .catch((err) => {
          console.error('Error fetching Jedi quote: ', err);
          reject();
        });
    });
  }

  private static fetchSithQuote() {
    return new Promise<Quote>((resolve, reject) => {
      api
        .get('RandomStarWarsQuoteFromFaction/1')
        .then((res) => {
          resolve(QuotesService.getQuoteFromResponse(res));
        })
        .catch((err) => {
          console.error('Error fetching Sith quote: ', err);
          reject();
        });
    });
  }

  private static getQuoteFromResponse(res: AxiosResponse): Quote {
    let text = res.data.starWarsQuote;

    // Remove author to avoid tendentious answers
    let i = text.lastIndexOf(' - ');
    if (i <= 0) {
      i = text.lastIndexOf(' — ');
    }
    if (i <= 0) {
      i = text.lastIndexOf(' ? ');
    }
    if (i >= 0) {
      text = text.substring(0, i);
    }

    return {
      answer: null,
      id: res.data.id,
      text,
      type: res.data.faction === 0 ? QUOTE_TYPE_JEDI : QUOTE_TYPE_SITH,
    };
  }

  private static quoteExists(quote: Quote, quotes: Quotes): boolean {
    for (let i = 0; i < quotes.length; i++) {
      if (quote.id === quotes[i].id) {
        return true;
      }
    }

    return false;
  }
}
