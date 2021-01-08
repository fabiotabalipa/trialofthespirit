import {AxiosResponse} from 'axios';

import {QUOTE_TYPE_JEDI, QUOTE_TYPE_SITH} from '../globals/constants';
import {ERR_FETCH_QUOTES} from '../globals/text';
import {shuffleArray} from '../globals/utils';
import {Quote, Quotes} from '../store/ducks/quotes/types';
import api from './api';

export class QuotesService {
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
        .catch((/*err*/) => {
          // TODO: log err
          reject(ERR_FETCH_QUOTES);
        });
    });
  }

  // TODO: same as above
  private static fetchSithQuote() {
    return new Promise<Quote>((resolve, reject) => {
      api
        .get('RandomStarWarsQuoteFromFaction/1')
        .then((res) => {
          resolve(QuotesService.getQuoteFromResponse(res));
        })
        .catch((/*err*/) => {
          // TODO: log err
          reject(ERR_FETCH_QUOTES);
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
