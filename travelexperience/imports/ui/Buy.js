import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

class Buy extends Component {

  render() {
     let threeDots = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>'
    
    let mainView =       <div className="container">
  <div className="row">
    <div className="col-xl-8 order-xl-2 col-lg-8 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12">
      <div className="ui-block">
        <div className="ui-block-title">
          <h6 className="title">Hobbies and Interests</h6>
          <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /> </a>
        </div>
        <div className="ui-block-content">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

              
              
              
              <ul className="widget w-personal-info item-block">
                <li>
                  <span className="title">Hobbies:</span>
                  <span className="text">I like to ride the bike to work, swimming, and working out. I also like
                              reading design magazines, go to museums, and binge watching a good tv show while it’s raining outside.
                            </span>
                </li>
                <li>
                  <span className="title">Favourite TV Shows:</span>
                  <span className="text">Breaking Good, RedDevil, People of Interest, The Running Dead, Found,  American Guy.</span>
                </li>
                <li>
                  <span className="title">Favourite Movies:</span>
                  <span className="text">Idiocratic, The Scarred Wizard and the Fire Crown,  Crime Squad, Ferrum Man. </span>
                </li>
                <li>
                  <span className="title">Favourite Games:</span>
                  <span className="text">The First of Us, Assassin’s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto. </span>
                </li>
              </ul>
              
              
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

              
              
              
              <ul className="widget w-personal-info item-block">
                <li>
                  <span className="title">Favourite Music Bands / Artists:</span>
                  <span className="text">Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</span>
                </li>
                <li>
                  <span className="title">Favourite Books:</span>
                  <span className="text">The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.</span>
                </li>
                <li>
                  <span className="title">Favourite Writers:</span>
                  <span className="text">Martin T. Georgeston, Jhonathan R. Token, Ivana Rowle, Alexandria Platt, Marcus Roth. </span>
                </li>
                <li>
                  <span className="title">Other Interests:</span>
                  <span className="text">Swimming, Surfing, Scuba Diving, Anime, Photography, Tattoos, Street Art.</span>
                </li>
              </ul>
              
              
            </div>
          </div>
        </div>
      </div>
      <div className="ui-block">
        <div className="ui-block-title">
          <h6 className="title">Education and Employement</h6>
          <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /> </a>
        </div>
        <div className="ui-block-content">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

              
              
              
              <ul className="widget w-personal-info item-block">
                <li>
                  <span className="title">The New College of Design</span>
                  <span className="date">2001 - 2006</span>
                  <span className="text">Breaking Good, RedDevil, People of Interest, The Running Dead, Found,  American Guy.</span>
                </li>
                <li>
                  <span className="title">Rembrandt Institute</span>
                  <span className="date">2008</span>
                  <span className="text">Five months Digital Illustration course. Professor: Leonardo Stagg.</span>
                </li>
                <li>
                  <span className="title">The Digital College </span>
                  <span className="date">2010</span>
                  <span className="text">6 months intensive Motion Graphics course. After Effects and Premire. Professor: Donatello Urtle. </span>
                </li>
              </ul>
              
              

            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

              
              
              
              <ul className="widget w-personal-info item-block">
                <li>
                  <span className="title">Digital Design Intern</span>
                  <span className="date">2006-2008</span>
                  <span className="text">Digital Design Intern for the “Multimedz” agency. Was in charge of the communication with the clients.</span>
                </li>
                <li>
                  <span className="title">UI/UX Designer</span>
                  <span className="date">2008-2013</span>
                  <span className="text">UI/UX Designer for the “Daydreams” agency. </span>
                </li>
                <li>
                  <span className="title">Senior UI/UX Designer</span>
                  <span className="date">2013-Now</span>
                  <span className="text">Senior UI/UX Designer for the “Daydreams” agency. I’m in charge of a ten person group, overseeing all the proyects and talking to potential clients.</span>
                </li>
              </ul>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-xl-4 order-xl-1 col-lg-4 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12">
      <div className="ui-block">
        <div className="ui-block-title">
          <h6 className="title">Personal Info</h6>
          <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /> </a>
        </div>
        <div className="ui-block-content">

          
          
          
          <ul className="widget w-personal-info">
            <li>
              <span className="title">About Me:</span>
              <span className="text">Hi, I’m James, I’m 36 and I work as a Digital Designer for the
                          “Daydreams” Agency in Pier 56
                        </span>
            </li>
            <li>
              <span className="title">Birthday:</span>
              <span className="text">December 14th, 1980</span>
            </li>
            <li>
              <span className="title">Birthplace:</span>
              <span className="text">Austin, Texas, USA</span>
            </li>
            <li>
              <span className="title">Lives in:</span>
              <span className="text">San Francisco, California, USA</span>
            </li>
            <li>
              <span className="title">Occupation:</span>
              <span className="text">UI/UX Designer</span>
            </li>
            <li>
              <span className="title">Joined:</span>
              <span className="text">April 31st, 2014</span>
            </li>
            <li>
              <span className="title">Gender:</span>
              <span className="text">Male</span>
            </li>
            <li>
              <span className="title">Status:</span>
              <span className="text">Married</span>
            </li>
            <li>
              <span className="title">Email:</span>
              <a href="#" className="text">jspiegel@yourmail.com</a>
            </li>
            <li>
              <span className="title">Website:</span>
              <a href="#" className="text">daydreamsagency.com</a>
            </li>
            <li>
              <span className="title">Phone Number:</span>
              <span className="text">(044) 555 - 4369 - 8957</span>
            </li>
            <li>
              <span className="title">Religious Belifs:</span>
              <span className="text">-</span>
            </li>
            <li>
              <span className="title">Political Incline:</span>
              <span className="text">Democrat</span>
            </li>
          </ul>
          
          
          
          
          <div className="widget w-socials">
            <h6 className="title">Other Social Networks:</h6>
            <a href="#" className="social-item bg-facebook">
              <i className="fab fa-facebook-f" aria-hidden="true"></i>
              Facebook
            </a>
            <a href="#" className="social-item bg-twitter">
              <i className="fab fa-twitter" aria-hidden="true"></i>
              Twitter
            </a>
            <a href="#" className="social-item bg-dribbble">
              <i className="fab fa-dribbble" aria-hidden="true"></i>
              Dribbble
            </a>
          </div>
          
          
          
        </div>
      </div>
    </div>
  </div>
</div>   ;
    
    return (
      mainView
    );
  }
}

export default Buy;
