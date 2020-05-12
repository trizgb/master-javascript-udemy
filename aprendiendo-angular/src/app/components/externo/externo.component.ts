import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.scss'],
  providers: [
    PeticionesService
  ]
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  public date: any;

  public new_user: any;
  public saved_user;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.userId = 1;
    this.new_user = {
      name: '',
      job: ''
    }
  }

  ngOnInit(): void {
    this.date = new Date();
    this.loadUser();
  }

  loadUser() {
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form) {
    this._peticionesService.addUser(this.new_user).subscribe(
      response => {
        this.saved_user = response;

        form.reset();
      },
      error => {
        console.log(error);
      }
    );
  }
}
