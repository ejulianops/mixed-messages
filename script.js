import { messages } from "./data.mjs";

for (const theme in messages) {

    // number of items in each theme
    const items = messages[theme].length;

    // random index to theme
    const index = Math.floor(Math.random() * items);

    console.log(messages[theme][index], '\n');
}
