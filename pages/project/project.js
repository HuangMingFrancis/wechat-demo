// pages/project/project.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }, 
  skipTest(event) {
    wx.navigateTo({
      url: '../test/test',
    })

    // wx.redirectTo({
    //   url: '../test/test',
    // })

    // wx.reLaunch({
    //   url: '../test/test',
    // })
  },
  setStorageTest(event) {
    wx.setStorage({
      key: 'name',
      data: 'huangm',
      success(res) {
        console.log("storage success")
      },
      fail(res) {
        console.log("storage fail " + res.data)
      }
    })
    console.log("storage end")
  }, 
  getStorageTest(event) {
    const that = this
    wx.getStorage({
      key: 'name',
      success (res) {
        that.setData({
          name: res.data
        })
        console.log(res.data)
      }
    })
    // var name = wx.getStorageSync('name')
    // console.log('name: ' + name)
    // that.setData({
    //   name: name
    // })
    console.log('get Storage end')
  },
  deleteStorageTest(event) {
    const that = this
    wx.removeStorage({
      key: 'name',
      success(res) {
        that.getStorageTest()
      }
    })
  },
  scanCode(event) {
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log(res)
      },
      fail(res) {
        console.log(res)
      }
    })
  },
  onClick(event) { 
    console.log(event)   
    wx.showToast({
      title: event.detail.toastContent,
      duration: 2000
    })
  }
})