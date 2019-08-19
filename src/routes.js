import React from 'react';
import {Route} from 'react-router-dom';
import CharacterList from './containers/CharacterListView';
import CharacterDetail from './containers/CharacterDetailView'
import Header from './containers/header/header'
import FolkTaleList from './containers/FolktaleListView'
import FolkTaleDetail from './containers/FolktaleDetailView'
import About from './components/About'

const BaseRouter = () =>(

    <div>
            <Route exact path="/" component={Header} />
            <Route exact path="/characters" component={CharacterList} />
            <Route exact path="/characters/:characterID" component={CharacterDetail} />
            <Route exact path="/stories" component={FolkTaleList} />
            <Route exact path="/stories/:folktaleID" component={FolkTaleDetail} />
            <Route exact path="/about" component={About} />
    </div>
)

export default BaseRouter;