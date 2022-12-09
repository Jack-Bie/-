
Page({
  data: {
      imgs: []
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
  }

})
