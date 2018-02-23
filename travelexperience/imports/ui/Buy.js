import React, {Component} from 'react';
import axios from 'axios';

class Buy extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {hotel: undefined, selected: '', scheduler: undefined};
        this.getHotel().then();
        this.getSchedule().then();
    }

    async getSchedule() {
        const url = 'http://10.175.56.57:8080/schedule/list?checkIn=' + this.props.params.checkin + '&checkOut=' + this.props.params.checkout;
        axios.get(url)
            .then(response => {
                console.log(response);
                this.setState({
                    scheduler: response.data
                });

            });
    }

    async getHotel() {
        const url = 'http://10.175.56.57:8080/hotel/avail?hotelCode=169828&adults=' + this.props.params.adults + '&childrens=0&checkIn=' + this.props.params.checkin + '&checkOut=' + this.props.params.checkout;
        axios.get(url)
            .then(response => {
                console.log(response);
                this.setState({
                    hotel: response.data,
                    selected: response.data.length > 0 ? response.data[0].rateKey : undefined
                });

            });
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
        let threeDots = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>'
        let arrow = '<use  xlink:href="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use>'
        let place = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#olymp-add-a-place-icon"></use>'
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
                                    <h6 className="title" style={{fontSize: 15 + 'px'}}>Schedule</h6>
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
