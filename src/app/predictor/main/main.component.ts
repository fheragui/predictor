import { Component, OnInit } from '@angular/core';
import { PicoPlaca } from 'src/app/_model/picoplaca';
import { Horario } from 'src/app/_model/horario';
import { Dia } from 'src/app/_model/dia';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mensaje = 'Resultado';

  placa;
  fecha: Date;
  hora;

  horarioDesde: Horario = { id: 1, horaDesde: '07:00:00', horaHasta: '09:30:00' };
  horarioHasta: Horario = { id: 2, horaDesde: '16:00:00', horaHasta: '19:30:00' };

  lunes: Dia = {
    id: 1, nombre: 'Lunes',
    digitos: [1, 2], horaManana: this.horarioDesde, horaTarde: this.horarioHasta
  };

  martes: Dia = {
    id: 2, nombre: 'Martes',
    digitos: [3, 4], horaManana: this.horarioDesde, horaTarde: this.horarioHasta
  };

  miercoles: Dia = {
    id: 3, nombre: 'Miercoles',
    digitos: [5, 6], horaManana: this.horarioDesde, horaTarde: this.horarioHasta
  };

  jueves: Dia = {
    id: 4, nombre: 'Jueves',
    digitos: [7, 8], horaManana: this.horarioDesde, horaTarde: this.horarioHasta
  };

  viernes: Dia = {
    id: 5, nombre: 'Viernes',
    digitos: [9, 0], horaManana: this.horarioDesde, horaTarde: this.horarioHasta
  };

  picoyplacas: PicoPlaca[] = [
    { id: 1, dia: this.lunes },
    { id: 2, dia: this.martes },
    { id: 3, dia: this.miercoles },
    { id: 4, dia: this.jueves },
    { id: 5, dia: this.viernes },
  ]

  constructor() { }

  ngOnInit() {
  }

  comprobar() {

    const dg = this.placa.split('');
    const ultimoDigito = dg[dg.length - 1];
    if (this.picoyplacas[this.fecha.getDay() - 1]) {
      const diaSelected: Dia = this.picoyplacas[this.fecha.getDay() - 1].dia;
      const horario = this.hora.split(':');
      const hh = horario[0];
      const mm = horario[1];
      this.fecha.setHours(hh);
      this.fecha.setMinutes(mm);

      if (diaSelected.digitos[0] === +ultimoDigito || diaSelected.digitos[1] === +ultimoDigito) {
        const f1: Date = new Date(this.fecha);
        const f2: Date = new Date(this.fecha);
        const f3: Date = new Date(this.fecha);
        const f4: Date = new Date(this.fecha);

        const horaMananaInicio = this.getDatePicoPlaca(f1, diaSelected.horaManana.horaDesde);
        const horaMananaFin = this.getDatePicoPlaca(f2, diaSelected.horaManana.horaHasta);
        const horaTardeInicio = this.getDatePicoPlaca(f3, diaSelected.horaTarde.horaDesde);
        const horaTardeFin = this.getDatePicoPlaca(f4, diaSelected.horaTarde.horaHasta);

        if (this.fecha >= horaMananaInicio && this.fecha <= horaMananaFin) {
          this.mensaje = 'No Circula';
        } else if (this.fecha >= horaTardeInicio && this.fecha <= horaTardeFin) {
          this.mensaje = 'No Circula';
        } else {
          this.mensaje = 'Circula';
        }
      } else {
        this.mensaje = 'Circula';
      }
    } else {
      this.mensaje = 'Circula';
    }

  }

  getDatePicoPlaca(date: Date, time: string) {
    const horario = time.split(':');
    const hh = +horario[0];
    const mm = +horario[1];
    date.setHours(hh);
    date.setMinutes(mm);
    return date;
  }


}
