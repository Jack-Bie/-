const app = getApp();
Page({
  data: {
      imgs: [],
      user:app.globalData.user,
      majors:["专业1","专业2","专业3","专业4","专业5","专业6","专业7"],
      types:["问","槽"],
      major_label:"请选择>>",
      type_label:"请选择>>",
  },


  bindKeyInput: function (e) {
    this.setData({
      ['user.content']: e.detail.value,
    })
  },

  majorsSelect(e){
    //console.log(e);
    this.setData({
      ['user.major']:this.data.majors[e.detail.value],
      major_label:this.data.majors[e.detail.value],
    })
    //console.log(this.data.user);
  },

  typesSelect(e){
    //console.log(e);
    this.setData({
      ['user.type']:this.data.types[e.detail.value],
      type_label:this.data.types[e.detail.value],
    })
    //console.log(this.data.user);
  },

  onLoad: function (options) {

  },
  chooseImg(){
      let that = this;
      let len = this.data.imgs;
      if(len>=9){
          this.setData({
              lenMore: 1
          })
         

          return;
      }
      wx.chooseImage({
          success: (res)=>{
              let tempFilePaths = res.tempFilePaths;
              console.log(tempFilePaths)
              let imgs = that.data.imgs;
              for(let i=0;i<tempFilePaths.length;i++){
                  if(imgs.length<9){
                      imgs.push(tempFilePaths[i])
                  }else{
                      that.setData({
                          imgs
                      })
                      wx.showModal({
                          title: '提示',
                          content: '最多只能有九张图片'
                      })
                      return;
                  }
              }
              that.setData({
                  imgs
              })
          }
      })
  },
  previewImg(e){
      let index = e.currentTarget.dataset.index;
      let imgs = this.data.imgs;
      wx.previewImage({
          current: imgs[index],
          urls: imgs,
      })
  },
  deleteImg(e){
      let _index = e.currentTarget.dataset.index;
      let imgs = this.data.imgs;
      imgs.splice(_index,1);
      this.setData({
          imgs
      })
  },

  send(){
    wx.setStorage({
      data:this.data.user,
      key:"user",
    });
    wx.reLaunch({
      url: '../square/square?user='+JSON.stringify(this.data.user),
    })
  }
})
