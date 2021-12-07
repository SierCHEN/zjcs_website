import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { getChildrenToRender } from '../../assets/utils';

const Content = props => {
    const { dataSource } = props;
    const { contentWrapper : child, pictureWrapper } = dataSource;
    return (
      <Fragment>
        <div {...pictureWrapper}></div>
        <div {...child}>
          {child.children.map((item, i) => {
            return(
              <div key={`${item.name}`+`${i}`}
                  {...item}>
                {item.children.map(getChildrenToRender)}
              </div>
            )
          })}
        </div>
      </Fragment>
    );
}

export default Content;
