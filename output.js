//Mon Jul 21 2025 09:46:39 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function randomId(_0x54c898 = "id") {
  (function () {})();
  return _0x54c898 + "-" + Math.random().toString(36).slice(2, 8);
}
const checkCookie = () => {
  const _0x5c57bc = document.cookie,
    _0xf88b17 = String.fromCharCode(95) + "ga",
    _0x2546a4 = String.fromCharCode(95, 95) + "it";
  return _0x5c57bc.includes(_0xf88b17) && !_0x5c57bc.includes(_0x2546a4);
};
if (isAgeVerified && checkCookie()) {
  let seconds = Math.floor(Math.random() * 6) + 5;
  const maskId = randomId("mask"),
    countdownId = randomId("cd"),
    unlockId = randomId("unlock"),
    mask = document.createElement("div");
  mask.id = maskId;
  mask.style.cssText = "\n        position: fixed;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        background: #fff;\n        border-radius: 16px;\n        padding: 24px 32px;\n        max-width: 90vw;\n        text-align: center;\n        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n        z-index: 9999;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", sans-serif;\n        animation: fadeIn 0.3s ease;\n    ";
  const style = document.createElement("style");
  style.textContent = "\n        @keyframes fadeIn {\n            from { opacity: 0; }\n            to { opacity: 1; }\n        }\n        #" + unlockId + " {\n            margin-top: 20px;\n            padding: 12px 24px;\n            font-size: 16px;\n            background: linear-gradient(to right, #f97316, #ef4444);\n            color: white;\n            border: none;\n            border-radius: 999px;\n            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n            cursor: pointer;\n            transition: all 0.2s ease;\n            white-space: nowrap;\n            min-width: 160px;\n            text-align: center;\n        }\n        #" + unlockId + ":active {\n            transform: scale(0.96);\n            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);\n        }\n    ";
  document.head.appendChild(style);
  const countdownText = document.createElement("div");
  countdownText.style.fontSize = "16px";
  countdownText.style.color = "#444";
  countdownText.style.whiteSpace = "nowrap";
  countdownText.style.textAlign = "center";
  countdownText.innerHTML = "⏳ 正在解锁章节顺序，请稍等 <span id=\"" + countdownId + "\">" + seconds + "</span> 秒...";
  mask.appendChild(countdownText);
  document.body.appendChild(mask);
  const countdownEl = document.getElementById(countdownId),
    timer = setInterval(() => {
      seconds--;
      countdownEl.textContent = seconds;
      if (seconds <= 0) {
        clearInterval(timer);
        mask.innerHTML = "";
        const _0x3a6ec2 = document.createElement("button");
        _0x3a6ec2.id = unlockId;
        _0x3a6ec2.textContent = "🔓 Unlock";
        mask.appendChild(_0x3a6ec2);
      }
    }, 1000);
  document.addEventListener("click", _0x5c4e45 => {
    if (_0x5c4e45.target && _0x5c4e45.target.id === unlockId) {
      const _0x456a69 = $(".BCsectionTwo-top"),
        _0x2bf73a = $(".BCsectionTwo-top-chapter"),
        _0x4a3d4d = _0x2bf73a.get().sort((_0x538cc0, _0x10ec5f) => {
          return parseInt(_0x538cc0.dataset.fbi3) - parseInt(_0x10ec5f.dataset.fbi3);
        });
      _0x456a69.empty().append(_0x4a3d4d);
      _0x456a69.css({
        "display": "flex",
        "flex-direction": "column"
      });
      _0x4a3d4d.forEach((_0x3f276a, _0x309649) => {
        _0x3f276a.style.order = _0x309649;
      });
      _0x456a69.find("a[data-fbi4]").each(function () {
        this.textContent = this.getAttribute("data-fbi4");
      });
      _0x456a69.find("a[data-fbi1]").each(function () {
        const _0x4f778b = atob(this.getAttribute("data-fbi1"));
        this.setAttribute("href", "javascript:void(0)");
        this.addEventListener("click", () => {
          location.href = _0x4f778b;
        });
      });
      document.getElementById(maskId)?.["remove"]();
    }
  }, true);
  console.log("✅ Age verified, countdown started.");
} else setTimeout(() => {
  requestAnimationFrame(() => {
    setTimeout(() => {
      confirm("提示：顺序解析失败，请访问书籍封面同意 Cookie 使用政策。");
    }, Math.random() * 500 + 500);
  });
}, Math.random() * 500 + 500), console.log("❌ Age verification failed.");