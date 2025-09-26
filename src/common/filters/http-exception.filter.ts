import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { ApiResponse } from "../helpers/api-response";

@Catch()
export class HttpExceptionFilter implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();

        const status = 
            exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

        const message = 
            exception instanceof HttpException ? exception.getResponse()['message'] || exception.message : 'Internal server error';

        response.status(status).json(ApiResponse.error(message, null))
    }
}