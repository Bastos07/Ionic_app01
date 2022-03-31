import { Component, OnInit } from '@angular/core';

// Importa dependências
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Auth, signInWithRedirect } from '@angular/fire/auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    // Injeta dependências
    private auth: Auth,
    public alertController: AlertController,
    private route: Router
  ) { }

  ngOnInit() { }

  // Função de login, executada pelo botão
  login() {

    // Faz a autenticação do usuário pelo provedor
    signInWithRedirect(this.auth, new GoogleAuthProvider());

  }
}
