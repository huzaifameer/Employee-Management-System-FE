import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageEmpComponent } from "./page/manage-emp/manage-emp.component";
import { ViewAllEmployeeComponent } from "./page/view-all-employee/view-all-employee.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ManageEmpComponent, ViewAllEmployeeComponent]
})
export class AppComponent {
  title = 'emp_system';
}
