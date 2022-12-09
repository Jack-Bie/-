// pages/square/square.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    post:app.globalData.post,
    id:0,
},

  //前往搜索页
  goToSearch(){
    wx.navigateTo({
      url: '../search/search',
    })
  },

  //前往他人主页
  goToOthers: function(e){
    //console.log(e.target.id);
    this.setData({id:e.target.id-1});
    //console.log(this.data.id);
    let id = this.data.id;
    wx.navigateTo({
      url: `/pages/othersIndex/othersIndex?id=${id}`,
    })
  },

  //前往评论页,评论
  goToComment(){
    wx.navigateTo({
      url: '/pages/chat/chat',
    })
    if(this.data.commented){
      this.setData({
        commented:false,
      })
    }
    else this.setData({commented:true});
  },

  //点赞,收藏
  praise(e){
    let id = e.currentTarget.id;
    this.setData({id:id});
    let praise = 'post['+(id-1)+'].praise';
    //console.log(this.data.post[id-1].praise);
    if(this.data.praised){
      let praiseNum = this.data.post[id-1].praise;
      this.setData({
        praised:false,
        [praise]: praiseNum - 1,
      })
    }
    else {
      let praiseNum = this.data.post[id-1].praise;
      this.setData({
        praised:true,
        [praise]:praiseNum + 1,
      });
    }
    //console.log(this.data.post[id-1].praise);
  },

  collect(e){
    let id = e.currentTarget.id;
    this.setData({id:id});
    let collect = 'post['+(id-1)+'].collect';
    console.log(this.data.post[id-1].collect);
    if(this.data.collected){
      let collectNum = this.data.post[id-1].collect;
      this.setData({
        collected:false,
        [collect]: collectNum - 1,
      })
    }
    else {
      let collectNum = this.data.post[id-1].collect;
      this.setData({
        collected:true,
        [collect]: collectNum + 1,
      });
    }
    console.log(this.data.post[id-1].collect);
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