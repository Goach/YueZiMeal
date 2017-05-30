// day.js
const netRequest = require('../../library/net.js')
Page({
  data: {
    title: '',
    listData: [],
    itemView: "item_2",
    url:`/days/getList`,
    loading: true
  },
  onLoad: function (params) {
    this.setData({
      title:params.day
    });
    netRequest.request(this.data.url)
      .then(d => {
        console.log("data:" + this.data)
        this.setData({ listData: d.data,loading: false })
      })
      .catch(e =>{
        this.setData({ title: '获取数据异常', listData: [],loading: false})
        console.error(e)
      })
  },
  onReady() {
    wx.setNavigationBarTitle({ title: "第" + this.data.title + "天"});
  }
})