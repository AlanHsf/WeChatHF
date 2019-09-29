// pages/classic/classic.js
import {ClassicModel} from '../../models/classic.js'
import {LikeModel} from '../../models/like.js'

let classicModel = new ClassicModel()
let likeModel = new LikeModel()

Page({
  /**
   *页面的初始数据
   */
  data: {
    classic: null,
    latest:true, 
    first:false,
    likeCount:0,
    likeStatus:false
   // 把classic：res添加到data中了
  },

  /**
   * 生命周期函数--监听页面加载
   */ 
  onLoad:function(options){
    // 数据更新 
    // this.data.test = 2 这是错误的写法 
    classicModel.getLatest((res)=>{
      // this._getLikeStatus(res.id, res.type)
      this.setData({
        classic:res,
        // 扩展运算符...res
        likeCount:res.fav_nums,
        likeStatus:res.like_status

         })
        // console.log(this.data)
        //  latestClassic latestIndex currentClassic currentIndex
    })
    
  },
  onLike:function(event){
    console.log(event)
    let behavior = event.detail.behavior
    likeModel.like(behavior,this.data.classic.id, 
      this.data.classic.type)
  },

  onNext:function(event){
   this._updataClassic('next') 
  },


  onPrevious:function(event){
    this._updataClassic('previous') 
   },


  _updataClassic: function(nextOrPrevious){
    let index = this.data.classic.index
    classicModel.getClassic(index, nextOrPrevious, (res)=>{
      // console.log(res) 
      this._getLikeStatus(res.id, res.type)
      this.setData({
        classic:res,
        latest:classicModel.isLatest(res.index),
        first:classicModel.isFirst(res.index)
      })
      // console.log(res)
      
    })
  },

  _getLikeStatus:function (artID, category){
    likeModel.getClassicLikeStatus(artID,category,
      (res)=>{
        this.setData({
          likeCount:res.fav_nums,
          likeStatus:res.like_status
      })
    })
  },

  /* 
  *生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    // let promise = new Promise((resolve, reject) =>{
    //   wx.request({
    //     url: 'http://bl.7yue.pro/v1/classic/latest',
    //     header: {
    //       appkey: "AbhC311G7ruCDp57"
    //     },
    //     success: (res) => {
    //       resolve(res)
    //     }
    //   })
    // })
    // promise.then((res) => {
    //   console.log(res)
    // })
  }
 
})
