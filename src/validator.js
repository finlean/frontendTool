/**
 * 2018-3-9
 * 这是一个用于存放正则表达式和一些验证方法的插件
 * 除了存放了目前常用的正则之外，还根据这些正则封装了对应的验证方法
 */
export default {
    formatMoney(str) {
        // 金额格式化
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
    // 身份证中间 隐藏
    cardIDHide(cardid) {
        // 身份证 中间用* 显示
        if (cardid) {
            return cardid.replace(/^(.{6})(?:\d+)(.{4})$/, '$1****$2');
        } else {
            return '';
        }
    },
    // 检查电话号码格式
    checkPhone(phone) {
        // 验证电话号码格式
        let reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
        return reg.test(phone);
    },
    checkEmail(email) {
        // 验证邮箱格式
        let reg = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
        return reg.test(email);
    },
    checkVerifyCode(code) {
        // 验证验证码格式
        let reg = /^\d{6}$/;
        return reg.test(code);
    },
    checkDynamicCode(code) {
        // 验证邀请码格式
        let reg = /^[A-Za-z0-9]{4}$/;
        return reg.test(code);
    },
    // password check
    checkPassword(password) {
        // 验证密码格式
        let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        return reg.test(password);
    },
    // name check
    checkName(name) {
        // 验证用户名格式
        let reg = /^[\u4e00-\u9fa5]{2,17}$/;
        return reg.test(name);
    },
    //  账户名称的正则表达式
    checkUsername(name) {
        let reg = /^[\u4e00-\u9fa50-9a-zA-Z]{4,16}$/;
        return reg.test(name);
    },
    //  统一验证
    checkCommonField(name) {
        let reg = /^[\u4e00-\u9fa50-9a-zA-Z]{4,30}$/;
        return reg.test(name);
    },
    // idCard check
    checkIDCard(idCard) {
        // 验证身份证格式
        if (idCard.length === 18) {
            let reg = /^\d{17}[\d|X|x]$/;
            return reg.test(idCard);
        } else if (idCard.length === 15) {
            let reg = /^\d{15}$/;
            return reg.test(idCard);
        } else {
            return false;
        }
    },
    checkValEmpty(str) {
        // 验证是否为空
        if (
            str === undefined ||
            str === null ||
            str.length <= 0 ||
            str === 'undefined'
        ) {
            return true;
        } else {
            return false;
        }
    },
    // 验证佣金输入金额
    checkCommission(commission) {
        // 小于100且后面可以带4个小数点
        let reg = /^100$|^(\d|[1-9]\d)(\.\d{1,4})*$/;
        //一亿以内，保留四位小数
        //  /^([1-9]\d{0,7}|0)(\.\d{1,4})?$/
        // 如果通过的话，那么判断小数点的前几位数字
        return reg.test(commission);
    },
    // 验证渠道编号是否符合规则--4-8位以内数字+字母，区分大小写
    checkChannelNo(channelNo) {
        let reg = /^[\w\d]{4,8}$/;
        return reg.test(channelNo);
    },
    //验证是否包含空格
    checkSpace(val) {
        let reg = /^\s+$/;
        if (reg.test(val)) {
            return true;
        } else {
            return false;
        }
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
                JSON.stringify(item) == '{}'
            ) {
                obj[i] = null;
            }
        }
        return obj;
    },
    // 中文正则表达式
    checkChineseCharacter(str) {
        let reg = /^[\u4e00-\u9fa5]{2,}$/;
        return reg.test(str);
    },
    cardIDHide(cardid) {
        // 身份证 中间用* 显示
        if (cardid) {
            return cardid.replace(/^(.{6})(?:\d+)(.{4})$/, '$1****$2');
        } else {
            return '';
        }
    },
    checkPhone(phone) {
        // 验证电话号码格式
        let reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
        return reg.test(phone);
    },
    checkEmail(email) {
        // 验证邮箱格式
        let reg = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
        return reg.test(email);
    },
    checkVerifyCode(code) {
        // 验证验证码格式
        let reg = /^\d{6}$/;
        return reg.test(code);
    },
    checkDynamicCode(code) {
        // 验证邀请码格式
        let reg = /^[A-Za-z0-9]{4}$/;
        return reg.test(code);
    },
    // password check
    checkPassword(password) {
        // 验证密码格式
        let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        return reg.test(password);
    },
    // name check
    checkName(name) {
        // 验证用户名格式
        let reg = /^[\u4e00-\u9fa5]{2,17}$/;
        return reg.test(name);
    },
    //  账户名称的正则表达式
    checkUsername(name) {
        let reg = /^[\u4e00-\u9fa50-9a-zA-Z]{4,16}$/;
        return reg.test(name);
    },
    //  统一验证
    checkCommonField(name) {
        let reg = /^[\u4e00-\u9fa50-9a-zA-Z]{4,30}$/;
        return reg.test(name);
    },
    // idCard check
    checkIDCard(idCard) {
        // 验证身份证格式
        if (idCard.length === 18) {
            let reg = /^\d{17}[\d|X|x]$/;
            return reg.test(idCard);
        } else if (idCard.length === 15) {
            let reg = /^\d{15}$/;
            return reg.test(idCard);
        } else {
            return false;
        }
    },
    checkValEmpty(str) {
        // 验证是否为空
        if (
            str === undefined ||
            str === null ||
            str.length <= 0 ||
            str === 'undefined'
        ) {
            return true;
        } else {
            return false;
        }
    },
    // 验证佣金输入金额
    checkCommission(commission) {
        // 小于100且后面可以带4个小数点
        let reg = /^100$|^(\d|[1-9]\d)(\.\d{1,4})*$/;
        //一亿以内，保留四位小数
        //  /^([1-9]\d{0,7}|0)(\.\d{1,4})?$/
        // 如果通过的话，那么判断小数点的前几位数字
        return reg.test(commission);
    },
    // 验证渠道编号是否符合规则--4-8位以内数字+字母，区分大小写
    checkChannelNo(channelNo) {
        let reg = /^[\w\d]{4,8}$/;
        return reg.test(channelNo);
    },
    //验证是否包含空格
    checkSpace(val) {
        let reg = /^\s+$/;
        if (reg.test(val)) {
            return true;
        } else {
            return false;
        }
    },
    //电话脱敏
    //姓名脱敏
    // 自定义组件的整数的验证
    checkCustomNumberField(number) {
        let reg = /^\d{1,9}$/;
        return reg.test(number);
    },
    // new password check (新版的密码规则，可以是纯数字, 但是必须包含数字，只能是数字或者数字+字母，6到16位)
    checkNewPassword(password) {
        let reg = /^(?=[a-zA-Z0-9]*[0-9])[a-zA-Z0-9]{6,16}$/;
        return reg.test(password);
    },
};
