import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

const AllMeetupsPage = () => {
  const [meetups, setMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://react-summary-dd755-default-rtdb.firebaseio.com/meetups.json`
      );
      const loadedData = await response.json();

      const meetupsLoaded = [];
      if (loadedData) {
        for (const [key, value] of Object.entries(loadedData)) {
          meetupsLoaded.push({
            id: key,
            ...value,
          });
        }
      }

      setMeetups(meetupsLoaded);
      setIsLoading(false);
    };

    loadData();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
};

export default AllMeetupsPage;
