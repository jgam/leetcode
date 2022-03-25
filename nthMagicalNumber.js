/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function(N, A, B) {
    gcd = (x, y) => {
        if (x == 0) return y;
        return gcd(y % x, x);
    }

    const MOD = 1000000007;
    const L = A / gcd(A, B) * B;
    const M = L / A + L / B - 1;
    const q = Math.trunc(N / M), r = N % M;

    let ans = q * L % MOD;
    if (r == 0)
        return ans;

    let heads = [A, B];
    for (let i = 0; i < r - 1; ++i) {
        if (heads[0] <= heads[1])
            heads[0] += A;
        else
            heads[1] += B;
    }

    ans += Math.min(heads[0], heads[1]);
    return ans % MOD;
};
