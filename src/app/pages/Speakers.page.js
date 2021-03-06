import React, { Component } from "react";
import Header from "../components/common/Header.component";
import displayPage from "./_PageContainer";
import UserCard from "../components/common/UserCard.component";
import all_talks from '../../static/schedule.js'

class Speakers extends Component {
  constructor() {
    super();
    this.state = {
      isMobile: false
    };
    this._onResize = this._onResize.bind(this);
  }

  componentWillMount() {
    this._onResize();
    window.addEventListener("resize", this._onResize);
  }

  componentWillUnmount() {
    document.removeEventListener("resize", this._onResize);
  }

  _onResize() {
    const isMobile = window.innerWidth <= 500;
    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile });
    }
  }

  render() {
    const { isMobile } = this.state;
    let Speakers = Array.prototype.concat.apply([], all_talks.map(talk => talk.speakers)).filter(speaker => !!speaker);
    Speakers = Speakers.filter((speaker, i) => Speakers.findIndex(s => s.name === speaker.name) === i)
      .map(speaker => ({
        "Avatar url": speaker.photoURL,
        "Prénom": speaker.name.split(/\s/)[0],
        "Nom": speaker.name.split(/\s/)[1],
        "Bio": speaker.bio,
        "gender": "male"
      }));
    let line = 0;
    return (
      <div>
        <Header title="CONFERENCIER·ÈRE·S 2019" />
        <div className="row align-center users-container">
          <div className="flottant-right">
            <img src="img/svg/about_flottant.svg" />
          </div>

          <div className="column small-12 large-8">
            <div className="row users-container-content">
              {Speakers.map((member, i) => {
                if (!isMobile && i % 2 === 0) line++;
                return <UserCard key={`member_${i}`} user={member} imageAtRight={line % 2 === 0} />;
              })}
            </div>
          </div>

          <div className="flottant-left">
            <img src="img/svg/theme2_flottant.svg" />
          </div>
        </div>
      </div>
    );
  }
}

export default displayPage(Speakers);
