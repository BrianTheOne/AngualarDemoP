import { Component, OnInit } from '@angular/core';
import {Personne} from "../../Model/Personne";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne [];
  selectedPersonne: Personne;
  constructor() { }

  ngOnInit(): void {
    this.personnes = [
      new Personne(1,'LeMaïs','Brian',12,'images.png',777777,'Gamer'),
      new Personne(2,'LeConcombre','Brian',12,'concon.jpg',777777,'Sleep Professional')
    ];
    this.selectedPersonne = this.personnes[0];
  }
  selectPersonne(personne) {
    this.selectedPersonne = personne;
  }
}
