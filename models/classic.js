import { 
  HTTP
} 
from "../util/http.js";

  class ClassicModel extends HTTP{
    getLatest(sCallback){
      this.request({
        url:'classic/latest',
        success:(res)=>{
          sCallback(res)
          this._setLatestIndex(res.index)
          let key = this._getKey(res.index)
          wx.setStorageSync(key, res)
        }
      })
    }
    getClassic(index,nextOrPrevious, sCallback){
      // 先缓存中寻找数据，没有 在去API获取然后中写入缓存中
      // key 确定key
      let key = nextOrPrevious =='next'?
      this._getKey(index + 1):this._getKey(index - 1)
      let classic = wx.getStorageSync(key)
      if(!classic){
        this.request({
          // 模版字符串`classic/${index}/${nextOrPrevious}`
          url:`classic/${index}/${nextOrPrevious}`,
          success:(res)=>{
            wx.setStorageSync(
              this._getKey(res.index),res)
            sCallback(res)
          }
        })
      }
      else{
        sCallback(classic )
      }
    }

    
    isFirst(index){
      return index == 1 ? true :false   
    }

    isLatest(index){
      let latestIndex = this._getLatestIndex()
      return latestIndex == index?true:false
    }

    getMyFavor(success){
      const params = {
        url: 'classic/favor',
        success:success
      }
      this.request(params)
    }

    _setLatestIndex(index){
      wx.setStorageSync('latest', index);
        
    }
    _getLatestIndex(){
     let index =wx.getStorageSync('latest');
      return index
    }

    _getKey(index){
      const key = 'classic-' + index
      return key 
    }
  }
  
  export {ClassicModel}