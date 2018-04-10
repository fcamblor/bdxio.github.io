import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../components/common/Footer.component';
import Header from '../components/common/Header.componet';

import { Actions as GSheetActions } from '../actions/gsheet.actions';

const displayPage = (Page) => {
    class DisplayPage extends Component {

        constructor(props) {
            super(props)
        }

        componentWillMount() {
            this.props.dispatch(GSheetActions.fetch());
        }

        render() {
            const { Sponsors } = this.props.gsheet;
            const IMPERIAL = Sponsors.filter((s) => s['Actif'] === '1' && s['Type'].toUpperCase() === Constant.sponsors.types.IMPERIAL);

            return (
                <div>
                    <Header />
                    <Page {...this.props} />
                    <Footer style={{ marginTop: (IMPERIAL.length === 0 ? '0px': '64px') }} />
                </div>
            )
        }
    }

    DisplayPage.propTypes = {
        gsheet: PropTypes.object.isRequired,
    };

    const mapStateToProps = (state) => {
        return {
            gsheet: state.gsheet
        };
    };

    return connect(mapStateToProps)(DisplayPage)
};

export default displayPage;