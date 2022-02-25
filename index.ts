/** @format */

export default function baseCzech(x: number) {
  if (!Number.isSafeInteger(x) || !Number.isFinite(x) || x < 0) throw new Error('Data passed to this function needs to be a finite safe integer.');
  let remainder: (string | number)[] = [];
  const chars = 'ABČDĎEFGHIJKLMNŇOPQRŘSŠTŤUVWXYZŽÁÉĚÍÓŮÚÝabcčdďefghijklmnňopqrřsštťuvwxyzžáéěíóůúý'.split('');
  chars.push(...'Ch)', 'ch');
  const base = chars.length;
  return (function recurse(x: number): string {
    remainder.push(x % base > 9 ? chars[(x % base) - 10] : x % base);
    x = Math.floor(x / base);
    return remainder[0] === undefined ? '0' : x > 0 ? recurse(x) : remainder.reverse().join('');
  })(x);
}
