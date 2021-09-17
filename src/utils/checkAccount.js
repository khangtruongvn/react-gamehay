export const checkExited = (users, username) => {
  let exited = false;
  users.forEach((user) => {
    if (user.username === username) {
      exited = true;
    }
  });
  return exited;
};

export const checkLogin = (users, username, password) => {
  let userId = undefined;
  users.forEach((user) => {
    if (user.username === username && user.password === password) {
      userId = user.id;
    }
  });
  return userId;
};
