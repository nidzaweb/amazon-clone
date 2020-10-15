import React, { useState } from 'react'
import uuid from 'react-uuid';
import './products.css'
import Item from './Item'

function Products() {

    const [products, setProducts] = useState([
        {
            id: uuid(),
            description: 'AmazonBasics High-Speed HDMI Cable, 6 Feet',
            cost: 6.99,
            rating: 4,
            img: 'https://m.media-amazon.com/images/I/61pBvlYVPxL._AC_UY218_.jpg'
        },
        {
            id: uuid(),
            description: 'Samsung Electronics EVO Select 256GB microSDXC UHS-I U3 100MB/s Full HD & 4K UHD Memory Card with Adapter (MB-ME256HA)',
            cost: 34.99,
            rating: 5,
            img: 'https://m.media-amazon.com/images/I/81Cmetw9jTL._AC_UY218_.jpg'
        }
    ]);

    const [topsellers, setTopsellers] = useState([
        {
            id: uuid(),
            description: 'AmazonBasics 60-Inch Lightweight Tripod with Bag',
            cost: 25.99,
            rating: 4,
            img: 'https://m.media-amazon.com/images/I/61vjUCzQCaL._AC_UY218_.jpg'
        },
        {
            id: uuid(),
            description: 'VANKYO StayTrue Projector Screen, 120 Inch Projection Screen 4K HD, 16:9, Foldable Wrinkle-Free Movies Screen(1.1 GAIN, 160°Viewing Cone) for Home Theater, Support Front & Rear Projection',
            cost: 35.09,
            rating: 4,
            img: 'https://m.media-amazon.com/images/I/71J9Uv7eirL._AC_UY218_.jpg'
        },
        {
            id: uuid(),
            description: 'Mounting Kit for Wyze Cam (1 pcs White) - Outdoor Case for Wyze Camera & v2 1080p Full HD w/ Screw Mounts - Wyze Waterproof Cover with Wall Mount Bracket - Solid Housing for Wyze Cams by SULLY',
            cost: 9.99,
            rating: 5,
            img: 'https://images-na.ssl-images-amazon.com/images/I/41d14GUpq1L._AC_UL100_SR100,100_.jpg'
        }
    ]);

    const [monitor, setMonitor] = useState([
        {
            id: uuid(),
            description: 'LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)',
            cost: 549.99,
            rating: 4,
            img: 'https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_UY218_.jpg'
        }
    ]);



    return (
        <section className="products">
            <div className="products__grid two">
                {products.map(item => (
                    <Item key={item.id} spec={item} />
                ))}
            </div>
            <div className="products__grid three">
                {topsellers.map(item => (
                    <Item key={item.id} spec={item} />
                ))}
            </div>
            <div className="products__grid one">
                {monitor.map(item => (
                    <Item key={item.id} spec={item} />
                ))}
            </div>
        </section>
    )
}

export default Products
