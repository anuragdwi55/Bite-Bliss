import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to Bite Bliss, your go-to destination for a culinary experience that goes beyond just satisfying hunger. We aim to bring joy and comfort through every bite.
      </p>
      <p className="mb-4">
        Bite Bliss was founded with a passion for combining exquisite flavors with modern convenience. We pride ourselves on using the freshest ingredients and time-honored recipes to deliver meals that are not only delicious but also nourishing.
      </p>
      <p className="mb-4">
        Our mission is to make gourmet food accessible to everyone, right at their doorstep. At Bite Bliss, we believe that food is an experience to be cherished, and we strive to create memorable moments with each delivery.
      </p>
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">Developer Information</h2>
        <p className="mb-2">This site is developed and maintained by Anurag Dwivedi.</p>
        <p>
          GitHub Profile: {' '}
          <a 
            href="https://github.com/anuragdwi55" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            https://github.com/anuragdwi55
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
