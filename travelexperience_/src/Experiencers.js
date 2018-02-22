
import React, { Component } from 'react';
import { Route } from 'react-route/react-route';

class Experiencers extends Component {

  render() {
  	let chat = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use>'
  	let threeDots = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>'
  	let happy = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>'
    let mainView = 
		<Route path = '/experiencers'>
	    	<div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="ui-block">
							
							<!-- Friend Item -->
							<div className="friend-item">
								<div className="friend-header-thumb">
									<img src="img/friend1.jpg" alt="friend">
								</div>
							
								<div className="friend-item-content">
							
									<div className="more">
										<svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} />
										<ul className="more-dropdown">
											<li>
												<a href="#">Report Profile</a>
											</li>
											<li>
												<a href="#">Block Profile</a>
											</li>
											<li>
												<a href="#">Turn Off Notifications</a>
											</li>
										</ul>
									</div>
									<div className="friend-avatar">
										<div className="author-thumb">
											<img src="img/avatar1.jpg" alt="author">
										</div>
										<div className="author-content">
											<a href="#" className="h5 author-name">Nicholas Grissom</a>
											<div className="country">San Francisco, CA</div>
										</div>
									</div>
							
									<div className="swiper-container" data-slide="fade">
										<div className="swiper-wrapper">
											<div className="swiper-slide">
												<div className="friend-count" data-swiper-parallax="-500">
													<a href="#" className="friend-count-item">
														<div className="h6">52</div>
														<div className="title">Friends</div>
													</a>
													<a href="#" className="friend-count-item">
														<div className="h6">240</div>
														<div className="title">Photos</div>
													</a>
													<a href="#" className="friend-count-item">
														<div className="h6">16</div>
														<div className="title">Videos</div>
													</a>
												</div>
												<div className="control-block-button" data-swiper-parallax="-100">
													<a href="#" className="btn btn-control bg-blue">
														<svg className="olymp-happy-face-icon" dangerouslySetInnerHTML={{__html: happy }} />
													</a>
							
													<a href="#" className="btn btn-control bg-purple">
														<svg className="olymp-chat---messages-icon" dangerouslySetInnerHTML={{__html: chat }} />
													</a>
							
												</div>
											</div>
							
											<div className="swiper-slide">
												<p className="friend-about" data-swiper-parallax="-500">
													Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
												</p>
							
												<div className="friend-since" data-swiper-parallax="-100">
													<span>Friends Since:</span>
													<div className="h6">December 2014</div>
												</div>
											</div>
										</div>
							
										<!-- If we need pagination -->
										<div className="swiper-pagination"></div>
									</div>
								</div>
							</div>
							
							<!-- ... end Friend Item -->			</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="ui-block">
							
							<!-- Friend Item -->
							
							<div className="friend-item">
								<div className="friend-header-thumb">
									<img src="img/friend2.jpg" alt="friend">
								</div>
							
								<div className="friend-item-content">
							
