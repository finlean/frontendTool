/** 字段验证的正则集合
 * @Author: c.y
 * @Date: 2018-10-24
 * @Last Modified by: c.y
 * @Last Modified time: 2018-10-24
 */

export default {
    // 验证手机号的格式, 长度11位，且包含199等新出现的号码
    checkPhone(phone) {
        let reg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
        return reg.test(phone);
    },
    // 验证邮箱格式
    checkEmail(email) {
        let reg = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
        return reg.test(email);
    },
    // 验证密码格式--必须包含英文和数字，不能是纯数字和纯字母
    checkPassword(password) {
        let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        return reg.test(password);
    },
    // 新版的密码规则，可以是纯数字, 但是必须包含数字，只能是数字或者数字+字母，6到16位
    checkNewPassword(password) {
        let reg = /^(?=[a-zA-Z0-9]*[0-9])[a-zA-Z0-9]{6,16}$/;
        return reg.test(password);
    },
    //验证验证码格式--6位纯数字
    checkVerifyCode(code) {
        let reg = /^\d{6}$/;
        return reg.test(code);
    },
    // 验证邀请码格式---数字和英文的组合，长度为4位
    checkDynamicCode(code) {
        let reg = /^[A-Za-z0-9]{4}$/;
        return reg.test(code);
    },
    // 验证渠道编号是否符合规则--4-8位以内数字+字母，区分大小写
    checkChannelNo(channelNo) {
        let reg = /^[\w\d]{4,8}$/;
        return reg.test(channelNo);
    },
    // 验证中文名字，中文字符的长度2-6个
    checkName(name) {
        let reg = /^[\u4e00-\u9fa5]{2,6}$/;
        return reg.test(name);
    },
    // 账户名称---包含中文数字英文,长度为4,16
    checkUsername(name) {
        let reg = /^[\u4e00-\u9fa50-9a-zA-Z]{4,16}$/;
        return reg.test(name);
    },
    // 验证身份证格式--弱验证，只限制身份证的长度，以及输入的内容只能为数字和Xx
    checkIDCard(idCard) {
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
    // 验证是否为空
    checkValEmpty(str) {
        return  str === undefined ||
            str === null ||
            str.length <= 0 ||
            str === 'undefined';
    },
    // 验证佣金输入金额,小于100且后面可以带4个小数点
    checkCommission(commission) {
        let reg = /^100$|^(\d|[1-9]\d)(\.\d{1,4})*$/;
        return reg.test(commission);
    },
    //验证是否包含空格
    checkSpace(val) {
        let reg = /^\s+$/;
        return reg.test(val);
    }
};
