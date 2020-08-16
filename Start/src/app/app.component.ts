import { Component } from '@angular/core';
import { FinanceServiceService } from './services/finance-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'ngFinance';
 
}
