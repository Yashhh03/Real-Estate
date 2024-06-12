import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    //Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    //Add User to Database
    const newUser = await prisma.user.create({
      data: { username, email, password: hashedPassword },
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    //Check if User already exists
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      return res.status(400).json({ message: "Invalid Username or Password" });
    }
    //Check if Password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid Username or Password" });
    }
    //Generate JWT Token
    //Send JWT Token to Client
    const age = 1000 * 60 * 60 * 24 * 7;
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: age,
    });
    res
      .cookie("token", token, { httpOnly: true, maxAge: age })
      .status(200)
      .json({ message: "Login successful" });
    console.log(JSON.stringify(res));
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const logout = (req, res) => {
  //Database operations
  res.clearCookie("token").status(200).json({ message: "Logout successful" });
  console.log(JSON.stringify(res));
};
