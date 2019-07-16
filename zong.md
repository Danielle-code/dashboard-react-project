 安装的插件：
 npm install axios
 npm install react-router-dom --save-dev
 npm install antd  --save
 npm install sass-loader node-sass --save-dev


 1.函数组件：(只包含一个 render 方法，并且不包含 state)
 function Zujian(props){
 return(
	<button>

	</button>
 )
}

2.深拷贝：
Object.assign(target, ...sources);

var a = {a:1,b:2}

Object.assign({c:3,d:4},…a)


快速创建数据列表：数组

3.Array(5).fill({name:'linda', age: 18, sex: 1})

结果是：
 { name: 'linda', age: 18, sex: 1 },
  { name: 'linda', age: 18, sex: 1 },
  { name: 'linda', age: 18, sex: 1 },
  { name: 'linda', age: 18, sex: 1 },
  { name: 'linda', age: 18, sex: 1 } ]


4.x => x*x
 function(x){return x*x} 

5. 跨域问题  
linkaccount
1在script-start.js中，端口号 9011
2在server.js  const ip = '/linkaccount'
3在setupproxy.js 
  app.use(proxy('/linkaccount', {
     target: 'http://10.11.12.188:9011',
     changeOrigin: true,
  }))

4在hosts中 127.0.0.1 10.11.12.188

linkpage
1在script-start.js中，端口号 8090   //端口号设什么亦可
2在server.js  const ip = '/i'
3在setupproxy.js 
  app.use(proxy('/linkaccount', {
     target: 'http://10.11.12.188:8090',  //必须是
     changeOrigin: true
  }))

4在hosts中 127.0.0.1 10.11.12.188    //127.0.0.1 www.linkedme.cc



  