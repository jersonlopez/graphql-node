# graphql-node
project in nodejs, graphql and prisma that allow search and save hackernews

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ npm install -g prisma
$ npm install -g yarn
$ cd graphql-node/
$ yarn
$ yarn global add graphql-cli
$ node src/index.js
```

Now, open a new terminal tab (or window) and run the following command:

```sh
$ graphql playground
```

In the browser you can try the following queries:

```json
query{
  info
}
```
```
query {
  feed {
    count
    links {
      id
      description
      url
    }
  }
}
```

For more information and to see the complete tutorial visit the following [link](https://www.howtographql.com/).