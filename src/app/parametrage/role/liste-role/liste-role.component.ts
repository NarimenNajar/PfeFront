import {Component, OnInit, ViewChild} from '@angular/core';
import {RoleService} from '../../../services/parametrage/role.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Role} from '../../../models/role';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-role',
  templateUrl: './liste-role.component.html',
  styleUrls: ['./liste-role.component.css']
})
export class ListeRoleComponent implements OnInit {

  displayedColumns: string[] = ['codeRole', 'role', 'actions'];
  public dataSource: MatTableDataSource<Role>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private roleService: RoleService, private router: Router) { }

  async ngOnInit()  {
    this.roleService.afficherRole().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      console.log(data);
    });

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  async deleteRole(idRole: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.roleService.deleteRoleAsync(idRole);
        Swal.fire(
          'Deleted!',
          'Role has been deleted.',
          'success'
        ).then((e) =>  window.location.reload() );
      }
    });
  }

  showDetailRole(idRole: number) {
    this.router.navigateByUrl('/role/show/' + idRole);
  }

  addRole() {
    this.router.navigateByUrl('/role/create');
  }

  editRole(idRole: number) {
    this.router.navigateByUrl('/role/edit/' + idRole);
  }


}
