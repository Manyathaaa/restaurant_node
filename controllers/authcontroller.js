import userModel from "../models/users.js";
import bcrypt from "bcryptjs"; // bcryptjs is a library to hash passwords
// bcrypt is used to hash passwords before storing them in the database
import JWT from "jsonwebtoken"; // JWT is used to create and verify JSON Web Tokens, which are used for authentication and authorization

export const registerController = async (req, res) => {
  try {
    const { username, email, phone, password, address, answer } = req.body;
    if (!username || !email || !phone || !password || !address || !answer) {
      return res.status(400).send({
        success: false,
        message: "fill all the requirements",
      });
    }

    //check existing
    const existing = await userModel.findOne({ email });
    if (existing)
      return res.status(200).send({
        success: true,
        message: "email already registered please login",
      });

    var salt = bcrypt.genSaltSync(10); // generate salt
    //salt is a random string that is added to the password before hashing it
    // it is used to make the password more secure
    //It is commonly used to securely store passwords, so even if someone gets access to the database, they cannot see the actual passwords.
    const hashedPassword = await bcrypt.hash(password, salt); // salt is used encryption of data

    const user = await userModel.create({
      name: username,
      email,
      address,
      phone,
      password: hashedPassword,
      answer,
    });

    //check user password | compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(201).send({
        success: false,
        message: "password doesnt match",
      });
    }
    res.status(201).send({
      success: true,
      message: "successfully registered",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "something went wrong",
      error,
    });
  }
};

//login
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invalid password",
      });
    }

    // Generate JWT token
    const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    user.password = undefined;
    res.status(200).send({
      success: true,
      message: "Successful login",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};
