import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Logger Interceptor::', req.url, req.method, new Date().toLocaleTimeString())
  return next(req);
};
