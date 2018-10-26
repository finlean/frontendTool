export default {
    /**
     *  根据key  获取 Cookie
     * @param key
     * @returns {*}
     */
    getCookie(key) {
        var arr, reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
        if (arr = document.cookie.match(reg)) {
            return decodeURIComponent(arr[2]);
        } else {
            return null;
        }
    },
    /**
     * 根据key  设置 Cookie
     * @param key
     * @param value
     * @param days
     */
    setCookie(key, value, days){
        // 设置cookie过期事件,默认是30天
        var expire = new Date();
        days = days || 30;
        expire.setTime(expire.getTime() + (+days) * 24 * 60 * 60 * 1000);
        document.cookie = key + '=' + encodeURIComponent(value) + ';expires=' + expire.toGMTString();
    },
    /**
     *  根据key  删除 Cookie
     * @param key
     */
    deleteCookie(key){
        var expire = new Date();
        expire.setTime(expire.getTime() - 1);
        var cval = getCookie(key);
        if (cval != null)
        // 把toGMTString改成了toUTCString，两者等价。但是ECMAScript推荐使用toUTCString方法。toGMTString的存在仅仅是
        // 为了向下兼容
        document.cookie = key + '=' + cval + ';expires=' + exp.toUTCString();
    }

};