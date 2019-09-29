// components/episode/episode.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //  properties 和data，小程序默认为一个对象，
    // 假若在properties，data中都设置index这个属性，则data中的会被properties覆盖
    index: {
      type:Number,
      // 内存泄漏(无限递归调用)，千万不要在observer中修改自身属性
      observer:function(newval, oldVal, changedPath){
        let val = newval < 10?'0'+newval:newval
        this.setData({
          _index: val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    months: ['一月', '二月', '三月', '四月', '六月', '七月',
    '八月','九月','十月', '十一月', '十二月'
  ],
    year: 0,
    month: '',
    _index: ''
  },

  attached: function(){
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()

    this.setData({
      year: year,
      month: this.data.months[month]
    })
    },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
