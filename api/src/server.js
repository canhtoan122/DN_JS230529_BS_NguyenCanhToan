"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const tasks_routes_1 = __importDefault(require("./routers/tasks.routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 8000;
dotenv_1.default.config();
app.use((0, cors_1.default)());
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: false }));
// parse application/json
app.use(body_parser_1.default.json());
app.use("/", tasks_routes_1.default);
// app.get("", (req, res) =>{
//     res.send("Hello World");
// })
app.listen(port, () => {
    console.log(`Đang gọi đến server http://localhost:${port}`);
});
