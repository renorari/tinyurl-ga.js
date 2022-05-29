# tinyurl-ga.js

tinyurl.gaのNode.jsラッパー

## 例

```js
const { create } = require("tinyurl-ga.js");

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
```
