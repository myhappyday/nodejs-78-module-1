const fs = require("fs/promises");
// Або варіант:
// const fs = require("fs").promises;

// const readFile = async () => {
//   // Другий (кращий) варіант
//   const text = await fs.readFile("./files/file.txt", "utf-8");
//   console.log("text: ", text);

//   // Перший варіант
//   //   const buffer = await fs.readFile("./files/file.txt");
//   //   console.log("buffer: ", buffer);
//   //   const text = buffer.toString();
//   //   console.log("text: ", text);

//   //   const text = buffer.toString();
//   //   console.log(text);
// };

// readFile();

//===================================================
// const addText = async () => {
//   const result = await fs.appendFile(
//     "./files/file.txt",
//     "\nТак говорил Заратустра" // \n - з нового рядка
//   );
//   console.log("result: ", result); // fs.appendFile повертає undefined та додає текст до файлу
//   // fs.appendFile повертає undefined та додає текст до файлу
//   //   await fs.appendFile("./files/file2.txt", "\nТак говорил Заратустра");
// };

// addText();

//===================================================
// const replaceText = async () => {
//   const result = await fs.writeFile("./files/file3.txt", "Ницше");
//   console.log(result);
// };

// replaceText();

//===================================================
// fs.readFile("./files/file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

//===================================================
// const fs = require("fs/promises");

// const fileOperation = async () => {
//   const data = await fs.readFile("./files/file.txt");
//   console.log("data: ", data);
// };

// fileOperation();

//===================================================
// const fs = require("fs/promises");

// fs.readFile("./files/file.txt")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

//===================================================
// const fs = require("fs");

// fs.readFile("./files/file.txt", (error, data) => {
//   console.log(error);
//   console.log(data);
// });
