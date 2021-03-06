import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, EmpoymentHistory } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = environment.api + '/users';
  userId = +localStorage.getItem('user_id');
  reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.url);
  }

  getStaff(id) {
    return this.http.get(this.url + `/${id}`, { headers: this.reqHeader });
  }

  addUser(data: User) {
    data.created_by = Number(this.userId);
    data.updated_by = Number(this.userId);
    return this.http.post(this.url, data, { headers: this.reqHeader });
  }

  addEmpolymentHistory(data: EmpoymentHistory) {
    const api = environment.api + '/users-employment-history';
    data.created_by = Number(this.userId);
    data.updated_by = Number(this.userId);
    return this.http.post(api, data, { headers: this.reqHeader });
  }

  getEhistoryByStaffId(staff_if) {
    const api = `${environment.api}/users-employment-history?staff_id=${staff_if}`;
    return this.http.get(api, { headers: this.reqHeader });
  }

  udpateUser(data: User, ehistory: EmpoymentHistory[]) {
    return new Promise((resolve, reject) => {
      data.updated_by = Number(this.userId);
      this.http.patch(`${this.url}/${data.id}`, data, { headers: this.reqHeader }).subscribe(
        (res: any) => {

          const api = `${environment.api}/users-employment-history`;
          ehistory.forEach((emp: any) => {
            this.http.patch(`${api}/${emp.id}`, emp, { headers: this.reqHeader }).subscribe();
          });
          resolve(res);
        }, err => {
          reject(err);
        }
      );
    });
  }

  deleteUser(id) {
    return new Promise(resolve => {
      this.http.delete(`${this.url}/${id}`, { headers: this.reqHeader }).subscribe(res => {
        resolve(res);
      }, err => {
        resolve(err);
      });
    });
  }
}
