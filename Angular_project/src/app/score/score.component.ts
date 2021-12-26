import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  Utilisateur_Tests: any = [];
  Choix_Utilisateur :any =[];
  idtest: number;
  iduser:number;

  constructor(private route: ActivatedRoute,private testutilisateur:UserService, private router: Router) { }

  ngOnInit(): void {

    this.idtest = this.route.snapshot.params['id'];
    this.iduser = this.route.snapshot.params['id'];
    this.testutilisateur.getTestUtisateursById(this.iduser).subscribe((data: {}) => {
      this.Utilisateur_Tests=data
      console.log(this.Utilisateur_Tests);
    })
    this.testutilisateur.getChoixTestUtisateursById(this.iduser).subscribe((data:{})=>{
    this.Choix_Utilisateur=data
    console.log(this.Choix_Utilisateur);
    
  })


  }

  


}