import React from 'react'


function MovieDetails() {
    return (
        <div className="movieDetails">
        <div classNameName="jumbotron">
        <img src="..." alt="..." class="img-thumbnail" width="200px" height="200"></img>
        <h1>Titre</h1>
        <p>Note *****</p>

        <div>
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                 </tr>
            </thead>
            <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
            </tbody>
            </table>
        </div>

        </div>
        </div>
        
       
            
        
    )
}

export default MovieDetails
