import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";

@Component({
    selector: 'app-manage-emp',
    standalone: true,
    templateUrl: './manage-emp.component.html',
    styleUrl: './manage-emp.component.css',
    imports: [FormsModule, HttpClientModule, CommonModule, NavBarComponent]
})
export class ManageEmpComponent {
  public employeeObj = {
    firstName: '',
    lastName: '',
    email: '',
    deptId: '',
    roleId: '',
  };

  constructor(private http: HttpClient) {}

  addEmployee() {
    this.http
      .post('http://localhost:8080/employee/add-employee', this.employeeObj)
      .subscribe(
        (data) => {
          Swal.fire({
            title: 'Employee Added Successfully !',
            text: 'All the details has been stored.',
            icon: 'success',
          });
        },
        (error) => {
          console.error('Error occurred while adding employee:', error);
          Swal.fire({
            title: 'Error!',
            text: 'Could not add employee. Please try again later.',
            icon: 'error',
          });
        }
      );
  }
}
