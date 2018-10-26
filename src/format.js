/** 格式化和脱敏的相关的内容，例如金额和身份证脱敏等等
 * @Author: c.y
 * @Date: 2018-10-24
 * @Last Modified by: c.y
 * @Last Modified time: 2018-10-24
 */

export default {
    // 金额格式化
    money(str) {
        str = str + '';
        let newStr = '';
        let count = 0;
        console.log(str);
        if (str.indexOf('.') === -1) {
            for (let i = str.length - 1; i >= 0; i--) {
                if (count % 3 === 0 && count !== 0) {
                    newStr = str.charAt(i) + ',' + newStr;
                } else {
                    newStr = str.charAt(i) + newStr;
                }
                count++;
            }
            str = newStr + '.00'; // 自动补小数点后两位
            return str;
        } else {
            for (let i = str.indexOf('.') - 1; i >= 0; i--) {
                if (count % 3 === 0 && count !== 0) {
                    newStr = str.charAt(i) + ',' + newStr;
                } else {
                    newStr = str.charAt(i) + newStr; // 逐个字符相接起来
                }
                count++;
            }
            str = newStr + (str + '00').substr((str + '00').indexOf('.'), 3);
            return str;
        }
    },
    // 身份证中的出生年月用*进行替代隐藏
    // 例如 511502199103223189 511502****3189
    cardId(cardId) {
        if (Object.prototype.toString.call(cardId) === "[object String]") {
            return cardId.replace(/^(.{6})(?:\d+)(.{4})$/, '$1****$2');
        }
        return '';
    },
    //将发送请求中的参数格式化，如果为空则转为null
    formatReq(obj) {
        for (let i in obj) {
            let item = obj[i];
            if (item === null) continue;
            if (
                item === undefined ||
                item === '' ||
                item === 'undefined' ||
                item.length <= 0 ||
                JSON.stringify(item) === '{}'
            ) {
                obj[i] = null;
            }
        }
        return obj;
    }
}