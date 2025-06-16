
const schemes = [
    {
        key: 'douyin',
        value: query => `snssdk1128://search?keyword=${encodeURIComponent(query)}`,
        icon: '抖音图标URL'
    },
    {
        key: 'mt',
        value: query => `imeituan://www.meituan.com/search?q=${encodeURIComponent(query)}`,
        icon: '美团图标URL'
    },
    {
        key: 'mtwm',
        value: query => `meituanwaimai://waimai.meituan.com/search?query=${encodeURIComponent(query)}`,
        icon: '美团外卖图标URL'
    },
    {
        key: 'dzdp',
        value: query => `dianping://searchshoplist?keyword=${encodeURIComponent(query)}`,
        icon: '大众点评图标URL'
    },
    {
        key: 'taobao',
        value: query => `taobao://s.taobao.com/?q=${encodeURIComponent(query)}`,
        icon: '淘宝图标URL'
    },
    {
        key: 'tmall',
        value: query => `tmall://page.tm/search?q=${encodeURIComponent(query)}`,
        icon: '天猫图标URL'
    },
    {
        key: 'jd',
        value: query => `openapp.jdmobile://virtual?params={"des":"productList","keyWord":"${query}","from":"search","category":"jump"}`,
        icon: '京东图标URL'
    },
    {
        key: 'pdd',
        value: query => `pinduoduo://yangkeduo.com/search_result.html?search_key=${encodeURIComponent(query)}`,
        icon: '拼多多图标URL'
    },
    {
        key: 'xhs',
        value: query => `xhsdiscover://search/result?keyword=${encodeURIComponent(query)}`,
        icon: '小红书图标URL'
    },
    {
        key: 'kuaishou',
        value: query => `kwai://search?keyword=${encodeURIComponent(query)}`,
        icon: '快手图标URL'
    },
    {
        key: 'weibo',
        value: query => `sinaweibo://searchall?q=${encodeURIComponent(query)}`,
        icon: '微博图标URL'
    },
    {
        key: 'bilibili',
        value: query => `bilibili://search?keyword=${encodeURIComponent(query)}`,
        icon: 'B站图标URL'
    },
    {
        key: 'zhihu',
        value: query => `zhihu://search?q=${encodeURIComponent(query)}`,
        icon: '知乎图标URL'
    },
    {
        key: 'douban',
        value: query => `douban:///search?q=${encodeURIComponent(query)}`,
        icon: '豆瓣图标URL'
    },
    {
        key: 'smzdm',
        value: query => `smzdm://search?json={"channelName":"home","search_type":"1","keyWord":"${query}"}`,
        icon: '什么值得买图标URL'
    },
    {
        key: 'yddict',
        value: query => `yddict:///search?q=${encodeURIComponent(query)}`,
        icon: '有道词典图标URL'
    }
];