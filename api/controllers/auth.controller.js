import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  //Hash Password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);

  //Add User to Database
  const newUser = await prisma.user.create({
    data: { username, email, password: hashedPassword },
  });
  console.log(newUser);
};

export const login = (req, res) => {
  //Database operations
};

export const logout = (req, res) => {
  //Database operations
};
