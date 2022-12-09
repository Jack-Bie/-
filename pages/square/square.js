// pages/square/square.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    praised:false,
    collected:false,
    commented:false,
    postList:[
     {
      photo: '/img/img/tx.jpg',
      name: '张三',
      major_tag: '英语专业',
      time: '2022-11-11',
      type:'问',
      content:'这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一',
      praisePost: 6,
      collect:6,
      comment:6
     },
     {
      photo: '/img/img/tx.jpg',
      name: '李华',
      major_tag: '英语专业',
      time: '2022-11-11',
      type:'槽',
      content:'是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容是一段内容',
      praisePost: 6,
      collect:7,
      comment:8
     }
    ],
},

  //前往搜索页
  goToSearch(){
    wx.navigateTo({
      url: '../search/search',
    })
  },

  //前往他人主页
  goToOthers(){
    console.log("others");
    wx.navigateTo({
      url: '/pages/othersIndex/othersIndex',
    })
  },

  //前往评论页,评论
  goToComment(){
    wx.navigateTo({
      url: '/pages/chat/chat',
    })
    console.log("comment");
    if(this.data.commented){
      this.setData({
        commented:false,
      })
    }
    else this.setData({commented:true});
  },

  //点赞,收藏
  praise(){
    console.log("praise");
    if(this.data.praised){
      this.setData({
        praised:false,
      })
    }
    else this.setData({praised:true});
  },

  collect(){
    console.log("collect");
    if(this.data.collected){
      this.setData({
        collected:false,
      })
    }
    else this.setData({collected:true});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})