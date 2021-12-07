import React from 'react';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { getChildrenToRender } from '../../assets/utils';

const { Item, SubMenu, ItemGroup } = Menu;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: undefined,
    };
  }

  phoneClick = () => {
    const phoneOpen = !this.state.phoneOpen;
    this.setState({
      phoneOpen,
    });
  };

  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const { phoneOpen } = this.state;
    const navData = dataSource.Menu.children;

    const navChildren = navData.map((item) => {
      const { children: a, subItem, ...itemProps } = item;
      if (subItem) {
        // console.log(a);  {herf: '/Introduction', children: Array(1)}
        // console.log(a.className);  undefined
        // console.log(a.children[0].children);  {$$typeof: Symbol(react.element), type: 'span', key: null, ref: null, props: {…}, …}
        return (
          <SubMenu
            key={item.name}
            //JSX可扩展属性
            {...itemProps}
            title={
              <div
                {...a}
                className={`header0-item-block ${a.className}`.trim()}
              >
                {a.children.map(getChildrenToRender)}
              </div>
            }
            popupClassName="header0-item-child"
          >
              {/* {subItem.map(($item, ii) => {
                const { children: childItem } = $item;

                const child = childItem.href ? (
                  <a {...childItem}>
                    {childItem.children.map(getChildrenToRender)}
                  </a>
                ) : (
                  <div {...childItem}>
                    {childItem.children.map(getChildrenToRender)}
                  </div>
                );

                return (
                  <Item key={$item.name || ii.toString()} {...$item}>
                    {child}
                  </Item>
                );
              })} */}

              {subItem.map(($item, ii) => {
                const { children: childItem } = $item;

                const child = childItem.children.map(($$item, iii) => {
                  return(
                    <Item key={`${$$item.children}`+`${iii}`} {...$$item}>
                      <Link to={`../${$$item.herf}`} {...$$item}>
                      {$$item.children}
                      </Link>
                    </Item>
                  )
                })

                return (
                  <ItemGroup key={`${$item.className}`+`${ii}`} {...$item}>
                    {child}
                  </ItemGroup>
                );
              })}
          </SubMenu>
        );
      }
      return (
        <Item key={item.name} {...itemProps}>
          <a {...a} className={`header0-item-block ${a.className}`.trim()}>
            {a.children.map(getChildrenToRender)}
          </a>
        </Item>
      );
    });
    const moment = phoneOpen === undefined ? 300 : null;
    return (
      <TweenOne
        component="header"
        animation={{ opacity: 0, type: 'from' }}
        {...dataSource.wrapper}
        {...props}
      >
        <div
          {...dataSource.page}
          className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
        >
          <TweenOne
            animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
            {...dataSource.logo}
          >
            <img width="100%" src={dataSource.logo.children} alt="img" 
                 onClick={this.handleClick}/>
          </TweenOne>
          {isMobile && (
            <div
              {...dataSource.mobileMenu}
              onClick={() => {
                this.phoneClick();
              }}
            >
              <em />
              <em />
              <em />
            </div>
          )}
          <TweenOne
            {...dataSource.Menu}
            animation={
              isMobile
                ? {
                    height: 0,
                    duration: 300,
                    onComplete: (e) => {
                      if (this.state.phoneOpen) {
                        e.target.style.height = 'auto';
                      }
                    },
                    ease: 'easeInOutQuad',
                  }
                : null
            }
            moment={moment}
            reverse={!!phoneOpen}
          >
            <Menu
              mode={isMobile ? 'inline' : 'horizontal'}
              defaultSelectedKeys={['sub0']}
              theme="dark"
            >
              {navChildren}
            </Menu>
          </TweenOne>
        </div>
      </TweenOne>
    );
  }
}

export default Header;
