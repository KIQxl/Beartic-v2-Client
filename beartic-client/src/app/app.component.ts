import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { productServices } from './services/productServices';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { loginService } from './services/LoginService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [productServices, HttpClient, loginService, HttpClientModule]
})
export class AppComponent {
  title = 'beartic-client';
}
