const books = require("./books");
// console.log("books: ", books);
// console.log("__dirname:", __dirname);

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allBooks = await books.getAll();
      return console.log(allBooks);
    case "getById":
      const oneBook = await books.getById(id);
      return console.log(oneBook);
    case "add":
      const newBook = await books.add({ title, author });
      return console.log(newBook);
    case "updateById":
      const updateBook = await books.updateById(id, { title, author });
      return console.log(updateBook);
    case "deleteById":
      const deleteBook = await books.deleteById(id);
      return console.log(deleteBook);
  }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "u9kgwNWGi3uUUwh0b8V49" });
// invokeAction({ action: "add", title: "Worm", author: "John C. McCrae" });
// invokeAction({
//   action: "updateById",
//   id: "WUGmIez8Hn-69amwKvYaw",
//   title: "Ward",
//   author: "John C. McCrae",
// });
// invokeAction({ action: "deleteById", id: "WUGmIez8Hn-69amwKvYaw" });
