const BASE_URL = `http://localhost:3000`;

function NetAPI(url, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${BASE_URL}${url}`,
      data: Object.assign({}, params),
      header: { 'Content-Type': "application/json" },
      success: resolve,
      fail: reject
    })
  })
}
module.exports = {
  request(url, page = 1, count = 20) {
    const params = { start: (page - 1) * count, count: count }
    return NetAPI(url, params).then(res => res.data)
  }
}

