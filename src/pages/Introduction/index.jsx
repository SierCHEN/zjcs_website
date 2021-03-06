import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav0 from '../../components/Nav/Nav0';
import Footer1 from '../../components/Footer/Footer1';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Content from './Content0';

import { Nav00DataSource } from '../../components/Nav/data.source';
import { Footer10DataSource } from '../../components/Footer/data.source';
import { BreadcrumbDataSourceIntro } from '../../components/Breadcrumb/data.source';
import { 
  Content0DataSource
 } from './data.source';

import './less/antMotionStyle.less';
import '../../components/index.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Breadcrumb
        id="Breadcrumb"
        key="Breadcrumb"
        dataSource={BreadcrumbDataSourceIntro}
      />,
      <Content 
        id="Content"
        key="Content"
        dataSource={Content0DataSource}
      />,
      <Footer1
        id="Footer1_0"
        key="Footer1_0"
        dataSource={Footer10DataSource}
        isMobile={this.state.isMobile}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}