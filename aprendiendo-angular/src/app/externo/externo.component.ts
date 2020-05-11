import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

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

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.userId = 1;
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

}
