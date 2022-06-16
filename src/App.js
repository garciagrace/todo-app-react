import { useEffect, useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="min-h-screen bg-light-lightGray relative dark:bg-dark-darkBlue-100">
      <div className="h-[12.5rem] bg-cover bg-no-repeat bg-lightMobile dark:bg-darkMobile md:h-[18.75rem] md:bg-lightDesktop md:dark:bg-darkDesktop"></div>

      <div className="absolute top-16 w-full">
        <div className="w-[90vw] mx-auto md:w-[36rem]">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold uppercase text-light-lightGray tracking-[.625rem]">
              Todo
            </h1>
            <div
              className="bg-moon w-8 bg-no-repeat bg-contain cursor-pointer dark:bg-sun"
              onClick={toggleTheme}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
