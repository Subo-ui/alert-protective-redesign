import React from 'react';

const LocationMap: React.FC = () => {
    const chicagoMapSrc = "https://maps.google.com/maps?q=Alert%20Protective,%20Inc.,%203833%20N%20Cicero%20Ave,%20Chicago,%20IL%2060641&t=&z=15&ie=UTF8&iwloc=&output=embed";
    const ferndaleMapSrc = "https://maps.google.com/maps?q=1840%20Hilton%20Rd,%20Ferndale,%20MI%2048220&t=&z=15&ie=UTF8&iwloc=&output=embed";

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full h-96">
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src={chicagoMapSrc}
                    title="Alert Protective Chicago Location"
                    aria-label="Alert Protective Chicago Location"
                ></iframe>
            </div>
            <div className="w-full h-96">
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src={ferndaleMapSrc}
                    title="Alert Protective Ferndale Location"
                    aria-label="Alert Protective Ferndale Location"
                ></iframe>
            </div>
        </div>
    );
}

export default LocationMap; 