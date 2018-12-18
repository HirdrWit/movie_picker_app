import React from 'react';

class MovieRow extends React.Component{
    addMovie(){
        console.log("trying to add movie")
        console.log(this.props.movie.title)

    }
    
    render(){
        return <table key = {this.props.movie.id}>
        <tbody>
        <tr>
          <td>
            <img class = "image" alt = "poster" width = "180" height = "200" src={this.props.movie.poster_src}/>
          </td>
          <td>
            <h2>{this.props.movie.title}</h2>
            <p>{this.props.movie.overview}</p>
            <input class = "button" type = "button" onClick={this.addMovie.bind(this)} value = "Add"/>
          </td>
        </tr>
        </tbody>
      </table>
        
    }

}

export default MovieRow