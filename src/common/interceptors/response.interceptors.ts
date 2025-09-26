import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { ApiResponse } from "../helpers/api-response";

@Injectable()
export class ResponseInterceptors implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(
            map((data) => ApiResponse.success('Data berhasil diambil', data)),
        );
    }
}