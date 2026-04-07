import React from 'react';
import Card from 'react-bootstrap/Card';

// Player component displays a single FIFA-style player card.
// It uses inline styles and theme colors based on the player's team.
function Player({ name, team, nationality, jerseyNumber, age, imageUrl, position, style = {}, className = '' }) {
    const teamThemes = {
        'Paris Saint-Germain': ['#072d52', '#ffd700'],
        'OL Reign': ['#0e1b42', '#6c63ff'],
        'Manchester City': ['#82c5ff', '#0a3d72'],
        'FC Barcelona': ['#1d2951', '#a50044'],
        'Inter Miami': ['#f45b9f', '#070a18'],
        'Chelsea FC': ['#0f2d67', '#65a7ff']
    };

    // Select theme colors based on the player team.
    const [primaryColor, accentColor] = teamThemes[team] || ['#10204c', '#7f7fff'];

    // Card container style.
    const cardStyle = {
        width: '22rem',
        margin: '1rem',
        minHeight: '31rem',
        borderRadius: '1.8rem',
        overflow: 'hidden',
        color: '#f3f7ff',
        background: `linear-gradient(180deg, ${primaryColor} 0%, rgba(5, 8, 22, 0.95) 65%)`,
        boxShadow: `0 30px 60px rgba(0, 0, 0, 0.35), inset 0 0 1px rgba(255, 255, 255, 0.06)`,
        border: `1px solid rgba(255, 255, 255, 0.12)`,
        position: 'relative',
        ...style
    };

    // Image wrapper adds a team-colored glow behind the portrait.
    const imageWrapperStyle = {
        position: 'relative',
        width: '100%',
        minHeight: '230px',
        overflow: 'hidden',
        background: `radial-gradient(circle at top left, ${accentColor}22, transparent 40%)`
    };

    const imageStyle = {
        width: '100%',
        height: '230px',
        objectFit: 'cover',
        display: 'block',
        filter: 'brightness(0.95) contrast(1.05)'
    };

    const imageOverlayStyle = {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, transparent 45%, rgba(0, 0, 0, 0.55) 100%)'
    };

    const jerseyStyle = {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        width: '3rem',
        height: '3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: `linear-gradient(135deg, ${accentColor}, #ffffff)`,
        color: '#051027',
        fontWeight: '900',
        fontSize: '1.2rem',
        borderRadius: '50%',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.35)',
        border: '2px solid rgba(255, 255, 255, 0.2)'
    };

    const titleStyle = {
        fontSize: '1.55rem',
        marginBottom: '0.35rem',
        color: '#f6f8ff',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '0.1rem'
    };

    const subTitleStyle = {
        color: '#a8c2ff',
        fontSize: '0.9rem',
        textAlign: 'center',
        marginBottom: '1rem',
        letterSpacing: '0.08rem'
    };

    const infoStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '0.75rem',
        marginTop: '0.75rem'
    };

    const infoCard = {
        background: 'rgba(255, 255, 255, 0.06)',
        borderRadius: '1rem',
        padding: '0.85rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        textAlign: 'center'
    };

    const infoLabel = {
        fontSize: '0.75rem',
        color: '#9fb7ff',
        marginBottom: '0.25rem',
        textTransform: 'uppercase',
        letterSpacing: '0.08rem'
    };

    const infoValue = {
        fontSize: '1rem',
        color: '#f6f8ff',
        fontWeight: '700'
    };

    const badgeStyle = {
        display: 'inline-block',
        margin: '0 auto 0.75rem',
        background: `linear-gradient(135deg, ${accentColor}, rgba(255, 255, 255, 0.15))`,
        color: '#fff',
        padding: '0.4rem 0.9rem',
        borderRadius: '999px',
        fontSize: '0.8rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.08rem',
        border: '1px solid rgba(255,255,255,0.18)'
    };


    return (
        <Card style={cardStyle} className={`player-card ${className}`}>
            <div style={imageWrapperStyle}>
                <img
                    src={imageUrl }
                    alt={`${name} portrait`}
                    style={imageStyle}
                />
                <div style={imageOverlayStyle} />
                <div style={jerseyStyle}>#{jerseyNumber}</div>
            </div>
            <Card.Body>
                <div style={badgeStyle}>{team}</div>
                <Card.Title style={titleStyle}>{name}</Card.Title>
                <div style={subTitleStyle}>{position}</div>
                <div style={infoStyle}>
                    <div style={infoCard}>
                        <div style={infoLabel}>Nationality</div>
                        <div style={infoValue}>{nationality}</div>
                    </div>
                    <div style={infoCard}>
                        <div style={infoLabel}>Age</div>
                        <div style={infoValue}>{age}</div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

Player.defaultProps = {
    name: 'Unknown Player',
    team: 'Unknown Team',
    nationality: 'Unknown',
    jerseyNumber: 0,
    age: 'N/A',
    position: 'Unknown',
    imageUrl: ''
};

export default Player;
