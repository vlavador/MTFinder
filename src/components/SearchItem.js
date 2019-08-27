import React, { Component } from 'react'
import axios from 'axios'


export default class SearchItem extends Component {
    
    componentWillMount(){
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let foo = params.get('name');
   axios.get('https://api.themoviedb.org/3/search/multi?api_key=76844ed5ec5c57b4b35836fb2faf0b90&query='+foo).then(res => console.log(res)).catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                    <p>hello</p>
            </div>
        )
    }
}

