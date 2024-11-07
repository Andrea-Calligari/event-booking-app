import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import EventList from './components/EventList';
import BookingForm from './components/BookingForm';



function App() {
  const [events, setEventList] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/events.json');
        const data = await response.json();
        setEventList(data);
      }
      catch (error) {
        console.log("Errore", error)
      }
    }

    fetchEvents();
  }, []);

  const handleEvent = (event) => {
    setSelectedEvent(event);
  }

  const handleBooking = (eventId) => {

    const updatedEvents = events.map((el) => {

      if (el.id === eventId) {
        return { ...el, availableSeats: el.availableSeats - 1 }
      } else {
        return el;
      }
    });

    setEventList(updatedEvents);

    const updatedSelectedEvent = updatedEvents.find((event) => event.id === eventId);

    if (updatedSelectedEvent) {
      setSelectedEvent(updatedSelectedEvent);
      alert(`Congratulazioni, hai prenotato un posto per ${updatedSelectedEvent.name}, il giorno ${updatedSelectedEvent.date}, ti aspettiamo! `)

    }
  }
  return (
    <div className="App">
      <EventList events={events} handleEvent={handleEvent} selectedEvent={selectedEvent} />
      <BookingForm event={selectedEvent} onBooking={handleBooking} />
    </div>
  );
}

export default App;
