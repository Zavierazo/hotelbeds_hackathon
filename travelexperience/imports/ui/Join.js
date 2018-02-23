
import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

class Join extends Component {

	buy(e) {
		if (e) e.preventDefault();
		FlowRouter.go('/buy?checkin=2018-03-25&checkout=2018-03-30&adults=2');
	}

	render() {
		let threeDots = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>'
		let star = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg-icons/sprites/icons.svg#olymp-star-icon"></use>';
		let joinView = <>
			<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
				<div className="ui-block">
					
					<div className="widget w-create-fav-page">					
						<div className="content">
							<div className="author-thumb">
								<img src="img/cindy.jpg" alt="photo" />
							</div>
							<h3 className="title">The Instagramer Cindy was here!</h3>
							<a href="#" onClick={this.buy} className="btn btn-bg-secondary btn-sm">Live the Experience now!</a>
						</div>
					</div>
				</div>
			</div>
		</>;

	return (
      joinView
    );
	}
}

export default Join;