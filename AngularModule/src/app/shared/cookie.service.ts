import { Injectable } from '@angular/core';

// https://developer.mozilla.org/ja/docs/Web/API/Document/cookie

@Injectable()
export class CookieService {

  constructor() {
  }

  getItem(sKey): string {
    if (!sKey || !this.hasItem(sKey)) { return null; }
    return document.cookie.replace(new RegExp("(?:^|.*;\\s*)"
      + sKey.replace(/[\-\.\+\*]/g, "\\$&")
      + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1");
  }

  setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure): void {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return; }
    let sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Tue, 19 Jan 2038 03:14:07 GMT" : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toGMTString();
          break;
      }
    }
    document.cookie = sKey
      + "=" + sValue
      + sExpires
      + (sDomain ? "; domain=" + sDomain : "")
      + (sPath ? "; path=" + sPath : "")
      + (bSecure ? "; secure" : "");
  }

  removeItem(sKey, sPath): void {
    if (!sKey || !this.hasItem(sKey)) { return; }
    document.cookie = sKey + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sPath ? "; path=" + sPath : "");
  }

  hasItem(sKey): boolean {
    return (new RegExp("(?:^|;\\s*)" + sKey.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\="))
      .test(document.cookie);
  }
}
