import React from "react";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function index() {
  function addNewupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return <NewMeetupForm onAddMeetup={addNewupHandler} />;
}

export default index;
