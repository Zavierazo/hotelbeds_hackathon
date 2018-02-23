import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

class Buy extends Component {

  render() {
     let threeDots = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>'
     let arrow ='<use  xlink:href="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use>'
    let mainView =       <div className="container">
  <div className="row">
    <div className="col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-xs-12">
      <div className="ui-block">
        <div className="ui-block-title">
          <h6 className="title">Personal Information</h6>
        </div>
        <div className="ui-block-content">

          
          
          
          <form>
            <div className="row">
          
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group label-floating">
                  <label className="control-label">First Name</label>
                  <input className="form-control" placeholder="" type="text" value="James"/>
                </div>
          
                <div className="form-group label-floating">
                  <label className="control-label">Your Email</label>
                  <input className="form-control" placeholder="" type="email" value="jspiegel@yourmail.com"/>
                </div>
          
                <div className="form-group date-time-picker label-floating">
                  <label className="control-label">Your Birthday</label>
                  <input name="datetimepicker" value="10/24/1984" />
                                    <span className="input-group-addon">
                              <svg className="olymp-month-calendar-icon icon" dangerouslySetInnerHTML={{__html: threeDots }} />
                            </span>
                </div>
              </div>
          
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group label-floating">
                  <label className="control-label">Last Name</label>
                  <input className="form-control" placeholder="" type="text" value="Spiegel"/>
                </div>
          
                <div className="form-group label-floating">
                  <label className="control-label">Your Website</label>
                  <input className="form-control" placeholder="" type="email" value="daydreamzagency.com"/>
                </div>
          
          
                <div className="form-group label-floating is-empty">
                  <label className="control-label">Your Phone Number</label>
                  <input className="form-control" placeholder="" type="text"/>
                </div>
              </div>
          
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="form-group label-floating is-select">
                  <label className="control-label">Your Country</label>
                  <select className="selectpicker form-control">
                    <option value="US">United States</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="form-group label-floating is-select">
                  <label className="control-label">Your State / Province</label>
                  <select className="selectpicker form-control">
                    <option value="CA">California</option>
                    <option value="TE">Texas</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="form-group label-floating is-select">
                  <label className="control-label">Your City</label>
                  <select className="selectpicker form-control">
                    <option value="SF">San Francisco</option>
                    <option value="NY">New York</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group label-floating">
                  <label className="control-label">Write a little description about you</label>
                  <textarea className="form-control" placeholder="">Hi, I’m James, I’m 36 and I work as a Digital Designer for the  “Daydreams” Agency in Pier 56</textarea>
                </div>
          
                <div className="form-group label-floating is-select">
                  <label className="control-label">Your Gender</label>
                  <select className="selectpicker form-control">
                    <option value="MA">Male</option>
                    <option value="FE">Female</option>
                  </select>
                </div>
          
                <div className="form-group label-floating is-empty">
                  <label className="control-label">Religious Belifs</label>
                  <input className="form-control" placeholder="" type="text"/>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group label-floating is-empty">
                  <label className="control-label">Your Birthplace</label>
                  <input className="form-control" placeholder="" type="text"/>
                </div>
          
                <div className="form-group label-floating">
                  <label className="control-label">Your Occupation</label>
                  <input className="form-control" placeholder="" type="text" value="UI/UX Designer"/>
                </div>
          
                <div className="form-group label-floating is-select">
                  <label className="control-label">Status</label>
                  <select className="selectpicker form-control">
                    <option value="MA">Married</option>
                    <option value="FE">Not Married</option>
                  </select>
                </div>
          
                <div className="form-group label-floating">
                  <label className="control-label">Political Incline</label>
                  <input className="form-control" placeholder="" type="text" value="Democrat"/>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="form-group with-icon label-floating">
                  <label className="control-label">Your Facebook Account</label>
                  <input className="form-control" type="text" value="www.facebook.com/james-spiegel95321"/>
                  <i className="fab fa-facebook-f c-facebook" aria-hidden="true"></i>
                </div>
                <div className="form-group with-icon label-floating">
                  <label className="control-label">Your Twitter Account</label>
                  <input className="form-control" type="text" value="www.twitter.com/james_spiegelOK"/>
                  <i className="fab fa-twitter c-twitter" aria-hidden="true"></i>
                </div>
                <div className="form-group with-icon label-floating is-empty">
                  <label className="control-label">Your RSS Feed Account</label>
                  <input className="form-control" type="text"/>
                  <i className="fa fa-rss c-rss" aria-hidden="true"></i>
                </div>
                <div className="form-group with-icon label-floating">
                  <label className="control-label">Your Dribbble Account</label>
                  <input className="form-control" type="text" value="www.dribbble.com/thecowboydesigner"/>
                  <i className="fab fa-dribbble c-dribbble" aria-hidden="true"></i>
                </div>
                <div className="form-group with-icon label-floating is-empty">
                  <label className="control-label">Your Spotify Account</label>
                  <input className="form-control" type="text"/>
                  <i className="fab fa-spotify c-spotify" aria-hidden="true"></i>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <button className="btn btn-secondary btn-lg full-width">Restore all Attributes</button>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <button className="btn btn-primary btn-lg full-width">Save all Changes</button>
              </div>
          
            </div>
          </form>
          
          
        </div>
      </div>
    </div>

    <div className="col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-xs-12 responsive-display-none">
      <div className="ui-block">

        
        <div className="your-profile">
          <div className="ui-block-title ui-block-title-small">
            <h6 className="title">Your PROFILE</h6>
          </div>
        
          <div id="accordion" role="tablist" aria-multiselectable="true">
            <div className="card">
              <div className="card-header" role="tab" id="headingOne">
                <h6 className="mb-0">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Profile Settings
                    <svg className="olymp-dropdown-arrow-icon" dangerouslySetInnerHTML={{__html: arrow }}/>
                  </a>
                </h6>
              </div>
        
              <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                <ul className="your-profile-menu">
                  <li>
                    <a href="28-YourAccount-PersonalInformation.html">Personal Information</a>
                  </li>
                  <li>
                    <a href="29-YourAccount-AccountSettings.html">Account Settings</a>
                  </li>
                  <li>
                    <a href="30-YourAccount-ChangePassword.html">Change Password</a>
                  </li>
                  <li>
                    <a href="31-YourAccount-HobbiesAndInterests.html">Hobbies and Interests</a>
                  </li>
                  <li>
                    <a href="32-YourAccount-EducationAndEmployement.html">Education and Employement</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        
          <div className="ui-block-title">
            <a href="33-YourAccount-Notifications.html" className="h6 title">Notifications</a>
            <a href="#" className="items-round-little bg-primary">8</a>
          </div>
          <div className="ui-block-title">
            <a href="34-YourAccount-ChatMessages.html" className="h6 title">Chat / Messages</a>
          </div>
          <div className="ui-block-title">
            <a href="35-YourAccount-FriendsRequests.html" className="h6 title">Friend Requests</a>
            <a href="#" className="items-round-little bg-blue">4</a>
          </div>
          <div className="ui-block-title ui-block-title-small">
            <h6 className="title">FAVOURITE PAGE</h6>
          </div>
          <div className="ui-block-title">
            <a href="36-FavPage-SettingsAndCreatePopup.html" className="h6 title">Create Fav Page</a>
          </div>
          <div className="ui-block-title">
            <a href="36-FavPage-SettingsAndCreatePopup.html" className="h6 title">Fav Page Settings</a>
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
