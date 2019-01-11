import { Component, OnInit } from '@angular/core';
import { IBlessing } from './blessings';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-guest-detail',
  templateUrl: './guest-detail.component.html',
  styleUrls: ['./guest-detail.component.css']
})
export class GuestDetailComponent implements OnInit {
  bless_name: string;
  bless_comment: string;
  index = 2;
  classCssAraay = ['quote-card', 'quote-card.blue-card', 'quote-card.green-card', 'quote-card.red-card'];
  constructor() { }
  blessings: IBlessing[] = [
    {index: 1, guest: 'Sagarika', comment: 'Much awaited event!'},
    {index: 2, guest: 'Saumya', comment: 'All the best!'}
  ];

  getColorClass() {
    return 'quote-card.green-card';
  }


  onAddBless(form: NgForm) {
    console.log( this.bless_name);
    this.index = this.index + 1;

   this.blessings.push({index:this.index,  guest: form.value.bless_name, comment: form.value.bless_comment});

  }

  ngOnInit() {
  }

}
