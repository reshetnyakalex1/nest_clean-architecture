import { AsyncLocalStorage } from 'async_hooks';

export class AsyncStorageService {
    private readonly asyncStore = new AsyncLocalStorage<Map<string, string>>();

    getAsyncStorage() {
        return this.asyncStore;
    }

    static getInitialStore(): Map<string, string> {
        return new Map<string, string>();
    }

    setTraceId(traceId: string): void {
        this.asyncStore.getStore()?.set('traceId', traceId);
    }

    getTraceId(): string {
        return this.asyncStore.getStore()?.get('traceId');
    }
}
