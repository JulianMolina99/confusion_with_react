import React, { Component } from 'react';
import Dishdetail from './DishdetailComponent';
import Card from 'react-bootstrap/Card';

class Menu extends Component {
      
      constructor(props){
            super(props);
            this.state = {
                  selectedDish:null
            };
      }

      onDishSelect(dish){
            this.setState({selectedDish:dish});
      }

      renderDish(dish){
            return(<Dishdetail dishCurrent = {dish}/>);
      }

      render(){
            const menu = this.props.dishes.map((dish) => {
                  return (
                        <div key={dish.id} className="col-12 col-md-5 m-1">
                              <Card onClick={()=> this.onDishSelect(dish)}>
                                    <Card.Img width="100%" src={dish.image} alt={dish.name}/>
                                    <Card.ImgOverlay>
                                          <Card.Title>
                                                {dish.name}
                                          </Card.Title>
                                    </Card.ImgOverlay>
                              </Card>
                        </div>
                  );
            });

            return (
                  <div className="container">
                        <div className="row">
                              {menu}
                        </div>
                        
                        {this.renderDish(this.state.selectedDish)}

                  </div>
            );
      }
}

export default Menu;