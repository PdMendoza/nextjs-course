import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "First meet",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5",
    description: "First meetup",
  },
  {
    id: "m2",
    title: "Second meet",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10",
    description: "Second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req
//   const res = context.res
//   //fetch data
//   return {
//     props: {
//       meetups: DUMMY_DATA,
//     }
//   };
// }

export async function getStaticProps() {
  //fetch data
  return {
    props: {
      meetups: DUMMY_DATA,
    },
    revalidate: 1,
  };
}

export default HomePage;
