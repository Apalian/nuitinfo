import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import './MainPage.css'; // Assuming you have a CSS file for additional styles

const Navbar = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isReversing, setIsReversing] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/boatPage' && selectedItem === 'boat') {
            setTimeout(() => {
                setIsReversing(true);
            }, 300); // Start reversing animation after navigating
        }
    }, [location, selectedItem]);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        if (item === 'boat') {
            setTimeout(() => {
                navigate('/boatPage');
            }, 300); // Delay navigation to allow zoom animation
        }
    };

    return (
        <div className="navbar">
            {['boat', 'raft', 'lifebuoy'].map((item) => (
                <motion.div
                    key={item}
                    className={`navbar-item ${item}`}
                    onClick={() => handleItemClick(item)}
                    animate={{ scale: selectedItem === item ? (isReversing ? 1 : 2) : 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <img src="/src/assets/boat.png" alt={item} className="navbar-icon" />
                </motion.div>
            ))}
        </div>
    );
};

export default Navbar;

// CSS (Navbar.css)
/*
.navbar {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

.navbar-item {
  cursor: pointer;
  transition: transform 0.3s;
}
*/
