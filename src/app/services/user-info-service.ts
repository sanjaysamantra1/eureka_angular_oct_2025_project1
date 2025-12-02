import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  userRole: string = 'student'; 
  // userRole: string = 'teacher'; 
}
