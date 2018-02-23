import React, {Component} from 'react';
import axios from 'axios';
import {FormatNumber} from "./Ford";
import BigNumber from 'bignumber.js'

class Buy extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            hotel: undefined,
            selected: '',
            scheduler: undefined,
            checkIn: props.params.checkin,
            checkOut: props.params.checkout
        };
        this.getHotel(props.params.checkin, props.params.checkout).then();
        this.getSchedule(props.params.checkin, props.params.checkout).then();
        this.handleChange = this.handleChange.bind(this);
    }

    async getSchedule(checkIn, checkOut) {
        const url = 'http://10.175.56.57:8080/schedule/list?checkIn=' + checkIn + '&checkOut=' + checkOut;
        axios.get(url)
            .then(response => {
                console.log(response);
                this.setState({
                    scheduler: response.data
                });

            });
    }

    handleChange(e, id) {
        if (e) e.preventDefault();
        if (id === 1) {
            console.log(id + " " + e.target.value);
            this.setState({checkIn: e.target.value});
            if (e.target.value.length === 10 && this.state.checkOut.length === 10) {
                this.getHotel(e.target.value, this.state.checkOut).then();
                this.getSchedule(e.target.value, this.state.checkOut).then();
            }
        } else {
            console.log(id + " " + e.target.value);
            this.setState({checkOut: e.target.value});
            if (this.state.checkIn.length === 10 && e.target.value.length === 10) {
                this.getHotel(this.state.checkIn, e.target.value).then();
                this.getSchedule(this.state.checkIn, e.target.value).then();
            }
        }

    }

    async getHotel(checkIn, checkOut) {
        const url = 'http://10.175.56.57:8080/hotel/avail?hotelCode=169828&adults=' + this.props.params.adults + '&childrens=0&checkIn=' + checkIn + '&checkOut=' + checkOut;
        axios.get(url)
            .then(response => {
                console.log(response);
                this.setState({
                    hotel: response.data,
                    selected: response.data.length > 0 ? response.data[0].rateKey : undefined
                });

            });
    }


    // shouldComponentUpdate(nextProps, nextState) {
    //     return true;
    // }

    change(e, rateKey) {
        if (e) e.preventDefault();
        if (rateKey !== this.state.selected) {
            this.setState({selected: rateKey});
        }
    }

    renderPrice() {
        let price = null;
        if (this.state.hotel && this.state.scheduler) {
            let totalPrice = new BigNumber(0);
            for (let i = 0; i < this.state.hotel.length; i++) {
                if (this.state.hotel[i].rateKey === this.state.selected) {
                    totalPrice = totalPrice.plus(new BigNumber(this.state.hotel[i].price));
                }
            }
            for (let i = 0; i < this.state.scheduler.days.length; i++) {
                if (this.state.scheduler.days[i] && this.state.scheduler.days[i].price) {
                    totalPrice = totalPrice.plus(new BigNumber(this.state.scheduler.days[i].price));
                }
            }

            price =
                <>
                    <h1 style={{color: 'green'}}>{FormatNumber(totalPrice)} €</h1>
                </>

        }
        return price;
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
        let html =
            <>
                <div className="ui-block-title ui-block-title-small">
                    <h6 className="title" style={{fontSize: 15 + 'px'}}>HOTEL</h6>
                </div>
            </>;
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

    renderScheduler() {
        let html = null;
        if (this.state.scheduler) {
            html =
                <>
                    <div class="today-events-thumb">
                        <div class="date">
                            <div class="day-number">{this.state.scheduler.day}</div>
                            <div class="day-week">{this.state.scheduler.month}</div>
                        </div>
                    </div>
                </>;
        }
        return html;
    }

    renderSchedulers() {
        let html = null;
        if (this.state.scheduler) {
            html = this.state.scheduler.days.map((day) => (
                <>
                    <div class="card">
                        <div class="card-header" role="tab" id="headingTwo-1">
                            <div class="event-time">
                                <time datetime="2004-07-24T18:18">{day.day} <span
                                    style={{color: 'green'}}>{day.price}€</span></time>
                                <div class="more">
                                    <ul class="more-dropdown">
                                        <li>
                                            <a href="#">Mark as Completed</a>
                                        </li>
                                        <li>
                                            <a href="#">Delete Event</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h5 class="mb-0 title">
                                <a data-toggle="collapse" data-parent="#accordion"
                                   href={'#collapse' + day.day} aria-expanded="false"
                                   aria-controls="collapseTwo-1" class="collapsed">
                                    {day.title}
                                    <svg class="svg-inline--fa fa-angle-down fa-w-10" aria-hidden="true"
                                         data-prefix="fa" data-icon="angle-down" role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
                                        <path fill="currentColor"
                                              d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                                    </svg>
                                    <span class="event-status-icon completed" data-toggle="tooltip"
                                          data-placement="top" data-original-title="COMPLETED">
																			</span>
                                </a>
                            </h5>
                        </div>
                        <div id={'collapse' + day.day} class="collapse" role="tabpanel"
                             aria-labelledby="headingTwo-1">
                            <div class="card-body">
                                {day.description}
                            </div>
                        </div>

                    </div>
                </>));
        }
        return html;
    }

    render() {
        let calendar = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg-icons/sprites/icons.svg#olymp-month-calendar-icon"></use>'
        let mainView = <div className="container">
                <div className="row">


                    <div
                        className="col-xl-4 order-xl-1 col-lg-4 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none">
                        <div className="ui-block">


                            <div className="your-profile">

                                {this.renderHotel()}

                                <ol className="widget w-playlist">
                                    {this.renderHotels()}
                                </ol>

                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-4 order-xl-1 col-lg-4 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none">
                        <div className="ui-block">
                            <div className="ui-block-title">
                                <h6 className="title">Personal Information</h6>
                            </div>
                            <div className="ui-block-content">
                                <form>
                                    <div className="row">

                                        <div class="form-group date-time-picker label-floating" style={{width: 50 + '%'}}>
                                            <label class="control-label">Check-In</label>
                                            <input name="checkIn" value={this.state.checkIn}
                                                   onChange={(e) => this.handleChange(e, 1)}/>
                                            <span class="input-group-addon">
															<svg class="olymp-month-calendar-icon icon"
                                                                 dangerouslySetInnerHTML={{__html: calendar}}/>
														</span>
                                        </div>
                                        <div class="form-group date-time-picker label-floating" style={{width: 50 + '%'}}>
                                            <label class="control-label">Check-Out</label>
                                            <input name="checkOut" value={this.state.checkOut}
                                                   onChange={(e) => this.handleChange(e, 2)}/>
                                            <span class="input-group-addon">
															<svg class="olymp-month-calendar-icon icon"
                                                                 dangerouslySetInnerHTML={{__html: calendar}}/>
														</span>
                                        </div>

                                        <div className="form-group label-floating full-width">
                                            <label className="control-label">First Name</label>
                                            <input className="form-control" placeholder="Your first name" type="text"/>
                                        </div>

                                        <div className="form-group label-floating full-width">
                                            <label className="control-label">Your Email</label>
                                            <input className="form-control" placeholder="Your email" type="email"/>
                                        </div>

                                        <div className="form-group label-floating full-width">
                                            <label className="control-label">Last Name</label>
                                            <input className="form-control" placeholder="Your last name" type="text"/>
                                        </div>

                                        <div className="form-group label-floating full-width">
                                            <label className="control-label">Your Phone Number</label>
                                            <input className="form-control" placeholder="" type="phone" value="+34"/>
                                        </div>

                                        {this.renderPrice()}

                                        <button className="btn btn-secondary btn-lg full-width">Pay with Credit Card
                                        </button>

                                        <button className="btn btn-primary btn-lg full-width">Pay with Crypto Coin
                                        </button>

                                    </div>
                                </form>


                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-4 order-xl-1 col-lg-4 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none">
                        <div className="ui-block">

                            <div className="your-profile">
                                <div className="ui-block-title ui-block-title-small">
                                    <h6 className="title" style={{fontSize: 15 + 'px'}}>Planning</h6>
                                </div>
                                <div class="today-events calendar">
                                    {this.renderScheduler()}
                                    <div class="list">
                                        <div id="accordion-1" role="tablist" aria-multiselectable="true" class="day-event"
                                             data-month="12" data-day="2">
                                            {this.renderSchedulers()}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        ;

        return (
            mainView
        );
    }
}

export default Buy;
