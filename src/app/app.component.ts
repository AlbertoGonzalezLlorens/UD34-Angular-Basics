import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UD34-Angular-Basics';
  calcularnum:any="";
  insertarnum(num:any){
    this.calcularnum += num;
  }

  borrarnum(){
    this.calcularnum = "";
  }
  resultadopant:any="";
  calcular(){
    this.resultadopant = eval(this.calcularnum);
    this.calcularnum = "";
  }
}




