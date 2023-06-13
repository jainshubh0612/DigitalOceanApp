import { Response, Request } from 'express';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getData(res: Response, req: Request): Promise<void>;
}
