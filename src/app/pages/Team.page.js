import PropTypes from "prop-types";
import React, { Component } from "react";
import Header from "../components/common/Header.component";
import UserCard from "../components/common/UserCard.component";
import displayPage from "./_PageContainer";

class Team extends Component {
  constructor(props) {
    super(props);
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

  componentDidUpdate() {
    if (this.state.location) {
      window.scrollTo(0, 0);
    }
  }

  _onResize() {
    const isMobile = window.innerWidth <= 768;
    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile });
    }
  }

  render() {
    const { isMobile } = this.state;
    const { Orgas } = this.props.gsheet;
    let line = 0;
    return (
      <div>
        <Header title="L'ÉQUIPE" />

        <div className="row align-center users-container">
          <div className="flottant-right">
            <img src="img/svg/about_flottant.svg" />
          </div>
          <div className="column small-12 large-8">
            <h4>/ L'EQUIPE</h4>
            <div className="row users-container-content">
              {Orgas.map((member, i) => {
                if (!isMobile && i % 2 === 0) line++;
                return <UserCard key={`member_${i}`} user={member} imageAtRight={line % 2 === 0} />;
              })}
            </div>
          </div>
          <div className="flottant-left">
            <img src="img/svg/theme2_flottant.svg" />
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

Team.propTypes = {
  gsheet: PropTypes.object.isRequired
};

export default displayPage(Team);
