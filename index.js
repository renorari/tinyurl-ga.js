/* ==== tinyurl-ga.js ==== */
/*    (c) 2022 Renorari    */
/*         GPL-3.0         */

/**
 * tinyurl.gaで短縮URLを作成
 * @param {string} url - 短縮したいURL
 */
function create(url) {
    return new Promise((resolve, reject) => {
        fetch("https://tinyurl.ga/api", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({
                "url": url
            })
        })
            .then((res) => res.json())
            .then(resolve)
            .catch(reject);
    });
}


module.exports = {
    "create": create
};
