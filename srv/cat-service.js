module.exports = (srv) => {
  // Reply mock data for Users and Circles...
  srv.on("READ", "Interests", () => [
    {
      ID: 1,
      user: 201,
      interest: "Destroy the world!!!",
    },
    {
      ID: 2,
      user: 202,
      interest: "Destroy the world!!!",
    },
  ]);

  srv.on("READ", "Users", () => [
    {
      ID: 201,
      name: "Alberto",
      surname: "Delgado",
      email: "alberto.delgado@sap.com",
      birth: "1991-03-20",
      interests: { ID: 1 },
      circles: 301,
      public: true,
      country: "Spain",
    },
    {
      ID: 202,
      name: "Sergio",
      surname: "Delgado",
      email: "sergio.delgado@sap.com",
      birth: "1990-02-02",
      interests: "Monkey business",
      circles: 301,
      public: false,
      country: "Spain",
    },
  ]);

  srv.on("READ", "Tasks", () => [
    {
      ID: 11,
      circle_ID: 301,
      description: "Run, play",
      dueDate: "2020-10-16",
      creationDate: "2020-05-16",
      completed: false,
    },
    {
      ID: 12,
      circle_ID: 302,
      description: "Shout!!!",
      dueDate: "2020-10-16",
      creationDate: "2020-05-16",
      completed: true,
    },
  ]);

  // Reply mock data for Authors...
  srv.on("READ", "Circles", () => [
    {
      ID: 301,
      participants: [201, 202],
      tasks: 11,
      creationDate: "2020-05-16",
      endDate: "2020-05-16",
    },
    {
      ID: 302,
      participants: [203],
      tasks: 12,
      creationDate: "2020-05-16",
      endDate: "2020-05-16",
    },
  ]);
};
