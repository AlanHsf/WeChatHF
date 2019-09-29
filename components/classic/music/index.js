// components/classic/music/index.js
import {classicBeh} from '../classic-beh.js'

const mMgr = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   * 动画api css3 canvas 游戏
   * 现成的
   */
  behaviors:[classicBeh],
  properties: {
   src:String,
   title:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing:false,
    pauseSrc:'images/player@pause.png',
    playSrc:'images/player@play.png'
  },
  // hidden 不能触发attached detached ready created生命周期函数

  attached:function(event){
    this._recoverStatus(),
    this._monitorSwitch()
  },

  detached: function (event){
    // mMgr.stop()
  },

  /**
   * 组件的方法列表
   */

  methods: {
    onPlay: function(event){
      // 图片切换
      if(!this.data.playing){
        this.setData({
          playing:true
        })
        mMgr.src = this.properties.src
        mMgr.title = this.properties.title
      }else{
        this.setData({
          playing:false
        })
        mMgr.pause()
      }
    },
  _recoverStatus:function(){
    if(mMgr.paused){
        this.setData({
          playing:false
        })
        return
      }
      if(mMgr.src == this.properties.src){
        this.setData({
          playing:true
        })
      }
    },

    _monitorSwitch: function () {
      mMgr.onPlay(() => {
        this._recoverStatus()
      })
      mMgr.onPause(() => {
        this._recoverStatus()
      })
      mMgr.onStop(() => {
        this._recoverStatus()
      })
      mMgr.onEnded(() => {
        this._recoverStatus()
      })
    }

  }
})
