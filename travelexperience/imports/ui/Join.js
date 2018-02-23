
import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

class Join extends Component {

	render() {
		let threeDots = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>'
		let joinView = <>
			<div className="col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-12 col-xs-12">
				<div className="ui-block">
					
					<div className="widget w-create-fav-page">
						<div className="icons-block">
							<svg className="olymp-star-icon left-menu-icon" data-toggle="tooltip" data-placement="right" data-original-title="FAV PAGE"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="svg-icons/sprites/icons.svg#olymp-star-icon"></use></svg>
					
							<a href="#" className="more">
								<svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }}/>
							</a>
						</div>
					
						<div className="content">
							<div className="author-thumb">
								<img src="img/cindy.jpg" alt="photo" />
							</div>
							<h3 className="title">The Instagramer Cindy was here!</h3>
							<a href="36-FavPage-SettingsAndCreatePopup.html" className="btn btn-bg-secondary btn-sm">Live the Experience now!</a>
						</div>
					</div>
				</div>
			</div>
		</>;
	}
}



