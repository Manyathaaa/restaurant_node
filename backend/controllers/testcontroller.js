const testusercontroller = (req, res) => {
  try {
    res.status(200).send({
      //res.status(200) sets the HTTP status code to 200 (OK)
      //status is mainly used to indicate the success or failure of the request
      success: true,
      message: "test user data API",
    });
  } catch (error) {
    console.log("error in API", error);
  }
};

export default testusercontroller; // export the test user controller so that it can be used in the router
