const app = getApp();
Page({
  data: {
    bannerList: [],
    articleList: [],
    page: 0
  },

  onLoad() {
    const that = this;
    wx.request({
      url: 'https://www.wanandroid.com/banner/json',
      success (res) {
        console.log(res.data.data)
        that.setData({
          bannerList: res.data.data
        })
      }
    })
    wx.request({
      url: 'https://www.wanandroid.com/article/top/json',
      success (res) {
        console.log(res.data)
        that.setData({
          articleList: res.data.data
        })
      }
    })
  },
  onItemClick(event) {
    let url = event.currentTarget.dataset.url;
    wx.navigateTo({
      url: "/pages/web/index?url=" + encodeURIComponent(url)
    })
  },
  collectClick(event) {
    console.log(event);
    let index = event.currentTarget.dataset.index;
    let collect = this.data.articleList[index].collect;
    this.data.articleList[index].collect = !collect;
    this.setData({
      articleList: this.data.articleList
    });

  },
  onReachBottom() {
    console.log('onReachBottom ' + this.data.page);
    let url = "https://www.wanandroid.com/article/list/" + this.data.page +"/json";
    const that = this;
    wx.request({
      url: url,
      success (res) {
        console.log(res.data)
        that.data.page += 1;
        that.data.articleList = that.data.articleList.concat(res.data.data.datas);
        console.log(that.data.articleList);
        that.setData({
          articleList: that.data.articleList,
          page: that.data.page
        })
      }
    })

  }
})