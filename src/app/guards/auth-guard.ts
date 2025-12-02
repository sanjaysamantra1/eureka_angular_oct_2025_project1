import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserInfoService } from '../services/user-info-service';

export const authGuard: CanActivateFn = (route, state) => {
  const userInfoService = inject(UserInfoService);

  if (userInfoService.userRole === 'teacher') {
    return true;
  } else {
    alert('Sorry!! You have no rights to open this page.')
    return false;
  }
};
