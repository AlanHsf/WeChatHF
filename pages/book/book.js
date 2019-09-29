// pages/book/book.js
import {
  BookModel
} from '../../models/book.js'
import {
  random
} from '../../util/common.js'
const bookModel = new BookModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 纯粹的callback 回调地狱，剥夺return的能力
    // promise 代码风格，多个异步等待合并
     books:[],
     searching:false,
     more:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    bookModel.getHotList()
       .then(res=>{
         this.setData({
           books:res
         })
         console.log(this.data)
       })
    },
  
    onSearching(event){
      this.setData({
        searching:true
      })
    },

    onCancel(event){
      this.setData({
        searching:false
      })
    },
/**
   * 页面上拉触底事件的处理函数
   */
 
   onReachBottom(){
    this.setData({
      more:random(16)
    })
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})