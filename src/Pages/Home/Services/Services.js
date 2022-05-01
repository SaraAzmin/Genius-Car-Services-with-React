import React, { useEffect, useState } from 'react';
import repair1 from '../../../images/car repair1.png';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://blooming-scrubland-04859.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className='container' id='services'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Our Services</h1>
                <div className="services-container">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;