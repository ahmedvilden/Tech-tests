import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { UserService, TestsService } from '../services';

@Component({
  selector: 'app-historiquetest',
  templateUrl: './historiquetest.component.html',
  styleUrls: ['./historiquetest.component.css']
})
export class HistoriquetestComponent implements OnInit {

  Utilisateur_Tests: any = [];
  idtest: number;
  iduser:number;

  constructor(private route: ActivatedRoute,
    private testutilisateur:UserService, 
    private testservice:TestsService,
    private router: Router) { }

  ngOnInit(): void {

    this.iduser = this.route.snapshot.params['id'];
    this.testutilisateur.getTestUtisateursById(this.iduser).subscribe((data: {}) => {
      this.Utilisateur_Tests=data
      console.log(this.Utilisateur_Tests);
  })
}

gettestsbyidcategorie(id: number) {

  this.router.navigate(['/categorie', id]); 
 
}


}
