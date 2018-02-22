import React, { Component } from 'react';
import { Route } from 'react-route';

class Main extends Component {

  render() {
    let heartIcon  = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use>'
    let threeDots = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>'
    let plusIcon = '<use xlink:href="svg-icons/sprites/icons.svg#olymp-plus-icon"></use>'
    let mainView =       <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
           
            <div className="tab-content">
              <div className="tab-pane" id="photo-page" role="tabpanel">

                <div className="photo-album-wrapper">

                  
                  
                  <div className="photo-item half-width">
                    <img src="img/photo-item1.jpg" alt="photo" />
                    <div className="overlay overlay-dark"></div>
                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
                    <a href="#" className="post-add-icon inline-items">
                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
                      <span>15</span>
                    </a>
                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v1" className="  full-block"></a>
                    <div className="content">
                      <a href="#" className="h6 title">Header Photos</a>
                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
                    </div>
                  </div>

                  
                  <div className="photo-item col-4-width">
                    <img src="img/photo-item2.jpg" alt="photo" />
                    <div className="overlay overlay-dark"></div>
                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
                    <a href="#" className="post-add-icon inline-items">
                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
                      <span>15</span>
                    </a>
                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
                    <div className="content">
                      <a href="#" className="h6 title">Header Photos</a>
                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
                    </div>
                  </div>

                  
                  <div className="photo-item col-4-width">
                    <img src="img/photo-item3.jpg" alt="photo" />
                    <div className="overlay overlay-dark"></div>
                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
                    <a href="#" className="post-add-icon inline-items">
                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
                      <span>15</span>
                    </a>
                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
                    <div className="content">
                      <a href="#" className="h6 title">Header Photos</a>
                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
                    </div>
                  </div>

                  
                  <div className="photo-item col-4-width">
                    <img src="img/photo-item4.jpg" alt="photo" />
                    <div className="overlay overlay-dark"></div>
                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
                    <a href="#" className="post-add-icon inline-items">
                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
                      <span>15</span>
                    </a>
                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
                    <div className="content">
                      <a href="#" className="h6 title">Header Photos</a>
                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
                    </div>
                  </div>

                  
                  <div className="photo-item col-4-width">
                    <img src="img/photo-item5.jpg" alt="photo" />
                    <div className="overlay overlay-dark"></div>
                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
                    <a href="#" className="post-add-icon inline-items">
                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
                      <span>15</span>
                    </a>
                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
                    <div className="content">
                      <a href="#" className="h6 title">Header Photos</a>
                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
                    </div>
                  </div>

                  
                  <div className="photo-item col-4-width">
                    <img src="img/photo-item6.jpg" alt="photo" />
                    <div className="overlay overlay-dark"></div>
                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
                    <a href="#" className="post-add-icon inline-items">
                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
                      <span>15</span>
                    </a>
                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
                    <div className="content">
                      <a href="#" className="h6 title">Header Photos</a>
                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
                    </div>
                  </div>

                  
                  <div className="photo-item col-4-width">
                    <img src="img/photo-item7.jpg" alt="photo" />
                    <div className="overlay overlay-dark"></div>
                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
                    <a href="#" className="post-add-icon inline-items">
                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
                      <span>15</span>
                    </a>
                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
                    <div className="content">
                      <a href="#" className="h6 title">Header Photos</a>
                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
                    </div>
                  </div>

                  
                  <div className="photo-item col-4-width">
                    <img src="img/photo-item8.jpg" alt="photo" />
                    <div className="overlay overlay-dark"></div>
                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
                    <a href="#" className="post-add-icon inline-items">
                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
                      <span>15</span>
                    </a>
                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
                    <div className="content">
                      <a href="#" className="h6 title">Header Photos</a>
                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
                    </div>
                  </div>

                  
                  <div className="photo-item col-4-width">
                    <img src="img/photo-item9.jpg" alt="photo" />
                    <div className="overlay overlay-dark"></div>
                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
                    <a href="#" className="post-add-icon inline-items">
                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
                      <span>15</span>
                    </a>
                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
                    <div className="content">
                      <a href="#" className="h6 title">Header Photos</a>
                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
                    </div>
                  </div>

                  
                  <div className="photo-item col-4-width">
                    <img src="img/photo-item10.jpg" alt="photo" />
                    <div className="overlay overlay-dark"></div>
                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
                    <a href="#" className="post-add-icon inline-items">
                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
                      <span>15</span>
                    </a>
                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
                    <div className="content">
                      <a href="#" className="h6 title">Header Photos</a>
                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
                    </div>
                  </div>

                  
                  <div className="photo-item col-4-width">
                    <img src="img/photo-item11.jpg" alt="photo" />
                    <div className="overlay overlay-dark"></div>
                    <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
                    <a href="#" className="post-add-icon inline-items">
                      <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
                      <span>15</span>
                    </a>
                    <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
                    <div className="content">
                      <a href="#" className="h6 title">Header Photos</a>
                      <time className="published" dateTime="2017-03-24T18:18">1 week ago</time>
                    </div>
                  </div>
                  

                  <a href="#" className="btn btn-control btn-more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>

                </div>

              </div>

              <div className="tab-pane active" id="album-page" role="tabpanel">

                <div className="photo-album-wrapper">

                                  <div className="photo-album-item-wrap col-4-width">
                    
                    
                    <div className="photo-album-item" data-mh="album-item">
                      <div className="photo-item" onClick={Route.go('/experiencers')}>
                        <img src="img/photo-item2.jpg" alt="photo" />
                        <div className="overlay overlay-dark"></div>
                        <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
                        <a href="#" className="post-add-icon">
                          <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
                          <span>324</span>
                        </a>
                        <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
                      </div>
                    
                      <div className="content">
                        <a href="#" className="title h5">South America Vacations</a>
                        <span className="sub-title">Last Added: 2 hours ago</span>
                    
                        <div className="swiper-container">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <ul className="friends-harmonic">
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic5.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic10.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic7.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic8.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic2.jpg" alt="friend" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                    
                            <div className="swiper-slide">
                              <div className="friend-count" data-swiper-parallax="-500">
                                <a href="#" className="friend-count-item">
                                  <div className="h6">24</div>
                                  <div className="title">Photos</div>
                                </a>
                                <a href="#" className="friend-count-item">
                                  <div className="h6">86</div>
                                  <div className="title">Comments</div>
                                </a>
                                <a href="#" className="friend-count-item">
                                  <div className="h6">16</div>
                                  <div className="title">Share</div>
                                </a>
                              </div>
                            </div>
                          </div>
                    
                          <div className="swiper-pagination"></div>
                        </div>
                      </div>
                    
                    </div>
                  </div>


                  <div className="photo-album-item-wrap col-4-width">
                    
                    
                    <div className="photo-album-item" data-mh="album-item">
                      <div className="photo-item">
                        <img src="img/photo-item2.jpg" alt="photo" />
                        <div className="overlay overlay-dark"></div>
                        <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
                        <a href="#" className="post-add-icon">
                          <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
                          <span>324</span>
                        </a>
                        <a href="#" data-toggle="modal" data-target="#open-photo-popup-v2" className="  full-block"></a>
                      </div>
                    
                      <div className="content">
                        <a href="#" className="title h5">South America Vacations</a>
                        <span className="sub-title">Last Added: 2 hours ago</span>
                    
                        <div className="swiper-container">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <ul className="friends-harmonic">
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic5.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic10.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic7.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic8.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic2.jpg" alt="friend" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                    
                            <div className="swiper-slide">
                              <div className="friend-count" data-swiper-parallax="-500">
                                <a href="#" className="friend-count-item">
                                  <div className="h6">24</div>
                                  <div className="title">Photos</div>
                                </a>
                                <a href="#" className="friend-count-item">
                                  <div className="h6">86</div>
                                  <div className="title">Comments</div>
                                </a>
                                <a href="#" className="friend-count-item">
                                  <div className="h6">16</div>
                                  <div className="title">Share</div>
                                </a>
                              </div>
                            </div>
                          </div>
                    
                          <div className="swiper-pagination"></div>
                        </div>
                      </div>
                    
                    </div>
                  </div>

                  <div className="photo-album-item-wrap col-4-width">
                    
                    
                    <div className="photo-album-item" data-mh="album-item">
                      <div className="photo-item">
                        <img src="img/photo-album1.jpg" alt="photo" />
                        <div className="overlay overlay-dark"></div>
                        <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
                        <a href="#" className="post-add-icon">
                          <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
                          <span>324</span>
                        </a>
                    
                        <a href="#" data-toggle="modal" data-target="#open-photo-popup-v1" className="  full-block"></a>
                      </div>
                    
                      <div className="content">
                        <a href="#" className="title h5">Photoshoot Summer 2016</a>
                        <span className="sub-title">Last Added: 5 weeks ago</span>
                    
                        <div className="swiper-container" data-slide="fade">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <ul className="friends-harmonic">
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic5.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic10.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic7.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic8.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic2.jpg" alt="friend" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                    
                            <div className="swiper-slide">
                              <div className="friend-count" data-swiper-parallax="-500">
                                <a href="#" className="friend-count-item">
                                  <div className="h6">24</div>
                                  <div className="title">Photos</div>
                                </a>
                                <a href="#" className="friend-count-item">
                                  <div className="h6">86</div>
                                  <div className="title">Comments</div>
                                </a>
                                <a href="#" className="friend-count-item">
                                  <div className="h6">16</div>
                                  <div className="title">Share</div>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="swiper-pagination"></div>
                        </div>
                      </div>
                    
                    </div>
                  </div>

                  <div className="photo-album-item-wrap col-4-width">
                    
                    
                    <div className="photo-album-item" data-mh="album-item">
                      <div className="photo-item">
                        <img src="img/photo-album2.jpg" alt="photo" />
                        <div className="overlay overlay-dark"></div>
                        <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
                        <a href="#" className="post-add-icon">
                          <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
                          <span>324</span>
                        </a>
                    
                        <a href="#" data-toggle="modal" data-target="#open-photo-popup-v1" className="  full-block"></a>
                      </div>
                    
                      <div className="content">
                        <a href="#" className="title h5">Amazing Street Food</a>
                        <span className="sub-title">Last Added: 6 mins ago</span>
                    
                        <div className="swiper-container" data-slide="fade">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <ul className="friends-harmonic">
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic10.jpg" alt="friend" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                    
                            <div className="swiper-slide">
                              <div className="friend-count" data-swiper-parallax="-500">
                                <a href="#" className="friend-count-item">
                                  <div className="h6">24</div>
                                  <div className="title">Photos</div>
                                </a>
                                <a href="#" className="friend-count-item">
                                  <div className="h6">86</div>
                                  <div className="title">Comments</div>
                                </a>
                                <a href="#" className="friend-count-item">
                                  <div className="h6">16</div>
                                  <div className="title">Share</div>
                                </a>
                              </div>
                            </div>
                          </div>
                    
                          <div className="swiper-pagination"></div>
                        </div>
                      </div>
                    
                    </div>
                  </div>

                  <div className="photo-album-item-wrap col-4-width">
                    
                    <div className="photo-album-item" data-mh="album-item">
                      <div className="photo-item">
                        <img src="img/photo-album3.jpg" alt="photo" />
                        <div className="overlay overlay-dark"></div>
                        <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
                        <a href="#" className="post-add-icon">
                          <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
                          <span>324</span>
                        </a>
                    
                        <a href="#" data-toggle="modal" data-target="#open-photo-popup-v1" className="  full-block"></a>
                      </div>
                    
                      <div className="content">
                        <a href="#" className="title h5">Graffiti & Street Art</a>
                        <span className="sub-title">Last Added: 16 hours ago</span>
                    
                        <div className="swiper-container" data-slide="fade">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <ul className="friends-harmonic">
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic10.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic7.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic8.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic2.jpg" alt="friend" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                    
                            <div className="swiper-slide">
                              <div className="friend-count" data-swiper-parallax="-500">
                                <a href="#" className="friend-count-item">
                                  <div className="h6">24</div>
                                  <div className="title">Photos</div>
                                </a>
                                <a href="#" className="friend-count-item">
                                  <div className="h6">86</div>
                                  <div className="title">Comments</div>
                                </a>
                                <a href="#" className="friend-count-item">
                                  <div className="h6">16</div>
                                  <div className="title">Share</div>
                                </a>
                              </div>
                            </div>
                          </div>
                    
                          
                          <div className="swiper-pagination"></div>
                        </div>
                      </div>
                    
                    </div>
                    
                  </div>

                  <div className="photo-album-item-wrap col-4-width">
                    
                    
                    <div className="photo-album-item" data-mh="album-item">
                      <div className="photo-item">
                        <img src="img/photo-album4.jpg" alt="photo" />
                        <div className="overlay overlay-dark"></div>
                        <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
                        <a href="#" className="post-add-icon">
                          <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
                          <span>324</span>
                        </a>
                    
                        <a href="#" data-toggle="modal" data-target="#open-photo-popup-v1" className="  full-block"></a>
                      </div>
                    
                      <div className="content">
                        <a href="#" className="title h5">Amazing Landscapes</a>
                        <span className="sub-title">Last Added: 13 mins ago</span>
                    
                        <div className="swiper-container" data-slide="fade">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <ul className="friends-harmonic">
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic5.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic10.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic7.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic8.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic2.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/avatar30-sm.jpg" alt="author" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/avatar29-sm.jpg" alt="user" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/avatar28-sm.jpg" alt="user" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/avatar27-sm.jpg" alt="user" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="all-users">+3</a>
                                </li>
                              </ul>
                            </div>
                    
                            <div className="swiper-slide">
                              <div className="friend-count" data-swiper-parallax="-500">
                                <a href="#" className="friend-count-item">
                                  <div className="h6">24</div>
                                  <div className="title">Photos</div>
                                </a>
                                <a href="#" className="friend-count-item">
                                  <div className="h6">86</div>
                                  <div className="title">Comments</div>
                                </a>
                                <a href="#" className="friend-count-item">
                                  <div className="h6">16</div>
                                  <div className="title">Share</div>
                                </a>
                              </div>
                            </div>
                          </div>
                    
                          
                          <div className="swiper-pagination"></div>
                        </div>
                      </div>
                    
                    </div>
                  </div>

                  <div className="photo-album-item-wrap col-4-width">
                    
                    
                    <div className="photo-album-item" data-mh="album-item">
                      <div className="photo-item">
                        <img src="img/photo-item6.jpg" alt="photo" />
                        <div className="overlay overlay-dark"></div>
                        <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
                        <a href="#" className="post-add-icon">
                          <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
                          <span>324</span>
                        </a>
                    
                        <a href="#" data-toggle="modal" data-target="#open-photo-popup-v1" className="  full-block"></a>
                      </div>
                    
                      <div className="content">
                        <a href="#" className="title h5">The Majestic Canyon</a>
                        <span className="sub-title">Last Added: 57 mins ago</span>
                    
                        <div className="swiper-container" data-slide="fade">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <ul className="friends-harmonic">
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic10.jpg" alt="friend" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                    
                            <div className="swiper-slide">
                              <div className="friend-count" data-swiper-parallax="-500">
                                <a href="#" className="friend-count-item">
                                  <div className="h6">24</div>
                                  <div className="title">Photos</div>
                                </a>
                                <a href="#" className="friend-count-item">
                                  <div className="h6">86</div>
                                  <div className="title">Comments</div>
                                </a>
                                <a href="#" className="friend-count-item">
                                  <div className="h6">16</div>
                                  <div className="title">Share</div>
                                </a>
                              </div>
                            </div>
                          </div>
                    
                          
                          <div className="swiper-pagination"></div>
                        </div>
                      </div>
                    
                    </div>
                  </div>

                  <div className="photo-album-item-wrap col-4-width">
                    
                    
                    <div className="photo-album-item" data-mh="album-item">
                      <div className="photo-item">
                        <img src="img/photo-album5.jpg" alt="photo" />
                        <div className="overlay overlay-dark"></div>
                        <a href="#" className="more"><svg className="olymp-three-dots-icon" dangerouslySetInnerHTML={{__html: threeDots }} /></a>
                        <a href="#" className="post-add-icon">
                          <svg className="olymp-heart-icon" dangerouslySetInnerHTML={{__html: heartIcon }} />
                          <span>324</span>
                        </a>
                    
                        <a href="#" data-toggle="modal" data-target="#open-photo-popup-v1" className="  full-block"></a>
                      </div>
                    
                      <div className="content">
                        <a href="#" className="title h5">Winter 2015 Portraits</a>
                        <span className="sub-title">Last Added: 1 year ago</span>
                    
                        <div className="swiper-container" data-slide="fade">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <ul className="friends-harmonic">
                                <li>
                                  <a href="#">
                                    <img src="img/friend-harmonic10.jpg" alt="friend" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/avatar30-sm.jpg" alt="author" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img src="img/avatar29-sm.jpg" alt="user" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                    
                            <div className="swiper-slide">
                              <div className="friend-count" data-swiper-parallax="-500">
                                <a href="#" className="friend-count-item">
                                  <div className="h6">24</div>
                                  <div className="title">Photos</div>
                                </a>
                                <a href="#" className="friend-count-item">
                                  <div className="h6">86</div>
                                  <div className="title">Comments</div>
                                </a>
                                <a href="#" className="friend-count-item">
                                  <div className="h6">16</div>
                                  <div className="title">Share</div>
                                </a>
                              </div>
                            </div>
                          </div>
                    
                          
                          <div className="swiper-pagination"></div>
                        </div>
                      </div>
                    
                    </div>
                  </div>

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

export default Main;
