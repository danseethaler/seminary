import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { Button } from '../components/bits';
import glamorous, { div } from 'glamorous';
import { links } from '../data';

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
            maxWidth: 960
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
            <NavLink to="/">Home</NavLink>
            <NavLink to="/devotional">Devotional</NavLink>
            <NavLink to="/links">Links</NavLink>
            <Button
                border
                primary
                onClick={() => {
                    links.map(link => (link.launch ? window.open(link.url) : null));
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
