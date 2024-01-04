import { HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { CacheBucket } from '../cache-bucket';
import { defaultConfig } from '../cache-config';
import { DefaultHttpCacheGuard } from '../cache-guard';
import { HttpCacheManager } from '../cache-manager.service';
import { DefaultHttpCacheStorage } from '../cache-storage';
import { DefaultKeySerializer } from '../key-serializer';
import { RequestsQueue } from '../requests-queue';
import { DefaultTTLManager } from '../ttl-manager';
import { RequestsCache } from '../requests-cache';
import { LocalStorageVersionsManager } from '../local-storage/local-storage-versions';

export const frame = 1000;
export const config = defaultConfig;
export const ttl = config.ttl;

export const httpRequest = (method: string = 'GET', options: any = {}, url: string = 'api/mock') =>
  new HttpRequest(method, url, {}, options);
export const httpResponse = () =>
  new HttpResponse({
    headers: new HttpHeaders().set('test', 'test')
  });
export const requestQueue = () => new RequestsQueue();
export const cacheBucket = () => new CacheBucket();
export const httpCacheStorage = () => new DefaultHttpCacheStorage();
export const httpCacheGuard = () => new DefaultHttpCacheGuard();
export const ttlManager = (conf = config) => new DefaultTTLManager(conf);
export const keySerializer = () => new DefaultKeySerializer();
export const httpCacheManager = (conf = config) =>
  new HttpCacheManager(
    requestQueue(),
    httpCacheStorage(),
    httpCacheGuard(),
    ttlManager(conf),
    new RequestsCache(),
    new LocalStorageVersionsManager(),
    conf
  );

let store = {} as Record<any, any>;

export function localStorageMock() {
  const localStorageMock = {
    getItem(key: string) {
      return store[key];
    },
    setItem(key: string, value: any) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
    removeItem(key: string) {
      delete store[key];
    }
  };

  Object.defineProperty(window, 'localStorage', {
    get() {
      return Object.assign(localStorageMock, store);
    }
  });
}
