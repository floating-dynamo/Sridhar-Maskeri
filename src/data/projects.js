const projects = [
  {
    id: 1,
    name: "VoterQ",
    desc: `Created an android app for the Government of Goa. Dealth mostly with the Front-end
    using React-Native. The app was developed in the view of the State Election. The
    following features were implemented which could tell : A voter how many people were
    currently in the queue to vote in his/her ward and the percentage of people that have
    voted till now. Django was used for the Back-end and was deployed using AWS`,
    tags: ["All", "App Development", "Front-End"],
    img: "https://picsum.photos/200/200",
  },
  {
    id: 2,
    name: "Drink-It",
    desc: `Designed and Implemented an E-commerce website that sells juices.
    Used ReactJs.\nKept track of the cart items and wishlist using context hook in ReactJs.`,
    tags: ["All", "Web Development", "Front-End"],
    img: "https://picsum.photos/200/200",
    website: "https://floating-dynamo.github.io/drink-it/",
  },
  {
    id: 3,
    name: "Task Manager REST-API",
    desc: `Created an REST API using nodejs.
    Created a user model and a tasks model.
    Created tasks model such that only the user that created the task can perform CRUD on it.
    Also implemented custom auth middleware, jwt token auth
    Tested the REST-API using JEST.
    `,
    tags: ["All", "Web Development", "App Development", "Back-End"],
    img: "https://picsum.photos/200/200",
  },
  {
    id: 4,
    name: "Keeper",
    desc: `Created a simple google keep clone(Keeper).
    Used React JS to create the web app.
    Made use of props,hooks,states etc.
    `,
    tags: ["All", "Web Development", "Front-End"],
    img: "https://picsum.photos/200/200",
    website: "https://o96oq.csb.app/",
  },
  {
    id: 5,
    name: "Music Player",
    desc: `Created a responsive Music Player web App using HTML, CSS and JS.
    Added a responsive volume bar and a song duration bar so that the user can reduce the
    volume or change the duration of the song respectively.
    
    `,
    tags: ["All", "Web Development", "Front-End"],
    img: "https://picsum.photos/200/200",
    website: "https://floating-dynamo.github.io/Music-Player/",
  },
];

export default projects;
