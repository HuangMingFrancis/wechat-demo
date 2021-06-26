// pages/second/second.js
var config = require('../../config/author.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authors: [],
    articleList: [],
    page: 0,
    currentTab: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      authors: config.authors
    });

    this.getArticles(0);
    
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

  scan() {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },

  onTabClick(event) {
    console.log(event);
    let index = event.currentTarget.dataset.index;
    this.setData({
      currentTab: index
    })
    this.getArticles(index);

  }, 

  getArticles(index) {
    this.data.page = 0;
    let url = "https://wanandroid.com/article/list/" + this.data.page + "/json?author=" + this.data.authors[index];
    const that = this;
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: url,
      success (res) {
        wx.hideLoading()
        that.data.page += 1;
        console.log(res.data.data)
        that.setData({
          articleList: res.data.data.datas
        })
      }
    })
  }
})