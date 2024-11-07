import React, { useState, useEffect } from 'react';
import Container from '../styled/Container';

const BookingForm = ({ event, onBooking }) => {
    // availableSeats setting state
    const [availableSeats, setAvailableSeats] = useState(null);

    useEffect(() => {
       
        if (event && event.id) { 
            // if the event exist , save the seats in the localStorage 
            const savedSeats = localStorage.getItem(`availableSeats_${event.id}`);
            const initialSeats = savedSeats !== null ? JSON.parse(savedSeats) : event.availableSeats; 
            setAvailableSeats(initialSeats);
        }
    }, [event]);

    useEffect(() => {
        if (event && event.id && availableSeats !== null) {
            localStorage.setItem(`availableSeats_${event.id}`, JSON.stringify(availableSeats));
        }
    }, [availableSeats, event]);

    const handleBooking = () => {
        if (event && event.id && availableSeats > 0) {
            setAvailableSeats(prevSeats => {
                const newSeats = prevSeats - 1;
                return newSeats;
            });
            setTimeout(() => onBooking(event.id), 0);

        }
    };

    if (!event || availableSeats === null) {
        return <div style={{ color: 'whitesmoke', fontSize: '20px' }}>...Seleziona e guarda qua i dettagli dell'evento...</div>; 
    }
    // localStorage.clear(); for clear the cache , all resetting
    return (
        <>
            <Container variant="details">
                <h2>Dettagli Evento</h2>
                <div className="card card-details">
                    <div className="card-body">
                        <ul className='row-list'>
                            <li>Nome: {event.name}</li>
                            <li>Data: {event.date}</li>
                            <li>Luogo: {event.location}</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>Posti Disponibili: {availableSeats <= 0 ? <h2 style={{ color: 'red' }}>Posti esauriti</h2> : availableSeats}</li>
                        </ul>
                    </div>
                    <button onClick={handleBooking} disabled={availableSeats <= 0} className="button btn-booking"> Prenota ora!</button>
                </div>
            </Container>


        </>
    );
};

export default BookingForm;
