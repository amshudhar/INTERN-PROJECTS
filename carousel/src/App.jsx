import React from 'react';

import ImageCarousel from './components/img.jsx';

const App = () => {
  const sampleImages = [
    'https://picsum.photos/600/300?random=1',
    'https://picsum.photos/600/300?random=2',
    'https://picsum.photos/600/300?random=3',
  ];

  return (
    <div>
      <ImageCarousel images={sampleImages} />
    </div>
  )
}

export default App;
