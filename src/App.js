import { useEffect, useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="min-h-screen bg-light-lightGray dark:bg-dark-darkBlue-100">
      <div className="h-[12.5rem] bg-cover bg-no-repeat bg-lightMobile dark:bg-darkMobile md:h-[18.75rem] md:bg-lightDesktop md:dark:bg-darkDesktop"></div>
    </div>
  );
};

export default App;
