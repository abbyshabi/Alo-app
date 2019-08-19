import React, { Component } from 'react'
import Character from '../components/Character';
import axios from 'axios'
import {Card} from 'antd'
import './_character.css'

class CharacterDetail extends React.Component {
    state = {
      character: {}
    };
  
    componentDidMount() {
      const characterID = this.props.match.params.characterID;
      axios.get(`https://alo-app.herokuapp.com/api/characters/${characterID}`).then(res => {
        this.setState({
          character: res.data
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
                <Card title={this.state.character.name}>
                    <p>{this.state.character.description}</p>
                    <img src={this.state.character.image} alt=""/>
                </Card>
            </div>
        )
    }
}
 export default CharacterDetail;