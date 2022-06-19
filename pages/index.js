import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const fetchMeetups = async () => {
  const client = await MongoClient.connect();

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  debugger;

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return meetups;
};

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        ></meta>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const meetups = await fetchMeetups();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
};

export default HomePage;
