import React, { Component } from 'react';

class Header extends Component {

  render() {
    let chat = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-chat---messages-icon"></use>'
    let settings = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-settings-icon"></use>'
    let threeDots = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>'
    let header = <div className="container">
  <div className="header-spacer-small"></div>
  <div className="row">
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div className="ui-block">
        <div className="top-header">
          <div className="top-header-thumb">
            <img src="img/banner.png" alt="nature" />
          </div>
          <div className="profile-section">

            <div className="control-block-button">
              <a href="35-YourAccount-FriendsRequests.html" className="btn btn-control bg-blue">
                <svg className="olymp-happy-face-icon" dangerouslySetInnerHTML={{__html: chat }} />
              </a>

              <a href="#" className="btn btn-control bg-purple">
                <svg className="olymp-chat---messages-icon" dangerouslySetInnerHTML={{__html: threeDots }} />
              </a>

              <div className="btn btn-control bg-primary more">
                <svg className="olymp-settings-icon" dangerouslySetInnerHTML={{__html: settings }} />

                <ul className="more-dropdown more-with-triangle triangle-bottom-right">
                  <li>
                    <a href="#" data-toggle="modal" data-target="#update-header-photo">Update Profile Photo</a>
                  </li>
                  <li>
                    <a href="#" data-toggle="modal" data-target="#update-header-photo">Update Header Photo</a>
                  </li>
                  <li>
                    <a href="29-YourAccount-AccountSettings.html">Account Settings</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
    
    return (
      header
    );
  }
}

export default Header;
