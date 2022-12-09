import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {



   constructor(private router: Router) { } // Se debe instanciar

  ngOnInit() {
}

 cierra(){
    this.router.navigate(["/login"]);
  }
  
}