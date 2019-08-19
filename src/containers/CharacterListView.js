import React, { Component } from 'react'
import Characters from '../components/Character';
import axios from 'axios'


// const listData = [];
// for (let i = 0; i < 23; i++) {
//   listData.push({
//     href: 'http://ant.design',
//     title: `ant design part ${i}`,
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     description:
//       'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     content:
//       'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//   });
// }
 
class CharacterList extends React.Component {
    state={
        characters:[]
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/characters')
            .then(res =>{
                this.setState({
                    characters:res.data
                });
                console.log(res.data);
            })
    }
    render() {
        return (
            <div>
                <Characters data={
                   this.state.characters
                }/>
            </div>
        )
    }
}
 export default CharacterList;