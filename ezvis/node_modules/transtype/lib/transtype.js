'use strict';

var dateable   = require('dateable')
;

module.exports = function transtype(type, object, pattern) {
  var d, n, s;
  if (type === "boolean" && typeof object === "boolean") {
    return object;
  }
  else if (type === "boolean" && typeof object !== "boolean") {
    if (object === '1' || object === "true" || object === "on" || object === 1 || object === true) {
      return true;
    }
    else {
      return false;
    }
  }
  else if (object === undefined) {
    return undefined;
  }
  else if (object === null) {
    return null;
  }
  else if (type === undefined || type === "string" || type === "text") {
    s = object.toString();
    if (pattern !== '') {
      var rg = new RegExp(pattern);
      return s.search(rg) === -1 ? undefined : s;
    }
    else {
      return s;
    }
  }
  else if (type === "number") {
    n = Number(object);
    return isNaN(n) ? undefined : n;
  }
  else if (type === "date" && object instanceof Date) {
    return (!object || isNaN(object.valueOf())) ? undefined : object;
  }
  else if (type === "date" && typeof object === 'string' && typeof pattern === 'string' && object !== '' && pattern !== '') {
    d = dateable.parse(object, pattern);
    return (!d || isNaN(d.valueOf())) ? undefined : d;
  }
  else if (type === "date" && typeof object === 'string') {
    d = Date.parse(object);
    return (!d || isNaN(d.valueOf())) ? undefined : d;
  }
  else if (type === "date"  && typeof object === 'object') {
    d = Date.parse(object.toString());
    return (!d || isNaN(d.valueOf())) ? undefined : d;
  }
  else if (type === "date") {
    return undefined;
  }
  return object;
}
