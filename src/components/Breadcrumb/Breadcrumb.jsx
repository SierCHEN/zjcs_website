import React from 'react';
import { Breadcrumb as BreadcrumbAntd } from 'antd';

const { Item } = BreadcrumbAntd;

const Breadcrumb = props => {
    const { dataSource } = props;
    return(
             <BreadcrumbAntd separator=">" {...props}>
                {
                    dataSource.content.children.map((item, i) => {
                        return(
                            <Item key={`${item.className}`+`${i}`}
                                href={item.herf}
                                {...item}>
                                {item.children}
                            </Item>
                        )
                    
                    })
                }
            </BreadcrumbAntd>       
    )
}

export default Breadcrumb;