import JWT from "jsonwebtoken";

const authmiddleware = async (req, res, next) => {
  try {
    // Get token from the Authorization header
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
      return res.status(401).send({
        success: false,
        message: "Token is missing",
      });
    }

    // Verify the token
    JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Unauthorized user",
        });
      } else {
        req.user = decoded; // Attach decoded ID to the request body
        next(); // Proceed to the next middleware or route handler
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in auth middleware",
      error,
    });
  }
};

export default authmiddleware; // Use ES Module syntax
