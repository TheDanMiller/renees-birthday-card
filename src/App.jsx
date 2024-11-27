import Header from './Header';
import PhotoCard from './Photocard';
import { wishes } from './assets/wishes';
import Footer from './Footer';

import bonus1 from './assets/images/bonus/bonus1.jpeg'
import bonus2 from './assets/images/bonus/bonus2.jpeg'
import bonus3 from './assets/images/bonus/bonus3.jpeg'
import bonus4 from './assets/images/bonus/bonus4.jpeg'
import bonus5 from './assets/images/bonus/bonus5.jpeg'
import bonus6 from './assets/images/bonus/bonus6.jpeg'
import bonus7 from './assets/images/bonus/bonus7.jpeg'

const App = () => {
  const bonusImages = [
    bonus1, bonus2, bonus3, bonus4, bonus5, bonus6, bonus7
  ]
  return (
    <div>
      <Header />
      <main style={{
          padding: '20px',
          marginTop: '64px', // Adjust for the header height
        }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap', // Allow wrapping to the next row
            justifyContent: 'center', // Center the cards
            gap: '20px', // Add space between cards
          }}
        >
          {wishes.map((wish, index) => (
            <PhotoCard
              key={index}
              photo={wish.img}
              name={wish.from}
              greeting={wish.message}
              memory={wish.memory}
            />
          ))}
        </div>
      </main>
      <Footer images={bonusImages} />
    </div>
  );
};

export default App;
