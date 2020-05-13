import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#logo').click((e) => {
      $('header').css("background", "green");

      e.preventDefault();
    });

    $(document).ready(function () {
      $('.bxslider').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 400
      });
    });
  }
}
