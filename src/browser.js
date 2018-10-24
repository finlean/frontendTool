/**
 *
 * @type {string}
 */


export default {
    /**
     *
     * @param top
     * @param offset
     */
    scrollTo(top, offset) {
        document.body.scrollTop = document.documentElement.scrollTop = top + (offset || 0);
    },
    // 判断一个元素是否在可视区（视口）内部
    inViewport(element, offset) {
        if (!isElement(element)) return false;
        var rect = element.getBoundingClientRect(),
            left = rect.left,
            top = rect.top,
            right = rect.right,
            bottom = rect.bottom;
        offset = offset || 0;
        return bottom > offset
            && right > offset
            && window.innerWidth - left > offset
            && window.innerHeight - top > offset;
    },
    /**
     *
     */
    getVersion() {
        const u = navigator.userAgent;
        trident: u.indexOf('Trident') > -1, // IE内核
            presto
    :
        u.indexOf('Presto') > -1, // opera内核
            webKit
    :
        u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
            gecko
    :
        u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
            mobile
    :
        !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
            ios
    :
        !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
            android
    :
        u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, // android终端
            iPhone
    :
        u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
            iPad
    :
        u.indexOf('iPad') > -1, // 是否iPad
            webApp
    :
        u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
            weixin
    :
        u.indexOf('MicroMessenger') > -1, // 是否微信 （2015-01-22新增）
            qq
    :
        u.match(/\sQQ/i) === ' qq', // 是否QQ
            iPhoneX
    :
        (function () {
            const iOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
            const ratio = window.devicePixelRatio || 1
            const screen = {
                width: window.screen.width * ratio,
                height: window.screen.height * ratio
            }
            let result = false
            if (iOS && screen.width === 1125 && screen.height === 2436) {
                result = true
            }
            return result
        })()
    },
    language: (navigator.browserLanguage || navigator.language).toLowerCase(),
    userAgent: u
}