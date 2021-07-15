import PaytmChecksum from "../paytm/PaytmChecksum.js";

export const addPaymentGateway = async (request, response) => {
  try {
    const user = await User.findOne({
      username: request.body.username,
      password: request.body.password,
    });

    if (user) {
      return response
        .status(200)
        .json(`${request.body.username} login successful`);
    } else {
      return response
        .status(404)
        .json(`${request.body.username} invalid login`);
    }
  } catch (error) {
    console.log(error.message);
  }
};
