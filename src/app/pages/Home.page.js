import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import displayPage from './_PageContainer';
import Countdown from '../components/Countdown.component';
import MetricsBar from '../components/home/MetricsBar.component';
import Link from 'react-router-dom/es/Link';
import ConferenceThemes from '../components/home/ConferenceThemes.component';
import Quote from '../components/home/Quote.component';
import SomeSpeakersPresentation from '../components/home/SomeSpeakersPresentation.component';
import SomeNews from '../components/home/SomeNews.component';
import TicketingAccess from '../components/home/TicketingAccess.component';
import Location from '../components/home/Location.component';
import SponsorsBar from '../components/common/SponsorsBar.component';

import {Constants} from '../constants';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            isMobile: false,
        };
        this._onResize = this._onResize.bind(this);
    }

    componentWillMount() {
        this._onResize();
        window.addEventListener('resize', this._onResize);
    }

    componentWillUnmount() {
        document.removeEventListener('resize', this._onResize);
    }

    _onResize() {
        const isMobile = window.innerWidth <= 768;
        if (isMobile !== this.state.isMobile) {
            this.setState({isMobile})
        }
    }

    render() {
        const {isMobile} = this.state;
        const {News, Sponsors, Speakers, Speakers17, Config} = this.props.gsheet;

        const IMPERIAL = Sponsors.filter((s) => s['Actif'] === '1' && s['Type'].toUpperCase() === Constants.sponsors.types.IMPERIAL);

        return (
            <div className="home">
                <div className="home-homeFlottant">
                    <img className="homeFlottant" src="img/svg/home_flottant.svg"/>
                </div>
                <img className="homeBg" src="img/png/header_bg.png"/>

                <div className="row home-header">
                    <h1 className="columns auto text-center">Bienvenue à BDX I/O 2018 !</h1>
                    <div className="row align-center">
                        <div className="columns shrink home-header-content">
                            <span><i className="fa fa-calendar"></i>9 novembre</span>
                            <span><i className="fa fa-map-marker"></i>EINSERB</span>
                        </div>
                    </div>

                    <Countdown/>

                    <div className="columns auto text-center home-header-button">
                        {Config.registrationOpened === 'opened' &&
                        <button className="button medium white" type="button">S'inscrire</button>
                        }
                        {moment().isSameOrAfter(moment(Config.talksListPublishingDate)) &&
                        <button className="button medium white" type="button">Programme</button>
                        }
                        {Config.registrationOpened !== 'opened' && moment().isBefore(moment(Config.talksListPublishingDate)) &&
                        <a href="/static/plaquette.pdf" className="button medium white" target="_blank">Devenir
                            sponsors</a>
                        }
                    </div>
                </div>

                <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 12 50 28" xmlSpace="preserve">
                    <g>
                        <defs>
                            <polygon id="SVGID_1_" points="0,11.7 0,24.8 25,36.3 50,24.8 50,11.7"/>
                        </defs>
                        <clipPath id="SVGID_2_">
                            <use xlinkHref="#SVGID_1_"/>
                        </clipPath>
                        <g style={{'clipPath': 'url(#SVGID_2_)'}}>

                            <image width="4500" height="2700" xlinkHref="img/png/bdxio_header.png"
                                   transform="matrix(1.256919e-02 0 0 1.256919e-02 -3.513 3.5492)">
                            </image>
                        </g>
                    </g>
                </svg>

                <section className="row text-center home-about">
                    <div className="home-about-aboutFlottant">
                        <img className="aboutFlottant" src="img/svg/about_flottant.svg"/>
                    </div>
                    <h5 className="sectionTitle align-center">À propos de Bdxio</h5>
                    <h6>
                        BDX I/O est une conférence sur le thème de la programmation et de ses métiers annexes. <br/>
                        Pour cette cinquième édition, nous recevrons encore 500 passioné·e·s pour une nouvelle journéede
                        découverte dans la bonne
                        humeur !!!
                    </h6>
                </section>

                <MetricsBar/>

                {/*<div className="row align-center">*/}
                {/*<Link className="columns shrink button small primary disabled" to="/gallery">Voir la galerie</Link>*/}
                {/*</div>*/}

                <ConferenceThemes/>

                <Quote/>

                <SomeSpeakersPresentation
                    speakers={(Speakers.length > 0 ? Speakers : Speakers17)}
                    isPrevious={(Speakers.length === 0)}
                    isMobile={isMobile}/>

                <SomeNews news={News}/>

                <TicketingAccess registrationIsOpened={(Config.registrationOpened === 'opened')}/>

                <Location/>

                {IMPERIAL.length > 0 &&
                <SponsorsBar partners={IMPERIAL}/>
                }
                {this.props.children}
            </div>
        );
    }
}

Home.propTypes = {
    gsheet: PropTypes.object.isRequired,
}

export default displayPage(Home)