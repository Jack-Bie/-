// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    post:[{
      id : 1,
      avatar:"../../img/img/avatar.jpg",
      name:"张三",
      major:"法律专业",
      grade:"本科一年级",
      time:"2022-11-11",
      type:"问",
      content:"这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容",
      praise:6,
      collect:6,
      comment:3,
      commented:false,
    },
    {
      id : 2,
      avatar:"../../img/img/123.jpeg",
      name:"李华",
      major:"英语专业",
      grade:"本科二年级",
      time:"2022-10-11",
      type:"槽",
      content:"想回家想疯了想回家想疯了想回家想疯了想回家想疯了想回家想疯了想回家想疯了想回家想疯了想回家想疯了",
      praise:5,
      collect:6,
      comment:1,
      commented:false,
    },
    {
      id : 3,
      avatar:"../../img/img/456.jpeg",
      name:"王武",
      major:"体育专业",
      grade:"本科三年级",
      time:"2022-9-01",
      type:"问",
      content:"不知道说什么不知道说什么不知道说什么不知道说什么",
      praise:4,
      collect:8,
      comment:2,
      commented:false,
    },
    {
      id : 4,
      avatar:"../../img/img/789.jpeg",
      name:"里斯",
      major:"新闻专业",
      grade:"本科一年级",
      time:"2022-12-21",
      type:"问",
      content:"无所事事发个动态",
      praise:3,
      collect:2,
      comment:4,
      commented:false,
    },
    {
      id : 5,
      avatar:"../../img/img/tx.jpg",
      name:"周立",
      major:"艺术专业",
      grade:"本科四年级",
      time:"2022-8-21",
      type:"槽",
      content:"不想开学不想开学不想开学不想开学不想开学不想开学不想开学不想开学不想开学不想开学",
      praise:10,
      collect:6,
      comment:3,
      commented:false,
    },
    ],
    chatComment:[{
      avatar:"../../img/img/contact.png",
      name: "路人甲",
      major: "物理专业",
      time : "2022-12-01",
      content:"感谢分享,说的真好!",
    },
    {
      avatar:"../../img/img/contact-filling.png",
      name: "路人乙",
      major: "数学专业",
      time : "2022-12-11",
      content:"好无聊好无聊好无聊好无聊好无聊好无聊",
    },
  ],
  user:{
    avatar:"../../img/img/tx.jpg",
    name: "我是用户",
    major: "小程序专业",
    grade: "本科二年级",
    time : "2022-10-10",
    content:"我是小程序用户我是小程序用户我是小程序用户我是小程序用户",
    type:"问",
    id: 0,
  }
  }
})
