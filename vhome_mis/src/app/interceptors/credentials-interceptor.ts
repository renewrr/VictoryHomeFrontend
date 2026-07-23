import { HttpInterceptorFn } from '@angular/common/http';

export const credentialsInterceptor: HttpInterceptorFn = (req, next) => {
  // Check if the request is targeting your proxy endpoints (e.g., starting with /api)
  if (req.url.includes('/api')) {
    const credentialReq = req.clone({
      withCredentials: true,
    });
    return next(credentialReq);
  }

  return next(req);
};
