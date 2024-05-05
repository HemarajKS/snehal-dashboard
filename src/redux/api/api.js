import { setData } from "../slice/todoSlice";

export const fetchData = (postData) => async (dispatch) => {
  const baseUrl = process.env.REACT_APP_API_URL;

  try {
    const response = await fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    const data = await response.json();
    dispatch(setData(data));
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
