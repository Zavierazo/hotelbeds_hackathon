
import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import Join from './Join';

class Experiencers extends Component {

	images(img) {
		let images1 = [{img: 'img/experiencers/thailand_tess.png', name: 'Tess Christine'},
						{img: 'img/experiencers/thailand9.jpg',name: 'Jon Olsson'},
						{img: 'img/experiencers/thailand5.jpg', name: 'Jeremih Endir'}];

		let images2 = [{img: 'img/experiencers/thailand2.jpg', name: 'Jay Alvarez'},
						{img: 'img/experiencers/thailand_paula.png', name: 'Paula Gonu'},
						{img: 'img/experiencers/thailand1.jpg', name: 'Luisito Comunica'}];

		let images3 = [{img:'img/experiencers/thailand4.jpg',name: 'Alexis Olivar'},
						{img:'img/experiencers/thailand7.jpg',name: 'Hector Vidrieira'},
						{img:'img/experiencers/thailand3.jpg', name: 'Isabelle Pullen'}];

		let images4 = [{img:'img/experiencers/thailand6.jpg',name: 'John Kirk'},
						{img:'img/experiencers/thailand8.jpg',name: 'Aylin Meng'},
						{img:'img/experiencers/thailand10.jpg', name: 'Jake & Elsa'}];
						
		let images5 = [{img:'img/experiencers/thailand11.jpg',name: 'Christopher Kay'},
						{img:'img/experiencers/thailand11.jpg',name: 'Tracy Mcsheen'},
						{img:'img/experiencers/thailand11.jpg', name: 'Iker García'}];

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

	renderExperience(imgObj, idx) {
		let heartIcon  = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use>';
    	let threeDots = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>';
    	let plusIcon = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-plus-icon"></use>';
		let mainView = 
				<div key={idx} className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-6">
					<div className="ui-block">
						<div className="friend-item">
		                    <img src={imgObj.img} alt="photo" style={{height:250+'px'}}/>
		                    <div className="content" style={{padding: 8+'px'}}>
		                    	<div className="ui-block video-item">
		                      <a href="#" className="h6 title">{imgObj.name}</a>
		                      	<a href="https://www.instagram.com/tesschristinexo">
		                      		<img style={{width:40+'px'}} src="img/insta.png" alt="instagram"/>
		                      	</a>
		                      	<a href="https://www.youtube.com/watch?v=MV0bL-jdVws">
		                      		<img style={{width:40+'px'}} src="img/youtube.png" alt="youtube"/>
		                      	</a>
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