import React from 'react';
import { List,Card, Avatar, Icon } from 'antd';



const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Characters =(props)=>
{
    return( 
      
            
    <List
    grid={{
      gutter: 12,
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3,
      xxl: 3,
    }}
    dataSource={props.data}
    renderItem={item => (
      <List.Item>
        <Card title={<a href={`/characters/${item.id}`}>{item.name}</a>}> 
        <img src={item.image}/> 
        </Card>
      </List.Item>
    )}
  />

    )};
export default Characters;