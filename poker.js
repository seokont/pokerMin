function poker() {
  var U = {};
  U.android = navigator.userAgent.indexOf("Android") > -1;
  U.clientVersion = "7.21";
  U.copyright = "2025";
  U.accountURL = "";
  U.actionQueue = [];
  U.arrowD = "&#9660;";
  U.arrowL = "&#9668;";
  U.arrowR = "&#9658;";
  U.arrowU = "&#9650;";
  U.audio = {};
  U.bytesIn = 0;
  U.bytesInList = [];
  U.bytesOut = 0;
  U.bytesOutList = [];
  U.checkMark = "&#10004;";
  U.color = {};
  U.connected = false;
  U.crc = {};
  U.data = {};
  U.debug = [];
  U.debugShowing = false;
  U.decimalMark = ".";
  U.deck = "";
  U.doc = {};
  U.eSeed = "";
  U.firstError = true;
  U.focused = null;
  U.fullScreenCancel = false;
  U.fullScreenRequest = false;
  U.hasTouch = "ontouchstart" in document;
  U.iPhone = navigator.userAgent.indexOf("iPhone") > -1;
  U.lang = {};
  U.languages = 0;
  U.lobby = null;
  U.local = {};
  U.loginData = {};
  U.licenseType = "";
  U.lobbyChatQueue = [];
  U.loggedIn = false;
  U.lurking = false;
  U.maxAvatar = 64;
  U.mControls = true;
  U.minAvatar = 1;
  U.minTray = null;
  U.mobile = false;
  U.mouse = true;
  U.newAccounts = false;
  U.notecolor = [
    "",
    "#97FF30",
    "#669966",
    "#80FFE1",
    "#309BFF",
    "#FFBBFF",
    "#8E7AFF",
    "#FFAA30",
    "#FF3E30",
    "#FFDB30",
    "#B5946E",
  ];
  U.notelabel = ["", "", "", "", "", "", "", "", "", "", ""];
  U.params = {};
  U.passwordRecovery = false;
  U.passwords = {};
  U.permissions = [];
  U.playerAction = [];
  U.postFlopButtons = [
    "Min",
    "20%",
    "25%",
    "30%",
    "33%",
    "35%",
    "40%",
    "45%",
    "50%",
    "55%",
    "60%",
    "65%",
    "67%",
    "70%",
    "75%",
    "80%",
    "Pot",
    "Max",
  ];
  U.preFlopButtons = [
    "Min",
    "2½bb",
    "3bb",
    "3½bb",
    "4bb",
    "4½bb",
    "5bb",
    "5½bb",
    "6bb",
    "Pot",
    "Max",
  ];
  U.proc = null;
  U.profileURL = "";
  U.pset = {};
  U.quit = false;
  U.reconKey = "";
  U.seatEmptyOpacity = 0.15;
  U.seatOpacity = 0.5;
  U.sessionID = "";
  U.sitting = [];
  U.soundOK = true;
  U.storage = true;
  U.tableCurrent = -1;
  U.tables = [];
  U.thouSeparator = ",";
  U.validateEmails = false;
  U.viewPort = 960;
  U.waiting = [];
  U.winOfsX = 10;
  U.winOfsY = 10;
  U.zTop = 0;

  function aU() {
    var g;
    for (g = U.actionQueue.length - 1; g >= 0; g--) {
      if (U.actionQueue[g].queued == false) {
        U.actionQueue.splice(g, 1);
      }
    }
    if (U.actionQueue.length > 0) {
      e(U.actionQueue[0]);
    }
  }

  function ae(g) {
    if (g.queued == true) {
      return;
    }
    U.actionQueue.push(g);
    g.queued = true;
    if (U.actionQueue.length == 1) {
      e(g);
    }
  }

  function e(g) {
    if (U.pset.BringToFront) {
      g.bringToFront();
    }
  }

  function aG() {
    var bi, bh, bg, bj, bk, g;
    bk = window.innerWidth;
    g = window.innerHeight;
    if (U.mobile) {
      U.$webTop.add(U.$webBottom).add(U.$webLeft).add(U.$webRight).hide();
      U.$webClient.css({
        left: 0,
        top: 0,
        width: bk,
        height: g,
        right: "auto",
        bottom: "auto",
      });
      return;
    }
    bi = U.$webLeft.width();
    bh = U.$webRight.width();
    bg = U.$webTop.height();
    bj = U.$webBottom.height();
    if (g - bg < U.params.minHeight) {
      bg = 0;
    }
    U.$webTop.toggle(bg > 0);
    if (g - bg - bj < U.params.minHeight) {
      bj = 0;
    }
    U.$webBottom.toggle(bj > 0);
    if (bk - bi < U.params.minWidth) {
      bi = 0;
    }
    U.$webLeft.toggle(bi > 0);
    if (bk - bi - bh < U.params.minWidth) {
      bh = 0;
    }
    U.$webRight.toggle(bh > 0);
    U.$webClient.css({
      top: bg,
      bottom: bj,
      left: bi,
      right: bh,
      width: "auto",
      height: "auto",
    });
  }

  function aa(bg, g) {
    var bh = {};
    if (U.audio[bg].enabled == g) {
      return;
    }
    U.audio[bg].enabled = g;
    bh[bg + "Sound"] = g;
    al(bh);
  }

  function i(bg, bh) {
    var bk, bj, bi, g;
    bk = bg;
    if (bk.substr(0, 1) == "#") {
      bk = "0x" + bk.substr(1);
    }
    bj = (bk >> 16) & 255;
    bi = (bk >> 8) & 255;
    g = bk & 255;
    return "rgba(" + bj + "," + bi + "," + g + "," + bh + ")";
  }

  function X(g) {
    var bg = new Date().getTime();
    U.bytesInList.push({
      time: bg,
      size: g,
    });
    U.bytesIn += g;
  }

  function af(g) {
    var bh, bg;
    bh = new Date().getTime();
    bg = bh - 60000;
    U.bytesOutList.push({
      time: bh,
      size: g,
    });
    U.bytesOut += g;
    while (U.bytesOutList[0].time < bg) {
      U.bytesOut -= U.bytesOutList[0].size;
      U.bytesOutList.splice(0, 1);
    }
  }

  function aw(bg) {
    var g, bh;
    if (bg) {
      g = U.lobby.sitnGoGrid.selrow;
    } else {
      g = U.lobby.tourneyGrid.selrow;
    }
    if (g < 0) {
      return false;
    }
    if (bg) {
      bh = U.data.SitnGo.rows[g].startMin;
    } else {
      bh = U.data.Tourney.rows[g].startMin;
    }
    return bh > 0;
  }

  function k(bh) {
    var bj, bg, bl, bi, g, bk;
    if (bh.length != 2) {
      return 0;
    }
    if (bh == "??") {
      return 53;
    }
    bj = "23456789TJQKA";
    bg = "cdhs";
    bl = bh.substr(0, 1);
    bi = bh.substr(1, 1);
    g = bj.indexOf(bl);
    bk = bg.indexOf(bi);
    if (g < 0 || bk < 0) {
      return 0;
    }
    return g * 4 + bk + 1;
  }

  function be(bh) {
    var bg, g;
    bg = "Image?Name=Cards" + bh;
    U.deck = bg + "&Crc=" + U.crc.image;
    for (g = 0; g < U.tables.length; g++) {
      U.tables[g].deckChange();
    }
  }

  function aI(bl, bj, bg, bn) {
    var bi, bh, bm, bk, g;
    bi = U.lobby.loginGrid.getRow(bl, "player");
    if (bi >= 0) {
      g = U.data.Login.rows[bi];
      g.note = bj == "" ? "" : "&#10004;";
      g.colorSort = bg;
      g.color = W(bg);
      g.block = bn == "Yes" ? "" : "&#10004;";
      U.lobby.loginGrid.update();
    }
    bk = bn == "No";
    for (bi = 0; bi < U.tables.length; bi++) {
      bm = U.tables[bi];
      for (bh = 1; bh <= bm.seats; bh++) {
        if (bm.playerName[bh] == bl) {
          bm.seat[bh].setNoteColor(bj, bg);
          bm.setHint(bh);
          bm.seat[bh].chatBlockIcon(bk);
          break;
        }
      }
    }
  }

  function ag(bg) {
    var g, bh;
    g = bg.split("<br>");
    for (bh = 0; bh < g.length; bh++) {
      g[bh] = bc(g[bh]);
    }
    return g.join("<br>");
  }

  function aF(bg, g) {
    return Math.floor(bg / g) * g;
  }

  function a1(bj) {
    var bi, bh, bg;
    if (bj.substr(0, 1) == "#") {
      bj = "0x" + bj.substr(1);
    }
    bi = (bj >> 16) & 255;
    bh = (bj >> 8) & 255;
    bg = bj & 255;
    return bi * 0.299 + bh * 0.587 + bg * 0.114;
  }

  function z(bk, bh, bg, bj, bm) {
    var bl, g, bi;
    if (bg == "T") {
      bl = az(bh);
    } else {
      bl = bh;
    }
    g = U.passwords[bg + bl];
    if (bj == true && g == null) {
      U.lobby.getPasswordShow(bh, bg, bm, bk);
    } else {
      bi = {
        Response: bk,
        Table: bh,
        Type: bg,
        Seat: bm,
      };
      if (g != null) {
        bi.Password = g;
      }
      j(bi);
    }
  }

  function aj(bg) {
    if (bg.length == 0) {
      return "";
    }
    var g, bh;
    g = Math.round(Math.random() * 4294967295)
      .toString(16)
      .toUpperCase();
    while (g.length < 8) {
      g = "0" + g;
    }
    bh = bf(bf(bg + g));
    return g + "-" + bh;
  }

  function b(g, bk, bj) {
    var bh, bm, bi, bg, bl;
    bm = document.styleSheets.length;
    for (bh = 0; bh < bm; bh++) {
      bg = document.styleSheets[bh];
      bl = bg.cssRules || bg.rules;
      for (bi in bl) {
        if (bl[bi].selectorText == g) {
          bl[bi].style[bk] = bj;
          return true;
        }
      }
    }
    return false;
  }

  function a6(bg, g) {
    if (g) {
      return U.maskPrimary.split("%1%").join(bg);
    } else {
      return U.maskSecondary.split("%1%").join(bg);
    }
  }

  function ba(bg) {
    var g = "";
    if (bg >= 1000000000) {
      bg = bg / 1000000000;
      g = "B";
    } else {
      if (bg >= 1000000) {
        bg = bg / 1000000;
        g = "M";
      } else {
        if (bg >= 10000) {
          bg = bg / 1000;
          g = "K";
        }
      }
    }
    return n(bg) + g;
  }

  function n(bi) {
    var g, bg, bh;
    bh = Number(bi);
    if (bh === parseInt(bh, 10)) {
      return bh.toString();
    }
    g = bh.toFixed(2);
    bg = g.indexOf(".");
    return g.substr(0, bg) + U.decimalMark + g.substr(bg + 1, 2);
  }

  function B(bl) {
    var g, bk, bh, bj, bg, bi;
    if (bl < 0) {
      g = "-";
    } else {
      g = "";
    }
    bk = Math.abs(bl);
    bh = n(bk);
    if (bk < 10000) {
      return g + bh;
    }
    bj = bh.indexOf(U.decimalMark);
    if (bj < 0) {
      bj = bh.length;
    }
    bg = bh.substr(bj, 3);
    bi = 0;
    while (bj > 0) {
      if (bi == 3) {
        bg = U.thouSeparator + bg;
        bi = 0;
      }
      bj--;
      bg = bh.substr(bj, 1) + bg;
      bi++;
    }
    return g + bg;
  }

  function O(bj) {
    var bh, g, bg, bi;
    bh = bj.getHours();
    if (bh > 12 && U.pset.TimeFormat12) {
      bh = bh - 12;
    }
    if (bh < 10) {
      bi = "0" + bh;
    } else {
      bi = bh;
    }
    g = bj.getMinutes();
    if (g < 10) {
      bi = bi + ":0" + g;
    } else {
      bi = bi + ":" + g;
    }
    bg = bj.getSeconds();
    if (bg < 10) {
      bi = bi + ":0" + bg;
    } else {
      bi = bi + ":" + bg;
    }
    return bi;
  }

  function s(bl) {
    var bk, bi, g, bh, bg, bj;
    bk = new Date();
    bi = bk.getUTCHours();
    if (bi < 10) {
      bi = "0" + bi;
    }
    g = bk.getUTCMinutes();
    if (g < 10) {
      g = "0" + g;
    }
    bh = bk.getUTCSeconds();
    if (bh < 10) {
      bh = "0" + bh;
    }
    bg = bk.getUTCMilliseconds();
    if (bg < 10) {
      bg = "00" + bg;
    } else {
      if (bg < 100) {
        bg = "0" + bg;
      }
    }
    bj = bi + ":" + g + ":" + bh + "." + bg + " " + bl;
    U.debug.push(bj);
    if (U.debugShowing) {
      U.debugContent.addTextLine(bj);
    }
  }

  function v() {
    U.color.Background = "#FFFFFF";
    U.color.Window = "#303030";
    U.color.WindowText = "#CBCBCB";
    U.color.Button = "#C0C0C0";
    U.color.ButtonText = "#3030303";
    U.color.ButtonDisabled = "#606060";
    U.color.ButtonBorder = "#8F8F8F";
    U.color.List = "#FFFFFF";
    U.color.ListText = "#404040";
    U.color.ListDisabled = "#808080";
    U.debugLog = new Y($("#DebugLog"), null, {
      minwidth: 250,
      minheight: 150,
      resize: true,
      onresize: function () {
        U.debugContent.updateScrollPosition();
      },
    });
    U.debugLog.setTitle("Debugger");
    new A($(".ok", U.debugLog.$dialog), "OK", 25, function () {
      U.debugShowing = false;
      U.debugLog.close();
    });
    new A($(".save", U.debugLog.$dialog), "Save", 25, function () {
      P("Debugger", U.debugContent.getText(), true);
    });
    $(".closebtn", U.debugLog.$dialog).on("touchstart mousedown", function () {
      U.debugShowing = false;
      U.debugLog.close();
      return false;
    });
    U.debugContent = new x($(".debugcontent", U.debugLog.$dialog), false);
    s(
      "MSG Version " +
        U.clientVersion +
        " : " +
        U.params.sitePlatform +
        " : " +
        U.params.siteID
    );
    window.onerror = function (bh, bi, bj, bg, g) {
      s("CON " + bh);
    };
  }

  function aA() {
    U.doc.debug = false;
    if (U.doc.$menu) {
      U.doc.$menu.hide();
      U.doc.$menu = null;
    }
    U.debugLog.show(false, U.mobile);
    U.debugContent.setScale(U.debugLog.scaleY);
    if (!U.mobile) {
      var g, bg;
      g = (U.$webClient.width() - U.debugLog.$dialog.width()) / 2;
      bg = (U.$webClient.height() - U.debugLog.$dialog.height()) / 2;
      U.debugLog.$dialog.css({
        left: g,
        top: bg,
      });
    }
    U.debugShowing = true;
    U.debugContent.setText(U.debug.join("<br>") + "<br>");
    U.debugContent.bottomScroll();
  }

  function aO() {
    var g = !U.hasTouch,
      bg = false;
    U.doc.$menu = null;
    U.doc.menuitem = null;
    U.doc.button = null;
    U.doc.dialog = null;
    U.doc.grid = null;
    U.doc.nameplate = null;
    U.doc.scrollbar = null;
    U.doc.scrollthumb = null;
    U.doc.slider = null;
    U.doc.debug = false;
    $(document).on("contextmenu", function () {
      return false;
    });
    $(document).on("touchend mouseup", function (bi) {
      if (r(bi)) {
        return;
      }
      var bh = false;
      if (!bg && U.waContext) {
        bg = true;
        U.waContext.resume();
      }
      if (!g) {
        g = true;
        U.audio.beep.play(true);
      }
      if (U.doc.debug) {
        U.doc.debug = false;
      }
      if (U.doc.$menu) {
        U.doc.$menu.hide();
        U.doc.$menu = null;
        bh = true;
      }
      if (U.doc.menuitem) {
        U.doc.menuitem.$menu.parent().hide();
        U.doc.menuitem = null;
        bh = true;
      }
      if (U.doc.button) {
        U.doc.button.up();
        bh = true;
      }
      if (U.doc.dialog) {
        U.doc.dialog.offDialog();
        bh = true;
      }
      if (U.doc.grid) {
        U.doc.grid.offGrid();
        bh = true;
      }
      if (U.doc.nameplate) {
        U.doc.nameplate.hintOff();
        bh = true;
      }
      if (U.doc.scrollbar) {
        clearTimeout(U.doc.scrollbar.timer);
        U.doc.scrollbar = null;
        bh = true;
      }
      if (U.doc.scrollthumb) {
        U.doc.scrollthumb = null;
        bh = true;
      }
      if (U.doc.slider) {
        U.doc.slider = null;
        bh = true;
      }
      if (bh) {
        return false;
      }
    });
    $(document).on("touchmove mousemove", function (bi) {
      if (r(bi)) {
        return;
      }
      var bh = false;
      if (U.doc.dialog) {
        U.doc.dialog.onDialog(bi);
        bh = true;
      }
      if (U.doc.grid) {
        U.doc.grid.onGrid(bi);
        bh = true;
      }
      if (U.doc.scrollthumb) {
        U.doc.scrollthumb.dragThumb(bi);
        bh = true;
      }
      if (U.doc.slider) {
        U.doc.slider.slide(bi);
        bh = true;
      }
      if (bh) {
        return false;
      }
    });
  }

  function aY(g) {
    var bg = g.lastIndexOf(" - Table ");
    if (bg < 0) {
      return 0;
    } else {
      return au(g.substring(bg + 9));
    }
  }

  function az(g) {
    var bg = g.lastIndexOf(" - ");
    if (bg < 0) {
      return g;
    } else {
      return g.substring(0, bg);
    }
  }

  function a2(g) {
    $(".dialog .title").removeClass("bold");
    $(".title", g.$dialog).addClass("bold");
    U.focused = g;
  }

  function o() {
    var g = window.document,
      bg = g.documentElement;
    U.fullScreenCancel =
      g.exitFullscreen ||
      g.mozCancelFullScreen ||
      g.webkitExitFullscreen ||
      g.msExitFullscreen;
    U.fullScreenRequest =
      bg.requestFullscreen ||
      bg.mozRequestFullScreen ||
      bg.webkitRequestFullScreen ||
      bg.msRequestFullscreen;
  }

  function a4() {
    var g = window.document;
    return (
      g.fullscreenElement ||
      g.mozFullScreenElement ||
      g.webkitFullscreenElement ||
      g.msFullscreenElement
    );
  }

  function at(g) {
    if (g && U.fullScreenRequest) {
      U.fullScreenRequest.call(window.document.documentElement);
    } else {
      if (!g && U.fullScreenCancel) {
        U.fullScreenCancel.call(window.document);
      }
    }
  }

  function aC(bA, bx, bv, bu, bt, br) {
    var bo,
      bs,
      bE,
      bD,
      bC,
      bB,
      by,
      bw,
      bz,
      bq,
      bp,
      bn,
      bm,
      bl,
      bk,
      bj,
      bi,
      bh,
      bg,
      g,
      bF;
    bo = "23456789TJQKA";
    bs = "cdhs";
    bz = "[";
    if (bA > 0 && bA < 53) {
      bq = Math.floor((bA - 1) / 4);
      bp = (bA - 1) % 4;
      bE = bo.charAt(bq) + bs.charAt(bp);
      bz = bz + bE;
    }
    if (bx > 0 && bx < 53) {
      bn = Math.floor((bx - 1) / 4);
      bm = (bx - 1) % 4;
      bD = bo.charAt(bn) + bs.charAt(bm);
      bz = bz + " " + bD;
    }
    if (bv > 0 && bv < 53) {
      bl = Math.floor((bv - 1) / 4);
      bk = (bv - 1) % 4;
      bC = bo.charAt(bl) + bs.charAt(bk);
      bz = bz + " " + bC;
    }
    if (bu > 0 && bu < 53) {
      bj = Math.floor((bu - 1) / 4);
      bi = (bu - 1) % 4;
      bB = bo.charAt(bj) + bs.charAt(bi);
      bz = bz + " " + bB;
    }
    if (bt > 0 && bt < 53) {
      bh = Math.floor((bt - 1) / 4);
      bg = (bt - 1) % 4;
      by = bo.charAt(bh) + bs.charAt(bg);
      bz = bz + " " + by;
    }
    if (br > 0 && br < 53) {
      g = Math.floor((br - 1) / 4);
      bF = (br - 1) % 4;
      bw = bo.charAt(g) + bs.charAt(bF);
      bz = bz + " " + bw;
    }
    bz = bz + "]";
    return bz;
  }

  function aP(bg) {
    var g, bh;
    g = U.lobby.noteList.controls.noteGrid.getRow(bg, "player");
    if (g < 0) {
      return {
        color: 0,
        note: "",
        block: "",
      };
    } else {
      bh = U.data.Notes.rows[g];
      return {
        color: bh.colorNum,
        note: bh.note,
        block: bh.block,
      };
    }
  }

  function G() {
    if (!U.storage) {
      return "00000000";
    }
    if (aM("PCID") == null) {
      var g = Math.round(Math.random() * 4294967295)
        .toString(16)
        .toUpperCase();
      while (g.length < 8) {
        g = "0" + g;
      }
      M("PCID", g);
    }
    return aM("PCID");
  }

  function aK(bi) {
    var bh, bg, g;
    bh = null;
    bg = aq(bi.Type) + aq(bi.Table);
    for (g = 0; g < U.tables.length; g++) {
      if (U.tables[g].type + U.tables[g].id == bg) {
        bh = U.tables[g];
        break;
      }
    }
    return bh;
  }

  function h(bh, bg, bj) {
    var g, bk, bi;
    if (bg == "R") {
      for (g = 0; g < U.data.Ring.rows.length; g++) {
        if (U.data.Ring.rows[g].id == bh) {
          return U.data.Ring.rows[g].buyin;
        }
      }
      return "?";
    } else {
      if (bj) {
        bi = U.data.SitnGo.rows;
      } else {
        bi = U.data.Tourney.rows;
      }
      bk = az(bh);
      for (g = 0; g < bi.length; g++) {
        if (bi[g].id == bk) {
          return bi[g].buyin;
        }
      }
      return "?";
    }
  }

  function a7(bi, bh, bk) {
    var bg, g, bm, bl, bj;
    bg = "";
    if (U.loggedIn && !U.mobile) {
      bg =
        " - " +
        U.lang.TableCaptionLoggedIn.split("%1%").join(U.loginData.player);
    }
    if (bh == "R") {
      for (g = 0; g < U.data.Ring.rows.length; g++) {
        if (U.data.Ring.rows[g].id == bi) {
          return (
            bi +
            (U.mobile
              ? ""
              : " - " +
                U.data.Ring.rows[g].game +
                " (" +
                U.data.Ring.rows[g].buyin +
                ")") +
            bg
          );
        }
      }
      return "?";
    } else {
      if (bk) {
        bj = U.data.SitnGo.rows;
      } else {
        bj = U.data.Tourney.rows;
      }
      bm = az(bi);
      bl = aY(bi);
      bi = bm + " - " + U.lang.TableCaptionTable + " " + bl;
      for (g = 0; g < bj.length; g++) {
        if (bj[g].id == bm) {
          return (
            bi +
            (U.mobile ? "" : " - " + bj[g].game + " (" + bj[g].buyin + ")") +
            bg
          );
        }
      }
      return "?";
    }
  }

  function W(g) {
    if (g == 0) {
      return "";
    } else {
      return (
        "<div class='grid_color' style='background-color: " +
        U.notecolor[g] +
        ";'>"
      );
    }
  }

  function aQ(g) {
    var bg;
    if (g == "") {
      return true;
    }
    if (g.substr(0, 1) == "-") {
      bg = g.substr(1);
      return U.permissions.indexOf(bg) < 0;
    } else {
      return U.permissions.indexOf(g) >= 0;
    }
  }

  function bc(g) {
    return g
      .split("&")
      .join("&amp;")
      .split("<")
      .join("&lt;")
      .split(">")
      .join("&gt;")
      .split("'")
      .join("&apos;")
      .split('"')
      .join("&quot;");
  }

  function r(g) {
    if (g.type.indexOf("mouse") == 0) {
      return !U.mouse;
    } else {
      U.mouse = false;
      setTimeout(function () {
        U.mouse = true;
      }, 2000);
      return false;
    }
  }

  function y() {
    U.winOfsX = U.winOfsX + 35;
    U.winOfsY = U.winOfsY + 35;
    if (U.winOfsX + 706 > U.$webClient.width() - 5) {
      U.winOfsX = 10;
    }
    if (U.winOfsY + 573 > U.$webClient.height() - 5) {
      U.winOfsY = 10;
    }
  }

  function a3() {
    var bg,
      g = ["2½", "3", "3½", "4", "4½", "5", "5½", "6"];
    U.preFlopButtons[0] = U.lang.TableButtonMin;
    for (bg = 1; bg < 9; bg++) {
      U.preFlopButtons[bg] = U.lang.TableButtonBBx.split("%1%").join(g[bg - 1]);
    }
    U.preFlopButtons[9] = U.lang.TableButtonPot;
    U.preFlopButtons[10] = U.lang.TableButtonMax;
    U.postFlopButtons[0] = U.lang.TableButtonMin;
    U.postFlopButtons[16] = U.lang.TableButtonPot;
    U.postFlopButtons[17] = U.lang.TableButtonMax;
  }

  function Z() {
    var g;
    $.fn.xytrans = function (bg) {
      if (bg == 0) {
        return $(this).each(function () {
          $(this).css("transition", "none");
        });
      } else {
        return $(this).each(function () {
          $(this).css({
            transition: "left " + bg + "ms ease-out, top " + bg + "ms ease-out",
            "-webkit-backface-visibility": "hidden",
          });
        });
      }
    };
    $.fn.optrans = function (bg) {
      return $(this).each(function () {
        $(this).css({
          transition: "opacity " + bg + "ms",
          "-webkit-backface-visibility": "hidden",
        });
      });
    };
    $.fn.redraw = function () {
      return $(this).each(function () {
        g = getComputedStyle(this).display;
      });
    };
  }

  function J(bg) {
    var g = U.lobby.noteList.controls.noteGrid.getRow(bg, "player");
    return g >= 0 && U.data.Notes.rows[g].chatBool == "No";
  }

  function aW() {
    return (
      window.navigator.standalone ||
      window.matchMedia("(display-mode: standalone)").matches
    );
  }

  function aX(g) {
    return encodeURI(g).split(/%..|./).length - 1;
  }

  function aN() {
    if (typeof AudioContext !== "undefined") {
      U.waContext = new AudioContext();
      U.waGain =
        typeof U.waContext.createGain == "undefined"
          ? U.waContext.createGainNode()
          : U.waContext.createGain();
      U.mp3 = true;
      s("MSG Using Web Audio");
    } else {
      if (typeof webkitAudioContext !== "undefined") {
        U.waContext = new webkitAudioContext();
        U.waGain =
          typeof U.waContext.createGain == "undefined"
            ? U.waContext.createGainNode()
            : U.waContext.createGain();
        U.mp3 = true;
        s("MSG Using Webkit Audio");
      } else {
        U.waContext = null;
        U.waGain = null;
        U.mp3 = new Audio().canPlayType("audio/mpeg");
        s("MSG Using HTML Audio");
      }
    }
    U.audio.beep = new p("beep", true);
    U.audio.bet = new p("bet", true);
    U.audio.card = new p("card", true);
    U.audio.card2 = new p("card", true);
    U.audio.card3 = new p("card", true);
    U.audio.card4 = new p("card", true);
    U.audio.card5 = new p("card", true);
    U.audio.check = new p("check", true);
    U.audio.login = new p("login", false);
    U.audio.pot = new p("pot", true);
  }

  function V() {
    U.params.bannerOfs = au(params.bannerOfs);
    U.params.buttonRadius = aq(params.buttonRadius);
    U.params.fontFamily = aq(params.fontFamily);
    U.params.fontLarge = aq(params.fontLarge);
    U.params.fontNormal = aq(params.fontNormal);
    U.params.fontSmall = aq(params.fontSmall);
    U.params.gradients = aq(params.gradients) == "Yes";
    U.params.guiMode = aq(params.guiMode);
    U.params.language = au(params.language);
    U.params.loginName = aq(params.loginName);
    U.params.loginPassword = aq(params.loginPassword);
    U.params.logoutLink = aq(params.logoutLink);
    U.params.minHeight = au(params.minHeight);
    U.params.minWidth = au(params.minWidth);
    U.params.packetPort = aq(params.packetPort);
    U.params.sessionKey = aq(params.sessionKey);
    U.params.showNetChips = aq(params.showNetChips) == "Yes";
    U.params.sitAndGoTab = aq(params.sitAndGoTab) == "Yes";
    U.params.siteID = aq(params.siteID);
    U.params.sitePlatform = aq(params.sitePlatform);
    U.params.sitePassword = aq(params.sitePassword);
    U.params.sixPlus = aq(params.sixPlus) == "Yes";
    U.params.tableDelimiter = aq(params.tableDelimiter);
    U.params.tableName = aq(params.tableName);
    U.params.tablePassword = aq(params.tablePassword);
    U.params.tableType = aq(params.tableType);
    U.params.useSSL = aq(params.useSSL) == "Yes";
    U.params.rabbitHunt = aq(params.rabbitHunt) == "Yes";
    U.$webBottom = $("#bottom_div");
    U.$webClient = $("#client_div");
    U.$webLeft = $("#left_div");
    U.$webRight = $("#right_div");
    U.$webTop = $("#top_div");
    if (U.params.gradients) {
      b(".menu", "backgroundImage", "url('Image?Name=Grad25')");
      b(".header", "backgroundImage", "url('Image?Name=Grad30')");
      b(".grid_header", "backgroundImage", "url('Image?Name=Grad25')");
    }
  }

  function m() {
    var bg, bh, bk, g, bi, bj;
    bg = [
      "Min",
      "2½bb",
      "3bb",
      "3½bb",
      "4bb",
      "4½bb",
      "5bb",
      "5½bb",
      "6bb",
      "Pot",
      "Max",
    ];
    bh = [
      "Min",
      "20%",
      "25%",
      "30%",
      "33%",
      "35%",
      "40%",
      "45%",
      "50%",
      "55%",
      "60%",
      "65%",
      "67%",
      "70%",
      "75%",
      "80%",
      "Pot",
      "Max",
    ];
    bk = [2, 4, 6, 9];
    g = [4, 8, 12, 16];
    U.pset.DecimalUSA = aq(pset.DecimalUSA) == "Yes";
    U.decimalMark = U.pset.DecimalUSA ? "." : ",";
    U.thouSeparator = U.pset.DecimalUSA ? "," : ".";
    U.pset.LobbyChatTime = aq(pset.LobbyChatTime) == "Yes";
    U.pset.TableChatTime = aq(pset.TableChatTime) == "Yes";
    U.pset.ChatBlockAsterisk = aq(pset.ChatBlockAsterisk) == "Yes";
    U.pset.TimeFormat12 = aq(pset.TimeFormat12) == "Yes";
    U.pset.BringToFront = aq(pset.BringToFront) == "Yes";
    U.pset.HandHelper = aq(pset.HandHelper) == "Yes";
    U.pset.AutoMuck = aq(pset.AutoMuck) == "Yes";
    U.pset.Deck = au(pset.Deck);
    if (U.pset.Deck < 1 || U.pset.Deck > 4) {
      U.pset.Deck = 1;
    }
    U.pset.DealFaceDown = aq(pset.DealFaceDown) == "Yes";
    U.pset.MuteDealer = aq(pset.MuteDealer) == "Yes";
    U.pset.Rules6Holdem = aq(pset.Rules6Holdem) == "Yes";
    U.pset.RabbitShow = aq(pset.RabbitShow) == "Yes";
    for (bi = 1; bi < 5; bi++) {
      bj = bg.indexOf(aq(pset["PreFlopButton" + bi]));
      if (bj < 0) {
        bj = bk[bi - 1];
      }
      U.pset["PreFlopButton" + bi] = bj;
      bj = bh.indexOf(aq(pset["PostFlopButton" + bi]));
      if (bj < 0) {
        bj = g[bi - 1];
      }
      U.pset["PostFlopButton" + bi] = bj;
    }
    U.pset.RunItTwice = false;
    U.pset.PreferredSeat = true;
    U.pset.SeatPosition = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    U.pset.SoundVolume = 1;
    U.pset.filterRingActivate = false;
    U.pset.filterRingHoldem = true;
    U.pset.filterRingOmaha = true;
    U.pset.filterRingOmahaHiLo = true;
    U.pset.filterRingOmaha5 = true;
    U.pset.filterRingOmaha5HiLo = true;
    U.pset.filterRingRazz = true;
    U.pset.filterRingStud = true;
    U.pset.filterRingStudHiLo = true;
    U.pset.filterRingMixed = true;
    U.pset.filterRingNL = true;
    U.pset.filterRingPL = true;
    U.pset.filterRingCL = true;
    U.pset.filterRingFixed = true;
    U.pset.filterRingStakesMin = "";
    U.pset.filterRingStakesMax = "";
    U.pset.filterRingBuyinMin = "";
    U.pset.filterRingBuyinMax = "";
    U.pset.filterRingSeatsMin = "";
    U.pset.filterRingSeatsMax = "";
    U.pset.filterRingPlayersMin = "";
    U.pset.filterRingPrimary = true;
    U.pset.filterRingSecondary = true;
    U.pset.filterRingHideFull = false;
    U.pset.filterRingHidePrivate = false;
    U.pset.filterTourneyActivate = false;
    U.pset.filterTourneyHoldem = true;
    U.pset.filterTourneyOmaha = true;
    U.pset.filterTourneyOmahaHiLo = true;
    U.pset.filterTourneyOmaha5 = true;
    U.pset.filterTourneyOmaha5HiLo = true;
    U.pset.filterTourneyRazz = true;
    U.pset.filterTourneyStud = true;
    U.pset.filterTourneyStudHiLo = true;
    U.pset.filterTourneyMixed = true;
    U.pset.filterTourneyNL = true;
    U.pset.filterTourneyPL = true;
    U.pset.filterTourneyFixed = true;
    U.pset.filterTourneyFreezeout = true;
    U.pset.filterTourneyRebuy = true;
    U.pset.filterTourneyReentry = true;
    U.pset.filterTourneyShootout = true;
    U.pset.filterTourneyBuyinMin = "";
    U.pset.filterTourneyBuyinMax = "";
    U.pset.filterTourneySizeMin = "";
    U.pset.filterTourneySizeMax = "";
    U.pset.filterTourneyTime = true;
    U.pset.filterTourneyOther = true;
    U.pset.filterTourneyPrimary = true;
    U.pset.filterTourneySecondary = true;
    U.pset.filterTourneyHidePrivate = false;
    U.pset.filterTourneyHideRunning = false;
    U.pset.filterSitnGoActivate = false;
    U.pset.filterSitnGoHoldem = true;
    U.pset.filterSitnGoOmaha = true;
    U.pset.filterSitnGoOmahaHiLo = true;
    U.pset.filterSitnGoOmaha5 = true;
    U.pset.filterSitnGoOmaha5HiLo = true;
    U.pset.filterSitnGoRazz = true;
    U.pset.filterSitnGoStud = true;
    U.pset.filterSitnGoStudHiLo = true;
    U.pset.filterSitnGoMixed = true;
    U.pset.filterSitnGoNL = true;
    U.pset.filterSitnGoPL = true;
    U.pset.filterSitnGoFixed = true;
    U.pset.filterSitnGoFreezeout = true;
    U.pset.filterSitnGoRebuy = true;
    U.pset.filterSitnGoReentry = true;
    U.pset.filterSitnGoShootout = true;
    U.pset.filterSitnGoBuyinMin = "";
    U.pset.filterSitnGoBuyinMax = "";
    U.pset.filterSitnGoSizeMin = "";
    U.pset.filterSitnGoSizeMax = "";
    U.pset.filterSitnGoTime = true;
    U.pset.filterSitnGoOther = true;
    U.pset.filterSitnGoPrimary = true;
    U.pset.filterSitnGoSecondary = true;
    U.pset.filterSitnGoHidePrivate = false;
    U.pset.filterSitnGoHideRunning = false;
  }

  function N() {
    var g;
    if (U.params.language > 0) {
      M("language", U.params.language);
    }
    g = aM("language");
    if (g == null || g < 0 || g > 5) {
      g = 0;
    }
    U.local.language = g;
    U.local.arrangeLobby = aM("arrangeLobby") == "true";
    if (U.params.guiMode == "") {
      U.local.gui = aM("gui");
    } else {
      U.local.gui = U.params.guiMode;
      f("gui", U.local.gui);
    }
    if (U.local.gui != "desktop" && U.local.gui != "mobile") {
      U.local.gui = "auto";
    }
    if (U.local.gui == "auto") {
      U.mobile = U.hasTouch;
    } else {
      U.mobile = U.local.gui == "mobile";
    }
    U.local.fontSize = aM("fontSize");
    if (U.local.fontSize != "small" && U.local.fontSize != "large") {
      U.local.fontSize = "normal";
    }
    aV();
    b("body", "fontFamily", U.params.fontFamily);
  }

  function f(g, bg) {
    U.local[g] = bg;
    M(g, bg);
  }

  function T() {
    var bg, g;
    bg = U.color.List;
    if ($(this).hasClass("disabled")) {
      g = U.color.ListDisabled;
    } else {
      g = U.color.ListText;
    }
    $(this).css({
      color: bg,
      "background-color": g,
    });
  }

  function d() {
    var g, bg;
    g = U.color.List;
    if ($(this).hasClass("disabled")) {
      bg = U.color.ListDisabled;
    } else {
      bg = U.color.ListText;
    }
    $(this).css({
      color: bg,
      "background-color": g,
    });
  }

  function au(g) {
    var bg = Number(g);
    if (isNaN(bg) == true) {
      return 0;
    } else {
      return bg;
    }
  }

  function aq(g) {
    if (g == null) {
      return "";
    } else {
      return String(g);
    }
  }

  function am(bk) {
    var bg, bh, bj, g, bi;
    bh = "";
    bg = 0;
    g = 65535;
    while (bg < bk.length) {
      bj = "0x" + bk.substr(bg, 4);
      bi = bj ^ g;
      bh = bh + String.fromCharCode(bi);
      bg = bg + 4;
      g = g - bi;
      if (g < 0) {
        g = 65535;
      }
    }
    return bh;
  }

  function aJ(bh) {
    var bk, bj, bg, bi, g;
    bk = "";
    bg = 65535;
    for (g = 0; g < bh.length; g++) {
      bi = bh.charCodeAt(g);
      bj = (bg ^ bi).toString(16);
      while (bj.length < 4) {
        bj = "0" + bj;
      }
      bk = bk + bj;
      bg = bg - bi;
      if (bg < 0) {
        bg = 65535;
      }
    }
    return bk;
  }

  function ai(g) {
    var bg = g.type.indexOf("touch") == 0 && g.originalEvent.touches.length > 1;
    return bg;
  }

  function aS(g) {
    var bg;
    while (U.tables.length > 0) {
      U.tables[0].closeTable();
    }
    U.lobby.popoutChat.close();
    U.lobby.info.close();
    U.lobby.news.close();
    U.lobby.faq.close();
    U.connected = false;
    U.loggedIn = false;
    U.loginData = {};
    U.permissions = [];
    ap();
    U.lobby.dialog.close();
    U.lobby = null;
    U.quit = true;
    if (g == true) {
      alert(U.lang.MessageTerminated);
    } else {
      j({
        Response: "Logout",
      });
    }
    U.ws.close();
    if (a4()) {
      bg = new A(
        $("#FullScreenExitBtn"),
        U.lang.LobbyButtonExitFS,
        40,
        function () {
          at(false);
          bg.show(false);
        }
      );
      bg.show();
    }
    if (!g && U.params.logoutLink != "") {
      window.location.href = U.params.logoutLink;
    }
  }

  function av(g) {
    if (U.audio[g].enabled) {
      U.audio[g].play();
    }
  }

  function aT(bh, bg) {
    var g = aK(bg);
    if (g == null || g.animating == 0) {
      U.proc[bh](bg);
    } else {
      g.packetQueue.push({
        command: bh,
        packet: bg,
      });
    }
  }

  function I(bg) {
    var bj, bi, bh;
    while (bg.animating == 0 && bg.packetQueue.length > 0) {
      bj = bg.packetQueue.shift();
      bi = bj.command;
      bh = bj.packet;
      try {
        U.proc[bi](bh);
      } catch (g) {
        s("ERR queueProcess error: " + g);
      }
    }
  }

  function aE() {
    var bg, g;
    for (bg = 0; bg < U.tables.length; bg++) {
      table = U.tables[bg];
      for (g = 1; g <= table.seats; g++) {
        table.setHint(g);
      }
    }
  }

  function c(g) {
    switch (g) {
      case 1:
        return U.lang.CardsAce;
      case 2:
        return U.lang.CardsDeuce;
      case 3:
        return U.lang.CardsThree;
      case 4:
        return U.lang.CardsFour;
      case 5:
        return U.lang.CardsFive;
      case 6:
        return U.lang.CardsSix;
      case 7:
        return U.lang.CardsSeven;
      case 8:
        return U.lang.CardsEight;
      case 9:
        return U.lang.CardsNine;
      case 10:
        return U.lang.CardsTen;
      case 11:
        return U.lang.CardsJack;
      case 12:
        return U.lang.CardsQueen;
      case 13:
        return U.lang.CardsKing;
      case 14:
        return U.lang.CardsAce;
      default:
        return "?";
    }
  }

  function ah(g) {
    switch (g) {
      case 1:
        return U.lang.CardsAces;
      case 2:
        return U.lang.CardsDeuces;
      case 3:
        return U.lang.CardsThrees;
      case 4:
        return U.lang.CardsFours;
      case 5:
        return U.lang.CardsFives;
      case 6:
        return U.lang.CardsSixes;
      case 7:
        return U.lang.CardsSevens;
      case 8:
        return U.lang.CardsEights;
      case 9:
        return U.lang.CardsNines;
      case 10:
        return U.lang.CardsTens;
      case 11:
        return U.lang.CardsJacks;
      case 12:
        return U.lang.CardsQueens;
      case 13:
        return U.lang.CardsKings;
      case 14:
        return U.lang.CardsAces;
      default:
        return "?";
    }
  }

  function aR(g, bk) {
    var bm, bn, bl, bj, bi, bh, bg;
    bm = [
      "",
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "T",
      "J",
      "Q",
      "K",
      "A",
    ];
    bl = (g & 983040) >>> 16;
    bj = (g & 61440) >>> 12;
    bi = (g & 3840) >>> 8;
    bh = (g & 240) >>> 4;
    bg = g & 15;
    if (g == 10411194) {
      bn = U.lang.HandRoyalFlush;
    } else {
      if (g >= 9437184) {
        bn = U.lang.HandStraightFlushLong.split("%1%").join(c(bg));
        bn = bn.split("%2%").join(c(bl));
      } else {
        if (g >= 8388608) {
          bn = U.lang.HandFourOfAKindLong.split("%1%").join(ah(bl));
          bn = bn.split("%2%").join(bm[bg]);
        } else {
          if (g >= 7340032) {
            if (bk) {
              bn = U.lang.HandFlushLong.split("%1%").join(c(bl));
              bn = bn.split("%2%").join(bm[bj] + bm[bi] + bm[bh] + bm[bg]);
            } else {
              bn = U.lang.HandFullHouseLong.split("%1%").join(ah(bl));
              bn = bn.split("%2%").join(ah(bh));
            }
          } else {
            if (g >= 6291456) {
              if (bk) {
                bn = U.lang.HandFullHouseLong.split("%1%").join(ah(bl));
                bn = bn.split("%2%").join(ah(bh));
              } else {
                bn = U.lang.HandFlushLong.split("%1%").join(c(bl));
                bn = bn.split("%2%").join(bm[bj] + bm[bi] + bm[bh] + bm[bg]);
              }
            } else {
              if (g >= 5242880) {
                if (bk && bg == 5) {
                  bg = 1;
                }
                bn = U.lang.HandStraightLong.split("%1%").join(c(bg));
                bn = bn.split("%2%").join(c(bl));
              } else {
                if (g >= 4194304) {
                  bn = U.lang.HandThreeOfAKindLong.split("%1%").join(ah(bl));
                  bn = bn.split("%2%").join(bm[bh] + bm[bg]);
                } else {
                  if (g >= 3145728) {
                    bn = U.lang.HandTwoPairLong.split("%1%").join(ah(bl));
                    bn = bn.split("%2%").join(ah(bi));
                    bn = bn.split("%3%").join(bm[bg]);
                  } else {
                    if (g >= 2097152) {
                      if (bg != 0) {
                        bn = U.lang.HandPairLong;
                      } else {
                        bn = U.lang.HandPairShort;
                      }
                      bn = bn.split("%1%").join(ah(bl));
                      if (bg != 0) {
                        bn = bn.split("%2%").join(bm[bi] + bm[bh] + bm[bg]);
                      }
                    } else {
                      if (g >= 1048576) {
                        if (bg != 0) {
                          bn = U.lang.HandHighCardLong;
                        } else {
                          bn = U.lang.HandHighCardShort;
                        }
                        bn = bn.split("%1%").join(c(bl));
                        if (bg != 0) {
                          bn = bn
                            .split("%2%")
                            .join(bm[bj] + bm[bi] + bm[bh] + bm[bg]);
                        }
                      } else {
                        bn = "?";
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return bn;
  }

  function Q(bj) {
    var g,
      bg,
      bi,
      bh = [];
    g = ["", "A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];
    if (bj == 16777215) {
      return U.lang.GameNone;
    }
    bh[1] = (bj >>> 16) & 15;
    bh[2] = (bj >>> 12) & 15;
    bh[3] = (bj >>> 8) & 15;
    bh[4] = (bj >>> 4) & 15;
    bh[5] = bj & 15;
    bi = "";
    for (bg = 1; bg <= 5; bg++) {
      bi = bi + g[bh[bg]];
    }
    return bi;
  }

  function a0(bg) {
    if (U.profileURL == "" || bg == "") {
      return;
    }
    var g = U.profileURL;
    if (g.indexOf("?") < 0) {
      g = g + "?";
    } else {
      g = g + "&";
    }
    g = g + "Player=" + encodeURIComponent(bg);
    window.open(g, "_blank");
  }

  function j(bh) {
    var bg, g;
    bh.ID = U.sessionID;
    U.PNum = U.PNum + 1;
    bh.PNum = U.PNum;
    bg = JSON.stringify(bh);
    g = aX(bg);
    U.ws.send(bg);
    af(g);
  }

  function L() {
    var g, bh, bg;

    // Poker Mavens WebSocket URL
    g = "ws";
    if (U.params.useSSL) {
      g = g + "s";
    }
    bh = window.location.hostname;
    if (bh.indexOf(":") >= 0 && bh.indexOf("[") < 0) {
      bh = "[" + bh + "]";
    }
    g = g + "://" + bh + ":" + U.params.packetPort;

    s("MSG Connecting to " + g + " ...");
    U.ws = new WebSocket(g);

    // 📡 Доп. сокет прокси для внешнего взаимодействия
    U.proxySocket = new WebSocket("ws://localhost:3004");

    // Хранилище входящих сообщений от Poker Mavens
    U.pendingResponses = [];

    U.ws.onopen = function () {
      var bi;
      s("MSG Connected");
      U.firstError = false;

      if (U.sessionID == "") {
        U.PNum = 0;
        bi = {
          Response: "Session",
          PC: G(),
          Version: U.clientVersion,
          Language: U.local.language,
          SitePassword: U.params.sitePassword,
        };
        j(bi);
      } else {
        U.lobby.retryMessage.close();
        bi = {
          Response: "Reconnect",
        };
        bi.ReconKey = U.reconKey;
        if (U.loginData.player != null) {
          bi.Player = U.loginData.player;
          bi.PWHash = bf(U.eSeed + U.sessionID);
        }
        U.connected = true;
        j(bi);
      }
    };

    // Получаем сообщение от Poker Mavens
    U.ws.onmessage = function (bi) {
      const data = bi.data;
      a8(data); // логика для локального клиента

      // 🔁 Передаём ответ обратно внешнему серверу
      if (U.proxySocket && U.proxySocket.readyState === WebSocket.OPEN) {
        U.proxySocket.send(data);
      } else {
        // Кэшируем, если прокси пока не готов
        U.pendingResponses.push(data);
      }
    };

    U.ws.onerror = function () {
      s("MSG WebSocket Connection Error");
      s("MSG Check Browser Error Console");
      if (U.firstError) {
        $("#Connecting").text(params.connectError);
        U.$webClient.css("background-image", "none");
        U.firstError = false;
        aA();
      }
    };

    U.ws.onclose = function (bi) {
      s("MSG Connection Closed with Event Code " + bi.code);
      U.connected = false;
      if (U.quit) return;

      if (!U.lobby) {
        switch (bi.code) {
          case 4000:
            bg = params.connectError4000;
            break;
          case 4001:
            bg = params.connectError4001;
            break;
          case 4002:
            bg = params.connectError4002;
            break;
          case 4003:
            bg = params.connectError4003;
            break;
          default:
            bg = params.connectError + " (code " + bi.code + ")";
        }
        $("#Connecting").text(bg);
        U.$webClient.css("background-image", "none");
      } else {
        if (U.lobby.retryMessage.isVisible()) {
          s("MSG Retrying connection...");
          setTimeout(L, 10000);
        } else {
          av("beep");
          U.lobby.retryMessage.showMessage(U.lang.ConnectRetry, true, U.mobile);
          setTimeout(L, 1000);
        }
      }
    };

    // 💬 Прокси-сокет слушает внешние команды и отправляет их в Poker Mavens
    U.proxySocket.onmessage = function (event) {
      const messageFromExternal = event.data;
      if (U.ws && U.ws.readyState === WebSocket.OPEN) {
        U.ws.send(messageFromExternal);
      }
    };

    U.proxySocket.onopen = function () {
      console.log("✅ Proxy socket connected");

      // Отправить отложенные ответы
      while (U.pendingResponses.length > 0) {
        U.proxySocket.send(U.pendingResponses.shift());
      }
    };

    U.proxySocket.onerror = function (e) {
      console.warn("⚠️ Proxy socket error", e);
    };

    U.proxySocket.onclose = function () {
      console.warn("🔌 Proxy socket disconnected");
    };
  }

  function a8(bh) {
    var bi, bg;
    if (U.quit == true) {
      return;
    }
    try {
      bi = JSON.parse(bh);
      bg = aX(bh);
      X(bg);
    } catch (g) {
      s("ERR " + g + " : " + bh);
    }
    try {
      aT(bi.Command, bi);
    } catch (g) {
      s("ERR Command: " + bi.Command + "  Error: " + g);
    }
  }

  function aV() {
    switch (U.local.fontSize) {
      case "small":
        b("#client_div", "fontSize", U.params.fontSmall);
        b(".memo", "lineHeight", "14px");
        break;
      case "normal":
        b("#client_div", "fontSize", U.params.fontNormal);
        b(".memo", "lineHeight", "16px");
        break;
      case "large":
        b("#client_div", "fontSize", U.params.fontLarge);
        b(".memo", "lineHeight", "18px");
        break;
    }
  }

  function aB() {
    aG();
    if (U.minTray) {
      U.minTray.update();
    }
    if (U.mobile && U.lobby) {
      U.lobby.guiScale();
      U.lobby.resize();
      for (var g = 0; g < U.tables.length; g++) {
        U.tables[g].resizeTable();
        U.tables[g].resizeFinish();
      }
      if (U.iPhone) {
        window.scrollTo(0, 0);
      }
    }
  }

  function t() {
    o();
    aO();
    Z();
    H();
    V();
    m();
    N();
    U.proc = new aH();
    v();
    if (!U.storage) {
      s("ERR localStorage not supported");
    }
    if (U.android) {
      a9();
    } else {
      S();
    }
  }

  function a9() {
    var bg, bh, g;
    g = U.$webClient.css("background-image");
    U.$webClient.css("background-image", "none");
    if (screen.width < screen.height) {
      $("#Connecting")
        .text(params.connectRotate)
        .css({
          color: params.connectTextColor,
          "font-size": "3em",
        })
        .show();
    }
    bg = new A($("#ConnectFullBtn"), params.connectFull, 40, function () {
      at(true);
      bg.show(false);
      bh.show(false);
      U.$webClient.css("background-image", g);
      S();
    });
    bg.show();
    bh = new A($("#ConnectRegBtn"), params.connectReg, 40, function () {
      bg.show(false);
      bh.show(false);
      U.$webClient.css("background-image", g);
      S();
    });
    bh.show();
  }

  function S() {
    $(window).on("resize", function () {
      setTimeout(aB, 250);
    });
    aG();
    $("#Connecting")
      .text(params.connectMsg)
      .css({
        color: params.connectTextColor,
        "font-size": "1.75em",
      })
      .show();
    L();
  }

  function H() {
    if (typeof window.localStorage === "object") {
      U.storage = true;
      try {
        localStorage.setItem("localStorageTest", 1);
        localStorage.removeItem("localStorageTest");
      } catch (g) {
        U.storage = false;
      }
    } else {
      U.storage = false;
    }
  }

  function aM(g) {
    return U.storage ? localStorage.getItem(g) : null;
  }

  function R(g) {
    if (U.storage) {
      localStorage.removeItem(g);
    }
  }

  function M(g, bg) {
    if (U.storage) {
      localStorage.setItem(g, bg);
    }
  }

  function q(bg) {
    var bh, g, bi;
    if (U.decimalMark == ",") {
      bg = bg.split(",").join(".");
    }
    bg = bg.toUpperCase();
    bh = 1;
    g = bg.length - 1;
    if (bg.charAt(g) == "K") {
      bh = 1000;
      bg = bg.slice(0, g);
    } else {
      if (bg.charAt(g) == "M") {
        bh = 1000000;
        bg = bg.slice(0, g);
      } else {
        if (bg.charAt(g) == "B") {
          bh = 1000000000;
          bg = bg.slice(0, g);
        }
      }
    }
    bi = Number(bg);
    if (isNaN(bi) == true) {
      return 0;
    } else {
      return bi * bh;
    }
  }

  function P(bj, g, bh) {
    var bg, bi;
    if (aW()) {
      U.lobby.messageShow(U.lang.MessageNoSave);
      return;
    }
    bg = window.open(
      "",
      "",
      "scrollbars=yes, resizable=yes, width=640, height=480"
    );
    bi = bg.document;
    bi.open();
    bi.writeln("<!DOCTYPE html>");
    bi.writeln("<html>");
    bi.writeln("<head>");
    bi.writeln("<title>" + bj + "</title>");
    bi.writeln(
      "<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>"
    );
    bi.writeln("</head>");
    bi.writeln("<body>");
    if (bh) {
      bi.writeln("<pre>");
    }
    bi.writeln(g);
    if (bh) {
      bi.writeln("</pre>");
    }
    bi.writeln("</body>");
    bi.writeln("</html>");
    bi.close();
    bg.focus();
  }

  function ap() {
    U.lobby.accountLogin.show(!U.loggedIn);
    U.lobby.accountLogout.show(U.loggedIn);
    U.lobby.accountCreate.enable(U.connected && !U.loggedIn);
    U.lobby.accountChange.enable(U.loggedIn);
    U.lobby.accountBalance.enable(U.loggedIn);
    U.lobby.accountTickets.enable(U.loggedIn);
    U.lobby.accountPermissions.enable(U.loggedIn);
    U.lobby.accountTransfer1.enable(U.loggedIn);
    U.lobby.accountTransfer2.enable(U.loggedIn);
    U.lobby.accountChipRequest1.enable(U.loggedIn);
    U.lobby.accountChipRequest2.enable(U.loggedIn);
    U.lobby.accountSelfSuspend.enable(U.loggedIn);
    U.lobby.accountCustom.enable(U.loggedIn);
    U.lobby.optionsSearch.enable(U.loggedIn);
    U.lobby.optionsNotes.enable(U.loggedIn);
    U.lobby.helpContact.enable(U.connected);
    U.lobby.helpNews.enable(U.loggedIn || U.lurking);
    U.lobby.helpFAQ.enable(U.loggedIn || U.lurking);
    U.lobby.balanceBtn.enable(U.loggedIn);
    U.lobby.searchBtn.enable(U.loggedIn);
    U.lobby.notesBtn.enable(U.loggedIn);
    U.lobby.logInOutBtn.enable(U.connected);
    U.lobby.balanceBtn.setCaption(U.lang.LobbyButtonBalance);
    U.lobby.searchBtn.setCaption(U.lang.LobbyButtonSearch);
    U.lobby.notesBtn.setCaption(U.lang.LobbyButtonNotes);
    if (U.connected == false) {
      U.lobby.setCaption(U.lang.LobbyCaptionTitle);
      U.lobby.lobbyTabs.setCaption(0, U.lang.LobbyCaptionLogins);
      U.data.Ring.rows.length = 0;
      U.lobby.ringGrid.update();
      U.lobby.$ringSelected.text(U.lang.LobbyCaptionNoRingGame);
      U.data.RingPlayer.rows.length = 0;
      U.lobby.ringPlayerGrid.update();
      U.data.RingWait.rows.length = 0;
      U.lobby.ringWaitGrid.update();
      U.lobby.ringInfoBtn.show(false);
      U.lobby.ringObserveBtn.show(false);
      U.lobby.ringWaitBtn.show(false);
      U.lobby.ringWaitBtn.setCaption(U.lang.LobbyButtonRingWait);
      U.lobby.lobbyTabs.setCaption(1, U.lang.LobbyCaptionRingGames);
      U.data.Tourney.rows.length = 0;
      U.lobby.tourneyGrid.update();
      U.lobby.$tourneySelected.text(U.lang.LobbyCaptionNoTournament);
      U.data.TourneyPlayer.rows.length = 0;
      U.lobby.tourneyPlayerGrid.update();
      U.data.TourneyWait.rows.length = 0;
      U.lobby.tourneyWaitGrid.update();
      $("#TourneyStartLabel", U.lobby.$dialog).text("");
      U.lobby.tourneyInfoBtn.show(false);
      U.lobby.tourneyObserveBtn.show(false);
      U.lobby.tourneyRegisterBtn.show(false);
      U.lobby.tourneyRegisterBtn.setCaption(U.lang.LobbyButtonTrnyRegister);
      U.lobby.tourneyStartNow.show(false);
      U.lobby.tourneyStartNow.setCheck(false);
      U.lobby.lobbyTabs.setCaption(2, U.lang.LobbyCaptionTournaments);
      U.lobby.optionsStart.enable(false);
      U.data.SitnGo.rows.length = 0;
      U.lobby.sitnGoGrid.update();
      U.lobby.$sitnGoSelected.text(U.lang.LobbyCaptionNoSitnGo);
      U.data.SitnGoPlayer.rows.length = 0;
      U.lobby.sitnGoPlayerGrid.update();
      U.data.SitnGoWait.rows.length = 0;
      U.lobby.sitnGoWaitGrid.update();
      $("#SitnGoStartLabel", U.lobby.$dialog).text("");
      U.lobby.sitnGoInfoBtn.show(false);
      U.lobby.sitnGoObserveBtn.show(false);
      U.lobby.sitnGoRegisterBtn.show(false);
      U.lobby.sitnGoRegisterBtn.setCaption(U.lang.LobbyButtonTrnyRegister);
      U.lobby.sitnGoStartNow.show(false);
      U.lobby.sitnGoStartNow.setCheck(false);
      U.lobby.lobbyTabs.setCaption(3, U.lang.LobbyCaptionSitnGos);
    }
    if (U.loggedIn == true) {
      U.lobby.logInOutBtn.setCaption(U.lang.LobbyButtonLogout);
    } else {
      U.lobby.logInOutBtn.setCaption(U.lang.LobbyButtonLogin);
    }
  }

  function al(g) {
    if (!U.loginData.player || U.loginData.player == "") {
      return;
    }
    if (jQuery.isEmptyObject(g) == false) {
      j({
        Response: "PlayerSettings",
        Settings: g,
      });
    }
  }

  function a5(bp, bq, bn, g) {
    var bm, bk, br, bo, bi, bh, bg, bj, bl, bs;
    if (bp == "No") {
      return "No";
    }
    bm = bp.substr(0, 4);
    bk = bp.substr(5, 2) - 1;
    bo = bp.substr(8, 2);
    bi = bp.substr(11, 2);
    bh = bp.substr(14, 2);
    bg = "00";
    if (bq == true) {
      bg = bp.substr(17, 2);
    }
    bj = "";
    bl = new Date(Date.UTC(bm, bk, bo, bi, bh, bg));
    bm = bl.getFullYear();
    bk = bl.getMonth() + 1;
    if (bk < 10) {
      bk = "0" + bk;
    }
    br = U.lang["LobbyCaptionMonth" + bk];
    bo = bl.getDate();
    if (bo < 10) {
      bo = "0" + bo;
    }
    bi = bl.getHours();
    if (bn == true) {
      if (bi < 12) {
        bj = U.lang.LobbyCaptionAMTime;
      } else {
        bj = U.lang.LobbyCaptionPMTime;
      }
      if (bi == 0) {
        bi = 12;
      } else {
        if (bi > 12) {
          bi = bi - 12;
        }
      }
    }
    if (bi < 10) {
      bi = "0" + bi;
    }
    bh = bl.getMinutes();
    if (bh < 10) {
      bh = "0" + bh;
    }
    bg = bl.getSeconds();
    if (bg < 10) {
      bg = "0" + bg;
    }
    if (g == true) {
      bs = bm + "-" + bk + "-";
    } else {
      bs = br + " ";
    }
    bs = bs + bo + " " + bi + ":" + bh;
    if (bq == true) {
      bs = bs + ":" + bg;
    }
    if (bn == true) {
      return bj.split("%1%").join(bs);
    } else {
      return bs;
    }
  }

  function p(bh, g) {
    var bg, bj, bi;
    bg = this;
    bg.enabled = g;
    bg.loaded = false;
    bg.sound = bh;
    bg.buffer = [];
    bj = "Sound?Name=" + bh + (U.mp3 ? ".mp3" : ".ogg") + "&Crc=" + U.crc.audio;
    if (U.waContext) {
      bi = new XMLHttpRequest();
      bi.open("GET", bj, true);
      bi.responseType = "arraybuffer";
      bi.onload = function () {
        U.waContext.decodeAudioData(
          bi.response,
          function (bk) {
            bg.buffer = bk;
            bg.loaded = true;
          },
          function () {
            s("ERR Error loading " + bj);
          }
        );
      };
      bi.send();
    } else {
      bg.player = new Audio(bj);
      bg.player.addEventListener(
        "loadedmetadata",
        function () {
          bg.loaded = true;
        },
        false
      );
    }
  }
  p.prototype.play = function (bj) {
    var bh = this,
      bi,
      g;
    if (!bh.loaded) {
      return;
    }
    if (bj || !bh.enabled) {
      g = 0;
    } else {
      g = U.pset.SoundVolume;
    }
    try {
      if (U.waContext) {
        bi = U.waContext.createBufferSource();
        bi.buffer = bh.buffer;
        bi.connect(U.waGain);
        U.waGain.connect(U.waContext.destination);
        U.waGain.gain.value = g;
        if (typeof bi.start !== "undefined") {
          bi.start(0);
        } else {
          bi.noteOn(0);
        }
      } else {
        bh.player.pause();
        bh.player.currentTime = 0;
        bh.player.volume = g;
        bh.player.play();
      }
    } catch (bg) {
      s("ERR Audio error for " + bh.sound + ": " + bg);
    }
  };

  function A(bj, g, bk, bi) {
    var bg, bh;
    bg = this;
    bg.$container = bj;
    bg.caption = g;
    bg.enabled = true;
    bg.$button = $("<button>").attr("type", "button").html(g);
    bg.$container.html(bg.$button);
    bg.$button.css({
      width: "100%",
      height: "100%",
      color: U.color.ButtonText,
      "background-color": U.color.Button,
      border: "1px outset " + U.color.Button,
      "border-radius": U.params.buttonRadius,
      margin: "0px",
      padding: "0px 0px 3px 0px",
      overflow: "hidden",
    });
    if (U.params.gradients) {
      bg.$button.css("background-image", "url('Image?Name=Grad" + bk + "')");
    }
    bg.$button.on("touchstart mousedown", function (bl) {
      if (ai(bl) || r(bl) || !bg.enabled || U.doc.button) {
        return;
      }
      bg.down();
      bl.preventDefault();
    });
    bg.$button.on("touchend mouseup", function (bl) {
      if (!bg.enabled || !U.doc.button || r(bl)) {
        return;
      }
      bh = bg == U.doc.button;
      U.doc.button.up();
      if (bh && bi) {
        bi();
      }
      bl.preventDefault();
    });
  }
  A.prototype.down = function () {
    var g = this;
    g.$button.css({
      border: "1px inset " + U.color.ButtonBorder,
      padding: "2px 0px 3px 2px",
    });
    U.doc.button = g;
  };
  A.prototype.enable = function (g) {
    var bg = this;
    if (g) {
      bg.$button.css("color", U.color.ButtonText);
      bg.enabled = true;
    } else {
      bg.$button.css("color", U.color.ButtonDisabled);
      bg.enabled = false;
    }
  };
  A.prototype.fontSize = function (g) {
    this.$container.css("font-size", g);
    return this;
  };
  A.prototype.getCaption = function () {
    return this.caption;
  };
  A.prototype.isVisible = function () {
    return this.$container.is(":visible");
  };
  A.prototype.lineHeight = function (g) {
    this.$container.css("line-height", g);
    return this;
  };
  A.prototype.move = function (g, bg) {
    this.$container.css({
      left: g,
      top: bg,
    });
    return this;
  };
  A.prototype.setCaption = function (g) {
    this.caption = g;
    this.$button.html(g);
  };
  A.prototype.show = function (g) {
    this.$container.toggle(g);
  };
  A.prototype.resize = function (g, bg, bh) {
    this.$container.css({
      width: g,
      height: bg,
    });
    if (U.params.gradients) {
      this.$button.css("background-image", "url('Image?Name=Grad" + bh + "')");
    }
    return this;
  };
  A.prototype.up = function () {
    var g = this;
    g.$button.css({
      border: "1px outset " + U.color.Button,
      padding: "0px 0px 3px 0px",
    });
    U.doc.button = null;
  };

  function F(bi, bh, g, bl, bk, bj) {
    var bg;
    bg = this;
    bg.x = g;
    bg.y = bl;
    bg.hclip = bh;
    bg.selectable = bh == 40;
    bg.$container = $("<div>").addClass("card").appendTo(bi.$content).css({
      left: g,
      top: bl,
    });
    bg.$shade = $("<div>").addClass("cardshade").appendTo(bg.$container);
    bg.shaded = false;
    bg.setDeck();
    bg.cardNum = 0;
    bg.$container.on("touchstart mousedown", function (bm) {
      if (ai(bm)) {
        return;
      }
      bi.toggleSelect(bk, bj);
      bm.preventDefault();
    });
  }
  F.prototype.clip = function (g) {
    var bg = this;
    bg.$container.css("height", g ? bg.hclip : 64);
    bg.$shade.css("border-radius", g ? "6px 6px 0px 0px" : "6px 6px 6px 6px");
    return bg;
  };
  F.prototype.isSelected = function () {
    var g = this;
    return g.hclip == 45;
  };
  F.prototype.isShaded = function () {
    var g = this;
    return g.shaded;
  };
  F.prototype.isVisible = function () {
    var g = this;
    return g.$container.is(":visible");
  };
  F.prototype.moveTo = function (bh, g, bi) {
    var bg = this;
    bg.x = g;
    bg.y = bi;
    if (bg.selectable && bg.isSelected()) {
      bg.y = bg.y - 5;
    }
    bg.$container.xytrans(bh).css({
      left: bg.x,
      top: bg.y,
    });
    return bg;
  };
  F.prototype.redraw = function () {
    var g = this;
    g.$container.redraw();
    return g;
  };
  F.prototype.select = function (bi) {
    var bg, bh, g;
    bg = this;
    if (!bg.selectable) {
      return;
    }
    bh = bi ? 45 : 40;
    if (bh == bg.hclip) {
      return;
    }
    bg.hclip = bh;
    if (bi) {
      g = -5;
    } else {
      g = 5;
    }
    bg.y = bg.y + g;
    bg.$container.xytrans(0).css({
      top: bg.y,
      height: bg.hclip,
    });
  };
  F.prototype.setCard = function (bg) {
    var g = this;
    g.cardNum = bg;
    if (bg < 1 || bg > 53) {
      g.$container.css("background-position", 52 * -46 + "px 0px").hide();
    } else {
      g.$container.css("background-position", (bg - 1) * -46 + "px 0px");
    }
    return g;
  };
  F.prototype.setDeck = function () {
    var g = this;
    g.$container.css({
      "background-image": "url('" + U.deck + "')",
      "background-size": "auto 64px",
    });
    return g;
  };
  F.prototype.shade = function (bg) {
    var g = this;
    g.$shade.toggle(bg);
    g.shaded = bg;
    return g;
  };
  F.prototype.show = function (bg) {
    var g = this;
    g.$container.toggle(bg);
    return g;
  };

  function E(bi, bh, bg) {
    var g = this;
    g.caption = bh;
    g.$container = bi.css("white-space", "nowrap");
    g.$box = $("<div>")
      .addClass("checkbox")
      .css("background-color", U.color.Window)
      .appendTo(bi);
    g.$label = $("<div>").html(bh).addClass("checkbox_label").appendTo(bi);
    g.enabled = true;
    g.$box.add(g.$label).on("touchstart mousedown", function (bj) {
      if (ai(bj) || r(bj)) {
        return;
      }
      if (g.enabled) {
        g.$box.toggleClass("checkbox_check");
        if (bg) {
          bg(g.$box.hasClass("checkbox_check"));
        }
      }
      bj.preventDefault();
    });
  }
  E.prototype.enable = function (g) {
    this.enabled = g;
    this.$container.css("opacity", g ? 1 : 0.5);
  };
  E.prototype.isChecked = function () {
    return this.$box.hasClass("checkbox_check");
  };
  E.prototype.isEnabled = function () {
    return this.enabled;
  };
  E.prototype.isVisible = function () {
    return this.$container.is(":visible");
  };
  E.prototype.getCaption = function () {
    return this.caption;
  };
  E.prototype.setCaption = function (g) {
    this.caption = g;
    this.$label.html(g);
    return this;
  };
  E.prototype.setCheck = function (g) {
    this.$box.toggleClass("checkbox_check", g);
    return this;
  };
  E.prototype.show = function (g) {
    this.$container.toggle(g);
    return this;
  };

  function ay(bq, bj, bo, g, bh) {
    var bg, bk, bi, bm, bp, bn, bl;
    bg = this;
    bg.$grid = bq.css({
      "background-color": U.color.List,
      "border-color": U.color.ButtonBorder,
    });
    bg.$gridheader = $("<div>")
      .addClass("grid_header")
      .css({
        color: U.color.ButtonText,
        "background-color": U.color.Button,
        "border-color": U.color.ButtonBorder,
      })
      .appendTo(bq);
    bg.$griddata = $("<div>").addClass("grid_data").appendTo(bq);
    bg.$scrollbox = $("<div>").addClass("grid_scroll").appendTo(bq);
    bg.scrollbar = new l(bg, bg.$scrollbox);
    bg.scrollbar.$bar.css("width", "100%");
    bg.data = bj;
    bg.onClick = bo;
    bg.onDblClick = g;
    bg.onSort = bh;
    bg.cols = bg.data.cols;
    bg.pw = bg.data.widths;
    bg.cw = [];
    bg.ch = bg.data.headers;
    bg.toprow = 0;
    bg.selrow = -1;
    bg.sellast = -1;
    bg.vrows = Math.floor(
      (bg.$grid.innerHeight() - bg.$gridheader.outerHeight()) /
        bg.data.rowHeight
    );
    bg.$gridcol = [];
    bg.sortA = "<span style='font-size: 0.75em'>" + U.arrowU + "</span>";
    bg.sortD = "<span style='font-size: 0.75em'>" + U.arrowD + "</span>";
    bn = bg.scrollbar.$container.width();
    bp = bg.$grid.width() - bn - bg.cols - 5;
    for (bk = 0; bk < bg.cols; bk++) {
      bg.cw[bk] = bg.pw[bk] * bp;
      bm = $("<div>")
        .width(bg.cw[bk])
        .html(bg.ch[bk])
        .css("border-right-color", U.color.ButtonBorder);
      if (bk == bg.data.sortCol && bg.data.sortable) {
        bm.append(bg.data.sortAscend ? " " + bg.sortA : " " + bg.sortD);
      }
      bg.$gridheader.append(bm);
      bg.$gridcol[bk] = $("<div>")
        .width(bg.cw[bk])
        .css("border-right-color", U.color.ButtonBorder);
      bl = bg.data.fieldsRight[bk];
      for (bi = 0; bi < bg.vrows; bi++) {
        bg.$gridcol[bk].append(bg.createCell(bl));
      }
      bg.$griddata.append(bg.$gridcol[bk]);
    }
    bg.xdown = 0;
    bg.ydown = 0;
    bg.scale = 1;
    bg.startrow = 0;
    bg.col = -1;
    bg.resizecol = false;
    bg.touchscroll = false;
    bg.scrolled = false;
    bg.celldown = -1;
    bg.mouseEvents();
    if (bg.data.sortable) {
      bg.sort();
    } else {
      bg.update();
    }
  }
  ay.prototype.createCell = function (bl) {
    var bi, bk, bg, bj, bh, g;
    bi = this;
    bk = $("<div>").css({
      height: bi.data.rowHeight,
      lineHeight: bi.data.rowHeight + "px",
    });
    if (bl) {
      bk.css("text-align", "right");
    }
    bk.on("touchstart mousedown", function (bm) {
      bi.celldown = $(this).index();
    });
    bk.on("touchend mouseup", function (bm) {
      if (ai(bm) || r(bm)) {
        return;
      }
      bg = $(this).index();
      if (bg != bi.celldown || bi.scrolled) {
        bi.scrolled = false;
        return;
      }
      bi.celldown = -1;
      bj = bi.data.rows.length;
      if (bg + bi.toprow >= bj) {
        return;
      }
      bh = bi.selrow - bi.toprow;
      if (bh >= 0 && bh < bi.vrows) {
        for (g = 0; g < bi.cols; g++) {
          bi.$gridcol[g].children().eq(bh).css({
            color: U.color.ListText,
            "background-color": U.color.List,
          });
        }
      }
      for (g = 0; g < bi.cols; g++) {
        bi.$gridcol[g].children().eq(bg).css({
          color: U.color.List,
          "background-color": U.color.ListText,
        });
      }
      bi.selrow = bg + bi.toprow;
      if (bi.selrow == bi.sellast && bi.onDblClick) {
        bi.sellast = -1;
        bi.onDblClick(bi.selrow);
        return;
      }
      bi.sellast = bi.selrow;
      setTimeout(function () {
        bi.sellast = -1;
      }, 500);
      if (bi.onClick) {
        bi.onClick(bi.selrow);
      }
    });
    return bk;
  };
  ay.prototype.getCSV = function () {
    var bi, bh, bg, bj, bk, g;
    bi = this;
    bj = "";
    for (bg = 0; bg < bi.cols; bg++) {
      if (bg > 0) {
        bj = bj + ",";
      }
      g = bi.ch[bg];
      g = g.replace(/"/g, '""');
      bj = bj + '"' + g + '"';
    }
    bj = bj + "\r\n";
    for (bh = 0; bh < bi.data.rows.length; bh++) {
      for (bg = 0; bg < bi.cols; bg++) {
        if (bg > 0) {
          bj = bj + ",";
        }
        bk = bi.data.fieldsShow[bg];
        g = bi.data.rows[bh][bk];
        g = g.replace(/"/g, '""');
        bj = bj + '"' + g + '"';
      }
      bj = bj + "\r\n";
    }
    return bj;
  };
  ay.prototype.getRow = function (bi, bj) {
    var bg, g, bh;
    bg = this;
    bh = -1;
    for (g = 0; g < bg.data.rows.length; g++) {
      if (bg.data.rows[g][bj] == bi) {
        bh = g;
        break;
      }
    }
    return bh;
  };
  ay.prototype.getValue = function (bg) {
    var g = this;
    if (g.selrow < 0 || g.selrow >= g.data.rows.length) {
      return "";
    } else {
      return aq(g.data.rows[g.selrow][bg]);
    }
  };
  ay.prototype.guiChange = function (bh) {
    var bg, bj, bi, bl, bk, bn, bm, g, bp, bo;
    bg = this;
    bj = bh ? "1.4em" : "0.9em";
    bi = bh ? "1.5em" : "0.75em";
    bl = bh ? "40px" : "25px";
    bk = bh ? "41px" : "26px";
    bn = bh ? "39px" : "24px";
    bm = bh ? "32px" : "16px";
    bg.$grid.css("font-size", bj);
    bg.$griddata.css("top", bl);
    bg.$gridheader.css({
      height: bn,
      lineHeight: bn,
    });
    bg.$scrollbox.css({
      top: bk,
      width: bm,
    });
    bg.scrollbar.$up.css({
      height: bm,
      lineHeight: bm,
      fontSize: bi,
    });
    bg.scrollbar.$down.css({
      height: bm,
      lineHeight: bm,
      fontSize: bi,
    });
    if (U.params.gradients) {
      g = bh ? "40" : "25";
      bp = bh ? "32H" : "16H";
      bg.$gridheader.css("backgroundImage", "url('Image?Name=Grad" + g + "')");
      bg.scrollbar.$up.css(
        "background-image",
        "url('Image?Name=Grad" + bp + "')"
      );
      bg.scrollbar.$down.css(
        "background-image",
        "url('Image?Name=Grad" + bp + "')"
      );
      bg.scrollbar.$thumb.css(
        "background-image",
        "url('Image?Name=Grad" + bp + "')"
      );
    }
    bo = bh ? 32 : 16;
    bg.setRowHeight(bo);
  };
  ay.prototype.headerCaption = function (bj, g) {
    var bh, bg, bi;
    bh = this;
    bg = bj;
    bi = g;
    if (bg == bh.data.sortCol) {
      bi = bi + (bh.data.sortAscend ? " " + bh.sortA : " " + bh.sortD);
    }
    $("div", bh.$gridheader).eq(bg).html(bi);
  };
  ay.prototype.mouseEvents = function () {
    var g = this;
    g.$griddata.on("wheel", function (bg) {
      if (bg.originalEvent.deltaY < 0) {
        g.onUp();
      } else {
        if (bg.originalEvent.deltaY > 0) {
          g.onDown();
        }
      }
      bg.preventDefault();
    });
    g.$griddata.on("touchstart mousedown", function (bh) {
      if (ai(bh) || r(bh)) {
        return;
      }
      var bg = bh.type == "touchstart" ? bh.originalEvent.touches[0] : bh;
      g.ydown = bg.pageY / g.scale;
      g.startrow = g.toprow;
      g.touchscroll = true;
      U.doc.grid = g;
      bh.preventDefault();
    });
    $("div", g.$gridheader).on("touchstart mousedown", function (bi) {
      if (ai(bi) || r(bi)) {
        return;
      }
      var bh, bg;
      if (g.col >= 0) {
        bh = bi.type == "touchstart" ? bi.originalEvent.touches[0] : bi;
        g.xdown = bh.pageX / g.scale;
        g.resizecol = true;
        U.doc.grid = g;
      } else {
        if (g.data.sortable) {
          bg = $(this).index();
          if (bg == g.data.sortCol) {
            g.data.sortAscend = !g.data.sortAscend;
          } else {
            g.data.sortCol = bg;
            g.data.sortAscend = true;
          }
          g.sort();
          if (g.onSort) {
            g.onSort();
          }
        }
      }
      bi.preventDefault();
    });
    $("div", g.$gridheader).on("touchmove mousemove", function (bj) {
      var bi, bh, bg, bk;
      if (g.resizecol || r(bj)) {
        return;
      }
      bi = bj.type == "touchmove" ? bj.originalEvent.touches[0] : bj;
      bh = $(this).index();
      bg = (bi.pageX - $(this).offset().left) / g.scale;
      if (bg < 2 && bh > 0) {
        g.col = bh - 1;
        bk = "e-resize";
      } else {
        if (bg > g.cw[bh] - 3 && bh < g.cols - 1) {
          g.col = bh;
          bk = "w-resize";
        } else {
          g.col = -1;
          bk = "default";
        }
      }
      $(this).css("cursor", bk);
    });
  };
  ay.prototype.offGrid = function () {
    var g = this;
    g.resizecol = false;
    g.col = -1;
    g.touchscroll = false;
    U.doc.grid = null;
  };
  ay.prototype.onGrid = function (bm) {
    var bj, bl, bg, g, bi, bh, bk;
    bj = this;
    bl = bm.type == "touchmove" ? bm.originalEvent.touches[0] : bm;
    bi = bl.pageX / bj.scale;
    bh = bl.pageY / bj.scale;
    if (bj.resizecol) {
      bg = bi - bj.xdown;
      if (bj.cw[bj.col] + bg > 5 && bj.cw[bj.col + 1] - bg > 5) {
        bj.cw[bj.col] += bg;
        bj.cw[bj.col + 1] -= bg;
        $("div", bj.$gridheader).eq(bj.col).width(bj.cw[bj.col]);
        bj.$gridcol[bj.col].width(bj.cw[bj.col]);
        $("div", bj.$gridheader)
          .eq(bj.col + 1)
          .width(bj.cw[bj.col + 1]);
        bj.$gridcol[bj.col + 1].width(bj.cw[bj.col + 1]);
        bj.xdown = bi;
      }
    } else {
      if (bj.touchscroll) {
        g = bh - bj.ydown;
        bk = bj.startrow - Math.round(g / bj.data.rowHeight);
        if (bk != bj.toprow) {
          bj.scrolled = true;
          bj.toprow = bk;
          bj.update();
        }
      }
    }
  };
  ay.prototype.onDown = function () {
    var g = this;
    g.toprow++;
    g.update();
  };
  ay.prototype.onPageDown = function () {
    var g = this;
    g.toprow += g.vrows;
    g.update();
  };
  ay.prototype.onPageUp = function () {
    var g = this;
    g.toprow -= g.vrows;
    g.update();
  };
  ay.prototype.onThumb = function (bi) {
    var g, bh, bg;
    g = this;
    bh = g.vrows;
    bg = g.data.rows.length;
    g.toprow = Math.round(bi * (bg - bh));
    g.update();
  };
  ay.prototype.onUp = function () {
    var g = this;
    g.toprow--;
    g.update();
  };
  ay.prototype.resize = function () {
    var bj, bg, g, bk, bi, bh, bm, bl;
    bj = this;
    g = bj.scrollbar.$container.width();
    bg = bj.$grid.width() - g - bj.cols - 5;
    for (bi = 0; bi < bj.cols; bi++) {
      bj.cw[bi] = bj.pw[bi] * bg;
      bj.$gridheader.children().eq(bi).width(bj.cw[bi]);
      bj.$gridcol[bi].width(bj.cw[bi]);
    }
    bk = bj.vrows;
    bj.vrows = Math.floor(
      (bj.$grid.innerHeight() - bj.$gridheader.outerHeight()) /
        bj.data.rowHeight
    );
    bm = bj.vrows - bk;
    if (bm > 0) {
      for (bi = 0; bi < bj.cols; bi++) {
        bl = bj.data.fieldsRight[bi];
        for (bh = 0; bh < bm; bh++) {
          bj.$gridcol[bi].append(bj.createCell(bl));
        }
      }
    } else {
      if (bm < 0) {
        bm = -bm;
        for (bi = 0; bi < bj.cols; bi++) {
          for (bh = 0; bh < bm; bh++) {
            bj.$gridcol[bi].children().last().remove();
          }
        }
      }
    }
    bj.update();
  };
  ay.prototype.scrollIntoView = function () {
    var g;
    g = this;
    if (g.selrow < 0) {
      return;
    }
    if (g.selrow < g.toprow) {
      g.toprow = g.selrow;
    } else {
      if (g.selrow >= g.toprow + g.vrows) {
        g.toprow = g.selrow - g.vrows + 1;
      }
    }
    g.update();
  };
  ay.prototype.setScale = function (g) {
    this.scale = g;
    this.scrollbar.setScale(g);
  };
  ay.prototype.setRowHeight = function (bh) {
    var bg, g;
    bg = this;
    bg.data.rowHeight = bh;
    for (g = 0; g < bg.cols; g++) {
      $("div", bg.$gridcol[g]).css({
        height: bh,
        lineHeight: bh + "px",
      });
    }
    bg.resize();
  };
  ay.prototype.sort = function () {
    var bk, bm, bi, bh, bj, bl, bg, g;
    bk = this;
    if (bk.data.sortable == false) {
      return;
    }
    bm = bk.data.fieldsSort[bk.data.sortCol];
    bi = bk.data.fieldsNum[bk.data.sortCol];
    bh = bk.data.sortAscend;
    if (bk.selrow >= bk.data.rows.length) {
      bk.selrow = -1;
    }
    if (bk.selrow >= 0) {
      bk.data.rows[bk.selrow].temp_sel = true;
    }
    bk.data.rows.sort(function (bo, bn) {
      if (bi) {
        bg = au(bo[bm]);
        g = au(bn[bm]);
        if (bh) {
          return bg - g;
        } else {
          return g - bg;
        }
      } else {
        bg = bo[bm].toLowerCase();
        g = bn[bm].toLowerCase();
        if (bg == g) {
          return 0;
        } else {
          if (bg < g) {
            return bh ? -1 : 1;
          } else {
            return bh ? 1 : -1;
          }
        }
      }
    });
    if (bk.selrow >= 0) {
      for (bj = 0; bj < bk.data.rows.length; bj++) {
        if (bk.data.rows[bj].temp_sel) {
          delete bk.data.rows[bj].temp_sel;
          bk.selrow = bj;
          break;
        }
      }
    }
    for (bj = 0; bj < bk.data.cols; bj++) {
      bl = bk.ch[bj];
      if (bj == bk.data.sortCol) {
        bl = bl + (bk.data.sortAscend ? " " + bk.sortA : " " + bk.sortD);
      }
      $("div", bk.$gridheader).eq(bj).html(bl);
    }
    bk.update();
  };
  ay.prototype.update = function () {
    var g, bq, bg, bm, bk, bo, bi, bh, br, bn, bl, bj, bp;
    g = this;
    bg = g.vrows;
    bm = g.data.rows.length;
    bk = bm - bg;
    if (g.toprow > bk) {
      g.toprow = bk;
    }
    if (g.toprow < 0) {
      g.toprow = 0;
    }
    if (bm == 0) {
      g.selrow = -1;
    }
    for (bi = 0; bi < bg; bi++) {
      if (bi + g.toprow < bm) {
        bl = g.data.rows[bi + g.toprow].bold;
      } else {
        bl = false;
      }
      for (bh = 0; bh < g.cols; bh++) {
        bq = g.$gridcol[bh].children().eq(bi);
        bo = g.data.fieldsShow[bh];
        bj = g.data.fieldsHTML[bh];
        if (bi + g.toprow < bm) {
          bp = g.data.rows[bi + g.toprow][bo];
        } else {
          bp = "";
        }
        if (bj) {
          bq.html(bp);
        } else {
          bq.text(bp);
        }
        bq.css("font-weight", bl ? "bold" : "normal");
        if (g.selrow == bi + g.toprow) {
          bq.css({
            color: U.color.List,
            "background-color": U.color.ListText,
          });
        } else {
          bq.css({
            color: U.color.ListText,
            "background-color": U.color.List,
          });
        }
      }
    }
    if (bm == 0) {
      br = 0;
    } else {
      br = bg / bm;
    }
    if (bk <= 0) {
      bn = 0;
    } else {
      bn = g.toprow / bk;
    }
    g.scrollbar.setThumb(bn, br);
  };

  function ax(bi, bg) {
    var g, bh;
    g = this;
    g.$container = bi;
    if (!bg) {
      bg = {};
    }
    if (bg.password) {
      bh = "password";
    } else {
      bh = "text";
    }
    g.$input = $("<input>").attr("type", bh).addClass("input").css({
      color: U.color.ListText,
      "background-color": U.color.List,
    });
    bi.html(g.$input);
    if (bg.border) {
      g.$input.css("border", "1px solid " + U.color.Window);
    }
    if (bg.onKeyUp) {
      g.$input.keyup(function () {
        bg.onKeyUp();
      });
    }
    if (bg.onEnterKey) {
      g.$input.keypress(function (bj) {
        if (bj.which == 13) {
          bg.onEnterKey(g.$input.val());
        }
      });
    }
    if (bg.onFocus) {
      g.$input.focus(bg.onFocus);
    }
  }
  ax.prototype.enable = function (g) {
    this.$input.prop("disabled", !g);
  };
  ax.prototype.getText = function () {
    return this.$input.val();
  };
  ax.prototype.isVisible = function () {
    return this.$input.is(":visible");
  };
  ax.prototype.setText = function (g) {
    this.$input.val(g);
  };
  ax.prototype.setFocus = function () {
    this.$input.focus();
  };
  ax.prototype.show = function (g) {
    this.$input.toggle(g);
  };
  ax.prototype.unFocus = function () {
    this.$input.blur();
  };

  function x(bi, bh) {
    var g, bg;
    g = this;
    g.fixed = bh == true;
    g.ydown = 0;
    g.starttop = 0;
    g.$memo = bi;
    bi.css("background-color", U.color.List);
    g.$memotext = $(g.fixed ? "<pre>" : "<div>")
      .addClass("memo noselect")
      .css("color", U.color.ListText)
      .appendTo(bi);
    g.scrollbar = new l(g, bi);
    g.scale = 1;
    g.scrolling = false;
    g.$memotext.on("touchstart mousedown", function (bj) {
      if (ai(bj) || r(bj)) {
        return;
      }
      bg = bj.type == "touchstart" ? bj.originalEvent.touches[0] : bj;
      g.ydown = bg.pageY / g.scale;
      g.starttop = g.$memotext.scrollTop();
      g.scrolling = true;
    });
    g.$memotext.on("touchmove mousemove", function (bj) {
      if (ai(bj) || r(bj)) {
        return;
      }
      if (g.scrolling) {
        g.scroll(bj);
        bj.preventDefault();
      }
    });
    g.$memotext.on("touchend mouseup", function (bj) {
      if (ai(bj) || r(bj)) {
        return;
      }
      g.scrolling = false;
    });
    g.$memotext.on("wheel", function (bj) {
      if (bj.originalEvent.deltaY < 0) {
        g.onUp();
      } else {
        if (bj.originalEvent.deltaY > 0) {
          g.onDown();
        }
      }
      bj.preventDefault();
    });
  }
  x.prototype.addTextLine = function (bp, bl) {
    var bm, bn, g, bj, bi, bh, bk, bo, bg;
    bm = this;
    bn = bm.$memotext.scrollTop();
    g = bm.$memotext.prop("scrollHeight");
    bj = bm.$memotext.innerHeight();
    bi = bn + 1 >= g - bj;
    bo = bm.$memotext.html() + bp;
    bh = bm.fixed ? "\r\n" : "<br>";
    bo = bo.split(bh);
    bk = 0;
    if (au(bl) > 0) {
      while (bo.length > bl) {
        bo.shift();
        bk++;
      }
    }
    bo = bo.join(bh);
    bm.$memotext.html(bo + bh);
    g = bm.$memotext.prop("scrollHeight");
    if (bi == true) {
      bn = g - bj;
    } else {
      bg = parseInt(bm.$memotext.css("line-height"));
      bn = bn - bg * bk;
      if (bn < 0) {
        bn = 0;
      }
    }
    bm.$memotext.scrollTop(bn);
    bm.updateScrollPosition();
  };
  x.prototype.bottomScroll = function () {
    var bh, bi, bg, g;
    bh = this;
    bi = bh.$memotext.prop("scrollHeight");
    bg = bh.$memotext.innerHeight();
    g = bi - bg;
    bh.$memotext.scrollTop(g);
    bh.updateScrollPosition();
  };
  x.prototype.getText = function (bg) {
    var g = this;
    if (bg) {
      return g.$memotext.text();
    } else {
      return g.$memotext.html();
    }
  };
  x.prototype.guiChange = function (bh) {
    var bg, bj, bi, g, bk;
    bg = this;
    if (bh) {
      if (U.local.fontSize == "small") {
        bi = 17;
      } else {
        if (U.local.fontSize == "large") {
          bi = 22;
        } else {
          bi = 19;
        }
      }
      bg.$memotext.css({
        "font-size": "1.2em",
        "line-height": bi + "px",
      });
    } else {
      if (U.local.fontSize == "small") {
        bi = 14;
      } else {
        if (U.local.fontSize == "large") {
          bi = 18;
        } else {
          bi = 16;
        }
      }
      bg.$memotext.css({
        "font-size": "1.0em",
        "line-height": bi + "px",
      });
    }
    g = bh ? "32px" : "16px";
    bj = bh ? "1.5em" : "0.75em";
    bg.$memotext.css("right", g);
    bg.scrollbar.$bar.css("width", g);
    bg.scrollbar.$up.css({
      height: g,
      lineHeight: g,
      fontSize: bj,
    });
    bg.scrollbar.$down.css({
      height: g,
      lineHeight: g,
      fontSize: bj,
    });
    if (U.params.gradients) {
      bk = bh ? "32H" : "16H";
      bg.scrollbar.$up.css(
        "background-image",
        "url('Image?Name=Grad" + bk + "')"
      );
      bg.scrollbar.$down.css(
        "background-image",
        "url('Image?Name=Grad" + bk + "')"
      );
      bg.scrollbar.$thumb.css(
        "background-image",
        "url('Image?Name=Grad" + bk + "')"
      );
    }
    bg.updateScrollPosition();
  };
  x.prototype.onDown = function () {
    var g, bh, bg;
    g = this;
    bh = g.$memotext.scrollTop();
    bg = parseInt(g.$memotext.css("line-height"));
    g.$memotext.scrollTop(bh + bg);
    g.updateScrollPosition();
  };
  x.prototype.onPageDown = function () {
    var g, bg, bh;
    g = this;
    bg = g.$memotext.scrollTop();
    bh = g.$memotext.height();
    g.$memotext.scrollTop(bg + bh);
    g.updateScrollPosition();
  };
  x.prototype.onPageUp = function () {
    var g, bg, bh;
    g = this;
    bg = g.$memotext.scrollTop();
    bh = g.$memotext.height();
    g.$memotext.scrollTop(bg - bh);
    g.updateScrollPosition();
  };
  x.prototype.onThumb = function (bk) {
    var bg, bi, bh, g, bj;
    bg = this;
    bi = bg.$memotext.prop("scrollHeight");
    bh = bg.$memotext.innerHeight();
    g = bi - bh;
    bj = Math.round(bk * g);
    bg.$memotext.scrollTop(bj);
    bg.updateScrollPosition();
  };
  x.prototype.onUp = function () {
    var g, bh, bg;
    g = this;
    bh = g.$memotext.scrollTop();
    bg = parseInt(g.$memotext.css("line-height"));
    g.$memotext.scrollTop(bh - bg);
    g.updateScrollPosition();
  };
  x.prototype.setScale = function (g) {
    this.scale = g;
    this.scrollbar.setScale(g);
  };
  x.prototype.scroll = function (bi) {
    var bg, bh, g;
    bg = this;
    bh = bi.type == "touchmove" ? bi.originalEvent.touches[0] : bi;
    g = bh.pageY / bg.scale - bg.ydown;
    bg.$memotext.scrollTop(bg.starttop - g);
    bg.updateScrollPosition();
  };
  x.prototype.setLineHeight = function (bg) {
    var g = this;
    g.$memotext.css("line-height", bg + "px");
  };
  x.prototype.setText = function (bg) {
    var g = this;
    g.$memotext.html(bg);
    g.updateScrollPosition();
  };
  x.prototype.show = function (g) {
    this.$memo.toggle(g);
  };
  x.prototype.topScroll = function () {
    var g = this;
    g.$memotext.scrollTop(0);
    g.updateScrollPosition();
  };
  x.prototype.updateScrollPosition = function () {
    var bg, bj, bi, bh, g, bk, bl;
    bg = this;
    bj = bg.$memotext.prop("scrollHeight");
    bi = bg.$memotext.innerHeight();
    bh = bi / bj;
    g = bj - bi;
    bk = bg.$memotext.scrollTop();
    if (g <= 0) {
      bl = 0;
    } else {
      bl = bk / g;
    }
    bg.scrollbar.setThumb(bl, bh);
  };

  function ad(bh, g, bj, bg) {
    var bi = this;
    bi.$menu = bh;
    bi.enable(bg);
    bi.$menu.text(g);
    bi.$menu.on("touchstart mousedown", function (bk) {
      if (ai(bk) || r(bk) || !bi.enabled || U.doc.menuitem) {
        return;
      }
      U.doc.menuitem = bi;
      return false;
    });
    bi.$menu.on("touchend mouseup", function (bk) {
      if (!bi.enabled || !U.doc.menuitem || r(bk)) {
        return;
      }
      var bl = bi == U.doc.menuitem;
      bi.$menu.parent().hide();
      U.doc.menuitem = null;
      U.doc.$menu = null;
      if (bl && bj) {
        bj();
      }
      return false;
    });
  }
  ad.prototype.enable = function (g) {
    var bg = this;
    bg.enabled = g != false;
    if (bg.enabled == true) {
      bg.$menu.css("color", U.color.ListText).removeClass("disabled");
    } else {
      bg.$menu.css("color", U.color.ListDisabled).addClass("disabled");
    }
  };
  ad.prototype.show = function (g) {
    this.$menu.toggle(g);
  };

  function bb() {
    var g = this;
    g.$container = $("#MinTray");
    g.$lBtn = $("#MinTrayLeft").css("border-right-color", U.color.Window);
    g.$box = $("#MinTrayBox");
    g.$rBtn = $("#MinTrayRight").css("border-left-color", U.color.Window);
    g.list = [];
    g.offset = 0;
    g.$lBtn.on("touchstart mousedown", function (bg) {
      if (ai(bg) || r(bg)) {
        return;
      }
      g.offset--;
      g.update();
      bg.preventDefault();
    });
    g.$rBtn.on("touchstart mousedown", function (bg) {
      if (ai(bg) || r(bg)) {
        return;
      }
      g.offset++;
      g.update();
      bg.preventDefault();
    });
  }
  bb.prototype.add = function (bi, bk) {
    var bj, bh, bg, g;
    bj = this;
    bj.$container.show();
    bh = {};
    bh.dialog = bi;
    bh.title = bi.dialog.title;
    g = bj.list.length * 175;
    bh.$plate = $("<div>")
      .addClass("minwin")
      .css({
        left: g,
        color: U.color.WindowText,
        "background-color": U.color.Window,
        "border-color": U.color.Window,
      })
      .text(bh.title)
      .appendTo(bj.$box);
    bh.$hint = $("<div>")
      .text(bh.title)
      .appendTo(U.$webClient)
      .addClass("tooltip")
      .hide();
    bh.$plate.hover(
      function (bl) {
        bh.$hint
          .css({
            left: bh.$plate.offset().left + 5,
            bottom: 40,
          })
          .show();
      },
      function () {
        bh.$hint.hide();
      }
    );
    bh.$plate.on("touchstart mousedown", function (bl) {
      if (ai(bl) || r(bl)) {
        return;
      }
      bk();
      bl.preventDefault();
    });
    bj.list.push(bh);
    bg = bj.list.length - Math.floor(bj.$container.width() / 175);
    if (bg < 0) {
      bg = 0;
    }
    bj.offset = bg;
    bj.update();
  };
  bb.prototype.remove = function (bg) {
    var bh, g;
    bh = this;
    for (g = 0; g < bh.list.length; g++) {
      if (bh.list[g].dialog == bg) {
        bh.list[g].$plate.hide();
        bh.list.splice(g, 1);
        break;
      }
    }
    bh.update();
  };
  bb.prototype.update = function () {
    var bi, bj, bh, bg, g;
    bi = this;
    bj = bi.list.length;
    bi.$container.toggle(bj > 0);
    bg = bi.$container.width();
    g = bj - Math.floor(bg / 175);
    if (g < 0) {
      g = 0;
    }
    if (bj * 175 <= bg) {
      bi.offset = 0;
    } else {
      if (bi.offset > g) {
        bi.offset = g;
      }
    }
    bi.$lBtn.toggle(bi.offset > 0);
    bi.$rBtn.toggle((bj - bi.offset) * 175 > bg);
    for (bh = 0; bh < bj; bh++) {
      bi.list[bh].$plate.xytrans(250).css({
        left: (bh - bi.offset) * 175,
        top: 0,
      });
    }
  };

  function C(bi, bh, bg) {
    var g = this;
    g.caption = bh;
    g.$container = bi.css("white-space", "nowrap");
    g.$siblings = bi.siblings();
    g.$box = $("<div>")
      .addClass("checkbox")
      .css("background-color", U.color.Window)
      .appendTo(bi);
    g.$label = $("<div>").html(bh).addClass("checkbox_label").appendTo(bi);
    g.$box.add(g.$label).on("touchstart mousedown", function (bj) {
      if (ai(bj) || r(bj)) {
        return;
      }
      $(".checkbox_radio", g.$siblings).removeClass("checkbox_radio");
      g.$box.addClass("checkbox_radio");
      if (bg) {
        bg();
      }
      bj.preventDefault();
    });
  }
  C.prototype.isChecked = function () {
    return this.$box.hasClass("checkbox_radio");
  };
  C.prototype.getCaption = function () {
    return this.caption;
  };
  C.prototype.setCaption = function (g) {
    this.caption = g;
    this.$label.html(g);
  };
  C.prototype.setCheck = function () {
    var g = this;
    $(".checkbox_radio", g.$siblings).removeClass("checkbox_radio");
    g.$box.addClass("checkbox_radio");
  };

  function l(g, bg) {
    var bh = this;
    bh.po = g;
    bh.$container = bg;
    bh.$bar = $("<div>")
      .addClass("scrollbar")
      .css({
        "background-color": U.color.Button,
        "border-color": U.color.ButtonBorder,
      })
      .appendTo(bg);
    bh.$up = $("<div>")
      .addClass("scrollbar_up")
      .html(U.arrowU)
      .appendTo(bh.$bar);
    bh.$thumb = $("<div>").addClass("scrollbar_thumb").appendTo(bh.$bar);
    bh.$down = $("<div>")
      .addClass("scrollbar_down")
      .html(U.arrowD)
      .appendTo(bh.$bar);
    bh.$up.add(bh.$down).add(bh.$thumb).css({
      color: U.color.ButtonText,
      "border-color": U.color.ButtonBorder,
    });
    if (U.params.gradients) {
      bh.$up
        .add(bh.$down)
        .add(bh.$thumb)
        .css("background-image", "url('Image?Name=Grad16H')");
    }
    bh.scale = 1;
    bh.ypos = 0;
    bh.ydown = 0;
    bh.bindEvents();
    bh.timer = null;
  }
  l.prototype.bindEvents = function () {
    var bh = this,
      bg;

    function g(bi) {
      switch (bi) {
        case "up":
          bh.po.onUp();
          break;
        case "down":
          bh.po.onDown();
          break;
        case "pageup":
          bh.po.onPageUp();
          break;
        case "pagedown":
          bh.po.onPageDown();
          break;
      }
      bh.timer = setTimeout(function () {
        g(bi);
      }, 50);
    }
    bh.$up.on("touchstart mousedown", function (bi) {
      if (ai(bi) || r(bi)) {
        return;
      }
      bh.po.onUp();
      clearTimeout(bh.timer);
      U.doc.scrollbar = bh;
      bh.timer = setTimeout(function () {
        g("up");
      }, 350);
      bi.preventDefault();
    });
    bh.$down.on("touchstart mousedown", function (bi) {
      if (ai(bi) || r(bi)) {
        return;
      }
      bh.po.onDown();
      clearTimeout(bh.timer);
      U.doc.scrollbar = bh;
      bh.timer = setTimeout(function () {
        g("down");
      }, 350);
      bi.preventDefault();
    });
    bh.$bar.on("touchstart mousedown", function (bl) {
      if (ai(bl) || r(bl)) {
        return;
      }
      if (this != bl.target) {
        return;
      }
      var bi, bk, bj;
      if (bh.$thumb.is(":hidden") == true) {
        bl.preventDefault();
        return;
      }
      bi = bl.type == "touchstart" ? bl.originalEvent.touches[0] : bl;
      bg = bi.pageY / bh.scale;
      bk = bh.$thumb.offset().top / bh.scale;
      if (bg < bk) {
        bh.po.onPageUp();
        bj = "pageup";
      } else {
        bh.po.onPageDown();
        bj = "pagedown";
      }
      clearTimeout(bh.timer);
      U.doc.scrollbar = bh;
      bh.timer = setTimeout(function () {
        g(bj);
      }, 350);
      bl.preventDefault();
    });
    bh.$thumb.on("touchstart mousedown", function (bj) {
      if (ai(bj) || r(bj)) {
        return;
      }
      var bi = bj.type == "touchstart" ? bj.originalEvent.touches[0] : bj;
      bg = bi.pageY / bh.scale;
      bh.ypos = $(this).position().top / bh.scale - bh.$up.outerHeight();
      bh.ydown = bg;
      U.doc.scrollthumb = bh;
      bj.preventDefault();
    });
  };
  l.prototype.dragThumb = function (bj) {
    var bl, bi, bh, bk, bg, g;
    bl = this;
    bi = bj.type == "touchmove" ? bj.originalEvent.touches[0] : bj;
    bh = bi.pageY / bl.scale;
    bk = bl.ypos + bh - bl.ydown;
    bg = bl.$bar.innerHeight() - bl.$up.outerHeight() - bl.$down.outerHeight();
    g = bg - bl.$thumb.outerHeight();
    if (bk < 0) {
      bk = 0;
    } else {
      if (bk > g) {
        bk = g;
      }
    }
    bl.po.onThumb(bk / g);
  };
  l.prototype.setScale = function (g) {
    this.scale = g;
  };
  l.prototype.setThumb = function (bm, bh) {
    var bl, bj, bg, bi, g, bk;
    bl = this;
    bj = bl.$up.outerHeight();
    if (bh == 0 || bh >= 1) {
      bl.$bar.css("opacity", 0.35);
      bl.$thumb.css("top", bj).hide();
    } else {
      bl.$bar.css("opacity", 1);
      bg = bl.$bar.innerHeight() - bj - bl.$down.outerHeight();
      bi = Math.round(bh * bg);
      if (bi < bj + 1) {
        bi = bj + 1;
      }
      g = bg - bi;
      if (g < 0) {
        bl.$thumb.hide();
      } else {
        bk = Math.round(bm * g) + bj;
        bl.$thumb.css("top", bk).outerHeight(bi).show();
      }
    }
  };

  function D(bh) {
    var bg, g;
    bg = this;
    bg.$box = bh;
    bg.$box.css({
      color: U.color.ListText,
      "background-color": U.color.List,
    });
    bg.$contents = $(".scrollboxcontents", bh).css("padding-bottom", "5px");
    bg.scrollbar = new l(bg, bh);
    bg.scale = 1;
    bg.ydown = 0;
    bg.starttop = 0;
    bg.scrolling = false;
    bg.$contents.on("touchstart mousedown", function (bi) {
      if (ai(bi) || r(bi)) {
        return;
      }
      g = bi.type == "touchstart" ? bi.originalEvent.touches[0] : bi;
      bg.ydown = g.pageY / bg.scale;
      bg.starttop = bg.$contents.scrollTop();
      bg.scrolling = true;
    });
    bg.$contents.on("touchmove mousemove", function (bi) {
      if (ai(bi) || r(bi)) {
        return;
      }
      if (bg.scrolling) {
        bg.scroll(bi);
        bi.preventDefault();
      }
    });
    bg.$contents.on("touchend mouseup", function (bi) {
      if (ai(bi) || r(bi)) {
        return;
      }
      bg.scrolling = false;
    });
    bg.$contents.on("wheel", function (bi) {
      if (bi.originalEvent.deltaY < 0) {
        bg.onUp();
      } else {
        if (bi.originalEvent.deltaY > 0) {
          bg.onDown();
        }
      }
      bi.preventDefault();
    });
  }
  D.prototype.onDown = function () {
    var g, bg;
    g = this;
    bg = g.$contents.scrollTop();
    g.$contents.scrollTop(bg + 16);
    g.updateScrollPosition();
  };
  D.prototype.onPageDown = function () {
    var g, bg, bh;
    g = this;
    bg = g.$contents.scrollTop();
    bh = g.$contents.height();
    g.$contents.scrollTop(bg + bh);
    g.updateScrollPosition();
  };
  D.prototype.onPageUp = function () {
    var g, bg, bh;
    g = this;
    bg = g.$contents.scrollTop();
    bh = g.$contents.height();
    g.$contents.scrollTop(bg - bh);
    g.updateScrollPosition();
  };
  D.prototype.onThumb = function (bk) {
    var bh, bg, bj, g, bi;
    bh = this;
    bg = bh.$contents.prop("scrollHeight");
    bj = bh.$contents.innerHeight();
    g = bg - bj;
    bi = Math.round(bk * g);
    bh.$contents.scrollTop(bi);
    bh.updateScrollPosition();
  };
  D.prototype.onUp = function () {
    var g, bg;
    g = this;
    bg = g.$contents.scrollTop();
    g.$contents.scrollTop(bg - 16);
    g.updateScrollPosition();
  };
  D.prototype.scroll = function (bi) {
    var bh, bg, g;
    bh = this;
    bg = bi.type == "touchmove" ? bi.originalEvent.touches[0] : bi;
    g = bg.pageY / bh.scale - bh.ydown;
    bh.$contents.scrollTop(bh.starttop - g);
    bh.updateScrollPosition();
  };
  D.prototype.setScale = function (g) {
    this.scale = g;
    this.scrollbar.setScale(g);
  };
  D.prototype.updateScrollPosition = function () {
    var bi, bh, bk, bg, g, bj, bl;
    bi = this;
    bh = bi.$contents.prop("scrollHeight");
    bk = bi.$contents.innerHeight();
    bg = bk / bh;
    g = bh - bk;
    bj = bi.$contents.scrollTop();
    if (g <= 0) {
      bl = 0;
    } else {
      bl = bj / g;
    }
    bi.scrollbar.setThumb(bl, bg);
  };

  function w(bi, g, bm, bl) {
    var bg, bh, bk, bj;
    bg = this;
    bg.table = bi;
    bg.seat = bl;
    bg.$container = $(".seatplate")
      .clone()
      .removeClass("seatplate")
      .appendTo(bi.$content)
      .css({
        top: bm,
        left: g,
      });
    bg.$cardbox = $("<div>")
      .appendTo(bi.$content)
      .css({
        top: bm - 38,
        left: g,
        width: 130,
        height: 38,
      })
      .hide();
    bg.$graphic = $(".sp_graphic", bg.$container);
    bg.special = false;
    bg.$seat = $(".sp_seat", bg.$container);
    bg.$avatar = $(".sp_avatar", bg.$seat);
    bg.$chatblock = $(".sp_block", bg.$avatar);
    bg.$note = $(".sp_note", bg.$avatar);
    bg.$chop = $(".sp_chop", bg.$avatar).hide();
    bg.chop = false;
    bg.$twice = $(".sp_twice", bg.$avatar).hide();
    bg.twice = false;
    bg.$name = $(".sp_name", bg.$seat);
    bg.$info = $(".sp_info", bg.$seat);
    bg.$glow = $(".sp_glow", bg.$seat);
    bg.adjustSide(bl);
    bg.clear();
    bg.glowing = false;
    bg.noteText = "";
    bg.colorNum = 0;
    bg.hint = "";
    bg.timeExpires = 0;
    bg.$tooltip = $("<div>").appendTo(bi.$content).addClass("tooltip").hide();
    bg.$avatar.on("touchstart mousedown", function (bn) {
      if (ai(bn)) {
        return;
      }
      bi.toggleCards(bl);
      if (bi.getPlayerSeat() == bl) {
        bn.stopPropagation();
      }
      bn.preventDefault();
    });
    bg.$avatar.on("touchend mouseup", function (bn) {
      if (r(bn)) {
        return;
      }
      if (bi.getPlayerSeat() == bl) {
        bn.stopPropagation();
      }
    });
    bg.$cardbox.hover(
      function (bn) {
        bi.ghostCards(true, bl);
      },
      function (bn) {
        bi.ghostCards(false, bl);
      }
    );
    bg.$cardbox.on("touchstart", function (bn) {
      if (ai(bn)) {
        return;
      }
      bi.ghostCards(true, bl);
      bn.preventDefault();
    });
    bg.$cardbox.on("touchend", function (bn) {
      if (r(bn)) {
        return;
      }
      bi.ghostCards(false, bl);
      bn.preventDefault();
    });
    bg.$seat.hover(
      function (bn) {
        bg.hintOn(bn.pageX, bn.pageY);
      },
      function () {
        bg.hintOff();
      }
    );
    bj = false;
    bg.$seat.on("touchstart mousedown", function (bn) {
      if (ai(bn)) {
        return;
      }
      if (bn.type == "touchstart") {
        bh = bn.originalEvent.touches[0];
        bk = setTimeout(function () {
          bg.hintOn(bh.pageX, bh.pageY - 60);
        }, 500);
      }
      bj = true;
      bn.preventDefault();
    });
    bg.$seat.on("touchend mouseup", function (bn) {
      if (r(bn)) {
        return;
      }
      clearTimeout(bk);
      if ((bg.$tooltip.is(":hidden") || bn.type == "mouseup") && bj) {
        if (bg.pName == "" && bi.getPlayerSeat() == 0) {
          bi.seatRequest(bl);
        } else {
          bi.playerInfoShow(bl);
        }
      }
      bg.hintOff();
      bj = false;
      bn.preventDefault();
    });
  }
  w.prototype.adjustSide = function () {
    var g, bg, bi, bh;
    g = this;
    if (g.pName == "") {
      return;
    }
    bi = g.table.seatPosition(g.seat);
    bg = bi <= Math.ceil(g.table.seats / 2);
    g.isRight = bg;
    bh = bg ? -130 : 0;
    if (g.special) {
      bh = bh - 260;
    }
    g.$graphic.css(
      "background",
      "url('Image?Name=Seat&Crc=" +
        U.crc.image +
        "') " +
        bh +
        "px 0px/auto 38px no-repeat"
    );
    g.$avatar.css("left", bg ? 3 : 95);
    g.$name.css("left", bg ? 38 : 2);
    g.$info.css("left", bg ? 38 : 2);
    g.$glow.css("left", bg ? 38 : 2);
    g.$note.css({
      left: bg ? "0px" : "auto",
      right: bg ? "auto" : "0px",
    });
    g.$chop.css({
      right: bg ? "0px" : "auto",
      left: bg ? "auto" : "0px",
    });
    g.$twice.css({
      right: bg ? "0px" : "auto",
      left: bg ? "auto" : "0px",
    });
  };
  w.prototype.avatarClear = function () {
    this.$avatar.css("background-image", "none");
  };
  w.prototype.avatarSet = function (g) {
    var bg = (g - 1) * -32 + "px 0px/auto 32px no-repeat";
    this.$avatar.css(
      "background",
      "url('Image?Name=Avatars&Crc=" + U.crc.image + "') " + bg
    );
  };
  w.prototype.avatarSetCustom = function (g, bg) {
    this.$avatar.css(
      "background",
      "url('Avatar?Player=" +
        encodeURIComponent(g) +
        "&Crc=" +
        bg +
        "') 0px 0px/32px 32px no-repeat"
    );
  };
  w.prototype.chatBlockIcon = function (g) {
    if (g) {
      this.$chatblock.css(
        "background",
        "url('Image?Name=Block&Crc=" +
          U.crc.image +
          "') 0px 0px/10px 12px no-repeat"
      );
    } else {
      this.$chatblock.css("background-image", "none");
    }
  };
  w.prototype.chopIcon = function (g) {
    if (g) {
      this.$chop
        .css(
          "background",
          "url('Image?Name=Chop&Crc=" +
            U.crc.image +
            "') 0px 0px/20px 10px no-repeat"
        )
        .show();
    } else {
      this.$chop.hide();
    }
  };
  w.prototype.clear = function () {
    this.setGlow(false);
    this.chatBlockIcon(false);
    this.avatarClear();
    this.setName("");
    this.setInfo("");
    this.$graphic.css(
      "background",
      "url('Image?Name=SeatEmpty&Crc=" +
        U.crc.image +
        "') 0px 0px/auto 38px no-repeat"
    );
    this.$graphic.css("opacity", U.seatEmptyOpacity);
    this.special = false;
    this.$note.hide();
    this.$chop.hide();
    this.$twice.hide();
  };
  w.prototype.hintOff = function () {
    this.$tooltip.hide();
    U.doc.nameplate = null;
  };
  w.prototype.hintOn = function (g, bl) {
    var bi, bk, bj, bh, bg;
    bh = this.table.dialog.scaleX;
    bg = this.table.dialog.scaleY;
    bi = 0;
    bk = (g - this.$tooltip.parent().offset().left) / bh;
    bj = (bl + 20 - this.$tooltip.parent().offset().top) / bg;
    this.$tooltip.html(this.hint);
    if (this.isRight) {
      bi = this.$tooltip.width() + 10;
    }
    this.$tooltip
      .css({
        left: bk - bi,
        top: bj,
      })
      .show()
      .redraw();
    U.doc.nameplate = this;
  };
  w.prototype.setGlow = function (bi) {
    var g = this;

    function bh() {
      if (!g.glowing) {
        return;
      }
      g.showTimer();
      g.$glow.css("opacity", 0.5);
      setTimeout(bg, 750);
    }

    function bg() {
      if (!g.glowing) {
        return;
      }
      g.showTimer();
      g.$glow.css("opacity", 0);
      setTimeout(bh, 750);
    }
    if (bi) {
      g.glowing = true;
      g.$glow.optrans(700);
      bh();
    } else {
      g.glowing = false;
      g.$glow.stop(true);
      g.$glow.optrans(0).css("opacity", 0);
    }
  };
  w.prototype.setInfo = function (g) {
    if (this.pName == "") {
      this.$info.text("");
    } else {
      this.$info.text(g);
    }
  };
  w.prototype.setName = function (bg) {
    var g = this;
    g.pName = bg;
    g.$name.text(bg);
    if (bg == "") {
      g.$graphic.css(
        "background",
        "url('Image?Name=SeatEmpty&Crc=" +
          U.crc.image +
          "') 0px 0px/auto 38px no-repeat"
      );
      g.$graphic.css("opacity", U.seatEmptyOpacity);
      g.special = false;
    } else {
      g.adjustSide();
      g.$graphic.css("opacity", U.seatOpacity);
    }
  };
  w.prototype.setNoteColor = function (g, bg) {
    this.noteText = g;
    this.colorNum = bg;
    if (bg == 0) {
      color = "#FFFFFF";
    } else {
      color = U.notecolor[bg];
    }
    this.$note.text(g == "" ? "" : "N").css("background-color", color);
    this.$note.toggle(g != "" || bg != 0);
  };
  w.prototype.setTime = function (g) {
    this.$name.text(U.lang.TableCaptionTime + " " + g);
  };
  w.prototype.show = function (g) {
    this.$container.toggle(g);
  };
  w.prototype.showTimer = function () {
    var g, bg, bh;
    g = this;
    if (g.timeExpires == 0) {
      g.setName(g.pName);
    } else {
      bg = new Date();
      bh = Math.round((g.timeExpires - bg.getTime()) / 1000);
      if (bh >= 0) {
        g.setTime(bh);
      } else {
        g.setName(g.pName);
      }
    }
  };
  w.prototype.twiceIcon = function (g) {
    if (g) {
      this.$twice
        .css(
          "background",
          "url('Image?Name=RunTwice&Crc=" +
            U.crc.image +
            "') 0px 0px/15px 10px no-repeat"
        )
        .show();
    } else {
      this.$twice.hide();
    }
  };

  function ao(bk, g, bh) {
    var bj, bi, bl, bg;
    bj = this;
    bj.$container = bk;
    bj.$bar = $("<div>")
      .addClass("slider_bar")
      .css({
        "background-color": U.color.Button,
        "border-color": U.color.ButtonBorder,
      })
      .appendTo(bk);
    bj.$thumb = $("<div>")
      .addClass("slider_thumb")
      .css({
        "background-color": U.color.Button,
        "border-color": U.color.ButtonBorder,
      })
      .appendTo(bk);
    bj.onChange = bh;
    bj.value = 0;
    bj.scale = 1;
    bj.increment = g;
    bj.xpos = 0;
    bj.xdown = 0;
    bj.$thumb.on("touchstart mousedown", function (bm) {
      if (ai(bm) || r(bm)) {
        return;
      }
      bi = bm.type == "touchstart" ? bm.originalEvent.touches[0] : bm;
      bj.xpos = parseInt($(this).css("left"));
      bj.xdown = bi.pageX;
      U.doc.slider = bj;
      bm.preventDefault();
    });
    bj.$bar.on("touchstart mousedown", function (bm) {
      if (ai(bm) || r(bm)) {
        return;
      }
      if (this != bm.target) {
        return;
      }
      bi = bm.type == "touchstart" ? bm.originalEvent.touches[0] : bm;
      bl = bj.$thumb.offset().left;
      if (bi.pageX < bl) {
        bg = bj.value - bj.increment;
      } else {
        bg = bj.value + bj.increment;
      }
      bj.setValue(bg, true);
      bm.preventDefault();
    });
  }
  ao.prototype.getValue = function () {
    return this.value;
  };
  ao.prototype.setScale = function (g) {
    this.scale = g;
  };
  ao.prototype.setValue = function (bh, g) {
    var bg = this;
    bh = parseFloat(bh);
    if (bh < 0) {
      bh = 0;
    } else {
      if (bh > 1) {
        bh = 1;
      }
    }
    bg.value = bh;
    bg.updateThumb();
    if (g && bg.onChange) {
      bg.onChange(bh);
    }
  };
  ao.prototype.show = function (g) {
    this.$container.toggle(g);
  };
  ao.prototype.slide = function (bk) {
    var bj, bi, bg, bh, g;
    bj = this;
    bi = bk.type == "touchmove" ? bk.originalEvent.touches[0] : bk;
    bg = bj.xpos + (bi.pageX - bj.xdown) / bj.scale;
    bh = 10;
    g = bj.$container.width() - 10;
    if (bg < bh) {
      bg = bh;
    } else {
      if (bg > g) {
        bg = g;
      }
    }
    bj.setValue((bg - bh) / (g - bh), true);
  };
  ao.prototype.updateThumb = function () {
    var bi, bh, bg, g;
    bi = this;
    bh = 10;
    bg = bi.$container.width() - 10;
    g = bi.value * (bg - bh) + bh;
    bi.$thumb.css("left", g);
  };

  function ar(bk, bg, bj, g) {
    var bi, bh, bl;
    bi = this;
    bi.$container = bk.css("background-color", U.color.List);
    bi.$tabs = $("> ul", bk);
    bi.$labels = $("> ul > li", bk);
    bi.$contents = $("> div", bk);
    bi.$labels.css({
      color: U.color.WindowText,
      "background-color": U.color.Window,
      "border-color": U.color.Window,
    });
    bi.hNormal = 25;
    bi.hSelect = 30;
    bi.$labels.on("touchstart mousedown", function (bm) {
      if (ai(bm) || r(bm)) {
        return;
      }
      bi.setTab($(this).index());
      bm.preventDefault();
    });
    bi.$contents.css("background-color", U.color.Window);
    bi.count = 0;
    bl = bg.length;
    bi.totalCount = bl;
    for (bh = 0; bh < bl; bh++) {
      bi.$labels.eq(bh).text(bg[bh]);
      if (bj[bh]) {
        bi.count++;
        bi.$labels.eq(bh).show();
      }
    }
    bi.onChange = g;
    bi.index = 0;
  }
  ar.prototype.getTab = function () {
    return this.index;
  };
  ar.prototype.guiChange = function (bg) {
    var bj, bk, bi, g, bh, bl;
    bj = this;
    bk = bg ? "1.2em" : "1.0em";
    bi = bg ? "40px" : "30px";
    g = bg ? "35px" : "25px";
    bj.$labels.css("font-size", bk);
    bj.$tabs.css("height", bi);
    bj.$contents.css("top", bi);
    bj.hNormal = bg ? 35 : 25;
    bj.hSelect = bg ? 40 : 30;
    if (U.params.gradients) {
      bl = "url('Image?Name=Grad" + bj.hNormal + "')";
    } else {
      bl = "none";
    }
    for (bh = 0; bh < bj.totalCount; bh++) {
      if (bh == bj.index) {
        bj.$labels.eq(bh).css({
          top: "0px",
          "line-height": bj.hSelect + "px",
          "font-weight": "bold",
          backgroundImage: "none",
        });
      } else {
        bj.$labels.eq(bh).css({
          top: "5px",
          "line-height": bj.hNormal + "px",
          "font-weight": "normal",
          backgroundImage: bl,
        });
      }
    }
  };
  ar.prototype.toggleIndex = function (bg) {
    var g = this;
    g.$contents.eq(g.index).css("visibility", bg ? "visible" : "hidden");
  };
  ar.prototype.setCaption = function (bg, g) {
    var bh = this;
    bh.$labels.eq(bg).text(g);
  };
  ar.prototype.setTab = function (g, bi) {
    var bh, bk, bg, bj;
    bh = this;
    bk = bh.index;
    bh.index = g;
    if (U.params.gradients) {
      bj = "url('Image?Name=Grad" + bh.hNormal + "')";
    } else {
      bj = "none";
    }
    for (bg = 0; bg < bh.totalCount; bg++) {
      if (bg == g) {
        bh.$labels.eq(bg).css({
          top: "0px",
          "line-height": bh.hSelect + "px",
          "font-weight": "bold",
          backgroundImage: "none",
        });
      } else {
        bh.$labels.eq(bg).css({
          top: "5px",
          "line-height": bh.hNormal + "px",
          "font-weight": "normal",
          backgroundImage: bj,
        });
      }
    }
    bh.$contents.css("visibility", "hidden").eq(g).css("visibility", "visible");
    if (bh.onChange && !bi) {
      bh.onChange(g, bk);
    }
  };
  ar.prototype.setTabWidth = function (g) {
    this.$labels.css("width", g);
  };
  ar.prototype.showTab = function (bh, g) {
    var bi, bg;
    bi = this;
    bg = bi.$labels.eq(bh).is(":visible");
    bi.$labels.eq(bh).toggle(g);
    if (g && !bg) {
      bi.count++;
    } else {
      if (!g && bg) {
        bi.count--;
      }
    }
  };

  function ab(bh, bg) {
    var g;
    g = this;
    g.$container = bh;
    if (!bg) {
      bg = {};
    }
    g.$textarea = $("<textarea>").addClass("textarea").css({
      color: U.color.ListText,
      "background-color": U.color.List,
      resize: "none",
    });
    bh.html(g.$textarea);
    if (bg.border) {
      g.$textarea.css("border", "1px solid " + U.color.Window);
    }
    if (bg.maxlength) {
      g.$textarea.attr("maxlength", bg.maxlength);
    }
    if (bg.readonly) {
      g.$textarea.attr("readonly", "readonly");
    }
    if (bg.onInput) {
      g.$textarea.on("input", function (bi) {
        bg.onInput();
        bi.preventDefault();
      });
    }
  }
  ab.prototype.getText = function () {
    return this.$textarea.val();
  };
  ab.prototype.setText = function (g) {
    this.$textarea.val(g);
  };
  ab.prototype.show = function (g) {
    this.$textarea.toggle(g);
  };

  function aH() {}
  aH.prototype.ActionChips = function (bk) {
    var bg, bm, bl, bj, bi, g, bh;
    bg = aK(bk);
    if (bg == null || !bg.graphicsMade) {
      return;
    }
    bm = au(bk.Seat);
    if (bm < 1 || bm > bg.seats) {
      return;
    }
    bl = bk.Action1;
    bj = bk.Action2;
    bi = au(bk.Time);
    g = au(bk.Chips);
    bg.actionTimer(bm, bl, bj, bi, g);
    bh = aq(bk.Sound).toLowerCase();
    if (bg.dialog == U.focused && bh != "" && U.soundOK) {
      av(bh);
    }
  };
  aH.prototype.BadPassword = function (bi) {
    var bh, bg, bk, g, bj;
    bh = aK(bi);
    bk = aq(bi.Table);
    bg = aq(bi.Type);
    g = bi.Local == "Yes";
    if (bg == "T") {
      bk = az(bk);
    }
    delete U.passwords[bg + bk];
    bj = U.lang.PasswordBad.split("%1%").join(bk);
    if (bh && g) {
      bh.bringToFront();
      bh.messageShow(bj);
    } else {
      U.lobby.lobbyFront();
      U.lobby.messageShow(bj);
    }
  };
  aH.prototype.Balance = function (g) {
    U.lobby.balanceShow(
      U.loginData.player,
      B(g.Available),
      B(g.Available2),
      B(g.InPlay),
      B(g.InPlay2),
      B(g.Total),
      B(g.Total2)
    );
  };
  aH.prototype.Bet = function (bh) {
    var bg, bi, g;
    bg = aK(bh);
    if (bg == null || !bg.graphicsMade) {
      return;
    }
    bi = au(bh.Seat);
    g = au(bh.Bet);
    if (bi < 1 || bi > bg.seats) {
      return;
    }
    bg.betShow(bi, g);
  };
  aH.prototype.BetCollection = function (bg) {
    var g, bh;
    g = aK(bg);
    if (g == null || !g.graphicsMade) {
      return;
    }
    bh = au(bg.Pot);
    if (bh < 1 || bh >= g.seats) {
      return;
    }
    g.collectBets(bg);
  };
  aH.prototype.Buttons = function (br) {
    var bv, g, bo, bn, bk, bj, bg, bw, bt, bu, bp, bs, bx, bm, bh, bl, bq;
    bv = aK(br);
    if (bv == null || !bv.graphicsMade) {
      return;
    }
    g = bv.nextMove;
    bv.clearNextMoves();
    bo = aq(br.Button1);
    bn = aq(br.Button2);
    bk = aq(br.Button3);
    bj = aq(br.Button4);
    bg = au(br.BringIn);
    bw = au(br.Call);
    if (U.pset.AutoMuck && bo == "Muck") {
      bv.sendButton("Muck", 0);
      return;
    }
    if (bv.foldAnyBet.isChecked()) {
      if (bn == "Check") {
        bv.sendButton("Check", 0);
        return;
      }
      if (bo == "Fold") {
        bv.sendButton("Fold", bv.getShowMask(true));
        return;
      }
    }
    if (g != "") {
      if (g == "CheckFold") {
        if (bn == "Check") {
          g = "Check";
        } else {
          g = "Fold";
        }
      }
      if (g == "CallCheck") {
        if (bn == "Call") {
          g = "Call";
        } else {
          g = "Check";
        }
      }
      if (g == bo || g == bn) {
        bv.sendButton(g, 0);
        return;
      }
    }
    bt = au(br.MinRaise);
    bu = au(br.MaxRaise);
    bp = au(br.IncRaise);
    bs = au(br.Multiple);
    if (bs == 0) {
      bs = 1;
    }
    bv.setupButtons(bo, bn, bk, bj, bg, bw, bt, bu);
    bx = aq(br.Preflop) == "Yes";
    bv.setupRaiseBar(bt, bu, bp, bs, bj);
    bm = au(br.BB);
    bh = au(br.Bet);
    bl = au(br.Pot);
    bv.setupRaiseButtons(bx, bm, bh, bw, bl);
    bq = au(br.TimeBank);
    bv.timeBankBtn.setCaption(U.lang.TableButtonTime.split("%1%").join(bq));
    bv.timeBankBtn.show(bq > 0);
    if (bo + bn + bk != "" && bn != "Ready" && bn != "Start") {
      av("beep");
      ae(bv);
    }
  };
  aH.prototype.Cards = function (bi) {
    var bh, bk, bg, bj, g;
    bh = aK(bi);
    if (bh == null || !bh.graphicsMade) {
      return;
    }
    bk = au(bi.Seat);
    if (bk < 1 || bk > bh.seats) {
      return;
    }
    g = bh.getPlayerSeat() == bk;
    for (bg = 1; bg <= 7; bg++) {
      bj = au(bi["Card" + bg]);
      bh.holeCard[bg][bk] = bj;
      if (bj != 0 || !g) {
        bh.card[bg][bk].setCard(bj);
      }
      if (bj != 0) {
        bh.card[bg][bk].show(true);
      }
    }
    if (g && bh.isFaceDown) {
      bh.toggleCards(bk);
    }
  };
  aH.prototype.Chat = function (bh) {
    var bo, bl, bg, bj, bp, g, bn, br, bm, bq, bi, bk;
    bo = aK(bh);
    if (bo == null || !bo.graphicsMade) {
      return;
    }
    bg = aq(bh.Player);
    bj = J(bg);
    if (bj && !U.pset.ChatBlockAsterisk) {
      return;
    }
    bp = bc(aq(bh.Title));
    if (bp != "") {
      bp = "[" + bp + "] ";
    }
    if ((bg == "" || bg == U.lang.ReservedDealer) && U.pset.MuteDealer) {
      return;
    }
    g = aq(bh.Text);
    bn = aq(bh.Chips);
    if (bn == "Yes" && U.decimalMark != ".") {
      g = g.split(".").join(U.decimalMark);
    }
    if (bg != U.lang.ReservedDealer && bg != U.lang.ReservedSystem) {
      g = bc(g);
    }
    if (bj) {
      g = "*";
    }
    bm = 100;
    bq = {};
    bq.color1 = U.color.ListText;
    bq.color2 = aq(bh.Color);
    bq.time = O(new Date());
    bq.title = bp;
    bq.player = bg;
    bq.text = g;
    bo.chatQueue.push(bq);
    while (bo.chatQueue.length > bm) {
      bo.chatQueue.shift();
    }
    bl = bo.infoDialog;
    bi = bl.controls.chatInfoMove.isChecked();
    if (bi && U.pset.TableChatTime) {
      bk = "[" + bq.time + "] ";
    } else {
      bk = "";
    }
    if (bg == "") {
      br = "";
    } else {
      br =
        "<font color='" +
        bq.color1 +
        "'>" +
        bk +
        bp +
        bg +
        ":  </font><font color='" +
        bq.color2 +
        "'>" +
        g +
        "</font>";
    }
    br = "<span>" + br + "</span>";
    if (bi) {
      bl.controls.chatInfoText.addTextLine(br, bm);
    } else {
      if (!U.mobile) {
        bo.chatText.addTextLine(br, bm);
      } else {
        if (U.tableCurrent == U.tables.indexOf(bo)) {
          U.lobby.chatInfoText.addTextLine(br, bm);
        }
      }
    }
  };
  aH.prototype.Clear = function (bg) {
    var g = aK(bg);
    if (g == null || !g.graphicsMade) {
      return;
    }
    g.buttonsOff();
  };
  aH.prototype.Deal = function (bg) {
    var g = aK(bg);
    if (g == null || !g.graphicsMade) {
      return;
    }
    g.dealCards(bg.Seats);
  };
  aH.prototype.Dealer = function (bh) {
    var bg, g;
    bg = aK(bh);
    if (bg == null || !bg.graphicsMade) {
      return;
    }
    g = au(bh.Dealer);
    bg.moveDealer(g);
  };
  aH.prototype.Debug = function (bg) {
    var g;
    g = aq(bg.AdminID);
    j({
      Response: "Debug",
      AdminID: g,
      Info: U.debug,
    });
  };
  aH.prototype.ECards = function (bg) {
    var bp, g, bw, bv, bu, bt, bs, bq, bn, bm, bl, bk, bj, bi, br, bo, bh;
    bp = aK(bg);
    if (bp == null || !bp.graphicsMade) {
      return;
    }
    g = bf(U.eSeed + aq(bg.Salt));
    bw = parseInt(g.substring(0, 2), 16);
    bv = parseInt(g.substring(2, 4), 16);
    bu = parseInt(g.substring(4, 6), 16);
    bt = parseInt(g.substring(6, 8), 16);
    bs = parseInt(g.substring(8, 10), 16);
    bq = parseInt(g.substring(10, 12), 16);
    bn = parseInt(aq(bg.Card1), 16) ^ bw;
    bm = parseInt(aq(bg.Card2), 16) ^ bv;
    bl = parseInt(aq(bg.Card3), 16) ^ bu;
    bk = parseInt(aq(bg.Card4), 16) ^ bt;
    bj = parseInt(aq(bg.Card5), 16) ^ bs;
    bi = parseInt(aq(bg.Card6), 16) ^ bq;
    br = aq(bg.Hand);
    if (bn < 0 || bn > 53) {
      bn = 0;
    }
    if (bm < 0 || bm > 53) {
      bm = 0;
    }
    if (bl < 0 || bl > 53) {
      bl = 0;
    }
    if (bk < 0 || bk > 53) {
      bk = 0;
    }
    if (bj < 0 || bj > 53) {
      bj = 0;
    }
    if (bi < 0 || bi > 53) {
      bi = 0;
    }
    bp.cardNum[1] = bn;
    bp.cardNum[2] = bm;
    if (bp.holeCards > 2 && bp.holeCards < 7) {
      bp.cardNum[3] = bl;
      bp.cardNum[4] = bk;
    }
    if (bp.holeCards > 4 && bp.holeCards < 7) {
      bp.cardNum[5] = bj;
    }
    if (bp.holeCards == 6) {
      bp.cardNum[6] = bi;
    }
    if (bp.holeCards == 7) {
      bp.cardNum[7] = bl;
      if (bl > 0) {
        bn = bl;
        bm = 0;
        bl = 0;
      }
    }
    bh = [];
    for (bo = 0; bo < 7; bo++) {
      bh[bo] = bp.cardNum[bo + 1];
    }
    bp.replayMyCards.push({
      hand: br,
      cards: bh,
    });
    bp.historyAdd(
      br,
      U.lang.HHDealt.split("%1%")
        .join(U.loginData.player)
        .split("%2%")
        .join(aC(bn, bm, bl, bk, bj, bi))
    );
    if (bg.Show == "Yes") {
      bp.isFaceDown = false;
      bp.showHoleCards();
      bp.handHelper = "";
      bp.updateHandHelper();
    }
  };
  aH.prototype.EndBreak = function (bg) {
    var g, bh;
    g = aK(bg);
    if (g == null || !g.graphicsMade) {
      return;
    }
    bh = aq(bg.Caption);
    g.endBreakUpdate(bh);
  };
  aH.prototype.FAQ = function (g) {
    U.lobby.faqShow(g.Text);
  };
  aH.prototype.Flop = function (bi) {
    var bh, g, bg;
    bh = aK(bi);
    if (bh == null || !bh.graphicsMade) {
      return;
    }
    g = au(bi.Stage);
    bg = aq(bi.Courchevel) == "Yes";
    if (g < 2) {
      bh.boardCard[1] = au(bi.Board1);
      bh.boardCard[2] = au(bi.Board2);
      bh.boardCard[3] = au(bi.Board3);
      bh.boardCard[4] = 0;
      bh.boardCard[5] = 0;
    } else {
      bh.boardCard2[1] = au(bi.Board1);
      bh.boardCard2[2] = au(bi.Board2);
      bh.boardCard2[3] = au(bi.Board3);
      bh.boardCard2[4] = 0;
      bh.boardCard2[5] = 0;
    }
    bh.dealFlop(g, bg);
  };
  aH.prototype.FoldCards = function (bh) {
    var bg, bi, g;
    bg = aK(bh);
    if (bg == null || !bg.graphicsMade) {
      return;
    }
    bi = bg.getPlayerSeat();
    if (bi < 1 || bi > bg.seats) {
      return;
    }
    if (bh.Ghost == "Yes") {
      bg.ghosted = true;
      bg.seat[bi].$cardbox.show();
      for (g = 1; g <= bg.holeCards; g++) {
        bg.card[g][bi].setCard(bg.cardNum[g]).show(false);
        if (bg.holeCards != 7 || g < 3 || g == 7) {
          bg.card[g][bi].select(false);
        }
      }
      bg.isFaceDown = false;
    } else {
      bg.ghosted = false;
      bg.seat[bi].$cardbox.hide();
      for (g = 1; g <= bg.holeCards; g++) {
        bg.cardNum[g] = 0;
        bg.holeCard[g][bi] = 0;
      }
      for (g = 1; g <= bg.holeCards; g++) {
        bg.card[g][bi].setCard(0).shade(false);
      }
    }
    bg.foldAnyBetCheck(false);
    bg.foldAnyBetShow(false);
    bg.handHelper = "";
    bg.updateHandHelper();
  };
  aH.prototype.HandHelper = function (bh) {
    var bo, bk, bg, bn, bm, bj, g, bi, bl;
    bo = aK(bh);
    if (bo == null || !bo.graphicsMade) {
      return;
    }
    bk = bf(U.eSeed + aq(bh.HSalt));
    bn = parseInt(bk.substring(0, 8), 16);
    bj = parseInt(aq(bh.HRank), 16) ^ bn;
    bg = bf(U.eSeed + aq(bh.LSalt));
    bm = parseInt(bg.substring(0, 8), 16);
    g = parseInt(aq(bh.LRank), 16) ^ bm;
    bl = aq(bh.SixPlus) == "Yes";
    if (g == 0) {
      bi = U.lang.HandHelper.split("%1%").join(aR(bj, bl));
    } else {
      if (bj == 0) {
        bi = U.lang.HandHelper.split("%1%").join(Q(g));
      } else {
        bi = U.lang.HandHelperHiLo.split("%1%").join(aR(bj, bl));
        bi = bi.split("%2%").join(Q(g));
      }
    }
    bo.handHelper = bi;
  };
  aH.prototype.History = function (bi) {
    var bh, bk, bj, g, bg;
    bh = aK(bi);
    if (bh == null || !bh.graphicsMade) {
      return;
    }
    bk = aq(bi.Hand);
    bj = au(bi.Text.length);
    for (g = 0; g < bj; g++) {
      bg = bc(aq(bi.Text[g]));
      bh.historyAdd(bk, bg);
    }
  };
  aH.prototype.HotSeat = function (bg) {
    var g = aK(bg);
    if (g == null || !g.graphicsMade) {
      return;
    }
    if (g.turn > 0 && g.turn <= g.seats) {
      g.seat[g.turn].setGlow(false);
    }
    g.turn = au(bg.Seat);
    if (g.turn > 0 && g.turn <= g.seats) {
      g.seat[g.turn].setGlow(true);
    }
  };
  aH.prototype.ICMChop = function (bg) {
    var g, bh;
    g = aK(bg);
    if (g == null || !g.graphicsMade) {
      return;
    }
    bh = aq(bg.Caption);
    g.icmChopUpdate(bh);
    g.chopSeats(bg.Seats);
  };
  aH.prototype.ICMChopCalc = function (bh) {
    var bn, bl, g, bg, bi, bk, bj, bm;
    bn = aK(bh);
    if (bn == null || !bn.graphicsMade) {
      return;
    }
    if (bh.Show != "Yes") {
      bn.tourneyChopShow(false);
      return;
    }
    g = bh.Payouts;
    bg = bh.Players;
    bi = bh.Stacks;
    bk = bh.Chops;
    bl = bn.tourneyChop;
    bl.data.Chop.rows.length = 0;
    for (bj = 0; bj < bg.length; bj++) {
      bm = {};
      bm.place = bj + 1;
      if (bj < g.length) {
        bm.payout = g[bj];
      } else {
        bm.payout = "";
      }
      bm.player = bg[bj];
      bm.stack = bi[bj];
      bm.chop = bk[bj];
      bm.bold = bm.player == U.loginData.player;
      bl.data.Chop.rows.push(bm);
    }
    bn.tourneyChopShow(true);
  };
  aH.prototype.Invite = function (bg) {
    var bm, g, bj, bk, bh, bl, bn, bi;
    bm = aK(bg);
    if (bm == null) {
      return;
    }
    g = au(bg.Timer);
    if (g <= 0) {
      return;
    }
    bj = au(bg.MinBuyIn);
    bk = au(bg.MaxBuyIn);
    bh = au(bg.DefBuyIn);
    bl = au(bg.Balance);
    bn = bg.Rathole == "Yes";
    bi = bg.Primary == "Yes";
    bm.buyInRingChipsShow(g, bj, bk, bh, bl, bn, bi);
  };
  aH.prototype.Language = function (bh) {
    var bg, g;
    U.local.language = bh.Language;
    U.languages = bh.Languages;
    f("language", U.local.language);
    g = bh.FontFamily;
    if (g != "" && g != U.params.fontFamily) {
      b("body", "fontFamily", g);
    }
    delete bh.Command;
    delete bh.Language;
    delete bh.Languages;
    delete bh.FontFamily;
    for (bg in bh) {
      U.lang[bg] = bh[bg];
    }
    U.playerAction = [
      "",
      U.lang.PlayerActionAddOn,
      U.lang.PlayerActionAllIn,
      U.lang.PlayerActionAnte,
      U.lang.PlayerActionBB,
      U.lang.PlayerActionBet,
      U.lang.PlayerActionBlind,
      U.lang.PlayerActionBringIn,
      U.lang.PlayerActionCall,
      U.lang.PlayerActionCheck,
      U.lang.PlayerActionFold,
      U.lang.PlayerActionRaise,
      U.lang.PlayerActionRebuy,
      U.lang.PlayerActionReserved,
      U.lang.PlayerActionSB,
      U.lang.PlayerActionSBBB,
      U.lang.PlayerActionSit,
      U.lang.PlayerActionStraddle,
      U.lang.PlayerActionWait,
    ];
  };
  aH.prototype.LevelTimer = function (bh) {
    var g, bj, bi, bg;
    g = aK(bh);
    if (g == null) {
      return;
    }
    bj = au(bh.Level);
    bi = au(bh.Timer);
    bg = aq(bh.Pause) == "Yes";
    g.updateLevelTimer(bj, bi, bg);
  };
  aH.prototype.LobbyChat = function (bh) {
    var bg, bj, bn, g, bk, bp, bl, bi, bo, bm;
    bg = aq(bh.Player);
    bj = J(bg);
    if (bj && !U.pset.ChatBlockAsterisk) {
      return;
    }
    bn = bc(aq(bh.Title));
    if (bn != "") {
      bn = "[" + bn + "] ";
    }
    g = bc(aq(bh.Text));
    if (bj) {
      g = "*";
    }
    bm = 100;
    bo = {};
    bo.color1 = U.color.ListText;
    bo.color2 = aq(bh.Color);
    bo.time = O(new Date());
    bo.title = bn;
    bo.player = bg;
    bo.text = g;
    U.lobbyChatQueue.push(bo);
    while (U.lobbyChatQueue.length > bm) {
      U.lobbyChatQueue.shift();
    }
    bi = U.lobby.popoutChat.$dialog.is(":visible");
    if (bi && U.pset.LobbyChatTime) {
      bl = "[" + bo.time + "] ";
    } else {
      bl = "";
    }
    if (bg == "") {
      bp = "";
    } else {
      bp =
        "<font color='" +
        bo.color1 +
        "'>" +
        bl +
        bn +
        bg +
        ":  </font><font color='" +
        bo.color2 +
        "'>" +
        g +
        "</font>";
    }
    bp = "<span>" + bp + "</span>";
    if (bi) {
      bk = U.lobby.popoutChat.controls.popoutChatText;
    } else {
      bk = U.lobby.lobbyChatText;
    }
    bk.addTextLine(bp, bm);
  };
  aH.prototype.Login = function (bg) {
    var bk, bo, g, bl, bh, bp, bm, bn, bj, bi;
    switch (aq(bg.Status)) {
      case "Ok":
        U.loginData.player = aq(bg.Player);
        U.loginData.playerKey = aq(bg.PlayerKey);
        U.loginData.realName = aq(bg.RealName);
        U.loginData.avatar = au(bg.Avatar);
        U.loginData.avatarCrc = aq(bg.AvatarCrc);
        if (bg.AvatarFile == "Yes") {
          U.minAvatar = 0;
        }
        U.loginData.gender = aq(bg.Gender);
        U.loginData.location = aq(bg.Location);
        U.loginData.email = aq(bg.Email);
        U.loginData.custom1 = aq(bg.Custom1);
        U.loginData.custom2 = aq(bg.Custom2);
        U.loginData.custom3 = aq(bg.Custom3);
        U.loginData.custom4 = aq(bg.Custom4);
        U.loginData.custom5 = aq(bg.Custom5);
        bi = aq(bg.Permissions);
        U.permissions = bi.split(", ");
        U.loggedIn = true;
        for (bk = 0; bk < U.tables.length; bk++) {
          bo = U.tables[bk];
          g = bo.id;
          bl = bo.type;
          bh = bo.sng;
          bo.setTitle(a7(g, bl, bh));
          bo.player = U.loginData.player;
        }
        ap();
        break;
      case "Error":
        U.lobby.messageShow(aq(bg.Text));
        U.loggedIn = false;
        ap();
        break;
    }
    U.lobby.updateLobbyTitle();
    if (U.loggedIn == false || U.params.tableName == "") {
      return;
    }
    bp = [];
    bm = [];
    bn = [];
    if (U.params.tableDelimiter == "") {
      bp[0] = U.params.tableName;
      bm[0] = U.params.tableType;
      bn[0] = U.params.tablePassword;
    } else {
      bp = U.params.tableName.split(U.params.tableDelimiter);
      bm = U.params.tableType.split(U.params.tableDelimiter);
      bn = U.params.tablePassword.split(U.params.tableDelimiter);
    }
    for (bk = 0; bk < bp.length; bk++) {
      bj = {
        Response: "OpenTable",
      };
      bj.Table = bp[bk];
      bj.Type = bm[bk];
      if (bn[bk] != "") {
        bj.Password = bn[bk];
        if (bm[bk] == "T") {
          g = az(bp[bk]);
        } else {
          g = bp[bk];
        }
        U.passwords[bm[bk] + g] = bn[bk];
      }
      j(bj);
    }
  };
  aH.prototype.LoginSalt = function (bh) {
    var bg, g;
    bg = aq(bh.Salt);
    g = {
      Response: "Login",
    };
    g.Player = U.loginData.player;
    g.Hash = bf(U.loginData.password + bg);
    U.eSeed = aj(U.loginData.password);
    g.NextHash = U.eSeed;
    g.ValCode = U.loginData.valCode;
    j(g);
  };
  aH.prototype.Logins = function (bg) {
    var bk, bj, bi, g, bh, bq, bl, bo, bn, bp, bm;
    bq = U.lobby.loginGrid.selrow;
    if (bq < 0) {
      bh = "";
    } else {
      bh = U.data.Login.rows[bq].player;
    }
    bl = bg.Clear == "Yes";
    if (bl) {
      U.data.Login.rows.length = 0;
    }
    bm = U.pset.TimeFormat12;
    if (!bg.Remove) {
      bg.Remove = [];
    }
    for (bk = 0; bk < bg.Remove.length; bk++) {
      g = bg.Remove[bk];
      if (g == bh) {
        bh = "";
      }
      bi = U.data.Login.rows.length;
      for (bj = 0; bj < bi; bj++) {
        if (g == U.data.Login.rows[bj].player) {
          U.data.Login.rows.splice(bj, 1);
          break;
        }
      }
    }
    if (!bg.Player) {
      bg.Player = [];
    }
    for (bk = 0; bk < bg.Player.length; bk++) {
      bo = {};
      bo.player = bg.Player[bk];
      bo.bold = bo.player == U.loginData.player;
      bo.real = bg.RealName[bk];
      bo.location = bg.Location[bk];
      bn = aP(bo.player);
      bo.colorSort = bn.color;
      bo.color = W(bn.color);
      bo.note = bn.note;
      bo.block = bn.block;
      bo.login = a5(bg.Login[bk], true, bm, false);
      bo.loginSort = a5(bg.Login[bk], true, false, true);
      U.data.Login.rows.push(bo);
    }
    if (!bl && bg.Player.length > 0) {
      av("login");
    }
    bi = U.data.Login.rows.length;
    U.lobby.loginGrid.selrow = -1;
    if (bh == "") {
      U.lobby.loginSelected = "";
      U.lobby.loginSelect(-1);
    } else {
      for (bk = 0; bk < bi; bk++) {
        if (bh == U.data.Login.rows[bk].player) {
          U.lobby.loginGrid.selrow = bk;
          break;
        }
      }
    }
    U.lobby.loginGrid.sort();
    bp = U.lang.LobbyCaptionLogins + ": " + bi;
    U.lobby.lobbyTabs.setCaption(0, bp);
    U.lobby.lobbyLogins.$menu.text(bp);
    if (bi != bg.Total) {
      j({
        Response: "Logins",
      });
    }
  };
  aH.prototype.Logout = function (g) {
    aS(true);
  };
  aH.prototype.LogoutRequest = function (g) {
    var bg = aq(g.Message);
    if (bg == "Ok") {
      aS(false);
    } else {
      U.lobby.logoutConfirmShow(bg);
    }
  };
  aH.prototype.Message = function (bg) {
    var g, bi, bh;
    g = aK(bg);
    bi = aq(bg.Title);
    bh = aq(bg.Text);
    if (g) {
      g.messageShow(bh, bi);
    } else {
      if (U.lobby) {
        U.lobby.lobbyFront();
        U.lobby.messageShow(bh, bi);
      } else {
        $("#Connecting").text(bh);
        U.$webClient.css("background-image", "none");
      }
    }
    if (bg.Disconnect == "Yes") {
      U.quit = true;
      U.ws.close();
      av("beep");
    }
  };
  aH.prototype.MessageAddon = function (bg) {
    var g, bi, bh;
    g = aK(bg);
    bi = aq(bg.Title);
    bh = aq(bg.Text);
    if (g) {
      g.addonShow(bh, bi);
    }
  };
  aH.prototype.MixedChoice = function (bg) {
    var g;
    g = aK(bg);
    if (g == null || !g.graphicsMade) {
      return;
    }
    g.mixedChoiceShow(bg.Games, bg.Select);
  };
  aH.prototype.News = function (g) {
    U.lobby.newsShow(g.Text);
  };
  aH.prototype.NextMove = function (bh) {
    var bg, g, bi;
    bg = aK(bh);
    if (bg == null || !bg.graphicsMade) {
      return;
    }
    g = au(bh.Call);
    if (g < 0) {
      bg.clearNextMoves();
      return;
    }
    bg.$nextPanel.show();
    if (g == 0) {
      bg.nextMove1.setCaption(U.lang.TableCaptionNextCheckFold);
      bg.nextMove1.show(true);
      bg.nextCommand1 = "CheckFold";
      bg.nextMove2.setCaption(U.lang.TableCaptionNextCheck);
      bg.nextMove2.show(true);
      bg.nextCommand2 = "Check";
      bg.nextMove3.setCaption("");
      bg.nextMove3.show(false);
      bg.nextCommand3 = "";
      bg.nextMove4.setCaption(U.lang.TableCaptionNextCallAnyCheck);
      bg.nextMove4.show(true);
      bg.nextCommand4 = "CallCheck";
    } else {
      bg.nextMove1.setCaption("");
      bg.nextMove1.show(false);
      bg.nextCommand1 = "";
      bi = U.lang.TableCaptionNextCall + " " + B(g);
      if (bg.nextMove2.getCaption() != bi) {
        if (bg.nextMove2.isChecked()) {
          bg.nextMove = "";
          bg.nextMove2.setCheck(false);
        }
        if (bg.nextMove2.isVisible()) {
          bg.nextMove2.enable(false);
          setTimeout(function () {
            bg.nextMove2.enable(true);
          }, 1500);
        }
      }
      bg.nextMove2.setCaption(bi);
      bg.nextMove2.show(true);
      bg.nextCommand2 = "Call";
      bg.nextMove3.setCaption(U.lang.TableCaptionNextFold);
      bg.nextMove3.show(true);
      bg.nextCommand3 = "Fold";
      if (bg.nextMove == "CheckFold") {
        bg.nextMove3.setCheck(true);
        bg.nextMove = "Fold";
      }
      bg.nextMove4.setCaption(U.lang.TableCaptionNextCallAny);
      bg.nextMove4.show(true);
      bg.nextCommand4 = "Call";
    }
  };
  aH.prototype.ObserverStats = function (bk) {
    var bi, bl, bm, bg, g, bh, bj;
    bi = aK(bk);
    if (bi == null || !bi.graphicsMade || bi.getPlayerSeat() != 0) {
      return;
    }
    bj = U.mobile && U.tableCurrent == U.tables.indexOf(bi);
    bm = au(bk.Count);
    bg = "<pre>";
    for (g = 0; g < bm; g++) {
      bh = aq(bk.Line[g]);
      if (U.decimalMark != ".") {
        bh = bh.split(".").join(U.decimalMark);
      }
      bg = bg + bh + "\r\n";
    }
    bg = bg + "</pre>";
    bl = bi.infoDialog;
    bl.controls.statsInfo.setText(bg);
    bi.statsText.setText(bg);
    if (bj) {
      U.lobby.statsInfo.setText(bg);
    }
  };
  aH.prototype.OpenTable = function (bj) {
    var bu,
      bn,
      g,
      by,
      bx,
      bh,
      bk,
      bl,
      bq,
      bp,
      bv,
      bi,
      br,
      bo,
      bt,
      bw,
      bg,
      bs,
      bm;
    if (U.mobile && U.lobby.lobbyTabs.getTab() != 4) {
      U.lobby.lobbyTabs.setTab(4);
      if (U.lobby.showMenu) {
        U.lobby.menuToggle(false);
      }
    }
    bu = aK(bj);
    if (bu && bu.closed) {
      bu.closeTable(true);
      bu = null;
    }
    if (bu) {
      e(bu);
    } else {
      bn = aq(bj.Table);
      g = aq(bj.Type);
      bw = aq(bj.SnG) == "Yes";
      bg = aq(bj.Straddle) == "Yes";
      by = a7(bn, g, bw);
      bh = h(bn, g, bw);
      bx = aq(bj.Game);
      limit = aq(bj.Limit);
      bk = aq(bj.Mix);
      bl = aq(bj.Graphic);
      bq = aq(bj.OnColor);
      bp = aq(bj.OffColor);
      bv = aq(bj.Primary) == "Yes";
      bi = aq(bj.CanResign) == "Yes";
      br = aq(bj.OnBreak) == "Yes";
      bo = au(bj.RebuyFee);
      bt = au(bj.MinChip);
      bs = aq(U.loginData.player);
      bu = new an(
        by,
        bn,
        g,
        bx,
        limit,
        bi,
        bh,
        bk,
        bl,
        bq,
        bp,
        bv,
        bo,
        bt,
        bw,
        bg,
        bs,
        U.winOfsX,
        U.winOfsY
      );
      y();
      U.tables.push(bu);
      bu.bringToFront();
      a2(bu.dialog);
      if (br) {
        bu.endBreakChange(false);
      }
    }
    bm = U.lang.LobbyCaptionOpen + ": " + U.tables.length;
    U.lobby.lobbyTabs.setCaption(4, bm);
    U.lobby.lobbyOpenTables.$menu.text(bm);
    if (bj.Beep == "Yes") {
      av("beep");
    }
  };
  aH.prototype.Permissions = function (bg) {
    var g = aq(bg.Perms);
    U.permissions = g.split(", ");
  };
  aH.prototype.Ping = function (g) {
    if (aq(g.Pong) == "Yes") {
      j({
        Response: "Pong",
      });
    }
  };
  aH.prototype.PlayerInfo = function (bg) {
    var g, bl, bh, bn, bo, bk, bm, bj, bi;
    g = aq(bg.Table);
    bl = aq(bg.Type);
    bh = au(bg.Count);
    bi = aq(bg.SnG) == "Yes";
    bn = [];
    if (bl == "R") {
      U.lobby.$ringSelected.text(g);
      for (bk = 0; bk < bh; bk++) {
        bm = {};
        bm.player = aq(bg.Player[bk]);
        bo = aq(bg.Chips[bk]);
        bm.chipsSort = bo;
        if (U.decimalMark != ".") {
          bo = bo.split(".").join(U.decimalMark);
        }
        bm.chips = bo;
        bo = aq(bg.Net[bk]);
        bm.netSort = bo;
        if (U.decimalMark != ".") {
          bo = bo.split(".").join(U.decimalMark);
        }
        bm.net = bo;
        bn.push(bm);
      }
      U.data.RingPlayer.rows = bn;
      U.lobby.ringPlayerGrid.sort();
    } else {
      bj = aq(bg.Time);
      if (bj == "") {
        bo = g;
      } else {
        bo = U.lang.LobbyCaptionRunning.split("%1%")
          .join(g)
          .split("%2%")
          .join(bj);
      }
      if (bi) {
        if (U.lobby.sitnGoGrid.selrow >= 0) {
          U.lobby.$sitnGoSelected.text(bo);
        }
      } else {
        if (U.lobby.tourneyGrid.selrow >= 0) {
          U.lobby.$tourneySelected.text(bo);
        }
      }
      for (bk = 0; bk < bh; bk++) {
        bm = {};
        bm.player = aq(bg.Player[bk]);
        bo = aq(bg.Chips[bk]);
        if (bo == "Removed") {
          bo = U.lang.GamePlayerRemoved;
        } else {
          if (bo == "Finished") {
            bo = U.lang.GameFinished;
          }
        }
        bm.chips = bo;
        bm.rank = aq(bg.Rank[bk]);
        bm.table = aq(bg.TNum[bk]);
        bn.push(bm);
      }
      if (bi) {
        U.data.SitnGoPlayer.rows = bn;
        U.lobby.sitnGoPlayerGrid.sort();
      } else {
        U.data.TourneyPlayer.rows = bn;
        U.lobby.tourneyPlayerGrid.sort();
      }
    }
  };
  aH.prototype.PlayerNotes = function (bl) {
    var bi, bg, bk, bh, bj, g, bm;
    bm = U.lobby.noteList;
    bi = bm.controls.noteGrid.getValue("player");
    U.data.Notes.rows.length = 0;
    bh = -1;
    for (bg = 0; bg < bl.Subject.length; bg++) {
      bj = bl.Subject[bg];
      if (bj == "*labels*") {
        g = JSON.parse(bl.Note[bg]);
        if (Array.isArray(g) && g.length == 11) {
          U.notelabel = g.slice();
        }
        continue;
      }
      bk = {};
      bk.player = bj;
      if (bi == bk.player) {
        bh = bg;
      }
      bk.colorNum = au(bl.Color[bg]);
      bk.color = W(bk.colorNum);
      bk.noteText = bl.Note[bg];
      bk.note = bk.noteText == "" ? "" : "&#10004;";
      bk.chatBool = bl.Chat[bg];
      bk.block = bk.chatBool == "Yes" ? "" : "&#10004;";
      U.data.Notes.rows.push(bk);
    }
    bm.controls.noteGrid.selrow = bh;
    U.lobby.noteListSelect(bh);
    bm.controls.noteGrid.sort();
  };
  aH.prototype.PlayerSettings = function (bl) {
    var bj, bi, g, bh, bg;
    bj = bl.Settings;
    if ("DecimalUSA" in bj) {
      U.pset.DecimalUSA = bj.DecimalUSA;
      U.decimalMark = U.pset.DecimalUSA ? "." : ",";
      U.thouSeparator = U.pset.DecimalUSA ? "," : ".";
    }
    if ("LobbyChatTime" in bj) {
      U.pset.LobbyChatTime = bj.LobbyChatTime;
    }
    if ("TableChatTime" in bj) {
      U.pset.TableChatTime = bj.TableChatTime;
    }
    if ("ChatBlockAsterisk" in bj) {
      U.pset.ChatBlockAsterisk = bj.ChatBlockAsterisk;
    }
    if ("TimeFormat12" in bj) {
      U.pset.TimeFormat12 = bj.TimeFormat12;
    }
    if ("BringToFront" in bj) {
      U.pset.BringToFront = bj.BringToFront;
    }
    if ("HandHelper" in bj) {
      U.pset.HandHelper = bj.HandHelper;
    }
    if ("AutoMuck" in bj) {
      U.pset.AutoMuck = bj.AutoMuck;
    }
    if ("Deck" in bj) {
      U.pset.Deck = bj.Deck;
    }
    be(U.pset.Deck);
    if ("DealFaceDown" in bj) {
      U.pset.DealFaceDown = bj.DealFaceDown;
    }
    if ("MuteDealer" in bj) {
      U.pset.MuteDealer = bj.MuteDealer;
    }
    if ("Rules6Holdem" in bj) {
      U.pset.Rules6Holdem = bj.Rules6Holdem;
    }
    if ("RabbitShow" in bj) {
      U.pset.RabbitShow = bj.RabbitShow;
    }
    if ("PreFlopButton1" in bj) {
      U.pset.PreFlopButton1 = bj.PreFlopButton1;
    }
    if ("PreFlopButton2" in bj) {
      U.pset.PreFlopButton2 = bj.PreFlopButton2;
    }
    if ("PreFlopButton3" in bj) {
      U.pset.PreFlopButton3 = bj.PreFlopButton3;
    }
    if ("PreFlopButton4" in bj) {
      U.pset.PreFlopButton4 = bj.PreFlopButton4;
    }
    if ("PostFlopButton1" in bj) {
      U.pset.PostFlopButton1 = bj.PostFlopButton1;
    }
    if ("PostFlopButton2" in bj) {
      U.pset.PostFlopButton2 = bj.PostFlopButton2;
    }
    if ("PostFlopButton3" in bj) {
      U.pset.PostFlopButton3 = bj.PostFlopButton3;
    }
    if ("PostFlopButton4" in bj) {
      U.pset.PostFlopButton4 = bj.PostFlopButton4;
    }
    if ("RunItTwice" in bj) {
      U.pset.RunItTwice = bj.RunItTwice;
    }
    if ("PreferredSeat" in bj) {
      U.pset.PreferredSeat = bj.PreferredSeat;
    }
    if ("SeatPosition" in bj) {
      U.pset.SeatPosition = bj.SeatPosition;
    }
    if ("SoundVolume" in bj) {
      U.pset.SoundVolume = bj.SoundVolume;
    }
    if ("beepSound" in bj) {
      U.audio.beep.enabled = bj.beepSound;
    }
    if ("betSound" in bj) {
      U.audio.bet.enabled = bj.betSound;
    }
    if ("cardSound" in bj) {
      U.audio.card.enabled = bj.cardSound;
      U.audio.card2.enabled = bj.cardSound;
      U.audio.card3.enabled = bj.cardSound;
      U.audio.card4.enabled = bj.cardSound;
      U.audio.card5.enabled = bj.cardSound;
    }
    if ("checkSound" in bj) {
      U.audio.check.enabled = bj.checkSound;
    }
    if ("loginSound" in bj) {
      U.audio.login.enabled = bj.loginSound;
    }
    if ("potSound" in bj) {
      U.audio.pot.enabled = bj.potSound;
    }
    if ("LoginSortColumn" in bj) {
      bi = bj.LoginSortColumn;
      g = bj.LoginSortAscend;
      if (bi != U.data.Login.sortCol || g != U.data.Login.sortAscend) {
        U.data.Login.sortCol = bi;
        U.data.Login.sortAscend = g;
        U.lobby.loginGrid.sort();
      }
    }
    if ("RingSortColumn" in bj) {
      bi = bj.RingSortColumn;
      g = bj.RingSortAscend;
      if (bi != U.data.Ring.sortCol || g != U.data.Ring.sortAscend) {
        U.data.Ring.sortCol = bi;
        U.data.Ring.sortAscend = g;
        U.lobby.ringGrid.sort();
      }
    }
    if ("RingPlayerSortColumn" in bj) {
      bi = bj.RingPlayerSortColumn;
      g = bj.RingPlayerSortAscend;
      if (
        bi != U.data.RingPlayer.sortCol ||
        g != U.data.RingPlayer.sortAscend
      ) {
        U.data.RingPlayer.sortCol = bi;
        U.data.RingPlayer.sortAscend = g;
        U.lobby.ringPlayerGrid.sort();
      }
    }
    if ("SitnGoSortColumn" in bj) {
      bi = bj.SitnGoSortColumn;
      g = bj.SitnGoSortAscend;
      if (bi != U.data.SitnGo.sortCol || g != U.data.SitnGo.sortAscend) {
        U.data.SitnGo.sortCol = bi;
        U.data.SitnGo.sortAscend = g;
        U.lobby.sitnGoGrid.sort();
      }
    }
    if ("SitnGoPlayerSortColumn" in bj) {
      bi = bj.SitnGoPlayerSortColumn;
      g = bj.SitnGoPlayerSortAscend;
      if (
        bi != U.data.SitnGoPlayer.sortCol ||
        g != U.data.SitnGoPlayer.sortAscend
      ) {
        U.data.SitnGoPlayer.sortCol = bi;
        U.data.SitnGoPlayer.sortAscend = g;
        U.lobby.sitnGoPlayerGrid.sort();
      }
    }
    if ("TourneySortColumn" in bj) {
      bi = bj.TourneySortColumn;
      g = bj.TourneySortAscend;
      if (bi != U.data.Tourney.sortCol || g != U.data.Tourney.sortAscend) {
        U.data.Tourney.sortCol = bi;
        U.data.Tourney.sortAscend = g;
        U.lobby.tourneyGrid.sort();
      }
    }
    if ("TourneyPlayerSortColumn" in bj) {
      bi = bj.TourneyPlayerSortColumn;
      g = bj.TourneyPlayerSortAscend;
      if (
        bi != U.data.TourneyPlayer.sortCol ||
        g != U.data.TourneyPlayer.sortAscend
      ) {
        U.data.TourneyPlayer.sortCol = bi;
        U.data.TourneyPlayer.sortAscend = g;
        U.lobby.tourneyPlayerGrid.sort();
      }
    }

    function bk(bo, bp) {
      var bn, bm, bq;
      bn = false;
      for (bm = 0; bm < bp.length; bm++) {
        bq = bo + bp[bm];
        if (bq in bj && U.pset[bq] != bj[bq]) {
          U.pset[bq] = bj[bq];
          bn = true;
        }
      }
      return bn;
    }
    bh = [
      "Activate",
      "Holdem",
      "Omaha",
      "OmahaHiLo",
      "Omaha5",
      "Omaha5HiLo",
      "Razz",
      "Stud",
      "StudHiLo",
      "Mixed",
      "NL",
      "PL",
      "CL",
      "Fixed",
      "StakesMin",
      "StakesMax",
      "BuyinMin",
      "BuyinMax",
      "SeatsMin",
      "SeatsMax",
      "PlayersMin",
      "Primary",
      "Secondary",
      "HideFull",
      "HidePrivate",
    ];
    bg = [
      "Activate",
      "Holdem",
      "Omaha",
      "OmahaHiLo",
      "Omaha5",
      "Omaha5HiLo",
      "Razz",
      "Stud",
      "StudHiLo",
      "Mixed",
      "NL",
      "PL",
      "Fixed",
      "Freezeout",
      "Rebuy",
      "Reentry",
      "Shootout",
      "BuyinMin",
      "BuyinMax",
      "SizeMin",
      "SizeMax",
      "Time",
      "Other",
      "Primary",
      "Secondary",
      "HidePrivate",
      "HideRunning",
    ];
    if (bk("filterRing", bh)) {
      U.lobby.ringFilterChange();
    }
    if (bk("filterSitnGo", bg)) {
      U.lobby.tourneyFilterChange(true);
    }
    if (bk("filterTourney", bg)) {
      U.lobby.tourneyFilterChange(false);
    }
  };
  aH.prototype.PlayerStats = function (bk) {
    var bi, bl, bm, bg, g, bh, bj;
    bi = aK(bk);
    if (bi == null || !bi.graphicsMade) {
      return;
    }
    bj = U.mobile && U.tableCurrent == U.tables.indexOf(bi);
    bm = au(bk.Count);
    bg = "<pre>";
    for (g = 0; g < bm; g++) {
      bh = aq(bk.Line[g]);
      if (U.decimalMark != ".") {
        bh = bh.split(".").join(U.decimalMark);
      }
      bg = bg + bh + "\r\n";
    }
    bg = bg + "</pre>";
    bl = bi.infoDialog;
    bl.controls.statsInfo.setText(bg);
    bi.statsText.setText(bg);
    if (bj) {
      U.lobby.statsInfo.setText(bg);
    }
  };
  aH.prototype.PotAward = function (bg) {
    var g, bh;
    g = aK(bg);
    if (g == null || !g.graphicsMade) {
      return;
    }
    bh = au(bg.Pot);
    if (bh < 1 || bh > 9) {
      return;
    }
    g.potAward(bg);
  };
  aH.prototype.PotRake = function (bi) {
    var bg, bk, bh, g, bj;
    bg = aK(bi);
    if (bg == null || !bg.graphicsMade) {
      return;
    }
    bk = au(bi.Pot);
    if (bk < 1 || bk > 9) {
      return;
    }
    bh = au(bi.Value);
    g = au(bi.Total);
    bj = au(bi.Rake);
    bg.potRake(bk, bh, g, bj);
  };
  aH.prototype.PreFlop = function (bg) {
    var g;
    g = aK(bg);
    if (g == null || !g.graphicsMade) {
      return;
    }
    g.boardCard[1] = au(bg.Board1);
    g.boardCard[2] = 0;
    g.boardCard[3] = 0;
    g.boardCard[4] = 0;
    g.boardCard[5] = 0;
    g.dealPreFlop();
  };
  aH.prototype.RefreshTables = function (bg) {
    for (var g = 0; g < U.tables.length; g++) {
      U.tables[g].refreshTable();
    }
  };
  aH.prototype.RegisterRequest = function (bg) {
    var g, br, bn, bp, bo, bl, bq, bi, bh, bj, bk, bm;
    g = aq(bg.Table);
    bq = bg.Password == "Yes";
    bj = bg.Primary == "Yes";
    br = n(bg.BuyIn);
    bk = a6(br, bj);
    bi = B(bg.Balance);
    bm = a6(bi, bj);
    bn = aq(bg.Ticket);
    bo = bg.HasTicket == "Yes";
    bl = bo ? U.lang.GameYes : U.lang.GameNo;
    bp = bg.TicketRequired == "Yes";
    if (bo && !bp) {
      U.lobby.tourneyRegOptionShow(g, bq, bn, bk, bm);
    } else {
      bh = U.lang.BuyInTourney + "<br>";
      if (br >= 0) {
        bh = bh + "<br>" + U.lang.BuyInTotal.split("%1%").join(bk);
      }
      if (bn != "") {
        bh = bh + "<br>" + U.lang.BuyInTicket.split("%1%").join(bn);
      }
      if (br >= 0) {
        bh = bh + "<br>" + U.lang.BuyInBalance.split("%1%").join(bm);
      }
      if (bn != "") {
        bh = bh + "<br>" + U.lang.BuyInHasTicket.split("%1%").join(bl);
      }
      U.lobby.tourneyRegShow(bh, g, bq);
    }
  };
  aH.prototype.Replay = function (bg) {
    var g;
    g = aK(bg);
    if (g == null || !g.graphicsMade) {
      return;
    }
    g.replayAdd(bg.Data);
  };
  aH.prototype.Reserve = function (bh) {
    var bg, bi, g;
    bg = aK(bh);
    if (bg == null || !bg.graphicsMade) {
      return;
    }
    bi = au(bh.Seat);
    if (bi < 1 || bi > bg.seats) {
      return;
    }
    g = bh.Player;
    bg.playerName[bi] = g;
    bg.playerAction[bi] = U.lang.PlayerActionReserved;
    bg.seat[bi].setGlow(false);
    bg.seat[bi].setName(g);
    bg.seat[bi].setInfo(U.lang.PlayerActionReserved);
    bg.seat[bi].show(true);
  };
  aH.prototype.RingGameLobby = function (bh) {
    var bm, bl, bj, bg, bq, bi, br, bn, bo, bp, g, bk;
    br = U.lobby.ringGrid.selrow;
    if (br < 0) {
      bi = "";
    } else {
      bi = U.data.Ring.rows[br].id;
    }
    bn = bh.Clear == "Yes";
    if (bn) {
      U.data.Ring.urows.length = 0;
    }
    bo = au(bh.Count);
    for (bm = 0; bm < bo; bm++) {
      bg = aq(bh.ID[bm]);
      if (bg == "") {
        continue;
      }
      bp = {};
      bp.id = bg;
      bp.bold =
        U.sitting.indexOf("R" + bg) > -1 || U.waiting.indexOf("R" + bg) > -1;
      bp.primary = aq(bh.Primary[bm]) == "Yes";
      g = bp.primary ? "p" : "s";
      bp.game = aq(bh.Game[bm]);
      bp.gameIndex = au(bh.GameIndex[bm]);
      bp.stakesLo = aq(bh.StakesLo[bm]);
      bp.stakesHi = aq(bh.StakesHi[bm]);
      bp.ante = au(bh.Ante[bm]);
      bp.stakesSort =
        g + ("0000000000" + au(bp.stakesLo).toFixed(2)).substr(-14);
      bp.stakes = ba(bp.stakesLo) + "/" + ba(bp.stakesHi);
      if (bp.ante > 0) {
        bp.stakes += "/" + ba(bp.ante);
      }
      bp.stakes = a6(bp.stakes, bp.primary);
      bp.buyinMin = aq(bh.BuyinMin[bm]);
      bp.buyinMax = aq(bh.BuyinMax[bm]);
      bp.buyinSort =
        g + ("0000000000" + au(bp.buyinMin).toFixed(2)).substr(-14);
      bp.buyin = a6(ba(bp.buyinMin) + " - " + ba(bp.buyinMax), bp.primary);
      bp.playing = aq(bh.Players[bm]);
      bp.seats = aq(bh.Seats[bm]);
      bp.startCode = aq(bh.StartCode[bm]) == "Yes";
      bp.waiting = aq(bh.Waiting[bm]);
      bp.password = aq(bh.Password[bm]);
      bk = aQ(aq(bh.VisPerm[bm]));
      bq = false;
      if (bn == false) {
        bj = U.data.Ring.urows.length;
        for (bl = 0; bl < bj; bl++) {
          if (bg == U.data.Ring.urows[bl].id) {
            bq = true;
            if (bk) {
              U.data.Ring.urows[bl] = bp;
            } else {
              U.data.Ring.urows.splice(bl, 1);
            }
            break;
          }
        }
      }
      if (!bq && bk) {
        U.data.Ring.urows.push(bp);
      }
    }
    U.lobby.ringFilterData();
    U.lobby.ringGameSelectID(bi);
    U.lobby.ringGrid.sort();
    U.lobby.ringGameSelect(U.lobby.ringGrid.selrow);
    U.lobby.ringTabCaption();
  };
  aH.prototype.River = function (bh) {
    var bg, g;
    bg = aK(bh);
    if (bg == null || !bg.graphicsMade) {
      return;
    }
    g = au(bh.Stage);
    if (g < 2) {
      bg.boardCard[5] = au(bh.Board5);
    } else {
      bg.boardCard2[5] = au(bh.Board5);
    }
    bg.dealRiver(g);
  };
  aH.prototype.Rules6Holdem = function (bg) {
    var g;
    g = aK(bg);
    if (g == null || !g.graphicsMade) {
      return;
    }
    if (U.pset.Rules6Holdem) {
      g.rules6Holdem.show(true, U.mobile);
    }
  };
  aH.prototype.RunItTwice = function (bg) {
    var g;
    g = aK(bg);
    if (g == null || !g.graphicsMade) {
      return;
    }
    g.twiceSeats(bg.Seats);
  };
  aH.prototype.Session = function (bk) {
    var bj, bg, bh, g, bi;
    U.color.Background = aq(bk.BackgroundColor);
    U.color.Window = aq(bk.WindowColor);
    U.color.WindowText = aq(bk.WindowTextColor);
    U.color.Button = aq(bk.ButtonColor);
    U.color.ButtonText = aq(bk.ButtonTextColor);
    U.color.ButtonDisabled = aq(bk.ButtonDisabledColor);
    U.color.ButtonBorder = aq(bk.ButtonBorderColor);
    U.color.List = aq(bk.ListColor);
    U.color.ListText = aq(bk.ListTextColor);
    U.color.ListDisabled = aq(bk.ListDisabledColor);
    U.seatEmptyOpacity = aq(bk.SeatEmptyOpacity);
    U.seatOpacity = aq(bk.SeatOpacity);
    U.crc.audio = aq(bk.AudioCrc);
    U.crc.image = aq(bk.ImageCrc);
    U.$webClient
      .add("#OpenBackground")
      .css("background-color", U.color.Background);
    if (bk.BackgroundGraphic == "Default") {
      $("#BGLogo img").attr("src", "Image?Name=PMLogo");
      $("#BGLogo a").attr("href", "http://www.briggsoft.com");
      $("#BGLogo")
        .css({
          top: 50,
          height: 150,
        })
        .show();
      bi = $("#BGLogo")
        .clone()
        .attr("id", "BGLogo2")
        .appendTo("#OpenBackground");
      $("a", bi).removeAttr("href").removeAttr("target");
    } else {
      if (bk.BackgroundGraphic == "Yes") {
        if (bk.BackgroundTile == "Yes") {
          $("#BGTile").css(
            "background-image",
            "url('Image?Name=Logo&Crc=" + U.crc.image + "')"
          );
          bj = aq(bk.BackgroundLink);
          if (bj != "") {
            $("#BGTile").attr("href", bj);
          }
          $("#BGTile").show();
          bi = $("#BGTile")
            .clone()
            .attr("id", "BGTile2")
            .appendTo("#OpenBackground");
          bi.removeAttr("href").removeAttr("target");
        } else {
          $("#BGLogo img").attr("src", "Image?Name=Logo&Crc=" + U.crc.image);
          bj = aq(bk.BackgroundLink);
          if (bj != "") {
            $("#BGLogo a").attr("href", bj);
          }
          $("#BGLogo").show();
          bi = $("#BGLogo")
            .clone()
            .attr("id", "BGLogo2")
            .appendTo("#OpenBackground");
          $("a", bi).removeAttr("href").removeAttr("target");
        }
      }
    }
    U.sessionID = aq(bk.ID);
    U.siteName = aq(bk.Site);
    U.siteEmail = aq(bk.Email);
    U.siteWeb = aq(bk.Web);
    U.licenseType = aq(bk.LicenseType);
    U.maskPrimary = aq(bk.PrimaryMask);
    U.maskSecondary = aq(bk.SecondaryMask);
    U.secondary = bk.Secondary == "Yes";
    U.realnameEnable = bk.RealNameEnable == "Yes";
    U.locationEnable = bk.LocationEnable == "Yes";
    U.genderEnable = bk.GenderEnable == "Yes";
    U.customMouseOver = bk.CustomMouseOver == "Yes";
    U.profileURL = aq(bk.ProfileURL);
    U.accountURL = aq(bk.AccountURL);
    U.reconKey = aq(bk.ReconKey);
    aN();
    a3();
    U.lurking = bk.Lurking == "Yes";
    U.newAccounts = bk.NewAccounts == "Yes";
    U.passwordRecovery = bk.PasswordRecovery == "Yes";
    U.validateEmails = bk.ValidateEmails == "Yes";
    U.maxAvatar = au(bk.Avatars);
    U.lobby = new bd($("#Lobby"));
    a2(U.lobby.dialog);
    $("#Connecting").hide();
    U.$webClient.css("background-image", "none");
    if (bk.RemoveAbout == "Yes") {
      $("#HelpSep").hide();
      U.lobby.helpAbout.show(false);
    }
    U.lobby.lobbyChatDisplay(bk.LobbyChat == "Yes");
    U.lobby.accountTickets.show(bk.TicketsMenu == "Yes");
    U.lobby.accountPermissions.show(bk.PermissionsMenu == "Yes");
    U.lobby.optionsLanguage.show(U.languages > 1);
    if (U.newAccounts == true) {
      U.lobby.accountCreate.show(true);
    }
    if (bk.AccountChanges == "Yes") {
      U.lobby.accountChange.show(true);
    }
    if (bk.ChipTransfers == "Yes") {
      U.lobby.accountTransfer1.show(true);
    }
    if (bk.ChipTransfers2 == "Yes" && U.secondary) {
      U.lobby.accountTransfer2.show(true);
    }
    if (bk.BalanceResets == "Yes") {
      U.lobby.accountChipRequest1.show(true);
    }
    if (bk.BalanceResets2 == "Yes" && U.secondary) {
      U.lobby.accountChipRequest2.show(true);
    }
    if (bk.CanSuspend == "Yes") {
      U.lobby.accountSelfSuspend.show(true);
    }
    if (U.accountURL != "") {
      U.lobby.accountCustom.show(true);
    }
    be(U.pset.Deck);
    U.lobby.$sitePanel.text(U.mobile ? "" : U.siteName);
    U.connected = true;
    ap();
    if (U.quit == true) {
      aS(false);
      return;
    }
    if (U.params.loginName == "") {
      U.lobby.loginShow();
    } else {
      U.loginData = {};
      U.loginData.player = U.params.loginName;
      bg = U.params.sessionKey;
      bh = U.params.loginPassword;
      if (bg != "") {
        g = {
          Response: "Login",
          SessionKey: bg,
        };
        U.eSeed = bg;
      } else {
        g = {
          Response: "LoginRequest",
        };
        U.loginData.password = bh;
        U.loginData.valCode = "";
      }
      g.Player = U.params.loginName;
      j(g);
    }
  };
  aH.prototype.SitOut = function (bi) {
    var bh, g, bg;
    bh = aK(bi);
    if (bh == null || !bh.graphicsMade) {
      return;
    }
    g = bi.Show == "Yes";
    bg = bi.Type == "R" && bh.holeCards < 7;
    bh.outNextHandCheck(false);
    bh.outNextHandShow(g);
    bh.outNextBlindCheck(false);
    bh.outNextBlindShow(g && bg);
  };
  aH.prototype.SpecialSeat = function (bg) {
    var g;
    g = aK(bg);
    if (g == null || !g.graphicsMade) {
      return;
    }
    g.specialSeat(bg.Seat);
  };
  aH.prototype.Straddle = function (bh) {
    var bg, g;
    bg = aK(bh);
    if (bg == null || !bg.graphicsMade) {
      return;
    }
    g = bh.Check == "Yes";
    bg.straddleCheck(g);
  };
  aH.prototype.StraddleLive = function (bg) {
    var g;
    g = aK(bg);
    if (g == null || !g.graphicsMade) {
      return;
    }
    g.liveStraddle = bg.Live == "Yes";
    g.straddleUpdate();
  };
  aH.prototype.Street = function (bi) {
    var bg, bj, bh, g;
    bg = aK(bi);
    if (bg == null || !bg.graphicsMade) {
      return;
    }
    bj = au(bi.Street);
    bh = [];
    for (g = 1; g <= 8; g++) {
      bh[g] = au(bi.Cards[g - 1]);
    }
    bg.dealStreet(bj, bh);
  };
  aH.prototype.SuspendChat = function (bg) {
    var g = aK(bg);
    if (g == null) {
      return;
    }
    g.suspendChat = aq(bg.Suspend) == "Yes";
  };
  aH.prototype.Table = function (bm) {
    var bl, bi, bk, bj, bh, g, bg;
    bl = aK(bm);
    if (bl == null) {
      return;
    }
    if (bm.Closed == "Yes") {
      bl.closed = true;
    }
    bl.password = bm.Password == "Yes";
    bk = bl.seats;
    bl.seats = au(bm.Seats);
    if (bl.seats < 0 || bl.seats > 10) {
      bl.seats = 0;
    }
    if (bl.graphicsMade && bk != bl.seats) {
      bl.refreshTable();
      return;
    }
    bg = aq(bm.Game);
    if (bg != bl.game) {
      bl.closed = true;
      bl.refreshTable();
      return;
    }
    bl.dealer = au(bm.Dealer);
    bl.special = au(bm.Special);
    bl.turn = au(bm.Turn);
    bl.totalPot = aq(bm.Total);
    bl.liveStraddle = aq(bm.Straddle) == "Yes";
    bl.rit = aq(bm.RunItTwice) == "Yes";
    for (bi = 1; bi <= 10; bi++) {
      bl.playerName[bi] = aq(bm.Player[bi - 1]);
      bl.playerTitle[bi] = aq(bm.Title[bi - 1]);
      bl.playerLevel[bi] = aq(bm.Level[bi - 1]);
      bl.playerCustom[bi] = aq(bm.Custom[bi - 1]);
      bl.playerRealName[bi] = aq(bm.RealName[bi - 1]);
      bl.playerAvatar[bi] = au(bm.Avatar[bi - 1]);
      bl.playerAvatarCrc[bi] = aq(bm.AvatarCrc[bi - 1]);
      bj = aq(bm.Gender[bi - 1]);
      if (bj == "Male") {
        bh = U.lang.AccountMale;
      } else {
        if (bj == "Female") {
          bh = U.lang.AccountFemale;
        } else {
          bh = "";
        }
      }
      bl.playerGender[bi] = bh;
      bl.playerLocation[bi] = aq(bm.Location[bi - 1]);
      bl.playerAction[bi] = U.playerAction[au(bm.Action[bi - 1])];
      bl.playerChips[bi] = aq(bm.Chips[bi - 1]);
      bl.playerTime[bi] = U.lang.GameSeconds.split("%1%").join(
        aq(bm.Time[bi - 1])
      );
      bl.playerAway[bi] = aq(bm.Away[bi - 1]);
      bl.playerBet[bi] = au(bm.Bet[bi - 1]);
      if (bm.Chop) {
        bl.chop[bi] = aq(bm.Chop[bi - 1]) == "Yes";
      } else {
        bl.chop[bi] = false;
      }
      if (bm.Twice) {
        bl.twice[bi] = aq(bm.Twice[bi - 1]) == "Yes";
      } else {
        bl.twice[bi] = false;
      }
      bl.playerBounty[bi] = au(bm.Bounty[bi - 1]);
      g = bl.getPlayerSeat() == bi;
      if (g && bl.holeCards == 7) {
        bl.cardNum[3] = au(bm.Card3[bi - 1]);
        bl.cardNum[4] = au(bm.Card4[bi - 1]);
        bl.cardNum[5] = au(bm.Card5[bi - 1]);
        bl.cardNum[6] = au(bm.Card6[bi - 1]);
      }
      bl.holeCard[1][bi] =
        g && !bl.isFaceDown ? bl.cardNum[1] : au(bm.Card1[bi - 1]);
      bl.holeCard[2][bi] =
        g && !bl.isFaceDown ? bl.cardNum[2] : au(bm.Card2[bi - 1]);
      bl.holeCard[3][bi] =
        g && !bl.isFaceDown ? bl.cardNum[3] : au(bm.Card3[bi - 1]);
      bl.holeCard[4][bi] =
        g && !bl.isFaceDown ? bl.cardNum[4] : au(bm.Card4[bi - 1]);
      bl.holeCard[5][bi] =
        g && !bl.isFaceDown ? bl.cardNum[5] : au(bm.Card5[bi - 1]);
      bl.holeCard[6][bi] =
        g && !bl.isFaceDown ? bl.cardNum[6] : au(bm.Card6[bi - 1]);
      bl.holeCard[7][bi] =
        g && !bl.isFaceDown ? bl.cardNum[7] : au(bm.Card7[bi - 1]);
    }
    for (bi = 1; bi <= 9; bi++) {
      bl.potChips[bi] = au(bm.Pot[bi - 1]);
    }
    for (bi = 1; bi <= 5; bi++) {
      bl.boardCard[bi] = au(bm.Board[bi - 1]);
    }
    for (bi = 1; bi <= 5; bi++) {
      bl.boardCard2[bi] = au(bm.Board2[bi - 1]);
    }
    bl.drawTable();
  };
  aH.prototype.TableBanners = function (bi) {
    var bh, bj, bg, g;
    bh = aK(bi);
    if (bh == null || !bh.graphicsMade) {
      return;
    }
    bj = aq(bi.Left);
    bg = aq(bi.Middle);
    g = aq(bi.Right);
    bh.setTableBanners(bj, bg, g);
  };
  aH.prototype.TableCapBanner = function (bh) {
    var bg, g;
    bg = aK(bh);
    if (bg == null || !bg.graphicsMade) {
      return;
    }
    g = aq(bh.Cap);
    bg.setTableCapBanner(g);
  };
  aH.prototype.TableGame = function (bj) {
    var bi, bg, g, bh;
    bi = aK(bj);
    if (bi == null) {
      return;
    }
    bg = aq(bj.Game);
    g = aq(bj.Limit);
    bh = aq(bj.Straddle) == "Yes";
    bi.changeGame(bg, g, bh);
  };
  aH.prototype.TableHeader = function (bh) {
    var bg, bi, g;
    bg = aK(bh);
    if (bg == null) {
      return;
    }
    g = aq(bh.Hand);
    if (g == "") {
      bi = "";
    } else {
      bi = U.lang.TableMenuHeaderHand + " #" + g;
    }
    bg.headerCaption(bi);
  };
  aH.prototype.TableImage = function (bg) {
    var g, bh;
    g = aK(bg);
    if (g == null) {
      return;
    }
    bh = aq(bg.Graphic);
    g.changeImage(bh);
  };
  aH.prototype.TableInfo = function (g) {
    var bg, bl, bi, bh, bn, bk, bm, bj;
    bg = au(g.Count);
    bi = aq(g.Desc);
    if (bi != "") {
      bi = "<p>" + bi + "</p>";
    }
    bl = "";
    for (bh = 0; bh < bg; bh++) {
      bn = aq(g.Line[bh]);
      if (bh > 0 && U.decimalMark != ".") {
        bn = bn.split(".").join(U.decimalMark);
      }
      bl = bl + bc(bn) + "\r\n";
    }
    if (g.Target == "Lobby") {
      bk = U.lang.InfoTitle + " - " + az(g.Table);
      U.lobby.infoShow(bk, bi + "<pre>" + bl + "</pre>");
    } else {
      bm = aK(g);
      if (bm == null || !bm.graphicsMade) {
        return;
      }
      bj = bm.infoDialog;
      bj.controls.generalInfo.setText(bi + "<pre>" + bl + "</pre>");
      if (U.mobile && U.tableCurrent == U.tables.indexOf(bm)) {
        U.lobby.generalInfo.setText(bi + bl.split("\r\n").join("<br>"));
      }
    }
  };
  aH.prototype.TableMessage = function (bg) {
    var g = aK(bg);
    if (g == null || !g.graphicsMade) {
      return;
    }
    g.setTableMessage(aq(bg.Text));
  };
  aH.prototype.TableSelect = function (bj) {
    var g, bk, bh, bg, bl, bi;
    g = bj.Name;
    bk = bj.Password == "Yes";
    bh = bj.Players;
    bl = bh.length;
    U.data.TableSelect.rows.length = 0;
    for (bg = 0; bg < bl; bg++) {
      bi = {};
      bi.table = U.lang.TableCaptionTable + " " + (bg + 1);
      bi.players = bh[bg];
      U.data.TableSelect.rows.push(bi);
    }
    U.lobby.tableSelectShow(g, bk);
  };
  aH.prototype.TablesSitting = function (g) {
    U.sitting = g.Tables;
  };
  aH.prototype.TablesWaiting = function (g) {
    U.waiting = g.Tables;
  };
  aH.prototype.TimeLeft = function (bi) {
    var bg, bk, bj, g, bh;
    bg = aK(bi);
    if (bg == null || !bg.graphicsMade) {
      return;
    }
    bk = au(bi.Seat);
    if (bk < 1 || bk > bg.seats) {
      return;
    }
    bj = au(bi.Time);
    bh = aq(bi.Beep) == "Yes";
    if (bj == 0) {
      bg.seat[bk].timeExpires = 0;
    } else {
      g = new Date();
      g.setTime(g.getTime() + bj * 1000);
      bg.seat[bk].timeExpires = g.getTime();
    }
    bg.seat[bk].showTimer();
    if (bh && bg.getPlayerSeat() == bk) {
      av("beep");
    }
  };
  aH.prototype.Total = function (bg) {
    var g = aK(bg);
    if (g == null || !g.graphicsMade) {
      return;
    }
    g.totalPot = au(bg.Total);
    g.updateTotal();
  };
  aH.prototype.TournamentLobby = function (bp) {
    var bB,
      bz,
      bw,
      bt,
      bq,
      bh,
      bg,
      bC,
      bE,
      bo,
      bs,
      bx,
      by,
      bv,
      bl,
      bj,
      bu,
      bn,
      bD,
      bk,
      bA,
      g,
      bm,
      br,
      bi;
    bo = U.lobby.sitnGoGrid.selrow;
    if (bo < 0) {
      bC = "";
    } else {
      bC = U.data.SitnGo.rows[bo].id;
    }
    bs = U.lobby.tourneyGrid.selrow;
    if (bs < 0) {
      bE = "";
    } else {
      bE = U.data.Tourney.rows[bs].id;
    }
    bu = bp.Clear == "Yes";
    if (bu) {
      U.data.Tourney.urows.length = 0;
    }
    bn = au(bp.Count);
    br = U.pset.TimeFormat12;
    for (bB = 0; bB < bn; bB++) {
      bt = aq(bp.ID[bB]);
      if (bt == "") {
        continue;
      }
      g = {};
      g.id = bt;
      g.bold =
        U.sitting.indexOf("T" + bt) > -1 || U.waiting.indexOf("T" + bt) > -1;
      g.primary = aq(bp.Primary[bB]) == "Yes";
      bm = g.primary ? "p" : "s";
      g.sng = aq(bp.SnG[bB]) == "Yes";
      g.shootout = aq(bp.Shootout[bB]) == "Yes";
      g.game = aq(bp.Game[bB]);
      g.gameIndex = au(bp.GameIndex[bB]);
      bh = aq(bp.Buyin[bB]);
      bg = aq(bp.EntryFee[bB]);
      by = aq(bp.Rebuy[bB]);
      bv = aq(bp.Reentry[bB]);
      bj = aq(bp.Ticket[bB]);
      g.buyinSort = bm + ("0000000000" + au(bh).toFixed(2)).substr(-14);
      g.buyin = a6(ba(bh) + "+" + ba(bg), g.primary);
      g.buyinTotal = au(bh) + au(bg);
      g.rebuy = by != "";
      g.reentry = bv != "";
      if (g.rebuy) {
        bl = by;
      } else {
        bl = bv;
      }
      g.buyin = g.buyin + bl + bj;
      g.ts = aq(bp.TS[bB]);
      bD = aq(bp.PreReg[bB]) == "Yes";
      bk = aq(bp.Reg[bB]);
      bA = aq(bp.Max[bB]);
      if (bD) {
        g.reg = "x/" + bA;
      } else {
        g.reg = bk + "/" + bA;
      }
      while (bk.length < 4) {
        bk = "0" + bk;
      }
      while (bA.length < 4) {
        bA = "0" + bA;
      }
      g.regSort = bk + "/" + bA;
      g.tables = aq(bp.Tables[bB]);
      g.starts = aq(bp.Starts[bB]);
      g.startsSort = g.starts;
      bx = aq(bp.StartTime[bB]);
      if (g.starts == "Time") {
        g.starts = U.lang.StatusStartsTime.split("%1%").join(
          a5(bx, false, br, false)
        );
        g.startsSort = U.lang.StatusStartsTime.split("%1%").join(
          a5(bx, false, false, true)
        );
      }
      g.startMin = aq(bp.StartMin[bB]);
      g.startTime = a5(bx, false, br, false);
      g.startCode = aq(bp.StartCode[bB]) == "Yes";
      g.running = aq(bp.Running[bB]);
      g.password = aq(bp.Password[bB]);
      bi = aQ(aq(bp.VisPerm[bB]));
      bq = false;
      if (bu == false) {
        bw = U.data.Tourney.urows.length;
        for (bz = 0; bz < bw; bz++) {
          if (bt == U.data.Tourney.urows[bz].id) {
            bq = true;
            if (bi) {
              U.data.Tourney.urows[bz] = g;
            } else {
              U.data.Tourney.urows.splice(bz, 1);
            }
            break;
          }
        }
      }
      if (!bq && bi) {
        U.data.Tourney.urows.push(g);
      }
    }
    U.lobby.tourneyFilterData();
    U.lobby.tourneySelectID(bE);
    U.lobby.tourneyGrid.sort();
    U.lobby.tourneySelect(U.lobby.tourneyGrid.selrow);
    U.lobby.tourneyTabCaption();
    U.lobby.sitnGoFilterData();
    U.lobby.sitnGoSelectID(bC);
    U.lobby.sitnGoGrid.sort();
    U.lobby.sitnGoSelect(U.lobby.sitnGoGrid.selrow);
    U.lobby.sitnGoTabCaption();
  };
  aH.prototype.Transactions = function (bg) {
    var bk, bi, bo, bj, bl, bm, bn, bh, g;
    bi = au(bg.Count);
    bj = bg.Date;
    bm = bg.Currency;
    bn = bg.Change;
    bh = bg.Balance;
    g = bg.Source;
    U.data.Trans.rows.length = 0;
    for (bk = 0; bk < bi; bk++) {
      bo = {};
      bo.date = a5(bj[bk], true, false, true);
      switch (bm[bk]) {
        case "Primary":
          bl = U.lang.TransactionsPrimary;
          break;
        case "Secondary":
          bl = U.lang.TransactionsSecondary;
          break;
        case "Ticket":
          bl = U.lang.TransactionsTicket;
          break;
        default:
          bl = bm[bk];
      }
      bo.currency = bl;
      bo.change = isNaN(bn[bk]) || bn[bk] == "" ? bn[bk] : n(bn[bk]);
      bo.balance = isNaN(bh[bk]) || bh[bk] == "" ? bh[bk] : n(bh[bk]);
      bo.source = g[bk];
      U.data.Trans.rows.push(bo);
    }
    U.lobby.transactions.controls.$count.text(
      U.lang.TransactionsRecords + " " + U.data.Trans.rows.length
    );
    U.lobby.transGrid.sort();
  };
  aH.prototype.Transfer = function (g) {
    U.lobby.transferConfirmShow(g.Message, g.Recipient, g.Amount, g.Primary);
  };
  aH.prototype.Turn = function (bh) {
    var bg, g;
    bg = aK(bh);
    if (bg == null || !bg.graphicsMade) {
      return;
    }
    g = au(bh.Stage);
    if (g < 2) {
      bg.boardCard[4] = au(bh.Board4);
    } else {
      bg.boardCard2[4] = au(bh.Board4);
    }
    bg.dealTurn(g);
  };
  aH.prototype.ValidateAccount = function (g) {
    U.lobby.accountInfoValidate();
  };
  aH.prototype.Waiting = function (bi) {
    var g, bm, bj, bn, bq, bg, br, bp, bl, bo, bh, bk;
    g = aq(bi.Table);
    bm = aq(bi.Type);
    bj = au(bi.Count);
    bh = aq(bi.LateReg);
    bk = aq(bi.SnG) == "Yes";
    bn = 0;
    bq = false;
    bg = false;
    br = [];
    for (bl = 0; bl < bj; bl++) {
      bp = aq(bi.Wait[bl]);
      if (bp == U.loginData.player) {
        bn = bl;
        bq = true;
      } else {
        if (bp == U.loginData.player + " *") {
          bn = bl;
          bg = true;
        }
      }
      bo = {};
      bo.pos = bl + 1;
      bo.player = bp;
      br.push(bo);
    }
    if (bm == "R") {
      U.data.RingWait.rows = br;
      U.lobby.ringWaitGrid.update();
      if (bq == true) {
        bp = U.lang.LobbyButtonRingUnjoin;
      } else {
        bp = U.lang.LobbyButtonRingJoin;
      }
      U.lobby.ringWaitBtn.setCaption(bp);
      U.lobby.ringWait2Btn.setCaption(bp);
    } else {
      bp = U.lang.LobbyColumnTrnyWaiting;
      if (bj > 0) {
        bp = bp + ": " + bj;
      }
      if (bk) {
        U.data.SitnGoWait.rows = br;
        U.lobby.sitnGoWaitGrid.update();
        U.lobby.sitnGoWaitGrid.headerCaption(1, bp);
      } else {
        U.data.TourneyWait.rows = br;
        U.lobby.tourneyWaitGrid.update();
        U.lobby.tourneyWaitGrid.headerCaption(1, bp);
      }
      if (bg == true) {
        bq = true;
      }
      if (bq == true) {
        bp = U.lang.LobbyButtonTrnyUnregister;
      } else {
        if (bh == "Yes") {
          bp = U.lang.LobbyButtonTrnyRegLate;
        } else {
          bp = U.lang.LobbyButtonTrnyRegister;
        }
      }
      if (bk) {
        U.lobby.sitnGoRegisterBtn.setCaption(bp);
        U.lobby.sitnGoRegister2Btn.setCaption(bp);
        U.lobby.sitnGoStartNow.show(bq && aw(true));
        U.lobby.sitnGoStartNow.setCheck(bg);
      } else {
        U.lobby.tourneyRegisterBtn.setCaption(bp);
        U.lobby.tourneyRegister2Btn.setCaption(bp);
        U.lobby.tourneyStartNow.show(bq && aw(false));
        U.lobby.tourneyStartNow.setCheck(bg);
      }
    }
  };

  function bd(bk) {
    var bj, g, bi, bm, bh, bl, bg;
    bj = this;
    bj.modalList = [];
    bj.$dialog = bk;
    bj.dialog = new Y(bj.$dialog, null, {
      shadeparent: bj,
      title: U.lang.LobbyCaptionTitle,
      removeonclose: true,
      minwidth: 640,
      minheight: 480,
      resize: true,
      onresize: function () {
        bj.resize();
      },
    });
    y();
    bj.modalList.push(bj.dialog);
    bj.menuInit();
    bj.$sitePanel = $("#SitePanel", bj.$dialog).css({
      color: U.color.ListText,
      backgroundColor: U.color.List,
    });
    bj.$siteMobile = $("#SiteMobile", bj.$dialog).css("overflow", "hidden");
    $(".minbtn", bj.$dialog).on("touchstart mousedown", function () {
      bj.minimize();
      return false;
    });
    $(".maxbtn", bj.$dialog).on("touchstart mousedown", function () {
      bj.maximize();
      return false;
    });
    bj.$closeBtn = $(".closebtn", bj.$dialog).on(
      "touchstart mousedown",
      function (bn) {
        bj.close();
        return false;
      }
    );
    bj.$openTableBox = $("#OpenTableBox");
    bj.$openTableControls = $("#OpenTableControls");
    bj.createDialogs();
    bj.loginTabSetup();
    bj.ringTabSetup();
    bj.tourneyTabSetup();
    bj.sitnGoTabSetup();
    bj.mobileInfoSetup();
    g = [
      U.lang.LobbyCaptionLogins,
      U.lang.LobbyCaptionRingGames,
      U.lang.LobbyCaptionTournaments,
      U.lang.LobbyCaptionSitnGos,
      U.lang.LobbyCaptionOpen,
    ];
    bi = [true, true, true, U.params.sitAndGoTab, false];
    bj.lobbyTabs = new ar($("#LobbyTabs", bj.$dialog), g, bi, function (
      bn,
      bo
    ) {
      bj.lobbyTabsChange(bn, bo);
    });
    bj.lobbyTabs.setTab(0);
    bj.isMin = false;
    bj.isMax = false;
    U.minTray = new bb();
    if (U.mobile) {
      bj.guiChange();
    } else {
      bm = bj.$dialog.width();
      bh = bj.$dialog.height();
      bl = U.$webClient.width();
      bg = U.$webClient.height();
      if (bm > bl) {
        bm = bl;
      }
      if (bh > bg) {
        bh = bg;
      }
      if (bm != 706 || bh != 573) {
        bj.$dialog.css({
          width: bm,
          height: bh,
        });
      }
      bj.dialog.show(false);
    }
    bj.resize();
  }
  bd.prototype.aboutCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#About");
    bh = new Y(g, bg, {
      title: U.lang.AboutTitle,
    });
    new A($(".okbtn", g), U.lang.DialogOK, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.about = bh;
  };
  bd.prototype.aboutShow = function () {
    var g = this;
    $("#about_title").text("Poker Mavens");
    $("#about_license").text(U.licenseType + " " + U.clientVersion);
    $("#about_copyright").html(
      "Copyright &copy; " + U.copyright + " Kent Briggs"
    );
    $("#about_company").text("Briggs Softworks");
    $("#about_link a")
      .attr("href", "http://www.briggsoft.com")
      .text("www.briggsoft.com");
    g.about.show(true, U.mobile);
  };
  bd.prototype.accountChangeShow = function () {
    var g, bg, bh;
    g = this;
    bh = g.accountInfo;
    bh.setTitle(U.lang.AccountChange);
    bh.show(true, U.mobile);
    bh.controls.scrollbox.setScale(bh.scaleY);
    bh.controls.scrollbox.updateScrollPosition();
    bh.controls.aiPlayer.$input.css("color", U.color.ListDisabled);
    bh.controls.aiPlayer.setText(U.loginData.player);
    bh.controls.aiPlayer.enable(false);
    bh.controls.aiRealName.setText(U.loginData.realName);
    if (U.loginData.gender == "Male") {
      bh.controls.aiMale.setCheck(true);
    } else {
      if (U.loginData.gender == "Female") {
        bh.controls.aiFemale.setCheck(true);
      } else {
        bh.controls.aiOther.setCheck(true);
      }
    }
    bh.controls.avatarSlider.setScale(bh.scaleX);
    bh.controls.avatarSlider.increment = 1 / (U.maxAvatar - U.minAvatar);
    bg = (U.loginData.avatar - U.minAvatar) / (U.maxAvatar - U.minAvatar);
    bh.controls.avatarSlider.setValue(bg, true);
    bh.controls.aiLocation.setText(U.loginData.location);
    bh.controls.aiPassword1.setText("");
    bh.controls.aiPassword2.setText("");
    $("#ai_pw_desc").text(U.lang.AccountPWDesc2);
    bh.controls.aiEmail.setText(U.loginData.email);
    bh.controls.aiCustom1.setText(U.loginData.custom1);
    bh.controls.aiCustom2.setText(U.loginData.custom2);
    bh.controls.aiCustom3.setText(U.loginData.custom3);
    bh.controls.aiCustom4.setText(U.loginData.custom4);
    bh.controls.aiCustom5.setText(U.loginData.custom5);
  };
  bd.prototype.accountCreateShow = function () {
    var g, bg;
    g = this;
    bg = g.accountInfo;
    bg.setTitle(U.lang.AccountNew);
    bg.show(true, U.mobile);
    bg.controls.scrollbox.setScale(bg.scaleY);
    bg.controls.scrollbox.updateScrollPosition();
    bg.controls.aiPlayer.$input.css("color", U.color.ListText);
    bg.controls.aiPlayer.enable(true);
    $("#ai_pw_desc").text(U.lang.AccountPWDesc);
    bg.controls.avatarSlider.setScale(bg.scaleX);
    bg.controls.avatarSlider.setValue(0, true);
    bg.controls.aiPassword1.setText("");
    bg.controls.aiPassword2.setText("");
  };
  bd.prototype.accountCustomShow = function () {
    if (U.accountURL == "") {
      return;
    }
    var g = U.accountURL;
    if (g.indexOf("?") < 0) {
      g = g + "?";
    } else {
      g = g + "&";
    }
    g =
      g +
      "Player=" +
      encodeURIComponent(U.loginData.player) +
      "&Key=" +
      encodeURIComponent(U.loginData.playerKey);
    window.open(g, "_blank");
  };
  bd.prototype.accountInfoAvatar = function (bi) {
    var bg, bj, g, bh;
    bg = this;
    bj = bg.accountInfo;
    bj.data.aiAvatar =
      Math.round(bi * (U.maxAvatar - U.minAvatar)) + U.minAvatar;
    $("#ai_avatar_label").text(U.lang.AccountAvatar + " " + bj.data.aiAvatar);
    g = bj.data.aiAvatar;
    if (g == 0) {
      $("#ai_avatar_image").css(
        "background",
        "url('Avatar?Player=" +
          encodeURIComponent(U.loginData.player) +
          "&Crc=" +
          U.loginData.avatarCrc +
          "') 0px 0px/64px 64px no-repeat"
      );
    } else {
      bh = (g - 1) * -64 + "px 0px/auto 64px no-repeat";
      $("#ai_avatar_image").css(
        "background",
        "url('Image?Name=Avatars&Crc=" + U.crc.image + "') " + bh
      );
    }
  };
  bd.prototype.accountInfoAvatarPrev = function () {
    var g, bh, bg;
    g = this;
    bh = g.accountInfo;
    bg = bh.controls.avatarSlider.value - bh.controls.avatarSlider.increment;
    bh.controls.avatarSlider.setValue(bg, true);
  };
  bd.prototype.accountInfoAvatarNext = function () {
    var g, bh, bg;
    g = this;
    bh = g.accountInfo;
    bg = bh.controls.avatarSlider.value + bh.controls.avatarSlider.increment;
    bh.controls.avatarSlider.setValue(bg, true);
  };
  bd.prototype.accountInfoCreate = function () {
    var bh, g, bl, bj, bg, bk, bi;
    bh = this;
    g = $("#AccountInfo");
    bl = new Y(g, bh, {});
    bl.controls.scrollbox = new D($(".scrollbox", g));
    $("#ai_player_label").text(U.lang.AccountPlayer);
    bl.controls.aiPlayer = new ax($("#ai_player_input"), {
      border: true,
    });
    $("#ai_player_desc")
      .text(U.lang.AccountPlayerDesc)
      .css("color", U.color.ListDisabled);
    $("#ai_pw_label1").text(U.lang.AccountPWSelect);
    bl.controls.aiPassword1 = new ax($("#ai_pw_input1"), {
      border: true,
      password: true,
    });
    $("#ai_pw_label2").text(U.lang.AccountPWConfirm);
    bl.controls.aiPassword2 = new ax($("#ai_pw_input2"), {
      border: true,
      password: true,
    });
    $("#ai_pw_desc")
      .text(U.lang.AccountPWDesc)
      .css("color", U.color.ListDisabled);
    $("#ai_email_label").text(U.lang.AccountEmail);
    bl.controls.aiEmail = new ax($("#ai_email_input"), {
      border: true,
    });
    $("#ai_email_desc")
      .text(U.lang.AccountEmailDesc)
      .css("color", U.color.ListDisabled);
    $("#ai_avatar_label").text(U.lang.AccountAvatar);
    new A($("#ai_avatar_prev"), U.arrowL, 20, function () {
      bh.accountInfoAvatarPrev();
    });
    bl.controls.avatarSlider = new ao(
      $("#ai_avatar_slider"),
      1 / (U.maxAvatar - U.minAvatar + 1),
      function (bm) {
        bh.accountInfoAvatar(bm);
      }
    );
    new A($("#ai_avatar_next"), U.arrowR, 20, function () {
      bh.accountInfoAvatarNext();
    });
    $("#ai_avatar_desc")
      .text(U.lang.AccountAvatarDesc)
      .css("color", U.color.ListDisabled);
    bi = 330;
    $("#ai_real").css("top", bi);
    $("#ai_real_label").text(U.lang.AccountReal);
    bl.controls.aiRealName = new ax($("#ai_real_input"), {
      border: true,
    });
    $("#ai_real_desc")
      .text(U.lang.AccountRealDesc)
      .css("color", U.color.ListDisabled);
    if (U.realnameEnable) {
      $("#ai_real").show();
      bi = bi + 80;
    }
    $("#ai_loc").css("top", bi);
    $("#ai_loc_label").text(U.lang.AccountLocation);
    bl.controls.aiLocation = new ax($("#ai_loc_input"), {
      border: true,
    });
    $("#ai_loc_desc")
      .text(U.lang.AccountLocationDesc)
      .css("color", U.color.ListDisabled);
    if (U.locationEnable) {
      $("#ai_loc").show();
      bi = bi + 80;
    }
    $("#ai_gender").css("top", bi);
    $("#ai_gender_label").text(U.lang.AccountGender);
    bl.controls.aiMale = new C($("#ai_gender_male"), U.lang.AccountMale);
    bl.controls.aiFemale = new C($("#ai_gender_female"), U.lang.AccountFemale);
    bl.controls.aiOther = new C(
      $("#ai_gender_other"),
      U.lang.AccountUnspecified
    );
    bl.controls.aiOther.setCheck(true);
    if (U.genderEnable) {
      $("#ai_gender").show();
      bi = bi + 80;
    }
    bj = U.lang.AccountCustom1.split(":");
    bg = bj[0];
    bj.splice(0, 1);
    bk = bj.join(":");
    $("#ai_custom1").css("top", bi);
    $("#ai_custom1_label").text(bg + ":");
    $("#ai_custom1_desc").text(bk).css("color", U.color.ListDisabled);
    bl.controls.aiCustom1 = new ax($("#ai_custom1_input"), {
      border: true,
    });
    if (bg != "") {
      $("#ai_custom1").show();
      bi = bi + 80;
    }
    bj = U.lang.AccountCustom2.split(":");
    bg = bj[0];
    bj.splice(0, 1);
    bk = bj.join(":");
    $("#ai_custom2").css("top", bi);
    $("#ai_custom2_label").text(bg + ":");
    $("#ai_custom2_desc").text(bk).css("color", U.color.ListDisabled);
    bl.controls.aiCustom2 = new ax($("#ai_custom2_input"), {
      border: true,
    });
    if (bg != "") {
      $("#ai_custom2").show();
      bi = bi + 80;
    }
    bj = U.lang.AccountCustom3.split(":");
    bg = bj[0];
    bj.splice(0, 1);
    bk = bj.join(":");
    $("#ai_custom3").css("top", bi);
    $("#ai_custom3_label").text(bg + ":");
    $("#ai_custom3_desc").text(bk).css("color", U.color.ListDisabled);
    bl.controls.aiCustom3 = new ax($("#ai_custom3_input"), {
      border: true,
    });
    if (bg != "") {
      $("#ai_custom3").show();
      bi = bi + 80;
    }
    bj = U.lang.AccountCustom4.split(":");
    bg = bj[0];
    bj.splice(0, 1);
    bk = bj.join(":");
    $("#ai_custom4").css("top", bi);
    $("#ai_custom4_label").text(bg + ":");
    $("#ai_custom4_desc").text(bk).css("color", U.color.ListDisabled);
    bl.controls.aiCustom4 = new ax($("#ai_custom4_input"), {
      border: true,
    });
    if (bg != "") {
      $("#ai_custom4").show();
      bi = bi + 80;
    }
    bj = U.lang.AccountCustom5.split(":");
    bg = bj[0];
    bj.splice(0, 1);
    bk = bj.join(":");
    $("#ai_custom5").css("top", bi);
    $("#ai_custom5_label").text(bg + ":");
    $("#ai_custom5_desc").text(bk).css("color", U.color.ListDisabled);
    bl.controls.aiCustom5 = new ax($("#ai_custom5_input"), {
      border: true,
    });
    if (bg != "") {
      $("#ai_custom5").show();
      bi = bi + 80;
    }
    if (bi < 400) {
      bi = 400;
    }
    $("#ai_buttons").css("top", bi);
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bh.accountInfoOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bl.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bl.close();
      return false;
    });
    bh.accountInfo = bl;
  };
  bd.prototype.accountInfoOk = function () {
    var bh, bj, bg, g, bi;
    bh = this;
    bj = bh.accountInfo;
    bg = bj.controls.aiPassword1.getText();
    g = bj.controls.aiPassword2.getText();
    if (bg != g) {
      bh.messageShow(U.lang.AccountPWError);
      return;
    }
    bi = {
      Response: "ChangeAccount",
    };
    bi.RealName = bj.controls.aiRealName.getText();
    if (bj.controls.aiMale.isChecked()) {
      bi.Gender = "Male";
    } else {
      if (bj.controls.aiFemale.isChecked()) {
        bi.Gender = "Female";
      } else {
        bi.Gender = "Unspecified";
      }
    }
    bi.Avatar = bj.data.aiAvatar;
    bi.Location = bj.controls.aiLocation.getText();
    if (bg != "") {
      bi.Hash = aj(bg);
    }
    bi.Email = bj.controls.aiEmail.getText();
    bi.Custom1 = bj.controls.aiCustom1.getText();
    bi.Custom2 = bj.controls.aiCustom2.getText();
    bi.Custom3 = bj.controls.aiCustom3.getText();
    bi.Custom4 = bj.controls.aiCustom4.getText();
    bi.Custom5 = bj.controls.aiCustom5.getText();
    if (bj.title == U.lang.AccountNew) {
      bi.Response = "NewAccount";
      bi.Player = bj.controls.aiPlayer.getText();
    }
    j(bi);
  };
  bd.prototype.accountInfoValidate = function () {
    var g, bh, bg;
    g = this;
    bh = g.accountInfo;
    bh.close();
    if (bh.title == U.lang.AccountNew) {
      g.loginShow();
      bg = g.login;
      bg.controls.loginNameInput.setText(bh.controls.aiPlayer.getText());
      bg.controls.loginPWInput.setText(bh.controls.aiPassword1.getText());
    } else {
      U.loginData.realName = bh.controls.aiRealName.getText();
      U.loginData.avatar = bh.data.aiAvatar;
      if (bh.controls.aiMale.isChecked()) {
        U.loginData.gender = "Male";
      } else {
        if (bh.controls.aiFemale.isChecked()) {
          U.loginData.gender = "Female";
        } else {
          U.loginData.gender = "";
        }
      }
      U.loginData.location = bh.controls.aiLocation.getText();
      U.loginData.email = bh.controls.aiEmail.getText();
    }
  };
  bd.prototype.accountSuspendCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#AccountSuspend");
    bh = new Y(g, bg, {
      title: U.lang.SuspendTitle,
    });
    $(".as_text", g).html(U.lang.SuspendText);
    bh.controls.days = new ax($(".as_daysinput", g), {
      border: true,
    });
    $(".as_days", g).text(U.lang.SuspendDays);
    bh.controls.hours = new ax($(".as_hoursinput", g), {
      border: true,
    });
    $(".as_hours", g).text(U.lang.SuspendHours);
    bh.controls.mins = new ax($(".as_minsinput", g), {
      border: true,
    });
    $(".as_mins", g).text(U.lang.SuspendMinutes);
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.accountSuspendOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.accountSuspend = bh;
  };
  bd.prototype.accountSuspendOk = function () {
    var bg, bh, g;
    bg = this;
    bh = bg.accountSuspend;
    g =
      au(bh.controls.mins.getText()) +
      au(bh.controls.hours.getText()) * 60 +
      au(bh.controls.days.getText()) * 1440;
    bh.close();
    j({
      Response: "Suspend",
      Minutes: g,
    });
  };
  bd.prototype.accountSuspendShow = function () {
    var g, bg;
    g = this;
    bg = g.accountSuspend;
    bg.controls.days.setText("0");
    bg.controls.hours.setText("0");
    bg.controls.mins.setText("0");
    bg.show(true, U.mobile);
  };
  bd.prototype.arrangeCascade = function () {
    var bh, bk, bg, g, bj, bi;
    bh = this;
    bk = bh.arrangeWindows;
    bg = bk.controls.arrangeLobby.isChecked();
    f("arrangeLobby", bg);
    bk.close();
    bi = U.tables.length;
    if (bg) {
      bi++;
    }
    if (bi == 0) {
      return;
    }
    U.winOfsX = 10;
    U.winOfsY = 10;
    if (bg) {
      bh.popoutChatClose();
      bh.info.close();
      bh.news.close();
      bh.faq.close();
      bh.$dialog.css({
        left: U.winOfsX,
        top: U.winOfsY,
        width: 706,
        height: 573,
      });
      y();
      bh.resize();
      bh.lobbyFront();
    }
    for (g = 0; g < U.tables.length; g++) {
      bj = U.tables[g];
      bj.infoClose();
      bj.$dialog.css({
        left: U.winOfsX,
        top: U.winOfsY,
        width: 706,
        height: 573,
      });
      y();
      bj.resizeTable();
      bj.resizeFinish();
      bj.bringToFront();
    }
  };
  bd.prototype.arrangeTile = function () {
    var bv,
      bw,
      g,
      bs,
      bx,
      br,
      bi,
      by,
      bg,
      bo,
      bt,
      bl,
      bj,
      bh,
      bm,
      bq,
      bp,
      bu,
      bk,
      bn;
    bv = this;
    bw = bv.arrangeWindows;
    g = bw.controls.arrangeLobby.isChecked();
    f("arrangeLobby", g);
    bw.close();
    bi = U.tables.length;
    if (g) {
      bi++;
    }
    if (bi == 0) {
      return;
    }
    U.winOfsX = 40;
    U.winOfsY = 40;
    bp = U.$webClient.width() - 5;
    bu = U.$webClient.height() - 5;
    bo = 0;
    bt = 0;
    bn = 0;
    bk = 0;
    for (bx = 1; bx <= bi; bx++) {
      br = Math.ceil(bi / bx);
      by = bp / bx;
      bg = (by - 6) * (510 / 700) + 58;
      if (bg > bu / br) {
        bg = bu / br;
        by = (bg - 58) * (700 / 510) + 6;
      }
      if (by > bo) {
        bo = by;
        bt = bg;
        bk = br;
        bn = bx;
      }
    }
    if (bo < 356 || bt < 313) {
      bo = 356;
      bt = 313;
    }
    if (bo * bn > bp && bn > 1) {
      bh = (bp - bo) / (bn - 1);
      bq = 0;
    } else {
      bh = bo;
      bq = (bp - bn * bo) / 2;
    }
    if (bt * bk > bu && bk > 1) {
      bm = (bu - bt) / (bk - 1);
    } else {
      bm = bt;
    }
    bl = bq;
    bj = 0;
    bx = 0;
    if (g) {
      bv.popoutChatClose();
      bv.info.close();
      bv.news.close();
      bv.faq.close();
      if (bo < 640) {
        by = 640;
      } else {
        by = bo;
      }
      if (bt < 480) {
        bg = 480;
      } else {
        bg = bt;
      }
      bv.$dialog.css({
        left: bl,
        top: bj,
        width: by,
        height: bg,
      });
      bv.resize();
      bv.lobbyFront();
      bl = bl + bh;
      bx++;
      if (bx == bn) {
        bx = 0;
        bl = bq;
        bj = bj + bm;
      }
    }
    for (bs = 0; bs < U.tables.length; bs++) {
      table = U.tables[bs];
      table.infoClose();
      table.$dialog.css({
        left: bl,
        top: bj,
        width: bo,
        height: bt,
      });
      table.resizeTable();
      table.resizeFinish();
      table.bringToFront();
      bl = bl + bh;
      bx++;
      if (bx == bn) {
        bx = 0;
        bl = bq;
        bj = bj + bm;
      }
    }
  };
  bd.prototype.arrangeWindowsCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#ArrangeWindows");
    bh = new Y(g, bg, {
      title: U.lang.ArrangeTitle,
    });
    bh.controls.arrangeLobby = new E($("#aw_lobby"), U.lang.ArrangeLobby);
    new A($("#aw_tile", g), U.lang.ArrangeTile, 25, function () {
      bg.arrangeTile();
    });
    new A($("#aw_cascade", g), U.lang.ArrangeCascade, 25, function () {
      bg.arrangeCascade();
    });
    new A($(".cancelbtn", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.arrangeWindows = bh;
  };
  bd.prototype.arrangeWindowsShow = function () {
    var g, bg;
    g = this;
    bg = g.arrangeWindows;
    bg.controls.arrangeLobby.setCheck(U.local.arrangeLobby);
    bg.show(true, U.mobile);
  };
  bd.prototype.balanceCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#Balance");
    bh = new Y(g, bg, {
      title: "",
    });
    $("#bal_availcap").text(U.lang.BalanceAvailable);
    $("#bal_playcap").text(U.lang.BalanceInPlay);
    $("#bal_totalcap").text(U.lang.BalanceTotal);
    new A($("#bal_trans", g), U.lang.BalanceTransactions, 20, function () {
      bg.transactionsShow();
    });
    new A($(".okbtn", g), U.lang.DialogOK, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.balance = bh;
  };
  bd.prototype.balance2Create = function () {
    var bg, g, bh;
    bg = this;
    g = $("#Balance2");
    bh = new Y(g, bg, {
      title: "",
    });
    $("#bal2_primary").text(U.lang.BalancePrimary);
    $("#bal2_availcap1").text(U.lang.BalanceAvailable);
    $("#bal2_playcap1").text(U.lang.BalanceInPlay);
    $("#bal2_totalcap1").text(U.lang.BalanceTotal);
    $("#bal2_secondary").text(U.lang.BalanceSecondary);
    $("#bal2_availcap2").text(U.lang.BalanceAvailable);
    $("#bal2_playcap2").text(U.lang.BalanceInPlay);
    $("#bal2_totalcap2").text(U.lang.BalanceTotal);
    new A($("#bal_trans2", g), U.lang.BalanceTransactions, 20, function () {
      bg.transactionsShow();
    });
    new A($(".okbtn", g), U.lang.DialogOK, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.balance2 = bh;
  };
  bd.prototype.balanceShow = function (bh, bl, bk, bg, bm, bj, g) {
    var bi = this;
    if (U.secondary) {
      bi.balance2.setTitle(bh);
      $("#bal2_avail1").text(a6(bl, true));
      $("#bal2_play1").text(a6(bg, true));
      $("#bal2_total1").text(a6(bj, true));
      $("#bal2_avail2").text(a6(bk, false));
      $("#bal2_play2").text(a6(bm, false));
      $("#bal2_total2").text(a6(g, false));
      bi.balance2.show(true, U.mobile);
    } else {
      bi.balance.setTitle(bh);
      $("#bal_balance").text(U.lang.BalanceTitle);
      $("#bal_avail").text(a6(bl, true));
      $("#bal_play").text(a6(bg, true));
      $("#bal_total").text(a6(bj, true));
      bi.balance.show(true, U.mobile);
    }
  };
  bd.prototype.cardDeckCreate = function () {
    var bi, g, bj, bh, bg;
    bi = this;
    g = $("#CardDeck");
    bj = new Y(g, bi, {
      title: U.lang.TableSettingsCardDeckTitle,
    });
    bj.controls.rc = [];
    for (bh = 1; bh < 5; bh++) {
      bj.controls.rc[bh] = new C($("#cd_" + bh, g), "#" + bh);
      bg = "Image?Name=Cards" + bh + "&Crc=" + U.crc.image;
      $("#cd_" + bh + "a", g).css(
        "background",
        "url('" + bg + "') -1656px 0px/auto 64px"
      );
      $("#cd_" + bh + "b", g).css(
        "background",
        "url('" + bg + "') -1886px 0px/auto 64px"
      );
      $("#cd_" + bh + "c", g).css(
        "background",
        "url('" + bg + "') -2116px 0px/auto 64px"
      );
      $("#cd_" + bh + "d", g).css(
        "background",
        "url('" + bg + "') -2346px 0px/auto 64px"
      );
      $("#cd_" + bh + "e", g).css(
        "background",
        "url('" + bg + "') -2392px 0px/auto 64px"
      );
    }
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      for (bh = 1; bh < 5; bh++) {
        if (bj.controls.rc[bh].isChecked()) {
          bi.tableSettings.data.deckNum = bh;
          bi.tableSettings.controls.deckBtn.setCaption(
            U.lang.TableSettingsCardDeck + ": #" + bh
          );
          break;
        }
      }
      bj.close();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bj.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bj.close();
      return false;
    });
    bi.cardDeck = bj;
  };
  bd.prototype.chipTransferCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#ChipTransfer");
    bh = new Y(g, bg, {
      title: U.lang.TransferTitle,
    });
    $("#ct_chipslabel").text(U.lang.TransferChips);
    bh.controls.ctChipsInput = new ax($("#ct_chipsinput"), {
      border: true,
    });
    $("#ct_reciplabel").text(U.lang.TransferRecipient);
    bh.controls.ctRecipInput = new ax($("#ct_recipinput"), {
      onEnterKey: function () {
        bg.chipTransferOk();
      },
      border: true,
    });
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.chipTransferOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.chipTransfer = bh;
  };
  bd.prototype.chipTransferOk = function () {
    var g, bh, bg;
    g = this;
    bh = g.chipTransfer;
    bh.close();
    bg = {
      Response: "Transfer",
    };
    bg.Action = "Confirm";
    bg.Amount = q(bh.controls.ctChipsInput.getText());
    bg.Recipient = bh.controls.ctRecipInput.getText();
    bg.Primary = bh.data.primary ? "Yes" : "No";
    j(bg);
  };
  bd.prototype.chipTransferShow = function (bg) {
    var g, bh;
    g = this;
    bh = g.chipTransfer;
    bh.data.primary = bg;
    if (U.secondary) {
      bh.setTitle(bg ? U.lang.TransferTitle1 : U.lang.TransferTitle2);
    }
    bh.show(true, U.mobile);
    bh.controls.ctChipsInput.setText("");
    bh.controls.ctRecipInput.setText("");
    if (U.hasTouch == false) {
      bh.controls.ctChipsInput.setFocus();
    }
  };
  bd.prototype.close = function () {
    if (U.loggedIn == false || U.quit) {
      aS(false);
    } else {
      j({
        Response: "LogoutRequest",
      });
    }
  };
  bd.prototype.contactCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#ContactAdmin");
    bh = new Y(g, bg, {
      title: U.lang.ContactTitle,
    });
    $("#ca_label1").text(U.lang.ContactEmail);
    $("#ca_label2").text(U.lang.ContactWeb);
    new A($(".okbtn", g), U.lang.DialogOK, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.contactAdmin = bh;
  };
  bd.prototype.contactShow = function () {
    var bg, g;
    bg = this;
    g = U.siteEmail;
    if (g == "") {
      $("#ca_email").text(U.lang.ContactNone);
    } else {
      $("#ca_email")
        .attr(
          "href",
          "mailto:" + g + "?subject=" + encodeURIComponent(U.siteName)
        )
        .text(g);
    }
    if (U.siteWeb == "") {
      $("#ca_web").text(U.lang.ContactNone);
    } else {
      $("#ca_web").attr("href", U.siteWeb).text(U.siteWeb);
    }
    bg.contactAdmin.show(true, U.mobile);
  };
  bd.prototype.createDialogs = function () {
    var g = this;
    g.aboutCreate();
    g.accountInfoCreate();
    g.accountSuspendCreate();
    g.arrangeWindowsCreate();
    g.balanceCreate();
    g.balance2Create();
    g.cardDeckCreate();
    g.chipTransferCreate();
    g.contactCreate();
    g.displaySettingsCreate();
    g.faqCreate();
    g.getPasswordCreate();
    g.infoCreate();
    g.languageCreate();
    g.loginCreate();
    g.logoutConfirmCreate();
    g.newsCreate();
    g.noteListCreate();
    g.playerSearchCreate();
    g.popoutChatCreate();
    g.postFlopButtonsCreate();
    g.preFlopButtonsCreate();
    g.recoveryCreate();
    g.retryCreate();
    g.ringFilterCreate();
    g.ringPlayersCreate();
    g.sitnGoPlayersCreate();
    g.sitnGoRegCreate();
    g.soundCreate();
    g.startGameCreate();
    g.tableSelectCreate();
    g.tableSettingsCreate();
    g.tourneyFilterCreate();
    g.tourneyPlayersCreate();
    g.tourneyRegCreate();
    g.tourneyRegOptionCreate();
    g.transactionsCreate();
    g.transferConfirmCreate();
    ak(g, false);
    u(g, false);
  };
  bd.prototype.defaultSize = function () {
    var g = this;
    g.$dialog.css({
      width: 706,
      height: 573,
    });
    g.resize();
  };
  bd.prototype.displaySettingsCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#DisplaySettings");
    bh = new Y(g, bg, {
      title: U.lang.DisplayTitle,
    });
    $("#Interface").text(U.lang.DisplayInterface);
    bh.controls.guiDesktop = new C($("#GUIDesktop"), U.lang.DisplayDesktop);
    bh.controls.guiMobile = new C($("#GUIMobile"), U.lang.DisplayMobile);
    bh.controls.guiAuto = new C($("#GUIAuto"), U.lang.DisplayAutoDetect);
    $("#FontSize").text(U.lang.DisplayFont);
    bh.controls.fontSmall = new C($("#FontSmall"), U.lang.DisplayFontSmall);
    bh.controls.fontNormal = new C($("#FontNormal"), U.lang.DisplayFontNormal);
    bh.controls.fontLarge = new C($("#FontLarge"), U.lang.DisplayFontLarge);
    $("#NumberFormat").text(U.lang.DisplayNumber);
    bh.controls.numberFormat1 = new C($("#NumberFormat1"), "12,345.67");
    bh.controls.numberFormat2 = new C($("#NumberFormat2"), "12.345,67");
    $("#BlockedChat").text(U.lang.DisplayBlocked);
    bh.controls.echoAsterisk = new C(
      $("#EchoAsterisk"),
      U.lang.DisplayAsterisk
    );
    bh.controls.echoNothing = new C($("#EchoNothing"), U.lang.DisplayNothing);
    $("#ChatTimestamps").text(U.lang.DisplayChatTime);
    bh.controls.lobbyChatTime = new E(
      $("#LobbyChatTime"),
      U.lang.DisplayLobbyChatTime
    );
    bh.controls.tableChatTime = new E(
      $("#TableChatTime"),
      U.lang.DisplayTableChatTime
    );
    $("#TimeFormat").text(U.lang.DisplayTime);
    bh.controls.timeFormat12 = new C($("#TimeFormat12"), U.lang.DisplayTime12);
    bh.controls.timeFormat24 = new C($("#TimeFormat24"), U.lang.DisplayTime24);
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.displaySettingsOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.displaySettings = bh;
  };
  bd.prototype.displaySettingsOk = function () {
    var bj, bm, bn, bi, bh, bg, bk, bo, bl, g;
    bj = this;
    g = {};
    bm = bj.displaySettings;
    if (bm.controls.guiDesktop.isChecked()) {
      f("gui", "desktop");
    } else {
      if (bm.controls.guiMobile.isChecked()) {
        f("gui", "mobile");
      } else {
        f("gui", "auto");
      }
    }
    if (U.local.gui == "auto") {
      bn = U.hasTouch;
    } else {
      bn = U.local.gui == "mobile";
    }
    if (bm.controls.fontSmall.isChecked()) {
      f("fontSize", "small");
    } else {
      if (bm.controls.fontLarge.isChecked()) {
        f("fontSize", "large");
      } else {
        f("fontSize", "normal");
      }
    }
    aV();
    bi = bm.controls.numberFormat1.isChecked();
    bh = bm.controls.echoAsterisk.isChecked();
    bg = bm.controls.lobbyChatTime.isChecked();
    bk = bm.controls.tableChatTime.isChecked();
    bo = bm.controls.timeFormat12.isChecked();
    bm.close();
    if (U.pset.DecimalUSA != bi) {
      U.pset.DecimalUSA = bi;
      g.DecimalUSA = bi;
      U.decimalMark = bi ? "." : ",";
      U.thouSeparator = bi ? "," : ".";
    }
    if (U.pset.ChatBlockAsterisk != bh) {
      U.pset.ChatBlockAsterisk = bh;
      g.ChatBlockAsterisk = bh;
    }
    if (U.pset.LobbyChatTime != bg) {
      U.pset.LobbyChatTime = bg;
      g.LobbyChatTime = bg;
      bj.lobbyChatUpdate();
    }
    if (U.pset.TableChatTime != bk) {
      U.pset.TableChatTime = bk;
      g.TableChatTime = bk;
      for (bl = 0; bl < U.tables.length; bl++) {
        U.tables[bl].chatUpdate();
      }
    }
    if (U.pset.TimeFormat12 != bo) {
      U.pset.TimeFormat12 = bo;
      g.TimeFormat12 = bo;
      j({
        Response: "RefreshLists",
      });
    }
    if (bn != U.mobile) {
      U.mobile = bn;
      bj.guiChange();
    }
    al(g);
  };
  bd.prototype.displaySettingsShow = function () {
    var g, bg;
    g = this;
    bg = g.displaySettings;
    if (U.local.gui == "desktop") {
      bg.controls.guiDesktop.setCheck();
    } else {
      if (U.local.gui == "mobile") {
        bg.controls.guiMobile.setCheck();
      } else {
        bg.controls.guiAuto.setCheck();
      }
    }
    if (U.local.fontSize == "small") {
      bg.controls.fontSmall.setCheck();
    } else {
      if (U.local.fontSize == "large") {
        bg.controls.fontLarge.setCheck();
      } else {
        bg.controls.fontNormal.setCheck();
      }
    }
    if (U.pset.DecimalUSA) {
      bg.controls.numberFormat1.setCheck();
    } else {
      bg.controls.numberFormat2.setCheck();
    }
    if (U.pset.ChatBlockAsterisk) {
      bg.controls.echoAsterisk.setCheck();
    } else {
      bg.controls.echoNothing.setCheck();
    }
    bg.controls.lobbyChatTime.setCheck(U.pset.LobbyChatTime);
    bg.controls.tableChatTime.setCheck(U.pset.TableChatTime);
    if (U.pset.TimeFormat12) {
      bg.controls.timeFormat12.setCheck();
    } else {
      bg.controls.timeFormat24.setCheck();
    }
    bg.show(true, U.mobile);
  };
  bd.prototype.faqCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#FAQ");
    bh = new Y(g, bg, {
      minwidth: 250,
      minheight: 150,
      resize: true,
      onresize: function () {
        bg.faqResize();
      },
    });
    bh.controls.faqContent = new x($(".faqcontent", g), false);
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bh.close();
    });
    new A($(".save", g), U.lang.DialogSave, 25, function () {
      P(U.siteName, bh.controls.faqContent.getText(), false);
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.faq = bh;
  };
  bd.prototype.faqResize = function () {
    var g, bg;
    g = this;
    bg = g.faq;
    bg.controls.faqContent.updateScrollPosition();
  };
  bd.prototype.faqShow = function (bh) {
    var g, bg;
    g = this;
    bg = g.faq;
    bg.setTitle(U.lang.FAQTitle);
    bg.show(U.mobile, U.mobile);
    bg.controls.faqContent.setScale(bg.scaleY);
    bg.controls.faqContent.setText(bh);
    bg.controls.faqContent.topScroll();
  };
  bd.prototype.fullScreenToggle = function () {
    var g = this;
    if (!U.fullScreenRequest) {
      g.messageShow(U.lang.LobbyMenuOptionsNoFullScreen);
    } else {
      at(!a4());
    }
  };
  bd.prototype.getPasswordCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#Password");
    bh = new Y(g, bg, {
      title: U.lang.PasswordTitle,
    });
    bh.controls.getPasswordInput = new ax($("#pw_input"), {
      onEnterKey: function () {
        bg.getPasswordOk();
      },
      border: true,
    });
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.getPasswordOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.getPassword = bh;
  };
  bd.prototype.getPasswordOk = function () {
    var bj, bl, bm, bn, bk, bh, bi, g, bg;
    bj = this;
    bl = bj.getPassword;
    bl.close();
    bm = bl.controls.getPasswordInput.getText();
    bn = bl.data.table;
    bk = bl.data.tt;
    bh = bl.data.seat;
    bi = bl.data.command;
    if (bk == "T") {
      g = az(bn);
    } else {
      g = bn;
    }
    U.passwords[bk + g] = bm;
    bg = {
      Response: bi,
    };
    bg.Table = bn;
    bg.Type = bk;
    bg.Seat = bh;
    bg.Password = bm;
    j(bg);
  };
  bd.prototype.getPasswordShow = function (bi, bh, bm, bk) {
    var bg, bj, bl, g;
    bg = this;
    bj = bg.getPassword;
    bj.data.table = bi;
    bj.data.tt = bh;
    bj.data.seat = bm;
    bj.data.command = bk;
    bj.show(true, U.mobile);
    if (bh == "T") {
      bl = az(bi);
    } else {
      bl = bi;
    }
    g = U.lang.PasswordPrompt.split("%1%").join(bl);
    $("#pw_label").text(g);
    bj.controls.getPasswordInput.setText("");
    if (U.hasTouch == false) {
      bj.controls.getPasswordInput.setFocus();
    }
  };
  bd.prototype.guiChange = function () {
    var bg, g;
    bg = this;
    bg.popoutChatClose();
    bg.info.close();
    bg.news.close();
    bg.faq.close();
    U.debugLog.close();
    U.winOfsX = 10;
    U.winOfsY = 10;
    aG();
    if (!bg.showMenu) {
      bg.menuToggle(true);
    }
    if (U.mobile) {
      bg.guiScale();
      $("#Lobby > .header").hide();
      $("#Lobby > .menu").css({
        top: 0,
        height: 40,
        "line-height": "40px",
        "font-size": "1.2em",
      });
      if (U.params.gradients) {
        $("#Lobby > .menu").css("backgroundImage", "url('Image?Name=Grad40')");
      }
      $("#Lobby > .menu_bold").css("width", 120);
      $("#Lobby > .menu ul").css("width", 270);
      $("#Lobby button").css("font-size", "1.2em");
      $("#MobileCap").show();
      $("#MenuCap").css("right", 0).append(bg.$closeBtn.css("top", 12));
      bg.$sitePanel.css({
        top: 40,
        left: 0,
        right: 0,
        height: 3,
      });
      bg.lobbyTabs.$container.css({
        top: 43,
        left: 0,
        right: 0,
        bottom: 0,
      });
      b(".shader", "borderRadius", "0px");
      bg.$loginSelected
        .add(bg.$ringSelected)
        .add(bg.$tourneySelected)
        .add(bg.$sitnGoSelected)
        .css("font-size", "1.2em");
    } else {
      bg.$dialog.css({
        left: U.winOfsX,
        top: U.winOfsY,
        width: 706,
        height: 573,
        transform: "scale(1)",
        borderRadius: "10px 10px 0px 0px",
        boxShadow: "3px 3px 10px 0px #404040",
      });
      bg.dialog.scaleX = 1;
      bg.dialog.scaleY = 1;
      bg.scrollbarScale();
      y();
      $("#Lobby > .header").show();
      $("#Lobby > .menu").css({
        top: 30,
        height: 25,
        "line-height": "25px",
        "font-size": "1.0em",
      });
      if (U.params.gradients) {
        $("#Lobby > .menu").css("backgroundImage", "url('Image?Name=Grad25')");
      }
      $("#Lobby > .menu_bold").css("width", 100);
      $("#Lobby > .menu ul").css("width", 225);
      $("#Lobby > .header").append(bg.$closeBtn.css("top", 7));
      $("#Lobby button").css("font-size", "1.0em");
      $("#MobileCap").hide();
      $("#MenuCap").css("right", 3);
      bg.$sitePanel.css({
        top: 55,
        left: 3,
        right: 3,
        height: 35,
      });
      bg.lobbyTabs.$container.css({
        top: 90,
        left: 3,
        right: 3,
        bottom: 3,
      });
      if (bg.lobbyTabs.getTab() == 4) {
        bg.lobbyTabs.setTab(0);
      }
      b(".shader", "borderRadius", "10px 10px 0px 0px");
      bg.$loginSelected
        .add(bg.$ringSelected)
        .add(bg.$tourneySelected)
        .add(bg.$sitnGoSelected)
        .css("font-size", "1.0em");
    }
    bg.lobbyChatText.guiChange(U.mobile);
    bg.lobbyOpenTables.show(U.mobile);
    bg.lobbyDefault.show(!U.mobile);
    bg.optionsArrange.show(!U.mobile);
    bg.lobbyTabs.showTab(4, U.mobile);
    bg.lobbyTabs.guiChange(U.mobile);
    bg.loginGrid.guiChange(U.mobile);
    bg.ringGrid.guiChange(U.mobile);
    bg.sitnGoGrid.guiChange(U.mobile);
    bg.tourneyGrid.guiChange(U.mobile);
    bg.updateLobbyTitle();
    $(".resize", bg.$dialog).toggle(!U.mobile);
    bg.resize();
    for (g = 0; g < U.tables.length; g++) {
      U.tables[g].guiChange();
    }
  };
  bd.prototype.guiScale = function () {
    var bi, g, bh, bg;
    bi = this;
    g = U.$webClient.width();
    bh = U.$webClient.height();
    bg = g / U.viewPort;
    bi.$dialog
      .css({
        left: 0,
        top: 0,
        borderRadius: 0,
        boxShadow: "none",
        "transform-origin": "left top",
        transform: "scale(" + bg + ")",
        width: g / bg,
        height: bh / bg,
      })
      .show();
    bi.dialog.scaleX = bg;
    bi.dialog.scaleY = bg;
    bi.scrollbarScale();
  };
  bd.prototype.infoCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#Info");
    bh = new Y(g, bg, {
      minwidth: 250,
      minheight: 150,
      resize: true,
      onresize: function () {
        bg.infoResize();
      },
    });
    bh.controls.infoContent = new x($(".infocontent", g), false);
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bh.close();
    });
    new A($(".save", g), U.lang.DialogSave, 25, function () {
      P(U.siteName, bh.controls.infoContent.getText(), false);
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.info = bh;
  };
  bd.prototype.infoResize = function () {
    var g, bg;
    g = this;
    bg = g.info;
    bg.controls.infoContent.updateScrollPosition();
  };
  bd.prototype.infoShow = function (bi, bh) {
    var g, bg;
    g = this;
    bg = g.info;
    bg.setTitle(bi);
    bg.show(U.mobile, U.mobile);
    bg.controls.infoContent.setScale(bg.scaleY);
    bg.controls.infoContent.setText(bh);
    bg.controls.infoContent.topScroll();
  };
  bd.prototype.languageCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#Language");
    bh = new Y(g, bg, {
      title: U.lang.LanguageTitle,
    });
    bh.controls.language1 = new C($("#Language1"), U.lang.Language1);
    bh.controls.language2 = new C($("#Language2"), U.lang.Language2);
    if (U.languages > 2) {
      bh.controls.language3 = new C($("#Language3"), U.lang.Language3);
    }
    if (U.languages > 3) {
      bh.controls.language4 = new C($("#Language4"), U.lang.Language4);
    }
    if (U.languages > 4) {
      bh.controls.language5 = new C($("#Language5"), U.lang.Language5);
    }
    $("#LanguageNote")
      .text(U.lang.LanguageNote)
      .css("color", U.color.ListDisabled);
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.languageOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.language = bh;
  };
  bd.prototype.languageOk = function () {
    var g, bg;
    g = this;
    bg = g.language;
    if (bg.controls.language1.isChecked()) {
      f("language", 1);
    } else {
      if (bg.controls.language2.isChecked()) {
        f("language", 2);
      } else {
        if (U.languages > 2 && bg.controls.language3.isChecked()) {
          f("language", 3);
        } else {
          if (U.languages > 3 && bg.controls.language4.isChecked()) {
            f("language", 4);
          } else {
            if (U.languages > 4 && bg.controls.language5.isChecked()) {
              f("language", 5);
            }
          }
        }
      }
    }
    bg.close();
  };
  bd.prototype.languageShow = function () {
    var g, bg;
    g = this;
    bg = g.language;
    switch (U.local.language) {
      case 1:
        bg.controls.language1.setCheck();
        break;
      case 2:
        bg.controls.language2.setCheck();
        break;
      case 3:
        if (U.languages > 2) {
          bg.controls.language3.setCheck();
        }
        break;
      case 4:
        if (U.languages > 3) {
          bg.controls.language4.setCheck();
        }
        break;
      case 5:
        if (U.languages > 4) {
          bg.controls.language5.setCheck();
        }
        break;
    }
    bg.show(true, U.mobile);
  };
  bd.prototype.lobbyChatEnter = function (bh) {
    var bg, g;
    bg = this;
    g = $.trim(bh);
    if (g == "") {
      return;
    }
    if (U.loggedIn == false) {
      bg.messageShow(U.lang.MessageChatLogin);
    } else {
      j({
        Response: "LobbyChat",
        Text: g,
      });
      bg.lobbyChatEdit.setText("");
      if (U.hasTouch) {
        bg.lobbyChatEdit.unFocus();
      }
    }
  };
  bd.prototype.lobbyChatDisplay = function (g) {
    var bg = this;
    bg.$lobbyChatGroup.toggle(g);
    bg.loginGrid.$grid.css("right", g ? "258px" : "3px");
    bg.loginGrid.resize();
  };
  bd.prototype.lobbyChatUpdate = function () {
    var bg, g, bi, bn, bm, bh, bj, bl, bk;
    bg = this;
    bk = bg.popoutChat;
    g = bk.isVisible();
    if (g) {
      bi = bk.controls.popoutChatText;
    } else {
      bi = bg.lobbyChatText;
    }
    bl = U.pset.LobbyChatTime;
    bm = "";
    for (bh = 0; bh < U.lobbyChatQueue.length; bh++) {
      bn = U.lobbyChatQueue[bh];
      if (g && bl) {
        bj = "[" + bn.time + "] ";
      } else {
        bj = "";
      }
      bm = bm + "<span>";
      if (bn.player != "") {
        bm =
          bm +
          "<font color='" +
          bn.color1 +
          "'>" +
          bj +
          bn.title +
          bn.player +
          ":  </font><font color='" +
          bn.color2 +
          "'>" +
          bn.text +
          "</font>";
      }
      bm = bm + "</span><br>";
    }
    bi.setText(bm);
    bi.bottomScroll();
  };
  bd.prototype.lobbyFront = function () {
    var bg, g;
    bg = this;
    if (U.mobile) {
      return;
    }
    if (bg.isMin) {
      U.minTray.remove(bg);
      bg.$dialog.show();
      bg.isMin = false;
    }
    if (bg.$dialog.css("z-index") < U.zTop) {
      for (g = 0; g < bg.modalList.length; g++) {
        bg.modalList[g].$dialog.css("z-index", ++U.zTop);
      }
    }
    a2(bg.dialog);
  };
  bd.prototype.lobbyTabsChange = function (g, bj) {
    var bh = this,
      bg,
      bi;
    if (U.mobile) {
      if (g != 4 && bj == 4) {
        for (bg = 0; bg < U.tables.length; bg++) {
          U.tables[bg].infoClose();
        }
        bh.infoTabs.toggleIndex(false);
        if (!bh.showMenu) {
          bh.menuToggle(true);
        }
        bh.lobbyTabs.$contents.eq(4).css({
          top: 40,
          left: 3,
          right: 3,
          bottom: 3,
        });
      } else {
        if (g == 4 && bj != 4) {
          bh.infoTabs.toggleIndex(true);
          if (U.tables.length > 0) {
            bh.menuToggle(false);
          }
          for (bg = 0; bg < U.tables.length; bg++) {
            U.tables[bg].resizeTable();
            U.tables[bg].resizeFinish();
          }
          U.returnTab = bj;
        }
      }
      U.soundOk = g == 4;
      bh.updateLobbyTitle();
    }
    bi = false;
    if (g == 1) {
      bg = bh.ringGrid.selrow;
      if (
        bg >= 0 &&
        bg < U.data.Ring.rows.length &&
        U.data.Ring.rows[bg].startCode
      ) {
        bi = true;
      }
    } else {
      if (g == 2) {
        bg = bh.tourneyGrid.selrow;
        if (
          bg >= 0 &&
          bg < U.data.Tourney.rows.length &&
          U.data.Tourney.rows[bg].startCode
        ) {
          bi = true;
        }
      } else {
        if (g == 3) {
          bg = bh.sitnGoGrid.selrow;
          if (
            bg >= 0 &&
            bg < U.data.SitnGo.rows.length &&
            U.data.SitnGo.rows[bg].startCode
          ) {
            bi = true;
          }
        }
      }
    }
    bh.optionsStart.enable(bi && U.loggedIn);
  };
  bd.prototype.loginCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#Login");
    bh = new Y(g, bg, {
      title: U.lang.LoginTitle,
    });
    $("#li_namelabel").text(U.lang.LoginName);
    bh.controls.loginNameInput = new ax($("#li_nameinput"), {
      border: true,
      onEnterKey: function () {
        bg.loginOk();
      },
    });
    $("#li_pwlabel").text(U.lang.LoginPassword);
    bh.controls.loginPWInput = new ax($("#li_pwinput"), {
      border: true,
      password: true,
      onEnterKey: function () {
        bg.loginOk();
      },
    });
    bh.controls.loginPWCheck = new E($("#li_remember"), U.lang.LoginRemember);
    bh.controls.loginCreateBtn = new A(
      $("#li_createbtn"),
      U.lang.LoginAccount,
      20,
      function () {
        bh.close();
        bg.accountCreateShow();
      }
    );
    bh.controls.loginResetBtn = new A(
      $("#li_resetbtn"),
      U.lang.LoginResetPW,
      20,
      function () {
        bg.resetPassword();
      }
    );
    bh.controls.loginResendBtn = new A(
      $("#li_resendbtn"),
      U.lang.LoginResendVC,
      20,
      function () {
        bg.resendValCode();
      }
    );
    bh.controls.$loginValCodeLabel = $("#li_valcodelabel").text(
      U.lang.LoginValCode
    );
    bh.controls.loginValCodeInput = new ax($("#li_valcodeinput"), {
      border: true,
    });
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.loginOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.login = bh;
  };
  bd.prototype.loginOk = function () {
    var bg, bi, g, bh;
    bg = this;
    bi = bg.login;
    bg.logInOutBtn.enable(false);
    M("PlayerName", bi.controls.loginNameInput.getText());
    g = bi.controls.loginPWInput.getText();
    if (bi.controls.loginPWCheck.isChecked() == false) {
      g = "";
    }
    bh = aJ(g);
    M("PlayerHash", bh);
    M("RememberPassword", bi.controls.loginPWCheck.isChecked());
    U.loginData = {};
    U.loginData.player = bi.controls.loginNameInput.getText();
    U.loginData.password = bi.controls.loginPWInput.getText();
    U.loginData.valCode = bi.controls.loginValCodeInput.getText();
    j({
      Response: "LoginRequest",
      Player: U.loginData.player,
    });
    bi.close();
  };
  bd.prototype.loginSaveSort = function () {
    al({
      LoginSortColumn: U.data.Login.sortCol,
      LoginSortAscend: U.data.Login.sortAscend,
    });
  };
  bd.prototype.loginSelect = function (bg) {
    var bi, bh, g, bj;
    bi = this;
    if (bg < 0 || bg >= U.data.Login.rows.length) {
      bh = "";
    } else {
      bj = U.data.Login.rows[bg];
      bh = bj.player;
      g = bj.real + " ";
      if (bj.location != "") {
        g = g + U.lang.MouseOverFrom + " " + bj.location;
      }
      g = $.trim(g);
      if (g != "") {
        bh = bh + " (" + g + ")";
      }
    }
    bi.$loginSelected.text(bh);
  };
  bd.prototype.loginShow = function () {
    var bg, bi, g, bh;
    bg = this;
    bi = bg.login;
    g = aq(aM("PlayerPassword"));
    if (g == "") {
      bh = aq(aM("PlayerHash"));
      g = am(bh);
    } else {
      R("PlayerPassword");
    }
    bi.controls.loginCreateBtn.show(U.newAccounts);
    bi.controls.loginResetBtn.show(U.passwordRecovery);
    bi.controls.loginResendBtn.show(U.passwordRecovery || U.validateEmails);
    bi.controls.$loginValCodeLabel.toggle(
      U.passwordRecovery || U.validateEmails
    );
    bi.controls.loginValCodeInput.show(U.passwordRecovery || U.validateEmails);
    bi.controls.loginNameInput.setText(aq(aM("PlayerName")));
    bi.controls.loginPWInput.setText(g);
    bi.controls.loginPWCheck.setCheck(aq(aM("RememberPassword")) == "true");
    bi.show(true, U.mobile);
    if (U.hasTouch == false) {
      bi.controls.loginNameInput.setFocus();
    }
  };
  bd.prototype.loginTabSetup = function () {
    var g;
    g = this;
    U.data.Login = {};
    U.data.Login.cols = 5;
    U.data.Login.widths = [0.28, 0.12, 0.12, 0.12, 0.36];
    U.data.Login.headers = [
      U.lang.LobbyColumnLoginsPlayer,
      U.lang.LobbyColumnLoginsColor,
      U.lang.LobbyColumnLoginsNote,
      U.lang.LobbyColumnLoginsBlock,
      U.lang.LobbyColumnLoginsTime,
    ];
    U.data.Login.fields = [
      "player",
      "real",
      "location",
      "color",
      "colorSort",
      "note",
      "block",
      "login",
      "loginSort",
    ];
    U.data.Login.fieldsShow = ["player", "color", "note", "block", "login"];
    U.data.Login.fieldsSort = [
      "player",
      "colorSort",
      "note",
      "block",
      "loginSort",
    ];
    U.data.Login.fieldsNum = [false, true, false, false, false];
    U.data.Login.fieldsRight = [false, false, false, false, false];
    U.data.Login.fieldsHTML = [false, true, true, true, false];
    U.data.Login.sortCol = 0;
    U.data.Login.sortAscend = true;
    U.data.Login.sortable = true;
    U.data.Login.rows = [];
    U.data.Login.rowHeight = U.mobile ? 24 : 16;
    g.loginGrid = new ay(
      $("#LoginGrid", g.$dialog),
      U.data.Login,
      function (bg) {
        g.loginSelect(bg);
      },
      function () {
        a0(g.loginGrid.getValue("player"));
      },
      function () {
        g.loginSaveSort();
      }
    );
    g.$lobbyChatGroup = $("#LobbyChatGroup", g.$dialog);
    g.lobbyChatText = new x($("#LobbyChatText", g.$dialog), false);
    g.lobbyChatBtn = new A(
      $("#LobbyChatBtn", g.$dialog),
      U.lang.LobbyButtonChatExt,
      25,
      function () {
        g.popoutChatShow();
      }
    );
    g.lobbyChatEdit = new ax($("#LobbyChatEdit", g.$dialog), {
      onEnterKey: function (bg) {
        g.lobbyChatEnter(bg);
      },
    });
    g.lobbyChatSendBtn = new A(
      $("#LobbyChatSendBtn", g.$dialog),
      "&#8595;",
      25,
      function () {
        g.lobbyChatEnter(g.lobbyChatEdit.getText());
      }
    );
    g.lobbyChatSendBtn.$button.css("border-radius", "0px");
    g.$loginSelected = $("#LoginSelected", g.$dialog);
    g.searchBtn = new A(
      $("#SearchBtn", g.$dialog),
      U.lang.LobbyButtonSearch,
      40,
      function () {
        g.playerSearchShow();
      }
    );
    g.notesBtn = new A(
      $("#NotesBtn", g.$dialog),
      U.lang.LobbyButtonNotes,
      40,
      function () {
        g.noteListShow();
      }
    );
    g.balanceBtn = new A(
      $("#BalanceBtn", g.$dialog),
      U.lang.LobbyButtonBalance,
      40,
      function () {
        j({
          Response: "Balance",
        });
      }
    );
    g.logInOutBtn = new A(
      $("#LogInOutBtn", g.$dialog),
      U.lang.LobbyButtonLogin,
      40,
      function () {
        if (U.loggedIn == false) {
          g.loginShow();
        } else {
          g.close();
        }
      }
    );
  };
  bd.prototype.logoutConfirmCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $(".yesno").clone().removeClass("yesno").appendTo(U.$webClient);
    bh = new Y(g, bg, {
      title: U.lang.DialogConfirm,
    });
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.logoutConfirmOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.logoutConfirm = bh;
  };
  bd.prototype.logoutConfirmOk = function () {
    this.logoutConfirm.close();
    aS(false);
  };
  bd.prototype.logoutConfirmShow = function (g) {
    this.logoutConfirm.showMessage(g, true, U.mobile);
  };
  bd.prototype.maximize = function () {
    var bh, bn, bj, bi, g, bm, bl, bg, bo, bk;
    bh = this;
    bh.popoutChatClose();
    bh.info.close();
    bh.news.close();
    bh.faq.close();
    if (bh.isMax) {
      bk = false;
      bg = bh.restore.left;
      bo = bh.restore.top;
      bn = bh.restore.width;
      bj = bh.restore.height;
    } else {
      bi = U.$webClient.width() - 5;
      g = U.$webClient.height() - 5;
      bm = bi / g;
      bl = 706 / 573;
      if (bm > bl) {
        bj = g;
        bn = Math.floor(g * bl);
      } else {
        bn = bi;
        bj = Math.floor(bi / bl);
      }
      bg = (bi - bn) / 2;
      bo = (g - bj) / 2;
      bk = true;
      bh.restore = {
        left: bh.$dialog.offset().left,
        top: bh.$dialog.offset().top,
        width: bh.$dialog.width(),
        height: bh.$dialog.height(),
      };
    }
    bh.$dialog.css({
      left: bg,
      top: bo,
      width: bn,
      height: bj,
    });
    bh.resize();
    bh.lobbyFront();
    bh.isMax = bk;
  };
  bd.prototype.menuInit = function () {
    var bg = this,
      g;
    bg.$LobbyMenu = $("#LobbyMenu", bg.$dialog).text(U.lang.LobbyMenuLobby);
    bg.lobbyLogins = new ad(
      $("#LobbyLogins", bg.$dialog),
      U.lang.LobbyCaptionLogins,
      function () {
        bg.lobbyTabs.setTab(0);
      },
      true
    );
    bg.lobbyRingGames = new ad(
      $("#LobbyRingGames", bg.$dialog),
      U.lang.LobbyCaptionRingGames,
      function () {
        bg.lobbyTabs.setTab(1);
      },
      true
    );
    bg.lobbyTournaments = new ad(
      $("#LobbyTournaments", bg.$dialog),
      U.lang.LobbyCaptionTournaments,
      function () {
        bg.lobbyTabs.setTab(2);
      },
      true
    );
    bg.lobbySitnGos = new ad(
      $("#LobbySitnGos", bg.$dialog),
      U.lang.LobbyCaptionSitnGos,
      function () {
        bg.lobbyTabs.setTab(3);
      },
      true
    );
    bg.lobbySitnGos.show(U.params.sitAndGoTab);
    bg.lobbyOpenTables = new ad(
      $("#LobbyOpenTables", bg.$dialog),
      U.lang.LobbyCaptionOpen,
      function () {
        bg.lobbyTabs.setTab(4);
      },
      true
    );
    bg.lobbyOpenTables.show(U.mobile);
    bg.lobbyDefault = new ad(
      $("#LobbyDefaultSize", bg.$dialog),
      U.lang.LobbyMenuWindowSize,
      function () {
        bg.defaultSize();
      },
      true
    );
    bg.lobbyExit = new ad(
      $("#LobbyExit", bg.$dialog),
      U.lang.LobbyMenuLobbyExit,
      function () {
        bg.close();
      },
      true
    );
    $("#AccountMenu", bg.$dialog).text(U.lang.LobbyMenuAccount);
    bg.accountLogin = new ad(
      $("#AccountLogin", bg.$dialog),
      U.lang.LobbyMenuAccountLogin,
      function () {
        bg.loginShow();
      },
      true
    );
    bg.accountLogout = new ad(
      $("#AccountLogout", bg.$dialog),
      U.lang.LobbyMenuAccountLogout,
      function () {
        bg.close();
      },
      true
    );
    bg.accountCreate = new ad(
      $("#AccountCreate", bg.$dialog),
      U.lang.LobbyMenuAccountCreate,
      function () {
        bg.accountCreateShow();
      },
      true
    );
    bg.accountChange = new ad(
      $("#AccountChange", bg.$dialog),
      U.lang.LobbyMenuAccountChange,
      function () {
        bg.accountChangeShow();
      },
      true
    );
    bg.accountBalance = new ad(
      $("#AccountBalance", bg.$dialog),
      U.lang.LobbyMenuAccountBalance,
      function () {
        j({
          Response: "Balance",
        });
      },
      false
    );
    bg.accountTickets = new ad(
      $("#AccountTickets", bg.$dialog),
      U.lang.LobbyMenuAccountTickets,
      function () {
        j({
          Response: "Tickets",
        });
      },
      false
    );
    bg.accountPermissions = new ad(
      $("#AccountPermissions", bg.$dialog),
      U.lang.LobbyMenuAccountPerm,
      function () {
        j({
          Response: "Permissions",
        });
      },
      false
    );
    g = U.secondary
      ? U.lang.LobbyMenuAccountTransfer1
      : U.lang.LobbyMenuAccountTransfer;
    bg.accountTransfer1 = new ad(
      $("#AccountTransfer1", bg.$dialog),
      g,
      function () {
        bg.chipTransferShow(true);
      },
      false
    );
    bg.accountTransfer2 = new ad(
      $("#AccountTransfer2", bg.$dialog),
      U.lang.LobbyMenuAccountTransfer2,
      function () {
        bg.chipTransferShow(false);
      },
      false
    );
    g = U.secondary
      ? U.lang.LobbyMenuAccountRequest1
      : U.lang.LobbyMenuAccountRequest;
    bg.accountChipRequest1 = new ad(
      $("#AccountChipRequest1", bg.$dialog),
      g,
      function () {
        j({
          Response: "BalanceReset",
          Primary: "Yes",
        });
      },
      false
    );
    bg.accountChipRequest2 = new ad(
      $("#AccountChipRequest2", bg.$dialog),
      U.lang.LobbyMenuAccountRequest2,
      function () {
        j({
          Response: "BalanceReset",
          Primary: "No",
        });
      },
      false
    );
    bg.accountSelfSuspend = new ad(
      $("#AccountSelfSuspend", bg.$dialog),
      U.lang.LobbyMenuAccountSuspend,
      function () {
        bg.accountSuspendShow();
      },
      false
    );
    bg.accountCustom = new ad(
      $("#AccountCustom", bg.$dialog),
      U.lang.LobbyMenuAccountCustom,
      function () {
        bg.accountCustomShow();
      },
      false
    );
    $("#OptionsMenu", bg.$dialog).text(U.lang.LobbyMenuOptions);
    bg.optionsFullScreen = new ad(
      $("#OptionsFullScreen", bg.$dialog),
      U.lang.LobbyMenuOptionsFullScreen,
      function () {
        bg.fullScreenToggle();
      },
      true
    );
    bg.optionsLanguage = new ad(
      $("#OptionsLanguage", bg.$dialog),
      U.lang.LobbyMenuOptionsLanguage,
      function () {
        bg.languageShow();
      },
      true
    );
    bg.optionsArrange = new ad(
      $("#OptionsArrange", bg.$dialog),
      U.lang.LobbyMenuOptionsArrange,
      function () {
        bg.arrangeWindowsShow();
      },
      true
    );
    bg.optionsDisplay = new ad(
      $("#OptionsDisplay", bg.$dialog),
      U.lang.LobbyMenuOptionsDisplay,
      function () {
        bg.displaySettingsShow();
      },
      true
    );
    bg.optionsTable = new ad(
      $("#OptionsTable", bg.$dialog),
      U.lang.LobbyMenuOptionsTable,
      function () {
        bg.tableSettingsShow();
      },
      true
    );
    bg.optionsSound = new ad(
      $("#OptionsSound", bg.$dialog),
      U.lang.LobbyMenuOptionsSound,
      function () {
        bg.soundShow();
      },
      true
    );
    bg.optionsStart = new ad(
      $("#OptionsStart", bg.$dialog),
      U.lang.LobbyMenuOptionsStart,
      function () {
        bg.startGameShow();
      },
      false
    );
    bg.optionsSearch = new ad(
      $("#OptionsSearch", bg.$dialog),
      U.lang.LobbyMenuOptionsSearch,
      function () {
        bg.playerSearchShow();
      },
      true
    );
    bg.optionsNotes = new ad(
      $("#OptionsNotes", bg.$dialog),
      U.lang.LobbyMenuOptionsNotes,
      function () {
        bg.noteListShow();
      },
      true
    );
    $("#HelpMenu", bg.$dialog)
      .text(U.lang.LobbyMenuHelp)
      .on("touchstart mousedown", function (bh) {
        if (r(bh)) {
          return;
        }
        U.doc.debug = true;
        U.debugTimer = setTimeout(function () {
          if (U.doc.debug) {
            aA();
          }
        }, 2000);
      });
    bg.helpContact = new ad(
      $("#HelpContact", bg.$dialog),
      U.lang.LobbyMenuHelpContact,
      function () {
        bg.contactShow();
      },
      true
    );
    bg.helpNews = new ad(
      $("#HelpNews", bg.$dialog),
      U.lang.LobbyMenuHelpNews,
      function () {
        j({
          Response: "News",
        });
      },
      true
    );
    bg.helpFAQ = new ad(
      $("#HelpFAQ", bg.$dialog),
      U.lang.LobbyMenuHelpFAQ,
      function () {
        j({
          Response: "FAQ",
        });
      },
      true
    );
    bg.helpAbout = new ad(
      $("#HelpAbout", bg.$dialog),
      U.lang.LobbyMenuHelpAbout + " Poker Mavens...",
      function () {
        bg.aboutShow();
      },
      true
    );
    $(".menu", bg.$dialog).css({
      color: U.color.ButtonText,
      "background-color": U.color.Button,
    });
    $(".menu ul", bg.$dialog).css({
      color: U.color.ListText,
      "background-color": U.color.List,
      "border-color": U.color.ListText,
    });
    $(".menu_sep", bg.$dialog).css({
      "background-color": U.color.ListText,
    });
    $(".menu ul li", bg.$dialog).hover(T, d);
  };
  bd.prototype.menuToggle = function (g) {
    var bh, bg;
    bh = this;
    bh.showMenu = g;
    if (bh.showMenu) {
      $("#Lobby > .menu").show();
      bh.$sitePanel.css({
        top: 40,
        left: 0,
        right: 0,
        height: 3,
      });
      bh.lobbyTabs.$container.css({
        top: 43,
        left: 0,
        right: 0,
        bottom: 0,
      });
    } else {
      $("#Lobby > .menu").hide();
      bh.$sitePanel.css({
        top: 0,
        left: 0,
        right: 0,
        height: 3,
      });
      bh.lobbyTabs.$container.css({
        top: 3,
        left: 0,
        right: 0,
        bottom: 0,
      });
    }
    for (bg = 0; bg < U.tables.length; bg++) {
      U.tables[bg].resizeTable();
      U.tables[bg].resizeFinish();
    }
  };
  bd.prototype.messageShow = function (bj, bi) {
    var bg, g, bh;
    bg = this;
    g = $(".message").clone().removeClass("message").appendTo(U.$webClient);
    if (!bi || bi == "") {
      bi = U.lang.DialogMessage;
    }
    bh = new Y(g, bg, {
      title: bi,
      removeonclose: true,
    });
    new A($(".okbtn", g), U.lang.DialogOK, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bh.showMessage(bj, true, U.mobile);
  };
  bd.prototype.minimize = function () {
    var g;
    g = this;
    g.$dialog.hide();
    U.minTray.add(g, function () {
      g.lobbyFront();
    });
    g.isMin = true;
  };
  bd.prototype.mobileIconHintOn = function (bg, g, bl) {
    var bh, bk, bj, bi;
    bh = this;
    bg.css("opacity", 1);
    bh.$mobileIconHint.text(bg.data("hint"));
    bk = (g - bh.$dialog.offset().left) / bh.dialog.scaleX;
    bj = (bl + 30 - bh.$dialog.offset().top) / bh.dialog.scaleY;
    if (bg.data("index") < 8) {
      bi = 0;
    } else {
      bi = bh.$mobileIconHint.width() + 10;
    }
    bh.$mobileIconHint
      .css({
        left: bk - bi,
        top: bj,
      })
      .show()
      .redraw();
  };
  bd.prototype.mobileIconHintOff = function (g) {
    var bg = this;
    g.css("opacity", 0.5);
    bg.$mobileIconHint.hide();
  };
  bd.prototype.mobileIconClick = function (g) {
    var bh, bj, bi, bg;
    bh = this;
    bj = false;
    g.on("touchstart mousedown", function (bk) {
      if (ai(bk)) {
        return;
      }
      if (bk.type == "touchstart") {
        bi = bk.originalEvent.touches[0];
        bg = setTimeout(function () {
          bh.mobileIconHintOn(g, bi.pageX, bi.pageY);
        }, 500);
      }
      bj = true;
      bk.preventDefault();
    });
    g.on("touchend mouseup", function (bk) {
      if (r(bk)) {
        return;
      }
      clearTimeout(bg);
      if ((bh.$mobileIconHint.is(":hidden") || bk.type == "mouseup") && bj) {
        switch (g.data("index")) {
          case 0:
            bh.lobbyTabs.setTab(U.returnTab);
            break;
          case 2:
            U.tables[U.tableCurrent].getRebuy();
            break;
          case 3:
            U.tables[U.tableCurrent].refreshTable();
            break;
          case 4:
            U.tables[U.tableCurrent].rotateSeatsShow(0);
            break;
          case 5:
            U.tables[U.tableCurrent].replayShow();
            break;
          case 7:
            bh.tableSettingsShow();
            break;
          case 8:
            U.tables[U.tableCurrent].leaveShow();
            break;
        }
      }
      if (bk.type == "touchend") {
        bh.mobileIconHintOff(g);
      }
      bj = false;
      bk.preventDefault();
    });
  };
  bd.prototype.mobileIconSetup = function () {
    var bi, bk, g, bh, bj, bg;
    bi = this;
    $("#IconBar", bi.$dialog).css({
      color: U.color.ButtonText,
      "background-color": U.color.Button,
    });
    bi.$mobileIconHint = $("<div>")
      .appendTo(bi.$dialog)
      .addClass("tooltip")
      .hide();
    if (U.params.gradients) {
      $("#IconBar", bi.$dialog).css(
        "background-image",
        "url('Image?Name=Grad30')"
      );
    }
    if (a1(U.color.Button) > 127) {
      bk = 0;
    } else {
      bk = 216;
    }
    bh = [
      "Lobby",
      "Chat",
      "Chips",
      "Refresh",
      "Rotate",
      "Replay",
      "Default",
      "Settings",
      "Leave",
    ];
    bj = [
      U.lang.LobbyMenuLobby,
      U.lang.TableMenuChatInfo,
      U.lang.TableMenuAddChips,
      U.lang.TableMenuRefresh,
      U.lang.TableMenuRotate,
      U.lang.TableMenuReplay,
      U.lang.TableMenuWindowSize,
      U.lang.TableMenuSettings,
      U.lang.TableMenuLeave,
    ];
    for (bg = 0; bg < 9; bg++) {
      if (bg == 1 || bg == 6) {
        continue;
      }
      g = $("#IconBar" + bh[bg], bi.$dialog);
      g.css(
        "background",
        "url('Image?Name=TableIcons&Crc=" +
          U.crc.image +
          "') " +
          (-24 * bg - bk) +
          "px 0px/auto 24px no-repeat"
      );
      g.css("opacity", 0.5);
      g.data("hint", bj[bg]);
      g.data("index", bg);
      g.hover(
        function (bl) {
          bi.mobileIconHintOn($(this), bl.pageX, bl.pageY);
        },
        function () {
          bi.mobileIconHintOff($(this));
        }
      );
      bi.mobileIconClick(g);
    }
  };
  bd.prototype.mobileInfoSave = function () {
    var bh, bg, g, bk, bj, bi;
    bh = this;
    bj = bh.$tableNamePanel.text();
    switch (bh.infoTabs.getTab()) {
      case 0:
        bk = bh.chatInfoText.$memotext.clone();
        $("span", bk).each(function () {
          $(this).replaceWith($(this).text());
        });
        $("font", bk).each(function () {
          $(this).replaceWith($(this).text());
        });
        bg = ag(bk.html());
        P(bj, bg, false);
        break;
      case 1:
        P(bj, bh.generalInfo.getText(), false);
        break;
      case 2:
        P(bj, bh.statsInfo.getText(), false);
        break;
      case 3:
        bi = U.tables[U.tableCurrent];
        bg = "";
        for (g = 0; g < bi.hhData.length; g++) {
          bg = bg + bi.hhData[g] + "<br><br>";
        }
        P(bj, bg, false);
        break;
    }
  };
  bd.prototype.mobileInfoSetup = function () {
    var bh, g, bg;
    bh = this;
    bh.showMenu = true;
    bh.$tableNamePanel = $("#TableNamePanel").css({
      "font-size": "1.15em",
      color: U.color.WindowText,
      "line-height": "25px",
      overflow: "hidden",
    });
    bh.mobileIconSetup();
    $("#mInfoPanel", bh.$dialog).css("background-color", U.color.List);
    g = [
      U.lang.InfoChat,
      U.lang.InfoGeneral,
      U.lang.InfoStats,
      U.lang.InfoHistory,
    ];
    bg = [true, true, true, true];
    bh.infoTabs = new ar($("#mInfoTabs", bh.$dialog), g, bg, function (bj, bi) {
      U.tables[U.tableCurrent].selectInfoTab(bj, bi);
    });
    new A(
      $("#mChatInfoBtn", bh.$dialog),
      U.lang.TableButtonChat,
      25,
      function () {
        U.tables[U.tableCurrent].chatMobileShow();
      }
    );
    bh.chatInfoText = new x($("#mChatInfoText", bh.$dialog), false);
    bh.generalInfo = new x($("#mGeneralInfo", bh.$dialog), false);
    bh.statsInfo = new x($("#mStatsInfo", bh.$dialog), false);
    bh.$historyNumber = $("#mHistoryNumber", bh.$dialog);
    bh.historySlider = new ao($("#mHistorySlider", bh.$dialog), 1, function (
      bi
    ) {
      U.tables[U.tableCurrent].infoDialog.controls.historySlider.setValue(
        bi,
        true
      );
    });
    bh.historySlider.setValue(1, false);
    bh.historyInfo = new x($("#mHistoryInfo", bh.$dialog), false);
    new A($("#mHistoryFirstBtn", bh.$dialog), "|" + U.arrowL, 30, function () {
      U.tables[U.tableCurrent].historyFirst();
    });
    new A($("#mHistoryPrevBtn", bh.$dialog), U.arrowL, 30, function () {
      U.tables[U.tableCurrent].historyPrevious();
    });
    new A($("#mHistoryNextBtn", bh.$dialog), U.arrowR, 30, function () {
      U.tables[U.tableCurrent].historyNext();
    });
    new A($("#mHistoryLastBtn", bh.$dialog), U.arrowR + "|", 30, function () {
      U.tables[U.tableCurrent].historyLast();
    });
    bh.infoTabs.setTab(0, true);
    bh.mControlsHideBtn = new A(
      $("#mControlsHideBtn", bh.$dialog),
      U.lang.DialogHide,
      30,
      function () {
        bh.mobileToggleControls(false);
      }
    );
    bh.mInfoSaveBtn = new A(
      $("#mInfoSaveBtn", bh.$dialog),
      U.lang.DialogSave,
      30,
      function () {
        bh.mobileInfoSave();
      }
    );
    bh.prevTableBtn = new A(
      $("#PrevTableBtn", bh.$dialog),
      U.arrowL + " " + U.lang.TableButtonPrev,
      30,
      function () {
        bh.prevTable();
      }
    );
    bh.nextTableBtn = new A(
      $("#NextTableBtn", bh.$dialog),
      U.lang.TableButtonNext + " " + U.arrowR,
      30,
      function () {
        bh.nextTable();
      }
    );
    bh.mControlsUnhideBtn = new A(
      $("#mControlsUnhideBtn", bh.$dialog),
      "<",
      "16H",
      function () {
        bh.mobileToggleControls(true);
      }
    );
  };
  bd.prototype.mobileToggleControls = function (g) {
    var bg;
    U.mControls = g;
    for (bg = 0; bg < U.tables.length; bg++) {
      U.tables[bg].resizeTable();
      U.tables[bg].resizeFinish();
    }
  };
  bd.prototype.newsCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#News");
    bh = new Y(g, bg, {
      minwidth: 250,
      minheight: 150,
      resize: true,
      onresize: function () {
        bg.newsResize();
      },
    });
    bh.controls.newsContent = new x($(".newscontent", g), false);
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bh.close();
    });
    new A($(".save", g), U.lang.DialogSave, 25, function () {
      P(U.siteName, bh.controls.newsContent.getText(), false);
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.news = bh;
  };
  bd.prototype.newsResize = function () {
    this.news.controls.newsContent.updateScrollPosition();
  };
  bd.prototype.newsShow = function (bh) {
    var g, bg;
    g = this;
    bg = g.news;
    bg.setTitle(U.lang.NewsTitle);
    bg.show(U.mobile, U.mobile);
    bg.controls.newsContent.setScale(bg.scaleY);
    bg.controls.newsContent.setText(bh);
    bg.controls.newsContent.topScroll();
  };
  bd.prototype.nextTable = function () {
    if (U.tableCurrent < U.tables.length - 1) {
      U.tables[U.tableCurrent + 1].bringToFront();
    }
  };
  bd.prototype.noteListCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#NoteList");
    bh = new Y(g, bg, {
      title: U.lang.NoteTitle,
    });
    U.data.Notes = {};
    U.data.Notes.cols = 4;
    U.data.Notes.widths = [0.44, 0.2, 0.18, 0.18];
    U.data.Notes.headers = [
      U.lang.NotePlayer,
      U.lang.NoteColor,
      U.lang.NoteNote,
      U.lang.NoteBlock,
    ];
    U.data.Notes.fields = [
      "player",
      "color",
      "note",
      "block",
      "colorNum",
      "noteText",
      "chatBool",
    ];
    U.data.Notes.fieldsShow = ["player", "color", "note", "block"];
    U.data.Notes.fieldsSort = ["player", "colorNum", "note", "block"];
    U.data.Notes.fieldsNum = [false, true, false, false];
    U.data.Notes.fieldsRight = [false, false, false, false];
    U.data.Notes.fieldsHTML = [false, true, true, true];
    U.data.Notes.sortCol = 0;
    U.data.Notes.sortAscend = true;
    U.data.Notes.sortable = true;
    U.data.Notes.rows = [];
    U.data.Notes.rowHeight = U.mobile ? 24 : 16;
    bh.controls.noteGrid = new ay(
      $("#nl_grid", g),
      U.data.Notes,
      function (bi) {
        bg.noteListSelect(bi);
      },
      function () {
        bg.noteListEdit();
      },
      null
    );
    bh.controls.noteBox = new ab($("#nl_note", g), {
      border: true,
      readonly: true,
    });
    new A($(".leftbtn", g), U.lang.DialogOK, 25, function () {
      bh.close();
    });
    new A($(".middlebtn", g), U.lang.NoteEdit, 25, function () {
      bg.noteListEdit();
    });
    new A($(".rightbtn", g), U.lang.NoteDelete, 25, function () {
      bg.noteListDelete();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.noteList = bh;
  };
  bd.prototype.noteListDelete = function () {
    var bh, bi, bg, g;
    bh = this;
    bi = bh.noteList;
    bg = bi.controls.noteGrid.selrow;
    if (bg < 0) {
      bh.messageShow(U.lang.MessageChatPlayer);
      return;
    }
    g = U.data.Notes.rows[bg].player;
    U.data.Notes.rows.splice(bg, 1);
    bi.controls.noteGrid.update();
    aI(g, "", "", "Yes");
    j({
      Response: "PlayerNote",
      Subject: g,
      Color: 0,
      Chat: "Yes",
      Note: "",
    });
  };
  bd.prototype.noteListEdit = function () {
    var bh, bi, bg, g;
    bh = this;
    bi = bh.noteList;
    bg = bi.controls.noteGrid.selrow;
    if (bg < 0) {
      bh.messageShow(U.lang.MessageChatPlayer);
      return;
    }
    g = U.data.Notes.rows[bg].player;
    ac(bh, g);
  };
  bd.prototype.noteListSelect = function (g) {
    var bh, bi, bg;
    bh = this;
    bi = bh.noteList;
    if (g < 0 || g >= U.data.Notes.rows.length) {
      bg = "";
    } else {
      bg = U.data.Notes.rows[g].noteText;
    }
    bi.controls.noteBox.setText(bg);
  };
  bd.prototype.noteListShow = function () {
    var bh, bj, bg, g, bi;
    bh = this;
    bj = bh.noteList;
    bg = bh.loginGrid.getValue("player");
    if (bg == "") {
      g = -1;
    } else {
      g = bj.controls.noteGrid.getRow(bg, "player");
      if (g < 0) {
        bi = {};
        bi.player = bg;
        bi.color = "";
        bi.note = "";
        bi.block = "";
        bi.colorNum = 0;
        bi.noteText = "";
        bi.chatBool = "Yes";
        U.data.Notes.rows.push(bi);
        bj.controls.noteGrid.sort();
        g = bj.controls.noteGrid.getRow(bg, "player");
      }
    }
    bj.controls.noteGrid.selrow = g;
    bj.controls.noteGrid.toprow = g;
    bh.noteListSelect(g);
    bj.show(true, U.mobile);
    bj.controls.noteGrid.setScale(bj.scaleY);
    bj.controls.noteGrid.resize();
  };
  bd.prototype.playerSearchCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#PlayerSearch");
    bh = new Y(g, bg, {
      title: U.lang.SearchTitle,
    });
    $("#ps_label").text(U.lang.SearchName);
    bh.controls.playerSearchInput = new ax($("#ps_input"), {
      onEnterKey: function () {
        bg.playerSearchOk();
      },
      border: true,
    });
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.playerSearchOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.playerSearch = bh;
  };
  bd.prototype.playerSearchOk = function () {
    var g, bg;
    g = this;
    bg = g.playerSearch;
    bg.close();
    j({
      Response: "PlayerSearch",
      Player: bg.controls.playerSearchInput.getText(),
    });
  };
  bd.prototype.playerSearchShow = function () {
    var g, bh, bg;
    g = this;
    bh = g.playerSearch;
    bh.show(true, U.mobile);
    bg = g.loginGrid.getValue("player");
    bh.controls.playerSearchInput.setText(bg);
    if (U.hasTouch == false) {
      bh.controls.playerSearchInput.setFocus();
    }
  };
  bd.prototype.popoutChatClose = function () {
    var g, bg;
    g = this;
    bg = g.popoutChat;
    if (bg.isVisible()) {
      bg.close();
      g.lobbyChatDisplay(true);
      g.lobbyChatEdit.setText(bg.controls.popoutChatEdit.getText());
      g.lobbyChatUpdate();
    }
  };
  bd.prototype.popoutChatCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#PopoutChat");
    bh = new Y(g, bg, {
      title: U.lang.LobbyCaptionChat,
      minwidth: 250,
      minheight: 200,
      resize: true,
      onresize: function () {
        bg.popoutChatResize();
      },
    });
    bh.controls.popoutChatEdit = new ax($("#PopoutChatEdit"), {
      onEnterKey: function (bi) {
        bg.popoutChatEnter(bi);
      },
    });
    new A($("#PopoutChatSendBtn"), "&#8595;", 25, function () {
      bg.popoutChatEnter(bh.controls.popoutChatEdit.getText());
    }).$button.css("border-radius", "0px");
    bh.controls.popoutChatText = new x($("#PopoutChatText"), false);
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.popoutChatClose();
    });
    new A($(".save", g), U.lang.DialogSave, 25, function () {
      bg.popoutChatSave();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bg.popoutChatClose();
      return false;
    });
    bg.popoutChat = bh;
  };
  bd.prototype.popoutChatEnter = function (bi) {
    var bg, bh, g;
    bg = this;
    bh = bg.popoutChat;
    g = $.trim(bi);
    if (g == "") {
      return;
    }
    if (U.loggedIn == false) {
      bg.messageShow(U.lang.MessageChatLogin);
    } else {
      j({
        Response: "LobbyChat",
        Text: g,
      });
      bh.controls.popoutChatEdit.setText("");
      if (U.hasTouch) {
        bh.controls.popoutChatEdit.unFocus();
      }
    }
  };
  bd.prototype.popoutChatResize = function () {
    this.popoutChat.controls.popoutChatText.updateScrollPosition();
  };
  bd.prototype.popoutChatSave = function () {
    var bg, bh, g;
    bg = this;
    bh = bg.popoutChat.controls.popoutChatText.$memotext.clone();
    $("span", bh).each(function () {
      $(this).replaceWith($(this).text());
    });
    $("font", bh).each(function () {
      $(this).replaceWith($(this).text());
    });
    g = ag(bh.html());
    P(U.siteName, g, false);
  };
  bd.prototype.popoutChatShow = function () {
    var bj, bk, bh, bg, g, bi;
    bj = this;
    bk = bj.popoutChat;
    bj.lobbyChatDisplay(false);
    if (U.mobile) {
      bk.$dialog.css({
        width: 500,
        height: bj.lobbyTabs.$container.height() - 90,
      });
      bk.show(true, true);
    } else {
      bh = bj.$dialog.offset().top;
      bg = bj.$dialog.offset().left + bj.$dialog.outerWidth() + 5;
      g = 350;
      bi = bj.$dialog.height();
      $(".resize", bk.$dialog).show();
      bk.$dialog
        .css({
          top: bh,
          left: bg,
          width: g,
          height: bi,
        })
        .show()
        .css("z-index", ++U.zTop);
      a2(bk);
    }
    bk.controls.popoutChatText.setScale(bk.scaleY);
    bk.controls.popoutChatEdit.setText(bj.lobbyChatEdit.getText());
    bj.lobbyChatUpdate();
  };
  bd.prototype.postFlopButtonsCaller = function (bg, g) {
    return function () {
      bg.postFlopButtonsShow(g);
    };
  };
  bd.prototype.postFlopButtonsCreate = function () {
    var bh, g, bi, bg;
    bh = this;
    g = $("#PostFlopButtons");
    bi = new Y(g, bh, {
      title: U.lang.TableSettingsPostFlopBtns,
    });
    bi.controls.post = [];
    for (bg = 0; bg < 18; bg++) {
      bi.controls.post[bg] = new C(
        $("#post_" + bg),
        U.postFlopButtons[bg],
        bh.postFlopButtonsSelect(bh, bg)
      );
    }
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bh.postFlopButtonsOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bi.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bi.close();
      return false;
    });
    bh.postFlopButtons = bi;
  };
  bd.prototype.postFlopButtonsOk = function () {
    var bg, bi, g, bh;
    bg = this;
    bi = bg.postFlopButtons;
    g = bi.data.btn;
    bh = bi.data.rc;
    bg.tableSettings.data.postFlopBtn[g] = bh;
    bg.tableSettings.controls.postFlopBtn[g].setCaption(U.postFlopButtons[bh]);
    bi.close();
  };
  bd.prototype.postFlopButtonsReset = function () {
    var bh, bj, g, bi, bg;
    bh = this;
    bj = bh.tableSettings;
    bg = [4, 8, 12, 16];
    for (g = 1; g < 5; g++) {
      bi = bg[g - 1];
      bj.data.postFlopBtn[g] = bi;
      bj.controls.postFlopBtn[g].setCaption(U.postFlopButtons[bi]);
    }
  };
  bd.prototype.postFlopButtonsSelect = function (bg, g) {
    return function () {
      bg.postFlopButtons.data.rc = g;
    };
  };
  bd.prototype.postFlopButtonsShow = function (g) {
    var bg, bi, bh;
    bg = this;
    bi = bg.postFlopButtons;
    bi.data.btn = g;
    bh = bg.tableSettings.data.postFlopBtn[g];
    bi.controls.post[bh].setCheck();
    bi.data.rc = bh;
    bi.show(true, U.mobile);
  };
  bd.prototype.preFlopButtonsCaller = function (bg, g) {
    return function () {
      bg.preFlopButtonsShow(g);
    };
  };
  bd.prototype.preFlopButtonsCreate = function () {
    var bh, g, bi, bg;
    bh = this;
    g = $("#PreFlopButtons");
    bi = new Y(g, bh, {
      title: U.lang.TableSettingsPreFlopBtns,
    });
    bi.controls.pre = [];
    for (bg = 0; bg < 11; bg++) {
      bi.controls.pre[bg] = new C(
        $("#pre_" + bg),
        U.preFlopButtons[bg],
        bh.preFlopButtonsSelect(bh, bg)
      );
    }
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bh.preFlopButtonsOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bi.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bi.close();
      return false;
    });
    bh.preFlopButtons = bi;
  };
  bd.prototype.preFlopButtonsOk = function () {
    var bg, bi, g, bh;
    bg = this;
    bi = bg.preFlopButtons;
    g = bi.data.btn;
    bh = bi.data.rc;
    bg.tableSettings.data.preFlopBtn[g] = bh;
    bg.tableSettings.controls.preFlopBtn[g].setCaption(U.preFlopButtons[bh]);
    bi.close();
  };
  bd.prototype.preFlopButtonsReset = function () {
    var bh, bj, g, bi, bg;
    bh = this;
    bj = bh.tableSettings;
    bg = [2, 4, 6, 9];
    for (g = 1; g < 5; g++) {
      bi = bg[g - 1];
      bj.data.preFlopBtn[g] = bi;
      bj.controls.preFlopBtn[g].setCaption(U.preFlopButtons[bi]);
    }
  };
  bd.prototype.preFlopButtonsSelect = function (bg, g) {
    return function () {
      bg.preFlopButtons.data.rc = g;
    };
  };
  bd.prototype.preFlopButtonsShow = function (g) {
    var bg, bi, bh;
    bg = this;
    bi = bg.preFlopButtons;
    bi.data.btn = g;
    bh = bg.tableSettings.data.preFlopBtn[g];
    bi.controls.pre[bh].setCheck();
    bi.data.rc = bh;
    bi.show(true, U.mobile);
  };
  bd.prototype.prevTable = function () {
    if (U.tableCurrent > 0) {
      U.tables[U.tableCurrent - 1].bringToFront();
    }
  };
  bd.prototype.recoveryCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $(".yesno").clone().removeClass("yesno").appendTo(U.$webClient);
    bh = new Y(g, bg, {});
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.recoveryOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.recovery = bh;
  };
  bd.prototype.recoveryOk = function () {
    var g, bg;
    g = this;
    bg = g.recovery;
    bg.close();
    j({
      Response: bg.data.command,
      Player: bg.data.player,
    });
  };
  bd.prototype.recoveryShow = function (bi, g) {
    var bg, bh;
    bg = this;
    bh = bg.recovery;
    bh.setTitle(g);
    bh.showMessage(bi, true, U.mobile);
  };
  bd.prototype.resendValCode = function () {
    var bg, bi, bh, g;
    bg = this;
    bi = bg.login;
    g = bi.controls.loginNameInput.getText();
    if (g == "") {
      bg.messageShow(U.lang.LoginNoName);
    } else {
      bh = bg.recovery;
      bh.data.player = g;
      bh.data.command = "ResendValCode";
      bg.recoveryShow(U.lang.ValCodeMsg1, g);
    }
  };
  bd.prototype.resetPassword = function () {
    var bg, bi, bh, g;
    bg = this;
    bi = bg.login;
    g = bi.controls.loginNameInput.getText();
    if (g == "") {
      bg.messageShow(U.lang.LoginNoName);
    } else {
      bh = bg.recovery;
      bh.data.player = g;
      bh.data.command = "ResetPassword";
      bg.recoveryShow(U.lang.ValCodeMsg2, g);
    }
  };
  bd.prototype.resize = function () {
    var bh, g, bg;
    bh = this;
    bh.isMax = false;
    g = (bh.lobbyTabs.$container.width() - 25) / bh.lobbyTabs.count;
    bh.lobbyTabs.setTabWidth(g);
    bh.loginGrid.resize();
    bh.lobbyChatText.updateScrollPosition();
    bh.ringGrid.resize();
    bh.sitnGoGrid.resize();
    bh.tourneyGrid.resize();
    g = $("#OpenBackground").width();
    bg = $("#OpenBackground").height();
    $("#BGLogo2 img").css({
      "max-width": g,
      "max-height": bg,
    });
  };
  bd.prototype.retryCancel = function () {
    var g = this;
    g.retryMessage.close();
    aS(false);
  };
  bd.prototype.retryCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $(".message").clone().removeClass("message").appendTo(U.$webClient);
    bh = new Y(g, bg, {
      title: U.lang.ConnectTitle,
    });
    new A($(".okbtn", g), U.lang.DialogCancel, 25, function () {
      bg.retryCancel();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bg.retryCancel();
      return false;
    });
    bg.retryMessage = bh;
  };
  bd.prototype.ringFilterChange = function () {
    var bg, bi, g, bh;
    bg = this;
    bh = U.lang.LobbyButtonFilter;
    if (U.pset.filterRingActivate) {
      bh = bh + " " + U.checkMark;
    }
    bg.ringFilterBtn.setCaption(bh);
    bi = "";
    g = bg.ringGrid.selrow;
    if (g >= 0) {
      bi = U.data.Ring.rows[g].id;
    }
    bg.ringFilterData();
    bg.ringGameSelectID(bi);
    bg.ringGrid.sort();
    bg.ringGameSelect(bg.ringGrid.selrow);
    bg.ringTabCaption();
  };
  bd.prototype.ringFilterCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#RingFilter");
    bh = new Y(g, bg, {
      title: U.lang.FilterTitleRing,
    });
    $("#rf_game").text(U.lang.FilterGame);
    bh.controls.rfHoldem = new E($("#rf_holdem"), U.lang.FilterHoldem);
    bh.controls.rfOmaha = new E($("#rf_omaha"), U.lang.FilterOmaha);
    bh.controls.rfOmahaHiLo = new E($("#rf_omahahilo"), U.lang.FilterOmahaHiLo);
    bh.controls.rfOmahaX = new E($("#rf_omahax"), U.lang.FilterOmahaX);
    bh.controls.rfOmahaXHiLo = new E(
      $("#rf_omahaxhilo"),
      U.lang.FilterOmahaXHiLo
    );
    bh.controls.rfRazz = new E($("#rf_razz"), U.lang.FilterRazz);
    bh.controls.rfStud = new E($("#rf_stud"), U.lang.FilterStud);
    bh.controls.rfStudHiLo = new E($("#rf_studhilo"), U.lang.FilterStudHiLo);
    bh.controls.rfMixed = new E($("#rf_mixed"), U.lang.FilterMixed);
    $("#rf_limit").text(U.lang.FilterLimit);
    bh.controls.rfNL = new E($("#rf_nl"), U.lang.FilterNL);
    bh.controls.rfPL = new E($("#rf_pl"), U.lang.FilterPL);
    bh.controls.rfCL = new E($("#rf_cl"), U.lang.FilterCL);
    bh.controls.rfFixed = new E($("#rf_fixed"), U.lang.FilterFixed);
    $("#rf_stakes").text(U.lang.FilterStakes);
    $("#rf_stakesmincap").text(U.lang.FilterMin);
    bh.controls.rfStakesMin = new ax($("#rf_stakesmin"), {
      border: true,
    });
    $("#rf_stakesmaxcap").text(U.lang.FilterMax);
    bh.controls.rfStakesMax = new ax($("#rf_stakesmax"), {
      border: true,
    });
    $("#rf_buyin").text(U.lang.FilterBuyin);
    $("#rf_buyinmincap").text(U.lang.FilterMin);
    bh.controls.rfBuyinMin = new ax($("#rf_buyinmin"), {
      border: true,
    });
    $("#rf_buyinmaxcap").text(U.lang.FilterMax);
    bh.controls.rfBuyinMax = new ax($("#rf_buyinmax"), {
      border: true,
    });
    $("#rf_seats").text(U.lang.FilterSeats);
    $("#rf_seatsmincap").text(U.lang.FilterMin);
    bh.controls.rfSeatsMin = new ax($("#rf_seatsmin"), {
      border: true,
    });
    $("#rf_seatsmaxcap").text(U.lang.FilterMax);
    bh.controls.rfSeatsMax = new ax($("#rf_seatsmax"), {
      border: true,
    });
    $("#rf_players").text(U.lang.FilterPlayers);
    $("#rf_playersmincap").text(U.lang.FilterMin);
    bh.controls.rfPlayersMin = new ax($("#rf_playersmin"), {
      border: true,
    });
    bh.controls.rfHideFull = new E($("#rf_hidefull"), U.lang.FilterFull);
    bh.controls.rfHidePrivate = new E(
      $("#rf_hideprivate"),
      U.lang.FilterPrivate
    );
    bh.controls.$rfCurrency = $("#rf_currency");
    bh.controls.$rfCurrency.text(U.lang.FilterCurrency);
    bh.controls.rfPrimary = new E($("#rf_primary"), U.lang.FilterPrimary);
    bh.controls.rfSecondary = new E($("#rf_secondary"), U.lang.FilterSecondary);
    bh.controls.rfEnabled = new E($("#rf_enabled"), U.lang.FilterEnabled);
    new A($("#rf_reset", g), U.lang.FilterReset, 20, function () {
      bg.ringFilterReset();
    });
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.ringFilterOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.ringFilter = bh;
  };
  bd.prototype.ringFilterData = function () {
    var bs, bl, bj, bo, bp, bg, bh, bn, g, bk, bm, bq, br, bi;
    if (!U.pset.filterRingActivate) {
      U.data.Ring.rows = U.data.Ring.urows.slice(0);
    } else {
      U.data.Ring.rows.length = 0;
      bj = au(U.pset.filterRingStakesMin);
      bo = au(U.pset.filterRingStakesMax);
      bp = au(U.pset.filterRingBuyinMin);
      bg = au(U.pset.filterRingBuyinMax);
      bh = au(U.pset.filterRingSeatsMin);
      bn = au(U.pset.filterRingSeatsMax);
      g = au(U.pset.filterRingPlayersMin);
      bm = U.pset.filterRingPrimary || !U.secondary;
      bq = U.pset.filterRingSecondary && U.secondary;
      bk = U.pset.filterRingHideFull;
      br = U.pset.filterRingHidePrivate;
      for (bi = 0; bi < U.data.Ring.urows.length; bi++) {
        bs = U.data.Ring.urows[bi];
        bl = bs.gameIndex;
        switch (bl) {
          case 0:
            if (!U.pset.filterRingHoldem || !U.pset.filterRingFixed) {
              continue;
            }
            break;
          case 1:
            if (!U.pset.filterRingHoldem || !U.pset.filterRingPL) {
              continue;
            }
            break;
          case 2:
            if (!U.pset.filterRingHoldem || !U.pset.filterRingNL) {
              continue;
            }
            break;
          case 3:
            if (!U.pset.filterRingHoldem || !U.pset.filterRingCL) {
              continue;
            }
            break;
          case 4:
            if (!U.pset.filterRingHoldem || !U.pset.filterRingPL) {
              continue;
            }
            break;
          case 5:
            if (!U.pset.filterRingHoldem || !U.pset.filterRingNL) {
              continue;
            }
            break;
          case 6:
            if (!U.pset.filterRingHoldem || !U.pset.filterRingCL) {
              continue;
            }
            break;
          case 7:
            if (!U.pset.filterRingOmaha || !U.pset.filterRingFixed) {
              continue;
            }
            break;
          case 8:
            if (!U.pset.filterRingOmaha || !U.pset.filterRingPL) {
              continue;
            }
            break;
          case 9:
            if (!U.pset.filterRingOmaha || !U.pset.filterRingNL) {
              continue;
            }
            break;
          case 10:
            if (!U.pset.filterRingOmaha || !U.pset.filterRingCL) {
              continue;
            }
            break;
          case 11:
            if (!U.pset.filterRingOmahaHiLo || !U.pset.filterRingFixed) {
              continue;
            }
            break;
          case 12:
            if (!U.pset.filterRingOmahaHiLo || !U.pset.filterRingPL) {
              continue;
            }
            break;
          case 13:
            if (!U.pset.filterRingOmahaHiLo || !U.pset.filterRingNL) {
              continue;
            }
            break;
          case 14:
            if (!U.pset.filterRingOmahaHiLo || !U.pset.filterRingCL) {
              continue;
            }
            break;
          case 15:
            if (!U.pset.filterRingOmahaX || !U.pset.filterRingFixed) {
              continue;
            }
            break;
          case 16:
            if (!U.pset.filterRingOmahaX || !U.pset.filterRingPL) {
              continue;
            }
            break;
          case 17:
            if (!U.pset.filterRingOmahaX || !U.pset.filterRingNL) {
              continue;
            }
            break;
          case 18:
            if (!U.pset.filterRingOmahaX || !U.pset.filterRingCL) {
              continue;
            }
            break;
          case 19:
            if (!U.pset.filterRingOmahaXHiLo || !U.pset.filterRingFixed) {
              continue;
            }
            break;
          case 20:
            if (!U.pset.filterRingOmahaXHiLo || !U.pset.filterRingPL) {
              continue;
            }
            break;
          case 21:
            if (!U.pset.filterRingOmahaXHiLo || !U.pset.filterRingNL) {
              continue;
            }
            break;
          case 22:
            if (!U.pset.filterRingOmahaXHiLo || !U.pset.filterRingCL) {
              continue;
            }
            break;
          case 23:
            if (!U.pset.filterRingOmahaX || !U.pset.filterRingFixed) {
              continue;
            }
            break;
          case 24:
            if (!U.pset.filterRingOmahaX || !U.pset.filterRingPL) {
              continue;
            }
            break;
          case 25:
            if (!U.pset.filterRingOmahaX || !U.pset.filterRingNL) {
              continue;
            }
            break;
          case 26:
            if (!U.pset.filterRingOmahaX || !U.pset.filterRingCL) {
              continue;
            }
            break;
          case 27:
            if (!U.pset.filterRingOmahaXHiLo || !U.pset.filterRingFixed) {
              continue;
            }
            break;
          case 28:
            if (!U.pset.filterRingOmahaXHiLo || !U.pset.filterRingPL) {
              continue;
            }
            break;
          case 29:
            if (!U.pset.filterRingOmahaXHiLo || !U.pset.filterRingNL) {
              continue;
            }
            break;
          case 30:
            if (!U.pset.filterRingOmahaXHiLo || !U.pset.filterRingCL) {
              continue;
            }
            break;
          case 31:
            if (!U.pset.filterRingOmahaX || !U.pset.filterRingFixed) {
              continue;
            }
            break;
          case 32:
            if (!U.pset.filterRingOmahaX || !U.pset.filterRingPL) {
              continue;
            }
            break;
          case 33:
            if (!U.pset.filterRingOmahaX || !U.pset.filterRingNL) {
              continue;
            }
            break;
          case 34:
            if (!U.pset.filterRingOmahaX || !U.pset.filterRingCL) {
              continue;
            }
            break;
          case 35:
            if (!U.pset.filterRingOmahaXHiLo || !U.pset.filterRingFixed) {
              continue;
            }
            break;
          case 36:
            if (!U.pset.filterRingOmahaXHiLo || !U.pset.filterRingPL) {
              continue;
            }
            break;
          case 37:
            if (!U.pset.filterRingOmahaXHiLo || !U.pset.filterRingNL) {
              continue;
            }
            break;
          case 38:
            if (!U.pset.filterRingOmahaXHiLo || !U.pset.filterRingCL) {
              continue;
            }
            break;
          case 39:
            if (!U.pset.filterRingRazz || !U.pset.filterRingFixed) {
              continue;
            }
            break;
          case 40:
            if (!U.pset.filterRingStud || !U.pset.filterRingFixed) {
              continue;
            }
            break;
          case 41:
            if (!U.pset.filterRingStudHiLo || !U.pset.filterRingFixed) {
              continue;
            }
            break;
          case 42:
            if (!U.pset.filterRingMixed) {
              continue;
            }
            break;
          case 43:
            if (!U.pset.filterRingMixed) {
              continue;
            }
            break;
        }
        if (bs.stakesLo < bj) {
          continue;
        }
        if (bo > 0 && bs.stakesHi > bo) {
          continue;
        }
        if (bs.buyinMin < bp) {
          continue;
        }
        if (bg > 0 && bs.buyinMax > bg) {
          continue;
        }
        if (bs.seats < bh) {
          continue;
        }
        if (bn > 0 && bs.seats > bn) {
          continue;
        }
        if (bs.playing < g) {
          continue;
        }
        if (bk && bs.playing == bs.seats) {
          continue;
        }
        if (br && bs.password != "No") {
          continue;
        }
        if (!bm && bs.primary) {
          continue;
        }
        if (!bq && !bs.primary) {
          continue;
        }
        U.data.Ring.rows.push(bs);
      }
    }
  };
  bd.prototype.ringFilterOk = function () {
    var g, bi, bh;
    g = this;
    bi = g.ringFilter;

    function bg(bj, bk) {
      var bl = "filterRing" + bj;
      if (U.pset[bl] != bk) {
        U.pset[bl] = bk;
        bh[bl] = bk;
      }
    }
    bh = {};
    bg("Holdem", bi.controls.rfHoldem.isChecked());
    bg("Omaha", bi.controls.rfOmaha.isChecked());
    bg("OmahaHiLo", bi.controls.rfOmahaHiLo.isChecked());
    bg("OmahaX", bi.controls.rfOmahaX.isChecked());
    bg("OmahaXHiLo", bi.controls.rfOmahaXHiLo.isChecked());
    bg("Razz", bi.controls.rfRazz.isChecked());
    bg("Stud", bi.controls.rfStud.isChecked());
    bg("StudHiLo", bi.controls.rfStudHiLo.isChecked());
    bg("Mixed", bi.controls.rfMixed.isChecked());
    bg("NL", bi.controls.rfNL.isChecked());
    bg("PL", bi.controls.rfPL.isChecked());
    bg("CL", bi.controls.rfCL.isChecked());
    bg("Fixed", bi.controls.rfFixed.isChecked());
    bg("StakesMin", bi.controls.rfStakesMin.getText());
    bg("StakesMax", bi.controls.rfStakesMax.getText());
    bg("BuyinMin", bi.controls.rfBuyinMin.getText());
    bg("BuyinMax", bi.controls.rfBuyinMax.getText());
    bg("SeatsMin", bi.controls.rfSeatsMin.getText());
    bg("SeatsMax", bi.controls.rfSeatsMax.getText());
    bg("PlayersMin", bi.controls.rfPlayersMin.getText());
    if (U.secondary) {
      bg("Primary", bi.controls.rfPrimary.isChecked());
      bg("Secondary", bi.controls.rfSecondary.isChecked());
    }
    bg("HideFull", bi.controls.rfHideFull.isChecked());
    bg("HidePrivate", bi.controls.rfHidePrivate.isChecked());
    bg("Activate", bi.controls.rfEnabled.isChecked());
    bi.close();
    g.ringFilterChange();
    al(bh);
  };
  bd.prototype.ringFilterReset = function () {
    var g, bg;
    g = this;
    bg = g.ringFilter;
    bg.controls.rfHoldem.setCheck(true);
    bg.controls.rfOmaha.setCheck(true);
    bg.controls.rfOmahaHiLo.setCheck(true);
    bg.controls.rfOmahaX.setCheck(true);
    bg.controls.rfOmahaXHiLo.setCheck(true);
    bg.controls.rfRazz.setCheck(true);
    bg.controls.rfStud.setCheck(true);
    bg.controls.rfStudHiLo.setCheck(true);
    bg.controls.rfMixed.setCheck(true);
    bg.controls.rfNL.setCheck(true);
    bg.controls.rfPL.setCheck(true);
    bg.controls.rfCL.setCheck(true);
    bg.controls.rfFixed.setCheck(true);
    bg.controls.rfStakesMin.setText("");
    bg.controls.rfStakesMax.setText("");
    bg.controls.rfBuyinMin.setText("");
    bg.controls.rfBuyinMax.setText("");
    bg.controls.rfSeatsMin.setText("");
    bg.controls.rfSeatsMax.setText("");
    bg.controls.rfPlayersMin.setText("");
    bg.controls.rfPrimary.setCheck(true);
    bg.controls.rfSecondary.setCheck(true);
    bg.controls.rfHideFull.setCheck(false);
    bg.controls.rfHidePrivate.setCheck(false);
  };
  bd.prototype.ringFilterShow = function () {
    var g, bg;
    g = this;
    bg = g.ringFilter;
    bg.controls.rfHoldem.setCheck(U.pset.filterRingHoldem);
    bg.controls.rfOmaha.setCheck(U.pset.filterRingOmaha);
    bg.controls.rfOmahaHiLo.setCheck(U.pset.filterRingOmahaHiLo);
    bg.controls.rfOmahaX.setCheck(U.pset.filterRingOmahaX);
    bg.controls.rfOmahaXHiLo.setCheck(U.pset.filterRingOmahaXHiLo);
    bg.controls.rfRazz.setCheck(U.pset.filterRingRazz);
    bg.controls.rfStud.setCheck(U.pset.filterRingStud);
    bg.controls.rfStudHiLo.setCheck(U.pset.filterRingStudHiLo);
    bg.controls.rfMixed.setCheck(U.pset.filterRingMixed);
    bg.controls.rfNL.setCheck(U.pset.filterRingNL);
    bg.controls.rfPL.setCheck(U.pset.filterRingPL);
    bg.controls.rfCL.setCheck(U.pset.filterRingCL);
    bg.controls.rfFixed.setCheck(U.pset.filterRingFixed);
    bg.controls.rfStakesMin.setText(U.pset.filterRingStakesMin);
    bg.controls.rfStakesMax.setText(U.pset.filterRingStakesMax);
    bg.controls.rfBuyinMin.setText(U.pset.filterRingBuyinMin);
    bg.controls.rfBuyinMax.setText(U.pset.filterRingBuyinMax);
    bg.controls.rfSeatsMin.setText(U.pset.filterRingSeatsMin);
    bg.controls.rfSeatsMax.setText(U.pset.filterRingSeatsMax);
    bg.controls.rfPlayersMin.setText(U.pset.filterRingPlayersMin);
    bg.controls.$rfCurrency.toggle(U.secondary);
    bg.controls.rfPrimary.show(U.secondary);
    bg.controls.rfSecondary.show(U.secondary);
    if (U.secondary) {
      bg.controls.rfPrimary.setCheck(U.pset.filterRingPrimary);
      bg.controls.rfSecondary.setCheck(U.pset.filterRingSecondary);
    }
    bg.controls.rfHideFull.setCheck(U.pset.filterRingHideFull);
    bg.controls.rfHidePrivate.setCheck(U.pset.filterRingHidePrivate);
    bg.controls.rfEnabled.setCheck(U.pset.filterRingActivate);
    bg.show(true, U.mobile);
  };
  bd.prototype.ringGameNext = function () {
    var bg, g, bh;
    bg = this;
    g = bg.ringGrid.selrow;
    if (g < 0 || g >= U.data.Ring.rows.length - 1) {
      return;
    }
    g++;
    bg.ringGrid.selrow = g;
    bg.ringGrid.scrollIntoView();
    bg.ringGameSelect(g);
    bh = U.data.Ring.rows[g];
    bg.ringPlayers.setTitle(bh.id + " - " + bh.game + " (" + bh.stakes + ")");
  };
  bd.prototype.ringGamePrev = function () {
    var bg, g, bh;
    bg = this;
    g = bg.ringGrid.selrow;
    if (g <= 0) {
      return;
    }
    g--;
    bg.ringGrid.selrow = g;
    bg.ringGrid.scrollIntoView();
    bg.ringGameSelect(g);
    bh = U.data.Ring.rows[g];
    bg.ringPlayers.setTitle(bh.id + " - " + bh.game + " (" + bh.stakes + ")");
  };
  bd.prototype.ringGameSelect = function (g) {
    var bg, bi, bh;
    bg = this;
    if (g < 0 || g >= U.data.Ring.rows.length) {
      bg.ringUnselect();
    } else {
      bi = bg.ringSelected != U.data.Ring.rows[g].id;
      bg.ringSelected = U.data.Ring.rows[g].id;
      bg.ringInfoBtn.enable(true);
      bg.ringObserveBtn.enable(true);
      bg.ringPlayersBtn.enable(true);
      bh = U.data.Ring.rows[g].playing == U.data.Ring.rows[g].seats;
      bg.ringWaitBtn.enable(bh);
      bg.ringWait2Btn.enable(bh);
      bg.ringPrevBtn.enable(g > 0);
      bg.ringNextBtn.enable(g < U.data.Ring.rows.length - 1);
      bg.optionsStart.enable(U.data.Ring.rows[g].startCode && U.loggedIn);
      if (bi) {
        j({
          Response: "GameSelected",
          Table: bg.ringSelected,
          Type: "R",
          SnG: "No",
        });
      }
    }
  };
  bd.prototype.ringGameSelectID = function (bi) {
    var bg, bh, g;
    bg = this;
    bg.ringGrid.selrow = -1;
    if (bi == "") {
      bg.ringUnselect();
      return;
    }
    bh = U.data.Ring.rows.length;
    for (g = 0; g < bh; g++) {
      if (bi == U.data.Ring.rows[g].id) {
        bg.ringGrid.selrow = g;
        break;
      }
    }
  };
  bd.prototype.ringInfoRequest = function () {
    var g, bg;
    g = this;
    if (g.ringSelected == "") {
      g.messageShow(U.lang.LobbyCaptionNoRingGame);
      return;
    }
    bg = {
      Response: "TableInfo",
    };
    bg.Table = g.ringSelected;
    bg.Type = "R";
    j(bg);
  };
  bd.prototype.ringPlayerSaveSort = function () {
    al({
      RingPlayerSortColumn: U.data.RingPlayer.sortCol,
      RingPlayerSortAscend: U.data.RingPlayer.sortAscend,
    });
  };
  bd.prototype.ringPlayersCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#RingPlayers");
    bh = new Y(g, bg, {
      title: "",
    });
    bg.ringPrevBtn = new A(
      $("#RingPrevBtn", g),
      U.lang.LobbyButtonRingPrev,
      25,
      function () {
        bg.ringGamePrev();
      }
    );
    bg.ringNextBtn = new A(
      $("#RingNextBtn", g),
      U.lang.LobbyButtonRingNext,
      25,
      function () {
        bg.ringGameNext();
      }
    );
    bg.ringWait2Btn = new A(
      $("#RingWait2Btn", g),
      U.lang.LobbyButtonRingJoin,
      25,
      function () {
        bg.ringRegister();
      }
    );
    new A($(".okbtn", g), U.lang.DialogOK, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.ringPlayers = bh;
  };
  bd.prototype.ringPlayersShow = function () {
    var bg, bi, g, bh;
    bg = this;
    bi = bg.ringPlayers;
    g = bg.ringGrid.selrow;
    if (g < 0) {
      return;
    }
    bh = U.data.Ring.rows[g];
    bi.setTitle(bh.id + " - " + bh.game + " (" + bh.stakes + ")");
    bi.show(true, U.mobile);
    bg.ringPlayerGrid.setScale(bi.scaleY);
    bg.ringPlayerGrid.resize();
    bg.ringWaitGrid.setScale(bi.scaleY);
    bg.ringWaitGrid.resize();
  };
  bd.prototype.ringRegister = function () {
    var bi, g, bh, bj, bk, bg;
    bi = this;
    g = bi.ringGrid.selrow;
    if (g < 0) {
      bi.messageShow(U.lang.LobbyCaptionNoRingGame);
      return;
    }
    if (U.loggedIn == false) {
      bi.messageShow(U.lang.MessageRingGameLogin);
      return;
    }
    bh = U.data.Ring.rows[g].password;
    bj = bh == "Yes" || bh == "Yes+";
    bk = U.data.Ring.rows[g].id;
    bg = bi.ringWaitBtn.getCaption() == U.lang.LobbyButtonRingJoin;
    if (bg == true) {
      z("Register", bk, "R", bj, 0);
    } else {
      j({
        Response: "Unregister",
        Table: bk,
        Type: "R",
      });
    }
  };
  bd.prototype.ringSaveSort = function () {
    al({
      RingSortColumn: U.data.Ring.sortCol,
      RingSortAscend: U.data.Ring.sortAscend,
    });
  };
  bd.prototype.ringTabCaption = function () {
    var g, bg;
    g = this;
    bg = U.lang.LobbyCaptionRingGames + ": ";
    if (U.pset.filterRingActivate) {
      bg = bg + U.data.Ring.rows.length + "/";
    }
    bg = bg + U.data.Ring.urows.length;
    g.lobbyTabs.setCaption(1, bg);
    g.lobbyRingGames.$menu.text(bg);
  };
  bd.prototype.ringTableOpen = function (bg) {
    var bh, bi, g;
    bh = this;
    if (bg < 0) {
      bh.messageShow(U.lang.LobbyCaptionNoRingGame);
      return;
    }
    bi = U.data.Ring.rows[bg].password == "Yes+";
    g = U.data.Ring.rows[bg].id;
    z("OpenTable", g, "R", bi, 0);
  };
  bd.prototype.ringTableSelectedOpen = function () {
    var g = this;
    g.ringTableOpen(g.ringGrid.selrow);
  };
  bd.prototype.ringTabSetup = function () {
    var g, bg;
    g = this;
    U.data.Ring = {};
    U.data.Ring.cols = 7;
    U.data.Ring.sortCol = 0;
    U.data.Ring.sortAscend = true;
    U.data.Ring.sortable = true;
    U.data.Ring.widths = [0.26, 0.18, 0.15, 0.17, 0.08, 0.08, 0.08];
    U.data.Ring.rows = [];
    U.data.Ring.urows = [];
    U.data.Ring.rowHeight = U.mobile ? 24 : 16;
    U.data.Ring.headers = [
      U.lang.LobbyColumnRingID,
      U.lang.LobbyColumnRingGame,
      U.lang.LobbyColumnRingStakes,
      U.lang.LobbyColumnRingBuyIn,
      U.lang.LobbyColumnRingSeats,
      U.lang.LobbyColumnRingPlay,
      U.lang.LobbyColumnRingWait,
    ];
    U.data.Ring.fields = [
      "id",
      "game",
      "gameIndex",
      "stakes",
      "stakesLo",
      "stakesHi",
      "stakesSort",
      "buyin",
      "buyinMin",
      "buyinMax",
      "buyinSort",
      "seats",
      "playing",
      "waiting",
      "password",
    ];
    U.data.Ring.fieldsShow = [
      "id",
      "game",
      "stakes",
      "buyin",
      "seats",
      "playing",
      "waiting",
    ];
    U.data.Ring.fieldsSort = [
      "id",
      "game",
      "stakesSort",
      "buyinSort",
      "seats",
      "playing",
      "waiting",
    ];
    U.data.Ring.fieldsNum = [false, false, false, false, true, true, true];
    U.data.Ring.fieldsRight = [false, false, false, false, false, false, false];
    U.data.Ring.fieldsHTML = [false, false, false, false, false, false, false];
    g.ringGrid = new ay(
      $("#RingGrid", g.$dialog),
      U.data.Ring,
      function (bh) {
        g.ringGameSelect(bh);
      },
      function (bh) {
        g.ringTableOpen(bh);
      },
      function () {
        g.ringSaveSort();
      }
    );
    bg = U.lang.LobbyButtonFilter;
    if (U.pset.filterRingActivate) {
      bg = bg + " " + U.checkMark;
    }
    g.ringFilterBtn = new A(
      $("#RingFilterBtn", g.$dialog),
      bg,
      40,
      function () {
        g.ringFilterShow();
      }
    );
    g.ringObserveBtn = new A(
      $("#RingObserveBtn", g.$dialog),
      U.lang.LobbyButtonRingObserve,
      40,
      function () {
        g.ringTableSelectedOpen();
      }
    );
    g.ringInfoBtn = new A(
      $("#RingInfoBtn", g.$dialog),
      U.lang.LobbyButtonRingInfo,
      40,
      function () {
        g.ringInfoRequest();
      }
    );
    g.ringPlayersBtn = new A(
      $("#RingPlayersBtn", g.$dialog),
      U.lang.LobbyButtonRingPlayers,
      40,
      function () {
        g.ringPlayersShow();
      }
    );
    g.ringWaitBtn = new A(
      $("#RingWaitBtn", g.$dialog),
      U.lang.LobbyButtonRingJoin,
      40,
      function () {
        g.ringRegister();
      }
    );
    g.ringSelected = "";
    g.$ringSelected = $("#RingSelected", g.$dialog);
    U.data.RingPlayer = {};
    U.data.RingPlayer.cols = 3;
    U.data.RingPlayer.sortCol = 0;
    U.data.RingPlayer.sortAscend = true;
    U.data.RingPlayer.sortable = true;
    U.data.RingPlayer.widths = [0.4, 0.3, 0.3];
    U.data.RingPlayer.rows = [];
    U.data.RingPlayer.rowHeight = 16;
    U.data.RingPlayer.headers = [
      U.lang.LobbyColumnRingPlayer,
      U.lang.LobbyColumnRingChips,
      U.lang.LobbyColumnRingNet,
    ];
    U.data.RingPlayer.fields = [
      "player",
      "chips",
      "chipsSort",
      "net",
      "netSort",
    ];
    U.data.RingPlayer.fieldsShow = ["player", "chips", "net"];
    U.data.RingPlayer.fieldsSort = ["player", "chipsSort", "netSort"];
    U.data.RingPlayer.fieldsNum = [false, true, true];
    U.data.RingPlayer.fieldsRight = [false, false, false];
    U.data.RingPlayer.fieldsHTML = [false, false, false];
    if (!U.params.showNetChips) {
      U.data.RingPlayer.cols--;
      U.data.RingPlayer.widths = [0.6, 0.4];
      U.data.RingPlayer.headers.splice(2, 1);
      U.data.RingPlayer.fieldsShow.splice(2, 1);
      U.data.RingPlayer.fieldsSort.splice(2, 1);
      U.data.RingPlayer.fieldsNum.splice(2, 1);
      U.data.RingPlayer.fieldsRight.splice(2, 1);
      U.data.RingPlayer.fieldsHTML.splice(2, 1);
    }
    g.ringPlayerGrid = new ay(
      $("#RingPlayerGrid", g.ringPlayers.$dialog),
      U.data.RingPlayer,
      null,
      null,
      function () {
        g.ringPlayerSaveSort();
      }
    );
    U.data.RingWait = {};
    U.data.RingWait.cols = 2;
    U.data.RingWait.sortCol = -1;
    U.data.RingWait.sortAscend = true;
    U.data.RingWait.sortable = false;
    U.data.RingWait.widths = [0.23, 0.77];
    U.data.RingWait.rows = [];
    U.data.RingWait.rowHeight = 16;
    U.data.RingWait.headers = ["#", U.lang.LobbyColumnRingWaiting];
    U.data.RingWait.fields = ["pos", "player"];
    U.data.RingWait.fieldsShow = ["pos", "player"];
    U.data.RingWait.fieldsSort = ["pos", "player"];
    U.data.RingWait.fieldsNum = [true, false];
    U.data.RingWait.fieldsRight = [false, false];
    U.data.RingWait.fieldsHTML = [false, false];
    g.ringWaitGrid = new ay(
      $("#RingWaitGrid", g.ringPlayers.$dialog),
      U.data.RingWait
    );
  };
  bd.prototype.ringUnselect = function () {
    var g = this;
    g.ringSelected = "";
    g.$ringSelected.text(U.lang.LobbyCaptionNoRingGame);
    U.data.RingPlayer.rows.length = 0;
    g.ringPlayerGrid.update();
    U.data.RingWait.rows.length = 0;
    g.ringWaitGrid.update();
    g.ringInfoBtn.enable(false);
    g.ringObserveBtn.enable(false);
    g.ringPlayersBtn.enable(false);
    g.ringWaitBtn.enable(false);
    g.ringWait2Btn.enable(false);
    g.ringPrevBtn.enable(false);
    g.ringNextBtn.enable(false);
    g.optionsStart.enable(false);
    g.ringPlayers.close();
  };
  bd.prototype.scrollbarScale = function () {
    var g, bh, bg;
    g = this;
    bh = g.dialog.scaleX;
    bg = g.dialog.scaleY;
    g.loginGrid.setScale(bg);
    g.lobbyChatText.setScale(bg);
    g.ringGrid.setScale(bg);
    g.sitnGoGrid.setScale(bg);
    g.tourneyGrid.setScale(bg);
    g.chatInfoText.setScale(bg);
    g.statsInfo.setScale(bg);
    g.historySlider.setScale(bh);
  };
  bd.prototype.setCaption = function (g) {
    this.dialog.setTitle(g);
  };
  bd.prototype.sitnGoFilterData = function () {
    var bn, bi, bl, g, bg, bj, bk, bm, bh;
    if (!U.params.sitAndGoTab) {
      return;
    }
    U.data.SitnGo.total = U.data.Tourney.urows.length;
    U.data.SitnGo.rows.length = 0;
    if (!U.pset.filterSitnGoActivate) {
      for (bh = 0; bh < U.data.Tourney.urows.length; bh++) {
        bn = U.data.Tourney.urows[bh];
        if (!bn.sng) {
          U.data.SitnGo.total--;
        } else {
          U.data.SitnGo.rows.push(bn);
        }
      }
    } else {
      bl = au(U.pset.filterSitnGoBuyinMin);
      g = au(U.pset.filterSitnGoBuyinMax);
      bg = au(U.pset.filterSitnGoSizeMin);
      bj = au(U.pset.filterSitnGoSizeMax);
      bk = U.pset.filterSitnGoPrimary || !U.secondary;
      bm = U.pset.filterSitnGoSecondary && U.secondary;
      for (bh = 0; bh < U.data.Tourney.urows.length; bh++) {
        bn = U.data.Tourney.urows[bh];
        if (!bn.sng) {
          U.data.SitnGo.total--;
          continue;
        }
        bi = bn.gameIndex;
        switch (bi) {
          case 0:
            if (!U.pset.filterSitnGoHoldem || !U.pset.filterSitnGoFixed) {
              continue;
            }
            break;
          case 1:
            if (!U.pset.filterSitnGoHoldem || !U.pset.filterSitnGoPL) {
              continue;
            }
            break;
          case 2:
            if (!U.pset.filterSitnGoHoldem || !U.pset.filterSitnGoNL) {
              continue;
            }
            break;
          case 3:
            continue;
            break;
          case 4:
            if (!U.pset.filterSitnGoHoldem || !U.pset.filterSitnGoPL) {
              continue;
            }
            break;
          case 5:
            if (!U.pset.filterSitnGoHoldem || !U.pset.filterSitnGoNL) {
              continue;
            }
            break;
          case 6:
            continue;
            break;
          case 7:
            if (!U.pset.filterSitnGoOmaha || !U.pset.filterSitnGoFixed) {
              continue;
            }
            break;
          case 8:
            if (!U.pset.filterSitnGoOmaha || !U.pset.filterSitnGoPL) {
              continue;
            }
            break;
          case 9:
            if (!U.pset.filterSitnGoOmaha || !U.pset.filterSitnGoNL) {
              continue;
            }
            break;
          case 10:
            continue;
            break;
          case 11:
            if (!U.pset.filterSitnGoOmahaHiLo || !U.pset.filterSitnGoFixed) {
              continue;
            }
            break;
          case 12:
            if (!U.pset.filterSitnGoOmahaHiLo || !U.pset.filterSitnGoPL) {
              continue;
            }
            break;
          case 13:
            if (!U.pset.filterSitnGoOmahaHiLo || !U.pset.filterSitnGoNL) {
              continue;
            }
            break;
          case 14:
            continue;
            break;
          case 15:
            if (!U.pset.filterSitnGoOmahaX || !U.pset.filterSitnGoFixed) {
              continue;
            }
            break;
          case 16:
            if (!U.pset.filterSitnGoOmahaX || !U.pset.filterSitnGoPL) {
              continue;
            }
            break;
          case 17:
            if (!U.pset.filterSitnGoOmahaX || !U.pset.filterSitnGoNL) {
              continue;
            }
            break;
          case 18:
            continue;
            break;
          case 19:
            if (!U.pset.filterSitnGoOmahaXHiLo || !U.pset.filterSitnGoFixed) {
              continue;
            }
            break;
          case 20:
            if (!U.pset.filterSitnGoOmahaXHiLo || !U.pset.filterSitnGoPL) {
              continue;
            }
            break;
          case 21:
            if (!U.pset.filterSitnGoOmahaXHiLo || !U.pset.filterSitnGoNL) {
              continue;
            }
            break;
          case 22:
            continue;
            break;
          case 23:
            if (!U.pset.filterSitnGoOmahaX || !U.pset.filterSitnGoFixed) {
              continue;
            }
            break;
          case 24:
            if (!U.pset.filterSitnGoOmahaX || !U.pset.filterSitnGoPL) {
              continue;
            }
            break;
          case 25:
            if (!U.pset.filterSitnGoOmahaX || !U.pset.filterSitnGoNL) {
              continue;
            }
            break;
          case 26:
            continue;
            break;
          case 27:
            if (!U.pset.filterSitnGoOmahaXHiLo || !U.pset.filterSitnGoFixed) {
              continue;
            }
            break;
          case 28:
            if (!U.pset.filterSitnGoOmahaXHiLo || !U.pset.filterSitnGoPL) {
              continue;
            }
            break;
          case 29:
            if (!U.pset.filterSitnGoOmahaXHiLo || !U.pset.filterSitnGoNL) {
              continue;
            }
            break;
          case 30:
            continue;
            break;
          case 31:
            if (!U.pset.filterSitnGoOmahaX || !U.pset.filterSitnGoFixed) {
              continue;
            }
            break;
          case 32:
            if (!U.pset.filterSitnGoOmahaX || !U.pset.filterSitnGoPL) {
              continue;
            }
            break;
          case 33:
            if (!U.pset.filterSitnGoOmahaX || !U.pset.filterSitnGoNL) {
              continue;
            }
            break;
          case 34:
            continue;
            break;
          case 35:
            if (!U.pset.filterSitnGoOmahaXHiLo || !U.pset.filterSitnGoFixed) {
              continue;
            }
            break;
          case 36:
            if (!U.pset.filterSitnGoOmahaXHiLo || !U.pset.filterSitnGoPL) {
              continue;
            }
            break;
          case 37:
            if (!U.pset.filterSitnGoOmahaXHiLo || !U.pset.filterSitnGoNL) {
              continue;
            }
            break;
          case 38:
            continue;
            break;
          case 39:
            if (!U.pset.filterSitnGoRazz || !U.pset.filterSitnGoFixed) {
              continue;
            }
            break;
          case 40:
            if (!U.pset.filterSitnGoStud || !U.pset.filterSitnGoFixed) {
              continue;
            }
            break;
          case 41:
            if (!U.pset.filterSitnGoStudHiLo || !U.pset.filterSitnGoFixed) {
              continue;
            }
            break;
          case 42:
            if (!U.pset.filterSitnGoMixed) {
              continue;
            }
            break;
          case 43:
            continue;
            break;
        }
        if (
          !U.pset.filterSitnGoFreezeout &&
          !bn.rebuy &&
          !bn.reentry &&
          !bn.shootout
        ) {
          continue;
        }
        if (!U.pset.filterSitnGoRebuy && bn.rebuy) {
          continue;
        }
        if (!U.pset.filterSitnGoReentry && bn.reentry) {
          continue;
        }
        if (!U.pset.filterSitnGoShootout && bn.shootout) {
          continue;
        }
        if (bn.buyinTotal < bl) {
          continue;
        }
        if (g > 0 && bn.buyinTotal > g) {
          continue;
        }
        if (bn.ts < bg) {
          continue;
        }
        if (bj > 0 && bn.ts > bj) {
          continue;
        }
        if (U.pset.filterSitnGoHidePrivate && bn.password != "No") {
          continue;
        }
        if (U.pset.filterSitnGoHideRunning && bn.running == "Yes") {
          continue;
        }
        if (!bk && bn.primary) {
          continue;
        }
        if (!bm && !bn.primary) {
          continue;
        }
        U.data.SitnGo.rows.push(bn);
      }
    }
  };
  bd.prototype.sitnGoInfoRequest = function () {
    var g = this;
    if (g.sitnGoSelected == "") {
      g.messageShow(U.lang.LobbyCaptionNoSitnGo);
      return;
    }
    j({
      Response: "TableInfo",
      Table: g.sitnGoSelected,
      Type: "T",
    });
  };
  bd.prototype.sitnGoNext = function () {
    var bg, g, bh;
    bg = this;
    g = bg.sitnGoGrid.selrow;
    if (g < 0 || g >= U.data.SitnGo.rows.length - 1) {
      return;
    }
    g++;
    bg.sitnGoGrid.selrow = g;
    bg.sitnGoGrid.scrollIntoView();
    bg.sitnGoSelect(g);
    bh = U.data.SitnGo.rows[g];
    bg.sitnGoPlayers.setTitle(bh.id + " - " + bh.game + " (" + bh.buyin + ")");
  };
  bd.prototype.sitnGoPrev = function () {
    var bg, g, bh;
    bg = this;
    g = bg.sitnGoGrid.selrow;
    if (g <= 0) {
      return;
    }
    g--;
    bg.sitnGoGrid.selrow = g;
    bg.sitnGoGrid.scrollIntoView();
    bg.sitnGoSelect(g);
    bh = U.data.SitnGo.rows[g];
    bg.sitnGoPlayers.setTitle(bh.id + " - " + bh.game + " (" + bh.buyin + ")");
  };
  bd.prototype.sitnGoPlayerSaveSort = function () {
    al({
      SitnGoPlayerSortColumn: U.data.SitnGoPlayer.sortCol,
      SitnGoPlayerSortAscend: U.data.SitnGoPlayer.sortAscend,
    });
  };
  bd.prototype.sitnGoPlayersCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#SitnGoPlayers");
    bh = new Y(g, bg, {
      title: "",
    });
    bg.sitnGoPrevBtn = new A(
      $("#SitnGoPrevBtn", g),
      U.lang.LobbyButtonSnGPrev,
      25,
      function () {
        bg.sitnGoPrev();
      }
    );
    bg.sitnGoNextBtn = new A(
      $("#SitnGoNextBtn", g),
      U.lang.LobbyButtonSnGNext,
      25,
      function () {
        bg.sitnGoNext();
      }
    );
    bg.sitnGoRegister2Btn = new A(
      $("#SitnGoRegister2Btn", g),
      U.lang.LobbyButtonTrnyRegister,
      25,
      function () {
        bg.sitnGoRegister();
      }
    );
    bg.sitnGoStartNow = new E(
      $("#SitnGoStartNow", g),
      U.lang.LobbyCaptionStartNow + " *",
      function () {
        bg.sitnGoStartNowCheck();
      }
    );
    new A($(".okbtn", g), U.lang.DialogOK, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.sitnGoPlayers = bh;
  };
  bd.prototype.sitnGoPlayersShow = function () {
    var bg, bi, g, bh;
    bg = this;
    bi = bg.sitnGoPlayers;
    g = bg.sitnGoGrid.selrow;
    if (g < 0) {
      return;
    }
    bh = U.data.SitnGo.rows[g];
    bi.setTitle(bh.id + " - " + bh.game + " (" + bh.buyin + ")");
    bi.show(true, U.mobile);
    bg.sitnGoPlayerGrid.setScale(bi.scaleY);
    bg.sitnGoPlayerGrid.resize();
    bg.sitnGoWaitGrid.setScale(bi.scaleY);
    bg.sitnGoWaitGrid.resize();
  };
  bd.prototype.sitnGoRegister = function () {
    var bi, bh, g, bj, bk, bg;
    bi = this;
    if (bi.sitnGoSelected == "") {
      bi.messageShow(U.lang.LobbyCaptionNoSitnGo);
      return;
    }
    if (U.loggedIn == false) {
      bi.messageShow(U.lang.MessageTournamentLogin);
      return;
    }
    bk = bi.sitnGoRegisterBtn.getCaption();
    bh =
      bk == U.lang.LobbyButtonTrnyRegister ||
      bk == U.lang.LobbyButtonTrnyRegLate;
    if (bh) {
      j({
        Response: "RegisterRequest",
        Table: bi.sitnGoSelected,
        Type: "T",
      });
    } else {
      g = bi.sitnGoGrid.selrow;
      bg = U.data.SitnGo.rows[g].password;
      bj = bg == "Yes" || bg == "Yes+";
      z("Unregister", bi.sitnGoSelected, "T", bj, 0);
    }
  };
  bd.prototype.sitnGoRegCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $(".yesno").clone().removeClass("yesno").appendTo(U.$webClient);
    bh = new Y(g, bg, {});
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.sitnGoRegOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.sitnGoReg = bh;
  };
  bd.prototype.sitnGoRegOk = function () {
    var g, bg;
    g = this;
    bg = g.sitnGoReg;
    g.sitnGoReg.close();
    z("Register", bg.data.sitnGo, "T", bg.data.needpw, 0);
  };
  bd.prototype.sitnGoRegShow = function (bj, g, bi) {
    var bg, bh;
    bg = this;
    bh = bg.sitnGoReg;
    bh.setTitle(g);
    bh.data.sitnGo = g;
    bh.data.needpw = bi;
    bh.showMessage(bj, true, U.mobile);
  };
  bd.prototype.sitnGoSaveSort = function () {
    al({
      SitnGoSortColumn: U.data.SitnGo.sortCol,
      SitnGoSortAscend: U.data.SitnGo.sortAscend,
    });
  };
  bd.prototype.sitnGoSelect = function (g) {
    var bg, bh;
    bg = this;
    if (g < 0 || g >= U.data.SitnGo.rows.length) {
      bg.sitnGoUnselect();
    } else {
      bh = bg.sitnGoSelected != U.data.SitnGo.rows[g].id;
      bg.sitnGoSelected = U.data.SitnGo.rows[g].id;
      bg.sitnGoInfoBtn.enable(true);
      bg.sitnGoObserveBtn.enable(true);
      bg.sitnGoPlayersBtn.enable(true);
      bg.sitnGoRegisterBtn.enable(true);
      bg.sitnGoRegister2Btn.enable(true);
      bg.sitnGoPrevBtn.enable(g > 0);
      bg.sitnGoNextBtn.enable(g < U.data.SitnGo.rows.length - 1);
      bg.optionsStart.enable(U.data.SitnGo.rows[g].startCode && U.loggedIn);
      if (bh) {
        j({
          Response: "GameSelected",
          Table: bg.sitnGoSelected,
          Type: "T",
          SnG: "Yes",
        });
      }
    }
  };
  bd.prototype.sitnGoSelectID = function (bi) {
    var bg, bh, g;
    bg = this;
    bg.sitnGoGrid.selrow = -1;
    if (bi == "") {
      bg.sitnGoUnselect();
      return;
    }
    bh = U.data.SitnGo.rows.length;
    for (g = 0; g < bh; g++) {
      if (bi == U.data.SitnGo.rows[g].id) {
        bg.sitnGoGrid.selrow = g;
        break;
      }
    }
  };
  bd.prototype.sitnGoStartNowCheck = function () {
    var g = this;
    if (g.sitnGoSelected == U.lang.LobbyCaptionNoSitnGo) {
      return;
    }
    j({
      response: "StartNow",
      Table: g.sitnGoSelected,
      Checked: g.sitnGoStartNow.isChecked() ? "Yes" : "No",
    });
  };
  bd.prototype.sitnGoTabCaption = function () {
    var g, bg;
    g = this;
    bg = U.lang.LobbyCaptionSitnGos + ": ";
    if (U.pset.filterSitnGoActivate) {
      bg = bg + U.data.SitnGo.rows.length + "/";
    }
    bg = bg + U.data.SitnGo.total;
    g.lobbyTabs.setCaption(3, bg);
    g.lobbySitnGos.$menu.text(bg);
  };
  bd.prototype.sitnGoTableSelectedOpen = function () {
    var g = this;
    g.tourneyTableOpen(true, g.sitnGoGrid.selrow);
  };
  bd.prototype.sitnGoTabSetup = function () {
    var g, bg;
    g = this;
    U.data.SitnGo = {};
    U.data.SitnGo.cols = 6;
    U.data.SitnGo.sortCol = 0;
    U.data.SitnGo.sortAscend = true;
    U.data.SitnGo.sortable = true;
    U.data.SitnGo.widths = [0.26, 0.18, 0.16, 0.06, 0.11, 0.23];
    U.data.SitnGo.rows = [];
    U.data.SitnGo.total = 0;
    U.data.SitnGo.rowHeight = U.mobile ? 24 : 16;
    U.data.SitnGo.headers = [
      U.lang.LobbyColumnSnGID,
      U.lang.LobbyColumnTrnyGame,
      U.lang.LobbyColumnTrnyBuyIn,
      U.lang.LobbyColumnTrnyTS,
      U.lang.LobbyColumnTrnyReg,
      U.lang.LobbyColumnTrnyStarts,
    ];
    U.data.SitnGo.fields = [
      "id",
      "game",
      "gameIndex",
      "buyin",
      "buyinSort",
      "ts",
      "reg",
      "regSort",
      "tables",
      "starts",
      "startsSort",
      "startMin",
      "startTime",
      "password",
    ];
    U.data.SitnGo.fieldsShow = ["id", "game", "buyin", "ts", "reg", "starts"];
    U.data.SitnGo.fieldsSort = [
      "id",
      "game",
      "buyinSort",
      "ts",
      "regSort",
      "startsSort",
    ];
    U.data.SitnGo.fieldsNum = [false, false, false, true, false, false];
    U.data.SitnGo.fieldsRight = [false, false, false, false, false, false];
    U.data.SitnGo.fieldsHTML = [false, false, false, false, false, false];
    g.sitnGoGrid = new ay(
      $("#SitnGoGrid", g.$dialog),
      U.data.SitnGo,
      function (bh) {
        g.sitnGoSelect(bh);
      },
      function (bh) {
        g.tourneyTableOpen(true, bh);
      },
      function () {
        g.sitnGoSaveSort();
      }
    );
    bg = U.lang.LobbyButtonFilter;
    if (U.pset.filterSitnGoActivate) {
      bg = bg + " " + U.checkMark;
    }
    g.sitnGoFilterBtn = new A(
      $("#SitnGoFilterBtn", g.$dialog),
      bg,
      40,
      function () {
        g.tourneyFilterShow(true);
      }
    );
    g.sitnGoObserveBtn = new A(
      $("#SitnGoObserveBtn", g.$dialog),
      U.lang.LobbyButtonTrnyObserve,
      40,
      function () {
        g.sitnGoTableSelectedOpen();
      }
    );
    g.sitnGoInfoBtn = new A(
      $("#SitnGoInfoBtn", g.$dialog),
      U.lang.LobbyButtonSnGInfo,
      40,
      function () {
        g.sitnGoInfoRequest();
      }
    );
    g.sitnGoPlayersBtn = new A(
      $("#SitnGoPlayersBtn", g.$dialog),
      U.lang.LobbyButtonTrnyPlayers,
      40,
      function () {
        g.sitnGoPlayersShow();
      }
    );
    g.sitnGoRegisterBtn = new A(
      $("#SitnGoRegisterBtn", g.$dialog),
      U.lang.LobbyButtonTrnyRegister,
      40,
      function () {
        g.sitnGoRegister();
      }
    );
    g.sitnGoSelected = "";
    g.$sitnGoSelected = $("#SitnGoSelected", g.$dialog);
    U.data.SitnGoPlayer = {};
    U.data.SitnGoPlayer.cols = 4;
    U.data.SitnGoPlayer.sortCol = 0;
    U.data.SitnGoPlayer.sortAscend = true;
    U.data.SitnGoPlayer.sortable = true;
    U.data.SitnGoPlayer.widths = [0.4, 0.2, 0.2, 0.2];
    U.data.SitnGoPlayer.rows = [];
    U.data.SitnGoPlayer.rowHeight = 16;
    U.data.SitnGoPlayer.headers = [
      U.lang.LobbyColumnTrnyPlayer,
      U.lang.LobbyColumnTrnyTable,
      U.lang.LobbyColumnTrnyChips,
      U.lang.LobbyColumnTrnyRank,
    ];
    U.data.SitnGoPlayer.fields = ["player", "table", "chips", "rank"];
    U.data.SitnGoPlayer.fieldsShow = ["player", "table", "chips", "rank"];
    U.data.SitnGoPlayer.fieldsSort = ["player", "table", "chips", "rank"];
    U.data.SitnGoPlayer.fieldsNum = [false, true, true, true];
    U.data.SitnGoPlayer.fieldsRight = [false, false, false, false];
    U.data.SitnGoPlayer.fieldsHTML = [false, false, false, false];
    g.sitnGoPlayerGrid = new ay(
      $("#SitnGoPlayerGrid", g.sitnGoPlayers.$dialog),
      U.data.SitnGoPlayer,
      null,
      function (bh) {
        g.tourneyPlayerTable(true, bh);
      },
      function () {
        g.sitnGoPlayerSaveSort();
      }
    );
    U.data.SitnGoWait = {};
    U.data.SitnGoWait.cols = 2;
    U.data.SitnGoWait.sortCol = -1;
    U.data.SitnGoWait.sortAscend = true;
    U.data.SitnGoWait.sortable = false;
    U.data.SitnGoWait.widths = [0.23, 0.77];
    U.data.SitnGoWait.rows = [];
    U.data.SitnGoWait.rowHeight = 16;
    U.data.SitnGoWait.headers = ["#", U.lang.LobbyColumnTrnyWaiting];
    U.data.SitnGoWait.fields = ["pos", "player"];
    U.data.SitnGoWait.fieldsShow = ["pos", "player"];
    U.data.SitnGoWait.fieldsSort = ["pos", "player"];
    U.data.SitnGoWait.fieldsNum = [true, false];
    U.data.SitnGoWait.fieldsRight = [false, false];
    U.data.SitnGoWait.fieldsHTML = [false, false];
    g.sitnGoWaitGrid = new ay(
      $("#SitnGoWaitGrid", g.sitnGoPlayers.$dialog),
      U.data.SitnGoWait
    );
  };
  bd.prototype.sitnGoUnselect = function () {
    var g = this;
    g.sitnGoSelected = "";
    g.$sitnGoSelected.text(U.lang.LobbyCaptionNoSitnGo);
    U.data.SitnGoPlayer.rows.length = 0;
    g.sitnGoPlayerGrid.update();
    U.data.SitnGoWait.rows.length = 0;
    g.sitnGoWaitGrid.update();
    g.sitnGoInfoBtn.enable(false);
    g.sitnGoObserveBtn.enable(false);
    g.sitnGoPlayersBtn.enable(false);
    g.sitnGoRegisterBtn.enable(false);
    g.sitnGoRegister2Btn.enable(false);
    g.sitnGoPrevBtn.enable(false);
    g.sitnGoNextBtn.enable(false);
    g.sitnGoStartNow.show(false);
    if (g.lobbyTabs.getTab() == 3) {
      g.optionsStart.enable(false);
      g.sitnGoPlayers.close();
    }
  };
  bd.prototype.soundCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#SoundEffects");
    bh = new Y(g, bg, {
      title: U.lang.SoundTitle,
    });
    bh.controls.$soundPercent = $("#SoundPercent");
    bh.controls.beepSound = new E($("#BeepSound"), U.lang.SoundBeep);
    bh.controls.betSound = new E($("#BetSound"), U.lang.SoundBet);
    bh.controls.cardSound = new E($("#CardSound"), U.lang.SoundCard);
    bh.controls.checkSound = new E($("#CheckSound"), U.lang.SoundCheck);
    bh.controls.potSound = new E($("#PotSound"), U.lang.SoundPot);
    bh.controls.loginSound = new E($("#LoginSound"), U.lang.SoundLogin);
    bh.controls.volumeSlider = new ao($("#SoundVolume"), 0.01, function (bi) {
      bg.soundVolumeChange(bi);
    });
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.soundOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.soundEffects = bh;
  };
  bd.prototype.soundOk = function () {
    var g, bh, bg;
    g = this;
    bh = g.soundEffects;
    bg = bh.controls.volumeSlider.getValue();
    if (U.pset.SoundVolume != bg) {
      U.pset.SoundVolume = bg;
      al({
        SoundVolume: bg,
      });
    }
    aa("beep", bh.controls.beepSound.isChecked());
    aa("bet", bh.controls.betSound.isChecked());
    aa("card", bh.controls.cardSound.isChecked());
    aa("check", bh.controls.checkSound.isChecked());
    aa("pot", bh.controls.potSound.isChecked());
    aa("login", bh.controls.loginSound.isChecked());
    bh.close();
  };
  bd.prototype.soundShow = function () {
    var g, bg;
    g = this;
    bg = g.soundEffects;
    bg.controls.beepSound.setCheck(U.audio.beep.enabled);
    bg.controls.betSound.setCheck(U.audio.bet.enabled);
    bg.controls.cardSound.setCheck(U.audio.card.enabled);
    bg.controls.checkSound.setCheck(U.audio.check.enabled);
    bg.controls.potSound.setCheck(U.audio.pot.enabled);
    bg.controls.loginSound.setCheck(U.audio.login.enabled);
    bg.controls.volumeSlider.setValue(U.pset.SoundVolume, true);
    bg.show(true, U.mobile);
    bg.controls.volumeSlider.setScale(bg.scaleX);
  };
  bd.prototype.soundVolumeChange = function (g) {
    this.soundEffects.controls.$soundPercent.text(
      U.lang.SoundVolume + " " + Math.round(g * 100) + "%"
    );
  };
  bd.prototype.startGameCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#StartGame");
    bh = new Y(g, bg, {});
    $("#st_label").text(U.lang.StartCodeTitle);
    bh.controls.startGameInput = new ax($("#st_input"), {
      onEnterKey: function () {
        bg.startGameOk();
      },
      border: true,
    });
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.startGameOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.startGame = bh;
  };
  bd.prototype.startGameOk = function () {
    var g, bh, bg;
    g = this;
    bh = g.startGame;
    bg = bh.controls.startGameInput.getText();
    bh.close();
    if (bg == "") {
      return;
    }
    j({
      Response: "StartCode",
      Table: bh.data.startGameName,
      Type: bh.data.startGameType,
      Code: bg,
    });
  };
  bd.prototype.startGameShow = function () {
    var bh, bi, g, bg;
    bh = this;
    bi = bh.startGame;
    bg = bh.lobbyTabs.getTab();
    g = "";
    switch (bg) {
      case 1:
        g = bh.ringSelected;
        bi.data.startGameType = "R";
        break;
      case 2:
        g = bh.tourneySelected;
        bi.data.startGameType = "T";
        break;
      case 3:
        g = bh.sitnGoSelected;
        bi.data.startGameType = "T";
        break;
      default:
        return;
    }
    if (g == "") {
      bh.messageShow(
        bg == 1
          ? U.lang.LobbyCaptionNoRingGame
          : U.lang.LobbyCaptionNoTournament
      );
      return;
    }
    bi.data.startGameName = g;
    bi.show(true, U.mobile);
    bi.setTitle(g);
    bi.controls.startGameInput.setText("");
    if (U.hasTouch == false) {
      bi.controls.startGameInput.setFocus();
    }
  };
  bd.prototype.tableSelectCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#TableSelect");
    bh = new Y(g, bg, {});
    U.data.TableSelect = {};
    U.data.TableSelect.cols = 2;
    U.data.TableSelect.sortCol = -1;
    U.data.TableSelect.sortAscend = true;
    U.data.TableSelect.sortable = false;
    U.data.TableSelect.widths = [0.6, 0.4];
    U.data.TableSelect.rows = [];
    U.data.TableSelect.rowHeight = U.mobile ? 24 : 16;
    U.data.TableSelect.headers = [
      U.lang.LobbyCaptionSelect,
      U.lang.LobbyCaptionPlayers,
    ];
    U.data.TableSelect.fields = ["table", "players"];
    U.data.TableSelect.fieldsShow = ["table", "players"];
    U.data.TableSelect.fieldsSort = ["table", "players"];
    U.data.TableSelect.fieldsNum = [false, true];
    U.data.TableSelect.fieldsRight = [false, false];
    U.data.TableSelect.fieldsHTML = [false, false];
    bh.controls.tableSelectGrid = new ay(
      $("#TableSelectGrid"),
      U.data.TableSelect,
      null,
      function () {
        bg.tableSelectOk();
      }
    );
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.tableSelectOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.tableSelect = bh;
  };
  bd.prototype.tableSelectOk = function () {
    var bh, bj, bg, bi, bk, g;
    bh = this;
    bj = bh.tableSelect;
    bg = bj.data.name;
    bi = bj.data.needpw;
    bj.close();
    bk = bj.controls.tableSelectGrid.selrow + 1;
    if (bk <= 0) {
      return;
    }
    g = "Table " + bk;
    z("OpenTable", bg + " - " + g, "T", bi, 0);
  };
  bd.prototype.tableSelectShow = function (g, bi) {
    var bg, bh;
    bg = this;
    bh = bg.tableSelect;
    bh.data.name = g;
    bh.data.needpw = bi;
    bh.setTitle(g);
    bh.show(true, U.mobile);
    bh.controls.tableSelectGrid.setScale(bh.scaleY);
    bh.controls.tableSelectGrid.selrow = 0;
    bh.controls.tableSelectGrid.toprow = 0;
    bh.controls.tableSelectGrid.resize();
  };
  bd.prototype.tableSettingsCreate = function () {
    var bh, g, bi, bg;
    bh = this;
    g = $("#TableSettings");
    bi = new Y(g, bh, {
      title: U.lang.TableSettingsTitle,
    });
    bi.controls.bringToFront = new E(
      $("#BringToFront"),
      U.lang.TableSettingsFront
    );
    bi.controls.preferredSeat = new E(
      $("#PreferredSeat"),
      U.lang.TableSettingsSeat
    );
    bi.controls.handHelper = new E(
      $("#HandHelper"),
      U.lang.TableSettingsHandHelper
    );
    bi.controls.autoMuck = new E($("#AutoMuck"), U.lang.TableSettingsAutoMuck);
    bi.controls.dealFaceDown = new E(
      $("#DealFaceDown"),
      U.lang.TableSettingsFaceDown
    );
    bi.controls.muteDealer = new E(
      $("#MuteDealer"),
      U.lang.TableSettingsMuteDealer
    );
    bi.controls.rules6Holdem = new E(
      $("#Rules6Holdem"),
      U.lang.TableSettings6Holdem
    );
    bi.controls.rules6Holdem.show(U.params.sixPlus);
    bi.controls.deckBtn = new A(
      $("#DeckBtn"),
      U.lang.TableSettingsCardDeck,
      20,
      function () {
        bh.cardDeck.controls.rc[bi.data.deckNum].setCheck();
        bh.cardDeck.show(true, U.mobile);
      }
    );
    $("#PreFlopBtns").text(U.lang.TableSettingsPreFlopBtns);
    bi.data.preFlopBtn = [];
    bi.controls.preFlopBtn = [];
    for (bg = 1; bg < 5; bg++) {
      bi.controls.preFlopBtn[bg] = new A(
        $("#PreFlopBtn" + bg),
        "",
        20,
        bh.preFlopButtonsCaller(bh, bg)
      );
    }
    bi.controls.preFlopReset = new A(
      $("#PreFlopReset"),
      U.lang.TableSettingsResetBtns,
      20,
      function () {
        bh.preFlopButtonsReset();
      }
    );
    $("#PostFlopBtns").text(U.lang.TableSettingsPostFlopBtns);
    bi.data.postFlopBtn = [];
    bi.controls.postFlopBtn = [];
    for (bg = 1; bg < 5; bg++) {
      bi.controls.postFlopBtn[bg] = new A(
        $("#PostFlopBtn" + bg),
        "",
        20,
        bh.postFlopButtonsCaller(bh, bg)
      );
    }
    bi.controls.postFlopReset = new A(
      $("#PostFlopReset"),
      U.lang.TableSettingsResetBtns,
      20,
      function () {
        bh.postFlopButtonsReset();
      }
    );
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bh.tableSettingsOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bi.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bi.close();
      return false;
    });
    bh.tableSettings = bi;
  };
  bd.prototype.tableSettingsOk = function () {
    var bj, bp, bl, bo, bi, bn, bg, bs, bq, bm, g, bk, bh, br;
    bj = this;
    g = {};
    bp = bj.tableSettings;
    bo = bp.controls.bringToFront.isChecked();
    bi = bp.controls.handHelper.isChecked();
    bn = bp.controls.autoMuck.isChecked();
    bg = bp.data.deckNum;
    bs = bp.controls.dealFaceDown.isChecked();
    bq = bp.controls.muteDealer.isChecked();
    bm = bp.controls.rules6Holdem.isChecked();
    bk = bp.controls.preferredSeat.isChecked();
    bh = bp.data.preFlopBtn;
    br = bp.data.postFlopBtn;
    bp.close();
    for (bl = 1; bl < 5; bl++) {
      if (U.pset["PreFlopButton" + bl] != bh[bl]) {
        U.pset["PreFlopButton" + bl] = bh[bl];
        g["PreFlopButton" + bl] = bh[bl];
      }
      if (U.pset["PostFlopButton" + bl] != br[bl]) {
        U.pset["PostFlopButton" + bl] = br[bl];
        g["PostFlopButton" + bl] = br[bl];
      }
    }
    if (U.pset.PreferredSeat != bk) {
      U.pset.PreferredSeat = bk;
      g.PreferredSeat = bk;
      if (!bk) {
        U.pset.SeatPosition = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        g.SeatPosition = U.pset.SeatPosition;
      }
    }
    if (U.pset.BringToFront != bo) {
      U.pset.BringToFront = bo;
      g.BringToFront = bo;
    }
    if (U.pset.HandHelper != bi) {
      U.pset.HandHelper = bi;
      g.HandHelper = bi;
    }
    if (U.pset.AutoMuck != bn) {
      U.pset.AutoMuck = bn;
      g.AutoMuck = bn;
    }
    if (U.pset.Deck != bg) {
      U.pset.Deck = bg;
      g.Deck = bg;
      be(bg);
    }
    if (U.pset.DealFaceDown != bs) {
      U.pset.DealFaceDown = bs;
      g.DealFaceDown = bs;
    }
    if (U.pset.MuteDealer != bq) {
      U.pset.MuteDealer = bq;
      g.MuteDealer = bq;
    }
    if (U.pset.Rules6Holdem != bm) {
      U.pset.Rules6Holdem = bm;
      g.Rules6Holdem = bm;
    }
    al(g);
  };
  bd.prototype.tableSettingsShow = function () {
    var bh, bi, bg, g;
    bh = this;
    bh.lobbyFront();
    bi = bh.tableSettings;
    bi.controls.bringToFront.setCheck(U.pset.BringToFront);
    bi.controls.preferredSeat.setCheck(U.pset.PreferredSeat);
    bi.controls.handHelper.setCheck(U.pset.HandHelper);
    bi.controls.autoMuck.setCheck(U.pset.AutoMuck);
    bi.controls.dealFaceDown.setCheck(U.pset.DealFaceDown);
    bi.controls.muteDealer.setCheck(U.pset.MuteDealer);
    bi.controls.rules6Holdem.setCheck(U.pset.Rules6Holdem);
    bi.data.deckNum = U.pset.Deck;
    bi.controls.deckBtn.setCaption(
      U.lang.TableSettingsCardDeck + ": #" + U.pset.Deck
    );
    for (bg = 1; bg < 5; bg++) {
      g = U.pset["PreFlopButton" + bg];
      bi.data.preFlopBtn[bg] = g;
      bi.controls.preFlopBtn[bg].setCaption(U.preFlopButtons[g]);
      g = U.pset["PostFlopButton" + bg];
      bi.data.postFlopBtn[bg] = g;
      bi.controls.postFlopBtn[bg].setCaption(U.postFlopButtons[g]);
    }
    bi.show(true, U.mobile);
  };
  bd.prototype.tourneyFilterChange = function (bi) {
    var bg, bj, g, bh;
    bg = this;
    if (bi) {
      bh = U.lang.LobbyButtonFilter;
      if (U.pset.filterSitnGoActivate) {
        bh = bh + " " + U.checkMark;
      }
      bg.sitnGoFilterBtn.setCaption(bh);
      bj = "";
      g = bg.sitnGoGrid.selrow;
      if (g >= 0) {
        bj = U.data.SitnGo.rows[g].id;
      }
      bg.sitnGoFilterData();
      bg.sitnGoSelectID(bj);
      bg.sitnGoGrid.sort();
      bg.sitnGoSelect(bg.sitnGoGrid.selrow);
      bg.sitnGoTabCaption();
    } else {
      bh = U.lang.LobbyButtonFilter;
      if (U.pset.filterTourneyActivate) {
        bh = bh + " " + U.checkMark;
      }
      bg.tourneyFilterBtn.setCaption(bh);
      bj = "";
      g = bg.tourneyGrid.selrow;
      if (g >= 0) {
        bj = U.data.Tourney.rows[g].id;
      }
      bg.tourneyFilterData();
      bg.tourneySelectID(bj);
      bg.tourneyGrid.sort();
      bg.tourneySelect(bg.tourneyGrid.selrow);
      bg.tourneyTabCaption();
    }
  };
  bd.prototype.tourneyFilterCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#TourneyFilter");
    bh = new Y(g, bg, {
      title: U.lang.FilterTitleTourney,
    });
    $("#tf_game").text(U.lang.FilterGame);
    bh.controls.tfHoldem = new E($("#tf_holdem"), U.lang.FilterHoldem);
    bh.controls.tfOmaha = new E($("#tf_omaha"), U.lang.FilterOmaha);
    bh.controls.tfOmahaHiLo = new E($("#tf_omahahilo"), U.lang.FilterOmahaHiLo);
    bh.controls.tfOmahaX = new E($("#tf_omahax"), U.lang.FilterOmahaX);
    bh.controls.tfOmahaXHiLo = new E(
      $("#tf_omahaxhilo"),
      U.lang.FilterOmahaXHiLo
    );
    bh.controls.tfRazz = new E($("#tf_razz"), U.lang.FilterRazz);
    bh.controls.tfStud = new E($("#tf_stud"), U.lang.FilterStud);
    bh.controls.tfStudHiLo = new E($("#tf_studhilo"), U.lang.FilterStudHiLo);
    bh.controls.tfMixed = new E($("#tf_mixed"), U.lang.FilterMixed);
    $("#tf_limit").text(U.lang.FilterLimit);
    bh.controls.tfNL = new E($("#tf_nl"), U.lang.FilterNL);
    bh.controls.tfPL = new E($("#tf_pl"), U.lang.FilterPL);
    bh.controls.tfFixed = new E($("#tf_fixed"), U.lang.FilterFixed);
    $("#tf_format").text(U.lang.FilterFormat);
    bh.controls.tfFreezeout = new E($("#tf_freezeout"), U.lang.FilterFreezeout);
    bh.controls.tfRebuy = new E($("#tf_rebuy"), U.lang.FilterRebuy);
    bh.controls.tfReentry = new E($("#tf_reentry"), U.lang.FilterReentry);
    bh.controls.tfShootout = new E($("#tf_shootout"), U.lang.FilterShootout);
    $("#tf_buyin").text(U.lang.FilterBuyin);
    $("#tf_buyinmincap").text(U.lang.FilterMin);
    bh.controls.tfBuyinMin = new ax($("#tf_buyinmin"), {
      border: true,
    });
    $("#tf_buyinmaxcap").text(U.lang.FilterMax);
    bh.controls.tfBuyinMax = new ax($("#tf_buyinmax"), {
      border: true,
    });
    $("#tf_size").text(U.lang.FilterSize);
    $("#tf_sizemincap").text(U.lang.FilterMin);
    bh.controls.tfSizeMin = new ax($("#tf_sizemin"), {
      border: true,
    });
    $("#tf_sizemaxcap").text(U.lang.FilterMax);
    bh.controls.tfSizeMax = new ax($("#tf_sizemax"), {
      border: true,
    });
    bh.controls.$tfStarts = $("#tf_starts");
    bh.controls.$tfStarts.text(U.lang.FilterStarts);
    bh.controls.tfTime = new E($("#tf_time"), U.lang.FilterTime);
    bh.controls.tfOther = new E($("#tf_other"), U.lang.FilterOther);
    bh.controls.$tfCurrency = $("#tf_currency");
    bh.controls.$tfCurrency.text(U.lang.FilterCurrency);
    bh.controls.tfPrimary = new E($("#tf_primary"), U.lang.FilterPrimary);
    bh.controls.tfSecondary = new E($("#tf_secondary"), U.lang.FilterSecondary);
    bh.controls.tfHidePrivate = new E(
      $("#tf_hideprivate"),
      U.lang.FilterPrivate
    );
    bh.controls.tfHideRunning = new E(
      $("#tf_hiderunning"),
      U.lang.FilterRunning
    );
    bh.controls.tfEnabled = new E($("#tf_enabled"), U.lang.FilterEnabled);
    new A($("#tf_reset", g), U.lang.FilterReset, 20, function () {
      bg.tourneyFilterReset();
    });
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.tourneyFilterOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.tourneyFilter = bh;
  };
  bd.prototype.tourneyFilterData = function () {
    var bn, bi, bl, g, bg, bj, bk, bm, bh;
    U.data.Tourney.total = U.data.Tourney.urows.length;
    if (!U.pset.filterTourneyActivate) {
      if (!U.params.sitAndGoTab) {
        U.data.Tourney.rows = U.data.Tourney.urows.slice(0);
      } else {
        U.data.Tourney.rows.length = 0;
        for (bh = 0; bh < U.data.Tourney.urows.length; bh++) {
          bn = U.data.Tourney.urows[bh];
          if (bn.sng) {
            U.data.Tourney.total--;
          } else {
            U.data.Tourney.rows.push(bn);
          }
        }
      }
    } else {
      U.data.Tourney.rows.length = 0;
      bl = au(U.pset.filterTourneyBuyinMin);
      g = au(U.pset.filterTourneyBuyinMax);
      bg = au(U.pset.filterTourneySizeMin);
      bj = au(U.pset.filterTourneySizeMax);
      bk = U.pset.filterTourneyPrimary || !U.secondary;
      bm = U.pset.filterTourneySecondary && U.secondary;
      for (bh = 0; bh < U.data.Tourney.urows.length; bh++) {
        bn = U.data.Tourney.urows[bh];
        if (bn.sng) {
          U.data.Tourney.total--;
          continue;
        }
        bi = bn.gameIndex;
        switch (bi) {
          case 0:
            if (!U.pset.filterTourneyHoldem || !U.pset.filterTourneyFixed) {
              continue;
            }
            break;
          case 1:
            if (!U.pset.filterTourneyHoldem || !U.pset.filterTourneyPL) {
              continue;
            }
            break;
          case 2:
            if (!U.pset.filterTourneyHoldem || !U.pset.filterTourneyNL) {
              continue;
            }
            break;
          case 3:
            continue;
            break;
          case 4:
            if (!U.pset.filterTourneyHoldem || !U.pset.filterTourneyPL) {
              continue;
            }
            break;
          case 5:
            if (!U.pset.filterTourneyHoldem || !U.pset.filterTourneyNL) {
              continue;
            }
            break;
          case 6:
            continue;
            break;
          case 7:
            if (!U.pset.filterTourneyOmaha || !U.pset.filterTourneyFixed) {
              continue;
            }
            break;
          case 8:
            if (!U.pset.filterTourneyOmaha || !U.pset.filterTourneyPL) {
              continue;
            }
            break;
          case 9:
            if (!U.pset.filterTourneyOmaha || !U.pset.filterTourneyNL) {
              continue;
            }
            break;
          case 10:
            continue;
            break;
          case 11:
            if (!U.pset.filterTourneyOmahaHiLo || !U.pset.filterTourneyFixed) {
              continue;
            }
            break;
          case 12:
            if (!U.pset.filterTourneyOmahaHiLo || !U.pset.filterTourneyPL) {
              continue;
            }
            break;
          case 13:
            if (!U.pset.filterTourneyOmahaHiLo || !U.pset.filterTourneyNL) {
              continue;
            }
            break;
          case 14:
            continue;
            break;
          case 15:
            if (!U.pset.filterTourneyOmahaX || !U.pset.filterTourneyFixed) {
              continue;
            }
            break;
          case 16:
            if (!U.pset.filterTourneyOmahaX || !U.pset.filterTourneyPL) {
              continue;
            }
            break;
          case 17:
            if (!U.pset.filterTourneyOmahaX || !U.pset.filterTourneyNL) {
              continue;
            }
            break;
          case 18:
            continue;
            break;
          case 19:
            if (!U.pset.filterTourneyOmahaXHiLo || !U.pset.filterTourneyFixed) {
              continue;
            }
            break;
          case 20:
            if (!U.pset.filterTourneyOmahaXHiLo || !U.pset.filterTourneyPL) {
              continue;
            }
            break;
          case 21:
            if (!U.pset.filterTourneyOmahaXHiLo || !U.pset.filterTourneyNL) {
              continue;
            }
            break;
          case 22:
            continue;
            break;
          case 23:
            if (!U.pset.filterTourneyOmahaX || !U.pset.filterTourneyFixed) {
              continue;
            }
            break;
          case 24:
            if (!U.pset.filterTourneyOmahaX || !U.pset.filterTourneyPL) {
              continue;
            }
            break;
          case 25:
            if (!U.pset.filterTourneyOmahaX || !U.pset.filterTourneyNL) {
              continue;
            }
            break;
          case 26:
            continue;
            break;
          case 27:
            if (!U.pset.filterTourneyOmahaXHiLo || !U.pset.filterTourneyFixed) {
              continue;
            }
            break;
          case 28:
            if (!U.pset.filterTourneyOmahaXHiLo || !U.pset.filterTourneyPL) {
              continue;
            }
            break;
          case 29:
            if (!U.pset.filterTourneyOmahaXHiLo || !U.pset.filterTourneyNL) {
              continue;
            }
            break;
          case 30:
            continue;
            break;
          case 31:
            if (!U.pset.filterTourneyOmahaX || !U.pset.filterTourneyFixed) {
              continue;
            }
            break;
          case 32:
            if (!U.pset.filterTourneyOmahaX || !U.pset.filterTourneyPL) {
              continue;
            }
            break;
          case 33:
            if (!U.pset.filterTourneyOmahaX || !U.pset.filterTourneyNL) {
              continue;
            }
            break;
          case 34:
            continue;
            break;
          case 35:
            if (!U.pset.filterTourneyOmahaXHiLo || !U.pset.filterTourneyFixed) {
              continue;
            }
            break;
          case 36:
            if (!U.pset.filterTourneyOmahaXHiLo || !U.pset.filterTourneyPL) {
              continue;
            }
            break;
          case 37:
            if (!U.pset.filterTourneyOmahaXHiLo || !U.pset.filterTourneyNL) {
              continue;
            }
            break;
          case 38:
            continue;
            break;
          case 39:
            if (!U.pset.filterTourneyRazz || !U.pset.filterTourneyFixed) {
              continue;
            }
            break;
          case 40:
            if (!U.pset.filterTourneyStud || !U.pset.filterTourneyFixed) {
              continue;
            }
            break;
          case 41:
            if (!U.pset.filterTourneyStudHiLo || !U.pset.filterTourneyFixed) {
              continue;
            }
            break;
          case 42:
            if (!U.pset.filterTourneyMixed) {
              continue;
            }
            break;
          case 43:
            continue;
            break;
        }
        if (
          !U.pset.filterTourneyFreezeout &&
          !bn.rebuy &&
          !bn.reentry &&
          !bn.shootout
        ) {
          continue;
        }
        if (!U.pset.filterTourneyRebuy && bn.rebuy) {
          continue;
        }
        if (!U.pset.filterTourneyReentry && bn.reentry) {
          continue;
        }
        if (!U.pset.filterTourneyShootout && bn.shootout) {
          continue;
        }
        if (bn.buyinTotal < bl) {
          continue;
        }
        if (g > 0 && bn.buyinTotal > g) {
          continue;
        }
        if (bn.ts < bg) {
          continue;
        }
        if (bj > 0 && bn.ts > bj) {
          continue;
        }
        if (!U.pset.filterTourneyTime && bn.startTime != "No") {
          continue;
        }
        if (!U.pset.filterTourneyOther && bn.startTime == "No") {
          continue;
        }
        if (U.pset.filterTourneyHidePrivate && bn.password != "No") {
          continue;
        }
        if (U.pset.filterTourneyHideRunning && bn.running == "Yes") {
          continue;
        }
        if (!bk && bn.primary) {
          continue;
        }
        if (!bm && !bn.primary) {
          continue;
        }
        U.data.Tourney.rows.push(bn);
      }
    }
  };
  bd.prototype.tourneyFilterOk = function () {
    var bg, bk, bi, g, bj;
    bg = this;
    bk = bg.tourneyFilter;
    bi = bk.data.tourneyFilterSnG;
    g = bi ? "SitnGo" : "Tourney";

    function bh(bl, bm) {
      var bn = "filter" + g + bl;
      if (U.pset[bn] != bm) {
        U.pset[bn] = bm;
        bj[bn] = bm;
      }
    }
    bj = {};
    bh("Holdem", bk.controls.tfHoldem.isChecked());
    bh("Omaha", bk.controls.tfOmaha.isChecked());
    bh("OmahaHiLo", bk.controls.tfOmahaHiLo.isChecked());
    bh("OmahaX", bk.controls.tfOmahaX.isChecked());
    bh("OmahaXHiLo", bk.controls.tfOmahaXHiLo.isChecked());
    bh("Razz", bk.controls.tfRazz.isChecked());
    bh("Stud", bk.controls.tfStud.isChecked());
    bh("StudHiLo", bk.controls.tfStudHiLo.isChecked());
    bh("Mixed", bk.controls.tfMixed.isChecked());
    bh("NL", bk.controls.tfNL.isChecked());
    bh("PL", bk.controls.tfPL.isChecked());
    bh("Fixed", bk.controls.tfFixed.isChecked());
    bh("Freezeout", bk.controls.tfFreezeout.isChecked());
    bh("Rebuy", bk.controls.tfRebuy.isChecked());
    bh("Reentry", bk.controls.tfReentry.isChecked());
    bh("Shootout", bk.controls.tfShootout.isChecked());
    bh("BuyinMin", bk.controls.tfBuyinMin.getText());
    bh("BuyinMax", bk.controls.tfBuyinMax.getText());
    bh("SizeMin", bk.controls.tfSizeMin.getText());
    bh("SizeMax", bk.controls.tfSizeMax.getText());
    if (!bi) {
      bh("Time", bk.controls.tfTime.isChecked());
      bh("Other", bk.controls.tfOther.isChecked());
    }
    if (U.secondary) {
      bh("Primary", bk.controls.tfPrimary.isChecked());
      bh("Secondary", bk.controls.tfSecondary.isChecked());
    }
    bh("HidePrivate", bk.controls.tfHidePrivate.isChecked());
    bh("HideRunning", bk.controls.tfHideRunning.isChecked());
    bh("Activate", bk.controls.tfEnabled.isChecked());
    bk.close();
    bg.tourneyFilterChange(bi);
    al(bj);
  };
  bd.prototype.tourneyFilterReset = function () {
    var g, bg;
    g = this;
    bg = g.tourneyFilter;
    bg.controls.tfHoldem.setCheck(true);
    bg.controls.tfOmaha.setCheck(true);
    bg.controls.tfOmahaHiLo.setCheck(true);
    bg.controls.tfOmahaX.setCheck(true);
    bg.controls.tfOmahaXHiLo.setCheck(true);
    bg.controls.tfRazz.setCheck(true);
    bg.controls.tfStud.setCheck(true);
    bg.controls.tfStudHiLo.setCheck(true);
    bg.controls.tfMixed.setCheck(true);
    bg.controls.tfNL.setCheck(true);
    bg.controls.tfPL.setCheck(true);
    bg.controls.tfFixed.setCheck(true);
    bg.controls.tfFreezeout.setCheck(true);
    bg.controls.tfRebuy.setCheck(true);
    bg.controls.tfReentry.setCheck(true);
    bg.controls.tfShootout.setCheck(true);
    bg.controls.tfBuyinMin.setText("");
    bg.controls.tfBuyinMax.setText("");
    bg.controls.tfSizeMin.setText("");
    bg.controls.tfSizeMax.setText("");
    bg.controls.tfTime.setCheck(true);
    bg.controls.tfOther.setCheck(true);
    bg.controls.tfPrimary.setCheck(true);
    bg.controls.tfSecondary.setCheck(true);
    bg.controls.tfHidePrivate.setCheck(false);
    bg.controls.tfHideRunning.setCheck(false);
  };
  bd.prototype.tourneyFilterShow = function (bh) {
    var bg, bi, g;
    bg = this;
    bi = bg.tourneyFilter;
    g = bh ? "SitnGo" : "Tourney";
    bi.controls.tfHoldem.setCheck(U.pset["filter" + g + "Holdem"]);
    bi.controls.tfOmaha.setCheck(U.pset["filter" + g + "Omaha"]);
    bi.controls.tfOmahaHiLo.setCheck(U.pset["filter" + g + "OmahaHiLo"]);
    bi.controls.tfOmahaX.setCheck(U.pset["filter" + g + "OmahaX"]);
    bi.controls.tfOmahaXHiLo.setCheck(U.pset["filter" + g + "OmahaXHiLo"]);
    bi.controls.tfRazz.setCheck(U.pset["filter" + g + "Razz"]);
    bi.controls.tfStud.setCheck(U.pset["filter" + g + "Stud"]);
    bi.controls.tfStudHiLo.setCheck(U.pset["filter" + g + "StudHiLo"]);
    bi.controls.tfMixed.setCheck(U.pset["filter" + g + "Mixed"]);
    bi.controls.tfNL.setCheck(U.pset["filter" + g + "NL"]);
    bi.controls.tfPL.setCheck(U.pset["filter" + g + "PL"]);
    bi.controls.tfFixed.setCheck(U.pset["filter" + g + "Fixed"]);
    bi.controls.tfFreezeout.setCheck(U.pset["filter" + g + "Freezeout"]);
    bi.controls.tfRebuy.setCheck(U.pset["filter" + g + "Rebuy"]);
    bi.controls.tfReentry.setCheck(U.pset["filter" + g + "Reentry"]);
    bi.controls.tfShootout.setCheck(U.pset["filter" + g + "Shootout"]);
    bi.controls.tfBuyinMin.setText(U.pset["filter" + g + "BuyinMin"]);
    bi.controls.tfBuyinMax.setText(U.pset["filter" + g + "BuyinMax"]);
    bi.controls.tfSizeMin.setText(U.pset["filter" + g + "SizeMin"]);
    bi.controls.tfSizeMax.setText(U.pset["filter" + g + "SizeMax"]);
    bi.controls.$tfStarts.toggle(!bh);
    bi.controls.tfTime.show(!bh);
    bi.controls.tfOther.show(!bh);
    if (!bh) {
      bi.controls.tfTime.setCheck(U.pset["filter" + g + "Time"]);
      bi.controls.tfOther.setCheck(U.pset["filter" + g + "Other"]);
    }
    bi.controls.$tfCurrency.toggle(U.secondary);
    bi.controls.tfPrimary.show(U.secondary);
    bi.controls.tfSecondary.show(U.secondary);
    if (U.secondary) {
      bi.controls.tfPrimary.setCheck(U.pset["filter" + g + "Primary"]);
      bi.controls.tfSecondary.setCheck(U.pset["filter" + g + "Secondary"]);
    }
    bi.controls.tfHidePrivate.setCheck(U.pset["filter" + g + "HidePrivate"]);
    bi.controls.tfHideRunning.setCheck(U.pset["filter" + g + "HideRunning"]);
    bi.controls.tfEnabled.setCheck(U.pset["filter" + g + "Activate"]);
    bi.data.tourneyFilterSnG = bh;
    bi.setTitle(bh ? U.lang.FilterTitleSitnGo : U.lang.FilterTitleTourney);
    bi.show(true, U.mobile);
  };
  bd.prototype.tourneyInfoRequest = function () {
    var g = this;
    if (g.tourneySelected == "") {
      g.messageShow(U.lang.LobbyCaptionNoTournament);
      return;
    }
    j({
      Response: "TableInfo",
      Table: g.tourneySelected,
      Type: "T",
    });
  };
  bd.prototype.tourneyNext = function () {
    var bg, g, bh;
    bg = this;
    g = bg.tourneyGrid.selrow;
    if (g < 0 || g >= U.data.Tourney.rows.length - 1) {
      return;
    }
    g++;
    bg.tourneyGrid.selrow = g;
    bg.tourneyGrid.scrollIntoView();
    bg.tourneySelect(g);
    bh = U.data.Tourney.rows[g];
    bg.tourneyPlayers.setTitle(bh.id + " - " + bh.game + " (" + bh.buyin + ")");
  };
  bd.prototype.tourneyPrev = function () {
    var bg, g, bh;
    bg = this;
    g = bg.tourneyGrid.selrow;
    if (g <= 0) {
      return;
    }
    g--;
    bg.tourneyGrid.selrow = g;
    bg.tourneyGrid.scrollIntoView();
    bg.tourneySelect(g);
    bh = U.data.Tourney.rows[g];
    bg.tourneyPlayers.setTitle(bh.id + " - " + bh.game + " (" + bh.buyin + ")");
  };
  bd.prototype.tourneyPlayerSaveSort = function () {
    al({
      TourneyPlayerSortColumn: U.data.TourneyPlayer.sortCol,
      TourneyPlayerSortAscend: U.data.TourneyPlayer.sortAscend,
    });
  };
  bd.prototype.tourneyPlayerTable = function (bl, bi) {
    var bj, g, bh, bk, bm, bg;
    bj = this;
    if (bi < 0) {
      return;
    }
    bk = bl ? U.data.SitnGoPlayer.rows : U.data.TourneyPlayer.rows;
    g = "Table " + bk[bi].table;
    bh = bl ? bj.sitnGoGrid.selrow : bj.tourneyGrid.selrow;
    if (bh < 0) {
      return;
    }
    bk = bl ? U.data.SitnGo.rows : U.data.Tourney.rows;
    bm = bk[bh].password == "Yes+";
    bg = bk[bh].id;
    z("OpenTable", bg + " - " + g, "T", bm, 0);
  };
  bd.prototype.tourneyPlayersCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#TourneyPlayers");
    bh = new Y(g, bg, {
      title: "",
    });
    bg.tourneyPrevBtn = new A(
      $("#TourneyPrevBtn", g),
      U.lang.LobbyButtonTrnyPrev,
      25,
      function () {
        bg.tourneyPrev();
      }
    );
    bg.tourneyNextBtn = new A(
      $("#TourneyNextBtn", g),
      U.lang.LobbyButtonTrnyNext,
      25,
      function () {
        bg.tourneyNext();
      }
    );
    bg.tourneyRegister2Btn = new A(
      $("#TourneyRegister2Btn", g),
      U.lang.LobbyButtonTrnyRegister,
      25,
      function () {
        bg.tourneyRegister();
      }
    );
    bg.tourneyStartNow = new E(
      $("#TourneyStartNow", g),
      U.lang.LobbyCaptionStartNow + " *",
      function () {
        bg.tourneyStartNowCheck();
      }
    );
    new A($(".okbtn", g), U.lang.DialogOK, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.tourneyPlayers = bh;
  };
  bd.prototype.tourneyPlayersShow = function () {
    var bg, bi, g, bh;
    bg = this;
    bi = bg.tourneyPlayers;
    g = bg.tourneyGrid.selrow;
    if (g < 0) {
      return;
    }
    bh = U.data.Tourney.rows[g];
    bi.setTitle(bh.id + " - " + bh.game + " (" + bh.buyin + ")");
    bi.show(true, U.mobile);
    bg.tourneyPlayerGrid.setScale(bi.scaleY);
    bg.tourneyPlayerGrid.resize();
    bg.tourneyWaitGrid.setScale(bi.scaleY);
    bg.tourneyWaitGrid.resize();
  };
  bd.prototype.tourneyRegister = function () {
    var bi, bh, g, bj, bk, bg;
    bi = this;
    if (bi.tourneySelected == "") {
      bi.messageShow(U.lang.LobbyCaptionNoTournament);
      return;
    }
    if (U.loggedIn == false) {
      bi.messageShow(U.lang.MessageTournamentLogin);
      return;
    }
    bk = bi.tourneyRegisterBtn.getCaption();
    bh =
      bk == U.lang.LobbyButtonTrnyRegister ||
      bk == U.lang.LobbyButtonTrnyRegLate;
    if (bh) {
      j({
        Response: "RegisterRequest",
        Table: bi.tourneySelected,
        Type: "T",
      });
    } else {
      g = bi.tourneyGrid.selrow;
      bg = U.data.Tourney.rows[g].password;
      bj = bg == "Yes" || bg == "Yes+";
      z("Unregister", bi.tourneySelected, "T", bj, 0);
    }
  };
  bd.prototype.tourneyRegCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $(".yesno").clone().removeClass("yesno").appendTo(U.$webClient);
    bh = new Y(g, bg, {});
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.tourneyRegOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.tourneyReg = bh;
  };
  bd.prototype.tourneyRegOk = function () {
    var g, bg;
    g = this;
    bg = g.tourneyReg;
    bg.close();
    z("Register", bg.data.tourney, "T", bg.data.needpw, 0);
  };
  bd.prototype.tourneyRegShow = function (bi, bj, bh) {
    var g, bg;
    g = this;
    bg = g.tourneyReg;
    bg.setTitle(bj);
    bg.data.tourney = bj;
    bg.data.needpw = bh;
    bg.showMessage(bi, true, U.mobile);
  };
  bd.prototype.tourneyRegOptionCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#TourneyRegOption").appendTo(U.$webClient);
    bh = new Y(g, bg, {});
    $("#tro_msg").text(U.lang.BuyInTourney);
    $("#tro_option").text(U.lang.BuyInSelect);
    bh.controls.useTicket = new C($("#tro_ticket"), "");
    bh.controls.useBalance = new C($("#tro_balance"), "");
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.tourneyRegOptionOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.tourneyRegOption = bh;
  };
  bd.prototype.tourneyRegOptionOk = function () {
    var g, bh, bg;
    g = this;
    bh = g.tourneyRegOption;
    bg = bh.controls.useTicket.isChecked() ? "Register" : "RegisterPay";
    bh.close();
    z(bg, bh.data.tourney, "T", bh.data.needpw, 0);
  };
  bd.prototype.tourneyRegOptionShow = function (bl, bk, bi, bh, g) {
    var bg, bj;
    bg = this;
    bj = bg.tourneyRegOption;
    bj.setTitle(bl);
    bj.data.tourney = bl;
    bj.data.needpw = bk;
    bj.controls.useTicket.setCaption(
      U.lang.BuyInUseTicket.split("%1%").join(bi)
    );
    bj.controls.useBalance.setCaption(
      U.lang.BuyInPay.split("%1%").join(bh).split("%2%").join(g)
    );
    bj.controls.useTicket.setCheck(true);
    bj.show(true, U.mobile);
  };
  bd.prototype.tourneySaveSort = function () {
    al({
      TourneySortColumn: U.data.Tourney.sortCol,
      TourneySortAscend: U.data.Tourney.sortAscend,
    });
  };
  bd.prototype.tourneySelect = function (g) {
    var bg, bh;
    bg = this;
    if (g < 0 || g >= U.data.Tourney.rows.length) {
      bg.tourneyUnselect();
    } else {
      bh = bg.tourneySelected != U.data.Tourney.rows[g].id;
      bg.tourneySelected = U.data.Tourney.rows[g].id;
      bg.tourneyInfoBtn.enable(true);
      bg.tourneyObserveBtn.enable(true);
      bg.tourneyPlayersBtn.enable(true);
      bg.tourneyRegisterBtn.enable(true);
      bg.tourneyRegister2Btn.enable(true);
      bg.tourneyPrevBtn.enable(g > 0);
      bg.tourneyNextBtn.enable(g < U.data.Tourney.rows.length - 1);
      bg.optionsStart.enable(U.data.Tourney.rows[g].startCode && U.loggedIn);
      if (bh) {
        j({
          Response: "GameSelected",
          Table: bg.tourneySelected,
          Type: "T",
          SnG: "No",
        });
      }
    }
  };
  bd.prototype.tourneySelectID = function (bi) {
    var bg, bh, g;
    bg = this;
    bg.tourneyGrid.selrow = -1;
    if (bi == "") {
      bg.tourneyUnselect();
      return;
    }
    bh = U.data.Tourney.rows.length;
    for (g = 0; g < bh; g++) {
      if (bi == U.data.Tourney.rows[g].id) {
        bg.tourneyGrid.selrow = g;
        break;
      }
    }
  };
  bd.prototype.tourneyTabCaption = function () {
    var g, bg;
    g = this;
    bg = U.lang.LobbyCaptionTournaments + ": ";
    if (U.pset.filterTourneyActivate) {
      bg = bg + U.data.Tourney.rows.length + "/";
    }
    bg = bg + U.data.Tourney.total;
    g.lobbyTabs.setCaption(2, bg);
    g.lobbyTournaments.$menu.text(bg);
  };
  bd.prototype.tourneyTableOpen = function (bk, bh) {
    var bi, bl, bg, bm, g, bj;
    bi = this;
    if (bh < 0) {
      bi.messageShow(U.lang.LobbyCaptionNoTournament);
      return;
    }
    bj = bk ? U.data.SitnGo.rows : U.data.Tourney.rows;
    bl = bj[bh].password == "Yes+";
    bg = bj[bh].id;
    bm = bj[bh].tables;
    if (bm > 1) {
      j({
        Response: "TableSelect",
        Table: bg,
      });
    } else {
      g = "Table 1";
      z("OpenTable", bg + " - " + g, "T", bl, 0);
    }
  };
  bd.prototype.tourneyTableSelectedOpen = function () {
    var g = this;
    g.tourneyTableOpen(false, g.tourneyGrid.selrow);
  };
  bd.prototype.tourneyTabSetup = function () {
    var g, bg;
    g = this;
    U.data.Tourney = {};
    U.data.Tourney.cols = 6;
    U.data.Tourney.sortCol = 0;
    U.data.Tourney.sortAscend = true;
    U.data.Tourney.sortable = true;
    U.data.Tourney.widths = [0.26, 0.18, 0.16, 0.06, 0.11, 0.23];
    U.data.Tourney.rows = [];
    U.data.Tourney.urows = [];
    U.data.Tourney.total = 0;
    U.data.Tourney.rowHeight = U.mobile ? 24 : 16;
    U.data.Tourney.headers = [
      U.lang.LobbyColumnTrnyID,
      U.lang.LobbyColumnTrnyGame,
      U.lang.LobbyColumnTrnyBuyIn,
      U.lang.LobbyColumnTrnyTS,
      U.lang.LobbyColumnTrnyReg,
      U.lang.LobbyColumnTrnyStarts,
    ];
    U.data.Tourney.fields = [
      "id",
      "game",
      "gameIndex",
      "buyin",
      "buyinSort",
      "ts",
      "reg",
      "regSort",
      "tables",
      "starts",
      "startSort",
      "startMin",
      "startTime",
      "password",
    ];
    U.data.Tourney.fieldsShow = ["id", "game", "buyin", "ts", "reg", "starts"];
    U.data.Tourney.fieldsSort = [
      "id",
      "game",
      "buyinSort",
      "ts",
      "regSort",
      "startsSort",
    ];
    U.data.Tourney.fieldsNum = [false, false, false, true, false, false];
    U.data.Tourney.fieldsRight = [false, false, false, false, false, false];
    U.data.Tourney.fieldsHTML = [false, false, false, false, false, false];
    g.tourneyGrid = new ay(
      $("#TourneyGrid", g.$dialog),
      U.data.Tourney,
      function (bh) {
        g.tourneySelect(bh);
      },
      function (bh) {
        g.tourneyTableOpen(false, bh);
      },
      function () {
        g.tourneySaveSort();
      }
    );
    bg = U.lang.LobbyButtonFilter;
    if (U.pset.filterTourneyActivate) {
      bg = bg + " " + U.checkMark;
    }
    g.tourneyFilterBtn = new A(
      $("#TourneyFilterBtn", g.$dialog),
      bg,
      40,
      function () {
        g.tourneyFilterShow(false);
      }
    );
    g.tourneyObserveBtn = new A(
      $("#TourneyObserveBtn", g.$dialog),
      U.lang.LobbyButtonTrnyObserve,
      40,
      function () {
        g.tourneyTableSelectedOpen();
      }
    );
    g.tourneyInfoBtn = new A(
      $("#TourneyInfoBtn", g.$dialog),
      U.lang.LobbyButtonTrnyInfo,
      40,
      function () {
        g.tourneyInfoRequest();
      }
    );
    g.tourneyPlayersBtn = new A(
      $("#TourneyPlayersBtn", g.$dialog),
      U.lang.LobbyButtonTrnyPlayers,
      40,
      function () {
        g.tourneyPlayersShow();
      }
    );
    g.tourneyRegisterBtn = new A(
      $("#TourneyRegisterBtn", g.$dialog),
      U.lang.LobbyButtonTrnyRegister,
      40,
      function () {
        g.tourneyRegister();
      }
    );
    g.tourneySelected = "";
    g.$tourneySelected = $("#TourneySelected", g.$dialog);
    U.data.TourneyPlayer = {};
    U.data.TourneyPlayer.cols = 4;
    U.data.TourneyPlayer.sortCol = 0;
    U.data.TourneyPlayer.sortAscend = true;
    U.data.TourneyPlayer.sortable = true;
    U.data.TourneyPlayer.widths = [0.4, 0.2, 0.2, 0.2];
    U.data.TourneyPlayer.rows = [];
    U.data.TourneyPlayer.rowHeight = 16;
    U.data.TourneyPlayer.headers = [
      U.lang.LobbyColumnTrnyPlayer,
      U.lang.LobbyColumnTrnyTable,
      U.lang.LobbyColumnTrnyChips,
      U.lang.LobbyColumnTrnyRank,
    ];
    U.data.TourneyPlayer.fields = ["player", "table", "chips", "rank"];
    U.data.TourneyPlayer.fieldsShow = ["player", "table", "chips", "rank"];
    U.data.TourneyPlayer.fieldsSort = ["player", "table", "chips", "rank"];
    U.data.TourneyPlayer.fieldsNum = [false, true, true, true];
    U.data.TourneyPlayer.fieldsRight = [false, false, false, false];
    U.data.TourneyPlayer.fieldsHTML = [false, false, false, false];
    g.tourneyPlayerGrid = new ay(
      $("#TourneyPlayerGrid", g.tourneyPlayers.$dialog),
      U.data.TourneyPlayer,
      null,
      function (bh) {
        g.tourneyPlayerTable(false, bh);
      },
      function () {
        g.tourneyPlayerSaveSort();
      }
    );
    U.data.TourneyWait = {};
    U.data.TourneyWait.cols = 2;
    U.data.TourneyWait.sortCol = -1;
    U.data.TourneyWait.sortAscend = true;
    U.data.TourneyWait.sortable = false;
    U.data.TourneyWait.widths = [0.23, 0.77];
    U.data.TourneyWait.rows = [];
    U.data.TourneyWait.rowHeight = 16;
    U.data.TourneyWait.headers = ["#", U.lang.LobbyColumnTrnyWaiting];
    U.data.TourneyWait.fields = ["pos", "player"];
    U.data.TourneyWait.fieldsShow = ["pos", "player"];
    U.data.TourneyWait.fieldsSort = ["pos", "player"];
    U.data.TourneyWait.fieldsNum = [true, false];
    U.data.TourneyWait.fieldsRight = [false, false];
    U.data.TourneyWait.fieldsHTML = [false, false];
    g.tourneyWaitGrid = new ay(
      $("#TourneyWaitGrid", g.tourneyPlayers.$dialog),
      U.data.TourneyWait
    );
  };
  bd.prototype.tourneyStartNowCheck = function () {
    var g = this;
    if (g.tourneySelected == U.lang.LobbyCaptionNoTournament) {
      return;
    }
    j({
      response: "StartNow",
      Table: g.tourneySelected,
      Checked: g.tourneyStartNow.isChecked() ? "Yes" : "No",
    });
  };
  bd.prototype.tourneyUnselect = function () {
    var g = this;
    g.tourneySelected = "";
    g.$tourneySelected.text(U.lang.LobbyCaptionNoTournament);
    U.data.TourneyPlayer.rows.length = 0;
    g.tourneyPlayerGrid.update();
    U.data.TourneyWait.rows.length = 0;
    g.tourneyWaitGrid.update();
    g.tourneyInfoBtn.enable(false);
    g.tourneyObserveBtn.enable(false);
    g.tourneyPlayersBtn.enable(false);
    g.tourneyRegisterBtn.enable(false);
    g.tourneyRegister2Btn.enable(false);
    g.tourneyPrevBtn.enable(false);
    g.tourneyNextBtn.enable(false);
    g.tourneyStartNow.show(false);
    if (g.lobbyTabs.getTab() == 2) {
      g.optionsStart.enable(false);
      g.tourneyPlayers.close();
    }
  };
  bd.prototype.transactionsCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $("#Transactions");
    bh = new Y(g, bg, {
      title: "",
    });
    $("#trans_label", g).text(U.lang.TransactionsDays);
    bh.controls.days = new ax($("#trans_days", g), {
      border: true,
    });
    bh.controls.days.setText("1");
    new A($("#trans_refresh", g), U.lang.TransactionsRefresh, 20, function () {
      bh.controls.$count.text(U.lang.TransactionsLoading);
      j({
        Response: "Transactions",
        Days: bh.controls.days.getText(),
      });
    });
    U.data.Trans = {};
    U.data.Trans.cols = 5;
    U.data.Trans.widths = [0.22, 0.15, 0.18, 0.18, 0.27];
    U.data.Trans.headers = [
      U.lang.TransactionsDate,
      U.lang.TransactionsCurrency,
      U.lang.TransactionsChange,
      U.lang.TransactionsBalance,
      U.lang.TransactionsSource,
    ];
    U.data.Trans.fields = ["date", "currency", "change", "balance", "source"];
    U.data.Trans.fieldsShow = [
      "date",
      "currency",
      "change",
      "balance",
      "source",
    ];
    U.data.Trans.fieldsSort = [
      "date",
      "currency",
      "change",
      "balance",
      "source",
    ];
    U.data.Trans.fieldsNum = [false, false, true, true, false];
    U.data.Trans.fieldsRight = [false, false, true, true, false];
    U.data.Trans.fieldsHTML = [false, false, false, false, false];
    U.data.Trans.sortCol = 0;
    U.data.Trans.sortAscend = false;
    U.data.Trans.sortable = true;
    U.data.Trans.rows = [];
    U.data.Trans.rowHeight = U.mobile ? 24 : 16;
    bg.transGrid = new ay($("#trans_grid", g), U.data.Trans, null, null, null);
    bh.controls.$count = $("#trans_count", g).text(
      U.lang.TransactionsRecords + " 0"
    );
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bh.close();
    });
    new A($(".save", g), U.lang.DialogSave, 25, function () {
      P(U.lang.TransactionsTitle, bg.transGrid.getCSV(), true);
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.transactions = bh;
  };
  bd.prototype.transactionsShow = function () {
    var g, bg;
    g = this;
    bg = g.transactions;
    bg.setTitle(U.lang.TransactionsTitle + " - " + U.loginData.player);
    bg.show(true, U.mobile);
    g.transGrid.resize();
  };
  bd.prototype.transferConfirmCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $(".yesno").clone().removeClass("yesno").appendTo(U.$webClient);
    bh = new Y(g, bg, {
      title: U.lang.DialogConfirm,
    });
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.transferConfirmOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.transferConfirm = bh;
  };
  bd.prototype.transferConfirmOk = function () {
    var g, bg;
    g = this;
    bg = g.transferConfirm;
    bg.close();
    j({
      Response: "Transfer",
      Action: "Finish",
      Recipient: bg.data.recipient,
      Amount: bg.data.amount,
      Primary: bg.data.primary,
    });
  };
  bd.prototype.transferConfirmShow = function (bk, bi, g, bh) {
    var bg, bj;
    bg = this;
    bj = bg.transferConfirm;
    bj.data.recipient = bi;
    bj.data.amount = g;
    bj.data.primary = bh;
    bj.showMessage(bk, true, U.mobile);
  };
  bd.prototype.updateLobbyTitle = function () {
    var bg, g;
    bg = this;
    if (U.mobile) {
      g = U.siteName;
      if (bg.lobbyTabs.getTab() == 4 && U.tables.length > 0) {
        bg.$tableNamePanel.text(U.tables[U.tableCurrent].title);
        if (U.loggedIn) {
          g = g + " - " + U.loginData.player;
        }
      } else {
        if (U.loggedIn) {
          g =
            g +
            " - " +
            U.lang.TableCaptionLoggedIn.split("%1%").join(U.loginData.player);
        }
      }
      bg.$sitePanel.text("");
      bg.$siteMobile.text(g);
    } else {
      if (U.loggedIn) {
        g = U.lang.LobbyCaptionTitleLogged.split("%1%").join(
          U.loginData.player
        );
      } else {
        g = U.lang.LobbyCaptionTitle;
      }
      bg.setCaption(g);
      bg.$sitePanel.text(U.siteName);
      bg.$siteMobile.text("");
    }
  };

  function an(
    bC,
    br,
    bh,
    bA,
    bx,
    bl,
    bj,
    bn,
    bo,
    g,
    bp,
    bw,
    bs,
    bu,
    by,
    bg,
    bt,
    bi,
    bq
  ) {
    var bv, bz, bk, bB, bm;
    bv = this;
    bv.closed = false;
    bv.id = br;
    bv.game = bA;
    bv.limit = bx;
    bv.canResign = bl;
    bv.buyin = bj;
    bv.mix = bn;
    bv.oncolor = g;
    bv.offcolor = bp;
    bv.primary = bw;
    bv.rebuyfee = bs;
    bv.minchip = bu;
    bv.sng = by;
    bv.sutg = bg;
    bv.player = bt;
    bv.title = bC;
    bv.chatQueue = [];
    bv.headerText = "";
    bv.type = bh;
    bv.initLocalVariables();
    bv.$dialog = $(".table")
      .clone()
      .removeClass("table")
      .appendTo(U.mobile ? U.lobby.$openTableBox : U.$webClient)
      .css({
        left: bi,
        top: bq,
      })
      .attr("id", bh + br);
    $(".tablecontent", bv.$dialog).css("color", bv.offcolor);
    bv.dialog = new Y(bv.$dialog, null, {
      shadeparent: bv,
      title: bC,
      removeonclose: true,
      minwidth: 356,
      minheight: 313,
      resize: true,
      onresize: function (bD) {
        bv.resizeTable(bD);
      },
      onresized: function () {
        bv.resizeFinish();
      },
    });
    bv.modalList.push(bv.dialog);
    $(".minbtn", bv.$dialog).on("touchstart mousedown", function () {
      bv.minimize();
      return false;
    });
    $(".maxbtn", bv.$dialog).on("touchstart mousedown", function () {
      bv.maximize();
      return false;
    });
    bv.$closeBtn = $(".closebtn", bv.$dialog).on(
      "touchstart mousedown",
      function () {
        bv.closeTable();
        return false;
      }
    );
    bv.$content = $(".tablecontent", bv.$dialog).css({
      background: "url('Image?Name=" + bo + "') 0px 0px/100% 100% no-repeat",
    });
    bv.$chatEditFrame = $(".chateditframe", bv.$content).css(
      "border-color",
      U.color.Window
    );
    bv.chatEdit = new ax($(".tablechatedit", bv.$chatEditFrame), {
      onEnterKey: function () {
        bv.chatSend();
      },
    });
    bv.$statsHeader = $(".tablestatsheader", bv.$chatEditFrame)
      .text(U.lang.TableCaptionStatistics)
      .css({
        color: U.color.ListText,
        "background-color": U.color.List,
      });
    new A(
      $(".tablechatsendbtn", bv.$chatEditFrame),
      "&#8595;",
      20,
      function () {
        bv.chatSend();
      }
    ).$button.css("border-radius", "0px");
    bv.$chatTextFrame = $(".chattextframe", bv.$content).css(
      "border-color",
      U.color.Window
    );
    bv.chatText = new x($(".tablechattext", bv.$chatTextFrame), false);
    bv.statsText = new x($(".tablestatstext", bv.$chatTextFrame), false);
    bv.iconMenuSetup();
    bv.chatStatsIconSetup();
    bv.totalPlateSetup();
    bv.horzChrome = 6;
    bv.vertChrome = 63;
    bv.createDialogs();
    bv.dialog.show(false);
    bv.isMin = false;
    bv.isMax = false;
    if (U.mobile) {
      bv.vertChrome = 6;
      bv.$dialog.css({
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        borderRadius: 0,
        boxShadow: "none",
      });
      $(".header", bv.$dialog).hide();
      $(".menu", bv.$dialog).hide();
      $(".tablecontent", bv.$dialog).css("top", 3);
      bv.showChat(false);
      bv.resizeTable();
      bv.resizeFinish();
    } else {
      bz = bv.$dialog.width();
      bk = bv.$dialog.height();
      bB = U.$webClient.width();
      bm = U.$webClient.height();
      if (bz > bB) {
        bz = bB;
        bk = ((bz - bv.horzChrome) * 510) / 700 + bv.vertChrome;
      }
      if (bk > bm) {
        bk = bm;
        bz = ((bk - bv.vertChrome) * 700) / 510 + bv.horzChrome;
      }
      if (bz != 706 || bk != 573) {
        bv.$dialog.css({
          width: bz,
          height: bk,
        });
        bv.resizeTable();
        bv.resizeFinish();
      }
    }
  }
  an.prototype.actionTimer = function (bl, bk, bj, bi, g) {
    var bh = this;
    if (g == 0 && bh.getPlayerSeat() == bl) {
      bh.foldAnyBetCheck(false);
      bh.foldAnyBetShow(false);
    }
    bh.playerAction[bl] = bj;
    bh.playerChips[bl] = g;
    bh.setHint(bl);
    if (bi == 0) {
      bg();
    } else {
      bh.seat[bl].setInfo(bk);
      setTimeout(bg, bi);
    }

    function bg() {
      bj = bh.playerAction[bl];
      g = bh.playerChips[bl];
      if (bj == "") {
        bh.seat[bl].setInfo(B(g));
      } else {
        bh.seat[bl].setInfo(bj);
      }
    }
  };
  an.prototype.addonShow = function (bj, bi) {
    var bg, g, bh;
    bg = this;
    g = $(".addon")
      .clone()
      .removeClass("addon")
      .appendTo(U.mobile ? U.lobby.$openTableBox : U.$webClient);
    if (!bi || bi == "") {
      bi = U.lang.DialogMessage;
    }
    bh = new Y(g, bg, {
      title: bi,
      removeonclose: true,
    });
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bh.close();
      bg.getRebuy();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bh.showMessage(bj, true, U.mobile);
  };
  an.prototype.addRingChipsBust = function () {
    var g, bg;
    g = this;
    bg = {
      Response: "AddChips",
    };
    bg.Table = g.id;
    bg.Type = "R";
    bg.Amount = "Last";
    bg.AutoRebuy = "No";
    j(bg);
  };
  an.prototype.addRingChipsCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $(".addringchips")
      .clone()
      .removeClass("addringchips")
      .appendTo(U.mobile ? U.lobby.$openTableBox : U.$webClient);
    bh = new Y(g, bg, {
      title: bg.id,
    });
    $(".arc_addchips", g).text(U.lang.ChipsTitle);
    bh.controls.chipsMin = new C(
      $(".arc_buyinmin", g),
      U.lang.ChipsMin,
      function () {
        bh.controls.chipsInput.setText("");
      }
    );
    bh.controls.chipsMax = new C(
      $(".arc_buyinmax", g),
      U.lang.ChipsMax,
      function () {
        bh.controls.chipsInput.setText("");
      }
    );
    bh.controls.chipsOther = new C($(".arc_buyinother", g), U.lang.ChipsOther);
    bh.controls.chipsInput = new ax($(".arc_otherinput", g), {
      onFocus: function () {
        bh.controls.chipsOther.setCheck();
      },
      border: true,
    });
    bh.controls.chipsAuto = new E($(".arc_autorebuy", g), U.lang.ChipsAuto);
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.addRingChipsOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.addRingChips = bh;
  };
  an.prototype.addRingChipsOk = function () {
    var g, bi, bg, bh;
    g = this;
    bh = g.addRingChips;
    bh.close();
    bi = q(bh.controls.chipsInput.getText());
    if (bh.controls.chipsMin.isChecked()) {
      bi = "Min";
    } else {
      if (bh.controls.chipsMax.isChecked()) {
        bi = "Max";
      } else {
        if (bi < 0) {
          g.messageShow(U.lang.ChipsInvalid);
          return;
        }
      }
    }
    bg = {
      Response: "AddChips",
    };
    bg.Table = g.id;
    bg.Type = "R";
    bg.Amount = bi;
    if (bh.controls.chipsAuto.isChecked()) {
      bg.AutoRebuy = "Yes";
    } else {
      bg.AutoRebuy = "No";
    }
    j(bg);
  };
  an.prototype.addRingChipsShow = function () {
    var g = this;
    g.addRingChips.controls.chipsMin.setCheck();
    g.addRingChips.show(true, U.mobile);
  };
  an.prototype.addTourneyChipsOk = function () {
    var g, bg;
    g = this;
    g.addTourneyChips.close();
    bg = {
      Response: "AddChips",
    };
    bg.Table = g.id;
    bg.Type = g.type;
    j(bg);
  };
  an.prototype.addTourneyChipsCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $(".yesno")
      .clone()
      .removeClass("yesno")
      .appendTo(U.mobile ? U.lobby.$openTableBox : U.$webClient);
    bh = new Y(g, bg, {
      title: bg.id,
    });
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.addTourneyChipsOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.addTourneyChips = bh;
  };
  an.prototype.betButtonClick = function (bg) {
    var bh, g;
    bh = this;
    g = 0;
    switch (bg) {
      case 1:
        g = bh.betButton1.amount;
        break;
      case 2:
        g = bh.betButton2.amount;
        break;
      case 3:
        g = bh.betButton3.amount;
        break;
      case 4:
        g = bh.betButton4.amount;
        break;
    }
    if (g < bh.minRaiseTo) {
      g = bh.minRaiseTo;
    } else {
      if (g > bh.maxRaiseTo) {
        g = bh.maxRaiseTo;
      }
    }
    bh.raiseInput.setText(g);
    bh.raiseInputChange();
  };
  an.prototype.betButtonsVisible = function () {
    return (
      this.button1.isVisible() ||
      this.button2.isVisible() ||
      this.button3.isVisible() ||
      this.button4.isVisible()
    );
  };
  an.prototype.betLabelCSS = function (bl) {
    var bh, bk, bi, g, bj, bg;
    bh = this;
    bk = bh.seats;
    bi = bh.seatPosition(bl);
    bg = bh.$betLabel[bl].width();
    g = bh.chipX[bk][bi];
    bj = bh.chipY[bk][bi] - bh.chyOfs;
    if (bh.seat[bl].isRight) {
      g = g - bh.chxOfs - 2 - bg;
    } else {
      g = g + bh.chxOfs + 2;
    }
    return {
      left: g,
      top: bj,
    };
  };
  an.prototype.betShow = function (bl, bg) {
    var bh, bk, bi, g, bj;
    bh = this;
    bh.playerBet[bl] = bg;
    bk = bh.seats;
    bi = bh.seatPosition(bl);
    g = bh.chipX[bk][bi];
    bj = bh.chipY[bk][bi];
    bh.$bet[bl].xytrans(0).css({
      left: g - bh.chxOfs,
      top: bj - bh.chyOfs,
    });
    bh.stackChips(bh.$bet[bl], bg);
    bh.$bet[bl].toggle(bg > 0);
    bh.$betLabel[bl]
      .text(B(bg))
      .xytrans(0)
      .css(bh.betLabelCSS(bl))
      .toggle(bg > 0);
  };
  an.prototype.bringToFront = function () {
    var bg, g;
    bg = this;
    if (bg.isMin) {
      U.minTray.remove(bg);
      bg.$dialog.show();
      bg.isMin = false;
    }
    if (bg.$dialog.css("z-index") < U.zTop) {
      for (g = 0; g < bg.modalList.length; g++) {
        bg.modalList[g].$dialog.css("z-index", ++U.zTop);
      }
    }
    a2(bg.dialog);
    U.tableCurrent = U.tables.indexOf(bg);
    if (U.mobile) {
      bg.chatUpdate();
      bg.infoUpdate();
      bg.statsUpdate();
      bg.historyUpdate();
      U.lobby.prevTableBtn.enable(U.tableCurrent > 0);
      U.lobby.nextTableBtn.enable(U.tableCurrent < U.tables.length - 1);
      U.lobby.updateLobbyTitle();
    }
  };
  an.prototype.button1Click = function () {
    var bg, bh, g;
    bg = this;
    if (U.hasTouch == false) {
      bg.chatFocus();
    }
    bh = bg.button1.command;
    g = 0;
    if (bh == "Fold") {
      if (bg.button2.command == "Check") {
        bg.confirmFold.showMessage(U.lang.MessageConfirmFold, true, U.mobile);
        return;
      }
      g = bg.getShowMask(true);
    } else {
      if (bh == "Leave" && bg.type == "R") {
        bg.confirmLeave(true);
      }
    }
    bg.sendButton(bh, g);
    bg.buttonsOff();
  };
  an.prototype.button2Click = function () {
    var g, bg;
    g = this;
    if (U.hasTouch == false) {
      g.chatFocus();
    }
    bg = g.button2.command;
    g.sendButton(bg, 0);
    g.buttonsOff();
  };
  an.prototype.button3Click = function () {
    var bg, bh, g;
    bg = this;
    if (U.hasTouch == false) {
      bg.chatFocus();
    }
    bh = bg.button3.command;
    g = 0;
    if (bh == "Add Chips") {
      bg.addRingChipsBust();
    } else {
      if (bh == "Show") {
        g = bg.getShowMask(false);
      } else {
        g = bg.raiseTo;
      }
    }
    bg.sendButton(bh, g);
    bg.buttonsOff();
  };
  an.prototype.button4Click = function () {
    var g, bg;
    g = this;
    if (U.hasTouch == false) {
      g.chatFocus();
    }
    bg = g.button4.command;
    g.sendButton(bg, g.maxRaiseTo);
    g.buttonsOff();
  };
  an.prototype.buttonsOff = function () {
    var g = this;
    g.setCommand(g.button1, "Off", 0);
    g.setCommand(g.button2, "Off", 0);
    g.setCommand(g.button3, "Off", 0);
    g.setCommand(g.button4, "Off", 0);
    g.timeBankBtn.show(false);
    g.raiseInput.setText("");
    g.$raiseBox.hide();
    g.betButton1.show(false);
    g.betButton2.show(false);
    g.betButton3.show(false);
    g.betButton4.show(false);
    g.queued = false;
    aU();
  };
  an.prototype.buyInRingChipsCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $(".buyinringchips")
      .clone()
      .removeClass("buyinringchips")
      .appendTo(U.mobile ? U.lobby.$openTableBox : U.$webClient);
    bh = new Y(g, bg, {
      title: U.lang.BuyInTitle,
    });
    bh.controls.buyInMin = new C(
      $(".brc_buyinmin", g),
      U.lang.BuyInMin,
      function () {
        bh.controls.buyInInput.setText("");
      }
    );
    bh.controls.buyInMax = new C(
      $(".brc_buyinmax", g),
      U.lang.BuyInMax,
      function () {
        bh.controls.buyInInput.setText("");
      }
    );
    bh.controls.buyInOther = new C($(".brc_buyinother", g), U.lang.BuyInOther);
    bh.controls.buyInInput = new ax($(".brc_otherinput", g), {
      onFocus: function () {
        bh.controls.buyInOther.setCheck();
      },
      border: true,
    });
    bh.controls.buyInAuto = new E($(".brc_autorebuy", g), U.lang.BuyInAuto);
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.buyInRingChipsOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bg.buyInRingChipsDecline();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bg.buyInRingChipsDecline();
      return false;
    });
    bg.buyInRingChips = bh;
  };
  an.prototype.buyInRingChipsDecline = function () {
    var g, bg, bh;
    g = this;
    bh = g.buyInRingChips;
    clearInterval(bh.data.interval);
    bg = {
      Response: "RSVP",
    };
    bg.Table = g.id;
    bg.Type = "R";
    bg.BuyIn = 0;
    j(bg);
    g.buyInRingChips.close();
  };
  an.prototype.buyInRingChipsOk = function () {
    var bh, bg, g, bk, bi, bj;
    bh = this;
    bj = bh.buyInRingChips;
    clearInterval(bj.data.interval);
    bg = bj.data.min;
    g = bj.data.max;
    bk = q(bj.controls.buyInInput.getText());
    if (bj.controls.buyInMin.isChecked()) {
      bk = bg;
    } else {
      if (bj.controls.buyInMax.isChecked()) {
        bk = g;
      } else {
        if (bk < bg) {
          bh.messageShow(U.lang.BuyInMessageMin.split("%1%").join(bg));
          return;
        } else {
          if (bk > g) {
            bh.messageShow(U.lang.BuyInMessageMax.split("%1%").join(g));
            return;
          }
        }
      }
    }
    bi = {
      Response: "RSVP",
    };
    bi.Table = bh.id;
    bi.Type = "R";
    bi.BuyIn = bk;
    if (bj.controls.buyInAuto.isChecked()) {
      bi.AutoRebuy = "Yes";
    } else {
      bi.AutoRebuy = "No";
    }
    j(bi);
    bj.close();
  };
  an.prototype.buyInRingChipsShow = function (bg, bl, bn, bj, bo, bq, bk) {
    var bp, bi, bm, g;
    bp = this;
    bm = bp.buyInRingChips;
    bm.data.min = bl;
    bm.data.max = bn;
    $(".brc_instruct", bm.$dialog).text(
      U.lang.BuyInMessage.split("%1%").join(bg).split("%2%").join(bp.id)
    );
    $(".brc_seconds", bm.$dialog).text(U.lang.BuyInSeconds + " " + bg);
    g = a6(B(bo), bk);
    $(".brc_balance", bm.$dialog).text(
      U.lang.BuyInBalance.split("%1%").join(g)
    );
    $(".brc_rathole", bm.$dialog).text(U.lang.BuyInRathole).toggle(bq);
    bm.controls.buyInMin.setCaption(U.lang.BuyInMin + " " + n(bl));
    bm.controls.buyInMax.setCaption(U.lang.BuyInMax + " " + n(bn));
    bm.controls.buyInInput.setText(n(bj));
    bm.controls.buyInOther.setCheck();
    bm.show(true, U.mobile);
    av("beep");
    bi = new Date().getTime();
    bm.data.interval = setInterval(bh, 1000);

    function bh() {
      var br = bg - Math.round((new Date().getTime() - bi) / 1000);
      $(".brc_seconds", bm.$dialog).text(U.lang.BuyInSeconds + " " + br);
      if (br <= 0) {
        bp.buyInRingChipsDecline();
      }
    }
  };
  an.prototype.changeGame = function (bh, bl, bg) {
    var bk, bi, g, bm, bj;
    bk = this;
    bk.game = bh;
    bk.limit = bl;
    bk.sutg = bg;
    bk.straddleShow(bk.sutg && bk.getPlayerSeat() > 0);
    if (bk.game == "holdem") {
      bk.holeCards = 2;
      bk.holeX = [0, 46, 0];
      bk.holeY = [0, 40, 40];
      bk.outNextBlindShow(bk.outNextHand.isVisible());
    } else {
      if (bk.game == "omaha") {
        bk.holeCards = 4;
        bk.holeX = [0, 44, 30, 16, 2];
        bk.holeY = [0, 40, 40, 40, 40];
        bk.outNextBlindShow(bk.outNextHand.isVisible());
      } else {
        if (bk.game == "omaha5") {
          bk.holeCards = 5;
          bk.holeX = [0, 51, 37, 23, 9, -5];
          bk.holeY = [0, 40, 40, 40, 40, 40];
          bk.outNextBlindShow(bk.outNextHand.isVisible());
        } else {
          if (bk.game == "omaha6") {
            bk.holeCards = 6;
            bk.holeX = [0, 58, 44, 30, 16, 2, -12];
            bk.holeY = [0, 40, 40, 40, 40, 40, 40];
            bk.outNextBlindShow(bk.outNextHand.isVisible());
          } else {
            bk.holeCards = 7;
            bk.holeX = [0, 65, 51, 37, 23, 9, -5, -19];
            bk.holeY = [0, 40, 40, 45, 45, 45, 45, 40];
            bk.outNextBlindShow(false);
            if (bk.button1.command == "Wait") {
              bk.button1.show(false);
            }
          }
        }
      }
    }
    bm = bk.seats;
    for (bi = 1; bi <= bm; bi++) {
      for (g = 1; g <= 7; g++) {
        if (!bk.card[g][bi]) {
          continue;
        }
        if (bk.holeCards == 7 && g > 2 && g < 7) {
          bj = 45;
        } else {
          bj = 40;
        }
        bk.card[g][bi].hclip = bj;
        bk.card[g][bi].selectable = bj == 40;
      }
    }
    if (bk.runTwice.isVisible()) {
      bk.runTwice.enable(bk.limit == "pot" || bk.limit == "no");
      for (bi = 1; bi <= bm; bi++) {
        bk.seat[bi].twiceIcon(bk.seat[bi].twice && bk.runTwice.isEnabled());
        bk.seat[bi].adjustSide();
      }
    }
    bk.$bannermiddle.text(U.lang.TableMessageMixed);
    setTimeout(function () {
      bk.$bannermiddle.text("");
    }, 3000);
  };
  an.prototype.changeImage = function (bg) {
    var g;
    g = this;
    g.$content.css({
      background: "url('Image?Name=" + bg + "') 0px 0px/100% 100% no-repeat",
    });
  };
  an.prototype.chatFocus = function () {
    var g, bg;
    g = this;
    bg = g.infoDialog;
    if (bg.controls.chatInfoMove.isChecked()) {
      bg.controls.chatInfoEdit.setFocus();
    } else {
      g.chatEdit.setFocus();
    }
  };
  an.prototype.chatSend = function () {
    var bg, g, bh;
    bg = this;
    g = $.trim(bg.chatEdit.getText());
    if (g == "") {
      return;
    }
    if (U.loggedIn == false) {
      bg.messageShow(U.lang.MessageChatLogin);
      return;
    }
    if (bg.suspendChat == true) {
      bg.messageShow(U.lang.InfoSuspendChat);
      return;
    }
    bh = {
      Response: "Chat",
    };
    bh.Table = bg.id;
    bh.Type = bg.type;
    bh.Text = g;
    j(bh);
    bg.chatEdit.setText("");
  };
  an.prototype.chatInfoSend = function () {
    var bh, bj, g, bi, bg;
    bh = this;
    bj = bh.infoDialog;
    bg = U.mobile ? bh.mobileChat.controls.input : bj.controls.chatInfoEdit;
    if (U.mobile) {
      bh.mobileChat.close();
    }
    g = $.trim(bg.getText());
    if (g == "") {
      return;
    }
    if (U.loggedIn == false) {
      bh.messageShow(U.lang.MessageChatLogin);
      return;
    }
    if (bh.suspendChat == true) {
      bh.messageShow(U.lang.InfoSuspendChat);
      return;
    }
    if (!U.mobile && bj.controls.chatInfoMove.isChecked() == false) {
      bj.controls.chatInfoMove.setCheck(true);
      bh.moveChat();
    }
    bi = {
      Response: "Chat",
    };
    bi.Table = bh.id;
    bi.Type = bh.type;
    bi.Text = g;
    j(bi);
    bg.setText("");
  };
  an.prototype.chatMobileCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $(".mobilechat")
      .clone()
      .removeClass("mobilechat")
      .appendTo(U.lobby.$openTableBox);
    bh = new Y(g, bg, {
      title: U.lang.TableButtonChat + " - " + bg.id,
    });
    bh.controls.input = new ax($(".mc_input", g), {
      border: true,
      onEnterKey: function () {
        bg.chatInfoSend();
      },
    });
    new A($(".mc_ok", g), U.lang.DialogOK, 20, function () {
      bg.chatInfoSend();
    });
    new A($(".mc_cancel", g), U.lang.DialogCancel, 20, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.mobileChat = bh;
  };
  an.prototype.chatMobileShow = function () {
    var g, bg;
    g = this;
    bg = g.mobileChat;
    bg.controls.input.setText("");
    bg.show(true, true);
    bg.controls.input.setFocus();
  };
  an.prototype.chatStatsHintOn = function (g, bl) {
    var bi, bk, bj, bh, bg;
    bi = this;
    if (bi.$chatStatsIconHint.html() == "") {
      return;
    }
    bh = bi.dialog.scaleX;
    bg = bi.dialog.scaleY;
    bk = (g - bi.$chatStatsIconHint.parent().offset().left) / bh;
    bj = (bl + 20 - bi.$chatStatsIconHint.parent().offset().top) / bg;
    bi.$chatStatsIconHint
      .css({
        left: bk,
        top: bj,
      })
      .show()
      .redraw();
  };
  an.prototype.chatStatsIconSetup = function () {
    var bh, bg, g, bi;
    bh = this;
    bh.$chatStatsIcon = $(".chatstatsicon", bh.$content);
    bh.$chatStatsIconHint = $("<div>")
      .appendTo(bh.$content)
      .addClass("tooltip")
      .hide();
    bh.statsMode = true;
    bh.toggleStats();
    bh.$chatStatsIcon.hover(
      function (bj) {
        bh.chatStatsHintOn(bj.pageX, bj.pageY);
      },
      function () {
        bh.$chatStatsIconHint.hide();
      }
    );
    bi = false;
    bh.$chatStatsIcon.on("touchstart mousedown", function (bj) {
      if (ai(bj)) {
        return;
      }
      if (bj.type == "touchstart") {
        bg = bj.originalEvent.touches[0];
        g = setTimeout(function () {
          bh.chatStatsHintOn(bg.pageX, bg.pageY);
        }, 500);
      }
      bi = true;
      bj.preventDefault();
    });
    bh.$chatStatsIcon.on("touchend mouseup", function (bj) {
      if (r(bj)) {
        return;
      }
      clearTimeout(g);
      if ((bh.$chatStatsIconHint.is(":hidden") || bj.type == "mouseup") && bi) {
        bh.toggleStats();
      }
      if (bj.type == "touchend") {
        bh.$chatStatsIconHint.hide();
      }
      bi = false;
      bj.preventDefault();
    });
  };
  an.prototype.chatUpdate = function () {
    var bl, bj, g, bh, bn, bm, bg, bi, bk;
    bl = this;
    bj = bl.infoDialog;
    g = bj.controls.chatInfoMove.isChecked();
    if (g) {
      bh = bj.controls.chatInfoText;
    } else {
      if (!U.mobile) {
        bh = bl.chatText;
      } else {
        if (U.tableCurrent != U.tables.indexOf(bl)) {
          return;
        }
        bh = U.lobby.chatInfoText;
      }
    }
    bk = U.pset.TableChatTime;
    bm = "";
    for (bg = 0; bg < bl.chatQueue.length; bg++) {
      bn = bl.chatQueue[bg];
      bm = bm + "<span>";
      if (g && bk) {
        bi = "[" + bn.time + "] ";
      } else {
        bi = "";
      }
      if (bn.player != "") {
        bm =
          bm +
          "<font color='" +
          bn.color1 +
          "'>" +
          bi +
          bn.title +
          bn.player +
          ":  </font><font color='" +
          bn.color2 +
          "'>" +
          bn.text +
          "</font>";
      }
      bm = bm + "</span><br>";
    }
    bh.setText(bm);
    bh.bottomScroll();
  };
  an.prototype.chopSeats = function (bg) {
    var bh, g;
    bh = this;
    for (g = 1; g <= bh.seats; g++) {
      bh.chop[g] = bg[g - 1] == "Yes";
      if (bh.seat[g].chop != bh.chop[g]) {
        bh.seat[g].chop = bh.chop[g];
        bh.seat[g].chopIcon(bh.chop[g]);
        bh.seat[g].adjustSide();
      }
    }
  };
  an.prototype.clearNextMoves = function () {
    var g = this;
    g.nextMove = "";
    g.nextCommand1 = "";
    g.nextCommand2 = "";
    g.nextCommand3 = "";
    g.nextCommand4 = "";
    g.$nextPanel.hide();
    g.nextMove1.show(false);
    g.nextMove2.show(false);
    g.nextMove3.show(false);
    g.nextMove4.show(false);
    g.nextMove1.setCheck(false);
    g.nextMove2.setCheck(false);
    g.nextMove3.setCheck(false);
    g.nextMove4.setCheck(false);
  };
  an.prototype.closeTable = function (bj) {
    var bi, bk, bg, bh, g;
    bi = this;
    if (bi.isMin) {
      U.minTray.remove(bi);
      bi.$dialog.show();
      bi.isMin = false;
    }
    clearInterval(bi.levelTimer);
    bi.buttonsOff();
    if (!bj) {
      bk = {
        Response: "CloseTable",
      };
      bk.Table = bi.id;
      bk.Type = bi.type;
      j(bk);
    }
    bi.infoClose();
    bi.replayDialog.close();
    while (bi.modalList.length > 1) {
      bi.modalList[bi.modalList.length - 1].close();
    }
    bg = U.tables.indexOf(bi);
    if (bg >= 0) {
      U.tables.splice(bg, 1);
    }
    bi.dialog.close();
    if (U.tables.length == 0) {
      U.lobby.$openTableBox.hide();
      U.lobby.$openTableControls.hide();
      U.lobby.mControlsUnhideBtn.show(false);
      if (!U.lobby.showMenu) {
        U.lobby.menuToggle(true);
      }
      U.lobby.lobbyTabs.$contents.eq(4).css({
        top: 40,
        left: 3,
        right: 3,
        bottom: 3,
      });
      $("#OpenBackground").show();
    }
    bh = U.lang.LobbyCaptionOpen + ": " + U.tables.length;
    U.lobby.lobbyTabs.setCaption(4, bh);
    U.lobby.lobbyOpenTables.$menu.text(bh);
    if (U.tableCurrent >= U.tables.length) {
      U.tableCurrent = U.tables.length - 1;
    }
    if (U.tableCurrent >= 0) {
      g = U.tables[U.tableCurrent];
      if (g.isMin == false) {
        g.bringToFront();
      }
    } else {
      if (U.mobile) {
        U.lobby.updateLobbyTitle();
      }
    }
  };
  an.prototype.collectBets = function (bg) {
    var br, g, bh, bq, bp, bk, bi, bj, bo, bm, bl;
    br = this;
    br.animating++;
    g = bg.Pot;
    bh = br.seats;
    bp = "";
    bk = 0;
    bi = 300;
    if (br.dialog == U.focused && U.soundOK) {
      av("pot");
    }
    for (bj = 1; bj <= bh; bj++) {
      bq = au(bg["Seat" + bj]);
      if (bq > 0) {
        bk++;
        bl = br.seatPosition(bj);
        bo = br.chipX[bh][bl];
        bm = br.chipY[bh][bl];
        br.potChips[g] = au(br.potChips[g]) + bq;
        bp = bp + (bj % 10).toString();
        br.stackChips(br.$bet[bj], bq);
        br.$bet[bj]
          .xytrans(0)
          .css({
            left: bo - br.chxOfs,
            top: bm - br.chyOfs,
          })
          .show()
          .redraw();
        br.$betLabel[bj]
          .text(B(bq))
          .xytrans(0)
          .css(br.betLabelCSS(bj))
          .show()
          .redraw();
        br.$bet[bj].xytrans(bi).css({
          left: br.potX[g] - br.chxOfs,
          top: br.potY[g] - br.chyOfs,
        });
        br.$betLabel[bj].xytrans(bi).css({
          left: br.potX[g] - br.chxOfs,
          top: br.potY[g] + br.chyOfs,
        });
      }
    }
    setTimeout(bn, bi + 25);

    function bn() {
      var bt, bu, bs;
      bt = bg.Pot;
      bu = br.potChips[bt];
      br.stackChips(br.$pot[bt], bu);
      br.potLabelSet(bt, bu);
      for (bs = 1; bs <= br.seats; bs++) {
        if (bp.indexOf(bs % 10) >= 0) {
          br.$bet[bs].hide();
          br.$betLabel[bs].hide();
        }
      }
      if (br.animating > 0) {
        br.animating--;
      }
      I(br);
    }
  };
  an.prototype.confirmFoldCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $(".yesno")
      .clone()
      .removeClass("yesno")
      .appendTo(U.mobile ? U.lobby.$openTableBox : U.$webClient);
    bh = new Y(g, bg, {
      title: bg.id,
    });
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.confirmFoldOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.confirmFold = bh;
  };
  an.prototype.confirmFoldOk = function () {
    var bg, bh, g;
    bg = this;
    bg.confirmFold.close();
    bh = "Fold";
    g = bg.getShowMask(true);
    bg.sendButton(bh, g);
    bg.buttonsOff();
  };
  an.prototype.confirmLeave = function (bi) {
    var bh, bg, g, bj;
    bh = this;
    bg = bh.getPlayerSeat();
    if (bg == 0) {
      bh.closeTable();
      return;
    }
    if (bi) {
      for (g = 1; g <= 7; g++) {
        bh.cardNum[g] = 0;
        bh.holeCard[g][bg] = 0;
        bh.card[g][bg].setCard(0);
      }
      bh.buttonsOff();
      bh.clearNextMoves();
      bh.ritInit = false;
      bj = {
        Response: "LeaveSeat",
      };
      bj.Table = bh.id;
      bj.Type = bh.type;
      j(bj);
      return;
    }
    if (bh.type == "R") {
      bh.closeTable();
    } else {
      bh.confirmLeaveDlg.showMessage(
        U.lang.MessageConfirmLeave,
        true,
        U.mobile
      );
    }
  };
  an.prototype.confirmLeaveCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $(".yesno")
      .clone()
      .removeClass("yesno")
      .appendTo(U.mobile ? U.lobby.$openTableBox : U.$webClient);
    bh = new Y(g, bg, {
      title: bg.id,
    });
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.closeTable();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.confirmLeaveDlg = bh;
  };
  an.prototype.confirmResignCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $(".yesno")
      .clone()
      .removeClass("yesno")
      .appendTo(U.mobile ? U.lobby.$openTableBox : U.$webClient);
    bh = new Y(g, bg, {
      title: bg.id,
    });
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bh.close();
      bg.resignTournament();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.confirmResignDlg = bh;
  };
  an.prototype.confirmResign = function () {
    var g = this;
    if (g.getPlayerSeat() > 0 && g.canResign) {
      g.confirmResignDlg.showMessage(
        U.lang.MessageConfirmResign,
        true,
        U.mobile
      );
    }
  };
  an.prototype.controlsCreate = function () {
    var g = this;
    g.$bannerleft = $(".bannerleft", g.$dialog);
    g.$bannerleft2 = $(".bannerleft2", g.$dialog);
    g.$bannermiddle = $(".bannermiddle", g.$dialog).css({
      color: g.oncolor,
      top: 192 + U.params.bannerOfs,
    });
    g.$bannerright = $(".bannerright", g.$dialog);
    if (g.type == "R") {
      g.$bannerright.text(g.buyin);
    }
    g.$bannerright2 = $(".bannerright2", g.$dialog);
    g.foldAnyBet = new E(
      $(".foldanybet", g.$dialog),
      U.lang.TableCaptionFoldAnyBet,
      function (bg) {
        g.foldAnyBetClick(bg);
      }
    ).show(false);
    g.outNextHand = new E(
      $(".outnexthand", g.$dialog),
      U.lang.TableCaptionAwayHand,
      function (bg) {
        g.outNextHandClick(bg);
      }
    ).show(false);
    g.outNextBlind = new E(
      $(".outnextblind", g.$dialog),
      U.lang.TableCaptionAwayBlind,
      function (bg) {
        g.outNextBlindClick(bg);
      }
    ).show(false);
    g.straddle = new E(
      $(".straddle", g.$dialog),
      U.lang.TableCaptionStraddle,
      function (bg) {
        g.straddleClick(bg);
      }
    ).show(false);
    g.icmChop = new E($(".icmchop", g.$dialog), "", function (bg) {
      g.icmChopClick(bg);
    }).show(false);
    g.runTwice = new E(
      $(".runtwice", g.$dialog),
      U.lang.TableCaptionRunTwice,
      function (bg) {
        g.runTwiceClick(bg);
      }
    ).show(false);
    g.runTwice.enable(g.limit == "pot" || g.limit == "no");
    g.$nextPanel = $(".nextPanel", g.$dialog).hide();
    g.nextMove1 = new E($(".nextmove1", g.$dialog), "", function (bg) {
      g.nextMove1Change(bg);
    }).show(false);
    g.nextMove2 = new E($(".nextmove2", g.$dialog), "", function (bg) {
      g.nextMove2Change(bg);
    }).show(false);
    g.nextMove3 = new E($(".nextmove3", g.$dialog), "", function (bg) {
      g.nextMove3Change(bg);
    }).show(false);
    g.nextMove4 = new E($(".nextmove4", g.$dialog), "", function (bg) {
      g.nextMove4Change(bg);
    }).show(false);
    g.$tablemessage = $(".tablemessage", g.$dialog);
    g.endBreak = new E($(".endbreak", g.$dialog), "", function (bg) {
      g.endBreakChange(bg);
    });
    g.endBreak.show(false);
    g.$raiseBox = $(".raisebox", g.$dialog)
      .hide()
      .css({
        "background-color": U.color.List,
        border: "1px outset " + U.color.List,
      });
    if (U.params.gradients) {
      g.$raiseBox.css("background-image", "url('Image?Name=Grad25')");
    }
    g.raiseInput = new ax($(".raiseinput", g.$raiseBox), {
      onEnterKey: function () {
        g.button3Click();
      },
      onKeyUp: function () {
        g.raiseInputChange();
      },
    });
    g.raiseInput.$input.css("border", "1px solid " + U.color.ButtonBorder);
    g.raiseSlider = new ao($(".raiseslider", g.$raiseBox), 0.01, function (bg) {
      g.raiseSliderChange(bg);
    });
    g.timeBankBtn = new A(
      $(".timebankbtn", g.$dialog),
      U.lang.TableButtonTime,
      25,
      function () {
        g.timeBankBtn.show(false);
        g.sendButton("Time", 0);
      }
    );
    g.timeBankBtn.show(false);
    g.button1 = new A($(".commandbtn1", g.$dialog), "", 30, function () {
      g.button1Click();
    });
    g.button1.show(false);
    g.button2 = new A($(".commandbtn2", g.$dialog), "", 30, function () {
      g.button2Click();
    });
    g.button2.show(false);
    g.button3 = new A($(".commandbtn3", g.$dialog), "", 30, function () {
      g.button3Click();
    });
    g.button3.show(false);
    g.button4 = new A($(".commandbtn4", g.$dialog), "", 30, function () {
      g.button4Click();
    });
    g.button4.show(false);
    g.betButton1 = new A($(".betbtn1", g.$dialog), "", 20, function () {
      g.betButtonClick(1);
    });
    g.betButton1.show(false);
    g.betButton2 = new A($(".betbtn2", g.$dialog), "", 20, function () {
      g.betButtonClick(2);
    });
    g.betButton2.show(false);
    g.betButton3 = new A($(".betbtn3", g.$dialog), "", 20, function () {
      g.betButtonClick(3);
    });
    g.betButton3.show(false);
    g.betButton4 = new A($(".betbtn4", g.$dialog), "", 20, function () {
      g.betButtonClick(4);
    });
    g.betButton4.show(false);
  };
  an.prototype.createDialogs = function () {
    var g = this;
    g.addRingChipsCreate();
    g.addTourneyChipsCreate();
    g.buyInRingChipsCreate();
    g.chatMobileCreate();
    g.confirmFoldCreate();
    g.confirmLeaveCreate();
    g.confirmResignCreate();
    g.controlsCreate();
    g.mixedChoiceCreate();
    g.getPasswordCreate();
    g.infoInit();
    g.initCoordinates();
    g.leaveCreate();
    g.playerInfoCreate();
    g.replayCreate();
    g.rotateSeatsCreate();
    g.rules6HoldemCreate();
    g.tourneyChopCreate();
    ak(g, true);
    u(g, true);
  };
  an.prototype.dealCards = function (bi) {
    var bt, bp, bs, bq, bg, bl, bj, bn, bv;
    bt = this;
    bt.ghosted = false;
    bt.animating++;
    if (bt.game == "omaha") {
      bv = 4;
    } else {
      if (bt.game == "omaha5") {
        bv = 5;
      } else {
        if (bt.game == "omaha6") {
          bv = 6;
        } else {
          bv = 2;
        }
      }
    }
    bp = bt.seats;
    bl = 350 - bt.cxOfs;
    bj = 5;
    bt.isFaceDown = U.pset.DealFaceDown;
    bs = bt.getPlayerSeat();
    if (bs > 0) {
      for (bq = 1; bq <= bt.holeCards; bq++) {
        if (bt.holeCards != 7 || bq < 3 || bq == 7) {
          bt.card[bq][bs].select(false);
        }
      }
    }
    for (bs = 1; bs <= bp; bs++) {
      bt.seat[bs].$cardbox.hide();
      for (bq = 1; bq <= bt.holeCards; bq++) {
        bt.card[bq][bs]
          .setCard(53)
          .shade(false)
          .moveTo(0, bl, bj)
          .clip(false)
          .show(false);
      }
    }
    bg = 250;
    if (bt.dialog == U.focused && U.soundOK) {
      av("card");
    }
    for (bs = 1; bs <= bp; bs++) {
      if (bi.indexOf(bs % 10) < 0) {
        continue;
      }
      bn = bt.seatPosition(bs);
      bl = bt.seatX[bp][bn] - bt.holeX[1];
      bj = bt.seatY[bp][bn] - bt.holeY[1];
      bt.card[1][bs].show(true).redraw().moveTo(bg, bl, bj);
    }
    setTimeout(bu, bg + 100);

    function bu() {
      if (bt.dialog == U.focused && U.soundOK) {
        av("card");
      }
      for (bs = 1; bs <= bp; bs++) {
        if (bi.indexOf(bs % 10) < 0) {
          continue;
        }
        bn = bt.seatPosition(bs);
        bl = bt.seatX[bp][bn] - bt.holeX[2];
        bj = bt.seatY[bp][bn] - bt.holeY[2];
        bt.card[1][bs].clip(true);
        bt.card[2][bs].show(true).redraw().moveTo(bg, bl, bj);
      }
      if (bv > 2) {
        setTimeout(bw, bg + 100);
      } else {
        setTimeout(bo, bg + 100);
      }
    }

    function bw() {
      if (bt.dialog == U.focused && U.soundOK) {
        av("card");
      }
      for (bs = 1; bs <= bp; bs++) {
        if (bi.indexOf(bs % 10) < 0) {
          continue;
        }
        bn = bt.seatPosition(bs);
        bl = bt.seatX[bp][bn] - bt.holeX[3];
        bj = bt.seatY[bp][bn] - bt.holeY[3];
        bt.card[2][bs].clip(true);
        bt.card[3][bs].show(true).redraw().moveTo(bg, bl, bj);
      }
      setTimeout(bk, bg + 100);
    }

    function bk() {
      if (bt.dialog == U.focused && U.soundOK) {
        av("card");
      }
      for (bs = 1; bs <= bp; bs++) {
        if (bi.indexOf(bs % 10) < 0) {
          continue;
        }
        bn = bt.seatPosition(bs);
        bl = bt.seatX[bp][bn] - bt.holeX[4];
        bj = bt.seatY[bp][bn] - bt.holeY[4];
        bt.card[3][bs].clip(true);
        bt.card[4][bs].show(true).redraw().moveTo(bg, bl, bj);
      }
      if (bv > 4) {
        setTimeout(g, bg + 100);
      } else {
        setTimeout(bo, bg + 100);
      }
    }

    function g() {
      if (bt.dialog == U.focused && U.soundOK) {
        av("card");
      }
      for (bs = 1; bs <= bp; bs++) {
        if (bi.indexOf(bs % 10) < 0) {
          continue;
        }
        bn = bt.seatPosition(bs);
        bl = bt.seatX[bp][bn] - bt.holeX[5];
        bj = bt.seatY[bp][bn] - bt.holeY[5];
        bt.card[4][bs].clip(true);
        bt.card[5][bs].show(true).redraw().moveTo(bg, bl, bj);
      }
      if (bv == 6) {
        setTimeout(br, bg + 100);
      } else {
        setTimeout(bo, bg + 100);
      }
    }

    function br() {
      if (bt.dialog == U.focused && U.soundOK) {
        av("card");
      }
      for (bs = 1; bs <= bp; bs++) {
        if (bi.indexOf(bs % 10) < 0) {
          continue;
        }
        bn = bt.seatPosition(bs);
        bl = bt.seatX[bp][bn] - bt.holeX[6];
        bj = bt.seatY[bp][bn] - bt.holeY[6];
        bt.card[5][bs].clip(true);
        bt.card[6][bs].show(true).redraw().moveTo(bg, bl, bj);
      }
      setTimeout(bo, bg + 100);
    }

    function bm() {
      for (bs = 1; bs <= bp; bs++) {
        if (bi.indexOf(bs % 10) < 0) {
          continue;
        }
        bt.card[bv][bs].clip(true);
      }
    }

    function bh() {
      bs = bt.getPlayerSeat();
      if (bs == 0 || bi.indexOf(bs % 10) < 0) {
        return;
      }
      bn = bt.seatPosition(bs);
      for (bq = 1; bq <= bv; bq++) {
        bl = bt.seatX[bp][bn] - bt.holeX[bq];
        bj = bt.seatY[bp][bn] - bt.holeY[bq];
        bt.card[bq][bs].moveTo(0, bl, bj).redraw();
      }
    }

    function bo() {
      bm();
      bh();
      bt.showHoleCards();
      bt.updateHandHelper();
      if (bt.animating > 0) {
        bt.animating--;
      }
      I(bt);
    }
  };
  an.prototype.dealFlop = function (g, bj) {
    var bi, bl, bh, bk;
    bi = this;
    bi.animating++;
    bl = 250;
    bk = g == 1 ? 4 : 0;
    if (bi.dialog == U.focused && U.soundOK) {
      av("card");
    }
    for (bh = 1; bh <= 3; bh++) {
      if (bh == 1 && bj) {
        continue;
      }
      if (g == 2) {
        bi.board2[bh].setCard(53).shade(false);
        bi.board2[bh]
          .moveTo(0, 350 - bi.cxOfs, 5)
          .show(true)
          .redraw();
        bi.board2[bh].moveTo(
          bl,
          bi.boardX[bh] - bi.cxOfs,
          bi.board2Y - bi.cyOfs
        );
      } else {
        bi.board[bh].setCard(53).shade(false);
        bi.board[bh]
          .moveTo(0, 350 - bi.cxOfs, 5)
          .show(true)
          .redraw();
        bi.board[bh].moveTo(
          bl,
          bi.boardX[bh] - bi.cxOfs,
          bi.boardY - bi.cyOfs - bk
        );
      }
    }
    setTimeout(bg, bl + 100);

    function bg() {
      var bm;
      for (bm = 1; bm <= 3; bm++) {
        if (bm == 1 && bj) {
          continue;
        }
        if (g == 2) {
          bi.board2[bm]
            .moveTo(0, bi.boardX[bm] - bi.cxOfs, bi.board2Y - bi.cyOfs)
            .redraw();
          bi.board2[bm].setCard(bi.boardCard2[bm]);
        } else {
          bi.board[bm]
            .moveTo(0, bi.boardX[bm] - bi.cxOfs, bi.boardY - bi.cyOfs - bk)
            .redraw();
          bi.board[bm].setCard(bi.boardCard[bm]);
        }
      }
      bi.updateHandHelper();
      if (bi.animating > 0) {
        bi.animating--;
      }
      I(bi);
    }
  };
  an.prototype.dealPreFlop = function () {
    var bg, bh;
    bg = this;
    bg.animating++;
    bh = 250;
    if (bg.dialog == U.focused && U.soundOK) {
      av("card");
    }
    bg.board[1].setCard(53).shade(false);
    bg.board[1]
      .moveTo(0, 350 - bg.cxOfs, 5)
      .show(true)
      .redraw();
    bg.board[1].moveTo(bh, bg.boardX[1] - bg.cxOfs, bg.boardY - bg.cyOfs);
    setTimeout(g, bh + 100);

    function g() {
      bg.board[1]
        .moveTo(0, bg.boardX[1] - bg.cxOfs, bg.boardY - bg.cyOfs)
        .redraw();
      bg.board[1].setCard(bg.boardCard[1]);
      bg.updateHandHelper();
      if (bg.animating > 0) {
        bg.animating--;
      }
      I(bg);
    }
  };
  an.prototype.dealRiver = function (g) {
    var bh, bk, bj, bi;
    bh = this;
    bh.animating++;
    bk = 250;
    bi = g == 1 ? 4 : 0;
    if (bh.dialog == U.focused && U.soundOK) {
      av("card");
    }
    if (bh.holeCards == 7) {
      bj = 3;
    } else {
      bj = 5;
    }
    if (g == 2) {
      bh.board2[5].setCard(53).shade(false);
      bh.board2[5]
        .moveTo(0, 350 - bh.cxOfs, 5)
        .show(true)
        .redraw();
      bh.board2[5].moveTo(bk, bh.boardX[bj] - bh.cxOfs, bh.board2Y - bh.cyOfs);
    } else {
      bh.board[5].setCard(53).shade(false);
      bh.board[5]
        .moveTo(0, 350 - bh.cxOfs, 5)
        .show(true)
        .redraw();
      bh.board[5].moveTo(
        bk,
        bh.boardX[bj] - bh.cxOfs,
        bh.boardY - bh.cyOfs - bi
      );
    }
    setTimeout(bg, bk + 100);

    function bg() {
      if (g == 2) {
        bh.board2[5]
          .moveTo(0, bh.boardX[bj] - bh.cxOfs, bh.board2Y - bh.cyOfs)
          .redraw();
        bh.board2[5].setCard(bh.boardCard2[5]);
      } else {
        bh.board[5]
          .moveTo(0, bh.boardX[bj] - bh.cxOfs, bh.boardY - bh.cyOfs - bi)
          .redraw();
        bh.board[5].setCard(bh.boardCard[5]);
      }
      bh.updateHandHelper();
      if (bh.animating > 0) {
        bh.animating--;
      }
      I(bh);
    }
  };
  an.prototype.dealStreet = function (bh, g) {
    var bo, bj, bk, bn, bl, bi, bg;
    bo = this;
    bo.animating++;
    bk = bo.getPlayerSeat();
    if (bk > 0 && bh < 7) {
      bo.cardNum[bh] = g[bk];
    }
    bi = bo.seats;
    bn = 350 - bo.cxOfs;
    bl = 5;
    for (bk = 1; bk <= bi; bk++) {
      if (g[bk] != 0) {
        bo.card[bh][bk]
          .setCard(53)
          .shade(false)
          .moveTo(0, bn, bl)
          .clip(false)
          .show(false);
      }
    }
    bj = 250;
    if (bo.dialog == U.focused && U.soundOK) {
      av("card");
    }
    for (bk = 1; bk <= bi; bk++) {
      if (g[bk] != 0) {
        bg = bo.seatPosition(bk);
        bn = bo.seatX[bi][bg] - bo.holeX[bh];
        bl = bo.seatY[bi][bg] - bo.holeY[bh];
        bo.card[bh][bk].show(true).redraw().moveTo(bj, bn, bl);
      }
    }
    setTimeout(bm, bj + 100);

    function bm() {
      for (bk = 1; bk <= bi; bk++) {
        if (g[bk] != 0) {
          bg = bo.seatPosition(bk);
          bn = bo.seatX[bi][bg] - bo.holeX[bh];
          bl = bo.seatY[bi][bg] - bo.holeY[bh];
          bo.card[bh][bk].setCard(g[bk]).moveTo(0, bn, bl).clip(true).redraw();
        }
      }
      if (bh == 7 && !bo.isFaceDown) {
        bo.showHoleCards();
      }
      bo.updateHandHelper();
      if (bo.animating > 0) {
        bo.animating--;
      }
      I(bo);
    }
  };
  an.prototype.dealTurn = function (g) {
    var bh, bj, bi;
    bh = this;
    bh.animating++;
    bj = 250;
    bi = g == 1 ? 4 : 0;
    if (bh.dialog == U.focused && U.soundOK) {
      av("card");
    }
    if (g == 2) {
      bh.board2[4].setCard(53).shade(false);
      bh.board2[4]
        .moveTo(0, 350 - bh.cxOfs, 5)
        .show(true)
        .redraw();
      bh.board2[4].moveTo(bj, bh.boardX[4] - bh.cxOfs, bh.board2Y - bh.cyOfs);
    } else {
      bh.board[4].setCard(53).shade(false);
      bh.board[4]
        .moveTo(0, 350 - bh.cxOfs, 5)
        .show(true)
        .redraw();
      bh.board[4].moveTo(
        bj,
        bh.boardX[4] - bh.cxOfs,
        bh.boardY - bh.cyOfs - bi
      );
    }
    setTimeout(bg, bj + 100);

    function bg() {
      if (g == 2) {
        bh.board2[4]
          .moveTo(0, bh.boardX[4] - bh.cxOfs, bh.board2Y - bh.cyOfs)
          .redraw();
        bh.board2[4].setCard(bh.boardCard2[4]);
      } else {
        bh.board[4]
          .moveTo(0, bh.boardX[4] - bh.cxOfs, bh.boardY - bh.cyOfs - bi)
          .redraw();
        bh.board[4].setCard(bh.boardCard[4]);
      }
      bh.updateHandHelper();
      if (bh.animating > 0) {
        bh.animating--;
      }
      I(bh);
    }
  };
  an.prototype.deckChange = function () {
    var bh, bg, g;
    bh = this;
    for (bg = 1; bg <= 5; bg++) {
      bh.board[bg].setDeck();
      bh.board2[bg].setDeck();
    }
    for (bg = 1; bg <= bh.seats; bg++) {
      for (g = 1; g <= bh.holeCards; g++) {
        bh.card[g][bg].setDeck();
      }
    }
  };
  an.prototype.defaultWindowSize = function () {
    var g = this;
    g.$dialog.width(706);
    g.resizeTable();
    g.resizeFinish();
  };
  an.prototype.drawTable = function () {
    var bt, bh, bm, bk, bp, bl, bj, bi, bs, bo, bg, br, bq, g, bn;
    bt = this;
    bh = bt.seats;
    if (bh == 0) {
      return;
    }
    if (bt.graphicsMade == false) {
      bt.makeGraphics();
    }
    if (bt.runTwice.isVisible()) {
      bt.runTwice.enable(bt.limit == "pot" || bt.limit == "no");
    }
    bo = false;
    for (bm = 1; bm <= 5; bm++) {
      bl = au(bt.boardCard[bm]);
      bt.board[bm].setCard(bl);
      bj = au(bt.boardCard2[bm]);
      bt.board2[bm].setCard(bj);
      if (bl != 0) {
        if (bj == 0 || bl == bj) {
          g = 0;
        } else {
          g = 4;
        }
        bt.board[bm]
          .moveTo(0, bt.boardX[bm] - bt.cxOfs, bt.boardY - bt.cyOfs - g)
          .show(true);
      }
      if (bj != 0 && bl != bj) {
        bt.board2[bm]
          .moveTo(0, bt.boardX[bm] - bt.cxOfs, bt.board2Y - bt.cyOfs)
          .show(true);
      }
    }
    for (bm = 1; bm < bh; bm++) {
      bp = au(bt.potChips[bm]);
      if (bp > 0) {
        bt.stackChips(bt.$pot[bm], bp);
        bt.potLabelSet(bm, bp);
      } else {
        bt.$pot[bm].hide();
        bt.$potLabel[bm].hide();
      }
    }
    bt.$dealer.hide();
    for (bm = 1; bm <= bh; bm++) {
      bg = bt.seatPosition(bm);
      for (bk = 1; bk <= bt.holeCards; bk++) {
        bt.card[bk][bm].show(false);
      }
      bt.seat[bm].clear();
      bt.$bet[bm].hide();
      bt.$betLabel[bm].hide();
      if (bt.dealer == bm) {
        br = bt.dealerX[bh][bg];
        bq = bt.dealerY[bh][bg];
        bt.$dealer.css({
          left: br - bt.dxOfs,
          top: bq - bt.dyOfs,
        });
        if (bt.holeCards < 7) {
          bt.$dealer.css("opacity", 1).show();
        } else {
          if (bt.mix.indexOf("h") > -1 || bt.mix.indexOf("o") > -1) {
            bt.$dealer.css("opacity", 0.35).show();
          }
        }
      }
      bt.seat[bm].setNoteColor("", 0);
      bi = aq(bt.playerName[bm]);
      if (bi != "") {
        bn = bi == bt.player;
        bs = bt.playerAvatar[bm];
        if (bs == 0) {
          bt.seat[bm].avatarSetCustom(
            bt.playerName[bm],
            bt.playerAvatarCrc[bm]
          );
        } else {
          bt.seat[bm].avatarSet(bs);
        }
        bt.seat[bm].chatBlockIcon(J(bi));
        bk = U.lobby.noteList.controls.noteGrid.getRow(bi, "player");
        if (bk >= 0) {
          bt.seat[bm].setNoteColor(
            U.data.Notes.rows[bk].noteText,
            U.data.Notes.rows[bk].colorNum
          );
        }
        for (bk = 1; bk <= bt.holeCards; bk++) {
          bp = bt.holeCard[bk][bm];
          bt.card[bk][bm].setCard(bp);
          if (bp != 0 && (!bt.ghosted || !bn)) {
            bt.card[bk][bm].show(true);
          }
        }
        if (bn) {
          bt.isFaceDown = bt.holeCard[1][bm] == 53;
          bt.updateHandHelper();
          bo = true;
        }
        bt.seat[bm].setGlow(bt.turn == bm);
        bt.seat[bm].special = bt.special == bm;
        bt.seat[bm].chop = bt.chop[bm];
        bt.seat[bm].chopIcon(bt.chop[bm]);
        bt.seat[bm].twice = bt.twice[bm];
        bt.seat[bm].twiceIcon(bt.twice[bm] && bt.runTwice.isEnabled());
        bt.seat[bm].setName(bi);
        if (bt.playerAction[bm] == "") {
          bt.seat[bm].setInfo(B(bt.playerChips[bm]));
        } else {
          bt.seat[bm].setInfo(bt.playerAction[bm]);
        }
        bp = bt.playerBet[bm];
        if (bp > 0) {
          br = bt.chipX[bh][bg];
          bq = bt.chipY[bh][bg];
          bt.$bet[bm].css({
            left: br - bt.chxOfs,
            top: bq - bt.chyOfs,
          });
          bt.stackChips(bt.$bet[bm], bp);
          bt.$betLabel[bm].text(B(bp)).css(bt.betLabelCSS(bm)).show();
        }
      }
      bt.setHint(bm);
    }
    bt.updateTotal();
    bt.straddleShow(bt.sutg && bo);
    bt.straddleUpdate();
    bt.runTwice.show(bt.rit && bo);
    if (bt.runTwice.isVisible()) {
      if (!bt.ritInit) {
        if (U.pset.RunItTwice) {
          bt.runTwice.setCheck(true);
          bt.runTwiceClick(true);
        }
        bt.ritInit = true;
      }
    } else {
      bt.runTwice.setCheck(false);
    }
    bt.$closeBtn.toggle(!bo);
    bt.preferredSeatRotate();
  };
  an.prototype.endBreakChange = function (bg) {
    var g, bh;
    g = this;
    bh = {
      Response: "EndBreakRequest",
    };
    bh.Table = g.id;
    bh.Type = g.type;
    if (bg) {
      bh.Checked = "Yes";
    } else {
      bh.Checked = "No";
    }
    j(bh);
  };
  an.prototype.endBreakUpdate = function (g) {
    var bg = this;
    if (g == "") {
      bg.endBreak.setCheck(false);
      bg.endBreak.show(false);
    } else {
      bg.endBreak.setCaption(g);
      bg.endBreak.show(true);
      bg.endBreak.enable(bg.getPlayerSeat() > 0);
    }
  };
  an.prototype.foldAnyBetCheck = function (g) {
    this.foldAnyBet.setCheck(g);
  };
  an.prototype.foldAnyBetClick = function (bg) {
    var g = this;
    g.foldAnyBetCheck(bg);
    if (U.hasTouch == false) {
      g.chatFocus();
    }
    if (bg) {
      g.$nextPanel.hide();
      g.nextMove1.setCheck(false);
      g.nextMove2.setCheck(false);
      g.nextMove3.setCheck(false);
      g.nextMove4.setCheck(false);
      g.nextMove = "";
      if (g.button2.command == "Check") {
        g.button2Click();
      } else {
        if (g.button1.command == "Fold") {
          g.button1Click();
        }
      }
    }
  };
  an.prototype.foldAnyBetShow = function (g) {
    this.foldAnyBet.show(g);
  };
  an.prototype.getPasswordCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $(".tablepassword")
      .clone()
      .removeClass("tablepassword")
      .appendTo(U.mobile ? U.lobby.$openTableBox : U.$webClient);
    bh = new Y(g, bg, {
      title: U.lang.PasswordTitle,
    });
    bh.controls.getPasswordInput = new ax($(".tp_input", g), {
      onEnterKey: function () {
        bg.getPasswordOk();
      },
      border: true,
    });
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      bg.getPasswordOk();
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.getPassword = bh;
  };
  an.prototype.getPasswordOk = function () {
    var bg, g, bj, bh, bi;
    bg = this;
    bi = bg.getPassword;
    bi.close();
    g = bi.controls.getPasswordInput.getText();
    bj = bi.data.seat;
    U.passwords["R" + bg.id] = g;
    bh = {
      Response: "RequestSeat",
    };
    bh.Table = bg.id;
    bh.Type = "R";
    bh.Seat = bj;
    bh.Password = g;
    j(bh);
  };
  an.prototype.getPasswordShow = function (bi) {
    var bg, g, bh;
    bg = this;
    bh = bg.getPassword;
    bh.data.seat = bi;
    bh.show(true, U.mobile);
    g = U.lang.PasswordPrompt.split("%1%").join(bg.id);
    $(".tp_label", bh.$dialog).text(g);
    bh.controls.getPasswordInput.setText("");
    if (U.hasTouch == false) {
      bh.controls.getPasswordInput.setFocus();
    }
  };
  an.prototype.getPlayerSeat = function () {
    var bg, g;
    bg = this;
    if (bg.player == "") {
      return 0;
    }
    for (g = 1; g <= bg.seats; g++) {
      if (bg.player == bg.playerName[g]) {
        return g;
      }
    }
    return 0;
  };
  an.prototype.getRebuy = function () {
    var bg = this,
      bh,
      g;
    if (bg.getPlayerSeat() == 0) {
      bg.messageShow(U.lang.MessageNotSeated);
      return;
    }
    if (bg.type == "R") {
      bg.addRingChipsShow();
    } else {
      g = a6(n(bg.rebuyfee), bg.primary);
      bh = U.lang.ChipsRebuy.split("%1%").join(g);
      bg.addTourneyChips.showMessage(bh, true, U.mobile);
    }
  };
  an.prototype.getShowMask = function (bg) {
    var bk, bi, g, bl, bj, bh;
    bk = this;
    g = "";
    bl = bk.getPlayerSeat();
    bj = false;
    bh = true;
    for (bi = 1; bi <= bk.holeCards; bi++) {
      if (!bk.card[bi][bl].isVisible()) {
        continue;
      }
      if (bk.holeCards == 7 && bi > 2 && bi < 7) {
        continue;
      }
      if (bk.card[bi][bl].isSelected()) {
        bh = false;
        break;
      }
    }
    if (bg && bh) {
      for (bi = 1; bi <= bk.holeCards; bi++) {
        if (!bk.card[bi][bl].isVisible()) {
          break;
        }
        g += "d";
      }
    } else {
      if (!bg & bh) {
        bj = true;
      }
      for (bi = 1; bi <= bk.holeCards; bi++) {
        if (!bk.card[bi][bl].isVisible()) {
          break;
        }
        g += bj || bk.card[bi][bl].isSelected() ? "u" : "d";
      }
    }
    return g;
  };
  an.prototype.ghostCards = function (g, bj) {
    var bh, bg, bi;
    bh = this;
    if (bh.getPlayerSeat() != bj || bh.cardNum[1] == 0 || !bh.ghosted) {
      return;
    }
    for (bg = 1; bg <= bh.holeCards; bg++) {
      bi = bh.card[bg][bj].cardNum;
      bh.card[bg][bj].shade(true).show(g && bi > 0 && bi < 53);
    }
  };
  an.prototype.guiChange = function () {
    var g;
    g = this;
    g.infoClose();
    g.replayDialog.close();
    while (g.modalList.length > 1) {
      g.modalList[g.modalList.length - 1].close();
    }
    if (U.mobile) {
      g.vertChrome = 6;
      g.$dialog.appendTo(U.lobby.$openTableBox).css({
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        borderRadius: 0,
        boxShadow: "none",
      });
      $(".tablecontent", g.$dialog).css("top", 3);
    } else {
      g.vertChrome = 63;
      g.$dialog.appendTo(U.$webClient).css({
        left: U.winOfsX,
        top: U.winOfsY,
        width: 706,
        height: 573,
        borderRadius: "10px 10px 0px 0px",
        boxShadow: "3px 3px 10px 0px #404040",
      });
      y();
      $(".tablecontent", g.$dialog).css("top", 60);
    }
    $(".header", g.$dialog).toggle(!U.mobile);
    $(".menu", g.$dialog).toggle(!U.mobile);
    $(".resize", g.$dialog).toggle(!U.mobile);
    g.showChat(!U.mobile);
    g.chatUpdate();
    g.infoUpdate();
    g.statsUpdate();
    g.historyUpdate();
    g.setTitle(a7(g.id, g.type, g.sng));
    g.headerCaption(g.headerText);
    g.resizeTable();
    g.resizeFinish();
    g.bringToFront();
    g.addRingChips.$dialog.appendTo(
      U.mobile ? U.lobby.$openTableBox : U.$webClient
    );
    g.addTourneyChips.$dialog.appendTo(
      U.mobile ? U.lobby.$openTableBox : U.$webClient
    );
    g.buyInRingChips.$dialog.appendTo(
      U.mobile ? U.lobby.$openTableBox : U.$webClient
    );
    g.confirmFold.$dialog.appendTo(
      U.mobile ? U.lobby.$openTableBox : U.$webClient
    );
    g.confirmLeaveDlg.$dialog.appendTo(
      U.mobile ? U.lobby.$openTableBox : U.$webClient
    );
    g.confirmResignDlg.$dialog.appendTo(
      U.mobile ? U.lobby.$openTableBox : U.$webClient
    );
    g.leaveDlg.$dialog.appendTo(
      U.mobile ? U.lobby.$openTableBox : U.$webClient
    );
    g.getPassword.$dialog.appendTo(
      U.mobile ? U.lobby.$openTableBox : U.$webClient
    );
    g.infoDialog.$dialog.appendTo(
      U.mobile ? U.lobby.$openTableBox : U.$webClient
    );
    g.playerInfo.$dialog.appendTo(
      U.mobile ? U.lobby.$openTableBox : U.$webClient
    );
    g.rotateDialog.$dialog.appendTo(
      U.mobile ? U.lobby.$openTableBox : U.$webClient
    );
    g.colorLabel.$dialog.appendTo(
      U.mobile ? U.lobby.$openTableBox : U.$webClient
    );
    g.playerNote.$dialog.appendTo(
      U.mobile ? U.lobby.$openTableBox : U.$webClient
    );
    g.tourneyChop.$dialog.appendTo(
      U.mobile ? U.lobby.$openTableBox : U.$webClient
    );
    g.replayDialog.$dialog.appendTo(
      U.mobile ? U.lobby.$openTableBox : U.$webClient
    );
  };
  an.prototype.headerCaption = function (g) {
    var bg = this;
    bg.headerText = g;
    $(".infobar", bg.$dialog).html(g);
  };
  an.prototype.historyAdd = function (bh, bm) {
    var bo, bj, bi, bg, bk, bn, bl, g;
    bo = this;
    bj = bo.infoDialog;
    bl = bj.controls.historyInfo;
    g = bj.controls.historySlider;
    bi = bo.hhNumbers.length;
    bn = g.getValue();
    bk = bn * (bi - 1);
    if (bi <= 1 || bn == 1) {
      bl.addTextLine(bm, 0);
      if (U.mobile && U.tableCurrent == U.tables.indexOf(bo)) {
        U.lobby.historyInfo.addTextLine(bm, 0);
      }
    }
    if (bi > 0 && bo.hhNumbers[bi - 1] == bh) {
      bo.hhData[bi - 1] += bm + "<br>";
    } else {
      bo.hhNumbers[bi] = bh;
      bo.hhData[bi] = bm + "<br>";
      bg = bo.hhNumbers.length - 1;
      if (bg == 0) {
        bg = 1;
      }
      g.increment = 1 / bg;
      if (bn == 1) {
        bo.historyChange(bn);
      } else {
        if (bk < 0 || bi < 1) {
          bn = 0;
          g.setValue(bn, false);
          bo.historyChange(bn);
        } else {
          bn = bk / bi;
          g.setValue(bn, false);
          bo.historyLabel(bn);
          bo.historyUpdate();
        }
      }
    }
  };
  an.prototype.historyChange = function (bi) {
    var bh, bj, bk, bg, g;
    bh = this;
    bj = bh.infoDialog;
    g = bj.controls.historyInfo;
    if (bh.hhNumbers.length == 0) {
      return;
    }
    bh.historyLabel(bi);
    bk = bh.hhNumbers.length;
    bg = Math.round(bi * (bk - 1));
    g.setText(bh.hhData[bg]);
    g.topScroll();
    bh.historyUpdate();
  };
  an.prototype.historyFirst = function () {
    var g, bg;
    g = this;
    bg = g.infoDialog;
    bg.controls.historySlider.setValue(0, true);
  };
  an.prototype.historyLabel = function (bi) {
    var bh, bj, bk, bg, g;
    bh = this;
    bj = bh.infoDialog;
    if (bh.hhNumbers.length == 0) {
      return;
    }
    bk = bh.hhNumbers.length;
    bg = Math.round(bi * (bk - 1));
    g = bg + 1;
    bj.controls.$historyNumber.text(
      bh.hhNumbers[bg] +
        "  (" +
        U.lang.InfoHistoryOf.split("%1%").join(g).split("%2%").join(bk) +
        ")"
    );
  };
  an.prototype.historyLast = function () {
    var g, bg;
    g = this;
    bg = g.infoDialog;
    bg.controls.historySlider.setValue(1, true);
  };
  an.prototype.historyNext = function () {
    var bh, bi, g, bg;
    bh = this;
    bi = bh.infoDialog;
    bg = bi.controls.historySlider;
    g = bg.getValue() + bg.increment;
    if (g > 1) {
      g = 1;
    }
    bg.setValue(g, true);
  };
  an.prototype.historyPrevious = function () {
    var bh, bi, g, bg;
    bh = this;
    bi = bh.infoDialog;
    bg = bi.controls.historySlider;
    g = bg.getValue() - bg.increment;
    if (g < 0) {
      g = 0;
    }
    bg.setValue(g, true);
  };
  an.prototype.historyUpdate = function () {
    var bi, bh, g, bg;
    bi = this;
    if (U.mobile && U.tableCurrent == U.tables.indexOf(bi)) {
      bh = bi.infoDialog.controls.$historyNumber.text();
      U.lobby.$historyNumber.text(bh);
      bg = bi.infoDialog.controls.historySlider.increment;
      U.lobby.historySlider.increment = bg;
      g = bi.infoDialog.controls.historySlider.getValue();
      U.lobby.historySlider.setValue(g, false);
      bh = bi.infoDialog.controls.historyInfo.getText();
      U.lobby.historyInfo.setText(bh);
      U.lobby.historyInfo.topScroll();
    }
  };
  an.prototype.icmChopClick = function (bg) {
    var g, bh;
    g = this;
    bh = {
      Response: "ICMChopRequest",
    };
    bh.Table = g.id;
    bh.Type = g.type;
    if (bg) {
      bh.Checked = "Yes";
    } else {
      bh.Checked = "No";
    }
    j(bh);
    if (U.hasTouch == false) {
      g.chatFocus();
    }
  };
  an.prototype.icmChopUpdate = function (g) {
    var bh, bg;
    bh = this;
    if (g == "") {
      bh.icmChop.setCheck(false);
      bh.icmChop.show(false);
    } else {
      bh.icmChop.setCaption(g);
      bh.icmChop.show(true);
      bg = bh.getPlayerSeat() > 0 && bh.outNextHand.isVisible();
      bh.icmChop.enable(bg);
      if (!bg && bh.icmChop.isChecked()) {
        bh.icmChop.setCheck(false);
        bh.icmChopClick(false);
      }
    }
  };
  an.prototype.iconMenuClick = function (g) {
    var bi, bj, bh, bg;
    bi = this;
    bj = false;
    g.on("touchstart mousedown", function (bk) {
      if (ai(bk)) {
        return;
      }
      if (bk.type == "touchstart") {
        bh = bk.originalEvent.touches[0];
        bg = setTimeout(function () {
          bi.iconMenuHintOn(g, bh.pageX, bh.pageY);
        }, 500);
      }
      bj = true;
      bk.preventDefault();
    });
    g.on("touchend mouseup", function (bk) {
      if (r(bk)) {
        return;
      }
      clearTimeout(bg);
      if ((bi.$menuIconHint.is(":hidden") || bk.type == "mouseup") && bj) {
        switch (g.data("index")) {
          case 1:
            bi.showInfo(0);
            break;
          case 2:
            bi.getRebuy();
            break;
          case 3:
            bi.refreshTable();
            break;
          case 4:
            bi.rotateSeatsShow(0);
            break;
          case 5:
            bi.replayShow();
            break;
          case 6:
            bi.defaultWindowSize();
            break;
          case 7:
            U.lobby.tableSettingsShow();
            break;
          case 8:
            bi.leaveShow();
            break;
        }
      }
      if (bk.type == "touchend") {
        bi.iconMenuHintOff(g);
      }
      bj = false;
      bk.preventDefault();
    });
  };
  an.prototype.iconMenuHintOff = function (g) {
    var bg = this;
    g.css("opacity", 0.5);
    bg.$menuIconHint.hide();
  };
  an.prototype.iconMenuHintOn = function (bg, g, bl) {
    var bh, bk, bj, bi;
    bh = this;
    bg.css("opacity", 1);
    bh.$menuIconHint.text(bg.data("hint"));
    bk = (g - bh.$content.offset().left) / bh.dialog.scaleX;
    bj = (bl + 30 - bh.$content.offset().top) / bh.dialog.scaleY;
    if (bg.data("index") < 8) {
      bi = 0;
    } else {
      bi = bh.$menuIconHint.width() + 10;
    }
    bh.$menuIconHint
      .css({
        left: bk - bi,
        top: bj,
      })
      .show()
      .redraw();
  };
  an.prototype.iconMenuSetup = function () {
    var bi, bk, g, bh, bj, bg;
    bi = this;
    $(".icontray", bi.$dialog).css({
      color: U.color.ButtonText,
      "background-color": U.color.Button,
    });
    bi.$menuIconHint = $("<div>")
      .appendTo(bi.$content)
      .addClass("tooltip")
      .hide();
    if (U.params.gradients) {
      $(".icontray", bi.$dialog).css(
        "background-image",
        "url('Image?Name=Grad30')"
      );
    }
    if (a1(U.color.Button) > 127) {
      bk = 0;
    } else {
      bk = 216;
    }
    bh = [
      "Lobby",
      "Chat",
      "Chips",
      "Refresh",
      "Rotate",
      "Replay",
      "Default",
      "Settings",
      "Leave",
    ];
    bj = [
      U.lang.LobbyMenuLobby,
      U.lang.TableMenuChatInfo,
      U.lang.TableMenuAddChips,
      U.lang.TableMenuRefresh,
      U.lang.TableMenuRotate,
      U.lang.TableMenuReplay,
      U.lang.TableMenuWindowSize,
      U.lang.TableMenuSettings,
      U.lang.TableMenuLeave,
    ];
    for (bg = 1; bg < 9; bg++) {
      g = $(".icon" + bh[bg], bi.$dialog);
      g.css(
        "background",
        "url('Image?Name=TableIcons&Crc=" +
          U.crc.image +
          "') " +
          (-24 * bg - bk) +
          "px 0px/auto 24px no-repeat"
      );
      g.css("opacity", 0.5);
      g.data("hint", bj[bg]);
      g.data("index", bg);
      g.hover(
        function (bl) {
          bi.iconMenuHintOn($(this), bl.pageX, bl.pageY);
        },
        function () {
          bi.iconMenuHintOff($(this));
        }
      );
      bi.iconMenuClick(g);
    }
  };
  an.prototype.infoClose = function () {
    var g, bg;
    g = this;
    bg = g.infoDialog;
    if (bg.controls.chatInfoMove.isChecked()) {
      bg.controls.chatInfoMove.setCheck(false);
      g.moveChat();
    }
    bg.close();
  };
  an.prototype.infoInit = function () {
    var bi, bg, bj, g, bh;
    bi = this;
    bg = $(".tableinfo")
      .clone()
      .removeClass("tableinfo")
      .appendTo(U.mobile ? U.lobby.$openTableBox : U.$webClient);
    bj = new Y(bg, bi, {
      title: U.lang.InfoTitle + " - " + bi.id,
      minwidth: 300,
      minheight: 250,
      resize: true,
      onresize: function () {
        bi.resizeInfo();
      },
    });
    $(".infopanel", bg).css("background-color", U.color.List);
    bj.controls.generalInfo = new x($(".generalinfo", bg), false);
    bj.controls.statsInfo = new x($(".statsinfo", bg), false);
    bj.controls.$historyNumber = $(".historynumber", bg);
    bj.controls.historySlider = new ao($(".historyslider", bg), 1, function (
      bk
    ) {
      bi.historyChange(bk);
    });
    bj.controls.historySlider.setValue(1, false);
    bj.controls.historyInfo = new x($(".historyinfo", bg), false);
    bj.controls.chatInfoText = new x($(".chatinfotext", bg), false);
    bj.controls.chatInfoMove = new E(
      $(".chatinfomove", bg),
      U.lang.InfoMoveChat,
      function () {
        bi.moveChat();
      }
    );
    new A($(".historyfirstbtn", bg), "|" + U.arrowL, 30, function () {
      bi.historyFirst();
    });
    new A($(".historyprevbtn", bg), U.arrowL, 30, function () {
      bi.historyPrevious();
    });
    new A($(".historynextbtn", bg), U.arrowR, 30, function () {
      bi.historyNext();
    });
    new A($(".historylastbtn", bg), U.arrowR + "|", 30, function () {
      bi.historyLast();
    });
    new A($(".ok", bg), U.lang.DialogOK, 25, function () {
      bi.infoClose();
    });
    new A($(".save", bg), U.lang.DialogSave, 25, function () {
      bi.infoSave();
    });
    bj.controls.chatInfoEdit = new ax($(".chatinfoedit", bg), {
      onEnterKey: function () {
        bi.chatInfoSend();
      },
    });
    new A($(".chatinfosendbtn", bg), "&#8595;", 25, function () {
      bi.chatInfoSend();
    }).$button.css("border-radius", "0px");
    $(".closebtn", bg).on("touchstart mousedown", function () {
      bi.infoClose();
      return false;
    });
    g = [
      U.lang.InfoChat,
      U.lang.InfoGeneral,
      U.lang.InfoStats,
      U.lang.InfoHistory,
    ];
    bh = [true, true, true, true];
    bj.controls.infoTabs = new ar($(".infotabs", bg), g, bh, function (bl, bk) {
      bi.selectInfoTab(bl, bk);
    });
    bi.infoDialog = bj;
  };
  an.prototype.infoSave = function () {
    var bh, bg, g, bj, bi;
    bh = this;
    bi = bh.infoDialog;
    switch (bi.controls.infoTabs.getTab()) {
      case 0:
        bj = bi.controls.chatInfoText.$memotext.clone();
        $("span", bj).each(function () {
          $(this).replaceWith($(this).text());
        });
        $("font", bj).each(function () {
          $(this).replaceWith($(this).text());
        });
        bg = ag(bj.html());
        P(bh.title, bg, false);
        break;
      case 1:
        P(bh.title, bi.controls.generalInfo.getText(), false);
        break;
      case 2:
        P(bh.title, bi.controls.statsInfo.getText(), false);
        break;
      case 3:
        bg = "";
        for (g = 0; g < bh.hhData.length; g++) {
          bg = bg + bh.hhData[g] + "<br><br>";
        }
        P(bh.title, bg, false);
        break;
    }
  };
  an.prototype.infoUpdate = function () {
    var bg, g;
    bg = this;
    if (U.mobile && U.tableCurrent == U.tables.indexOf(bg)) {
      g = bg.infoDialog.controls.generalInfo.getText();
      g = g
        .split("<pre>")
        .join("")
        .split("</pre>")
        .join("")
        .split("\n")
        .join("<br>");
      U.lobby.generalInfo.setText(g);
    }
  };
  an.prototype.initCoordinates = function () {
    var g = this;
    g.boardX = [0, 252, 301, 350, 399, 448];
    g.boardY = 210;
    g.board2Y = 242;
    g.chipX = [];
    g.chipX[2] = [0, 544, 156];
    g.chipX[3] = [0, 527, 350, 173];
    g.chipX[4] = [0, 527, 527, 173, 173];
    g.chipX[5] = [0, 527, 527, 350, 173, 173];
    g.chipX[6] = [0, 422, 544, 422, 278, 156, 278];
    g.chipX[7] = [0, 527, 544, 527, 350, 173, 156, 173];
    g.chipX[8] = [0, 422, 527, 527, 422, 278, 173, 173, 278];
    g.chipX[9] = [0, 422, 527, 544, 527, 350, 173, 156, 173, 278];
    g.chipX[10] = [0, 422, 527, 544, 527, 422, 278, 173, 156, 173, 278];
    g.chipY = [];
    g.chipY[2] = [0, 200, 200];
    g.chipY[3] = [0, 125, 285, 125];
    g.chipY[4] = [0, 125, 264, 264, 125];
    g.chipY[5] = [0, 125, 264, 285, 264, 125];
    g.chipY[6] = [0, 112, 200, 285, 285, 200, 112];
    g.chipY[7] = [0, 125, 200, 264, 285, 264, 200, 125];
    g.chipY[8] = [0, 112, 125, 264, 285, 285, 264, 125, 112];
    g.chipY[9] = [0, 112, 125, 200, 264, 285, 264, 200, 125, 112];
    g.chipY[10] = [0, 112, 125, 200, 264, 285, 285, 264, 200, 125, 112];
    g.chxOfs = 11;
    g.chyOfs = 9;
    g.cxOfs = 23;
    g.cyOfs = 32;
    g.dealerX = [];
    g.dealerX[2] = [0, 544, 156];
    g.dealerX[3] = [0, 527, 271, 173];
    g.dealerX[4] = [0, 527, 527, 173, 173];
    g.dealerX[5] = [0, 527, 527, 271, 173, 173];
    g.dealerX[6] = [0, 386, 544, 386, 314, 156, 314];
    g.dealerX[7] = [0, 527, 544, 527, 271, 173, 156, 173];
    g.dealerX[8] = [0, 386, 527, 527, 386, 314, 173, 173, 314];
    g.dealerX[9] = [0, 386, 527, 544, 527, 271, 173, 156, 173, 314];
    g.dealerX[10] = [0, 386, 527, 544, 527, 386, 314, 173, 156, 173, 314];
    g.dealerY = [];
    g.dealerY[2] = [0, 221, 221];
    g.dealerY[3] = [0, 146, 323, 146];
    g.dealerY[4] = [0, 146, 285, 285, 146];
    g.dealerY[5] = [0, 146, 285, 323, 285, 146];
    g.dealerY[6] = [0, 83, 221, 332, 332, 221, 83];
    g.dealerY[7] = [0, 146, 221, 285, 323, 285, 221, 146];
    g.dealerY[8] = [0, 83, 146, 285, 332, 332, 285, 146, 83];
    g.dealerY[9] = [0, 83, 146, 221, 285, 323, 285, 221, 146, 83];
    g.dealerY[10] = [0, 83, 146, 221, 285, 333, 333, 285, 221, 146, 83];
    g.dxOfs = 11;
    g.dyOfs = 9;
    if (g.game == "holdem") {
      g.holeCards = 2;
      g.holeX = [0, 46, 0];
      g.holeY = [0, 40, 40];
    } else {
      if (g.game == "omaha") {
        g.holeCards = 4;
        g.holeX = [0, 44, 30, 16, 2];
        g.holeY = [0, 40, 40, 40, 40];
      } else {
        if (g.game == "omaha5") {
          g.holeCards = 5;
          g.holeX = [0, 51, 37, 23, 9, -5];
          g.holeY = [0, 40, 40, 40, 40, 40];
        } else {
          if (g.game == "omaha6") {
            g.holeCards = 6;
            g.holeX = [0, 58, 44, 30, 16, 2, -12];
            g.holeY = [0, 40, 40, 40, 40, 40, 40];
          } else {
            g.holeCards = 7;
            g.holeX = [0, 65, 51, 37, 23, 9, -5, -19];
            g.holeY = [0, 40, 40, 45, 45, 45, 45, 40];
          }
        }
      }
    }
    g.seatX = [];
    g.seatX[2] = [0, 627, 72];
    g.seatX[3] = [0, 608, 350, 92];
    g.seatX[4] = [0, 608, 608, 92, 92];
    g.seatX[5] = [0, 608, 608, 350, 92, 92];
    g.seatX[6] = [0, 468, 627, 468, 231, 72, 231];
    g.seatX[7] = [0, 608, 627, 608, 350, 92, 72, 92];
    g.seatX[8] = [0, 468, 608, 608, 468, 231, 92, 92, 231];
    g.seatX[9] = [0, 468, 608, 627, 608, 350, 92, 72, 92, 231];
    g.seatX[10] = [0, 468, 608, 627, 608, 468, 231, 92, 72, 92, 231];
    g.seatY = [];
    g.seatY[2] = [0, 192, 192];
    g.seatY[3] = [0, 102, 341, 102];
    g.seatY[4] = [0, 102, 282, 282, 102];
    g.seatY[5] = [0, 102, 282, 341, 282, 102];
    g.seatY[6] = [0, 52, 192, 341, 341, 192, 52];
    g.seatY[7] = [0, 102, 192, 282, 341, 282, 192, 102];
    g.seatY[8] = [0, 52, 102, 282, 341, 341, 282, 102, 52];
    g.seatY[9] = [0, 52, 102, 192, 282, 341, 282, 192, 102, 52];
    g.seatY[10] = [0, 52, 102, 192, 282, 341, 341, 282, 192, 102, 52];
    g.sxOfs = 65;
    g.syOfs = 0;
    g.potX = [0, 350, 251, 448, 251, 448, 316, 384, 302, 398];
    g.potY = [0, 149, 149, 149, 259, 259, 259, 259, 148, 149];
  };
  an.prototype.initLocalVariables = function () {
    var g = this;
    g.animating = 0;
    g.board = [];
    g.board2 = [];
    g.boardCard = [];
    g.boardCard2 = [];
    g.card = [];
    g.card[1] = [];
    g.card[2] = [];
    g.card[3] = [];
    g.card[4] = [];
    g.card[5] = [];
    g.card[6] = [];
    g.card[7] = [];
    g.cardNum = [0, 0, 0, 0, 0, 0, 0, 0];
    g.chop = [];
    g.dealer = 1;
    g.ghosted = false;
    g.graphicsMade = false;
    g.handHelper = "";
    g.hhData = [];
    g.hhNumbers = [];
    g.holeCard = [];
    g.holeCard[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    g.holeCard[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    g.holeCard[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    g.holeCard[4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    g.holeCard[5] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    g.holeCard[6] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    g.holeCard[7] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    g.isFaceDown = false;
    g.levelTimer = null;
    g.liveStraddle = false;
    g.maxRaiseTo = 0;
    g.minRaiseTo = 0;
    g.modalList = [];
    g.nextCommand1 = "";
    g.nextCommand2 = "";
    g.nextCommand3 = "";
    g.nextCommand4 = "";
    g.nextMove = "";
    g.packetQueue = [];
    g.password = false;
    g.playerAction = [];
    g.playerAvatar = [];
    g.playerAvatarCrc = [];
    g.playerBet = [];
    g.playerBounty = [];
    g.playerChips = [];
    g.playerCustom = [];
    g.playerGender = [];
    g.playerLevel = [];
    g.playerLocation = [];
    g.playerName = [];
    g.playerRealName = [];
    g.playerAway = [];
    g.playerTime = [];
    g.playerTitle = [];
    g.potChips = [];
    g.queued = false;
    g.raiseInc = 0;
    g.raiseMultiple = 1;
    g.raiseTo = 0;
    g.replayData = [];
    g.replayMyCards = [];
    g.rit = false;
    g.ritInit = false;
    g.rotate = 0;
    g.seat = [];
    g.seats = 0;
    g.special = 0;
    g.suspendChat = false;
    g.totalPot = "";
    g.totalRake = 0;
    g.turn = 0;
    g.twice = [];
    g.$bet = [];
    g.$betLabel = [];
    g.$dealer = null;
    g.$pot = [];
    g.$potLabel = [];
  };
  an.prototype.leaveCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $(".tableleave")
      .clone()
      .removeClass("tableleave")
      .appendTo(U.mobile ? U.lobby.$openTableBox : U.$webClient);
    bh = new Y(g, bg, {
      title: bg.id,
    });
    bh.controls.seatbtn = new A(
      $(".tl_seat", g),
      U.lang.TableMenuLeaveSeat,
      25,
      function () {
        bh.close();
        bg.confirmLeave(true);
      }
    );
    bh.controls.tablebtn = new A(
      $(".tl_table", g),
      U.lang.TableMenuLeaveTable,
      25,
      function () {
        bh.close();
        bg.confirmLeave(false);
      }
    );
    bh.controls.trnybtn = new A(
      $(".tl_trny", g),
      U.lang.TableMenuLeaveTourney,
      25,
      function () {
        bh.close();
        bg.confirmResign();
      }
    );
    new A($(".cancelbtn", g), U.lang.DialogCancel, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.leaveDlg = bh;
  };
  an.prototype.leaveShow = function () {
    var g, bg;
    g = this;
    bg = g.leaveDlg;
    bg.controls.seatbtn.enable(g.getPlayerSeat() > 0 && g.type == "R");
    bg.controls.trnybtn.show(
      g.getPlayerSeat() > 0 && g.type == "T" && g.canResign
    );
    bg.show(true, U.mobile);
  };
  an.prototype.makeGraphics = function () {
    var bo, bj, bi, bk, bn, bl, bm, bh, g, bg;
    bo = this;
    for (bj = 1; bj <= 5; bj++) {
      bn = bo.boardX[bj] - bo.cxOfs;
      bl = bo.boardY - bo.cyOfs;
      bm = bo.board2Y - bo.cyOfs;
      bo.board[bj] = new F(bo, 64, bn, bl, 0, 0);
      bo.board[bj].$container.on("touchstart mousedown", function (bp) {
        bo.toggleBoard();
        return false;
      });
      bo.board2[bj] = new F(bo, 36, bn, bm, 0, 0).clip(true);
    }
    bh = bo.seats;
    for (bj = 1; bj <= bh; bj++) {
      g = bo.seatPosition(bj);
      bn = bo.seatX[bh][g];
      bl = bo.seatY[bh][g];
      bg = bo.game == "stud" || bo.game == "razz";
      for (bi = 1; bi <= 7; bi++) {
        if (bg && bi > 2 && bi < 7) {
          bk = 45;
        } else {
          bk = 40;
        }
        bo.card[bi][bj] = new F(
          bo,
          bk,
          bn - bo.holeX[bi],
          bl - bo.holeY[bi],
          bj,
          bi
        );
        bo.card[bi][bj].clip(true);
      }
      bo.seat[bj] = new w(bo, bn - bo.sxOfs, bl - bo.syOfs, bj);
      bo.seat[bj].show(true);
      bn = bo.chipX[bh][g];
      bl = bo.chipY[bh][g];
      bo.$bet[bj] = $("<div>")
        .addClass("chipstack")
        .css({
          left: bn - bo.chxOfs,
          top: bl - bo.chyOfs,
        })
        .appendTo(bo.$content);
      bo.$betLabel[bj] = $("<div>")
        .css({
          color: bo.oncolor,
        })
        .appendTo(bo.$content);
    }
    for (bj = 1; bj < bh; bj++) {
      bn = bo.potX[bj];
      bl = bo.potY[bj] - bo.chyOfs;
      bo.$pot[bj] = $("<div>")
        .addClass("chipstack")
        .css({
          left: bn - bo.chxOfs,
          top: bl,
        })
        .appendTo(bo.$content);
      bl = bo.potY[bj] + bo.chyOfs;
      bo.$potLabel[bj] = $("<div>")
        .css({
          left: bn,
          top: bl,
          color: bo.oncolor,
        })
        .appendTo(bo.$content);
    }
    g = bo.seatPosition(1);
    bn = bo.dealerX[bh][g] - bo.dxOfs;
    bl = bo.dealerY[bh][g] - bo.dyOfs;
    bo.$dealer = $("<div>")
      .addClass("dealer")
      .css({
        left: bn,
        top: bl,
        background:
          "url('Image?Name=Chips&Crc=" +
          U.crc.image +
          "') 0px 0px/auto 19px no-repeat",
      })
      .appendTo(bo.$content);
    bo.graphicsMade = true;
  };
  an.prototype.maximize = function () {
    var bq, bj, g, bn, bl, bg, bi, bo, bk, bh, bp, bm;
    bq = this;
    bq.infoClose();
    if (bq.isMax) {
      bm = false;
      bh = bq.restore.left;
      bp = bq.restore.top;
      bo = bq.restore.width;
      bk = bq.restore.height;
    } else {
      bj = U.$webClient.width() - 5;
      g = U.$webClient.height() - 5;
      bg = bj - 3 - 3;
      bi = g - 30 - 25 - 3;
      bn = bg / bi;
      bl = 700 / 510;
      if (bn > bl) {
        bk = g;
        bo = Math.floor(bi * bl) + 3 + 3;
      } else {
        bo = bj;
        bk = Math.floor(bg / bl) + 30 + 25 + 3;
      }
      bh = (bj - bo) / 2;
      bp = (g - bk) / 2;
      bm = true;
      bq.restore = {
        left: bq.$dialog.offset().left,
        top: bq.$dialog.offset().top,
        width: bq.$dialog.width(),
        height: bq.$dialog.height(),
      };
    }
    bq.$dialog.css({
      left: bh,
      top: bp,
      width: bo,
      height: bk,
    });
    bq.resizeTable();
    bq.resizeFinish();
    bq.bringToFront();
    bq.isMax = bm;
  };
  an.prototype.messageShow = function (bj, bi) {
    var bg, g, bh;
    bg = this;
    g = $(".message")
      .clone()
      .removeClass("message")
      .appendTo(U.mobile ? U.lobby.$openTableBox : U.$webClient);
    if (!bi || bi == "") {
      bi = U.lang.DialogMessage;
    }
    bh = new Y(g, bg, {
      title: bi,
      removeonclose: true,
    });
    new A($(".okbtn", g), U.lang.DialogOK, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bh.showMessage(bj, true, U.mobile);
  };
  an.prototype.minimize = function () {
    var g;
    g = this;
    g.$dialog.hide();
    U.minTray.add(g, function () {
      g.bringToFront();
    });
    g.isMin = true;
    U.focused = null;
  };
  an.prototype.mixedChoiceCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $(".mixedchoice")
      .clone()
      .removeClass("mixedchoice")
      .appendTo(U.mobile ? U.lobby.$openTableBox : U.$webClient);
    bh = new Y(g, bg, {
      title: bg.id,
    });
    bh.data = {};
    bh.data.Choice = {};
    bh.data.Choice.cols = 1;
    bh.data.Choice.widths = [1];
    bh.data.Choice.headers = [U.lang.GamePlayersChoice];
    bh.data.Choice.fields = ["game"];
    bh.data.Choice.fieldsShow = ["game"];
    bh.data.Choice.fieldsSort = ["game"];
    bh.data.Choice.fieldsNum = [false];
    bh.data.Choice.fieldsRight = [false];
    bh.data.Choice.fieldsHTML = [false];
    bh.data.Choice.sortCol = 0;
    bh.data.Choice.sortAscend = true;
    bh.data.Choice.sortable = false;
    bh.data.Choice.rows = [];
    bh.data.Choice.rowHeight = U.mobile ? 24 : 16;
    bh.controls.grid = new ay($(".mix_grid", g), bh.data.Choice);
    new A($(".okbtn", g), U.lang.DialogOK, 25, function () {
      j({
        Response: "MixedChoice",
        Table: bg.id,
        Type: bg.type,
        Choice: bh.controls.grid.selrow,
      });
      bh.close();
    });
    bg.mixedChoice = bh;
  };
  an.prototype.mixedChoiceShow = function (bk, g) {
    var bh, bj, bg, bi;
    bh = this;
    bj = bh.mixedChoice;
    if (bk.length == 0) {
      bj.close();
      return;
    }
    bj.data.Choice.rows.length = 0;
    for (bg = 0; bg < bk.length; bg++) {
      bi = {};
      bi.game = bk[bg];
      bj.data.Choice.rows.push(bi);
    }
    bj.controls.grid.selrow = g;
    bj.show(true, U.mobile);
    av("beep");
    bj.controls.grid.resize();
  };
  an.prototype.moveChat = function () {
    var g, bg;
    g = this;
    bg = g.infoDialog;
    if (bg.controls.chatInfoMove.isChecked()) {
      bg.controls.chatInfoEdit.setText(g.chatEdit.getText());
      g.chatEdit.setText("");
      g.chatText.setText("");
      g.showChat(false);
    } else {
      g.chatEdit.setText(bg.controls.chatInfoEdit.getText());
      bg.controls.chatInfoEdit.setText("");
      bg.controls.chatInfoText.setText("");
      g.showChat(true);
    }
    g.chatUpdate();
  };
  an.prototype.moveDealer = function (bh) {
    var bi, g, bm, bl, bk, bj;
    bi = this;
    bi.animating++;
    bi.dealer = bh;
    bl = bi.seats;
    bk = bi.seatPosition(bh);
    g = bi.dealerX[bl][bk] - bi.dxOfs;
    bm = bi.dealerY[bl][bk] - bi.dyOfs;
    bj = 500;
    bi.$dealer.css("opacity", 1).show().redraw();
    bi.$dealer.xytrans(bj).css({
      left: g,
      top: bm,
    });
    setTimeout(bg, bj + 25);

    function bg() {
      if (bi.animating > 0) {
        bi.animating--;
      }
      I(bi);
    }
  };
  an.prototype.nextMove1Change = function (bg) {
    var g = this;
    g.nextMove1.setCheck(bg);
    if (!bg) {
      g.nextMove = "";
    } else {
      g.nextMove2.setCheck(false);
      g.nextMove3.setCheck(false);
      g.nextMove4.setCheck(false);
      g.nextMove = g.nextCommand1;
      g.foldAnyBetCheck(false);
    }
  };
  an.prototype.nextMove2Change = function (bg) {
    var g = this;
    g.nextMove2.setCheck(bg);
    if (!bg) {
      g.nextMove = "";
    } else {
      g.nextMove1.setCheck(false);
      g.nextMove3.setCheck(false);
      g.nextMove4.setCheck(false);
      g.nextMove = g.nextCommand2;
      g.foldAnyBetCheck(false);
    }
  };
  an.prototype.nextMove3Change = function (bg) {
    var g = this;
    g.nextMove3.setCheck(bg);
    if (!bg) {
      g.nextMove = "";
    } else {
      g.nextMove1.setCheck(false);
      g.nextMove2.setCheck(false);
      g.nextMove4.setCheck(false);
      g.nextMove = g.nextCommand3;
      g.foldAnyBetCheck(false);
    }
  };
  an.prototype.nextMove4Change = function (bg) {
    var g = this;
    g.nextMove4.setCheck(bg);
    if (!bg) {
      g.nextMove = "";
    } else {
      g.nextMove1.setCheck(false);
      g.nextMove2.setCheck(false);
      g.nextMove3.setCheck(false);
      g.nextMove = g.nextCommand4;
      g.foldAnyBetCheck(false);
    }
  };
  an.prototype.outNextBlindCheck = function (g) {
    this.outNextBlind.setCheck(g);
  };
  an.prototype.outNextBlindClick = function (g) {
    this.outNextBlindCheck(g);
    this.sendSitOut("SitBlind", g);
  };
  an.prototype.outNextBlindShow = function (g) {
    this.outNextBlind.show(g);
  };
  an.prototype.outNextHandCheck = function (g) {
    this.outNextHand.setCheck(g);
  };
  an.prototype.outNextHandClick = function (g) {
    this.outNextHandCheck(g);
    this.sendSitOut("SitHand", g);
  };
  an.prototype.outNextHandShow = function (g) {
    this.outNextHand.show(g);
  };
  an.prototype.playerInfoCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $(".playerinfo")
      .clone()
      .removeClass("playerinfo")
      .appendTo(U.mobile ? U.lobby.$openTableBox : U.$webClient);
    bh = new Y(g, bg, {});
    bh.data.piName = "";
    bh.controls.piProfile = new A(
      $(".pi_profile", g),
      U.lang.PlayerProfile,
      25,
      function () {
        a0(bh.data.piName);
      }
    );
    bh.controls.piNotes = new A(
      $(".pi_notes", g),
      U.lang.PlayerNotes,
      25,
      function () {
        bh.close();
        ac(bg, bh.data.piName);
      }
    );
    bh.controls.piSearch = new A(
      $(".pi_search", g),
      U.lang.PlayerSearch,
      25,
      function () {
        bg.playerInfoSearch();
      }
    );
    bh.data.piHereValue = 0;
    bh.controls.piRotate = new A(
      $(".pi_rotate", g),
      U.lang.RotateHere,
      25,
      function () {
        bg.rotateSeats(bh.data.piHereValue, true);
        bh.close();
      }
    );
    new A($(".okbtn", g), U.lang.DialogOK, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.playerInfo = bh;
  };
  an.prototype.playerInfoShow = function (bi) {
    var bg, bh, g;
    bg = this;
    bh = bg.playerInfo;
    bh.data.piSeat = bi;
    bh.data.piName = aq(bg.playerName[bi]);
    g = bg.getPlayerSeat();
    if (bh.data.piName == "") {
      bh.setTitle(U.lang.MouseOverSeat + " #" + bi);
      bh.controls.piProfile.enable(false);
      bh.controls.piNotes.enable(false);
      bh.controls.piSearch.enable(false);
    } else {
      bh.setTitle(bh.data.piName);
      bh.controls.piProfile.enable(U.profileURL != "");
      bh.controls.piNotes.enable(true);
      bh.controls.piSearch.enable(true);
    }
    if (g != 0 && g != bi) {
      bh.controls.piRotate.enable(true);
      bh.data.piHereValue = bi - g;
    } else {
      bh.controls.piRotate.enable(false);
    }
    bh.show(true, U.mobile);
  };
  an.prototype.playerInfoSearch = function () {
    var g, bg;
    g = this;
    bg = g.playerInfo;
    j({
      Response: "PlayerSearch",
      Player: bg.data.piName,
      Table: g.id,
      TT: g.type,
    });
  };
  an.prototype.potAward = function (bg) {
    var bu, bi, bm, bt, bp, bs, bv, bh, bl, bk, bj, g, br, bo, bn;
    bu = this;
    bu.animating++;
    bi = 300;
    bm = bg.Pot;
    bn = au(bg.Board);
    bp = bu.potChips[bm];
    bu.potChips[bm] = 0;
    bu.$pot[bm].hide();
    bu.$potLabel[bm].hide();
    bh = bu.seats;
    bl = 0;
    if (bu.dialog == U.focused && U.soundOK) {
      av("pot");
    }
    for (bk = 1; bk <= bh; bk++) {
      bt = au(bg["Seat" + bk]);
      if (bt > 0) {
        bl++;
        bp = bp - bt;
        g = bu.seatPosition(bk);
        bu.stackChips(bu.$bet[bk], bt);
        bu.$bet[bk]
          .xytrans(0)
          .css({
            left: bu.potX[bm] - bu.chxOfs,
            top: bu.potY[bm] - bu.chyOfs,
          })
          .show()
          .redraw();
        bu.$betLabel[bk]
          .xytrans(0)
          .css({
            left: bu.potX[bm] - bu.chxOfs,
            top: bu.potY[bm] + bu.chyOfs,
          })
          .text(B(bt))
          .show()
          .redraw();
        br = bu.chipX[bh][g];
        bo = bu.chipY[bh][g];
        bu.$bet[bk].xytrans(bi).css({
          left: br - bu.chxOfs,
          top: bo - bu.chyOfs,
        });
        bu.$betLabel[bk].xytrans(bi).css(bu.betLabelCSS(bk));
        bv = aq(bg["Mask" + bk]);
        if (bv == "") {
          continue;
        }
        for (bj = 1; bj <= 5; bj++) {
          bs = bv.charAt(bj - 1) == "0";
          if (bn == 1 || !bu.board2[bj].isVisible()) {
            bu.board[bj].shade(bs);
            bu.board2[bj].shade(true);
          } else {
            bu.board[bj].shade(true);
            bu.board2[bj].shade(bs);
          }
        }
        for (bj = 1; bj <= bu.holeCards; bj++) {
          bu.card[bj][bk].shade(bv.charAt(bj + 4) == "0");
        }
      }
    }
    setTimeout(bq, bi + 25);
    if (bp > 0) {
      bu.stackChips(bu.$pot[bm], bp);
      bu.potLabelSet(bm, bp);
    }

    function bq() {
      if (bu.animating > 0) {
        bu.animating--;
      }
      I(bu);
    }
  };
  an.prototype.potLabelSet = function (bi, bh) {
    var bg = this,
      g;
    bg.$potLabel[bi].text(B(bh)).show();
    g = bg.$potLabel[bi].width();
    bg.$potLabel[bi].css({
      left: bg.potX[bi] - g / 2,
      top: bg.potY[bi] + bg.chyOfs,
    });
  };
  an.prototype.potRake = function (bj, bh, bg, bi) {
    var g = this;
    g.potChips[bj] = bh;
    g.stackChips(g.$pot[bj], bh);
    g.potLabelSet(bj, bh);
    g.totalPot = bg;
    g.totalRake = bi;
    g.updateTotal();
  };
  an.prototype.preferredSeatRotate = function () {
    var bg, g, bi, bh, bj;
    bg = this;
    if (!U.pset.PreferredSeat) {
      return;
    }
    g = bg.getPlayerSeat();
    if (g == 0) {
      return;
    }
    bi = bg.seatPosition(g);
    bj = bg.seats - 2;
    bh = au(U.pset.SeatPosition[bj]);
    if (bh == 0 || bi == bh) {
      return;
    }
    bg.rotateSeats(bh - bi, false);
  };
  an.prototype.preferredSeatSave = function () {
    var bg, g, bh, bi;
    bg = this;
    if (!U.pset.PreferredSeat) {
      return;
    }
    g = bg.getPlayerSeat();
    if (g == 0) {
      return;
    }
    bh = bg.seatPosition(g);
    bi = bg.seats - 2;
    U.pset.SeatPosition[bi] = bh;
    al({
      SeatPosition: U.pset.SeatPosition,
    });
  };
  an.prototype.raiseInputChange = function () {
    var g, bg, bh;
    g = this;
    g.raiseTo = q(g.raiseInput.getText());
    g.raiseTo = Math.round(g.raiseTo / g.raiseMultiple) * g.raiseMultiple;
    if (g.raiseTo < g.minRaiseTo) {
      g.raiseTo = g.minRaiseTo;
    }
    if (g.raiseTo > g.maxRaiseTo) {
      g.raiseTo = g.maxRaiseTo;
    }
    bg = (g.raiseTo - g.minRaiseTo) / (g.maxRaiseTo - g.minRaiseTo);
    g.raiseSlider.setValue(bg, false);
    if (g.button3.isVisible()) {
      bh = g.button3.command;
      if (bh == "Bet") {
        g.setCommand(g.button3, "Bet", g.raiseTo);
      } else {
        g.setCommand(g.button3, "Raise", g.raiseTo);
      }
    }
  };
  an.prototype.raiseSliderChange = function (bh) {
    var bg, g;
    bg = this;
    if (bh == 0) {
      g = bg.minRaiseTo;
    } else {
      if (bh == 1) {
        g = bg.maxRaiseTo;
      } else {
        g = bh * (bg.maxRaiseTo - bg.minRaiseTo) + bg.minRaiseTo;
        g = Math.round(g / bg.raiseInc) * bg.raiseInc;
      }
    }
    bg.raiseInput.setText(n(g));
    bg.raiseInputChange();
  };
  an.prototype.refreshTable = function () {
    var bh, g, bi, bg, bj;
    bh = this;
    for (g = 1; g <= 5; g++) {
      if (bh.board[g]) {
        bh.board[g].$container.remove();
        delete bh.board[g];
      }
      if (bh.board2[g]) {
        bh.board2[g].$container.remove();
        delete bh.board2[g];
      }
    }
    for (g = 1; g <= 10; g++) {
      if (bh.card[1][g]) {
        bh.card[1][g].$container.remove();
        delete bh.card[1][g];
      }
      if (bh.card[2][g]) {
        bh.card[2][g].$container.remove();
        delete bh.card[2][g];
      }
      if (bh.card[3][g]) {
        bh.card[3][g].$container.remove();
        delete bh.card[3][g];
      }
      if (bh.card[4][g]) {
        bh.card[4][g].$container.remove();
        delete bh.card[4][g];
      }
      if (bh.card[5][g]) {
        bh.card[5][g].$container.remove();
        delete bh.card[5][g];
      }
      if (bh.card[6][g]) {
        bh.card[6][g].$container.remove();
        delete bh.card[6][g];
      }
      if (bh.card[7][g]) {
        bh.card[7][g].$container.remove();
        delete bh.card[7][g];
      }
      if (bh.seat[g]) {
        bh.seat[g].$container.remove();
        delete bh.seat[g];
      }
      if (bh.$bet[g]) {
        bh.$bet[g].remove();
      }
      if (bh.$betLabel[g]) {
        bh.$betLabel[g].remove();
      }
    }
    for (g = 1; g <= 9; g++) {
      if (bh.$pot[g]) {
        bh.$pot[g].remove();
      }
      if (bh.$potLabel[g]) {
        bh.$potLabel[g].remove();
      }
    }
    if (bh.$dealer) {
      bh.$dealer.remove();
    }
    bh.graphicsMade = false;
    bh.cardNum[1] = 0;
    bh.cardNum[2] = 0;
    bh.cardNum[3] = 0;
    bh.cardNum[4] = 0;
    bh.cardNum[5] = 0;
    bh.cardNum[6] = 0;
    bh.cardNum[7] = 0;
    bh.animating = 0;
    bh.packetQueue.length = 0;
    bi = {
      Response: "OpenTable",
    };
    bi.Table = bh.id;
    bi.Type = bh.type;
    if (bh.type == "T") {
      bj = az(bh.id);
    } else {
      bj = bh.id;
    }
    bg = U.passwords[bh.type + bj];
    if (bg) {
      bi.Password = bg;
    }
    j(bi);
  };
  an.prototype.replayAdd = function (bg) {
    var g, bi, bh;
    g = this;
    bi = g.replayDialog;
    g.replayData.push(bg);
    bh = g.replayData.length - 1;
    if (bh == 0) {
      bh = 1;
    }
    bi.controls.slider.increment = 1 / bh;
  };
  an.prototype.replayCreate = function () {
    var bo, bk, bg, bm, g, bj, bi, bl, bh, bn;
    bo = this;
    bg = $(".tablereplay")
      .clone()
      .removeClass("tablereplay")
      .appendTo(U.mobile ? U.lobby.$openTableBox : U.$webClient);
    bm = $(".tr_content", bg).css({
      color: U.color.ListText,
      "background-color": U.color.List,
    });
    bk = new Y(bg, bo, {
      title: bo.id,
    });
    bk.controls.$ccard = [];
    bk.controls.$ccard2 = [];
    bk.controls.$rabbit = [];
    for (bi = 0; bi < 5; bi++) {
      bk.controls.$ccard[bi] = $("<div>")
        .appendTo(bm)
        .css({
          left: 20 + bi * 49,
          top: 15,
          width: 46,
          height: 64,
        })
        .hide();
      bk.controls.$rabbit[bi] = $("<div>")
        .addClass("replayrabbit")
        .appendTo(bk.controls.$ccard[bi])
        .hide();
      bk.controls.$ccard2[bi] = $("<div>")
        .appendTo(bm)
        .css({
          left: 20 + bi * 49,
          top: 47,
          width: 46,
          height: 36,
        })
        .hide();
    }
    g = [];
    bk.controls.$seat = [];
    bk.controls.$dealer = [];
    bk.controls.$avatar = [];
    bk.controls.$name = [];
    bk.controls.$card = [];
    bk.controls.$cardshade = [];
    bk.controls.$result = [];
    bh = i(U.color.Window, 0.05);
    bl = 95;
    for (bj = 0; bj < 10; bj++) {
      g[bj] = $("<div>").appendTo(bm).css({
        left: 5,
        top: bl,
        right: 5,
        height: 40,
      });
      if (bj % 2 == 0) {
        g[bj].css("background", bh);
      }
      bk.controls.$seat[bj] = $("<div>").appendTo(g[bj]).css({
        left: 5,
        top: 2,
        width: 20,
        height: 36,
        lineHeight: "36px",
        textAlign: "right",
      });
      bk.controls.$dealer[bj] = $("<div>").appendTo(g[bj]).css({
        left: 35,
        top: 10,
        width: 23,
        height: 19,
      });
      bk.controls.$avatar[bj] = $("<div>").appendTo(g[bj]).css({
        left: 63,
        top: 2,
        width: 36,
        height: 36,
      });
      bk.controls.$name[bj] = $("<div>").appendTo(g[bj]).css({
        left: 111,
        top: 2,
        width: 117,
        height: 36,
        lineHeight: "18px",
        textAlign: "center",
        overflow: "hidden",
      });
      bk.controls.$card[bj] = [];
      bk.controls.$cardshade[bj] = [];
      for (bi = 0; bi < 7; bi++) {
        bk.controls.$card[bj][bi] = $("<div>")
          .appendTo(g[bj])
          .css({
            left: 238 + bi * 14,
            top: 2,
            width: 46,
            height: 36,
          })
          .hide();
        bk.controls.$cardshade[bj][bi] = $("<div>")
          .addClass("replayshade")
          .appendTo(bk.controls.$card[bj][bi]);
      }
      bk.controls.$result[bj] = $("<div>").appendTo(g[bj]).css({
        left: 378,
        top: 2,
        right: 10,
        height: 36,
        lineHeight: "18px",
        overflow: "hidden",
      });
      bl = bl + 40;
    }
    bk.controls.$hand = $(".tr_hand", bg);
    bk.controls.slider = new ao($(".tr_slider", bg), 1, function (bp) {
      bo.replayUpdate(bp);
    });
    new A($(".tr_first", bg), "|" + U.arrowL, 30, function () {
      bk.controls.slider.setValue(0, true);
    });
    new A($(".tr_prev", bg), U.arrowL, 30, function () {
      bn = bk.controls.slider.getValue() - bk.controls.slider.increment;
      if (bn < 0) {
        bn = 0;
      }
      bk.controls.slider.setValue(bn, true);
    });
    new A($(".tr_next", bg), U.arrowR, 30, function () {
      bn = bk.controls.slider.getValue() + bk.controls.slider.increment;
      if (bn > 1) {
        bn = 1;
      }
      bk.controls.slider.setValue(bn, true);
    });
    new A($(".tr_last", bg), U.arrowR + "|", 30, function () {
      bk.controls.slider.setValue(1, true);
    });
    bk.controls.$stats = $("<div>").appendTo(bm).css({
      left: 280,
      top: 60,
      right: 15,
      textAlign: "center",
    });
    bk.controls.rabbit = new E(
      $(".tr_rabbit", bg),
      U.lang.ReplayRabbit,
      function () {
        U.pset.RabbitShow = bk.controls.rabbit.isChecked();
        al({
          RabbitShow: U.pset.RabbitShow,
        });
        bo.replayUpdate(bk.controls.slider.getValue());
      }
    );
    bk.controls.rabbit.show(U.params.rabbitHunt);
    bk.controls.rabbit.setCheck(U.pset.RabbitShow && U.params.rabbitHunt);
    new A($(".tr_ok", bg), U.lang.DialogOK, 25, function () {
      bk.close();
    });
    $(".closebtn", bg).on("touchstart mousedown", function () {
      bk.close();
      return false;
    });
    bo.replayDialog = bk;
  };
  an.prototype.replayGet = function (g) {
    var bh, bg, bj, bi;
    bh = this;
    bj = bh.replayMyCards.length;
    bi = [0, 0, 0, 0, 0, 0, 0];
    for (bg = bj - 1; bg >= 0; bg--) {
      if (bh.replayMyCards[bg].hand == g) {
        bi = bh.replayMyCards[bg].cards;
        break;
      }
    }
    return bi;
  };
  an.prototype.replayShow = function () {
    var g, bg;
    g = this;
    if (g.replayData.length == 0) {
      g.messageShow(U.lang.MessageReplayNoHands);
      return;
    }
    bg = g.replayDialog;
    bg.show(U.mobile, U.mobile);
    bg.controls.slider.setScale(bg.scaleX);
    bg.controls.slider.setValue(1, true);
  };
  an.prototype.replayUpdate = function (bn) {
    var bs, bu, bq, bo, bm, bv, bi, bh, bp, g, bl, bg, bj, bt, bk, bw, br;
    bs = this;
    bu = bs.replayDialog;
    bq = Math.round(bn * (bs.replayData.length - 1));
    bv = bs.replayData[bq];
    bk = bs.replayGet(bv.Hand);
    bu.setTitle(U.lang.ReplayTitle + " - " + bs.id + " - " + bv.Game);
    bi = bv.Board.length / 2;
    bh = bv.Board2 != "";
    bp = bu.controls.rabbit.isChecked();
    for (bq = 0; bq < 5; bq++) {
      bu.controls.$ccard[bq].css("background", "none").hide();
      bu.controls.$rabbit[bq].hide();
      bu.controls.$ccard2[bq].css("background", "none").hide();
      if (bq < bi) {
        g = k(bv.Board.substr(bq * 2, 2));
        bu.controls.$ccard[bq].css({
          "background-image": "url('" + U.deck + "')",
          "background-size": "auto 64px",
          "background-repeat": "no-repeat",
          top: 15,
        });
        bu.controls.$ccard[bq]
          .css("background-position", (g - 1) * -46 + "px 0px")
          .toggle(!bv.Rabbit[bq] || bp);
        bu.controls.$rabbit[bq].toggle(bv.Rabbit[bq]);
        if (!bh) {
          continue;
        }
        bl = k(bv.Board2.substr(bq * 2, 2));
        if (bl == 0 || g == bl) {
          continue;
        }
        bu.controls.$ccard[bq].css("top", 11);
        bu.controls.$ccard2[bq].css({
          "background-image": "url('" + U.deck + "')",
          "background-size": "auto 64px",
          "background-repeat": "no-repeat",
        });
        bu.controls.$ccard2[bq]
          .css("background-position", (bl - 1) * -46 + "px 0px")
          .show();
      }
    }
    for (bq = 0; bq < 10; bq++) {
      if (bq < bs.seats) {
        bu.controls.$seat[bq].text(bq + 1);
        if (bq + 1 == bv.Dealer) {
          bu.controls.$dealer[bq].css(
            "background",
            "url('Image?Name=Chips&Crc=" +
              U.crc.image +
              "') 0px 0px/auto 19px no-repeat"
          );
        } else {
          bu.controls.$dealer[bq].css("background", "none");
        }
        if (bq + 1 == bv.BringIn) {
          bu.controls.$dealer[bq].html(U.arrowR);
        } else {
          bu.controls.$dealer[bq].html("");
        }
        bj = bv.Avatar[bq];
        if (bj == 0) {
          bu.controls.$avatar[bq].css(
            "background",
            "url('Avatar?Player=" +
              encodeURIComponent(bv.Name[bq]) +
              "&Crc=" +
              bv.AvatarCrc[bq] +
              "') 0px 0px/36px 36px no-repeat"
          );
        } else {
          bu.controls.$avatar[bq].css(
            "background",
            "url('Image?Name=Avatars&Crc=" +
              U.crc.image +
              "') " +
              (bj - 1) * -36 +
              "px 0px/auto 36px no-repeat"
          );
        }
        bu.controls.$name[bq].html(
          bv.Name[bq] == "" ? "" : bv.Name[bq] + "<br>" + bv.Stack[bq]
        );
        bg = bv.Cards[bq].length / 2;
        for (bo = 0; bo < 7; bo++) {
          if (bo < bg) {
            g = k(bv.Cards[bq].substr(bo * 2, 2));
            bw = false;
            if (g == 53 && bv.Name[bq] == U.loginData.player && bk[bo] != 0) {
              g = bk[bo];
              bw = true;
            }
            bu.controls.$card[bq][bo].css({
              "background-image": "url('" + U.deck + "')",
              "background-size": "auto 64px",
              "background-repeat": "no-repeat",
            });
            bu.controls.$card[bq][bo]
              .css("background-position", (g - 1) * -46 + "px 0px")
              .show();
            bu.controls.$cardshade[bq][bo].toggle(bw);
          } else {
            bu.controls.$card[bq][bo].css("background", "none");
            bu.controls.$cardshade[bq][bo].hide();
          }
        }
        br = bu.controls.$result[bq];
        br.css("font-size", "inherit");
        br.text(bv.Action[bq]);
        if (br.prop("scrollHeight") > br.height()) {
          br.css("font-size", "0.8em");
        }
      } else {
        bu.controls.$seat[bq].text("");
        bu.controls.$dealer[bq].css("background", "none");
        bu.controls.$avatar[bq].css("background", "none");
        bu.controls.$name[bq].text("");
        for (bo = 0; bo < 7; bo++) {
          bu.controls.$card[bq][bo].css("background", "none");
          bu.controls.$cardshade[bq][bo].hide();
        }
        bu.controls.$result[bq].text("");
      }
    }
    bm = bs.replayData.length;
    bq = Math.round(bn * (bm - 1));
    bo = bq + 1;
    bu.controls.$hand.text(
      U.lang.TableMenuHeaderHand +
        " #" +
        bv.Hand +
        " (" +
        U.lang.InfoHistoryOf.split("%1%").join(bo).split("%2%").join(bm) +
        ")"
    );
    bt =
      U.lang.ReplayPots +
      " " +
      bv.Pots +
      " &nbsp; " +
      U.lang.ReplayTotal +
      " " +
      bv.Total;
    if (bs.type == "R") {
      bt += " &nbsp; " + U.lang.ReplayRake + " " + bv.Rake;
    }
    bu.controls.$stats.html(bt);
  };
  an.prototype.resignTournament = function () {
    var g, bg;
    g = this;
    bg = {
      Response: "ResignTournament",
    };
    bg.Table = g.id;
    bg.Type = g.type;
    j(bg);
  };
  an.prototype.resizeInfo = function () {
    var bg, g, bh;
    bg = this;
    bh = bg.infoDialog;
    g = ($(".infotabs", bg.infoDialog.$dialog).width() - 20) / 4;
    bh.controls.infoTabs.setTabWidth(g);
    bh.controls.generalInfo.updateScrollPosition();
    bh.controls.statsInfo.updateScrollPosition();
    bh.controls.chatInfoText.updateScrollPosition();
    bh.controls.historySlider.updateThumb();
    bh.controls.historyInfo.updateScrollPosition();
  };
  an.prototype.resizeFinish = function () {
    var g = this;
    if (!U.mobile && g.$dialog.height() > $(document).height()) {
      g.$dialog.width(706);
      g.resizeTable();
    }
    g.$content.hide().show(0);
  };
  an.prototype.resizeTable = function (bm) {
    var bv, bs, bl, bi, g, bg, bk, bq, bj, bn, bt, bh, bu, br, bp, bo;
    bv = this;
    bv.isMax = false;
    if (U.mobile) {
      if (U.lobby.lobbyTabs.getTab() != 4) {
        return;
      }
      $("#OpenBackground").hide();
      U.lobby.lobbyTabs.$contents.eq(4).css({
        top: 0,
        left: 3,
        right: 3,
        bottom: 3,
      });
      bs = U.lobby.$openTableBox.parent().width();
      bl = U.lobby.$openTableBox.parent().height();
      bh = U.mControls ? 240 : 16;
      bn = bh;
      bt = (bh - 6) / 2;
      bi = bs - bh - bv.horzChrome;
      g = bl - bv.vertChrome;
      bg = 700 / 510;
      if (bi / g > bg) {
        bk = bl;
        if (U.mControls) {
          bq = Math.round((bk - bv.vertChrome) * bg) + bv.horzChrome;
        } else {
          bq = bs - bh;
        }
        bn = bs - bq;
        U.lobby.$openTableBox.css({
          top: 0,
          right: bn,
          bottom: 0,
        });
        U.lobby.$openTableControls.css({
          top: 0,
          width: bn,
          bottom: 0,
        });
        U.lobby.mControlsUnhideBtn.$container.css({
          top: 0,
          bottom: 0,
        });
        bt = (bn - 6) / 2;
      } else {
        bq = bs - bh;
        bk = Math.round((bq - bv.horzChrome) / bg) + bv.vertChrome;
        bu = (bl - bk) / 2;
        U.lobby.$openTableBox.css({
          top: bu,
          right: bh,
          bottom: bu,
        });
        U.lobby.$openTableControls.css({
          top: bu,
          width: bh,
          bottom: bu,
        });
        U.lobby.mControlsUnhideBtn.$container.css({
          top: bu,
          bottom: bu,
        });
      }
      U.lobby.$openTableBox.show();
      U.lobby.$openTableControls.toggle(U.mControls);
      U.lobby.mControlsUnhideBtn.show(!U.mControls);
      br = (bq - bv.horzChrome) / 700;
      bp = (bk - bv.vertChrome) / 510;
      bj = (bn - 6 - 20) / 4;
      U.lobby.infoTabs.setTabWidth(bj);
      U.lobby.generalInfo.updateScrollPosition();
      U.lobby.statsInfo.updateScrollPosition();
      U.lobby.chatInfoText.updateScrollPosition();
      U.lobby.historySlider.updateThumb();
      U.lobby.historyInfo.updateScrollPosition();
      U.lobby.mControlsHideBtn.$container.css("width", bt);
      U.lobby.mInfoSaveBtn.$container.css("width", bt);
      U.lobby.prevTableBtn.$container.css("width", bt);
      U.lobby.nextTableBtn.$container.css("width", bt);
    } else {
      if (bm == null) {
        bm = "auto";
      }
      if (
        bm == "n-resize" ||
        bm == "s-resize" ||
        bm == "nw-resize" ||
        bm == "ne-resize"
      ) {
        bp = (bv.$dialog.height() - bv.vertChrome) / 510;
        br = bp;
        bq = Math.round(br * 700) + bv.horzChrome;
        if (bm == "nw-resize") {
          bo = bv.$dialog.position().left - (bq - bv.$dialog.width());
          bv.$dialog.css("left", bo);
        }
        bv.$dialog.css("width", bq);
      } else {
        br = (bv.$dialog.width() - bv.horzChrome) / 700;
        bp = br;
        bk = Math.round(bp * 510) + bv.vertChrome;
        bv.$dialog.css("height", bk);
      }
    }
    bv.$content.css("transform", "scale(" + br + "," + bp + ")");
    br = br * U.lobby.dialog.scaleX;
    bp = bp * U.lobby.dialog.scaleY;
    bv.raiseSlider.setScale(br);
    bv.chatText.setScale(bp);
    bv.dialog.scaleX = br;
    bv.dialog.scaleY = bp;
  };
  an.prototype.rotateSeats = function (bh, bl) {
    var bp, bi, bo, bk, bj, bn, bm, g, bg;
    bp = this;
    bi = bp.playerInfo;
    bo = bp.rotateDialog;
    bg = bp.seats;
    bi.data.piHereValue = bi.data.piHereValue - bh;
    bi.controls.piRotate.enable(bi.data.piHereValue != 0);
    bp.rotate = (bp.rotate + bh) % bg;
    if (bp.rotate < 0) {
      bp.rotate = bp.rotate + bg;
    }
    bo.controls.$rsStatus.text(
      U.lang.RotateStatus.split("%1%").join(bp.rotate)
    );
    for (bk = 1; bk <= bp.seats; bk++) {
      g = bp.seatPosition(bk);
      bn = bp.seatX[bg][g];
      bm = bp.seatY[bg][g];
      for (bj = 1; bj <= bp.holeCards; bj++) {
        if (bp.card[bj][bk]) {
          bp.card[bj][bk].moveTo(500, bn - bp.holeX[bj], bm - bp.holeY[bj]);
        }
      }
      if (bp.seat[bk]) {
        bp.seat[bk].adjustSide();
        bp.seat[bk].$container.xytrans(500).css({
          left: bn - bp.sxOfs,
          top: bm - bp.syOfs,
        });
        bp.seat[bk].$cardbox.xytrans(500).css({
          left: bn - bp.sxOfs,
          top: bm - bp.syOfs - 38,
        });
      }
      bn = bp.chipX[bg][g];
      bm = bp.chipY[bg][g];
      if (bp.$bet[bk]) {
        bp.$bet[bk].xytrans(500).css({
          left: bn - bp.chxOfs,
          top: bm - bp.chyOfs,
        });
      }
      if (bp.$betLabel[bk]) {
        bp.$betLabel[bk].xytrans(500).css(bp.betLabelCSS(bk));
      }
    }
    g = bp.seatPosition(bp.dealer);
    bn = bp.dealerX[bg][g];
    bm = bp.dealerY[bg][g];
    if (bp.$dealer) {
      bp.$dealer.xytrans(500).css({
        left: bn - bp.dxOfs,
        top: bm - bp.dyOfs,
      });
    }
    if (bl) {
      bp.preferredSeatSave();
    }
  };
  an.prototype.rotateSeatsCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $(".rotateseats")
      .clone()
      .removeClass("rotateseats")
      .appendTo(U.mobile ? U.lobby.$openTableBox : U.$webClient);
    bh = new Y(g, bg, {
      title: U.lang.RotateTitle,
    });
    bh.controls.$rsStatus = $(".rs_status", g);
    new A($(".rs_cw", g), U.lang.RotateCW, 25, function () {
      bg.rotateSeats(1, true);
    });
    new A($(".rs_ccw", g), U.lang.RotateCCW, 25, function () {
      bg.rotateSeats(-1, true);
    });
    new A($(".rs_reset", g), U.lang.RotateReset, 25, function () {
      bg.rotateSeats(-bg.rotate, true);
    });
    new A($(".okbtn", g), U.lang.DialogOK, 25, function () {
      bh.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bh.close();
      return false;
    });
    bg.rotateDialog = bh;
  };
  an.prototype.rotateSeatsShow = function (bg) {
    var g, bh;
    g = this;
    bh = g.rotateDialog;
    bh.controls.$rsStatus.text(U.lang.RotateStatus.split("%1%").join(g.rotate));
    bh.show(true, U.mobile);
  };
  an.prototype.rules6HoldemCreate = function () {
    var bg, g, bi, bh;
    bg = this;
    g = $(".tablerules6holdem")
      .clone()
      .removeClass("tablerules6holdem")
      .appendTo(U.mobile ? U.lobby.$openTableBox : U.$webClient);
    bi = new Y(g, bg, {
      title: bg.id,
    });
    $(".h6_label", g).text(U.lang.H6Caption);
    $(".h6_rule1", g).text(U.lang.H6Rule1);
    $(".h6_rule2", g).text(U.lang.H6Rule2);
    $(".h6_rule3", g).text(U.lang.H6Rule3);
    $(".h6_rule4", g).text(U.lang.H6Rule4);
    $(".h6_rule5", g).text(U.lang.H6Rule5);
    bh = new E($(".h6_noshow", g), U.lang.H6NoShow);
    new A($(".okbtn", g), U.lang.DialogOK, 25, function () {
      if (bh.isChecked()) {
        U.pset.Rules6Holdem = false;
        al({
          Rules6Holdem: false,
        });
      }
      bi.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bi.close();
      return false;
    });
    bg.rules6Holdem = bi;
  };
  an.prototype.runTwiceClick = function (bg) {
    var g, bh;
    g = this;
    bh = {
      Response: "RunItTwice",
    };
    bh.Table = g.id;
    bh.Type = g.type;
    if (bg) {
      bh.Checked = "Yes";
    } else {
      bh.Checked = "No";
    }
    j(bh);
    if (U.hasTouch == false) {
      g.chatFocus();
    }
    if (U.pset.RunItTwice != bg) {
      U.pset.RunItTwice = bg;
      al({
        RunItTwice: bg,
      });
    }
  };
  an.prototype.seatPosition = function (bh) {
    var g, bg;
    g = this;
    bg = bh + g.rotate;
    if (bg > g.seats) {
      bg = bg - g.seats;
    }
    return bg;
  };
  an.prototype.seatRequest = function (bh) {
    var bg, g;
    bg = this;
    if (bg.type == "T") {
      return;
    }
    if (U.loggedIn == false) {
      bg.messageShow(U.lang.MessageRingGameLogin);
      return;
    }
    if (bg.getPlayerSeat() > 0) {
      return;
    }
    if (bg.playerName[bh] != null && bg.playerName[bh] != "") {
      return;
    }
    g = U.passwords["R" + bg.id];
    if (bg.password == true && g == null) {
      bg.getPasswordShow(bh);
    } else {
      packet = {
        Response: "RequestSeat",
        Table: bg.id,
        Type: "R",
        Seat: bh,
      };
      if (g != null) {
        packet.Password = g;
      }
      j(packet);
    }
  };
  an.prototype.selectInfoTab = function (g, bi) {
    var bg, bh;
    bg = this;
    bh = bg.infoDialog;
    switch (g) {
      case 0:
        bh.controls.chatInfoText.updateScrollPosition();
        break;
      case 1:
        bh.controls.generalInfo.topScroll();
        break;
      case 2:
        bh.controls.statsInfo.topScroll();
        break;
      case 3:
        bh.controls.historyInfo.topScroll();
        bh.controls.historySlider.updateThumb();
        break;
    }
  };
  an.prototype.sendButton = function (bi, g) {
    var bg, bh;
    bg = this;
    bh = {
      Response: "Button",
    };
    bh.Table = bg.id;
    bh.Type = bg.type;
    bh.Button = bi;
    bh.Amount = g;
    j(bh);
  };
  an.prototype.sendSitOut = function (bh, bg) {
    var g, bi;
    g = this;
    bi = {
      Response: "SitOut",
    };
    bi.Table = g.id;
    bi.Type = g.type;
    bi.Box = bh;
    if (bg) {
      bi.Checked = "Yes";
    } else {
      bi.Checked = "No";
    }
    j(bi);
  };
  an.prototype.setCommand = function (bh, bi, bg) {
    var g = "Error";
    switch (bi) {
      case "Pre1":
        g = U.preFlopButtons[U.pset.PreFlopButton1];
        break;
      case "Pre2":
        g = U.preFlopButtons[U.pset.PreFlopButton2];
        break;
      case "Pre3":
        g = U.preFlopButtons[U.pset.PreFlopButton3];
        break;
      case "Pre4":
        g = U.preFlopButtons[U.pset.PreFlopButton4];
        break;
      case "Post1":
        g = U.postFlopButtons[U.pset.PostFlopButton1];
        break;
      case "Post2":
        g = U.postFlopButtons[U.pset.PostFlopButton2];
        break;
      case "Post3":
        g = U.postFlopButtons[U.pset.PostFlopButton3];
        break;
      case "Post4":
        g = U.postFlopButtons[U.pset.PostFlopButton4];
        break;
      case "Fold":
        g = U.lang.TableButtonFold;
        break;
      case "Check":
        g = U.lang.TableButtonCheck;
        break;
      case "Bring":
        g = U.lang.TableButtonBring.split("%1%").join(B(bg));
        break;
      case "Call":
        g = U.lang.TableButtonCall.split("%1%").join(B(bg));
        break;
      case "Bet":
        g = U.lang.TableButtonBet.split("%1%").join(B(bg));
        break;
      case "Raise":
        g = U.lang.TableButtonRaise.split("%1%").join(B(bg));
        break;
      case "Wait":
        g = U.lang.TableButtonWait;
        break;
      case "Ready":
        g = U.lang.TableButtonReady;
        break;
      case "Start":
        g = U.lang.TableButtonStart;
        break;
      case "Muck":
        g = U.lang.TableButtonMuck;
        break;
      case "Show":
        g = U.lang.TableButtonShow;
        break;
      case "Leave":
        g = U.lang.TableButtonLeave;
        break;
      case "Rebuy":
        g = U.lang.TableButtonRebuy;
        break;
      case "Double Rebuy":
        g = U.lang.TableButtonDoubleRebuy;
        break;
      case "Sitout":
        g = U.lang.TableButtonSitout;
        break;
      case "Add Chips":
        g = U.lang.TableButtonAddChips;
        break;
      case "Once":
        g = U.lang.TableButtonOnce;
        break;
      case "Twice":
        g = U.lang.TableButtonTwice;
        break;
      case "Off":
        g = "";
        bh.show(false);
        break;
    }
    bh.command = bi;
    bh.amount = bg;
    bh.setCaption(g);
  };
  an.prototype.setHint = function (bl) {
    var bv, bi, g, bj, bg, bk, bs, bt, bm, bo, bn, bu, br, bp, bq, bh;
    bv = this;
    bi = aq(bv.playerName[bl]);
    if (bi == "") {
      bm = U.lang.MouseOverSeat + " #" + bl;
    } else {
      g = bc(bv.playerRealName[bl]);
      bj = bc(bv.playerLocation[bl]);
      bg = bc(bv.playerTitle[bl]);
      bk = bc(bv.playerLevel[bl]);
      bs = bc(bv.playerCustom[bl]);
      bq = bv.playerGender[bl];
      bh = bv.playerBounty[bl];
      bt = bv.playerAway[bl];
      bm = U.lang.MouseOverSeat + " " + bl + ": " + bi;
      bo = g + " ";
      if (bj != "") {
        bo = bo + U.lang.MouseOverFrom + " " + bj;
      }
      bo = $.trim(bo);
      if (bo != "") {
        bm = bm + "  (" + bo + ")";
      }
      if (bq != "") {
        bm = bm + " - " + bq;
      }
      bm =
        bm +
        "<br>" +
        U.lang.MouseOverChips +
        ": " +
        B(bv.playerChips[bl]) +
        ",  " +
        U.lang.MouseOverTimeBank +
        ": " +
        bv.playerTime[bl];
      if (bt != "") {
        bm = bm + "<br>" + U.lang.MouseOverAway + ": " + bv.playerAway[bl];
      }
      bo = "";
      if (bg != "") {
        bo = U.lang.MouseOverTitle + ": " + bg;
      }
      if (bk != "") {
        if (bo != "") {
          bo = bo + ",  ";
        }
        bo = bo + U.lang.MouseOverLevel + ": " + bk;
      }
      if (bo != "") {
        bm = bm + "<br>" + bo;
      }
      if (bs != "" && U.customMouseOver) {
        bn = U.lang.AccountCustom1.split(":")[0];
        if (bn != "") {
          bn = bn + ": ";
        }
        bm = bm + "<br>" + bn + bs;
      }
      if (bh != 0) {
        bm = bm + "<br>" + U.lang.MouseOverBounty + ": " + bh;
      }
      br = bv.seat[bl].colorNum;
      bp = bv.seat[bl].noteText;
      if (br > 0 && U.notelabel[br] != "") {
        bu = "[" + U.notelabel[br] + "] ";
      } else {
        bu = "";
      }
      bu = bu + bp;
      if (bu != "") {
        bm =
          bm +
          "<br>" +
          U.lang.NoteNote +
          ": " +
          bc(bu).split("\n").join("<br>");
      }
    }
    bv.seat[bl].hint = bm;
  };
  an.prototype.setTableBanners = function (bh, bg, g) {
    this.$bannerleft.text(bh);
    this.$bannermiddle.text(bg);
    this.$bannerright2.text(g);
  };
  an.prototype.setTableCapBanner = function (g) {
    this.$bannerleft2.text(g);
  };
  an.prototype.setTableMessage = function (g) {
    this.$tablemessage.text(g);
  };
  an.prototype.setTitle = function (bg) {
    var g = this;
    g.title = bg;
    $(".title", g.$dialog).text(bg);
  };
  an.prototype.setupButtons = function (bl, bk, bj, bi, bh, bg, g, bn) {
    var bm = this;
    bm.button1.show(bl != "");
    bm.button2.show(bk != "");
    bm.button3.show(bj != "");
    bm.button4.show(bi != "");
    bm.setCommand(bm.button1, bl, bh);
    bm.setCommand(bm.button2, bk, bg);
    bm.setCommand(bm.button3, bj, g);
    bm.setCommand(bm.button4, bi, bn);
  };
  an.prototype.setupRaiseBar = function (bg, bm, bk, bl, g) {
    var bj, bh, bi;
    bj = this;
    bi = bj.$raiseBox.is(":visible");
    bj.minRaiseTo = bg;
    bj.raiseTo = bg;
    bj.maxRaiseTo = bm;
    bj.raiseInc = bk;
    bj.raiseMultiple = bl;
    bh = bj.minRaiseTo > 0 && bj.minRaiseTo < bj.maxRaiseTo && g == "";
    if (bh && bi) {
      bj.raiseInputChange();
      return;
    }
    bj.$raiseBox.toggle(bh);
    if (!bh) {
      return;
    }
    bj.raiseSlider.increment = bk / (bm - bg);
    bj.raiseSlider.setValue(0, true);
  };
  an.prototype.calcPostFlopRaise = function (bg, g, bh, bj) {
    var bi, bk;
    bi = this;
    bk = U.pset["PostFlopButton" + bg];
    switch (bk) {
      case 0:
        return bi.minRaiseTo;
        break;
      case 1:
        return aF((bj + bh) * 0.2 + bh + g, bi.minchip);
        break;
      case 2:
        return aF((bj + bh) * 0.25 + bh + g, bi.minchip);
        break;
      case 3:
        return aF((bj + bh) * 0.3 + bh + g, bi.minchip);
        break;
      case 4:
        return aF((bj + bh) / 3 + bh + g, bi.minchip);
        break;
      case 5:
        return aF((bj + bh) * 0.35 + bh + g, bi.minchip);
        break;
      case 6:
        return aF((bj + bh) * 0.4 + bh + g, bi.minchip);
        break;
      case 7:
        return aF((bj + bh) * 0.45 + bh + g, bi.minchip);
        break;
      case 8:
        return aF((bj + bh) * 0.5 + bh + g, bi.minchip);
        break;
      case 9:
        return aF((bj + bh) * 0.55 + bh + g, bi.minchip);
        break;
      case 10:
        return aF((bj + bh) * 0.6 + bh + g, bi.minchip);
        break;
      case 11:
        return aF((bj + bh) * 0.65 + bh + g, bi.minchip);
        break;
      case 12:
        return aF(((bj + bh) * 2) / 3 + bh + g, bi.minchip);
        break;
      case 13:
        return aF((bj + bh) * 0.7 + bh + g, bi.minchip);
        break;
      case 14:
        return aF((bj + bh) * 0.75 + bh + g, bi.minchip);
        break;
      case 15:
        return aF((bj + bh) * 0.8 + bh + g, bi.minchip);
        break;
      case 16:
        return bj + bh + bh + g;
        break;
      case 17:
        return bi.maxRaiseTo;
        break;
    }
  };
  an.prototype.calcPreFlopRaise = function (bg, bk, g, bh, bj) {
    var bi, bl;
    bi = this;
    bl = U.pset["PreFlopButton" + bg];
    switch (bl) {
      case 0:
        return bi.minRaiseTo;
        break;
      case 1:
        return aF(bk * 2.5, bi.minchip);
        break;
      case 2:
        return aF(bk * 3, bi.minchip);
        break;
      case 3:
        return aF(bk * 3.5, bi.minchip);
        break;
      case 4:
        return aF(bk * 4, bi.minchip);
        break;
      case 5:
        return aF(bk * 4.5, bi.minchip);
        break;
      case 6:
        return aF(bk * 5, bi.minchip);
        break;
      case 7:
        return aF(bk * 5.5, bi.minchip);
        break;
      case 8:
        return aF(bk * 6, bi.minchip);
        break;
      case 9:
        return bj + bh + bh + g;
        break;
      case 10:
        return bi.maxRaiseTo;
        break;
    }
  };
  an.prototype.setupRaiseButtons = function (bg, bi, g, bp, bk) {
    var bo, bm, bn, bl, bj, bh;
    bo = this;
    bm = bo.$raiseBox.is(":visible") && bi > 0;
    bo.betButton1.show(bm);
    bo.betButton2.show(bm);
    bo.betButton3.show(bm);
    bo.betButton4.show(bm);
    if (!bm) {
      return;
    }
    if (bg) {
      bn = bo.calcPreFlopRaise(1, bi, g, bp, bk);
      bl = bo.calcPreFlopRaise(2, bi, g, bp, bk);
      bj = bo.calcPreFlopRaise(3, bi, g, bp, bk);
      bh = bo.calcPreFlopRaise(4, bi, g, bp, bk);
      bo.setCommand(bo.betButton1, "Pre1", bn);
      bo.setCommand(bo.betButton2, "Pre2", bl);
      bo.setCommand(bo.betButton3, "Pre3", bj);
      bo.setCommand(bo.betButton4, "Pre4", bh);
    } else {
      bn = bo.calcPostFlopRaise(1, g, bp, bk);
      bl = bo.calcPostFlopRaise(2, g, bp, bk);
      bj = bo.calcPostFlopRaise(3, g, bp, bk);
      bh = bo.calcPostFlopRaise(4, g, bp, bk);
      bo.setCommand(bo.betButton1, "Post1", bn);
      bo.setCommand(bo.betButton2, "Post2", bl);
      bo.setCommand(bo.betButton3, "Post3", bj);
      bo.setCommand(bo.betButton4, "Post4", bh);
    }
    bo.betButton1.enable(bn >= bo.minRaiseTo);
    bo.betButton2.enable(bl >= bo.minRaiseTo);
    bo.betButton3.enable(bj >= bo.minRaiseTo);
    bo.betButton4.enable(bh >= bo.minRaiseTo);
  };
  an.prototype.showChat = function (g) {
    var bg = this;
    bg.$chatEditFrame.toggle(g);
    bg.$chatTextFrame.toggle(g);
    bg.$chatStatsIcon.toggle(g);
    if (g) {
      bg.chatText.updateScrollPosition();
      bg.straddle.$container.css({
        top: 345,
        fontSize: "0.85em",
      });
      bg.icmChop.$container.css({
        top: 365,
        fontSize: "0.85em",
      });
      bg.runTwice.$container.css({
        top: 365,
        fontSize: "0.85em",
      });
      bg.foldAnyBet.$container.css({
        top: 332,
        fontSize: "0.85em",
      });
      bg.outNextHand.$container.css({
        top: 352,
        fontSize: "0.85em",
      });
      bg.outNextBlind.$container.css({
        top: 372,
        fontSize: "0.85em",
      });
      bg.$tablemessage.css({
        left: 365,
        width: 320,
        fontSize: "1em",
      });
      bg.endBreak.$container.css({
        left: 475,
        top: 445,
        "font-size": "1em",
      });
      bg.$nextPanel.css({
        left: 365,
        top: 440,
        width: 320,
        height: 64,
        "font-size": "1em",
      });
      bg.nextMove1.$container.css({
        left: 5,
        top: 5,
      });
      bg.nextMove2.$container.css({
        left: 130,
        top: 5,
      });
      bg.nextMove3.$container.css({
        left: 5,
        top: 40,
      });
      bg.nextMove4.$container.css({
        left: 130,
        top: 40,
      });
      bg.betButton1.move(498, 418).resize(45, 20, 20).fontSize("1em");
      bg.betButton2.move(545, 418).resize(45, 20, 20).fontSize("1em");
      bg.betButton3.move(592, 418).resize(45, 20, 20).fontSize("1em");
      bg.betButton4.move(639, 418).resize(45, 20, 20).fontSize("1em");
      bg.$raiseBox.css({
        left: 498,
        top: 440,
        width: 185,
        height: 25,
      });
      if (U.params.gradients) {
        bg.$raiseBox.css("background-image", "url('Image?Name=Grad25')");
      }
      bg.raiseInput.$container.css({
        left: 2,
        top: 2,
        width: 73,
        height: 21,
        "font-size": "1em",
      });
      bg.raiseSlider.$container.css({
        left: 85,
        top: 2,
        width: 95,
        height: 21,
      });
      bg.raiseSlider.updateThumb();
      bg.timeBankBtn
        .move(365, 440)
        .resize(125, 27, 25)
        .lineHeight("25px")
        .fontSize("1em");
      bg.button1
        .move(365, 472)
        .resize(100, 32, 30)
        .lineHeight("14px")
        .fontSize("1em");
      bg.button2
        .move(475, 472)
        .resize(100, 32, 30)
        .lineHeight("14px")
        .fontSize("1em");
      bg.button3
        .move(585, 472)
        .resize(100, 32, 30)
        .lineHeight("14px")
        .fontSize("1em");
      bg.button4
        .move(585, 435)
        .resize(100, 32, 30)
        .lineHeight("14px")
        .fontSize("1em");
    } else {
      bg.straddle.$container.css({
        top: 335,
        fontSize: "1em",
      });
      bg.icmChop.$container.css({
        top: 365,
        fontSize: "1em",
      });
      bg.runTwice.$container.css({
        top: 365,
        fontSize: "1em",
      });
      bg.foldAnyBet.$container.css({
        top: 365,
        fontSize: "1em",
      });
      bg.outNextHand.$container.css({
        top: 395,
        fontSize: "1em",
      });
      bg.outNextBlind.$container.css({
        top: 425,
        fontSize: "1em",
      });
      bg.$tablemessage.css({
        left: 185,
        width: 500,
        fontSize: "1.2em",
      });
      bg.endBreak.$container.css({
        left: 355,
        top: 425,
        "font-size": "1.2em",
      });
      bg.$nextPanel.css({
        left: 185,
        top: 418,
        width: 500,
        height: 86,
        "font-size": "1.2em",
      });
      bg.nextMove1.$container.css({
        left: 5,
        top: 5,
      });
      bg.nextMove2.$container.css({
        left: 190,
        top: 5,
      });
      bg.nextMove3.$container.css({
        left: 5,
        top: 57,
      });
      bg.nextMove4.$container.css({
        left: 190,
        top: 57,
      });
      bg.betButton1.move(185, 418).resize(60, 37, 35).fontSize("1.2em");
      bg.betButton2.move(247, 418).resize(60, 37, 35).fontSize("1.2em");
      bg.betButton3.move(309, 418).resize(60, 37, 35).fontSize("1.2em");
      bg.betButton4.move(371, 418).resize(60, 37, 35).fontSize("1.2em");
      bg.$raiseBox.css({
        left: 435,
        top: 418,
        width: 248,
        height: 35,
      });
      if (U.params.gradients) {
        bg.$raiseBox.css("background-image", "url('Image?Name=Grad35')");
      }
      bg.raiseInput.$container.css({
        left: 2,
        top: 2,
        width: 83,
        height: 31,
        "font-size": "1.2em",
      });
      bg.raiseSlider.$container.css({
        left: 95,
        top: 2,
        width: 148,
        height: 31,
      });
      bg.raiseSlider.updateThumb();
      bg.timeBankBtn
        .move(15, 462)
        .resize(160, 42, 40)
        .lineHeight("20px")
        .fontSize("1.2em");
      bg.button1
        .move(185, 462)
        .resize(160, 42, 40)
        .lineHeight("20px")
        .fontSize("1.2em");
      bg.button2
        .move(355, 462)
        .resize(160, 42, 40)
        .lineHeight("20px")
        .fontSize("1.2em");
      bg.button3
        .move(525, 462)
        .resize(160, 42, 40)
        .lineHeight("20px")
        .fontSize("1.2em");
      bg.button4
        .move(525, 418)
        .resize(160, 37, 35)
        .lineHeight("20px")
        .fontSize("1.2em");
    }
  };
  an.prototype.showHoleCards = function () {
    var bh, bg, g;
    bh = this;
    bg = bh.getPlayerSeat();
    if (bg == 0 || bh.cardNum[1] == 0 || bh.ghosted) {
      return;
    }
    for (g = 1; g <= 7; g++) {
      bh.holeCard[g][bg] = bh.isFaceDown ? 53 : bh.cardNum[g];
      if (g <= bh.holeCards) {
        bh.card[g][bg].setCard(bh.holeCard[g][bg]);
        if (bh.cardNum[g] != 0) {
          bh.card[g][bg].show(true);
        }
      }
    }
    bh.foldAnyBetShow(bh.cardNum[1] > 0);
  };
  an.prototype.showInfo = function (bh) {
    var bm, bi, bn, g, bk, bg, bl, bj;
    bm = this;
    bi = bm.infoDialog;
    if (U.mobile) {
      bi.$dialog.css({
        width: 500,
        height: bm.$dialog.height(),
      });
      bi.show(true, true);
      bl = bi.scaleX;
      bj = bi.scaleY;
    } else {
      bn = bm.$dialog.position().top;
      g = bm.$dialog.position().left + bm.$dialog.outerWidth() + 5;
      bk = 350;
      bg = bm.$dialog.height();
      bi.$dialog.css({
        top: bn,
        left: g,
        width: bk,
        height: bg,
      });
      bi.$dialog.show().css("z-index", ++U.zTop);
      a2(bi);
      bl = 1;
      bj = 1;
    }
    bm.resizeInfo();
    bi.controls.infoTabs.setTab(bh);
    bi.controls.generalInfo.setScale(bj);
    bi.controls.statsInfo.setScale(bj);
    bi.controls.historySlider.setScale(bl);
    bi.controls.historyInfo.setScale(bj);
    bi.controls.chatInfoText.setScale(bj);
  };
  an.prototype.specialSeat = function (bg) {
    var bh, g;
    bh = this;
    bh.special = bg;
    for (g = 1; g <= bh.seats; g++) {
      bh.seat[g].special = g == bg;
      bh.seat[g].adjustSide();
    }
  };
  an.prototype.stackChips = function (bl, bh) {
    var bk, bg, bm, bj, g;
    bk = this;

    function bi(bo, bn) {
      while (Math.round(bh * 100) >= Math.round(bo * 100)) {
        bg.push(bn);
        bh = bh - bo;
      }
    }
    if (!bl) {
      return;
    }
    bl.empty();
    if (bh == 0) {
      return;
    }
    bg = [];
    bi(1000000000, 19);
    bi(500000000, 18);
    bi(100000000, 17);
    bi(25000000, 16);
    bi(5000000, 15);
    bi(1000000, 14);
    bi(500000, 13);
    bi(100000, 12);
    bi(25000, 11);
    bi(5000, 10);
    bi(1000, 9);
    bi(500, 8);
    bi(100, 7);
    bi(25, 6);
    bi(5, 5);
    bi(1, 4);
    bi(0.25, 3);
    bi(0.05, 2);
    bi(0.01, 1);
    bm = bg.length - 10;
    if (bm < 0) {
      bm = 0;
    }
    bj;
    g = 0;
    while (bm < bg.length) {
      bj = bg[bm] * -23 + "px 0px/auto 19px no-repeat";
      $("<div>")
        .addClass("chip")
        .css({
          bottom: g,
          background: "url('Image?Name=Chips&Crc=" + U.crc.image + "') " + bj,
        })
        .appendTo(bl);
      g = g + 3;
      bm++;
    }
    bl.show();
  };
  an.prototype.statsUpdate = function () {
    var bg, g;
    bg = this;
    if (U.mobile && U.tableCurrent == U.tables.indexOf(bg)) {
      g = bg.infoDialog.controls.statsInfo.getText();
      U.lobby.statsInfo.setText(g);
    }
  };
  an.prototype.straddleCheck = function (g) {
    this.straddle.setCheck(g);
  };
  an.prototype.straddleClick = function (bg) {
    var g, bh;
    g = this;
    g.straddleCheck(bg);
    bh = {
      Response: "Straddle",
    };
    bh.Table = g.id;
    bh.Type = g.type;
    if (bg) {
      bh.Checked = "Yes";
    } else {
      bh.Checked = "No";
    }
    j(bh);
    if (U.hasTouch == false) {
      g.chatFocus();
    }
  };
  an.prototype.straddleShow = function (g) {
    this.straddle.show(g);
  };
  an.prototype.straddleUpdate = function () {
    var bg, g;
    bg = this;
    g = U.lang.TableCaptionStraddle;
    if (bg.liveStraddle) {
      g = g + " *";
    }
    bg.straddle.setCaption(g);
  };
  an.prototype.toggleBoard = function () {
    var bg, bh;
    bh = this;
    for (bg = 1; bg <= 5; bg++) {
      if (bh.boardCard[bg] != 0) {
        bh.board[bg].setCard(53);
      }
      if (bh.boardCard2[bg] != 0) {
        bh.board2[bg].setCard(53);
      }
    }
    setTimeout(g, 100);

    function g() {
      for (bg = 1; bg <= 5; bg++) {
        if (bh.boardCard[bg] != 0) {
          bh.board[bg].setCard(bh.boardCard[bg]);
        }
        if (bh.boardCard2[bg] != 0) {
          bh.board2[bg].setCard(bh.boardCard2[bg]);
        }
      }
    }
  };
  an.prototype.toggleCards = function (bh) {
    var bg, g;
    bg = this;
    if (bg.getPlayerSeat() != bh || bg.cardNum[1] == 0 || bg.ghosted) {
      return;
    }
    bg.isFaceDown = !bg.isFaceDown;
    if (bg.isFaceDown) {
      for (g = 1; g <= 7; g++) {
        if (bg.holeCards == 7 && g > 2 && g < 7) {
          bg.holeCard[g][bh] = bg.cardNum[g];
        } else {
          bg.holeCard[g][bh] = 53;
        }
      }
    } else {
      for (g = 1; g <= 7; g++) {
        bg.holeCard[g][bh] = bg.cardNum[g];
      }
    }
    for (g = 1; g <= bg.holeCards; g++) {
      bg.card[g][bh].setCard(bg.holeCard[g][bh]);
      if (bg.holeCards != 7 || g < 3 || g == 7) {
        bg.card[g][bh].select(false);
      }
    }
    bg.updateHandHelper();
  };
  an.prototype.toggleSelect = function (bh, bg) {
    var g;
    g = this;
    if (
      bh == 0 ||
      bg == 0 ||
      g.getPlayerSeat() != bh ||
      g.cardNum[bg] == 0 ||
      g.ghosted ||
      g.isFaceDown
    ) {
      return;
    }
    if (g.holeCards == 7 && bg > 2 && bg < 7) {
      return;
    }
    g.card[bg][bh].select(!g.card[bg][bh].isSelected());
  };
  an.prototype.toggleStats = function () {
    var g, bg, bh;
    g = this;
    g.statsMode = !g.statsMode;
    if (g.statsMode) {
      g.$statsHeader.show();
      g.statsText.show(true);
      g.statsText.updateScrollPosition();
      bg = 0;
      bh = U.lang.TableCaptionShowChat;
    } else {
      g.$statsHeader.hide();
      g.statsText.show(false);
      bg = -20;
      bh = U.lang.TableCaptionShowStats;
    }
    g.$chatStatsIcon.css(
      "background",
      "url('Image?Name=ChatStats') " + bg + "px 0px/auto 20px no-repeat"
    );
    g.$chatStatsIconHint.text(bh);
  };
  an.prototype.totalHintOff = function () {
    this.$totalTip.hide();
  };
  an.prototype.totalHintOn = function (g, bm) {
    var bi, bj, bl, bk, bh, bg;
    bi = this;
    if (bi.$totalTip.html() == "") {
      return;
    }
    bh = bi.dialog.scaleX;
    bg = bi.dialog.scaleY;
    bj = 0;
    bl = (g - bi.$totalTip.parent().offset().left) / bh;
    bk = (bm + 20 - bi.$totalTip.parent().offset().top) / bg;
    bi.$totalTip
      .css({
        left: bl - bj,
        top: bk,
      })
      .show()
      .redraw();
  };
  an.prototype.totalPlateSetup = function () {
    var bh, bg, g, bi;
    bh = this;
    bh.$totalPlate = $(".totalplate", bh.$content);
    bh.$totalTip = $("<div>").appendTo(bh.$content).addClass("tooltip").hide();
    if (bh.type == "T") {
      return;
    }
    bh.$totalPlate.hover(
      function (bj) {
        bh.totalHintOn(bj.pageX, bj.pageY);
      },
      function () {
        bh.totalHintOff();
      }
    );
    bi = false;
    bh.$totalPlate.on("touchstart mousedown", function (bj) {
      if (ai(bj)) {
        return;
      }
      if (bj.type == "touchstart") {
        bg = bj.originalEvent.touches[0];
        g = setTimeout(function () {
          bh.totalHintOn(bg.pageX, bg.pageY);
        }, 500);
      }
      bi = true;
      bj.preventDefault();
    });
    bh.$totalPlate.on("touchend mouseup", function (bj) {
      if (r(bj)) {
        return;
      }
      clearTimeout(g);
      bh.totalHintOff();
      bi = false;
      bj.preventDefault();
    });
  };
  an.prototype.tourneyChopCreate = function () {
    var bg, g, bh;
    bg = this;
    g = $(".tourneychop")
      .clone()
      .removeClass("tourneychop")
      .appendTo(U.mobile ? U.lobby.$openTableBox : U.$webClient);
    bh = new Y(g, bg, {
      title: bg.id,
    });
    $(".tc_text", g).text(U.lang.ChopCaption);
    bh.data = {};
    bh.data.Chop = {};
    bh.data.Chop.cols = 5;
    bh.data.Chop.widths = [0.15, 0.2, 0.25, 0.2, 0.2];
    bh.data.Chop.headers = [
      U.lang.ChopPlace,
      U.lang.ChopPayout,
      U.lang.ChopPlayer,
      U.lang.ChopStack,
      U.lang.ChopChop,
    ];
    bh.data.Chop.fields = ["place", "payout", "player", "stack", "chop"];
    bh.data.Chop.fieldsShow = ["place", "payout", "player", "stack", "chop"];
    bh.data.Chop.fieldsSort = ["place", "payout", "player", "stack", "chop"];
    bh.data.Chop.fieldsNum = [true, true, false, true, true];
    bh.data.Chop.fieldsRight = [true, true, false, true, true];
    bh.data.Chop.fieldsHTML = [false, false, false, false, false];
    bh.data.Chop.sortCol = 0;
    bh.data.Chop.sortAscend = true;
    bh.data.Chop.sortable = false;
    bh.data.Chop.rows = [];
    bh.data.Chop.rowHeight = U.mobile ? 24 : 16;
    bh.controls.grid = new ay($(".tc_grid", g), bh.data.Chop);
    new A($(".ok", g), U.lang.ChopAccept, 25, function () {
      bg.tourneyChopSelect("Accept");
    });
    new A($(".cancel", g), U.lang.ChopDecline, 25, function () {
      bg.tourneyChopSelect("Decline");
    });
    bg.tourneyChop = bh;
  };
  an.prototype.tourneyChopSelect = function (bh) {
    var g, bg;
    g = this;
    g.tourneyChop.close();
    bg = {
      Response: "ICMChopSelect",
    };
    bg.Table = g.id;
    bg.Type = "T";
    bg.Select = bh;
    j(bg);
  };
  an.prototype.tourneyChopShow = function (g) {
    var bg;
    bg = this;
    if (!g) {
      bg.tourneyChop.close();
    } else {
      bg.tourneyChop.show(true, U.mobile);
      av("beep");
      bg.tourneyChop.controls.grid.resize();
    }
  };
  an.prototype.twiceSeats = function (bg) {
    var bh, g;
    bh = this;
    for (g = 1; g <= bh.seats; g++) {
      bh.twice[g] = bg[g - 1] == "Yes";
      if (bh.twice[g] != bh.seat[g].twice) {
        bh.seat[g].twice = bh.twice[g];
        bh.seat[g].twiceIcon(bh.twice[g]);
        bh.seat[g].adjustSide();
      }
    }
  };
  an.prototype.updateHandHelper = function () {
    var bh, bg, g;
    bh = this;
    bg = bh.getPlayerSeat();
    if (bg == 0) {
      return;
    }
    if (U.pset.HandHelper) {
      g = bh.handHelper;
    } else {
      g = "";
    }
    if (bh.card[1][bg].isVisible() && bh.isFaceDown) {
      g = U.lang.TableCaptionFlipCards;
    }
    bh.setTableMessage(g);
  };
  an.prototype.updateLevelTimer = function (bk, bi, bh) {
    var bg = this,
      bj;

    function g() {
      var bm, bn, bp, bl, bo;
      bm = Math.floor(bj / 3600);
      bn = Math.floor((bj / 60) % 60);
      bn = bn < 10 ? "0" + bn : bn;
      bp = Math.floor(bj % 60);
      bp = bp < 10 ? "0" + bp : bp;
      if (bm > 0) {
        bo = bm + ":";
      } else {
        bo = "";
      }
      bo = bo + bn + ":" + bp;
      bl = U.lang.GameLevelTimer.split("%1%").join(bk);
      bl = bl.split("%2%").join(bo);
      return bl;
    }
    clearInterval(bg.levelTimer);
    if (bk == 0) {
      bg.$bannerright.text("");
      return;
    }
    bj = bi;
    bg.$bannerright.text(g());
    if (!bh) {
      bg.levelTimer = setInterval(function () {
        if (--bj < 0) {
          clearInterval(bg.levelTimer);
        } else {
          bg.$bannerright.text(g());
        }
      }, 1000);
    }
  };
  an.prototype.updateTotal = function () {
    var g = this;
    if (g.totalPot == "") {
      g.$totalPlate.html("").hide();
    } else {
      g.$totalPlate
        .html(U.lang.TableCaptionTotal + "<br>" + B(g.totalPot))
        .show();
      if (g.totalPot == 0) {
        g.totalRake = 0;
      }
      g.$totalTip.html(
        U.lang.TableCaptionRake.split("%1%").join(B(g.totalRake))
      );
    }
  };

  function Y(bi, bh, g) {
    var bg = this;
    bg.$dialog = bi;
    bg.parent = bh;
    bg.shadeparent = g.shadeparent;
    bg.title = aq(g.title);
    bg.minwidth = au(g.minwidth);
    bg.minheight = au(g.minheight);
    bg.resize = g.resize;
    bg.rmode = "auto";
    bg.onresize = g.onresize;
    bg.onresized = g.onresized;
    bg.removeonclose = g.removeonclose == true;
    bg.modal = false;
    bg.$dialog.css({
      color: U.color.WindowText,
      "background-color": U.color.Window,
    });
    $(".header > .title", bg.$dialog)
      .css("color", U.color.WindowText)
      .text(bg.title);
    $(".dialogcontent, .infocontent", bg.$dialog).css({
      color: U.color.ListText,
      "background-color": U.color.List,
    });
    $("<div>").addClass("shader").appendTo(bg.$dialog);
    bg.dragging = false;
    bg.resizing = false;
    bg.ofx = 0;
    bg.ofy = 0;
    bg.xmax = 0;
    bg.ymax = 0;
    bg.rxmin = 0;
    bg.rymin = 0;
    bg.rxmax = 0;
    bg.rymax = 0;
    bg.xdown = 0;
    bg.ydown = 0;
    bg.wdialog = 0;
    bg.hdialog = 0;
    bg.scaleX = 1;
    bg.scaleY = 1;
    bg.controls = {};
    bg.data = {};
    bg.mouseEvents();
  }
  Y.prototype.close = function () {
    var g, bg;
    g = this;
    if (g.isVisible() == false) {
      return;
    }
    $("button", g.$dialog).first().focus();
    g.$dialog.hide();
    if (g.removeonclose) {
      g.$dialog.remove();
    }
    if (g.parent == null || g.modal == false) {
      return;
    }
    g.parent.modalList.pop();
    bg = g.parent.modalList.length;
    if (bg > 0) {
      g.parent.modalList[bg - 1].shadeModal(false);
    }
  };
  Y.prototype.getCursor = function (bj) {
    var bg, bi, g, bh, bk;
    bg = this;
    bk = "auto";
    if (bg.resize && !U.mobile) {
      bi = bg.$dialog.offset();
      g = bg.$dialog.width();
      bh = bg.$dialog.height();
      if (bj.pageX - bi.left < 6) {
        if (bj.pageY - bi.top < 6) {
          bk = "nw-resize";
        } else {
          if (bi.top + bh - bj.pageY < 6) {
            bk = "sw-resize";
          } else {
            bk = "w-resize";
          }
        }
      } else {
        if (bi.left + g - bj.pageX < 6) {
          if (bj.pageY - bi.top < 6) {
            bk = "ne-resize";
          } else {
            if (bi.top + bh - bj.pageY < 6) {
              bk = "se-resize";
            } else {
              bk = "e-resize";
            }
          }
        } else {
          if (bj.pageY - bi.top < 6) {
            bk = "n-resize";
          } else {
            if (bi.top + bh - bj.pageY < 6) {
              bk = "s-resize";
            }
          }
        }
      }
    }
    return bk;
  };
  Y.prototype.isVisible = function () {
    return this.$dialog.is(":visible");
  };
  Y.prototype.mouseEvents = function () {
    var g;
    g = this;
    $(".menu", g.$dialog).on("touchstart mousedown", function (bg) {
      if (ai(bg) || r(bg)) {
        return;
      }
      if (U.doc.$menu) {
        U.doc.$menu.hide();
      }
      if (U.doc.$menu && U.doc.$menu.parent().get(0) == this) {
        U.doc.$menu = null;
      } else {
        U.doc.$menu = $("ul", $(this));
      }
    });
    $(".menu", g.$dialog).on("touchend mouseup", function (bg) {
      if (r(bg)) {
        return;
      }
      if (U.doc.debug) {
        U.doc.debug = false;
        clearTimeout(U.debugTimer);
      }
      if (U.doc.$menu) {
        U.doc.$menu.show();
      }
      return false;
    });
    $(".header", g.$dialog).on("touchstart mousedown", function (bg) {
      if (U.mobile || ai(bg) || r(bg)) {
        return;
      }
      g.dragging = true;
      U.doc.dialog = g;
    });
    g.$dialog.on("touchstart mousedown", function (bo) {
      if (U.mobile || ai(bo) || r(bo)) {
        return;
      }
      var bn, bg, bp, bj, bl, bi, bk, bm;
      bj = $(".shader", g.$dialog).is(":visible");
      if (g.$dialog.css("z-index") < U.zTop) {
        if (g.modal) {
          for (bn = 0; bn < g.parent.modalList.length; bn++) {
            g.parent.modalList[bn].$dialog.css("z-index", ++U.zTop);
          }
          a2(g.parent.dialog);
        } else {
          if (bj) {
            for (bn = 0; bn < g.shadeparent.modalList.length; bn++) {
              g.shadeparent.modalList[bn].$dialog.css("z-index", ++U.zTop);
            }
            a2(g.shadeparent.dialog);
          } else {
            g.$dialog.css("z-index", ++U.zTop);
            a2(g);
          }
        }
      }
      if (bj) {
        return false;
      }
      bg = bo.type == "touchstart" ? bo.originalEvent.touches[0] : bo;
      g.xdown = bg.pageX;
      g.ydown = bg.pageY;
      g.wdialog = g.$dialog.width();
      g.hdialog = g.$dialog.height();
      bp = g.$dialog.offset();
      g.ofx = g.xdown - bp.left;
      g.ofy = g.ydown - bp.top;
      g.xmax = U.$webClient.width() - g.wdialog - 5;
      g.ymax = U.$webClient.height() - g.hdialog - 5;
      g.rmode = g.getCursor(bg);
      if (g.rmode != "auto") {
        g.dragging = false;
        g.resizing = true;
        bl = U.$webLeft.is(":visible") ? U.$webLeft.width() : 0;
        bi = U.$webTop.is(":visible") ? U.$webTop.height() : 0;
        bk = U.$webRight.is(":visible") ? U.$webRight.width() : 0;
        bm = U.$webBottom.is(":visible") ? U.$webBottom.height() : 0;
        g.rxmin = bl;
        g.rymin = bi;
        g.rxmax = $(document).width() - bk - 5;
        g.rymax = $(document).height() - bm - 5;
        U.doc.dialog = g;
      }
    });
    if (g.resize) {
      g.$dialog.mousemove(function (bg) {
        if (!g.dragging && !g.resizing) {
          g.$dialog.css("cursor", g.getCursor(bg));
        }
      });
    }
  };
  Y.prototype.offDialog = function () {
    var g, bg;
    g = this;
    bg = g.resizing;
    g.resizing = false;
    g.rmode = "auto";
    g.dragging = false;
    U.doc.dialog = null;
    if (bg && g.onresized) {
      g.onresized();
    }
  };
  Y.prototype.onDialog = function (bi) {
    var bj, g, bl, bh, bg, bk, bn, bm;
    bj = this;
    g = bi.type == "touchmove" ? bi.originalEvent.touches[0] : bi;
    if (bj.resizing) {
      if (g.pageX < bj.rxmin || g.pageY < bj.rymin) {
        return;
      }
      if (g.pageX > bj.rxmax || g.pageY > bj.rymax) {
        return;
      }
      bn = g.pageX - bj.xdown;
      bm = g.pageY - bj.ydown;
      if (
        bj.rmode == "e-resize" ||
        bj.rmode == "ne-resize" ||
        bj.rmode == "se-resize"
      ) {
        bl = bj.wdialog + bn;
        if (bl < bj.minwidth) {
          bl = bj.minwidth;
        }
        bj.$dialog.width(bl);
      }
      if (
        bj.rmode == "s-resize" ||
        bj.rmode == "sw-resize" ||
        bj.rmode == "se-resize"
      ) {
        bh = bj.hdialog + bm;
        if (bh < bj.minheight) {
          bh = bj.minheight;
        }
        bj.$dialog.height(bh);
      }
      if (
        bj.rmode == "w-resize" ||
        bj.rmode == "nw-resize" ||
        bj.rmode == "sw-resize"
      ) {
        bl = bj.wdialog - bn;
        if (bl >= bj.minwidth) {
          bj.$dialog.css({
            left: g.pageX,
            width: bl,
          });
        }
      }
      if (
        bj.rmode == "n-resize" ||
        bj.rmode == "nw-resize" ||
        bj.rmode == "ne-resize"
      ) {
        bh = bj.hdialog - bm;
        if (bh >= bj.minheight) {
          bj.$dialog.css({
            top: g.pageY,
            height: bh,
          });
        }
      }
      if (bj.onresize) {
        bj.onresize(bj.rmode);
      }
    } else {
      if (bj.dragging) {
        bl = U.$webLeft.is(":visible") ? U.$webLeft.width() : 0;
        bh = U.$webTop.is(":visible") ? U.$webTop.height() : 0;
        bg = g.pageX - bl - bj.ofx;
        bk = g.pageY - bh - bj.ofy;
        if (bg < 0) {
          bg = 0;
        }
        if (bg > bj.xmax) {
          bg = bj.xmax;
        }
        if (bk < 0) {
          bk = 0;
        }
        if (bk > bj.ymax) {
          bk = bj.ymax;
        }
        bj.$dialog.css({
          left: bg,
          top: bk,
        });
      }
    }
  };
  Y.prototype.setModal = function () {
    var g, bg;
    g = this;
    bg = g.parent.modalList.length;
    if (bg > 0) {
      g.parent.modalList[bg - 1].shadeModal(true);
    }
    g.parent.modalList.push(g);
  };
  Y.prototype.setTitle = function (bg) {
    var g = this;
    g.title = bg;
    $(".header > .title", g.$dialog).text(g.title);
  };
  Y.prototype.shadeModal = function (g) {
    var bg = this;
    $(".shader", bg.$dialog).toggle(g);
    $("input, button", bg.$dialog).attr("tabindex", g ? -1 : 1);
  };
  Y.prototype.show = function (bo, bp) {
    var bm, bg, br, bk, g, bq, bl, bh, bn, bt, bi, bs, bj;
    bm = this;
    $(".resize", bm.$dialog).toggle(!U.mobile);
    if (bm.isVisible() == false) {
      bm.modal = bo;
      if (bm.modal) {
        bm.setModal();
      }
    }
    bg = bm.$dialog.width();
    br = bm.$dialog.height();
    if (bp) {
      bi = window.innerWidth / U.viewPort;
      if (bm.parent) {
        bj = bm.$dialog.parents().is(U.lobby.$dialog);
        if (bj) {
          bm.scaleX = bi;
          bm.scaleY = bi;
          bi = 1;
        }
        bq = bm.parent.$dialog.width();
        bl = bm.parent.$dialog.height();
      } else {
        bj = false;
        bq = U.lobby.$dialog.width();
        bl = U.lobby.$dialog.height();
      }
      if (bq / bl > bg / br) {
        bt = bl / br;
      } else {
        bt = bq / bg;
      }
      if (bt > 1.5) {
        bt = 1.5;
      }
      bs = bt * bi;
      bn = (bl * bi - br * bs) / 2;
      if (bn > 5) {
        bn = 5;
      }
      bh = (bq * bi - bg * bs) / 2;
      bm.$dialog.show().css({
        "z-index": ++U.zTop,
        left: bh,
        top: bn,
        "transform-origin": "left top",
        transform: "scale(" + bs + ")",
      });
      if (!bj) {
        bm.scaleX = bs;
        bm.scaleY = bs;
      }
    } else {
      bk = U.$webClient.width();
      g = U.$webClient.height();
      if (bg > bk) {
        bg = bk;
        bm.$dialog.css({
          left: 0,
          width: bk,
        });
      }
      if (bm.minwidth > bk) {
        bm.minwidth = bk;
      }
      if (br > g) {
        br = g;
        bm.$dialog.css({
          top: 0,
          height: g,
        });
      }
      if (bm.minheight > g) {
        bm.minheight = g;
      }
      if (bm.parent == null) {
        if (bm.scaleX == 1) {
          bm.$dialog.show().css({
            "z-index": ++U.zTop,
          });
        } else {
          bm.$dialog.show().css({
            "z-index": ++U.zTop,
            transform: "scale(1)",
          });
          bm.scaleX = 1;
          bm.scaleY = 1;
        }
      } else {
        bh =
          bm.parent.$dialog.position().left +
          (bm.parent.$dialog.width() - bg) / 2;
        if (bh < 0) {
          bh = 0;
        }
        bn =
          bm.parent.$dialog.position().top +
          (bm.parent.$dialog.height() - br) / 2;
        if (bn < 0) {
          bn = 0;
        }
        if (bm.scaleX == 1) {
          bm.$dialog.show().css({
            "z-index": ++U.zTop,
            left: bh,
            top: bn,
          });
        } else {
          bm.$dialog.show().css({
            "z-index": ++U.zTop,
            left: bh,
            top: bn,
            transform: "scale(1)",
          });
          bm.scaleX = 1;
          bm.scaleY = 1;
        }
      }
    }
  };
  Y.prototype.showMessage = function (bg, bo, bp) {
    var bl, g, bq, bk, bh, bm, bi, bs, bn, bj, br;
    bl = this;
    if (bl.isVisible() == false) {
      bl.modal = bo;
      if (bl.modal) {
        bl.setModal();
      }
    }
    g = 300;
    bq = 130;
    $(".msgtext", bl.$dialog).html("");
    bl.$dialog.show().css({
      width: g,
      height: bq,
      "z-index": ++U.zTop,
    });
    $(".msgtext", bl.$dialog).html(bg);
    bk = $(".msgtext", bl.$dialog).height();
    bq = bq + bk;
    bl.$dialog.css("height", bq);
    if (bp) {
      if (bl.parent.$dialog.parent().is(U.lobby.$openTableBox)) {
        bi = 1;
      } else {
        bi = window.innerWidth / U.viewPort;
      }
      bn = bl.parent.$dialog.width();
      bj = bl.parent.$dialog.height();
      if (bn / bj > g / bq) {
        br = bj / bq;
      } else {
        br = bn / g;
      }
      if (br > 1.5) {
        br = 1.5;
      }
      bs = br * bi;
      bm = (bj * bi - bq * bs) / 2;
      if (bm > 5) {
        bm = 5;
      }
      bh = (bn * bi - g * bs) / 2;
      bl.$dialog.show().css({
        left: bh,
        top: bm,
        "transform-origin": "left top",
        transform: "scale(" + bs + ")",
      });
      bl.scaleX = bs;
      bl.scaleY = bs;
    } else {
      bh =
        bl.parent.$dialog.position().left + (bl.parent.$dialog.width() - g) / 2;
      if (bh < 0) {
        bh = 0;
      }
      bm =
        bl.parent.$dialog.position().top +
        (bl.parent.$dialog.height() - bq) / 2;
      if (bm < 0) {
        bm = 0;
      }
      bl.$dialog.css({
        left: bh,
        top: bm,
        "transform-origin": "left top",
        transform: "scale(1)",
      });
      bl.scaleX = 1;
      bl.scaleY = 1;
    }
  };

  function ak(bg, bh) {
    var g, bi;
    g = $(".colorlabel")
      .clone()
      .removeClass("colorlabel")
      .appendTo(U.mobile && bh ? U.lobby.$openTableBox : U.$webClient);
    bi = new Y(g, bg, {
      title: U.lang.NoteEditLabel,
    });
    $(".cl_label", g).text(U.lang.NoteLabel + ":");
    bi.controls.labelInput = new ax($(".cl_input", g), {
      onEnterKey: function () {
        aL(bg);
      },
      border: true,
    });
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      aL(bg);
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bi.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bi.close();
      return false;
    });
    bg.colorLabel = bi;
  }

  function aL(g) {
    var bi, bg, bh;
    bi = g.colorLabel;
    bh = bi.data.labelNum;
    bg = bi.controls.labelInput.getText().trim().substring(0, 20);
    U.notelabel[bh] = bg;
    g.playerNote.data.Colors.rows[bh].label = bg;
    g.playerNote.controls.colorGrid.update();
    aE();
    j({
      Response: "PlayerNote",
      Subject: "*labels*",
      Color: 0,
      Chat: "Yes",
      Note: JSON.stringify(U.notelabel),
    });
    bi.close();
  }

  function K(g, bg) {
    var bh;
    bh = g.colorLabel;
    bh.data.labelNum = bg;
    bh.controls.labelInput.setText(U.notelabel[bg]);
    bh.show(true, U.mobile);
    if (U.hasTouch == false) {
      bh.controls.labelInput.setFocus();
    }
  }

  function u(bg, bi) {
    var g, bj, bh;
    g = $(".playernote")
      .clone()
      .removeClass("playernote")
      .appendTo(U.mobile && bi ? U.lobby.$openTableBox : U.$webClient);
    bj = new Y(g, bg, {});
    bj.controls.BlockChat = new E($(".pn_blockchat", g), U.lang.NoteBlockChat);
    bj.controls.NoteSize = $(".pn_size", g);
    bj.data.Colors = {};
    bj.data.Colors.cols = 2;
    bj.data.Colors.widths = [0.3, 0.7];
    bj.data.Colors.headers = [U.lang.NoteColor, U.lang.NoteLabel];
    bj.data.Colors.fields = ["color", "label"];
    bj.data.Colors.fieldsShow = ["color", "label"];
    bj.data.Colors.fieldsSort = ["color", "label"];
    bj.data.Colors.fieldsNum = [false, false];
    bj.data.Colors.fieldsRight = [false, false];
    bj.data.Colors.fieldsHTML = [true, false];
    bj.data.Colors.sortCol = 0;
    bj.data.Colors.sortAscend = true;
    bj.data.Colors.sortable = false;
    bj.data.Colors.rows = [];
    bj.data.Colors.rows[0] = {
      color: U.lang.NoteNone,
      label: "",
    };
    for (bh = 1; bh <= 10; bh++) {
      bj.data.Colors.rows[bh] = {
        color: W(bh),
        label: "",
      };
    }
    bj.data.Colors.rowHeight = 16;
    $(".pn_color", g).text(U.lang.NoteColor);
    bj.controls.colorGrid = new ay(
      $(".pn_colorgrid", g),
      bj.data.Colors,
      null,
      function () {
        aZ(bg);
      },
      null
    );
    $(".pn_note", g).text(U.lang.NoteNote);
    bj.controls.NoteText = new ab($(".pn_memo", g), {
      border: true,
      maxlength: 250,
      onInput: function () {
        aD(bg);
      },
    });
    new A($(".pn_labelbtn", g), U.lang.NoteEditLabel, 20, function () {
      aZ(bg);
    });
    new A($(".ok", g), U.lang.DialogOK, 25, function () {
      a(bg);
    });
    new A($(".cancel", g), U.lang.DialogCancel, 25, function () {
      bj.close();
    });
    $(".closebtn", g).on("touchstart mousedown", function () {
      bj.close();
      return false;
    });
    bg.playerNote = bj;
  }

  function aD(g) {
    var bg, bh;
    bg = g.playerNote;
    bh = bg.controls.NoteText.getText().length;
    bg.controls.NoteSize.text(bh + "/250");
  }

  function aZ(g) {
    var bh, bg;
    bh = g.playerNote;
    bg = bh.controls.colorGrid.selrow;
    if (bg > 0) {
      K(g, bg);
    }
  }

  function a(bg) {
    var bj, bi, bh, bn, bk, bm, bl, g;
    bj = bg.playerNote;
    bm = bj.data.player;
    bn = bj.controls.BlockChat.isChecked() ? "No" : "Yes";
    if (bn == "No" && bm == U.loginData.player) {
      bg.messageShow(U.lang.MessageChatBlock);
      return;
    }
    bh = bj.controls.colorGrid.selrow;
    bk = bj.controls.NoteText.getText().trim().substring(0, 250);
    if (
      bn == bj.data.oldChat &&
      bh == bj.data.oldColor &&
      bk == bj.data.oldNote
    ) {
      bj.close();
      return;
    }
    bl = {};
    bl.player = bm;
    bl.colorNum = bh;
    bl.color = W(bh);
    bl.noteText = bk;
    bl.note = bk == "" ? "" : "&#10004;";
    bl.chatBool = bn;
    bl.block = bn == "Yes" ? "" : "&#10004;";
    g = U.lobby.noteList.controls.noteGrid;
    bi = g.getRow(bm, "player");
    if (bi >= 0) {
      U.data.Notes.rows[bi] = bl;
      if ((bi = g.selrow)) {
        U.lobby.noteListSelect(bi);
      }
      g.sort();
    } else {
      U.data.Notes.rows.push(bl);
      g.sort();
    }
    aI(bm, bk, bh, bn);
    j({
      Response: "PlayerNote",
      Subject: bm,
      Color: bh,
      Chat: bn,
      Note: bk,
    });
    bj.close();
  }

  function ac(g, bh) {
    var bj, bg, bi;
    bj = g.playerNote;
    bj.data.player = bh;
    bj.setTitle(bh);
    for (bg = 0; bg <= 10; bg++) {
      bj.data.Colors.rows[bg].label = U.notelabel[bg];
    }
    bg = U.lobby.noteList.controls.noteGrid.getRow(bh, "player");
    if (bg >= 0) {
      bi = U.data.Notes.rows[bg];
      bj.data.oldColor = bi.colorNum;
      bj.data.oldChat = bi.chatBool;
      bj.data.oldNote = bi.noteText;
    } else {
      bj.data.oldColor = 0;
      bj.data.oldChat = "Yes";
      bj.data.oldNote = "";
    }
    bj.controls.colorGrid.selrow = bj.data.oldColor;
    bj.controls.BlockChat.setCheck(bj.data.oldChat == "No");
    bj.controls.NoteText.setText(bj.data.oldNote);
    aD(g);
    bj.show(true, U.mobile);
    bj.controls.colorGrid.setScale(bj.scaleX);
    bj.controls.colorGrid.resize();
  }

  function bf(bs) {
    function bo(bt, bw) {
      var bv, bu;
      bv = (bt & 65535) + (bw & 65535);
      bu = (bt >> 16) + (bw >> 16) + (bv >> 16);
      return (bu << 16) | (bv & 65535);
    }

    function bk(bu, bt) {
      return (bu >>> bt) | (bu << (32 - bt));
    }

    function bl(bu, bt) {
      return bu >>> bt;
    }

    function g(bt, bv, bu) {
      return (bt & bv) ^ (~bt & bu);
    }

    function bj(bt, bv, bu) {
      return (bt & bv) ^ (bt & bu) ^ (bv & bu);
    }

    function bm(bt) {
      return bk(bt, 2) ^ bk(bt, 13) ^ bk(bt, 22);
    }

    function bh(bt) {
      return bk(bt, 6) ^ bk(bt, 11) ^ bk(bt, 25);
    }

    function br(bt) {
      return bk(bt, 7) ^ bk(bt, 18) ^ bl(bt, 3);
    }

    function bp(bt) {
      return bk(bt, 17) ^ bk(bt, 19) ^ bl(bt, 10);
    }

    function bi(bu, bv) {
      var bw, bH, bt, bJ, bI, bG, bF, bD, bB, bA, bz, by, bx, bE, bC;
      bw = [
        1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
        528734635, 1541459225,
      ];
      bH = [
        1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
        2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
        1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
        264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
        2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
        113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
        1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
        3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
        430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
        1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
        2428436474, 2756734187, 3204031479, 3329325298,
      ];
      bt = new Array(64);
      bu[bv >> 5] |= 128 << (24 - (bv % 32));
      bu[(((bv + 64) >> 9) << 4) + 15] = bv;
      for (by = 0; by < bu.length; by += 16) {
        bJ = bw[0];
        bI = bw[1];
        bG = bw[2];
        bF = bw[3];
        bD = bw[4];
        bB = bw[5];
        bA = bw[6];
        bz = bw[7];
        for (bx = 0; bx < 64; bx++) {
          if (bx < 16) {
            bt[bx] = bu[bx + by];
          } else {
            bt[bx] = bo(
              bo(bo(bp(bt[bx - 2]), bt[bx - 7]), br(bt[bx - 15])),
              bt[bx - 16]
            );
          }
          bE = bo(bo(bo(bo(bz, bh(bD)), g(bD, bB, bA)), bH[bx]), bt[bx]);
          bC = bo(bm(bJ), bj(bJ, bI, bG));
          bz = bA;
          bA = bB;
          bB = bD;
          bD = bo(bF, bE);
          bF = bG;
          bG = bI;
          bI = bJ;
          bJ = bo(bE, bC);
        }
        bw[0] = bo(bJ, bw[0]);
        bw[1] = bo(bI, bw[1]);
        bw[2] = bo(bG, bw[2]);
        bw[3] = bo(bF, bw[3]);
        bw[4] = bo(bD, bw[4]);
        bw[5] = bo(bB, bw[5]);
        bw[6] = bo(bA, bw[6]);
        bw[7] = bo(bz, bw[7]);
      }
      return bw;
    }

    function bg(bv) {
      var bt, bu, bw;
      bt = "";
      for (bu = 0; bu < bv.length; bu++) {
        bw = bv.charCodeAt(bu);
        if (bw < 128) {
          bt += String.fromCharCode(bw);
        } else {
          if (bw < 2048) {
            bt += String.fromCharCode((bw >> 6) | 192);
            bt += String.fromCharCode((bw & 63) | 128);
          } else {
            bt += String.fromCharCode((bw >> 12) | 224);
            bt += String.fromCharCode(((bw >> 6) & 63) | 128);
            bt += String.fromCharCode((bw & 63) | 128);
          }
        }
      }
      return bt;
    }

    function bn(bw) {
      var bv, bt, bu;
      bv = new Array();
      bt = 255;
      for (bu = 0; bu < bw.length * 8; bu += 8) {
        bv[bu >> 5] |= (bw.charCodeAt(bu / 8) & bt) << (24 - (bu % 32));
      }
      return bv;
    }

    function bq(bv) {
      var bu, bw, bt;
      bu = "0123456789ABCDEF";
      bw = "";
      for (bt = 0; bt < bv.length * 4; bt++) {
        bw +=
          bu.charAt((bv[bt >> 2] >> ((3 - (bt % 4)) * 8 + 4)) & 15) +
          bu.charAt((bv[bt >> 2] >> ((3 - (bt % 4)) * 8)) & 15);
      }
      return bw;
    }
    bs = bg(bs);
    return bq(bi(bn(bs), bs.length * 8));
  }
  t();
}