									<div className="more">
										<svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} />
										<ul className="more-dropdown">
											<li>
												<a href="#">Report Profile</a>
											</li>
											<li>
												<a href="#">Block Profile</a>
											</li>
											<li>
												<a href="#">Turn Off Notifications</a>
											</li>
										</ul>
									</div>
									<div className="friend-avatar">
										<div className="author-thumb">
											<img src="img/avatar2.jpg" alt="author">
										</div>
										<div className="author-content">
											<a href="#" className="h5 author-name">Marina Valentine</a>
											<div className="country">Long Island, NY</div>
										</div>
									</div>
							
									<div className="swiper-container">
										<div className="swiper-wrapper">
											<div className="swiper-slide">
												<div className="friend-count" data-swiper-parallax="-500">
													<a href="#" className="friend-count-item">
														<div className="h6">52</div>
														<div className="title">Friends</div>
													</a>
													<a href="#" className="friend-count-item">
														<div className="h6">240</div>
														<div className="title">Photos</div>
													</a>
													<a href="#" className="friend-count-item">
														<div className="h6">16</div>
														<div className="title">Videos</div>
													</a>
												</div>
												<div className="control-block-button" data-swiper-parallax="-100">
													<a href="#" className="btn btn-control bg-blue">
														<svg className="olymp-happy-face-icon" dangerouslySetInnerHTML={{__html: happy }} />
													</a>
							
													<a href="#" className="btn btn-control bg-purple">
														<svg className="olymp-chat---messages-icon" dangerouslySetInnerHTML={{__html: chat }} />
													</a>
							
												</div>
											</div>
							
											<div className="swiper-slide">
												<p className="friend-about" data-swiper-parallax="-500">
													Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
												</p>
							
												<div className="friend-since" data-swiper-parallax="-100">
													<span>Friends Since:</span>
													<div className="h6">December 2014</div>
												</div>
											</div>
										</div>
							
										<!-- If we need pagination -->
										<div className="swiper-pagination"></div>
									</div>
								</div>
							</div>
							
							<!-- ... end Friend Item -->			</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="ui-block">
							
							<!-- Friend Item -->
							
							<div className="friend-item">
								<div className="friend-header-thumb">
									<img src="img/friend3.jpg" alt="friend">
								</div>
							
								<div className="friend-item-content">
							
									<div className="more">
										<svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} />
										<ul className="more-dropdown">
											<li>
												<a href="#">Report Profile</a>
											</li>
											<li>
												<a href="#">Block Profile</a>
											</li>
											<li>
												<a href="#">Turn Off Notifications</a>
											</li>
										</ul>
									</div>
									<div className="friend-avatar">
										<div className="author-thumb">
											<img src="img/avatar3.jpg" alt="author">
										</div>
										<div className="author-content">
											<a href="#" className="h5 author-name">Nicholas Grissom</a>
											<div className="country">Los Angeles, CA</div>
										</div>
									</div>
							
									<div className="swiper-container">
										<div className="swiper-wrapper">
											<div className="swiper-slide">
												<div className="friend-count" data-swiper-parallax="-500">
													<a href="#" className="friend-count-item">
														<div className="h6">49</div>
														<div className="title">Friends</div>
													</a>
													<a href="#" className="friend-count-item">
														<div className="h6">132</div>
														<div className="title">Photos</div>
													</a>
													<a href="#" className="friend-count-item">
														<div className="h6">5</div>
														<div className="title">Videos</div>
													</a>
												</div>
												<div className="control-block-button" data-swiper-parallax="-100">
													<a href="#" className="btn btn-control bg-blue">
														<svg className="olymp-happy-face-icon" dangerouslySetInnerHTML={{__html: happy }} />
													</a>
							
													<a href="#" className="btn btn-control bg-purple">
														<svg className="olymp-chat---messages-icon" dangerouslySetInnerHTML={{__html: chat }} />
													</a>
							
												</div>
											</div>
							
											<div className="swiper-slide">
												<p className="friend-about" data-swiper-parallax="-500">
													Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
												</p>
							
												<div className="friend-since" data-swiper-parallax="-100">
													<span>Friends Since:</span>
													<div className="h6">December 2014</div>
												</div>
											</div>
										</div>
							
										<!-- If we need pagination -->
										<div className="swiper-pagination"></div>
									</div>
								</div>
							</div>
							
							<!-- ... end Friend Item -->			</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="ui-block">
							
							<!-- Friend Item -->
							
							<div className="friend-item">
								<div className="friend-header-thumb">
									<img src="img/friend4.jpg" alt="friend">
								</div>
							
								<div className="friend-item-content">
									<div className="more">
										<svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} />
										<ul className="more-dropdown">
											<li>
												<a href="#">Report Profile</a>
											</li>
											<li>
												<a href="#">Block Profile</a>
											</li>
											<li>
												<a href="#">Turn Off Notifications</a>
											</li>
										</ul>
									</div>
							
									<div className="friend-avatar">
										<div className="author-thumb">
											<img src="img/avatar4.jpg" alt="author">
										</div>
										<div className="author-content">
											<a href="#" className="h5 author-name">Chris Greyson</a>
											<div className="country">Austin, TX</div>
										</div>
									</div>
							
									<div className="swiper-container">
										<div className="swiper-wrapper">
											<div className="swiper-slide">
												<div className="friend-count" data-swiper-parallax="-500">
													<a href="#" className="friend-count-item">
														<div className="h6">65</div>
														<div className="title">Friends</div>
													</a>
													<a href="#" className="friend-count-item">
														<div className="h6">104</div>
														<div className="title">Photos</div>
													</a>
													<a href="#" className="friend-count-item">
														<div className="h6">12</div>
														<div className="title">Videos</div>
													</a>
												</div>
												<div className="control-block-button" data-swiper-parallax="-100">
													<a href="#" className="btn btn-control bg-blue">
														<svg className="olymp-happy-face-icon" dangerouslySetInnerHTML={{__html: happy }} />
													</a>
							
													<a href="#" className="btn btn-control bg-purple">
														<svg className="olymp-chat---messages-icon" dangerouslySetInnerHTML={{__html: chat }} />
													</a>
							
												</div>
											</div>
							
											<div className="swiper-slide">
												<p className="friend-about" data-swiper-parallax="-500">
													Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
												</p>
							
												<div className="friend-since" data-swiper-parallax="-100">
													<span>Friends Since:</span>
													<div className="h6">December 2014</div>
												</div>
											</div>
										</div>
							
										<!-- If we need pagination -->
										<div className="swiper-pagination"></div>
									</div>
								</div>
							</div>
							
							<!-- ... end Friend Item -->			</div>
					</div>

					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="ui-block">
							
							<!-- Friend Item -->
							
							<div className="friend-item">
								<div className="friend-header-thumb">
									<img src="img/friend5.jpg" alt="friend">
								</div>
							
								<div className="friend-item-content">
							
									<div className="more">
										<svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} />
										<ul className="more-dropdown">
											<li>
												<a href="#">Report Profile</a>
											</li>
											<li>
												<a href="#">Block Profile</a>
											</li>
											<li>
												<a href="#">Turn Off Notifications</a>
											</li>
										</ul>
									</div>
									<div className="friend-avatar">
										<div className="author-thumb">
											<img src="img/avatar5.jpg" alt="author">
										</div>
										<div className="author-content">
											<a href="#" className="h5 author-name">Elaine Dreifuss</a>
											<div className="country">New York, NY</div>
										</div>
									</div>
							
									<div className="swiper-container">
										<div className="swiper-wrapper">
											<div className="swiper-slide">
												<div className="friend-count" data-swiper-parallax="-500">
													<a href="#" className="friend-count-item">
														<div className="h6">82</div>
														<div className="title">Friends</div>
													</a>
													<a href="#" className="friend-count-item">
														<div className="h6">204</div>
														<div className="title">Photos</div>
													</a>
													<a href="#" className="friend-count-item">
														<div className="h6">27</div>
														<div className="title">Videos</div>
													</a>
												</div>
												<div className="control-block-button" data-swiper-parallax="-100">
													<a href="#" className="btn btn-control bg-blue">
														<svg className="olymp-happy-face-icon" dangerouslySetInnerHTML={{__html: happy }} />
													</a>
							
													<a href="#" className="btn btn-control bg-purple">
														<svg className="olymp-chat---messages-icon" dangerouslySetInnerHTML={{__html: chat }} />
													</a>
							
												</div>
											</div>
							
											<div className="swiper-slide">
												<p className="friend-about" data-swiper-parallax="-500">
													Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
												</p>
							
												<div className="friend-since" data-swiper-parallax="-100">
													<span>Friends Since:</span>
													<div className="h6">December 2014</div>
												</div>
											</div>
										</div>
							
										<!-- If we need pagination -->
										<div className="swiper-pagination"></div>
									</div>
								</div>
							</div>
							
							<!-- ... end Friend Item -->			</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="ui-block">
							
							<!-- Friend Item -->
							
							<div className="friend-item">
								<div className="friend-header-thumb">
									<img src="img/friend6.jpg" alt="friend">
								</div>
							
								<div className="friend-item-content">
							
									<div className="more">
										<svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} />
										<ul className="more-dropdown">
											<li>
												<a href="#">Report Profile</a>
											</li>
											<li>
												<a href="#">Block Profile</a>
											</li>
											<li>
												<a href="#">Turn Off Notifications</a>
											</li>
										</ul>
									</div>
									<div className="friend-avatar">
										<div className="author-thumb">
											<img src="img/avatar6.jpg" alt="author">
										</div>
										<div className="author-content">
											<a href="#" className="h5 author-name">Bruce Peterson</a>
											<div className="country">Austin, TX</div>
										</div>
									</div>
							
									<div className="swiper-container">
										<div className="swiper-wrapper">
											<div className="swiper-slide">
												<div className="friend-count" data-swiper-parallax="-500">
													<a href="#" className="friend-count-item">
														<div className="h6">73</div>
														<div className="title">Friends</div>
													</a>
													<a href="#" className="friend-count-item">
														<div className="h6">360</div>
														<div className="title">Photos</div>
													</a>
													<a href="#" className="friend-count-item">
														<div className="h6">11</div>
														<div className="title">Videos</div>
													</a>
												</div>
												<div className="control-block-button" data-swiper-parallax="-100">
													<a href="#" className="btn btn-control bg-blue">
														<svg className="olymp-happy-face-icon" dangerouslySetInnerHTML={{__html: happy }} />
													</a>
							
													<a href="#" className="btn btn-control bg-purple">
														<svg className="olymp-chat---messages-icon" dangerouslySetInnerHTML={{__html: chat }} />
													</a>
							
												</div>
											</div>
							
											<div className="swiper-slide">
												<p className="friend-about" data-swiper-parallax="-500">
													Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
												</p>
							
												<div className="friend-since" data-swiper-parallax="-100">
													<span>Friends Since:</span>
													<div className="h6">December 2014</div>
												</div>
											</div>
										</div>
							
										<!-- If we need pagination -->
										<div className="swiper-pagination"></div>
									</div>
								</div>
							</div>
							
							<!-- ... end Friend Item -->			</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="ui-block">
							
							<!-- Friend Item -->
							
							<div className="friend-item">
								<div className="friend-header-thumb">
									<img src="img/friend7.jpg" alt="friend">
								</div>
							
								<div className="friend-item-content">
							
									<div className="more">
										<svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} />
										<ul className="more-dropdown">
											<li>
												<a href="#">Report Profile</a>
											</li>
											<li>
												<a href="#">Block Profile</a>
											</li>
											<li>
												<a href="#">Turn Off Notifications</a>
											</li>
										</ul>
									</div>
									<div className="friend-avatar">
										<div className="author-thumb">
											<img src="img/avatar7.jpg" alt="author">
										</div>
										<div className="author-content">
											<a href="#" className="h5 author-name">Carol Summers</a>
											<div className="country">Los Angeles, CA</div>
										</div>
									</div>
							
									<div className="swiper-container">
										<div className="swiper-wrapper">
											<div className="swiper-slide">
												<div className="friend-count" data-swiper-parallax="-500">
													<a href="#" className="friend-count-item">
														<div className="h6">49</div>
														<div className="title">Friends</div>
													</a>
													<a href="#" className="friend-count-item">
														<div className="h6">132</div>
														<div className="title">Photos</div>
													</a>
													<a href="#" className="friend-count-item">
														<div className="h6">5</div>
														<div className="title">Videos</div>
													</a>
												</div>
												<div className="control-block-button" data-swiper-parallax="-100">
													<a href="#" className="btn btn-control bg-blue">
														<svg className="olymp-happy-face-icon" dangerouslySetInnerHTML={{__html: happy }} />
													</a>
							
													<a href="#" className="btn btn-control bg-purple">
														<svg className="olymp-chat---messages-icon" dangerouslySetInnerHTML={{__html: chat }} />
													</a>
							
												</div>
											</div>
							
											<div className="swiper-slide">
												<p className="friend-about" data-swiper-parallax="-500">
													Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
												</p>
							
												<div className="friend-since" data-swiper-parallax="-100">
													<span>Friends Since:</span>
													<div className="h6">December 2014</div>
												</div>
											</div>
										</div>
							
										<!-- If we need pagination -->
										<div className="swiper-pagination"></div>
									</div>
								</div>
							</div>
							
							<!-- ... end Friend Item -->			</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="ui-block">
							
							<!-- Friend Item -->
							
							<div className="friend-item">
								<div className="friend-header-thumb">
									<img src="img/friend8.jpg" alt="friend">
								</div>
							
								<div className="friend-item-content">
									<div className="more">
										<svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} />
										<ul className="more-dropdown">
											<li>
												<a href="#">Report Profile</a>
											</li>
											<li>
												<a href="#">Block Profile</a>
											</li>
											<li>
												<a href="#">Turn Off Notifications</a>
											</li>
										</ul>
									</div>
							
									<div className="friend-avatar">
										<div className="author-thumb">
											<img src="img/avatar8.jpg" alt="author">
										</div>
										<div className="author-content">
											<a href="#" className="h5 author-name">Michael Maximoff</a>
											<div className="country">Portland, OR</div>
										</div>
									</div>
							
									<div className="swiper-container">
										<div className="swiper-wrapper">
											<div className="swiper-slide">
												<div className="friend-count" data-swiper-parallax="-500">
													<a href="#" className="friend-count-item">
														<div className="h6">58</div>
														<div className="title">Friends</div>
													</a>
													<a href="#" className="friend-count-item">
														<div className="h6">304</div>
														<div className="title">Photos</div>
													</a>
													<a href="#" className="friend-count-item">
														<div className="h6">19</div>
														<div className="title">Videos</div>
													</a>
												</div>
												<div className="control-block-button" data-swiper-parallax="-100">
													<a href="#" className="btn btn-control bg-blue">
														<svg className="olymp-happy-face-icon" dangerouslySetInnerHTML={{__html: happy }} />
													</a>
							
													<a href="#" className="btn btn-control bg-purple">
														<svg className="olymp-chat---messages-icon" dangerouslySetInnerHTML={{__html: chat }} />
													</a>
							
												</div>
											</div>
							
											<div className="swiper-slide">
												<p className="friend-about" data-swiper-parallax="-500">
													Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
												</p>
							
												<div className="friend-since" data-swiper-parallax="-100">
													<span>Friends Since:</span>
													<div className="h6">December 2014</div>
												</div>
											</div>
										</div>
							
										<!-- If we need pagination -->
										<div className="swiper-pagination"></div>
									</div>
								</div>
							</div>
							
							<!-- ... end Friend Item -->			</div>
					</div>
				</div>
			</div>
		 </Route>;
    
    return (
      mainView
    );
  }
}

export default Experiencers;