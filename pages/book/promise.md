    // const hotList = bookModel.getHOtList()
    // hotList.then(
    //   res => {
    //     console.log(res),
    //     bookModel.getMyBookCount()
    //     .then(res => {
    //       console.log(res)
    //       bookModel.getMyBookCount()
    //       .then(res => {
    //         console.log(res)
    //       })
    //     })
    //   } 
    // )
    // Promise是对象
    // 对象是可以保存对象，函数不可以保存状态
    // Promise 第一步
    // const promise = new Promise((resolve, reject)=>{
    // 第二步 异步代码，写下Promise的函数中 
    // promise中有三种状态pending  fulfilled  rejected
    // 分别表示进行中 已成功 和已失败
    //   wx.getSystemInfo({
    //     success: res => resolve(res),
    //     fail: error => reject(error),
    //   });
    // })
    // 第三步
    //   promise.then(
    //     res => console.log(res),
    //     error => console.log(error)
    //   ) 