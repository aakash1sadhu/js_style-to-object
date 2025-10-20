'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((decl) => {
      const i = decl.indexOf(':');

      if (i === -1) {
        return null;
      }

      const prop = decl.slice(0, i).trim().toLowerCase();

      const rawVal = decl.slice(i + 1);
      const value = rawVal.replace(/^\s+/, '').replace(/\s+$/, '');

      return [prop, value];
    })
    .filter(Boolean)
    .reduce((obj, [prop, value]) => {
      obj[prop] = value;

      return obj;
    }, {});
}

module.exports = convertToObject;
