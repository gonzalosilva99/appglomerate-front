import { Injectable } from "@angular/core";
import { IPlace } from "./place";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, tap, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class PlaceService{
    private placesUrl = 'https://localhost:44302/api/place';

    constructor(private http: HttpClient){}

    getPlaces() : Observable<IPlace[]>{
        return this.http.get<IPlace[]>(this.placesUrl).pipe(
            tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        let errormsg = '';
        if( err.error instanceof ErrorEvent){
            errormsg = `An error has  ocurred: ${err.error.message}`; 
        }
        else{ 
            errormsg = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errormsg);
        return throwError(errormsg);
    }

}
