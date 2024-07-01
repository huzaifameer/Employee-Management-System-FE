import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageEmpComponent } from "./page/manage-emp/manage-emp.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ManageEmpComponent]
})
export class AppComponent {
  title = 'emp_system';
}
