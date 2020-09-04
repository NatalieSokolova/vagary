import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import classNames from 'classnames';
import ExploreMap from "./explore/ExploreMap";
import Explore from "./explore/Explore";
import Learn from "./learn/Learn";
import "./LayoutMain.scss";

export default function WelcomeToCity(props) {
  console.log("WELCOME TO CITY PROPS: ", props);

  const params = [
    {
      name: props.city,
      coordinates: props.coordinates,
      language: props.language,
      cityId: props.city_id,
      userEmail: props.userEmail,
      userId: props.userId,
      userToken: props.userToken,
    },
  ];

  const [learn, setLearn] = useState(false);
  const [explore, setExplore] = useState(false);

  const goToLearn = () => {
    // console.log(city)
    setLearn(params);
  };
  const goToExplore = () => {
    // console.log(city)
    setExplore(params);
  };

  if (learn) {
    return (
      <Redirect
        push
        to={{
          pathname: "/learn",
          state: { learn },
        }}
      />
    );
  }

  if (explore) {
    return (
      <Redirect
        push
        to={{
          pathname: "/explore",
          state: { explore },
        }}
      />
    );
  }

  return (
    <div>
      {/* Placeholder for now - city background + buttons to redirect to Learn + Explore */}
      <button type="button" onClick={goToLearn}>
        Go to Learn
      </button>
      <button type="button" onClick={goToExplore}>
        Go to Explore
      </button>
      {/*<Explore city={city} coordinates={coordinates}/>*/}
      {/* <Explore city={city} coordinates={coordinates} city_id={city_id}/> */}
    </div>
  );
}

// import { useHistory } from "react-router-dom";

// function HomeButton() {
//   const history = useHistory();

//   function handleClick() {
//     history.push("/home");
//   }

//   return (
//     <button type="button" onClick={handleClick}>
//       Go home
//     </button>
//   );
// }

// but you can use a location instead
// const location = {
//   pathname: '/somewhere',
//   state: { fromDashboard: true }
// }

// <Link to={location}/>
// <Redirect to={location}/>
// history.push(location)
// history.replace(location)
