/** 浮点数的相关操作，为了一定程度上提高精确
 * @Author: c.y
 * @Date: 2018-10-24
 * @Last Modified by: c.y
 * @Last Modified time: 2018-10-24
 */

export default {
    /**
     * 浮点数的加法
     * 例如 0.1 + 0.2 = 0.30000000000000004就是有误差所致
     * @param arg1
     * @param arg2
     * @returns {*}
     */
    accAdd(arg1, arg2) {
        let r1;
        let r2;
        let m;
        try {
            r1 = arg1.toString().split('.')[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split('.')[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        return (arg1 * m + arg2 * m) / m;
    },
    //减法函数
    accSub(arg1, arg2) {
        let r1;
        let r2;
        let m;
        let n;
        try {
            r1 = arg1.toString().split('.')[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split('.')[1].length;
        } catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        n = (r1 >= r2) ? r1 : r2;
        return ((arg1 * m - arg2 * m) / m).toFixed(n);
    },
    // 浮点数的乘法
    accMul(arg1, arg2) {
        let m = 0;
        let s1 = arg1.toString();
        let s2 = arg2.toString();
        try {
            m += s1.split('.')[1].length;
        } catch (e) {
        }
        try {
            m += s2.split('.')[1].length;
        } catch (e) {
        }
        return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
    },
    // 浮点数的除法
    accDiv(arg1, arg2) {
        let t1 = 0;
        let t2 = 0;
        let r1;
        let r2;
        try {
            t1 = arg1.toString().split(".")[1].length;
        }
        catch (e) {
        }
        try {
            t2 = arg2.toString().split(".")[1].length;
        }
        catch (e) {
        }
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 / r2) * Math.pow(10, t2 - t1);
    }
};