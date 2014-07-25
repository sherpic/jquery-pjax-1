/// <reference path="../define.ts"/>
/// <reference path="data.store.ts"/>
/// <reference path="util.ts"/>

/* MODEL */

module MODULE {
  // Allow access:
  //  M

  // Deny access
  var V: void, C: void;

  export class DataStoreMeta<T> extends DataStore<T> implements DataStoreMetaInterface<T> {

    name: string = 'meta'
    keyPath: string = 'id'

  }
}