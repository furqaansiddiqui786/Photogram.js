import React, {Component} from 'react';
import './App.css';
import Title from './components/Title'
import Photowall from './components/Photowall'
import {Route} from 'react-router-dom'
import AddPhoto from './components/AddPhoto';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      posts : [
        {
          id : 0,
          description : 'admin panel sample',
          imageLink : 'https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          id : 1,
          description : 'Cool dogs website',
          imageLink : 'https://images.pexels.com/photos/2882215/pexels-photo-2882215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        {
          id : 2,
          description : 'some techy stuff',
          imageLink : 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
      ]
    }
    this.removePhoto = this.removePhoto.bind(this)
    this.addPhoto = this.addPhoto.bind(this)
  }


  removePhoto(postRemoved){
    this.setState((state) => ({posts : state.posts.filter(post => post !== postRemoved)}))
  }

addPhoto(postsubmit){
  this.setState(state => ({posts : state.posts.concat([postsubmit])}))
}

  render() {
    console.log(this.state.posts)
    return ( 
    
    <div className = 'App'>
        <Route exact path = "/" render={() => (
             <div>
                  <Title heading={'PhotoGram'}/>
                  <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
             </div>

        )}/> 

        <Route path= "/AddPhoto" render = {({history}) => (
            <AddPhoto onAddPhoto={(addedPost) => {
                this.addPhoto(addedPost)
                history.push('/')
            }}/>
        )}/>
     </div>
    )
  }
}

export default App;
