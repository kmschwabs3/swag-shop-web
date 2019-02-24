import React, {Component} from 'react'
import './product.css';
import DataService from "../services/data-service";
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';

let ds = new DataService();
let ns = new NotificationService();

class Product extends Component {
	constructor(props) {
		super(props);

		this.state ={onWishList: ds.itemOnWishList()};
		//bind
		this.onButtonClicked = this.onButtonClicked.bind(this);
		this.onWishListChanged = this.onWishListChanged.bind(this);

	}

	componentDidMount() {
		ns.addObserver(NOTIF_WISHLIST_CHANGED, this,  this.onWishListChanged);
	}

	componentWillMount(){
		ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
	}

	onWishListChanged(newWishList) {
		this.setState({onWishList: ds.itemOnWishList(this.props.product)});
	}

	onButtonClicked = () => {
		if (this.state.onWishList) {
			ds.removeWishListItem(this.props.product);
		} else {ds.addWishListItem(this.props.product);
		}
	}

	render(){

		var btnClass;
		if (this.state.onWishList) {
			btnClass = "btn btn-danger";
		} else {
			btnClass = "btn btn-primary";
		}

		return(
			<div className="card product">
				<div class="card-body">
					<div className= "card-block">
						<h4 className="card-title productTitle">{this.props.product.title}</h4>
						<p className="card-text priceVal">Price: $ {this.props.product.price}</p>
						<a href="#" onClick = {()=> this.onButtonClicked()} className={btnClass}>{this.state.onWishList ? "Remove from Wish List" : "Add to Wish List"}</a>
					</div>
				</div>
			</div>
		);
	} 
}

export default Product;