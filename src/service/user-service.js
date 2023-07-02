import { registerUserValidation } from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import bcrypt from "bcrypt";

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
      password: true,
    },
  });

  return result;
};

export default { register };
