import React from 'react';
import Room from '../Room/Room';

const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    const rooms = [{
    id: 1,
    name: "BIKE",
    image: "https://media.zigcdn.com/media/content/2020/Jun/zw_bajaj_pulsar_split_seat_640x480.jpg"
   
   
  }, {
    id: 2,
    name: "CAR",
    image: "https://ymimg1.b8cdn.com/resized/car_model/6554/pictures/6209064/mobile_listing_main_01.jpg"
    
  }, {
    id: 3,
    name: "BUS",
    image: "http://www.uttaramotorsltd.com/wp-content/uploads/2016/02/MT-Bus.png"
  }, {
    id: 4,
    name: "TRAIN",
    image: "https://st2.depositphotos.com/2395803/8709/i/950/depositphotos_87091452-stock-photo-train-isolated-on-white-background.jpg"
    
  }]

    return (
        <div style={style}>
            {
                rooms.map(room => <Room key={room.bedType} room={room}></Room>)
            }
        </div>
    );
};

export default Home;