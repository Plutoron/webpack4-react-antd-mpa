/** 获取存储空间大小
 * @param fileSize Byte
 */
const getFileShowSize = fileSize => {
    if (fileSize) {
        var KLength = 1024
        var MLength = KLength * 1024
        var GLength = MLength * 1024
        var TLength = GLength * 1024

        var showStr = ''
        var T = 0
        var G = 0
        var M = 0
        var K = 0
        T = fileSize / TLength
        G = fileSize / GLength
        M = fileSize / MLength

        T = parseInt(T.toFixed(2))
        G = parseInt(G.toFixed(2))
        M = parseInt(M.toFixed(2))

        if (T > 0) {
            // 如果大于1T则显示为2.34TB样式
            T = fileSize / TLength
            showStr = T.toFixed(2) + 'TB'
        } else if (G > 0) {
            // 如果大于1G则显示为2.34GB样式
            G = fileSize / GLength
            showStr = G.toFixed(2) + 'GB'
        } else if (M > 0) {
            // 如果大于1M则显示为2.34MB样式
            M = fileSize / MLength
            showStr = M.toFixed(2) + 'MB'
        } else {
            // 显示为2.34KB
            K = fileSize / KLength
            if (K.toFixed(2)) {
                showStr = K.toFixed(2) + 'KB'
            } else {
                showStr = '--'
            }
        }
        return showStr
    } else {
        return '--'
    }
}
// 获取url里面的搜索参数
const getSearchParam = search => search
  .replace('?', '')
  .split('&')
  .reduce((pre, v) => {
    const arr = v.split('=')
    pre[arr[0]] = arr[1]

    return pre
  }, {})

const momentZh = {
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
        '_'
    ),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split(
        '_'
    ),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
        LT: 'Ah点mm分',
        LTS: 'Ah点m分s秒',
        L: 'YYYY-MM-DD',
        LL: 'YYYY年MMMD日',
        LLL: 'YYYY年MMMD日Ah点mm分',
        LLLL: 'YYYY年MMMD日ddddAh点mm分',
        l: 'YYYY-MM-DD',
        ll: 'YYYY年MMMD日',
        lll: 'YYYY年MMMD日Ah点mm分',
        llll: 'YYYY年MMMD日ddddAh点mm分'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour(h, meridiem) {
        let hour = h
        if (hour === 12) {
            hour = 0
        }
        if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
            return hour
        }
        if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12
        }
        // '中午'
        return hour >= 11 ? hour : hour + 12
    },
    meridiem(hour, minute) {
        const hm = hour * 100 + minute
        if (hm < 600) {
            return '凌晨'
        }
        if (hm < 900) {
            return '早上'
        }
        if (hm < 1130) {
            return '上午'
        }
        if (hm < 1230) {
            return '中午'
        }
        if (hm < 1800) {
            return '下午'
        }
        return '晚上'
    },
    calendar: {
        sameDay() {
            return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT'
        },
        nextDay() {
            return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT'
        },
        lastDay() {
            return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT'
        },
        nextWeek() {
            let startOfWeek
            let prefix
            startOfWeek = moment().startOf('week')
            prefix = this.diff(startOfWeek, 'days') >= 7 ? '[下]' : '[本]'
            return this.minutes() === 0
                ? `${prefix}dddAh点整`
                : `${prefix}dddAh点mm`
        },
        lastWeek() {
            let startOfWeek
            let prefix
            startOfWeek = moment().startOf('week')
            prefix = this.unix() < startOfWeek.unix() ? '[上]' : '[本]'
            return this.minutes() === 0
                ? `${prefix}dddAh点整`
                : `${prefix}dddAh点mm`
        },
        sameElse: 'LL'
    },
    ordinalParse: /\d{1,2}(日|月|周)/,
    ordinal(number, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return `${number}日`
            case 'M':
                return `${number}月`
            case 'w':
            case 'W':
                return `${number}周`
            default:
                return number
        }
    },
    relativeTime: {
        future: '%s内',
        past: '%s前',
        s: '几秒',
        m: '1 分钟',
        mm: '%d 分钟',
        h: '1 小时',
        hh: '%d 小时',
        d: '1 天',
        dd: '%d 天',
        M: '1 个月',
        MM: '%d 个月',
        y: '1 年',
        yy: '%d 年'
    },
    week: {
        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
        dow: 1, // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    },
    // 输入 66秒 返回 00:01:06
    formatTime: time => {
        let t = Math.floor(time / 3600)
        let t1 = Math.floor((time % 3600) / 60)
        let t2 = time % 60
        return `${t ? (t < 10 ? `0${t}` : t) : '00'}:${
            t1 ? (t1 < 10 ? `0${t1}` : t1) : '00'
        }:${t2 ? (t2 < 10 ? `0${t2}` : t2) : '00'}`
    },
    // 比较稳定的类型判断
    type: obj => {
        let class2type = {}
        'Array Date RegExp Object Error'
            .split(' ')
            .forEach(e => (class2type['[object ' + e + ']'] = e.toLowerCase()))

        if (obj == null) return String(obj)
        return typeof obj === 'object'
            ? class2type[Object.prototype.toString.call(obj)] || 'object'
            : typeof obj
    }
}

export { getFileShowSize, getSearchParam, momentZh }
