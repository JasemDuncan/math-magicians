import React from 'react';
import './Home.css';

const Home = () => {
  const homeData = {
    title: 'Home',
    subHeading: 'Welcome!',
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus congue
          velit, ut bibendum mauris cursus a.
          Integer risus nisl, iaculis vel sodales sed, sollicitudin scelerisque magna.
          Phasellus eu volutpat justo, in placerat purus. Suspendisse et leo quis
          ligula tincidunt sollicitudin. Quisque pulvinar massa pharetra est semper g
          ravida. Vestibulum turpis nulla, fringilla quis lacinia non, venenatis
          a massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit
          amet tincidunt est.
          Nullam et malesuada ipsum, ac elementum metus. Aenean fermentum porttitor
          quam volutpat gravida. Etiam sed libero a lacus dignissim convallis. Donec
          facilisis nibh id velit egestas posuere. In efficitur aliquet tincidunt.
          Sed ut posuere eros, vel dictum lectus. Mauris nec lobortis lectus. Phasellus
          tortor turpis, pretium sit amet iaculis a, cursus et turpis.

        </p>
        <p>
          Phasellus posuere eros vel nulla lacinia, eu sodales orci faucibus.
          Etiam vehicula, velit maximus tempus ultrices,
          massa ipsum fermentum odio, mattis consequat lectus odio vel nulla.
          Mauris egestas tincidunt lacus dapibus luctus.
          Cras lobortis malesuada dui, quis lacinia est efficitur non. Donec sit
          amet velit sit amet odio dapibus ultrices. Nunc condimentum
          ut arcu auctor tincidunt. Nam eu enim venenatis, fringilla augue vitae,
          sagittis ante. Sed et eleifend nunc. Quisque a
          arcu in lacus pharetra viverra ac vitae lectus. Nam aliquam, turpis sit
          amet placerat ullamcorper, arcu dolor convallis dui, ut mollis lorem mauris eget
          lorem. Maecenas ligula ligula, imperdiet sit amet laoreet sollicitudin,
          tempor sed lectus. Phasellus nec maximus elit, sed dictum erat.
        </p>
      </>
    ),
  };

  const Page = () => {
    const { title, subHeading, description } = homeData;
    return (
      <>
        <div className="content">
          <h1>{title}</h1>
          <h2>{subHeading}</h2>
          <div className="parragraph">{description}</div>
        </div>
      </>
    );
  };
  return (
    <Page />
  );
};

export default Home;
