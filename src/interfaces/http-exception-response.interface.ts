export interface HttpExceptionResponseInterface {
    statusCode: number;
    message: Array<string> | string;
    error: string;
}
