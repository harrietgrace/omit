/**
 * Expose `omit`.
 */

module.exports = omit;

/**
 * Return a copy of the object without the specified keys.
 *
 * @param {Array} keys
 * @param {Object} object
 * @return {Object}
 */

function omit(keys, object){
  var ret = {};

  for (var item in object) {
    ret[item] = object[item];
  }

  for (var i = 0; i < keys.length; i++) {
    delete ret[keys[i]];
  }
  return ret;
}