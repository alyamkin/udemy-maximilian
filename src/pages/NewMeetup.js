import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

const NewMeetupPage = () => {
  const history = useHistory();

  const addMeetupHandler = async (newMeetup) => {
    try {
    } catch (err) {}
    const response = await fetch(
      `https://react-summary-dd755-default-rtdb.firebaseio.com/meetups.json`,
      {
        method: "POST",
        body: JSON.stringify(newMeetup),
        headers: { "Content-type": "application/json" },
      }
    );

    history.replace("/");
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
