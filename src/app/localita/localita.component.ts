import { Component } from '@angular/core';
import { Localita } from '../lista-localita';
import { LOCALITA } from './lista-localita.component';

@Component({
  selector: 'app-localita',
  templateUrl: './lista-localita.component.html',
  styleUrls: ['./localita.component.css'],
})
export class LocalitaComponent {
  localita = LOCALITA;
  imm: boolean = false;
  private _listFilter: string = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log(value);
  }

  Immagine() {
    this.imm = !this.imm;
    if (this.imm) {
      document.getElementById('bottone').innerHTML = 'Nacondi immagini';
    } else {
      document.getElementById('bottone').innerHTML = 'Mostra immagini';
    }
  }

  ngOnInit() {
    console.log('lista creata');
  }
}
