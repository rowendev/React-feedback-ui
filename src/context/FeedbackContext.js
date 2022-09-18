import { createContext, useState, useEffect } from "react";
import easyDB from "easydb-io";
import { v4 as uuid } from "uuid";

const FeedbackContext = createContext();

const db = easyDB({
  database: process.env.REACT_APP_EASYDB_DB,
  token: process.env.REACT_APP_EASYDB_TOKEN,
});

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  // load the data
  useEffect(() => {
    fetchFeedback();
  }, []);

  // fetch data from json-server
  const fetchFeedback = async () => {
    // const response = await fetch(`/feedback?_sort=id&_order=desc`);
    // const data = await response.json();
    // setFeedback(data);

    // EASYDB
    const data = await db.list();
    setFeedback(Object.values(data));
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  };

  const addFeedback = async (newFeedback) => {
    // const response = await fetch(`/feedback`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newFeedback),
    // });

    // const data = await response.json();

    //EASYDB
    const id = uuid();
    const feedbackToAdd = { ...newFeedback, id };
    await db.put(id, feedbackToAdd);
    setFeedback([...feedback, feedbackToAdd]);
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure?")) {
      //   await fetch(`/feedback/${id}`, {
      //     method: "DELETE",
      //   });

      //EASYDB
      await db.delete(id);
      // 留下id不同的, filter => (過濾條件)
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        isLoading,
        deleteFeedback,
        addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
