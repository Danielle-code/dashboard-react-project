//以下是用到的跳转页面文件
import Appcenter from '../pages/Appcenter/Appcenter'
import Applist from '../pages/Applist/Applist'
import Account from '../pages/Account/Account'
import Auth from '../pages/Auth/Auth'
//以下侧边栏数据

//暴露数组对象：MenuDatas
export const MenuDatas = [{
		name: "应用中心",
		pathName: '/',
		component: Appcenter,
		hasSubMenu: true,
		icon: 'home',
		id: 'sub1',
		subMenu: [{
				name: '应用概览',
				pathName: '/',
				component: Appcenter,
				hasSubMenu: false,
				icon: 'home',
				id: '1'
			}, {
				name: '应用列表',
				pathName: '/',
				component: Applist,
				hasSubMenu: false,
				icon: 'home',
				id: '2'
			}

		]
	}, {
		name: "管理中心",
		pathName: '/',
		component: Account,
		hasSubMenu: true,
		icon: 'form',
		id: 'sub2',
		subMenu: [{
				name: '账号管理',
				pathName: '/',
				component: Account,
				hasSubMenu: false,
				icon: 'form',
				id: '3'
			}, {
				name: '授权管理',
				pathName: '/',
				component: Auth,
				hasSubMenu: false,
				icon: 'form',
				id: '4'
			}

		]
	}, {
		name: "信息中心",
		pathName: '/',
		component: Account,
		hasSubMenu: true,
		icon: 'form',
		id: 'sub3',
		subMenu: [{
			name: '用户反馈',
			pathName: '/',
			component: Account,
			hasSubMenu: false,
			icon: 'form',
			id: '4'
		}, {
			name: '消息通知',
			pathName: '/',
			component: Account,
			hasSubMenu: false,
			icon: 'form',
			id: '5'
		}, ]
	}, {

		name: '文档中心',
		pathName: 'https://pagedoc.lkme.cc/',
		// component:'',
		hasSubMenu: false,
		icon: 'home',
		id: ''

	}

]