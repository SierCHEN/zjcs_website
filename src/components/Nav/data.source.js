import React from 'react';

export const Nav00DataSource = {
    wrapper: { className: 'header0 home-page-wrapper' },
    page: { className: 'home-page' },
    logo: {
      className: 'header0-logo',
      children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
    },
    Menu: {
      className: 'header0-menu',
      children: [                                     //navData
        {                                             //item, itemProps
          name: 'item1',
          className: 'header0-item',
          children: {                                 //a
            // herf: '#',
            className: 'title1',
            children: [
              {
                children: (
                  <span>
                    <p>关于城数</p>
                  </span>
                ),
                name: 'text',
                className: 'kw2tfj82nx-editor_css',
              },
            ],
          },
          subItem: [
            {                                        //$item
              className: 'item-sub',
              children: {                            //childItem
                className: 'item-sub-item',
                children: [                          //child
                  {                                  //$$item
                    name: 'content',
                    className: 'item-content',
                    children: '企业介绍',
                    herf: '/Introduction',
                  },
                  {
                    name: 'content',
                    className: 'item-content',
                    children: '企业文化',
                    herf: '/Culture',
                  },
                  {
                    name: 'content',
                    className: 'item-content',
                    children: '发展历程',
                    herf: '/Development',
                  },
                ],
              },
            },
          ],
        },
        {
          name: 'item2',
          className: 'header0-item',
          children: {
            // herf: '#',
            className: 'title2',
            children: [
              {
                children: (
                  <span>
                    <p>业务领域</p>
                  </span>
                ),
                name: 'text',
                className: 'kw2uszs8r8-editor_css',
              },
            ],
          },
          subItem: [
            {
              className: 'item-sub',
              children: {
                className: 'item-sub-item',
                children: [
                  {
                    name: 'content',
                    className: 'item-content',
                    children: '智慧建筑DBO',
                    herf: '#',       
                  },
                  {
                    name: 'content',
                    className: 'item-content',
                    children: '行业智慧化平台',
                    herf: '#',
                  },
                  {
                    name: 'content',
                    className: 'item-content',
                    children: '城市大数据业务',
                    herf: '#',
                  },
                  {
                    name: 'content',
                    className: 'item-content',
                    children: '企业数字化转型',
                    herf: '#',
                  },
                ],
              },
            },
          ],
        },
        {
          name: 'item3',
          className: 'header0-item',
          children: {
            // herf: '#',
            className: 'title3',
            children: [
              {
                children: (
                  <span>
                    <p>主营产品</p>
                  </span>
                ),
                name: 'text',
                className: 'kw2uxlmjdu-editor_css',
              },
            ],
          },
          subItem: [
            {
              className: 'item-sub',
              children: {
                className: 'item-sub-item',
                children: [
                  {
                    name: 'content',
                    className: 'item-content',
                    children: '智能楼宇一体化平台',
                    herf: '#',
                  },
                ],
              },
            },
          ],
        },
        {
          name: 'item4',
          className: 'header0-item',
          children: {
            // herf: '#',
            className: 'title4',
            children: [
              {
                children: (
                  <span>
                    <p>我们的团队</p>
                  </span>
                ),
                name: 'text',
                className: 'kw2uxlmjdu-editor_css',
              },
            ],
          },
          subItem: [
            {
              className: 'item-sub',
              children: {
                className: 'item-sub-item',
                children: [
                  {
                    name: 'content',
                    className: 'item-content',
                    children: '软硬件研发团队',
                    herf: '#',
                  },
                  {
                    name: 'content',
                    className: 'item-content',
                    children: '咨询工程师团队',
                    herf: '#',
                  },
                  {
                    name: 'content',
                    className: 'item-content',
                    children: '电子智能化工程团队',
                    herf: '#',
                  },
                  {
                    name: 'content',
                    className: 'item-content',
                    children: '停车运营事业部',
                    herf: '#',
                  },
                  {
                    name: 'content',
                    className: 'item-content',
                    children: '网络安全服务团队',
                    herf: '#',
                  },
                ],
              },
            },
          ],
        },
        {
          name: 'item5',
          className: 'header0-item',
          children: {
            // herf: '#',
            className: 'title5',
            children: [
              {
                children: (
                  <span>
                    <p>加入我们</p>
                  </span>
                ),
                name: 'text',
                className: 'kw2uxlmjdu-editor_css',
              },
            ],
          },
          subItem: [
            {
              className: 'item-sub',
              children: {
                className: 'item-sub-item',
                children: [
                  {
                    name: 'content',
                    className: 'item-content',
                    children: '合作伙伴',
                    herf: '#',
                  },
                  {
                    name: 'content',
                    className: 'item-content',
                    children: '人才需求',
                    herf: '#',
                  },
                  {
                    name: 'content',
                    className: 'item-content',
                    children: '员工风采',
                    herf: '#',
                  },
                  {
                    name: 'content',
                    className: 'item-content',
                    children: '工作环境',
                    herf: '#',
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    mobileMenu: { className: 'header0-mobile-menu' },
  };