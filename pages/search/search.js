// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:"",
    isShowKeyboard: false,
    history:["历史记录1","历史记录2","历史记录3","历史记录4","历史记录5","历史记录6"],
    hotSearch:["hotSearch1","hotSearch2","hotSearch2","hotSearch3","hotSearch4","hotSearch5","hotSearch6"]
  },

  searchRes(){
    wx.hideKeyboard();
    this.setData({isShowKeyboard:false});
    wx.navigateTo({
      url: '/pages/searchRes/searchRes',
    })
  },

  bindKeyInput: function (e) {
    this.setData({
      isShowKeyboard: true,
      inputValue: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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