import React from 'react';
import Player from './Player';
import players from './players';

// PlayersList renders all player cards by mapping through the players array
function PlayersList() {
    const listContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        gap: '1rem'
    };

    const sectionStyle = {
        padding: '3rem 1rem 4rem',
        background: 'radial-gradient(circle at top, rgba(116, 152, 255, 0.14), transparent 35%), linear-gradient(180deg, #08122e 0%, #050814 100%)'
    };

    const titleStyle = {
        textAlign: 'center',
        marginBottom: '0.5rem',
        color: '#e8f0ff',
        fontSize: '2.6rem',
        letterSpacing: '0.12rem'
    };

    const subtitleStyle = {
        textAlign: 'center',
        marginBottom: '2rem',
        color: '#a8b8e4',
        fontSize: '1rem'
    };

    return (
        <section style={sectionStyle}>
            <h1 style={titleStyle}>FIFA Player Cards</h1>
            <p style={subtitleStyle}>A selection of iconic players with a premium FIFA-style presentation.</p>
            <div style={listContainerStyle}>
                {players.map((player) => (
                    <Player key={`${player.name}-${player.jerseyNumber}`} {...player} />
                ))}
            </div>
        </section>
    );
}

export default PlayersList;
