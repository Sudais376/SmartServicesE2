import React, {useEffect} from 'react';

const BlogPost2 = () => {

    useEffect (() => {
        window.scrollTo(0,0);
      }, []);

    return (
        <div className="bg-gray-50 min-h-screen p-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-4">Concrete Driveway Maintenance: Tips for Longevity</h1>
                <p className="mb-4">
                    Maintaining a concrete driveway in Lubbock is essential to withstand weather conditions and ensure longevity. Proper care can help prevent cracks and discoloration.
                </p>
                <p>
                    <strong>Here are some tips:</strong>
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Seal your driveway every 2–3 years</li>
                    <li>Clean stains promptly to avoid permanent marks</li>
                    <li>Avoid using de-icing chemicals in winter</li>
                    <li>Fill cracks early to prevent them from spreading</li>
                    <li>Use a pressure washer for deep cleaning</li>
                </ul>
                <p>
                    Regular maintenance not only keeps your driveway looking great but also extends its life. For expert advice and professional maintenance services in Lubbock, contact SmartServicesE.
                </p>
            </div>
        </div>
    );
};

export default BlogPost2;
