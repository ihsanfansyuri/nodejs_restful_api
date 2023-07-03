import {
  loginUserValidation,
  registerUserValidation,
} from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

const register = async (request) => {
  // user validation
  const user = validate(registerUserValidation, request);

  // checking if user already exists
  const countUser = await prismaClient.user.count({
    where: {
      username: user.username,
    },
  });

  // return error if user already exists
  if (countUser === 1) {
    throw new ResponseError(400, "Username already exists");
  }

  // password encryption
  user.password = await bcrypt.hash(user.password, 10);

  // create new user
  const result = await prismaClient.user.create({
    data: user,
    select: {
      username: true,
      name: true,
    },
  });

  return result;
};

const login = async (request) => {
  const loginRequest = validate(loginUserValidation, request);

  const user = await prismaClient.user.findUnique({
    where: {
      username: loginRequest.username,
    },
    select: {
      username: true,
      password: true,
    },
  });

  if (!user) {
    throw new ResponseError(401, "username or password wrong!");
  }

  const isPasswordValid = await bcrypt.compare(
    loginRequest.password,
    user.password
  );

  if (!isPasswordValid) {
    throw new ResponseError(401, "username or password wrong!");
  }

  const token = uuid().toString();
  return prismaClient.user.update({
    data: {
      token: token,
    },
    where: {
      username: user.username,
    },
    select: {
      token: true,
    },
  });
};

export default { register, login };
