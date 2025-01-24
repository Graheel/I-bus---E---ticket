import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookTicket.css';

const BookTicket = () => {
  const [route, setRoute] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [price, setPrice] = useState(0);
  const [stops, setStops] = useState([]);
  const navigate = useNavigate();

  const routes = {
'Vijay Nagar to Niranjanpur': ['Vijay Nagar', 'Scheme 78', 'Shalini Township', 'Satya Sai Square', 'Niranjanpur'],
    'Niranjanpur to Rajiv Gandhi Square': [
      'Niranjanpur', 'Scheme 78', 'Shalini Township', 'Satya Sai Square', 'Vijay Nagar', 'MR 9', 'Press Complex',
      'L.I.G', 'Industry House', 'Palasiya', 'Geeta Bhavan Square', 'ICTSL', 'Shivaji Vatika', 'G.P.O', 'Indra Pratima',
      'Navlakha Square', 'Holkar Subway', 'Bhavarkua Square', 'Vishnu Puri', 'Mata Gujari', 'Rajiv Gandhi Square',
    ],
    'Rajiv Gandhi Square to Silicon City': [
      'Rajiv Gandhi Square', 'Abhyass Udyan', 'Maa Vihar', 'Gadbadi Bridge', 'Arjun Nagar', 'Bijalpur', 'Ragendra Nagar',
      'Durga Nagar', 'Reti Mandi', 'Gamla Wali Pudiya', 'IPS Academy', 'Silicon City',
    ],
    'Rajiv Gandhi Square to Rau Bypass': [
      'Rajiv Gandhi Square', 'Abhyass Udyan', 'Maa Vihar', 'Gadbadi Bridge', 'Arjun Nagar', 'Bijalpur', 'Ragendra Nagar',
      'Durga Nagar', 'Reti Mandi', 'Gamla Wali Pudiya', 'IPS Academy', 'Silicon City', 'Jeevan Jyoti', 'Rau Petrolpump',
      'Rau Bus Stop', 'Mamaji Ka Dhaba', 'Rau Bypass',
    ],
    'Rajiv Gandhi Square to Mahu Railway Station': [
      'Rajiv Gandhi Square', 'Abhyass Udyan', 'Maa Vihar', 'Gadbadi Bridge', 'Arjun Nagar', 'Bijalpur', 'Ragendra Nagar',
      'Durga Nagar', 'Reti Mandi', 'Gamla Wali Pudiya', 'IPS Academy', 'Silicon City', 'Jeevan Jyoti', 'Rau Petrolpump',
      'Rau Bus Stop', 'Mamaji Ka Dhaba', 'Rau Bypass', 'Hardiyas Hospital', 'Alpa Labour', 'Medicaps Company', 'Pigdambar',
      'Peethampur Bypass', 'Keshav Park', 'Umariya Gaon', 'A.D Bansal College of Technology', 'IIT Indore', 'EC Hospital',
      'Kishanganj', 'Indra Colony', 'Hari Phatak', 'Mahu Railway Station',
    ],
    'Vijay Nagar to Rajiv Gandhi Square': [
      'Vijay Nagar', 'Scheme 78', 'Shalini Township', 'Satya Sai Square', 'Niranjanpur', 'MR 9', 'Press Complex',
      'L.I.G', 'Industry House', 'Palasiya', 'Geeta Bhavan Square', 'ICTSL', 'Shivaji Vatika', 'G.P.O', 'Indra Pratima',
      'Navlakha Square', 'Holkar Subway', 'Bhavarkua Square', 'Vishnu Puri', 'Mata Gujari', 'Rajiv Gandhi Square'
    ],
    'Vijay Nagar to Silicon City': [
      'Vijay Nagar', 'Scheme 78', 'Shalini Township', 'Satya Sai Square', 'Niranjanpur', 'MR 9', 'Press Complex',
      'L.I.G', 'Industry House', 'Palasiya', 'Geeta Bhavan Square', 'ICTSL', 'Shivaji Vatika', 'Rajiv Gandhi Square',
      'Abhyass Udyan', 'Maa Vihar', 'Gadbadi Bridge', 'Arjun Nagar', 'Bijalpur', 'Ragendra Nagar', 'Durga Nagar',
      'Reti Mandi', 'Gamla Wali Pudiya', 'IPS Academy', 'Silicon City'
    ],
    'Vijay Nagar to Rau Bypass': [
      'Vijay Nagar', 'Scheme 78', 'Shalini Township', 'Satya Sai Square', 'Niranjanpur', 'MR 9', 'Press Complex',
      'L.I.G', 'Industry House', 'Palasiya', 'Geeta Bhavan Square', 'ICTSL', 'Shivaji Vatika', 'Rajiv Gandhi Square',
      'Abhyass Udyan', 'Maa Vihar', 'Gadbadi Bridge', 'Arjun Nagar', 'Bijalpur', 'Ragendra Nagar', 'Durga Nagar',
      'Reti Mandi', 'Gamla Wali Pudiya', 'IPS Academy', 'Silicon City', 'Jeevan Jyoti', 'Rau Petrolpump', 'Rau Bus Stop',
      'Mamaji Ka Dhaba', 'Rau Bypass'
    ],
    'Vijay Nagar to Mahu Railway Station': [
      'Vijay Nagar', 'Scheme 78', 'Shalini Township', 'Satya Sai Square', 'Niranjanpur', 'MR 9', 'Press Complex',
      'L.I.G', 'Industry House', 'Palasiya', 'Geeta Bhavan Square', 'ICTSL', 'Shivaji Vatika', 'Rajiv Gandhi Square',
      'Abhyass Udyan', 'Maa Vihar', 'Gadbadi Bridge', 'Arjun Nagar', 'Bijalpur', 'Ragendra Nagar', 'Durga Nagar',
      'Reti Mandi', 'Gamla Wali Pudiya', 'IPS Academy', 'Silicon City', 'Jeevan Jyoti', 'Rau Petrolpump', 'Rau Bus Stop',
      'Mamaji Ka Dhaba', 'Rau Bypass', 'Hardiyas Hospital', 'Alpa Labour', 'Medicaps Company', 'Pigdambar',
      'Peethampur Bypass', 'Keshav Park', 'Umariya Gaon', 'A.D Bansal College of Technology', 'IIT Indore', 'EC Hospital',
      'Kishanganj', 'Indra Colony', 'Hari Phatak', 'Mahu Railway Station'
    ],
    'Niranjanpur to Silicon City': [
      'Niranjanpur', 'Scheme 78', 'Shalini Township', 'Satya Sai Square', 'Vijay Nagar', 'MR 9', 'Press Complex',
      'L.I.G', 'Industry House', 'Palasiya', 'Geeta Bhavan Square', 'ICTSL', 'Shivaji Vatika', 'Rajiv Gandhi Square',
      'Abhyass Udyan', 'Maa Vihar', 'Gadbadi Bridge', 'Arjun Nagar', 'Bijalpur', 'Ragendra Nagar', 'Durga Nagar',
      'Reti Mandi', 'Gamla Wali Pudiya', 'IPS Academy', 'Silicon City'
    ],
    'Niranjanpur to Rau Bypass': [
      'Niranjanpur', 'Scheme 78', 'Shalini Township', 'Satya Sai Square', 'Vijay Nagar', 'MR 9', 'Press Complex',
      'L.I.G', 'Industry House', 'Palasiya', 'Geeta Bhavan Square', 'ICTSL', 'Shivaji Vatika', 'Rajiv Gandhi Square',
      'Abhyass Udyan', 'Maa Vihar', 'Gadbadi Bridge', 'Arjun Nagar', 'Bijalpur', 'Ragendra Nagar', 'Durga Nagar',
      'Reti Mandi', 'Gamla Wali Pudiya', 'IPS Academy', 'Silicon City', 'Jeevan Jyoti', 'Rau Petrolpump', 'Rau Bus Stop',
      'Mamaji Ka Dhaba', 'Rau Bypass'
    ],
    'Niranjanpur to Mahu Railway Station': [
      'Niranjanpur', 'Scheme 78', 'Shalini Township', 'Satya Sai Square', 'Vijay Nagar', 'MR 9', 'Press Complex',
      'L.I.G', 'Industry House', 'Palasiya', 'Geeta Bhavan Square', 'ICTSL', 'Shivaji Vatika', 'Rajiv Gandhi Square',
      'Abhyass Udyan', 'Maa Vihar', 'Gadbadi Bridge', 'Arjun Nagar', 'Bijalpur', 'Ragendra Nagar', 'Durga Nagar',
      'Reti Mandi', 'Gamla Wali Pudiya', 'IPS Academy', 'Silicon City', 'Jeevan Jyoti', 'Rau Petrolpump', 'Rau Bus Stop',
      'Mamaji Ka Dhaba', 'Rau Bypass', 'Hardiyas Hospital', 'Alpa Labour', 'Medicaps Company', 'Pigdambar',
      'Peethampur Bypass', 'Keshav Park', 'Umariya Gaon', 'A.D Bansal College of Technology', 'IIT Indore', 'EC Hospital',
      'Kishanganj', 'Indra Colony', 'Hari Phatak', 'Mahu Railway Station'
    ]  
  };

  const calculatePrice = (source, destination) => {
    const sourceIndex = stops.indexOf(source);
    const destinationIndex = stops.indexOf(destination);

    if (sourceIndex !== -1 && destinationIndex !== -1) {
      const travelDistance = Math.abs(destinationIndex - sourceIndex);
      if (travelDistance <= 2) return 5;
      if (travelDistance <= 9) return 10;
      if (travelDistance <= 17) return 15;
      if (travelDistance <= 33) return 20;
      if (travelDistance <= 41) return 25;
      return 30;
    }
    return 0;
  };

  const handleRouteChange = (e) => {
    const selectedRoute = e.target.value;
    setRoute(selectedRoute);
    setStops(routes[selectedRoute] || []);
    setSource('');
    setDestination('');
    setPrice(0);
  };

  const handleSourceChange = (e) => {
    setSource(e.target.value);
    if (destination) setPrice(calculatePrice(e.target.value, destination));
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
    if (source) setPrice(calculatePrice(source, e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ticket booked for ${username} from ${source} to ${destination} on ${date}. Total price: ₹${price}`);
    navigate('/payment', {
      state: {
        ticketDetails: {
          username,
          phone,
          route,
          source,
          destination,
          date,
          price,
        },
      },
    });
  };

  return (
    <div className="book-ticket-container">
      <div className="book-ticket">
        <h1>Book Your Ticket</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern="[0-9]{10}" // Validate phone number format
              title="Phone number should be 10 digits"
            />
          </div>
          <div className="form-group">
            <label>Route:</label>
            <select value={route} onChange={handleRouteChange} required>
              <option value="">Select a Route</option>
              {Object.keys(routes).map((route) => (
                <option key={route} value={route}>
                  {route}
                </option>
              ))}
            </select>
          </div>
          {stops.length > 0 && (
            <>
              <div className="form-group">
                <label>Source:</label>
                <select value={source} onChange={handleSourceChange} required>
                  <option value="">Select Source</option>
                  {stops.map((stop) => (
                    <option key={stop} value={stop}>
                      {stop}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Destination:</label>
                <select value={destination} onChange={handleDestinationChange} required>
                  <option value="">Select Destination</option>
                  {stops
                    .filter((stop) => stop !== source) 
                    .map((stop) => (
                      <option key={stop} value={stop}>
                        {stop}
                      </option>
                    ))}
                </select>
              </div>
            </>
          )}
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Total Price: ₹{price}</label>
          </div>
          <button type="submit">Book Ticket</button>
        </form>
      </div>
    </div>
  );
};

export default BookTicket;
