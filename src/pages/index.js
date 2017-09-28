import React from 'react';
import Link from 'gatsby-link';
import { color } from '../config';
import { Button } from '../components/bits';
import Picker from '../components/picker';
import { roster } from '../data';
import DevotionalToday from './devotional_today';

const IndexPage = () => (
    <div
        style={{
            display: 'flex',
            flexGrow: 1,
            marginTop: 30
        }}
    >
        <div
            style={{
                flexGrow: 1
            }}
        >
            <h3 style={{ borderBottom: '1px solid #ddd' }}>
                Devotional Schedule
            </h3>
            <DevotionalToday />
            <Link to="/devotional/">See full schedule</Link>
        </div>
        <div
            style={{
                flexGrow: 1,
                padding: 15,
                border: `2px solid ${color.primary}`,
                borderRadius: 20
            }}
        >
            <Picker items={roster}>
                {({ item, getPickerProps }) => (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <p
                            style={{
                                fontSize: '2em',
                                marginTop: 15,
                                fontWeight: 300
                            }}
                        >
                            {item}
                        </p>
                        <Button noshadow primary mini {...getPickerProps()}>
                            Random Student Picker
                        </Button>
                    </div>
                )}
            </Picker>
        </div>
    </div>
);

export default IndexPage;
