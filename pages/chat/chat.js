// pages/chat/chat.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowKeyboard:false,
    commentContent:"感谢分享",
    id:0,
    post:{},
    praised: false,
    collected: false,
    commented: false,
    chatComment:app.globalData.chatComment,
    user:app.globalData.user,
  },


  comment(){
    wx.showLoading({
      title: '数据加载中...',
    })
    wx.hideKeyboard();
    this.setData({isShowKeyboard:false});
    let chatComent = [];
    let id =  this.data.id;
    chatComent.push(this.data.user);
    for (let item in this.data.chatComment){
      chatComent.push(this.data.chatComment[item]);
    };
    this.setData({
      chatComment:chatComent,
      commented: true,
      ['post.comment']:this.data.post.comment + 1,
    })
    //console.log(this.data.chatComment);
    app.globalData.chatComent = this.data.chatComent;
    app.globalData.post[id].commented = true;
    app.globalData.post[id].comment = app.globalData.post[id].comment + 1;
    wx.hideLoading();
  },

  bindKeyInput: function (e) {
    this.setData({
      isShowKeyboard: true,
      ['user.content']: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      id:options.id - 1,
      praised:JSON.parse(options.praised),
      collected:JSON.parse(options.collected),
      post:JSON.parse(options.post),
    });
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