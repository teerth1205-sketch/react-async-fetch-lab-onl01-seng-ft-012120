// create your App component here
import React, {Component} from 'react'

export default class App extends Component {
    state = {

    }
 
 componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log(json)
            })
    }   
    
    render(){
        return(
            <div>

            </div>
        )
    }
}