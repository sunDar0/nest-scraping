import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FileService } from '@scraper/modules/file/file.service';


@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    
    const ctx = context.switchToHttp();
    const req = ctx.getRequest();
    const now = Date.now();
    
    

    return next.handle().pipe(
      tap(
        () => console.log(`After... ${Date.now() - now}ms`)
      ),
      
    );

    
  }
}


