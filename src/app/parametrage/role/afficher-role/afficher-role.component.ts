import { Component, OnInit } from '@angular/core';
import {RoleService} from '../../../services/parametrage/role.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Role} from '../../../models/role';

@Component({
  selector: 'app-afficher-role',
  templateUrl: './afficher-role.component.html',
  styleUrls: ['./afficher-role.component.css']
})
export class AfficherRoleComponent implements OnInit {

  constructor(private roleService: RoleService, private router: Router, private activatedRoute: ActivatedRoute) { }
  private idRole: number;
  role: Role = new Role();

  async ngOnInit() {
    this.idRole = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    // await this.syllabusService.afficherDetailSyllabusAsync(this.idSyllabus).then((syllabus) => console.log(syllabus));
    this.role = await this.roleService.afficherDetailRoleAsync(this.idRole);
  }

  editRole(idRole: number) {
    this.router.navigateByUrl('/role/edit/' + idRole);
  }


}
