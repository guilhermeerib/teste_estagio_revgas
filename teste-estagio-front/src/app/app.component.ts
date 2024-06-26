import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { TableBancoComponent } from './components/table-banco/table-banco.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    FormsComponent,
    TableBancoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teste-estagio-front';
}
