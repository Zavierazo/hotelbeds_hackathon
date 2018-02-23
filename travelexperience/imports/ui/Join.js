
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
			<aside class="col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-xs-12" style={{float:'right'}}>
				<div className="ui-block">
					
					<div className="widget w-create-fav-page">
						<div className="icons-block">
							<svg className="olymp-star-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FAV PAGE" dangerouslySetInnerHTML={{__html: threeDots }} />
					
							<a href="#" className="more">
								<svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }}/>
							</a>
						</div>
					
						<div className="content">
							<div className="author-thumb">
								<img src="img/cindy.jpg" alt="photo" />
							</div>
							<h3 className="title">The Instagramer Cindy was here!</h3>
							<a href="#" onClick={this.buy} className="btn btn-bg-secondary btn-sm">Live the Experience now!</a>
						</div>
					</div>
				</div>
			</aside>
		</>;

	return (
      joinView
    );
	}
}

export default Join;