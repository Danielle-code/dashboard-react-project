import React, {
  Component
} from 'react';


import logo from './logo.svg';
import './App.css';

import {
  Layout
} from 'antd'; //布局

import {
  DatePicker
} from 'antd'; //antd 日期选择器
import {
  Menu,
  Button,
  Dropdown,
  message,
  Icon,
  Row,
  Col
} from 'antd'; //antd 图标


import axios from "./server"


import propTypes from 'prop-types' //声明并验证

import moment from 'moment';

//以下引入自写的
import Mysider from './components/MySider'

//以下自建的属性
const {
  MonthPicker,
  RangePicker
} = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const ButtonGroup = Button.Group;

/*创建组件
 x => x*x
 function(x){return x*x} */
const {
  SubMenu
} = Menu;
const {
  Header,
  Footer,
  Sider,
  Content
} = Layout; //死布局

class App extends Component {
  static PropType = {
    collapsed: propTypes.boolean
  }
  /*初始化的状态*/
  construactor(props) {
    this.state = {
      index: 0
    }
  }

  // //event
  // //jsx



  login = () => {
    const params = {
      email: "demo@linkedme.cc",
      pwd: "1qaz",
    }
    // const params = {
    //   email: "yanduo",
    //   password: "GAOyanduo1",
    // }
    axios.post('/user/login', params).then(res => {
      console.log(res)
      // if (res.ret = undefined) {
        // const go_url = localStorage.getItem('go_url') || '/account'
        // this.props.history.push(go_url)
        // document.cookie = `account_token=${res.body.account_token}`
        // localStorage.setItem('email', this.state.email)
        // localStorage.setItem('go_url', '')
        // localStorage.setItem('isAuthenticated', 1)
      // } else {
      //   message.error(res)
      // }
    })
  }
  render() {
    const menu = (
      <Menu>
          <Menu.Item key="1">登出</Menu.Item>
        </Menu>
    );
    this.login()
    return (

      <div className="App">
            <Layout hasSider="true" style={{ minHeight: '100vh' }}> 
              <Mysider/>
              <Layout>
                 <Header style={{ background: '#fff', padding: 0 }} >
                    <div>
                      <Row>
                        <Col span={12}>
                          时段选择
                          <RangePicker
                            defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                            format={dateFormat}
                          />
                        </Col>
                        <Col span = {3}>
                          <ButtonGroup>
                            <Button>live</Button>
                            <Button>test</Button>
                          </ButtonGroup>
                        </Col>
                        <Col span={3}>                                                   
                          <Icon type="notification" size="large" />
                        </Col>
                        <Col span={6}>                                                   
                          <Dropdown overlay={menu}>
                            <Button style={{marginLeft:8}}>
                               name <Icon type="down"/>
                            </Button>
                          </Dropdown>
                        </Col>
                      </Row>
                    </div>             
                 </Header>
                 <Content style={{ margin: '16px 16px 0' }}>
                    <div style={{ padding: '24px 24px 6px', background: '#fff', minHeight: 360, boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)' }}>
                
                    </div>
                 </Content>
                 <Footer style={{ textAlign: 'center' }}>北京微方程科技有限公司  ©2015-2017京ICP备15003545号  LinkedME All Rights Reserved
                  </Footer>
              </Layout>
              
            </Layout>
           
        </div>
    )
  }


}

export default App;