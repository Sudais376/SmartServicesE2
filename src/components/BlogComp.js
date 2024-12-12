import React from 'react';
import { Link } from 'react-router-dom';

const BlogComp = ({ image, alt, title, description, link }) => {
    return (
        <div data-aos ="fade-up" className="bg-white shadow-md rounded-lg overflow-hidden">
            <img data-aos ="fade-up" src={image} alt={alt} className="w-full h-48 object-cover" />
            <div data-aos ="fade-up" className="p-4">
                <h3 data-aos ="fade-up" className="text-xl font-bold mb-2">{title}</h3>
                <p data-aos ="fade-up" className="mb-4">{description}</p>
                <Link to={link} data-aos ="fade-up" className="text-blue-600 hover:underline">
                    Read More &rarr;
                </Link>
            </div>
        </div>
    );
};

export default BlogComp;
