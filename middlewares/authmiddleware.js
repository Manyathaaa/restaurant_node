import JWT from "jsonwebtoken";

const authmiddleware = async (req, res, next) => {
  try {
    // Get token from the Authorization header
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).send({
        success: false,
        message: "Authorization header is missing",
      });
    }

    const token = authHeader.split(" ")[1]; // Extract the token
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
          message: "Invalid token",
        });
      }
      req.user = decoded; // Attach the decoded user info to the request object
      next(); // Call the next middleware or route handler
    });
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export default authmiddleware; // Add default export
