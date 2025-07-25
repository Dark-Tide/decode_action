//Fri Jul 25 2025 13:17:37 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
typeof _Test2 === "undefined" && (parent.window.oncontextmenu = function () {
  event.preventDefault();
  return false;
});
(function (IiIii, iill1l, IiIiII) {
  iill1l(IiIii.CryptoJS);
})(this, function (I1IliI) {
  (function () {
    var illili = I1IliI;
    var liI11I = illili.lib;
    var III1 = liI11I.Base;
    var l1iiIi = liI11I.WordArray;
    var I1lI1i = illili.algo;
    var lIIi1l = I1lI1i.SHA1;
    var lIIi1i = I1lI1i.HMAC;
    var l1iiIl = I1lI1i.PBKDF3 = III1.extend({
      "cfg": III1.extend({
        "keySize": 4,
        "hasher": lIIi1l,
        "iterations": 1
      }),
      "init": function (iiiII1) {
        this.cfg = this.cfg.extend(iiiII1);
      },
      "compute": function (liI111, IiIlI) {
        var l1IIii = this.cfg;
        var I1I1Il = lIIi1i.create(l1IIii.hasher, liI111);
        var l1l1I = l1iiIi.create();
        var iIlI1I = l1iiIi.create([1]);
        var iIlI1l = l1l1I.words;
        var iII1Ii = iIlI1I.words;
        var IIIliI = l1IIii.keySize;
        var llIill = l1IIii.iterations;
        while (iIlI1l.length < IIIliI) {
          var IIIli1 = I1I1Il.update(IiIlI).finalize(iIlI1I);
          I1I1Il.reset();
          var I1lI11 = IIIli1.words;
          var l1iiII = I1lI11.length;
          var illill = IIIli1;
          for (var I1lI1I = 1; I1lI1I < llIill; I1lI1I++) {
            illill = I1I1Il.finalize(illill);
            I1I1Il.reset();
            var lIi1i1 = illill.words;
            for (var l1l11 = 0; l1l11 < l1iiII; l1l11++) {
              I1lI11[l1l11] ^= lIi1i1[l1l11];
            }
          }
          l1l1I.concat(IIIli1);
          iII1Ii[0]++;
        }
        l1l1I.sigBytes = IIIliI * 4;
        return l1l1I;
      }
    });
    illili.PBKDF3 = function (I1I1Ii, IiIl1, IIIl) {
      return l1iiIl.create(IIIl).compute(I1I1Ii, IiIl1);
    };
  })();
  return I1IliI.PBKDF3;
});
var myPlayer = $("#fonhen-player", parent.document),
  options = {
    "cssSelectorAncestor": "#fonhen-player-box",
    "supplied": "mp3"
  },
  erroR = CryptoJS,
  pbook,
  file,
  tingid = parent.mid,
  novel_id = parent.mpid;
(typeof self.MobileDevice === "undefined" || typeof self.$.jPlayer === "undefined") && (top.location.href = "//m.huanting.cc/Bad301.php");
myPlayer.jPlayer(options);
var W = parent.window.innerWidth,
  H = parent.window.innerHeight,
  GL = MobileDevice.getGlRenderer(),
  OD = Math.floor(Math.random() * 10),
  NA = window.navigator;
isHuawei = /EML-AL00|ANA-AN00|LYA-AL00|MHA-AL00|ALP-AL00|EVR-AN00|LIO-AN00|TET-AN00|HLK-AL00|PCT-AL10|OXF-AN10|BND-AL00|BKL-AL20|ARE-TL00|SEA-AL10|CDY-AN95|HWI-AL00|STK-AL00|DVC-AN20|YAL-AL|JEF-AN/i.test(navigator.userAgent);
isMali = /Mali/i.test(GL);
isAndroid = /Android|adr/i.test(NA.userAgent);
isAdreno = /Adreno/i.test(GL);
isIphone = /iPhone|Mac/i.test(NA.userAgent);
isApple = /Apple/i.test(GL);
isGPU = /Mali|Adreno|Immortalis|NATT|IMG|Power/i.test(GL);
isMicro = $(".player", parent.document).length;
isQQ = /SimpleUISwitch/i.test(NA.userAgent);
p = NA.platform;
Win = p.indexOf("Win") == 0;
Mac = p.indexOf("Mac") == 0;
X11 = p == "X11" || p == "Linux";
var string,
  string0,
  iv,
  file,
  datas,
  data,
  Audio = document.getElementById("audio");
