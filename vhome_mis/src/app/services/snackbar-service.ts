import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private _snackbar = inject(MatSnackBar);
  msgSnack(message: string){
    this._snackbar.open(message, '', {duration: 3000});
  }
}
