export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx89ea4f16f0a23d4f",
    // 公众号appSecret
    appSecret: "2f89cc85aa2c750cc3294c125356d291",
    // 模板消息id
    templateId: "JxCiqXLkuTkgfKmGCatTGBCLs_rvnb6HBy8e2ev1lSw",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oebKK5khHN-ysVgqoMUWfwSbN9Qc","oebKK5j71Xh___ueJGYxXNLbZ5yw"],
     
    // 信息配置
    // 所在省份
    province: "陕西",
    // 所在城市
    city: "西安",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "老婆", "year": "1997", "date": "12-04", "type": ''},
      {"name": "老公", "year": "1998", "date": "06-14", "type": ''},
    ],
    // 在一起的日子，格式同上
    loveDate: "2018-04-19",
    // 结婚纪念日
    marryDate: "2022-08-08"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
