import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quizz';
  listEstudiantes: any[] = [
    { nombre: 'Tomas Gonzalez' , estado: 'Promocionado'},
    { nombre: 'Lucas Perez' , estado: 'Regular'},
    { nombre: 'Juan Garcia' , estado: 'Regular'},
    { nombre: 'Monica Pia' , estado: 'Regular'},
    { nombre: 'Nicolas Gomez' , estado: 'Libre'}, 
  ]
  
  mostrar = true;

  toogle(): void {
    this.mostrar = !this.mostrar;
  }
}
