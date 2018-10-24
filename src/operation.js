export default {
    /**
     * js中浮点数精确计算,例如 0.1 + 0.2 = 0.30000000000000004就是有误差所致
     * @param num1
     * @param num2
     * @returns {*}
     */
    add(num1, num2) {
        var r1, r2, m;
        if (Number.isInteger(num1) || Number.isInteger(num2)) {
            return num1 + num2;
        }
        r1 = ('' + num1).split('.')[1].length;
        r2 = ('' + num2).split('.')[1].length;

        m = Math.pow(10, Math.max(r1, r2));
        return (num1 * m + num2 * m) / m;
    },
    /**
     * 判断一个数是否是整数
     * @param num
     * @returns {boolean}
     */
    isInteger(num) {
        return parseInt(x, 10) === x;
    },
    /**
     * 使用js来生成UUID
     * @param prefix
     * @returns {string}
     */
    generateID(prefix) {
    prefix = prefix || "prefix"
    // Math.random() + Math.random() => [0,2)
    return String(Math.random() + Math.random()).replace(/\d\.\d{4}/, prefix)
}
}

// add demo
console.log(add(0.15, 0.2256)); //0.3756