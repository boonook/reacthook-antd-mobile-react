const constant = {
  baseUrl:{
    dev:"",
    pro:''
  },
  /// 性别常量
  sex: {
    man: 0,
    woman: 1,
    getText (s) {
      switch (Number(s)) {
        case this.man :
          return '男'
        case this.woman:
          return '女'
        default:
          return null
      }
    }
  },
  ///系统常量
  system: {
    timeoutTime:30000,///超时时间设定
    success: 200,///系统网络请求正常
    defaultPWD: '123456',
    ///启用
    enable:1,
    ///不起用
    unable:0,
    /// 非系统内置
    notSys: 0,
    /// 保存
    save: 0,
    /// 提交
    submit: 1,
    /// 已读
    hasRead: 1,
    /// 未读
    unRead:0,
    ///未开始
    unStart:1,
    ///进行中
    processing:2,
    ///已结束
    end:3,
    ///已取消
    canceled:9,
    ///token刷新间隔(ms)
    refreshTokenInterval:Infinity
  },
  ///接口错误响应码
  errorCode: {
    ///登陆超时
    timeout:30000,
    ///非法的令牌
    illegalToken:3,
    ///账号在其他地方登陆
    otherLogin:4,
    default:0
  },
  fileType: {
    ///文档类型
    documentTypes: [
      'doc',
      'docx',
      'xls',
      'xlsx',
      'ppt',
      'pptx',
      'pdf',
      'txt',
    ],
    ///视频类型
    videoTypes: [
      'swf',
      'mp4',
      'avi',
      'rmvb',
    ],
    ///图片类型
    imageTypes:[
      'jpeg',
      'jpg',
      'png',
      'gif',
    ],

    /// 压缩包
    zipTypes:[
      'zip',
      'rar',
      '7z',
    ],

    ///excel
    excel:[
      'xls',
      'xlsx',
    ],

    /**
     *
     * @param {"image"|"video"|"document"} fileType
     * @return {string}
     */
    getFileAccept: function (fileType) {
      if (!fileType) return ''
      switch (fileType) {
        case 'image':return this.imageTypes.map(i => `image/${i}`).join(',')
        case 'video':return this.videoTypes.map(i => `video/${i}`).join(',')
        case 'document':return `application/pdf,text/plain,application/msword,application/vnd.ms-powerpoint,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
        case 'excel':return `application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
        default:return ''
      }
    }
  },
};

export default constant;
