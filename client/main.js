"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { program } = require("commander");
program.command("create")
    .description("create an issue")
    .argument("[title]", "issue title")
    .argument("[description]", "issue description")
    .action((title, description) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("http://localhost:8080/issues", {
        mode: "cors",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            description
        })
    });
    const json = yield response.json();
    console.log(json);
}));
program.command("read")
    .description("read an issue")
    .argument("<id>", "issue id")
    .action((id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`http://localhost:8080/issues/${id}`, {
        mode: "cors",
        method: "GET"
    });
    const json = yield response.json();
    console.log(json);
}));
program.command("update")
    .description("update an issue")
    .argument("<id>", "issue id")
    .argument("[title]", "issue title")
    .argument("[description]", "issue description")
    .action((id, title, description) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`http://localhost:8080/issues/${id}`, {
        mode: "cors",
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            description
        })
    });
    const json = yield response.json();
    console.log(json);
}));
program.command("delete")
    .description("delete an issue")
    .argument("<id>", "issue id")
    .action((id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`http://localhost:8080/issues/${id}`, {
        mode: "cors",
        method: "DELETE"
    });
    const json = yield response.json();
    console.log(json);
}));
program.parse();
