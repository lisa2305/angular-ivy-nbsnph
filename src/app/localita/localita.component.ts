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
  listFilter: String;

  Immagine() {
    this.imm = !this.imm;
    if (this.imm) {
      document.getElementById('bottone').innerHTML = 'Nacondi immagini';
    } else {
      document.getElementById('bottone').innerHTML = 'Mostra immagini';
    }
  }
}
