import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {QuoteService} from "../quote.service";

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

  constructor(private quoteService: QuoteService ) {

  }

  ngOnInit() {
  }

  onSubmit(form: NgForm ){
    
    console.log("its ok ");
    
    this.quoteService.addQuote(form.value.content)
        .subscribe(
            () => alert("quote created")
        );
    form.reset();
  }
}
