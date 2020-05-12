import { Component, OnInit } from '@angular/core';
import { UserContact } from 'src/app/models/user-contact';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  public user: UserContact;
  public showData;

  constructor() {
    this.user = new UserContact('', '', '', '');
  }

  ngOnInit(): void {
  }

  onSubmit(form) {
    this.showData = this.user;
    console.log(this.showData)
    // form.reset();
  }

}
