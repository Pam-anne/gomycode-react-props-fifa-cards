import React from 'react';
import Card from 'react-bootstrap/Card';

// Player component displays a single FIFA player card with inline styling
function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
    const cardStyle = {
        width: '22rem',
        margin: '1rem',
        minHeight: '29rem',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        color: '#f3f7ff',
        background: 'linear-gradient(180deg, #10204c 0%, #081035 55%, #090e29 100%)',
        boxShadow: '0 24px 40px rgba(0, 0, 0, 0.35)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
    };

    const imageStyle = {
        width: '100%',
        height: '280px',
        objectFit: 'cover',
        display: 'block'
    };

    const badgeStyle = {
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        background: 'rgba(255, 255, 255, 0.16)',
        color: '#ffffff',
        padding: '0.45rem 0.9rem',
        borderRadius: '999px',
        fontWeight: '700',
        letterSpacing: '0.08rem',
        fontSize: '0.9rem',
        border: '1px solid rgba(255, 255, 255, 0.14)'
    };

    const titleStyle = {
        fontSize: '1.45rem',
        marginBottom: '0.35rem',
        color: '#f7fbff'
    };

    const labelStyle = {
        display: 'block',
        fontSize: '0.85rem',
        color: '#9fb7ff',
        letterSpacing: '0.06rem',
        marginBottom: '0.35rem'
    };

    const textStyle = {
        fontSize: '0.98rem',
        lineHeight: '1.75',
        color: '#dce4ff'
    };

   
    return (
        <Card style={cardStyle} className="player-card">
            {imageUrl && (
                <div style={{ position: 'relative' }}>
                    <img
                        src={imageUrl}
                        alt={`${name} portrait`}
                        style={imageStyle}
                        
                    />
                    <div style={badgeStyle}>#{jerseyNumber}</div>
                </div>
            )}
            <Card.Body>
                <Card.Title style={titleStyle}>{name}</Card.Title>
                <Card.Text style={textStyle}>
                    <span style={labelStyle}>Team</span>
                    {team}
                </Card.Text>
                <Card.Text style={textStyle}>
                    <span style={labelStyle}>Nationality</span>
                    {nationality}
                </Card.Text>
                <Card.Text style={textStyle}>
                    <span style={labelStyle}>Age</span>
                    {age}
                </Card.Text>
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
    imageUrl: ''
};

export default Player;
