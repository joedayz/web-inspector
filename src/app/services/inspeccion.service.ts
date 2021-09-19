import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NotificacionComponent} from '../views/notificacion/notificacion.component';

@Injectable({
  providedIn: 'root'
})
export class InspeccionService {

  dataUpdate = new Subject<any[]>();


  constructor(protected http: HttpClient, private snackBar: MatSnackBar) { }


  openNotification(message: string, buttonText: string){
    this.snackBar.openFromComponent(NotificacionComponent, {
      data: {
        message: message,
        buttonText: buttonText
      },
      duration: 7000,
      horizontalPosition: "end",
      verticalPosition: "top",
      panelClass: 'notification'
    })
  }
}
