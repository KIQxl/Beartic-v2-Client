import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { loginRequest } from "../Models/login/loginRequest";
import { map, Observable } from "rxjs";
import { login, loginResponse } from "../Models/login/loginResponse";

@Injectable({
    providedIn: 'root'
})
export class loginService{
    constructor(private http: HttpClient){}
    protected baseURL: string = "https://localhost:7161/v2"

    login(username: string, password: string) : Observable<login>{
        let request: loginRequest = new loginRequest(username, password)

        return this.http.post<loginResponse>(`${this.baseURL}/login`, request)
            .pipe(
                map(response => response.data || new login())
            )
    }
}