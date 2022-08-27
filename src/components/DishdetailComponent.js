import React, {Component} from "react";
import Card from "react-bootstrap/Card";

class Dishdetail extends Component {

      renderComments(array){

                  const comments = array.map((element)=>{
                        return(
                              <ul className="list-unstyled">
                                    <li>{element.comment}</li>
                                    <li>--{element.author}, {new Date(element.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</li>
                              </ul>
                        );
                  });
                  return(
                  <div className="col-12 col-md-5 m-1">
                        <h4 className="">Comments</h4>
                        {comments}
                  </div>
            );
      }

      renderDish(dish){
            return(
                  <div  key={dish.id} className="col-12 col-md-5 m-1">
                        <Card>
                              <Card.Img width="100%" src={dish.image} alt={dish.name}/>
                              <Card.Body>
                              <Card.Title>{dish.name}</Card.Title>
                                    <Card.Text>{dish.description}</Card.Text>
                              </Card.Body>
                        </Card>
                  </div>

            );
      }

      render(){
            return (
                  <div className="row">
                        {this.renderDish(this.props.dishCurrent)}
                        {this.renderComments(this.props.dishCurrent.comments)}
                        
                  </div>
            );

      };
}

export default Dishdetail;

