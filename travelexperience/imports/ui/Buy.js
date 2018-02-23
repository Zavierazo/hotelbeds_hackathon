import React, {Component} from 'react';
import axios from 'axios';
class Buy extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {hotel: undefined, selected: ''};
        this.getHotel().then();
    }

    async getHotel() {
        const url = 'http://10.175.56.57:8080/hotel/avail?hotelCode=15857&adults='+this.props.params.adults+'&childrens=0&checkIn='+this.props.params.checkin+'&checkOut='+this.props.params.checkout;
        axios.get(url)
            .then(response => {
                console.log(response);
                this.setState({hotel: response.data});

            });

    }

    componentWillUpdate() {
        if (this.state.hotel) {
            for (var i = 0; i < this.state.hotel.length; i++) {
                if (this.state.selected === null && this.state.hotel[i].cheaper) {
                    this.setState({selected: this.state.hotel[i].rateKey});
                    break;
                }
            }
        }
    }

    change(e, rateKey) {
        if (e) e.preventDefault();
        if (rateKey !== this.state.selected) {
            this.setState({selected: rateKey});
        }
    }

    renderHotels() {
        let hotels = null;
        if (this.state.hotel) {
            hotels = this.state.hotel.map((hotel) => (
                <>
                    <li id={hotel.rateKey} className="js-open-popup"
                        style={{background: hotel.rateKey === this.state.selected ? '#dfdff1' : ''}}
                        onClick={(e) => this.change(e, hotel.rateKey)}>
                        <div className="composition">
                            <a href="javascript:void(0)" className="composition-name">{hotel.room}</a>
                            <a href="javascript:void(0)" className="composition-name">{hotel.board}</a>
                            <a href="javascript:void(0)" className="composition-author">{hotel.cancellationPolicies}</a>
                        </div>
                        <div className="composition-time">
                            <a className="published" style={{color: 'green'}}>{hotel.price} €</a>
                        </div>
                    </li>
                </>
            ));
        }
        return hotels;
    }

    renderHotel() {
        let html = null;
        if (this.state.hotel) {
            let hotel = this.state.hotel[0];
            html =
                <>
                    <div className="ui-block-title ui-block-title-small">
                        <h6 className="title" style={{fontSize: 15 + 'px'}}>{hotel.hotelName}</h6>
                    </div>
                    <div className="card" style={{
                        width: 90 + '%',
                        margin: 0 + ' auto'
                    }}>
                        <img className="card-img-top" src={hotel.image} alt={hotel.hotelName}/>
                    </div>
                </>;
        }
        return html;
    }


    render() {
        let threeDots = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>'
        let arrow = '<use  xlink:href="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use>'
        let mainView = <div className="container">
            <div className="row">
                <div className="col-xl-8 order-xl-2 col-lg-8 order-lg-2 col-md-11 order-md-1 col-sm-11 col-xs-11">
                    <div className="ui-block">
                        <div className="ui-block-title">
                            <h6 className="title">Personal Information</h6>
                        </div>
                        <div className="ui-block-content">


                            <form>
                                <div className="row">

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="form-group label-floating">
                                            <label className="control-label">First Name</label>
                                            <input className="form-control" placeholder="Your first name" type="text"/>
                                        </div>

                                        <div className="form-group label-floating">
                                            <label className="control-label">Your Email</label>
                                            <input className="form-control" placeholder="Your email" type="email"/>
                                        </div>

                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="form-group label-floating">
                                            <label className="control-label">Last Name</label>
                                            <input className="form-control" placeholder="Your last name" type="text"/>
                                        </div>
                                        <div className="form-group label-floating">
                                            <label className="control-label">Your Phone Number</label>
                                            <input className="form-control" placeholder="" type="phone" value="+34"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <button className="btn btn-secondary btn-lg full-width">Pay with Credit Card
                                        </button>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <button className="btn btn-primary btn-lg full-width">Pay with Crypto Coin
                                        </button>
                                    </div>

                                </div>
                            </form>


                        </div>
                    </div>
                </div>

                <div
                    className="col-xl-4 order-xl-1 col-lg-4 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none">
                    <div className="ui-block">


                        <div className="your-profile">

                            {this.renderHotel()}

                            <ol class="widget w-playlist">
                                {this.renderHotels()}
                            </ol>

                        </div>


                    </div>
                </div>
            </div>
        </div>;

        return (
            mainView
        );
    }
}

export default Buy;
