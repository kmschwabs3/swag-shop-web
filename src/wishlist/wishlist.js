import React, {Component} from 'react'
import './wishlist.css';

import ProductCondensed from '../product-condensed/product-condensed';

class WishList extends Component {
	constructor(props) {
		super(props);
		this.state = {wishList:[
				{
					title:"Test name",
					price:19.99,
					_id:"123test"
				},
				{
					title:"Test name2",
					price:20.99,
					_id:"1234test"
				},
				{
					title:"Test name3",
					price:1.99,
					_id:"12345test"
				}
			]}
		
		//Bind
		this.createWishList = this.createWishList.bind(this);
	}


	createWishList = () => {
		const list = this.state.wishList.map((product) =>
			<ProductCondensed product={product} key={product._id}/>
		);
		return (list);
	}

	render(){
		return(
			<div className="card ">
				<div class="card-body">
					<div className= "card-block">
						<h4 className="card-title">Wish List</h4>
						<ul className="list-group wishlist-list">
							{this.createWishList()}
						</ul>
					</div>
				</div>
			</div>
		);
	} 
}

export default WishList;