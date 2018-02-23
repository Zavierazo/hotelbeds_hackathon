
import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import Join from './Join';

class Experiencers extends Component {

	images(img) {
		let images1 = ['img/experiencers/26187492_321709891668550_9123414266542555136_n.jpg',
						'img/experiencers/26276479_2004236043178045_2994516379194884096_n.jpg',
						'img/experiencers/26302984_166527160742210_8448820658351112192_n.jpg'];

		let images2 = ['img/experiencers/26302984_166527160742210_8448820658351112192_n.jpg',
						'img/experiencers/26863319_2001551230100442_7540758928666132480_n.jpg',
						'img/experiencers/27580291_180416365904613_6933595211805229056_n.jpg'];

		let images3 = ['img/experiencers/27580291_180416365904613_6933595211805229056_n.jpg',
						'img/experiencers/27580291_180416365904613_6933595211805229056_n.jpg',
						'img/experiencers/26863319_2001551230100442_7540758928666132480_n.jpg'];

		let images4 = ['img/experiencers/27580291_180416365904613_6933595211805229056_n.jpg',
						'img/experiencers/27580291_180416365904613_6933595211805229056_n.jpg',
						'img/experiencers/27580291_180416365904613_6933595211805229056_n.jpg'];
						
		let images5 = ['img/experiencers/26863319_2001551230100442_7540758928666132480_n.jpg',
						'img/experiencers/27580291_180416365904613_6933595211805229056_n.jpg',
						'img/experiencers/27580291_180416365904613_6933595211805229056_n.jpg'];

		if (img === 0) {
			return images1;
		} else if (img === 1) {
			return images2;
		}else if (img === 2) {
			return images3;
		}else if (img === 3) {
			return images4;
		}else if (img === 4) {
			return images5;
		}
	}

	renderExperiences() {
		let i = 0;
		let experiencers1 = this.images(0).map((img) => (
			this.renderExperience(img, i++)
		));

		let experiencers2 = this.images(1).map((img) => (
			this.renderExperience(img,i++)
		));

		let experiencers3 = this.images(2).map((img) => (
			this.renderExperience(img,i++)
		));

		let experiencers4 = this.images(3).map((img) => (
			this.renderExperience(img,i++)
		));

		let experiencers5 = this.images(4).map((img) => (
			this.renderExperience(img,i++)
		));

		let experiencersView = <>
			<div className="container">
				<div className="row">
					{experiencers1}
					<Join />
				</div>
				<div className="row">
					{experiencers2}
				</div>
				<div className="row">
					{experiencers3}
				</div>
				<div className="row">
					{experiencers4}
				</div>
				<div className="row">
					{experiencers5}
				</div>
			</div>
		</>;
		return experiencersView;
	}

	renderExperience(img, idx) {
		let heartIcon  = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use>';
    	let threeDots = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>';
    	let plusIcon = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-plus-icon"></use>';
		let mainView = 
				<div key={idx} className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
					<div className="ui-block">
						<div className="friend-item">
		                    <img src={img} alt="photo" />
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
		                      	<a href="https://www.instagram.com/wolfiecindy/?hl=es"><img style={{width:40+'px'}} src="img/insta.png" alt="instagram"/></a>
		                      	<a href="https://www.youtube.com/watch?v=RcmrbNRK-jY"><img style={{width:40+'px'}} src="img/youtube.png" alt="youtube"/></a>
		                      </div>
		                    </div>
						</div>
					</div>
				</div>;
		return mainView;
	}

  render() {
  	let chat = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use>';
  	let threeDots = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>';
  	let happy = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use>';
  	let heartIcon  = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use>';
    let plusIcon = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-plus-ico';

   
    return (
    	this.renderExperiences()
    );
  }
}

export default Experiencers;