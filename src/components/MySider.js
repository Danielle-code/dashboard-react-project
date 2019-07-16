import React, {
	Component
} from 'react';
import {
	Menu,
	Layout,
	Icon
} from 'antd'; //antd 图标
import propTypes from 'prop-types';

//以下是自建
import {
	MenuDatas
} from '../router'; //引入侧边栏数据
const {
	Sider
} = Layout
const SubMenu = Menu.SubMenu

class Mysider extends Component {
	static PropType = {
		collapsed: propTypes.boolean //收起当前状态
	}
	render() {

		return (
			<Sider collapsed={this.props.collapsed} >
                <div className="logo" >
		          <img id="logo" src={require(this.props.collapsed ? '../static/img/logo.png' : '../static/img/logo2.png')} alt="" />
		        </div>
                <Menu 
                     mode="inline"
                     defaultSelectedKeys={['1']}  
                     defaultOpenKeys={['sub1']}
                     style={{ height: '100%' }}
                     theme = "dark"
                >
                {
	                MenuDatas.map(item => {
	                	return item.hasSubMenu ? <SubMenu key={item.id} title={

					                <span>
					                <Icon type={item.icon}/>
					                  {this.props.collapsed ? null : <span>{item.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> }
					                </span>
					              }

	                	>
		                	 {
			                  item.subMenu.map(sItem => {
			                    return <Menu.Item key={sItem.id}>{sItem.name}</Menu.Item>
			                  })
			                 }
	                	</SubMenu>:
	                	<Menu.Item key={item.id} >
			                  <Icon type={item.icon}/>
			                  {this.props.collapsed ? null : <span>{item.name}</span>}
		                </Menu.Item>
		                })
	            }
                </Menu>
              </Sider>
		)
	}
}
export default Mysider