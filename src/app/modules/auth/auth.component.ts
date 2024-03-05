import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isRegister = false;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      if (data['isRegister']) {
        this.isRegister = true;
      } else {
        this.isRegister = false;
      }
    });
  }

  handlerAuth(context: string): void {
    if (context === 'register') {
      this.isRegister = true;
      this.location.replaceState('/autenticacao/registrar');
    } else {
      this.isRegister = false;
      this.location.replaceState('/autenticacao/entrar');
    }
  }
}
