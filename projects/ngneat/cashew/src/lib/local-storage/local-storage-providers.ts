import { TTLManager } from '../ttl-manager';
import { HttpCacheStorage } from '../cache-storage';
import { HttpCacheLocalStorage } from './local-storage-cache';
import { LocalStorageTTLManager } from './local-storage-ttl';
import { HttpCacheVersions } from '../versions';
import { LocalStorageVersionsManager } from './local-storage-versions';
import { makeEnvironmentProviders } from '@angular/core';

export function provideHttpCacheLocalStorageStrategy() {
  return makeEnvironmentProviders([
    { provide: HttpCacheStorage, useClass: HttpCacheLocalStorage },
    { provide: TTLManager, useClass: LocalStorageTTLManager },
    { provide: HttpCacheVersions, useClass: LocalStorageVersionsManager }
  ]);
}
