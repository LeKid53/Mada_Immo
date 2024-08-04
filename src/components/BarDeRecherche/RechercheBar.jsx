import React from 'react';

const RechercheBar = () => {
    return (
        <header style={styles.header}>
            <h1>Recherchez votre Destination</h1>
            <p>"Plongez dans l'élégance ultime et découvrez des séjours inoubliables dans les recoins les plus exclusifs"</p>
            <div style={styles.searchContainer}>
                <input type="text" placeholder="Recherchez votre destination" style={styles.input} />
                <input type="text" placeholder="Quand ?" style={styles.input} />
                <input type="text" placeholder="Quand ?" style={styles.input} />
                <input type="text" placeholder="Ajouter des voyageurs" style={styles.input} />
                <button style={styles.button}>Rechercher</button>
            </div>
        </header>
    );
};

const styles = {
    header: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f1f1f1',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    searchContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '20px',
    },
    input: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
    }
};

export default RechercheBar;
