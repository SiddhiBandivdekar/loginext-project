import axios from "axios";

const apiURL = "https://demo3500358.mockable.io";

const api = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUsers = () => {
  return api.get("/users").then((response) => {
    return response.data.map((user) => {
      if (!user) {
        return {};
      }
      console.log(user);
      const newUser = {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode,
        companyName: user.company.name,
      };
      console.log(newUser);
      return newUser;
    });
  });
};
