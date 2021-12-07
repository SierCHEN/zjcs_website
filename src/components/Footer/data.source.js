import React from 'react';

export const Footer10DataSource = {
    wrapper: { className: 'home-page-wrapper footer1-wrapper' },
    OverPack: { className: 'footer1', playScale: 0.2 },
    block: {
      className: 'home-page',
      gutter: 0,
      children: [
        {
          name: 'block0',
          xs: 24,
          md: 6,
          className: 'block',
          title: {
            className: 'logo',
            children:
              'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
          },
          childWrapper: {
            className: 'slogan',
            children: [
              {
                name: 'content0',
                children: '以多维感知为核心的智能物联网解决方案提供商、数字城市服务运营商',
              },
            ],
          },
        },
        {
          name: 'block1',
          xs: 24,
          md: 6,
          className: 'block',
          title: { children: '产品' },
          childWrapper: {
            children: [
              { name: 'link0', href: '#', children: '热门产品' },
              { name: 'link1', href: '#', children: '产品购买方法' },
              { name: 'link2', href: '#', children: '您的建议' },
              { name: 'link3', href: '#', children: '产品迭代' },
            ],
          },
        },
        {
          name: 'block2',
          xs: 24,
          md: 6,
          className: 'block',
          title: { children: '关于' },
          childWrapper: {
            children: [
              { href: '#', name: 'link0', children: 'FAQ' },
              { href: '#', name: 'link1', children: '联系我们' },
            ],
          },
        },
        {
          name: 'block3',
          xs: 24,
          md: 6,
          className: 'block',
          title: { children: '加入我们' },
          childWrapper: {
            children: [
              { href: '#', name: 'link0', children: '作为投资商' },
              { href: '#', name: 'link1', children: '作为合作伙伴' },
              { href: '#', name: 'link1', children: '作为团队成员' },
            ],
          },
        },
      ],
    },
    copyrightWrapper: { className: 'copyright-wrapper' },
    copyrightPage: { className: 'home-page' },
    copyright: {
      className: 'copyright',
      children: (
        <span>
          <span>©2021浙江城市数字技术有限公司</span>
        </span>
      ),
    },
  };