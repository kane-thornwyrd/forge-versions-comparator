const IS_A_FORGE_VERSION_NUMBER = /^(\d{1,4})\.(\d{1,4})\.(\d{1,4})\.(\d{1,4})$/;

module.exports = function forgeVersionComparator(a, b) {
  if (
    !a.match(IS_A_FORGE_VERSION_NUMBER) ||
    !b.match(IS_A_FORGE_VERSION_NUMBER)
  ) throw new Error('Not a forge version number !');
  const aAr = a.split('.');
  const bAr = b.split('.');
  const len = aAr.length >= bAr.length ? aAr.length : bAr.length;
  let diff = 0;
  for (let i = 0; i < len; i += 1) {
    diff = parseInt(bAr[i] || 0, 10) - parseInt(aAr[i] || 0, 10);
    if (diff !== 0) return diff < 0 ? 1 : -1;
  }
  return 0;
};

module.exports.IS_A_FORGE_VERSION_NUMBER = IS_A_FORGE_VERSION_NUMBER;
