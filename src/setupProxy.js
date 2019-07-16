const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/opdata', {
    target: 'https://testopdata.linkedme.cc',
    changeOrigin: true,
    pathRewrite: {
      '^/opdata': ''
    }
  }))
  app.use(proxy('/data', {
    target: 'https://testdata.linkedme.cc',
    changeOrigin: true,
    pathRewrite: {
      '^/data': ''
    }
  }))
  app.use(proxy('/user', {
    target: 'https://testuser.linkedme.cc',
    changeOrigin: true,
    pathRewrite: {
      '^/user': ''
    }
  }))
  app.use(proxy('/file', {
    target: 'https://testfile.linkedme.cc',
    changeOrigin: true,
    pathRewrite: {
      '^/file': ''
    }
  }))
  app.use(proxy('/linkaccount', {
    // target: 'http://10.11.12.188:9011',
    target: 'http://192.168.251.115:8080',
    // target: 'http://10.10.12.240:8086',
    changeOrigin: true,
    // pathRewrite: {
    //   '^/linkaccount': ''
    // }
  }))
}