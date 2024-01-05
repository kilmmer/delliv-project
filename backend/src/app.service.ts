import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTimeNow(): string {
    return new Date().toLocaleString();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
