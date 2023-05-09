import React from "react";
import image1 from '../assets/image1.jpg'

function Card() {
    return (
        <div className="card">
            <img src={image1} alt=""/>
            <div className="card-body">
                <h4 className="card-title">My title</h4>
                <p className="card-text text-secondary"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, ipsam sit tempore quas recusandae labore, perspiciatis sapiente explicabo incidunt ducimus beatae illo similique est iusto quibusdam, quaerat tenetur. Nam, quae.
    Mollitia deleniti autem corrupti error quisquam consequuntur inventore est, omnis id et sit aut alias minima fuga ut expedita quo doloremque totam accusamus tenetur molestias exercitationem fugiat necessitatibus quam? Et.
    Assumenda non quas porro voluptas enim eveniet dolor molestiae totam delectus consequatur. Tempore, dolor ullam! Ex, sed. </p>
            </div>
        </div>
    )
}




export default Card;