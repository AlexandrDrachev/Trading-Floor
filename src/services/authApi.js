import { fakeUsers } from '../fake-db/fakeUsers';

export const authUser = (userLoginObj) => {

  const { userName, password } = userLoginObj;

  return new Promise((resolve) => {
    setTimeout(() => {
      const user = fakeUsers.find((user) => user.userName.toString() === userName.toString() &&
        user.password.toString() === password.toString());
      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
    }, 700);
  })
    .then((res) => {
      return { res };
    })
    .catch((error) => {
      return { error };
    });
};

export const registerNewUser = (userRegisterObj) => {

  const { userName, password } = userRegisterObj;

  return new Promise((resolve) => {
    setTimeout(() => {
      const newUser = {
        userName,
        userRole: 'user',
        password,
      };
      fakeUsers.push(newUser);
      resolve(fakeUsers);
    }, 700);
  })
    .then((res) => {
      const user = res.find((item) => item.userName === userName && item.password === password);
      return { res: user };
    })
    .catch((error) => {
      return { error };
    });
};
