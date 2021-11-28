//Client

import { genModule } from "./combine/combine.js";

let server = await genModule(location.href + "api/"); // Create Proxy Object

document.getElementById("btn").addEventListener("click", async () => {
  await server.receiveData(document.getElementById("input").value);
});
