import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ILoan } from '../iLoan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  GetLoans(): Promise<ILoan[]> {
    return this.http.get<ILoan[]>(`${this.baseUrl}loans`).toPromise();
 }

 async GetLoan(id: number) {
   return await this.http.get<ILoan>(`${this.baseUrl}loans/${id}`).toPromise();
 }

 AddLoan(newLoan: ILoan): Promise<ILoan> {
   return this.http.post<ILoan>(`${this.baseUrl}loans`, newLoan).toPromise();
 }

 async UpdateLoan(loanId: number, loan: ILoan) {
   return await this.http.put<ILoan>(`${this.baseUrl}loans/${loanId}`, loan).toPromise();
 }

 async DeleteLoan(loanId: number) {
   return await this.http.delete<ILoan>(`${this.baseUrl}loans/${loanId}`).toPromise();
 }
}
