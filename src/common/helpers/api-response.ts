export class ApiResponse {
    static success(message: string, data: any){
        return {
            status: 'success',
            message,
            data,
        };
    }

    static error(message: string, data: any = null){
        return {
            status: 'error',
            message,
            data,
        };
    }
}