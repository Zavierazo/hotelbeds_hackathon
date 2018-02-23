
import React, { Component } from 'react';
 import { FlowRouter } from 'meteor/kadira:flow-router';

class Experiencers extends Component {

	buy(e) {
		if (e) e.preventDefault();
		FlowRouter.go('/buy?checkin=2018-03-25&checkout=2018-03-30&adults=2');
	}

  render() {
  	let chat = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use>'
  	let threeDots = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>'
  	let happy = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>'
  	let heartIcon  = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use>'
    let plusIcon = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-plus-ico'
    let mainView = 
	    	<div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="ui-block">
							<div className="friend-item" onClick={this.buy}>
			                    <img src="img/experiencers/26187492_321709891668550_9123414266542555136_n.jpg" alt="photo" />
			                    <div className="overlay overlay-dark"></div>
			                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
			                    <a href="#" className="post-add-icon inline-items">
			                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
			                      <span>15</span>
			                    </a>
			                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
			                    <div className="content">
			                    	<div className="ui-block video-item">
			                      <a href="#" className="h6 title">Header Photos</a>
			                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
			                      </div>
			                    </div>
							</div>
							
									</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="ui-block">
							
							 
							
							<div className="friend-item" onClick={this.buy}>
			                    <img src="img/experiencers/26276479_2004236043178045_2994516379194884096_n.jpg" alt="photo" />
			                    <div className="overlay overlay-dark"></div>
			                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
			                    <a href="#" className="post-add-icon inline-items">
			                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
			                      <span>15</span>
			                    </a>
			                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
			                    <div className="content">
			                    	<div className="ui-block video-item">
			                      <a href="#" className="h6 title">Header Photos</a>
			                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
			                      </div>
			                    </div>
							</div>
							
							 			</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="ui-block">
							
							 
							
							<div className="friend-item" onClick={this.buy}>
			                    <img src="img/experiencers/26302984_166527160742210_8448820658351112192_n.jpg" alt="photo" />
			                    <div className="overlay overlay-dark"></div>
			                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
			                    <a href="#" className="post-add-icon inline-items">
			                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
			                      <span>15</span>
			                    </a>
			                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
			                    <div className="content">
			                    	<div className="ui-block video-item">
			                      <a href="#" className="h6 title">Header Photos</a>
			                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
			                      </div>
			                    </div>
							</div>
							
							 			</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="ui-block">
							
							 
							
							<div className="friend-item" onClick={this.buy}>
			                    <img src="img/experiencers/26863319_2001551230100442_7540758928666132480_n.jpg" alt="photo" />
			                    <div className="overlay overlay-dark"></div>
			                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
			                    <a href="#" className="post-add-icon inline-items">
			                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
			                      <span>15</span>
			                    </a>
			                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
			                    <div className="content">
			                    	<div className="ui-block video-item">
			                      <a href="#" className="h6 title">Header Photos</a>
			                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
			                      </div>
			                    </div>
							</div>
							
							 			</div>
					</div>

					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="ui-block">
							
							 
							
							<div className="friend-item" onClick={this.buy}>
			                    <img src="img/experiencers/26867543_212460555985095_1876202990914764800_n.jpg" alt="photo" />
			                    <div className="overlay overlay-dark"></div>
			                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
			                    <a href="#" className="post-add-icon inline-items">
			                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
			                      <span>15</span>
			                    </a>
			                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
			                    <div className="content">
			                    	<div className="ui-block video-item">
			                      <a href="#" className="h6 title">Header Photos</a>
			                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
			                      </div>
			                    </div>
							</div>
							
							 			</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="ui-block">
							
							 
							
							<div className="friend-item" onClick={this.buy}>
			                    <img src="img/experiencers/26870575_1162890907179368_8815237916239331328_n.jpg" alt="photo" />
			                    <div className="overlay overlay-dark"></div>
			                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
			                    <a href="#" className="post-add-icon inline-items">
			                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
			                      <span>15</span>
			                    </a>
			                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
			                    <div className="content">
			                    	<div className="ui-block video-item">
			                      <a href="#" className="h6 title">Header Photos</a>
			                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
			                      </div>
			                    </div>
							</div>
							
							 			</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="ui-block">
							
							 
							
							<div className="friend-item" onClick={this.buy}>
			                    <img src="img/experiencers/26870723_1579019895507041_150433458630426624_n.jpg" alt="photo" />
			                    <div className="overlay overlay-dark"></div>
			                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
			                    <a href="#" className="post-add-icon inline-items">
			                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
			                      <span>15</span>
			                    </a>
			                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
			                    <div className="content">
			                    	<div className="ui-block video-item">
			                      <a href="#" className="h6 title">Header Photos</a>
			                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
			                      </div>
			                    </div>
							</div>
							
							 			</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="ui-block">
							
							 
							
							<div className="friend-item" onClick={this.buy}>
			                    <img src="img/experiencers/27580291_180416365904613_6933595211805229056_n.jpg" alt="photo" />
			                    <div className="overlay overlay-dark"></div>
			                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
			                    <a href="#" className="post-add-icon inline-items">
			                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
			                      <span>15</span>
			                    </a>
			                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
			                    <div className="content">
			                    	<div className="ui-block video-item">
			                      <a href="#" className="h6 title">Header Photos</a>
			                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
			                      </div>
			                    </div>
							</div>
							
							 			</div>
					</div>

					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="ui-block">
							
							 
							
							<div className="friend-item" onClick={this.buy}>
			                    <img src="img/experiencers/27580291_180416365904613_6933595211805229056_n.jpg" alt="photo" />
			                    <div className="overlay overlay-dark"></div>
			                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
			                    <a href="#" className="post-add-icon inline-items">
			                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
			                      <span>15</span>
			                    </a>
			                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
			                    <div className="content">
			                    	<div className="ui-block video-item">
			                      <a href="#" className="h6 title">Header Photos</a>
			                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
			                      </div>
			                    </div>
							</div>
							
							 			</div>
					</div>

					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="ui-block">
							
							 
							
							<div className="friend-item" onClick={this.buy}>
			                    <img src="img/experiencers/27580291_180416365904613_6933595211805229056_n.jpg" alt="photo" />
			                    <div className="overlay overlay-dark"></div>
			                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
			                    <a href="#" className="post-add-icon inline-items">
			                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
			                      <span>15</span>
			                    </a>
			                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
			                    <div className="content">
			                    	<div className="ui-block video-item">
			                      <a href="#" className="h6 title">Header Photos</a>
			                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
			                      </div>
			                    </div>
							</div>
							
							 			</div>
					</div>

					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="ui-block">
							
							 
							
							<div className="friend-item" onClick={this.buy}>
			                    <img src="img/experiencers/27580291_180416365904613_6933595211805229056_n.jpg" alt="photo" />
			                    <div className="overlay overlay-dark"></div>
			                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
			                    <a href="#" className="post-add-icon inline-items">
			                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
			                      <span>15</span>
			                    </a>
			                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
			                    <div className="content">
			                    	<div className="ui-block video-item">
			                      <a href="#" className="h6 title">Header Photos</a>
			                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
			                      </div>
			                    </div>
							</div>
							
							 			</div>
					</div>

					<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
						<div className="ui-block">
							
							 
							
							<div className="friend-item" onClick={this.buy}>
			                    <img src="img/experiencers/27580291_180416365904613_6933595211805229056_n.jpg" alt="photo" />
			                    <div className="overlay overlay-dark"></div>
			                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
			                    <a href="#" className="post-add-icon inline-items">
			                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
			                      <span>15</span>
			                    </a>
			                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
			                    <div className="content">
			                    	<div className="ui-block video-item">
			                      <a href="#" className="h6 title">Header Photos</a>
			                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
			                      </div>
			                    </div>
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

export default Experiencers;