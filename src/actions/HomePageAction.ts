export const getHeaderData = async (): Promise<any> => {
  try {
    const response = await fetch(`${process.env.API_URL + "/header"}`);
    const data = await response.json();
    return data[0];
  } catch (e) {
    console.error("Error fetching header data:", e);
    throw e; // Re-throw the error to handle it in the component
  }
};

export const getFeatureData = async () => {
  try {
    const response = await fetch(`${process.env.API_URL + "/feature"}`);
    const data = await response.json();
    return data[0];
  } catch (e) {
    console.error("Error fetching header data:", e);
    throw e;
  }
};
