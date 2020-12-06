import React from 'react'


function MovieDetails() {
    return (
        <div className="movieDetails">
        
        <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src="" className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4"></h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> 
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> 
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> 
              </li>
              <li className="list-group-item">
                <strong>TMDB Rating:</strong> 
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> 
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> 
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> 
              </li>
            </ul>
          </div>
        </div>
      </div>

        </div>
        
       
            
        
    )
}

export default MovieDetails
