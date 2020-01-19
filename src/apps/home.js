import { Component } from 'react'
import { render } from 'react-dom'
import { EventEmitter } from 'fbemitter'
import moment from 'moment'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import { momentZh } from '@helpers/util'
import '@helpers/util.css'
import '@helpers/flexbox/flexbox.css'
import './apps.css'
import 'antd/dist/antd.less'

import Home from '@pages/home'

window.emitter = new EventEmitter()

moment.locale('zh-cn', momentZh)

class App extends Component {
  render() {
    return (
        <LocaleProvider locale={zhCN}>
            <Home />
        </LocaleProvider>
    )
  }
}

render(<App />, document.getElementById('app'))

// 3.26.0

// import { ConfigProvider, locales } from 'antd'

// <ConfigProvider locale={locales.zh_CN}>
//     <XXX >
// </ConfigProvider>