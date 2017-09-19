import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { Button } from '../components/bits';
import glamorous, { div } from 'glamorous';

import './index.css';
import '../assets/lato.css';

const NavContainer = div({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
});

const NavLink = props => {
    let passProps = Object.assign({}, props);

    let NavLink = glamorous(Link)({
        marginRight: '2rem',
        color: '#2d414e',
        textDecoration: 'none',
        fontFamily: 'Lato, sans-serif'
    });

    // Add active-page className
    if (typeof window !== 'undefined') {
        passProps.className =
            location.pathname === passProps.to ? 'active-page' : null;
    }
    return <NavLink {...passProps} />;
};

const Header = () => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '.7rem',
            borderBottom: '1px solid #dddddd',
            margin: '0 auto',
            maxWidth: 960,
        }}
    >
        <NavContainer>
            <h3 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: '#2d414e',
                        textDecoration: 'none'
                    }}
                >
                    Hillsborough Seminary
                </Link>
            </h3>
        </NavContainer>
        <NavContainer>
          <NavLink to="/devotional">Devotional</NavLink>
            <Button
                border
                primary
                onClick={() => {
                    [
                        'https://wise.ldschurch.org/Students.aspx/Index',
                        'https://docs.google.com/spreadsheets/d/1-GnGfrWhAc5y6B_PZpRpsOgNMs5bUGtPKupaiWPsH68/edit#gid=137770678',
                        'https://www.lds.org/manual/doctrinal-mastery-book-of-mormon-teacher-material?lang=eng',
                        'https://www.lds.org/manual/book-of-mormon-seminary-teacher-manual-2017?lang=eng'
                    ].map(link => window.open(link));
                }}
            >
                Launch
            </Button>
        </NavContainer>
    </div>
);

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="LDS Seminary | Hillsborough, NC"
            meta={[
                {
                    name: 'description',
                    content: 'LDS Seminary Class | Hillsborough'
                },
                { name: 'keywords', content: 'seminary, lds, church, youth' }
            ]}
        />
        <Header />
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0
            }}
        >
            {children()}
        </div>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
