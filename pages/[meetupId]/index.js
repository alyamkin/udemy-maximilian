import { Fragment } from "react";
import Head from "next/head";

import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  const { image, title, address, description } = props.meetupData;
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <MeetupDetail
        image={image}
        title={title}
        address={address}
        description={description}
      />
    </Fragment>
  );
};

const getMongoDbCollection = async (dbName, collectionName) => {
  const client = await MongoClient.connect();
  const db = client.db();
  const collection = db.collection(collectionName);

  return { collection, client };
};

const fetchMeetups = async () => {
  const { collection: meetupsCollection, client } = await getMongoDbCollection(
    "meetups",
    "meetups"
  );
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return meetups;
};

const fetchMeetupById = async (meetupId) => {
  const { collection: meetupsCollection, client } = await getMongoDbCollection(
    "meetups",
    "meetups"
  );
  const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
  client.close();

  return meetup;
};

export const getStaticPaths = async () => {
  const meetups = await fetchMeetups();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
    // paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  const meetup = await fetchMeetupById(meetupId);
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      },
    },
  };
};

export default MeetupDetails;
