import React from 'react';

export default class Footer extends React.Component {
    render() {
        const linkStyle = { color: 'white' };

        return (
            <footer className='footer'>
                ¬POKEAPI¬ - 2023
                <br/>
                Designed by <a style={linkStyle} href='https://www.linkedin.com/in/evans-acheampong/' target='_blank' rel='noopener noreferrer'>Evans Acheampong</a>
            </footer>
        );
    }
}
