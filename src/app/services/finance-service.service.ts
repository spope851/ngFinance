import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FinanceServiceService {

  urlBeg = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords='
  urlEnd = '&apikey=/*your Alpha Vantage key here*/'
  //go to www.alphavantage.co to get your free api key
  dailyBeg = 'https://www.alphavantage.co/query?outputsize=full&function=TIME_SERIES_DAILY&symbol='
  constructor(private http: HttpClient) { }

  search(symbol:string): Observable<any[]>{
    return this.http.get<any[]>(`${this.urlBeg}${symbol}${this.urlEnd}`)
  }

  daily(symbol:string): Observable<any[]>{
    return this.http.get<any[]>(`${this.dailyBeg}${symbol}${this.urlEnd}`)
  }

}
