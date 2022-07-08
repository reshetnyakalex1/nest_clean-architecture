import { HashServiceInterface } from './hash.service.interface';
import * as bcrypt from 'bcrypt';

export class HashService implements HashServiceInterface {
    private saltOrRounds = 10;

    compare(text: string, hash: string): Promise<boolean> {
        return bcrypt.compare(text, hash);
    }

    hash(text: string): Promise<string> {
        return bcrypt.hash(text, this.saltOrRounds);
    }
}
