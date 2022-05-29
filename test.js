/*    tinyurl-ga.js test   */
/*    (c) 2022 Renorari    */
/*         GPL-3.0         */

// 本番で実行する場合は「./index」を「tinyurl-ga.js」に置き換えて使用してください
const { create } = require("./index");

// Asyncで実行
(async () => {
    console.log("Asyncで実行: ");
    console.log(
        await create("https://renorari.net/")
    );
})();

// Thenで実行
create("https://blog.renorari.net/")
    .then((data) => {
        console.log("Thenで実行: ");
        console.log(data);
    });