import React from 'react'
import Container from '../styled/Container';


const EventList = ({ events, handleEvent }) => {

  return (
    <>
      <Container variant='events'>
        <h1 style={{ marginBottom: '20px', color: 'rgba(8, 31, 233, 0.87)' }}>Events List</h1>
        <div className='row'>
          {events && events.map((el) => {
            const { id, name } = el;
            return (<div key={id} className='col-4 '>
              <li className='card card-event' onClick={() => { handleEvent(el) }} >{name}</li>
            </div>
            );
          })}
        </div>
      </Container>
    </>
  )
}

export default EventList
