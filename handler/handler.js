const handler = {};

handler.sampleHandler = (requset, callback) => {
  callback(200, {
    name: "jso",
    age: 4,
  });
  console.log("this is sample handler");
};

// end of all handler
handler.notFoundHandler = (request, callback) => {
  callback(404, { message: "page not found" });
  console.log("not found");
};

module.exports = handler;
