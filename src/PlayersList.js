import React, { useState } from 'react';
import Player from './Player';
import players from './players';

// PlayersList renders the full FIFA roster and includes a search bar.
function PlayersList() {
    // Search term state for filtering player cards by name.
    const [searchTerm, setSearchTerm] = useState('');

    // Filter the players based on the current search input.
    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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

    const searchStyle = {
        display: 'block',
        margin: '0 auto 2rem',
        padding: '0.75rem 1rem',
        width: '100%',
        maxWidth: '400px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '0.5rem',
        background: 'rgba(255, 255, 255, 0.1)',
        color: '#ffffff',
        fontSize: '1rem',
        outline: 'none'
    };

    const searchPlaceholder = {
        color: '#a8b8e4'
    };

    return (
        <section style={sectionStyle}>
            <h1 style={titleStyle}>FIFA Player Cards</h1>
            <p style={subtitleStyle}>A selection of iconic players with a premium FIFA-style presentation.</p>
            <input
                type="text"
                placeholder="Search players by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ ...searchStyle, ...searchPlaceholder }}
            />
            <div style={listContainerStyle}>
                {filteredPlayers.map((player, index) => (
                    <Player
                        key={`${player.name}-${player.jerseyNumber}`}
                        className="card-enter"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        {...player}
                    />
                ))}
            </div>
        </section>
    );
}

export default PlayersList;
