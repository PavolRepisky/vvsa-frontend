import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ITransaction,
  TransactionsServiceService,
} from 'src/app/api/transactions-service.service';

@Component({
  selector: 'app-basic-accounts-detail',
  templateUrl: './basic-accounts-detail.component.html',
  styleUrls: ['./basic-accounts-detail.component.css'],
})
export class BasicAccountsDetailComponent {
  transactionData?: ITransaction;

  constructor(
    private transactionsService: TransactionsServiceService,
    public route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      const transactionId = params['id'];

      this.transactionsService
        .getTransactionDetail$(transactionId)
        .subscribe((response) => {
          this.transactionData = response.data;
        });
    });
  }
}
