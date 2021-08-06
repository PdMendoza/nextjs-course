import React from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const DUMMY_DATA = {
  id: "m1",
  title: "First meet",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  address: "Some address 5",
  description: "First meetup",
};

function MeetupDetails() {
  return <MeetupDetail props={DUMMY_DATA} />;
}

export async function getStaticPaths() {
  //fetch data
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  //fetch data
  return {
    props: {
      meetups: DUMMY_DATA,
    },
    revalidate: 1,
  };
}

export default MeetupDetails;