typeof tingid != "undefined" && typeof novel_id != "undefined" && Tplay(tingid, novel_id);
function Tplay(lIi1iI, l1IIll) {
  (function () {})();
  if (typeof parent.tc1 === "undefined" && typeof _AD === "undefined") return;
  var l1l1i = Number(Math.round(new Date() / 1000)).toString(16),
    I1I1II = CryptoJS.MD5(lIi1iI + "$" + l1l1i + "$" + l1IIll).toString();
  if (typeof localStorage === "undefined" || typeof CryptoJS === "undefined") return;
  if (NA.webdriver == true || NA.cookieEnabled == false || window.parent.location.hash) {
    return;
  }
  if (typeof _Test === "undefined") {
    if (Win || Mac && !isApple || X11) {
      top.location.href = "//m.baidu.com/error.jsp";
      return;
    }
    if (isAndroid) {
      if (isHuawei && !isMali) {
        {
          $(".player-cover img", parent.document).addClass("pause");
          parent.Err("音频无法播放。");
          return;
        }
      }
      if (!isGPU) {
        {
          $(".player-cover img", parent.document).addClass("pause");
          parent.Err("音频无法播放！");
          return;
        }
      }
    }
    if (isIphone && !isApple) {
      $(".player-cover img", parent.document).addClass("pause");
      parent.Err("尝试清理浏览器缓存！");
      return;
    }
  }
  $.ajax({
    "url": "/apiM1.php?id=" + lIi1iI + "&pid=" + l1IIll,
    "type": "get",
    "async": false,
    "headers": {
      "s1": I1I1II.substr(8, 16),
      "s2": l1l1i,
      "s3": CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(I1I1II + "@" + GL + "@" + p + "@" + W + "*" + H + "@" + l1l1i)).split("").reverse().join("")
    },
    "success": function (IIlII1) {
      IIlII1.status == "book" && (top.location.href = "/book/" + lIi1iI + ".html");
      IIlII1.state == "success" && setList(IIlII1);
    }
  });
}
function setList(ll1Iil) {
  if (ll1Iil === undefined) return;
  var iliiiI = ll1Iil.playlist;
  if (iliiiI.apiurl === undefined) return;
  pbook = {
    "title": ll1Iil.title,
    "author": ll1Iil.author,
    "announcer": ll1Iil.announcer,
    "bookurl": ll1Iil.bookurl,
    "image": ll1Iil.image,
    "bookid": tingid,
    "pid": novel_id,
    "name": iliiiI.name,
    "url": iliiiI.url,
    "prev": iliiiI.prev,
    "npid": iliiiI.npid,
    "next": iliiiI.next,
    "file": iliiiI.file,
    "src": iliiiI.src,
    "status": iliiiI.atp,
    "apiurl": erroR.enc.Base64.parse(iliiiI.apiurl).toString(erroR.enc.Utf8)
  };
  $(".player", parent.document).length == 1 && iliiiI.next.toString() !== "javascript:void(0);" && parent.history.replaceState(null, null, iliiiI.next);
  parent.document.title = iliiiI.name + "，" + ll1Iil.title + "免费听 - 22听书网";
  $("#fonhen-player-title", parent.document).text(iliiiI.name);
  $("#prev,.jp-left", parent.document).attr("href", iliiiI.prev);
  $("#next,.jp-right", parent.document).attr("href", iliiiI.next);
  if (ll1Iil.limit == novel_id || iliiiI.npid == "0") {
    $("#next", parent.document).addClass("disabled");
  }
  iliiiI.npid == 2 && $("#prev", parent.document).addClass("disabled");
  iliiiI.npid == 3 && $("#prev", parent.document).removeClass("disabled");
  ll1Iil = "";
  if (OD % 2 != 0) {
    Audio.src = CryptoJS.enc.Base64.parse(pbook.src).toString(CryptoJS.enc.Utf8);
    Audio.load();
  }
  if (pbook.file != "") {
    string = IsReverse(pbook.file);
    string0 = erroR.enc.Base64.parse(string).toString(erroR.enc.Utf8);
    if (string0.indexOf("://") != -1 || string0.indexOf("$") != -1) file = string0;else {
      {
        var lIi11i = string0.substr(-1),
          i1Iii = string0.substr(0, lIi11i * 8),
          IIiI1I = string0.substr(-2, 1),
          lIi11l;
        iv = string0.substr(i1Iii.length, 32);
        file = string0.substr(i1Iii.length + iv.length, string0.length - i1Iii.length - iv.length - 2);
        lIi11l = erroR.PBKDF3("Û3Áf÷ÁfN[Üقراءة", erroR.enc.Hex.parse(i1Iii), {
          "keySize": 4,
          "iterations": IIiI1I,
          "hasher": erroR.algo.SHA256
        });
        file = erroR.enc.Base64.parse(Error(lIi11l)).toString(erroR.enc.Utf8);
      }
    }
    datas = file.split("$");
    pbook.file = "";
  }
  if (datas === undefined) return;
  parent.PlayHistoryClass.Add(pbook);
  parent.PlayHistoryClass.Add({
    "name": "index_setID",
    "bookid": tingid
  });
  datas[1] !== undefined && pbook.apiurl !== "" ? (data = datas[0].split("_"), $.ajax({
    "type": "get",
    "url": pbook.apiurl,
    "data": "file=" + encodeURIComponent(data[0]) + "&r1=" + data[1],
    "dataType": "jsonp",
    "success": function (illI1l) {
      if (illI1l.status == 0) file = illI1l.src, play();else illI1l.status == 2 ? (pbook.status = 0, file = illI1l.src, play()) : parent.Err("资源解析失败");
    }
  })) : play();
}
function Error(i1lI1) {
  return erroR.AES.decrypt(IsReverse(file), i1lI1, {
    "iv": erroR.enc.Hex.parse(iv),
    "mode": erroR.mode.CBC
  }).toString(erroR.enc.Utf8);
}
function IsReverse(lIllll) {
  if (lIllll == null) return;else {
    return lIllll.split("").reverse().join("");
  }
}
function play() {
  myPlayer.jPlayer("setMedia", {
    "mp3": file
  });
  myPlayer.jPlayer("playbackRate", parent.sp);
  Wplay();
  file = "";
  datas = "";
}
myPlayer.bind($.jPlayer.event.play, function (iII111) {
  $(".player-cover img", parent.document).removeClass("pause").addClass("run");
});
myPlayer.bind($.jPlayer.event.pause, function (lIiIil) {
  $(".player-cover img", parent.document).addClass("pause");
});
myPlayer.bind($.jPlayer.event.waiting, function (IlIi11) {
  $("#Loading", parent.document).css("height", "auto");
});
myPlayer.on($.jPlayer.event.canplay, function (iilIll) {
  OD % 2 == 0 && Audio.getAttribute("src") == "" && (Audio.src = CryptoJS.enc.Base64.parse(pbook.src).toString(CryptoJS.enc.Utf8), Audio.load());
  $("#Loading", parent.document).css("height", "0px");
});
myPlayer.bind($.jPlayer.event.error, function (l1II1) {
  switch (l1II1.jPlayer.error.type) {
    case $.jPlayer.error.URL:
      $("#Loading", parent.document).css("color", "red");
      $("#Loading span", parent.document).text("播放资源损坏了！");
      break;
  }
});
myPlayer.on($.jPlayer.event.ended, function (i111l) {
  pbook.next && pbook.status > 0 ? pbook.next.toString() !== "javascript:void(0);" ? isMicro ? Tplay(tingid, pbook.npid) : parent.slefurl(pbook.next) : parent.slefurl(pbook.bookurl) : (parent.Err("资源不稳定！等管理员修复。"), myPlayer.jPlayer("stop"));
});
function Wplay() {
  myPlayer.jPlayer("play");
  window.top.document.addEventListener("WeixinJSBridgeReady", function () {
    myPlayer.jPlayer("play");
  }, false);
  window.top.document.addEventListener("YixinJSBridgeReady", function () {
    myPlayer.jPlayer("play");
  }, false);
}
function playbackRate(i1111) {
  myPlayer.jPlayer("playbackRate", i1111);
}
function playstate(IlIi1l) {
  myPlayer.jPlayer(IlIi1l);
}
$("#tlist", parent.document).on("click", function () {
  if (pbook.bookurl != "") {
    parent.slefurl(pbook.bookurl);
  } else {
    window.top.history.go(-1);
  }
});