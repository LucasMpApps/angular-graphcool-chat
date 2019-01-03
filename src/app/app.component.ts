import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  private apiURL = 'https://api.graph.cool/simple/v1/cjpfrmx9h6ov00195pqasu068';

  constructor (
    private http: HttpClient
  ){
      this.createUser();
      this.allUsers();
  }

  allUsers(): void {

    const body = {
      query:
      `
        query {
          allUsers{
            id
            name
            email
          }
        }
      `
    }

    this.http.post(this.apiURL, body)
      .subscribe(res => console.log('Query: ', res));

  }

  createUser(): void {

     const body = {
       query: `
        mutation CreateNewUser($name: String!, $email: String!, $password: String!, $updateAt: DateTime!) {
          createUser(name: $name, email: $email, password: $password, updateAt: $updateAt) {
            id
            name
            email
          }  
        }
       `, 
       variables: {
         name: 'Black Panther',
         email: 'panther@avenger.com',
         password: '123456',
         updateAt: '2019-01-02'
       }
     };

     this.http.post(this.apiURL, body)
      .subscribe(res => console.log('Mutation', res));

  }

}