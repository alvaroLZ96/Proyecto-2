export const getData = async (param) => {
    try {
      const data = await fetch(`https://for-three-server.onrender.com/${param}`);
      const dataJSON = await data.json();
      return dataJSON;
    } catch (error) {
      console.log("Error:", error);
    }
  };
  