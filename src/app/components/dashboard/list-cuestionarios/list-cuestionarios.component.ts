import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Cuestionario } from 'src/app/models/Cuestionario';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-list-cuestionarios',
  templateUrl: './list-cuestionarios.component.html',
  styleUrls: ['./list-cuestionarios.component.css']
})
export class ListCuestionariosComponent implements OnInit, OnDestroy {

  suscriptionUser: Subscription = new Subscription();
  suscriptionQizz: Subscription = new Subscription();
  listCuestionarios: Cuestionario[] = [];
  loading = false;

  constructor(private afAuth: AngularFireAuth, 
              private router: Router,
              private _quizzService: QuizzService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
     this.loading = true;
     this.suscriptionUser = this.afAuth.user.subscribe(user => {
     console.log(user);  

      if (user ) { //&& user.emailVerified) {
        // cargar los cuestionarios
        this.getCuestionarios(user.uid);
      } else {
        this.router.navigate(['/']);
      }
    })
  }

  ngOnDestroy(): void {
    this.suscriptionUser.unsubscribe();
    this.suscriptionQizz.unsubscribe();
  }  

  getCuestionarios(uid: string){
    this.suscriptionQizz == this._quizzService.getCuestionarioByIdUser(uid).subscribe(data => {
      //console.log(data);
      this.listCuestionarios = [];
      this.loading = false;
      data.forEach((element:any) => {
        this.listCuestionarios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
      });
      console.log(this.listCuestionarios)
    }, error => {
      console.log(error);
      this.toastr.error('Ocurrio un Error', 'Error');
      this.loading = false;
    })
  }

  eliminarCuestionario(id: string){
    this.loading = true;
    this._quizzService.eliminarCuestionario(id).then(data => {
      this.toastr.error('El Cuestinario fue eliminado con exito', 'Registro eliminado!');
      this.loading = false;
    }).catch(() =>{
      this.loading = false;
      this.toastr.error('Ocurrio un Error', 'Error');
    })
  }

}
