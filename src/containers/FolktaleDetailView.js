import React, { Component } from 'react'
import Folktales from '../components/Folktale';
import axios from 'axios'
import {Card} from 'antd'
import './_character.css'

class FolkTaleDetail extends React.Component {
    state = {
      folktales: {}
    };
  
    componentDidMount() {
      const folktaleID = this.props.match.params.folktaleID;
      axios.get(`http://127.0.0.1:8000/api/stories/${folktaleID}`).then(res => {
        this.setState({
          folktales : res.data
        });
        console.log(res.data)
      });
     
    }
  
    render() {
        return (
            <div>
                {/* <Articles data={
                   this.state.articles
                }/> */}
                <Card title={this.state.folktales.title}>
                    <p>{this.state.folktales.body}</p>
                    <img src={this.state.folktales.image} alt=""/>
                </Card>
            </div>
        )
    }
}
 export default FolkTaleDetail;