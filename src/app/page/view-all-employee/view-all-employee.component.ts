import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";

@Component({
    selector: 'app-view-all-employee',
    standalone: true,
    templateUrl: './view-all-employee.component.html',
    styleUrl: './view-all-employee.component.css',
    imports: [HttpClientModule, FormsModule, CommonModule, NavBarComponent]
})
export class ViewAllEmployeeComponent {
  public empList: any;
  constructor(private http: HttpClient) {
    this.loadEmployeeTable();
  }
  loadEmployeeTable() {
    this.http
      .get('http://localhost:8080/employee/get-all')
      .subscribe((res) => {
        console.log(res);
        this.empList = res;
      });
  }
  deleteEmployee(employee: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success m-2',
        cancelButton: 'btn btn-danger m-2',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.http
            .delete(
              `http://localhost:8080/employee/${employee.id}`,
              { responseType: 'text' }
            )
            .subscribe((res) => {
              swalWithBootstrapButtons.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });

              console.log(res);
              this.loadEmployeeTable();
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            icon: 'error',
          });
        }
      });
  }
}
