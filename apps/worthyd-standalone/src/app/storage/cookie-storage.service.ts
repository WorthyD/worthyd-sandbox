/* eslint-disable prefer-const */
import { Injectable } from '@angular/core';
import { DataStoreClass } from './datastore.class';

@Injectable()
export class CookieStorageService implements DataStoreClass {
  AppPrefix = '';

  get<T = any>(key: string, customStore = undefined): Promise<T | undefined> {
    return new Promise((resolve, reject) => {
      resolve(JSON.parse(getCookie(`${this.AppPrefix}${key}`) || ''));
    });
  }

  set(key: string, value: any, customStore = undefined): Promise<void> {
    return new Promise((resolve, reject) => {
      setCookie(`${this.AppPrefix}${key}`, JSON.stringify(value));
      resolve();
    });
  }
}

function setCookie(cname: string, cvalue: string, exdays = 1) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname: string) {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
