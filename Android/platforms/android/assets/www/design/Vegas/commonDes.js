var GetPlatersNameBlackJack = [];
var winUserFlag = false;

_Tf._hr.extendObject({
  100: "win_1_hand",
  101: "win_2_hands_in_a_row",
  102: "win_3_hands_in_a_row",
  103: "win_5_hands_in_a_row",
  104: "win_10_hands_in_a_row",
  105: "win_15_hands_in_a_row",
  202: "win_with_three_of_a_kind",
  203: "win_with_four_of_a_kind",
  204: "win_with_flush",
  205: "win_with_full_house",
  206: "win_with_straight",
  208: "win_with_straight_flush",
  209: "win_with_royal_flush",
  300: "win_with_qt",
  301: "win_with_aj",
  302: "win_with_ak",
  303: "win_with_j5",
  304: "win_with_jj",
  305: "win_with_aa",
  306: "win_with_k9",
  307: "win_with_kk",
  308: "win_with_27",
  310: "win_with_aq",
  311: "win_with_a8",
  312: "win_with_kq",
  313: "win_with_k3",
  314: "win_with_qq",
  315: "win_with_qj",
  316: "win_with_j4",
  318: "win_with_tt",
  319: "win_with_99",
  320: "win_with_88",
  321: "win_with_77",
  322: "win_with_66",
  323: "win_with_55",
  324: "win_with_44",
  325: "win_with_33",
  326: "win_with_22",
  327: "win_with_kj",
  400: "win_with_two_pair_black_aces_and_8s",
  500: "win_with_three_of_a_kind_10_times",
  501: "win_with_three_of_a_kind_25_times",
  502: "win_with_three_of_a_kind_50_times",
  503: "win_with_three_of_a_kind_99_times",
  505: "win_with_straight_10_times",
  506: "win_with_straight_25_times",
  507: "win_with_straight_50_times",
  508: "win_with_straight_100_times",
  509: "win_with_flush_10_times",
  510: "win_with_flush_25_times",
  511: "win_with_flush_50_times",
  512: "win_with_flush_100_times",
  513: "win_with_full_house_10_times",
  514: "win_with_full_house_25_times",
  515: "win_with_full_house_50_times",
  516: "win_with_full_house_100_times",
  701: "win_5k_pot",
  703: "win_20k_pot",
  705: "win_50k_pot",
  706: "win_250k_pot",
  707: "win_500k_pot",
  708: "win_1m_pot",
  709: "win_10m_pot",
  710: "win_50m_pot",
  711: "win_100m_pot",
  712: "win_500m_pot",
  713: "win_1b_pot",
  714: "win_10b_pot",
  903: "win_1m_in_total",
  1101: "go_all_in_and_win",
  1116: "lose_with_four_of_a_kind_or_better",
  1117: "sit_down_at_table",
  1121: "participate_in_tournament",
  1122: "participate_in_sit_and_go",
  1127: "finish_tournament_in_top_20_percent",
  100001: "be_my_buddy",
  100002: "popularity_rocks",
  100003: "buddy_system",
  1000013: "prize_place_in_tournament"
}, _Xl._7a._dc.AchievementTypeByCode);
_h8._2s._o4.BaccaratChair = function () {
  _h8._2s._o4.BaccaratChair.superclass.apply(this, arguments)
};
extend(_h8._2s._o4.BaccaratChair, _Tf._Ek._2s._o4.BaccaratChair);
_h8._2s._o4.BaccaratChair.prototype.appendResources = function () {
  this.chairLeft = _Tf._M4._np.table.getElement("sitDownButtonLeftBaccarat");
  this.chairRight = _Tf._M4._np.table.getElement("sitDownButtonRightBaccarat")
};
_h8._2s._o4.BaccaratChair.prototype.drawBetBlock = function (a, c) {
  var b = c ? this.designPosition.clientBetBlock : this.designPosition.betBlock,
    d = _h8._0l._vn,
    e = this.designPosition.chairs[this.realNumber].betBlockPos,
    f;
  c ? (f = b.pos.x, e = b.pos.y) : (f = this.position.x + e.x, e = this.position.y + e.y);
  _Tf._Ek._29.drawBlocks(this.context, f, e, b.width, b.height, d.BACCARAT_BET_BLOCK_BG, d.BACCARAT_BET_BLOCK_BORDER, b.cornerRadius, b.borderWidth);
  _Tf._Ek._29.fillText(this.context, this.designPosition, a, f + b.offsetTextX, e + b.offsetTextY,
    d.BACCARAT_BET_TEXT_COLOR, b.text, !1, !1, !1, null, null, b.width, b.textFace, b.textStrokeThickness, d.BACCARAT_BET_TEXT_BORDER)
};
_h8._2s._o4.BaccaratChair.prototype.drawMiddle = function (a, c, b) {
  a && c && (this._I9(b), this._zp(b))
};
_h8._2s._o4.BaccaratChair.prototype._zp = function (a) {
  var c = this.designPosition.chair,
    a = 3 > a ? c.offsetTextForLeft : c.offsetTextForRight;
  _Tf._Ek._29.fillText(this.middleContext, this.designPosition, _Tf._41.$("_P7._I4"), this.position.x + a, this.position.y - c.textEmptyChair / 6 + c.offsetTextY, _h8._0l._vn.BACCARAT_FREE_CHAIR_TEXT, c.textEmptyChair, null, null, null, null, c.textWeight, null, c.textFace)
};
_h8._2s._o4.BaccaratChair.prototype._I9 = function (a) {
  _Tf._Ek._29.drawImage(this.middleContext, 3 > a ? this.chairLeft : this.chairRight, this.position.x, this.position.y, this.angle, this.designPosition.chair.imageWidth, this.designPosition.chair.imageHeight)
};
_h8._2s._o4.BaccaratChair.prototype.clearItselfOnMiddle = function () {
  _Tf._Ek._29.fillRectToClear(this.middleContext, this.position.x - this.designPosition.chair.imageWidth / 2 - 50, this.position.y - this.designPosition.chair.imageHeight / 2 - 150, this.designPosition.chair.imageWidth + 100, this.designPosition.chair.imageHeight + 300)
};
_h8._2s._o4.BaccaratChair.prototype._Ms = function () { };
_h8._2s._o4.BaccaratChair.prototype._3p = function (a, c) {
  var b = this.designPosition.chair;
  return this.position.x - b.imageWidth / 2 < a && a < this.position.x + b.imageWidth / 2 && this.position.y - b.imageHeight / 2 < c && c < this.position.y + b.imageHeight / 2 ? !0 : !1
};
_h8._2s._o4.BaccaratChair.prototype.hasAvatarPointAction = function (a, c, b) {
  var d = this.designPosition.chairs[this.realNumber],
    e = b ? this.designPosition.playerClient : this.designPosition.player;
  b ? b = this.designPosition.playerClient.posCenter.clone() : (b = d.posCenter.clone(), b.plus(d.posPlayerCenter.clone()));
  a = b.x - a;
  c = b.y - c;
  e = e.avatarWidth / 2;
  return a * a + c * c <= e * e
};
_h8._2s._o4.BaccaratPlayer = function () {
  _h8._2s._o4.BaccaratPlayer.superclass.apply(this, arguments)
};
extend(_h8._2s._o4.BaccaratPlayer, _Tf._Ek._2s._o4.BaccaratPlayer);
_h8._2s._o4.BaccaratPlayer.prototype.appendResources = function () {
  this.avatarCircle = _Tf._M4._np.table.getElement("avatarCircleBaccarat")
};
_h8._2s._o4.BaccaratPlayer.prototype.locate = function (a, c) {
  var b = this.designPosition.chairs[a],
    d = c ? this.designPosition.playerClient : this.designPosition.player;
  c ? this.position = this.designPosition.playerClient.posCenter.clone() : (this.position = b.posCenter.clone(), this.position.plus(b.posPlayerCenter.clone()));
  this.position.sub(new _8n(d.width / 2, d.height / 2))
};
_h8._2s._o4.BaccaratPlayer.prototype._qp = function (a, c, b) {
  a = b ? this.designPosition.playerClient : this.designPosition.player;
  _Tf._Ek._29.drawImage(this.middleContext, this.avatarCircle, this.position.x + a.width / 2 - 1, this.position.y + a.height / 2 + a.circleOffsetY, 0, a.circleWidth, a.circleHeight);
  _Tf._Ek._29._F4(this.middleContext, _h8._0l._vn.AVATAR_BACK, this.position.x + a.width / 2 - 1, this.position.y + a.height / 2, a.avatarWidth / 2 + 1, !1);
  this.middleContext.save();
  this.middleContext.beginPath();
  this.middleContext.arc(this.position.x + a.width / 2 - 1, this.position.y + a.height / 2, a.avatarWidth / 2, 0, 2 * Math.PI, !0);
  this.middleContext.closePath();
  this.middleContext.clip();
  this.middleContext.drawImage(this.avatar, this.position.x + (a.width - a.avatarWidth) / 2 - 1, this.position.y + (a.height - a.avatarHeight) / 2, a.avatarWidth, a.avatarHeight);
  this.middleContext.restore()
};
_h8._2s._o4.BaccaratPlayer.prototype._drawBlocks = function (a, c, b) {
  a = b ? this.designPosition.playerClient : this.designPosition.player;
  c = _h8._0l._vn;
  _Tf._Ek._29.drawBlocks(this.middleContext, this.position.x + a.offsetXBox, this.position.y + a.height + a.offsetYBox, a.statusWidth, a.statusHeight, c.BACCARAT_PLAYER_BLOCKS, c.BACCARAT_PLAYER_BLOCKS)
};
_h8._2s._o4.BaccaratPlayer.prototype._Pm = function (a, c) {
  var b = c ? this.designPosition.playerClient : this.designPosition.player,
    d = this.position.x + b.width + b.offsetXBox + b.offsetXname,
    e = this.position.y + b.height + b.offsetYBox + b.offsetYname,
    f = _h8._0l._vn.PLAYER_NAME,
    g = b.textNameFontSize;
  _Tf._Ek._29.fillText(this.middleContext, this.designPosition, a, d, e, f, g, !1, !1, !0, b.textNameAlign, b.textNameFontWeight, b.maxNameWidth);
  _Tf._Ek._29.fillText(this.middleContext, this.designPosition, " :", d + b.maxNameWidth, e, f, g, !1, !1, !1)
};
_h8._2s._o4.BaccaratPlayer.prototype._G = function (a, c) {
  var b = c ? this.designPosition.playerClient : this.designPosition.player;
  _Tf._Ek._29.fillText(this.context, this.designPosition, a, this.position.x + b.width + b.offsetXBox + b.offsetXmoney, this.position.y + b.height + b.offsetYBox + b.offsetYmoney, _h8._0l._vn.BACCARAT_PLAYER_CASH, b.textCashFontSize, !1, !1, !1, null, b.textMoneyFontWeight, b.maxMoneyWidth)
};
_h8._2s._o4.BaccaratPlayer.prototype._uc = function (a, c) {
  var b = c ? this.designPosition.playerClient : this.designPosition.player,
    d = a ? _Tf._41.getLocale()._6[a.action] : "",
    e = a && a.amount ? a.amount : "",
    f = _h8._0l._vn,
    g = this.position.x + b.width + b.offsetXBox + b.offsetXoperation,
    h = this.position.y + b.height + b.offsetYBox + b.offsetYoperation,
    i = b.textNameFontSize;
  "" != d && (e = e ? ": " + _Tf._Ek._29._ca(e, a.moneyType, !0) : "", _Tf._Ek._29.drawBlocks(this.context, this.position.x + b.offsetXBox, this.position.y + b.height + b.offsetYBox, b.statusWidth,
    b.statusHeight, f.BACCARAT_PLAYER_BLOCKS, f.BACCARAT_PLAYER_BLOCKS), _Tf._Ek._29.fillOperationText(this.context, this.designPosition, d, "" + e, g, h, f.PLAYER_NAME, i, !1, !1, !1, null, b.textNameFontWeight, b.statusWidth, b.maxStatusTextWidth))
};
_h8._2s._o4.BaccaratPlayer.prototype._E0 = function (a, c) {
  if (a != _Tf._dc.PlayerState._w) {
    var b = c ? this.designPosition.playerClient : this.designPosition.player,
      d = _h8._0l._vn,
      e = this.position.x + b.width + b.offsetXBox + b.offsetXoperation,
      f = this.position.y + b.height + b.offsetYBox + b.offsetYoperation,
      g = b.textNameFontSize;
    _Tf._Ek._29.drawBlocks(this.context, this.position.x + b.offsetXBox, this.position.y + b.height + b.offsetYBox, b.statusWidth, b.statusHeight, d.BACCARAT_PLAYER_BLOCKS, d.BACCARAT_PLAYER_BLOCKS);
    _Tf._Ek._29.fillText(this.context,
      this.designPosition, _Tf._41.$("_Q5." + a), e, f, d.PLAYER_NAME, g, !1, !1, !1, null, b.textNameFontWeight, b.statusWidth)
  }
};
_h8._2s._o4.BaccaratPlayer.prototype._drawStatus = function () { };
_h8._2s._o4.BaccaratPlayer.prototype._drawActiveShape = function () { };
_h8._2s._o4.BaccaratRank = function () {
  _h8._2s._o4.BaccaratRank.superclass.apply(this, arguments)
};
extend(_h8._2s._o4.BaccaratRank, _Tf._Ek._2s._o4.BaccaratRank);
_h8._2s._o4.BaccaratRank.prototype.draw = function (a) {
  if (null != a) {
    var c = _Tf._Ek._29,
      b = this.design.pos.clone();
    c.drawBlocks(this.context, b.x - this.design.widthImage / 2, b.y - this.design.heightImage / 2, this.design.widthImage, this.design.heightImage, this.design.bgColor, this.design.borderColor, this.design.radius, this.design.lineWidth);
    c.fillText(this.context, this.designPosition, a, b.x + this.design.textOffsetX, b.y + this.design.textOffsetY, this.design.textColor, this.design.text, null, null, null, null, null, null, this.design.textFace)
  }
};
_h8._2s._o4.BaccaratTable = function () {
  _h8._2s._o4.BaccaratTable.superclass.apply(this, arguments)
};
extend(_h8._2s._o4.BaccaratTable, _Tf._Ek._2s._o4.BaccaratTable);
_h8._2s._o4.BaccaratTable.prototype.appendResources = function () {
  this.playerBlock = _Tf._M4._np.table.getElement("playerBlockBaccarat");
  this.dealerBlock = _Tf._M4._np.table.getElement("dealerBlockBaccarat")
};
_h8._2s._o4.BaccaratTable.prototype._I9 = function () {
  var a = _Tf._Ek._29,
    c = this.designPosition.playerBlock,
    b = this.designPosition.dealerBlock,
    d = c.pos.clone(),
    e = b.pos.clone();
  a.drawImage(this.staticContext, this.playerBlock, d.x, d.y, 0, c.width, c.height);
  a.drawImage(this.staticContext, this.dealerBlock, e.x, e.y, 0, b.width, b.height)
};
_h8._2s._o4.BaccaratTimer = function (a, c, b, d) {
  _h8._2s._o4.BaccaratTimer.superclass.apply(this, arguments);
  this.context = $("{0} {1}".format(b, _Tf._0l._N1._Rd)).get(0).getContext("2d");
  this.moving.angleDelta = 1;
  this.moving.angleStart = 0;
  this.moving.angleCurrent = 0;
  this.moving.angleTarget = _h8._0l._Jh._Nc._jn.timer.count - 1
};
extend(_h8._2s._o4.BaccaratTimer, _Tf._Ek._2s._o4.BaccaratTimer);
_h8._2s._o4.BaccaratTimer.prototype.appendResources = function () {
  this.timer = _Tf._M4._np.table.getElement("timer");
  this.timerTail = _Tf._M4._np.table.getElement("timerTail");
  this.timerBack = _Tf._M4._np.table.getElement("timerBack");
  this.globalTimer = _Tf._M4._np.table.getElement("globalTimerBaccarat");
  this.globalTimerBg = _Tf._M4._np.table.getElement("globalTimerBgBaccarat")
};
_h8._2s._o4.BaccaratTimer.prototype.hide = function () {
  _h8._2s._o4.BaccaratTimer.superclass.prototype.hide.apply(this, arguments);
  this.isShow = !1;
  _Tf._Hc._Og.isAndroidTablet() ? _Mf._ks.emit(_Ag._u7, [this.context]) : (this.clearItself(), this.clearGlobalTimer())
};
_h8._2s._o4.BaccaratTimer.prototype.clearItself = function () {
  var a = this.designPosition.timerClient;
  a && this.positionCurrent && _Tf._Ek._29.fillRectToClear(this.context, this.positionCurrent.x - a.width / 2 - 4, this.positionCurrent.y - a.height / 2 - 4, a.width + 8, a.height + 8)
};
_h8._2s._o4.BaccaratTimer.prototype.drawChairTimer = function () {
  if (this.positionCurrent && this.isShow && !(0 > this.moving.steps)) {
    var a = this.isClient ? this.designPosition.timerClient : this.designPosition.timer,
      c = _h8._0l._Jh._Nc._jn.timer.count >> 1,
      b = Math.round(this.moving.angleCurrent),
      d = Math.round(this.moving.angleTarget);
    this.clearItself();
    _Tf._Ek._29.drawImage(this.context, this.timerBack, this.positionCurrent.x, this.positionCurrent.y, 0, a.width, a.height, 0, 0, 0, 0, !0);
    c = b >= c ? this.timerTail : this.timer;
    this.context.save();
    this.context.beginPath();
    var e = 2 * Math.PI / 180;
    this.context.arc(this.positionCurrent.x, this.positionCurrent.y, a.width / 2, -Math.PI / 2 + e + 2 * (b / d) * Math.PI, -Math.PI / 2 + e, !0);
    this.context.lineTo(this.positionCurrent.x, this.positionCurrent.y);
    this.context.closePath();
    this.context.clip();
    _Tf._Ek._29.drawImage(this.context, c, this.positionCurrent.x, this.positionCurrent.y, 0, a.width, a.height, 0, 0, a.width, a.height, !0);
    this.context.restore()
  }
};
_h8._2s._o4.BaccaratTimer.prototype.update = function () {
  if (this.moving.isMoving && this.isShow && 0 >= this.moving.steps) {
    if (this.moving.steps = -1, this.moving.isMoving = !1, this.moving.angleCurrent = this.moving.angleTarget, this.clearItself(), this.interval) clearInterval(this.interval), this.interval = null
  } else if (2 >= this.moving.steps && this.isShow) _Mf._q1.map[_Mf._q1.activeTableId].gameManager.button._Q7(), this.isShow = !1;
  else if (this.moving.maxAngleCurrent = (this.moving.stepsAll - this.moving.steps + 2) * this.moving.angleDelta,
    this.moving.angleCurrent < this.moving.maxAngleCurrent && (this.moving.angleCurrent += (this.moving.maxAngleCurrent - this.moving.angleCurrent) / (_Tf._0l.FRAME_RATE / 1.5)), this.moving.angleCurrent > this.moving.angleTarget) this.moving.angleCurrent = this.moving.angleTarget
};
_h8._2s._o4.BaccaratTimer.prototype._U3 = function () {
  this.moving.steps--;
  if (0 === this.moving.steps) this.clearItself(), clearInterval(this.interval), this.interval = null
};
_h8._2s._o4.BaccaratTimer.prototype.show = function (a, c) {
  if (!this.isShow) {
    this.interval && clearInterval(this.interval);
    this.isShow = !0;
    this.moving.isMoving = !0;
    this.moving.steps = c;
    this.moving.stepsAll = a;
    this.moving.angleDelta = (this.moving.angleTarget + 1) / a;
    this.moving.angleCurrent = this.moving.angleStart + this.moving.angleDelta * (a - c);
    var b = this._U3.bind(this);
    this.interval = setInterval(b, 1E3)
  }
};
_h8._2s._o4.BaccaratTimer.prototype.drawGlobalTimer = function () {
  var a = this.designPosition.globalTimer,
    c = this.designPosition.globalTimer.bg,
    b = this.designPosition.globalTimer.partsNumber,
    d = this.designPosition.globalTimer.partSize,
    e = Math.round(b * (1 - this.moving.angleCurrent / 360)),
    d = d * (b - e);
  this.clearGlobalTimer();
  this.isShow && !(0 > this.moving.steps) && (_Tf._Ek._29.drawImage(this.context, this.globalTimerBg, c.posCenter.x, c.posCenter.y, 0, c.width, c.height), _Tf._Ek._29.fillText(this.context, this.designPosition,
    e, a.posCenter.x + a.text.pos.x, a.posCenter.y + a.text.pos.y, a.text.color, a.text.size, null, null, null, null, null, null, null, a.text.textStrokeThickness, a.text.textStrokeColor), this.context.save(), this.context.beginPath(), c = 2 * Math.PI / 180, this.context.arc(a.posCenter.x, a.posCenter.y, a.width / 2, -Math.PI / 2 + c + d / (2 * b), -Math.PI / 2 + c, !0), this.context.lineTo(a.posCenter.x, a.posCenter.y), this.context.closePath(), this.context.clip(), _Tf._Ek._29.drawImage(this.context, this.globalTimer, a.posCenter.x, a.posCenter.y, 0, a.width,
      a.height, 0, 0, a.width, a.height, !0), this.context.restore())
};
_h8._2s._o4.BaccaratTimer.prototype.clearGlobalTimer = function () {
  var a = this.designPosition.globalTimer.bg;
  a && _Tf._Ek._29.fillRectToClear(this.context, a.posCenter.x - a.width / 2, a.posCenter.y - a.height / 2, a.width, a.height)
};
_h8._2s._o4.BaccaratWinTable = function () {
  _h8._2s._o4.BlackJackWinTable.superclass.apply(this, arguments)
};
extend(_h8._2s._o4.BaccaratWinTable, _Tf._Ek._2s._o4.BaccaratWinTable);
_h8._2s._o4.BaccaratWinTable.prototype.appendResources = function () {
  this.winnerLabel = _Tf._M4._np.table.getElement("winnerLabelBaccarat")
};
_h8._2s._o4.BaccaratWinTable.prototype.locate = function (a) {
  null === a ? this.position = this.designPosition.bank.posCenter.clone() : (a = this.designPosition.chairs[a], this.position = a.posCenter.clone(), this.positionWinnerLabel = a.posCenter.clone(), this.position.plus(a.posWinTable), this.positionWinnerLabel.plus(a.posWinnerLabel))
};
_h8._2s._o4.BaccaratWinTable.prototype._drawMessage = function (a, c, b) {
  var d = _Tf._Ek._29,
    e = _h8._0l._vn,
    f = this.position.clone(),
    b = b ? this.designPosition.winTableClient : this.designPosition.winTable,
    g = b.winnerLabel,
    h = this.positionWinnerLabel.clone();
  f.plus(b.pos);
  h.plus(g.pos);
  var i = _Tf._Ek._29._ca(a, c, !0),
    c = e.BACCARAT_WIN_TABLE_BG,
    a = _Tf._41.$("_b8._q").toUpperCase() + " " + i;
  // alert("aa "+JSON.stringify(a));
  0 == i && (a = _Tf._41.$("_b8._C7").toUpperCase());
  d.drawBlocks(this.context, f.x, f.y, b.width, b.height, c, e.BACCARAT_WIN_TABLE_BORDER, Math.round(0.05 * b.width), b.borderWidth);
  d.fillText(this.context, this.designPosition, a, f.x + b.width / 2, f.y + b.offsetYtitle, e.BACCARAT_TEXT_WIN_TABLE, b.textTitle, null, null, null, null, null, b.width, b.textFace, b.textStrokeThickness, e.BACCARAT_TEXT_WIN_TABLE_STROKE);
  d.drawImage(this.context, this.winnerLabel, h.x, h.y, 0, g.width, g.height)
};
_h8._2s._o4.BlackJackCard = function (a, c, b, d) {
  _h8._2s._o4.BlackJackCard.superclass.apply(this, arguments)
};
extend(_h8._2s._o4.BlackJackCard, _Tf._Ek._2s._o4.BlackJackCard);
_h8._2s._o4.BlackJackCard.prototype._drawVisible = function (a, c, b, d, e, f) {
  this._drawCard(this.context, this._solveDrawVisibleParams(a, c, b, d, e, f))
};
_h8._2s._o4.BlackJackCard.prototype.clear = function () { };
_h8._2s._o4.BlackJackCard.prototype._drawCard = function (a, c, b, d, e) {
  var e = e || this.angle,
    f = this._getCachedCard(c);
  try {
    if (0 === e) {
      if (c.isSelected) {
        var g = this.designPosition.cardSpaceX * c.width,
          h = this.designPosition.cardSpaceY * c.height;
        a && _Tf._Ek._29.drawRoundRect(a, b || this.positionCurrent.x + g, d || this.positionCurrent.y + h, c.width - 2 * g, c.height - 2 * h, _h8._0l._vn.CARD_SELECTED, this.designPosition.cardLineWidth, Math.round(0.1 * c.width))
      }
      a && a.drawImage(f, b || this.positionCurrent.x, d || this.positionCurrent.y, c.width,
        c.height)
    } else a && _Tf._Ek._29.drawImage(a, f, b || this.positionCurrent.x, d || this.positionCurrent.y, e, c.width, c.height)
  } catch (i) { }
};
_h8._2s._o4.BlackJackCardHolder = function (a, c, b, d) {
  _h8._2s._o4.BlackJackCardHolder.superclass.apply(this, arguments)
};
extend(_h8._2s._o4.BlackJackCardHolder, _Tf._Ek._2s._o4.BlackJackCardHolder);
_h8._2s._o4.BlackJackCardHolder.prototype.getPointsArray = function (a, c, b, d, e, f, g, h) {
  return _Tf._Ek._29._T9(a, c, b, g.spaceX, e, h ? f : 0)
};
_h8._2s._o4.BlackJackChair = function () {
  _h8._2s._o4.BlackJackChair.superclass.apply(this, arguments)
};
extend(_h8._2s._o4.BlackJackChair, _Tf._Ek._2s._o4.BlackJackChair);
_h8._2s._o4.BlackJackChair.prototype.appendResources = function () {
  this.chairLeft = _Tf._M4._np.table.getElement("sitDownButtonLeftBj");
  this.chairRight = _Tf._M4._np.table.getElement("sitDownButtonRightBj");
  this.flashWelcomeImage = _Tf._M4._np.table.getElement("welcomeBack")
};
_h8._2s._o4.BlackJackChair.prototype.drawBetBlock = function (a, c) {
  var b = c ? this.designPosition.clientBetBlock : this.designPosition.betBlock,
    d = _h8._0l._vn,
    e = this.designPosition.chairs[this.realNumber].betBlockPos,
    f;
  c ? (f = b.pos.x, e = b.pos.y) : (f = this.position.x + e.x, e = this.position.y + e.y);
  _Tf._Ek._29.drawBlocks(this.context, f, e, b.width, b.height, d.BJ_BET_BLOCK_BG, d.BJ_BET_BLOCK_BORDER, b.cornerRadius, b.borderWidth);
  _Tf._Ek._29.fillText(this.context, this.designPosition, a, f + b.offsetTextX, e + b.offsetTextY, d.BJ_BET_TEXT_COLOR,
    b.text, !1, !1, !1, null, null, b.width, b.textFace, b.textStrokeThickness, d.BJ_BET_TEXT_BORDER)
};
_h8._2s._o4.BlackJackChair.prototype.drawMiddle = function (a, c, b) {
  a && c && (this._I9(b), this._zp(b))
};
_h8._2s._o4.BlackJackChair.prototype._zp = function (a) {
  var c = this.designPosition.chair,
    a = 3 > a ? c.offsetTextForLeft : c.offsetTextForRight;
  _Tf._Ek._29.fillText(this.middleContext, this.designPosition, _Tf._41.$("_P7._I4"), this.position.x + a, this.position.y - c.textEmptyChair / 6 + c.offsetTextY, _h8._0l._vn.BJ_FREE_CHAIR_TEXT, c.textEmptyChair, null, null, null, null, c.textWeight, null, c.textFace)
};
_h8._2s._o4.BlackJackChair.prototype._I9 = function (a) {
  _Tf._Ek._29.drawImage(this.middleContext, 3 > a ? this.chairLeft : this.chairRight, this.position.x, this.position.y, this.angle, this.designPosition.chair.imageWidth, this.designPosition.chair.imageHeight)
};
_h8._2s._o4.BlackJackChair.prototype.clearItselfOnMiddle = function () {
  _Tf._Ek._29.fillRectToClear(this.middleContext, this.position.x - this.designPosition.chair.imageWidth / 2 - 50, this.position.y - this.designPosition.chair.imageHeight / 2 - 150, this.designPosition.chair.imageWidth + 100, this.designPosition.chair.imageHeight + 300)
};
_h8._2s._o4.BlackJackChair.prototype._Ms = function () { };
_h8._2s._o4.BlackJackChair.prototype._3p = function (a, c) {
  var b = this.designPosition.chair;
  return this.position.x - b.imageWidth / 2 < a && a < this.position.x + b.imageWidth / 2 && this.position.y - b.imageHeight / 2 < c && c < this.position.y + b.imageHeight / 2 ? !0 : !1
};
_h8._2s._o4.BlackJackChair.prototype.hasAvatarPointAction = function (a, c, b) {
  var d = this.designPosition.chairs[this.realNumber],
    e = b ? this.designPosition.playerClient : this.designPosition.player;
  b ? b = this.designPosition.playerClient.posCenter.clone() : (b = d.posCenter.clone(), b.plus(d.posPlayerCenter.clone()));
  a = b.x - a;
  c = b.y - c;
  e = e.avatarWidth / 2;
  return a * a + c * c <= e * e
};
_h8._2s._o4.BlackJackPlayer = function () {
  _h8._2s._o4.BlackJackPlayer.superclass.apply(this, arguments)
};
extend(_h8._2s._o4.BlackJackPlayer, _Tf._Ek._2s._o4.BlackJackPlayer);
_h8._2s._o4.BlackJackPlayer.prototype.locate = function (a, c) {
  var b = this.designPosition.chairs[a],
    d = c ? this.designPosition.playerClient : this.designPosition.player;
  c ? this.position = this.designPosition.playerClient.posCenter.clone() : (this.position = b.posCenter.clone(), this.position.plus(b.posPlayerCenter.clone()));
  this.position.sub(new _8n(d.width / 2, d.height / 2))
};
_h8._2s._o4.BlackJackPlayer.prototype._qp = function (a, c, b) {
  a = b ? this.designPosition.playerClient : this.designPosition.player;
  _Tf._Ek._29._F4(this.middleContext, _h8._0l._vn.AVATAR_BACK, this.position.x + a.width / 2 - 1, this.position.y + a.height / 2, a.avatarWidth / 2 + 1, !1);
  this.middleContext.save();
  this.middleContext.beginPath();
  this.middleContext.arc(this.position.x + a.width / 2 - 1, this.position.y + a.height / 2, a.avatarWidth / 2, 0, 2 * Math.PI, !0);
  this.middleContext.closePath();
  this.middleContext.clip();
  this.middleContext.drawImage(this.avatar,
    this.position.x + (a.width - a.avatarWidth) / 2 - 1, this.position.y + (a.height - a.avatarWidth) / 2, a.avatarWidth, a.avatarHeight);
  this.middleContext.restore()
};
_h8._2s._o4.BlackJackPlayer.prototype._drawBlocks = function (a, c, b) {
  a = b ? this.designPosition.playerClient : this.designPosition.player;
  c = _h8._0l._vn;
  _Tf._Ek._29.drawBlocks(this.middleContext, this.position.x + a.offsetXBox, this.position.y + a.height + a.offsetYBox, a.statusWidth, a.statusHeight, c.BJ_PLAYER_BLOCKS, c.BJ_PLAYER_BLOCKS)
};
_h8._2s._o4.BlackJackPlayer.prototype._Pm = function (a, c) {
  var b = c ? this.designPosition.playerClient : this.designPosition.player,
    d = this.position.x + b.width + b.offsetXBox + b.offsetXname,
    e = this.position.y + b.height + b.offsetYBox + b.offsetYname,
    f = _h8._0l._vn.PLAYER_NAME,
    g = b.textNameFontSize;
  // alert(JSON.stringify(f));

  // GetPlatersNameBlackJack.push(a);

  // for (var index = 0; index < GetPlatersNameBlackJack.length; index++) {

  //   if (GetPlatersNameBlackJack[index] == localStorage.getItem("loginUserName")) {
  //     winUserFlag = true;
  //     // console.log("Players Name " + GetPlatersNameBlackJack[index]);
  //   }

  // }

  _Tf._Ek._29.fillText(this.middleContext, this.designPosition, a, d, e, f, g, !1, !1, !0, b.textNameAlign, b.textNameFontWeight, b.maxNameWidth);
  _Tf._Ek._29.fillText(this.middleContext, this.designPosition, " :", d + b.maxNameWidth, e, f, g, !1, !1, !1)
};
_h8._2s._o4.BlackJackPlayer.prototype._G = function (a, c) {
  var b = c ? this.designPosition.playerClient : this.designPosition.player;
  _Tf._Ek._29.fillText(this.context, this.designPosition, a, this.position.x + b.width + b.offsetXBox + b.offsetXmoney, this.position.y + b.height + b.offsetYBox + b.offsetYmoney, _h8._0l._vn.BJ_PLAYER_CASH, b.textCashFontSize, !1, !1, !1, null, b.textMoneyFontWeight, b.maxMoneyWidth)
};
_h8._2s._o4.BlackJackPlayer.prototype._uc = function (a, c) {
  var b = c ? this.designPosition.playerClient : this.designPosition.player,
    d = a ? _Tf._41.getLocale()._6[a.action] : "",
    e = a && a.amount ? a.amount : "",
    f = _h8._0l._vn,
    g = this.position.x + b.width + b.offsetXBox + b.offsetXoperation,
    h = this.position.y + b.height + b.offsetYBox + b.offsetYoperation,
    i = b.textNameFontSize;
  "" != d && (e = e ? ": " + _Tf._Ek._29._ca(e, a.moneyType, !0) : "", _Tf._Ek._29.drawBlocks(this.context, this.position.x + b.offsetXBox, this.position.y + b.height + b.offsetYBox, b.statusWidth,
    b.statusHeight, f.BJ_PLAYER_BLOCKS, f.BJ_PLAYER_BLOCKS), _Tf._Ek._29.fillOperationText(this.context, this.designPosition, d, "" + e, g, h, f.PLAYER_NAME, i, !1, !1, !1, null, b.textNameFontWeight, b.statusWidth, b.maxStatusTextWidth))
};
_h8._2s._o4.BlackJackPlayer.prototype._E0 = function (a, c) {
  if (a != _Tf._dc.PlayerState._w) {
    var b = c ? this.designPosition.playerClient : this.designPosition.player,
      d = _h8._0l._vn,
      e = this.position.x + b.width + b.offsetXBox + b.offsetXoperation,
      f = this.position.y + b.height + b.offsetYBox + b.offsetYoperation,
      g = b.textNameFontSize;
    _Tf._Ek._29.drawBlocks(this.context, this.position.x + b.offsetXBox, this.position.y + b.height + b.offsetYBox, b.statusWidth, b.statusHeight, d.BJ_PLAYER_BLOCKS, d.BJ_PLAYER_BLOCKS);
    _Tf._Ek._29.fillText(this.context,
      this.designPosition, _Tf._41.$("_Q5." + a), e, f, d.PLAYER_NAME, g, !1, !1, !1, null, b.textNameFontWeight, b.statusWidth)
  }
};
_h8._2s._o4.BlackJackPlayer.prototype._drawStatus = function () { };
_h8._2s._o4.BlackJackPlayer.prototype._drawActiveShape = function () { };
_h8._2s._o4.BlackJackRank = function () {
  _h8._2s._o4.BlackJackRank.superclass.apply(this, arguments);
  this.appendResources()
};
extend(_h8._2s._o4.BlackJackRank, _Tf._Ek._2s._o4.BlackJackRank);
_h8._2s._o4.BlackJackRank.prototype.appendResources = function () {
  this.rankImage = _Tf._M4._np.table.getElement("rankBgBj");
  this.smallRankImage = _Tf._M4._np.table.getElement("smallRankBgBj")
};
_h8._2s._o4.BlackJackRank.prototype.draw = function (a, c, b, d) {
  this.clear(c, b);
  if (a) {
    var e = _Tf._Ek._29,
      f = _h8._0l._vn,
      g = this.getPosition(),
      b = this.getDesign(c, b, d),
      d = b.text;
    e.drawImage(this.context, c ? this.rankImage : this.smallRankImage, g.x, g.y, 0, b.widthImage, b.heightImage);
    e.fillText(this.context, this.designPosition, a, g.x + b.textOffsetX, g.y + b.textOffsetY, f.CHAIR_RANK, d, null, null, null, null, null, null, b.textFace)
  }
};
_h8._2s._o4.BlackJackRank.prototype.clear = function (a, c) {
  var b = _Tf._Ek._29,
    d = this.getDesign(a, c),
    e = this.getPosition();
  b.fillRectToClear(this.context, e.x - 5, e.y - 5, 0, d.widthImage + 10, d.heightImage + 10)
};
_h8._2s._o4.BlackJackRank.prototype.getDesign = function (a, c, b) {
  return this.isDealer ? this.designPosition.dealerRank : a ? b ? this.designPosition.playerClientRankSplitActive : this.designPosition.playerClientRank : b ? this.designPosition.playerRankSplitActive : this.designPosition.playerRank
};
_h8._2s._o4.BlackJackShoe = function () {
  _h8._2s._o4.BlackJackShoe.superclass.apply(this, arguments)
};
extend(_h8._2s._o4.BlackJackShoe, _Tf._Ek._2s._o4.BlackJackShoe);
_h8._2s._o4.BlackJackShoe.prototype.drawMiddle = function () { };
_h8._2s._o4.BlackJackShoe.prototype.clearMiddle = function () { };
_h8._2s._o4.BlackJackTimer = function (a, c, b, d) {
  _h8._2s._o4.BlackJackTimer.superclass.apply(this, arguments);
  this.context = $("{0} {1}".format(b, _Tf._0l._N1._Rd)).get(0).getContext("2d");
  this.moving.angleDelta = 1;
  this.moving.angleStart = 0;
  this.moving.angleCurrent = 0;
  this.moving.angleTarget = _h8._0l._Jh._Nc._jn.timer.count - 1
};
extend(_h8._2s._o4.BlackJackTimer, _Tf._Ek._2s._o4.BlackJackTimer);
_h8._2s._o4.BlackJackTimer.prototype.appendResources = function () {
  this.timer = _Tf._M4._np.table.getElement("timer");
  this.timerTail = _Tf._M4._np.table.getElement("timerTail");
  this.timerBack = _Tf._M4._np.table.getElement("timerBack");
  this.globalTimer = _Tf._M4._np.table.getElement("globalTimer");
  this.globalTimerBg = _Tf._M4._np.table.getElement("globalTimerBg")
};
_h8._2s._o4.BlackJackTimer.prototype.hide = function () {
  _h8._2s._o4.BlackJackTimer.superclass.prototype.hide.apply(this, arguments);
  this.isShow = !1;
  _Tf._Hc._Og.isAndroidTablet() ? _Mf._ks.emit(_Ag._u7, [this.context]) : (this.clearItself(), this.clearGlobalTimer())
};
_h8._2s._o4.BlackJackTimer.prototype.clearItself = function () {
  var a = this.designPosition.timerClient;
  a && this.positionCurrent && _Tf._Ek._29.fillRectToClear(this.context, this.positionCurrent.x - a.width / 2 - 4, this.positionCurrent.y - a.height / 2 - 4, a.width + 8, a.height + 8)
};
_h8._2s._o4.BlackJackTimer.prototype.drawChairTimer = function () {
  if (this.positionCurrent && this.isShow && !(0 > this.moving.steps)) {
    var a = this.isClient ? this.designPosition.timerClient : this.designPosition.timer,
      c = _h8._0l._Jh._Nc._jn.timer.count >> 1,
      b = Math.round(this.moving.angleCurrent),
      d = Math.round(this.moving.angleTarget);
    this.clearItself();
    _Tf._Ek._29.drawImage(this.context, this.timerBack, this.positionCurrent.x, this.positionCurrent.y, 0, a.width, a.height, 0, 0, 0, 0, !0);
    c = b >= c ? this.timerTail : this.timer;
    this.context.save();
    this.context.beginPath();
    var e = 2 * Math.PI / 180;
    this.context.arc(this.positionCurrent.x, this.positionCurrent.y, a.width / 2, -Math.PI / 2 + e + 2 * (b / d) * Math.PI, -Math.PI / 2 + e, !0);
    this.context.lineTo(this.positionCurrent.x, this.positionCurrent.y);
    this.context.closePath();
    this.context.clip();
    _Tf._Ek._29.drawImage(this.context, c, this.positionCurrent.x, this.positionCurrent.y, 0, a.width, a.height, 0, 0, a.width, a.height, !0);
    this.context.restore()
  }
};
_h8._2s._o4.BlackJackTimer.prototype.update = function () {
  if (this.moving.isMoving && this.isShow && 0 >= this.moving.steps) {
    if (this.moving.steps = -1, this.moving.isMoving = !1, this.moving.angleCurrent = this.moving.angleTarget, this.clearItself(), this.interval) clearInterval(this.interval), this.interval = null
  } else if (2 >= this.moving.steps && this.isShow) _Mf._q1.map[_Mf._q1.activeTableId].gameManager.button._Q7(), this.isShow = !1;
  else if (this.moving.maxAngleCurrent = (this.moving.stepsAll - this.moving.steps + 2) * this.moving.angleDelta,
    this.moving.angleCurrent < this.moving.maxAngleCurrent && (this.moving.angleCurrent += (this.moving.maxAngleCurrent - this.moving.angleCurrent) / (_Tf._0l.FRAME_RATE / 1.5)), this.moving.angleCurrent > this.moving.angleTarget) this.moving.angleCurrent = this.moving.angleTarget
};
_h8._2s._o4.BlackJackTimer.prototype._U3 = function () {
  this.moving.steps--;
  if (0 === this.moving.steps) this.clearItself(), clearInterval(this.interval), this.interval = null
};
_h8._2s._o4.BlackJackTimer.prototype.show = function (a, c) {
  if (!this.isShow) {
    this.interval && clearInterval(this.interval);
    this.isShow = !0;
    this.moving.isMoving = !0;
    this.moving.steps = c;
    this.moving.stepsAll = a;
    this.moving.angleDelta = (this.moving.angleTarget + 1) / a;
    this.moving.angleCurrent = this.moving.angleStart + this.moving.angleDelta * (a - c);
    var b = this._U3.bind(this);
    this.interval = setInterval(b, 1E3)
  }
};
_h8._2s._o4.BlackJackTimer.prototype.drawGlobalTimer = function () {
  var a = this.designPosition.globalTimer,
    c = this.designPosition.globalTimer.bg,
    b = parseInt(a.width * (1 - this.moving.angleCurrent / 360));
  this.clearGlobalTimer();
  this.isShow && !(0 > this.moving.steps) && (_Tf._Ek._29.drawImage(this.context, this.globalTimerBg, c.posCenter.x, c.posCenter.y, 0, c.width, c.height), _Tf._Ek._29.drawPartImage(this.context, this.globalTimer, 0, 0, b, a.height, a.posCenter.x - a.width / 2, a.posCenter.y - a.height / 2, b, a.height))
};
_h8._2s._o4.BlackJackTimer.prototype.clearGlobalTimer = function () {
  var a = this.designPosition.globalTimer.bg;
  a && _Tf._Ek._29.fillRectToClear(this.context, a.posCenter.x - a.width / 2, a.posCenter.y - a.height / 2, a.width, a.height)
};
_h8._2s._o4.BlackJackWinTable = function () {
  _h8._2s._o4.BlackJackWinTable.superclass.apply(this, arguments)
};
extend(_h8._2s._o4.BlackJackWinTable, _Tf._Ek._2s._o4.BlackJackWinTable);
_h8._2s._o4.BlackJackWinTable.prototype.locate = function (a) {
  null === a ? this.position = this.designPosition.bank.posCenter.clone() : (this.position = this.designPosition.chairs[a].posCenter.clone(), this.position.plus(this.designPosition.chairs[a].posWinTable))
  // console.log("wintable a this.position.plus =========> " + JSON.stringify(this.position));
};
_h8._2s._o4.BlackJackWinTable.prototype._drawMessage = function (a, c, b) {

  // alert(localStorage.getItem("loginUserName"));
  // console.log("wintable a " + JSON.stringify(a));
  // console.log("wintable b " + JSON.stringify(b));
  // console.log("wintable c " + JSON.stringify(c));

  // if (JSON.stringify(b) != false && winUserFlag == true) {
  //   console.log("wintable Har =========> " + JSON.stringify(b));
  // }

  var d = _Tf._dc.AnimationType,
    e = _Tf._Ek._29,
    f = _h8._0l._vn,
    g = this.position.clone(),
    h = b ? this.designPosition.winTableClient : this.designPosition.winTable;

  // console.log("designPosition winTableClient "+JSON.stringify(this.designPosition.winTableClient));
  // console.log("designPosition winTable "+JSON.stringify(this.designPosition.winTable));

  // console.log("wintable e =========> " + JSON.stringify(e));
  // console.log("wintable f =========> " + JSON.stringify(f));
  // console.log("wintable g =========> " + JSON.stringify(g));
  // console.log("wintable h =========> " + JSON.stringify(h));
  // console.log("wintable b =========> " + JSON.stringify(b));

  // console.log(JSON.stringify(g.x))
  // if (JSON.stringify(b) != false && JSON.stringify(g.x) == 306) {

  //   console.log("winUser "+ localStorage.getItem("loginUserName"));
  // }
  // if (b == true) {
  //   alert(" I'm wintables " + JSON.stringify(b));
  // }
  //  alert("winTable "+JSON.stringify(this.designPosition.winTable.pos));
  // alert("winTableClient "+JSON.stringify(this.designPosition.winTableClient.pos));
  // console.log("winTable pos" + JSON.stringify(this.designPosition.winTable));
  // console.log("winTableClient pos" + JSON.stringify(this.designPosition.winTableClient));

  b ? g.plus(this.designPosition.winTableClient.pos) : g.plus(this.designPosition.winTable.pos);
  // console.log("wintable d =========> " + JSON.stringify(b));
  a == d._t7 ? (a = f.BJ_BOOST_TABLE_BG, c = _Tf._41.$("_b8._B7").toUpperCase()) : a == d._P5 ? (a = f.BJ_PUSH_TABLE_BG, c = _Tf._41.$("_b8._s1").toUpperCase()) : (c = _Tf._Ek._29._ca(a, c, !0), a = f.BJ_WIN_TABLE_BG, c = _Tf._41.$("_b8._q").toUpperCase() +
    " " + c);
  e.drawBlocks(this.context, g.x, g.y, h.width, h.height, a, f.BJ_WIN_TABLE_BORDER, Math.round(0.05 * h.width), h.borderWidth);
  e.fillText(this.context, this.designPosition, c, g.x + h.width / 2, g.y + h.offsetYtitle, f.BJ_TEXT_WIN_TABLE, h.textTitle, null, null, null, null, null, h.width, h.textFace, h.textStrokeThickness, f.BJ_TEXT_WIN_TABLE_STROKE)
};
_h8._2s._o4.PaigowChair = function () {
  _h8._2s._o4.PaigowChair.superclass.apply(this, arguments)
};
extend(_h8._2s._o4.PaigowChair, _Tf._Ek._2s._o4.PaigowChair);
_h8._2s._o4.PaigowChair.prototype.appendResources = function () {
  this.chairLeft = _Tf._M4._np.table.getElement("sitDownButtonLeftBaccarat");
  this.chairRight = _Tf._M4._np.table.getElement("sitDownButtonRightBaccarat")
};
_h8._2s._o4.PaigowChair.prototype.drawBetBlock = function (a, c) {
  var b = c ? this.designPosition.clientBetBlock : this.designPosition.betBlock,
    d = _h8._0l._vn,
    e = this.designPosition.chairs[this.realNumber].betBlockPos,
    f;
  c ? (f = b.pos.x, e = b.pos.y) : (f = this.position.x + e.x, e = this.position.y + e.y);
  _Tf._Ek._29.drawBlocks(this.context, f, e, b.width, b.height, d.BACCARAT_BET_BLOCK_BG, d.BACCARAT_BET_BLOCK_BORDER, b.cornerRadius, b.borderWidth);
  _Tf._Ek._29.fillText(this.context, this.designPosition, a, f + b.offsetTextX, e + b.offsetTextY,
    d.BACCARAT_BET_TEXT_COLOR, b.text, !1, !1, !1, null, null, b.width, b.textFace, b.textStrokeThickness, d.BACCARAT_BET_TEXT_BORDER)
};
_h8._2s._o4.PaigowChair.prototype.drawMiddle = function (a, c, b) {
  a && c && (this._I9(b), this._zp(b))
};
_h8._2s._o4.PaigowChair.prototype._zp = function (a) {
  var c = this.designPosition.chair,
    a = 3 > a ? c.offsetTextForLeft : c.offsetTextForRight;
  _Tf._Ek._29.fillText(this.middleContext, this.designPosition, _Tf._41.$("_P7._I4"), this.position.x + a, this.position.y - c.textEmptyChair / 6 + c.offsetTextY, _h8._0l._vn.BACCARAT_FREE_CHAIR_TEXT, c.textEmptyChair, null, null, null, null, c.textWeight, null, c.textFace)
};
_h8._2s._o4.PaigowChair.prototype._I9 = function (a) {
  _Tf._Ek._29.drawImage(this.middleContext, 3 > a ? this.chairLeft : this.chairRight, this.position.x, this.position.y, this.angle, this.designPosition.chair.imageWidth, this.designPosition.chair.imageHeight)
};
_h8._2s._o4.PaigowChair.prototype.clearItselfOnMiddle = function () {
  _Tf._Ek._29.fillRectToClear(this.middleContext, this.position.x - this.designPosition.chair.imageWidth / 2 - 50, this.position.y - this.designPosition.chair.imageHeight / 2 - 150, this.designPosition.chair.imageWidth + 100, this.designPosition.chair.imageHeight + 300)
};
_h8._2s._o4.PaigowChair.prototype._Ms = function () { };
_h8._2s._o4.PaigowChair.prototype._3p = function (a, c) {
  var b = this.designPosition.chair;
  return this.position.x - b.imageWidth / 2 < a && a < this.position.x + b.imageWidth / 2 && this.position.y - b.imageHeight / 2 < c && c < this.position.y + b.imageHeight / 2 ? !0 : !1
};
_h8._2s._o4.PaigowChair.prototype.hasAvatarPointAction = function (a, c, b) {
  var d = this.designPosition.chairs[this.realNumber],
    e = b ? this.designPosition.playerClient : this.designPosition.player;
  b ? b = this.designPosition.playerClient.posCenter.clone() : (b = d.posCenter.clone(), b.plus(d.posPlayerCenter.clone()));
  a = b.x - a;
  c = b.y - c;
  e = e.avatarWidth / 2;
  return a * a + c * c <= e * e
};
_h8._2s._o4.PaigowPlayer = function () {
  _h8._2s._o4.PaigowPlayer.superclass.apply(this, arguments)
};
extend(_h8._2s._o4.PaigowPlayer, _Tf._Ek._2s._o4.PaigowPlayer);
_h8._2s._o4.PaigowPlayer.prototype.appendResources = function () {
  this.avatarCircle = _Tf._M4._np.table.getElement("avatarCircleBaccarat")
};
_h8._2s._o4.PaigowPlayer.prototype.locate = function (a, c) {
  var b = this.designPosition.chairs[a],
    d = c ? this.designPosition.playerClient : this.designPosition.player;
  c ? this.position = this.designPosition.playerClient.posCenter.clone() : (this.position = b.posCenter.clone(), this.position.plus(b.posPlayerCenter.clone()));
  this.position.sub(new _8n(d.width / 2, d.height / 2))
};
_h8._2s._o4.PaigowPlayer.prototype._qp = function (a, c, b) {
  a = b ? this.designPosition.playerClient : this.designPosition.player;
  _Tf._Ek._29._F4(this.middleContext, _h8._0l._vn.AVATAR_BACK, this.position.x + a.width / 2 - 1, this.position.y + a.height / 2, a.avatarWidth / 2 + 1, !1);
  this.middleContext.save();
  this.middleContext.beginPath();
  this.middleContext.arc(this.position.x + a.width / 2 - 1, this.position.y + a.height / 2, a.avatarWidth / 2, 0, 2 * Math.PI, !0);
  this.middleContext.closePath();
  this.middleContext.clip();
  this.middleContext.drawImage(this.avatar,
    this.position.x + (a.width - a.avatarWidth) / 2 - 1, this.position.y + (a.height - a.avatarHeight) / 2, a.avatarWidth, a.avatarHeight);
  this.middleContext.restore()
};
_h8._2s._o4.PaigowPlayer.prototype._drawBlocks = function (a, c, b) {
  a = b ? this.designPosition.playerClient : this.designPosition.player;
  c = _h8._0l._vn;
  _Tf._Ek._29.drawBlocks(this.middleContext, this.position.x + a.offsetXBox, this.position.y + a.height + a.offsetYBox, a.statusWidth, a.statusHeight, c.BACCARAT_PLAYER_BLOCKS, c.BACCARAT_PLAYER_BLOCKS)
};
_h8._2s._o4.PaigowPlayer.prototype._Pm = function (a, c) {
  var b = c ? this.designPosition.playerClient : this.designPosition.player,
    d = this.position.x + b.width + b.offsetXBox + b.offsetXname,
    e = this.position.y + b.height + b.offsetYBox + b.offsetYname,
    f = _h8._0l._vn.PLAYER_NAME,
    g = b.textNameFontSize;
  _Tf._Ek._29.fillText(this.middleContext, this.designPosition, a, d, e, f, g, !1, !1, !0, b.textNameAlign, b.textNameFontWeight, b.maxNameWidth);
  _Tf._Ek._29.fillText(this.middleContext, this.designPosition, " :", d + b.maxNameWidth, e, f, g, !1, !1, !1)
};
_h8._2s._o4.PaigowPlayer.prototype._G = function (a, c) {
  var b = c ? this.designPosition.playerClient : this.designPosition.player;
  _Tf._Ek._29.fillText(this.context, this.designPosition, a, this.position.x + b.width + b.offsetXBox + b.offsetXmoney, this.position.y + b.height + b.offsetYBox + b.offsetYmoney, _h8._0l._vn.BACCARAT_PLAYER_CASH, b.textCashFontSize, !1, !1, !1, null, b.textMoneyFontWeight, b.maxMoneyWidth)
};
_h8._2s._o4.PaigowPlayer.prototype._uc = function (a, c) {
  var b = c ? this.designPosition.playerClient : this.designPosition.player,
    d = a ? _Tf._41.getLocale()._6[a.action] : "",
    e = a && a.amount ? a.amount : "",
    f = _h8._0l._vn,
    g = this.position.x + b.width + b.offsetXBox + b.offsetXoperation,
    h = this.position.y + b.height + b.offsetYBox + b.offsetYoperation,
    i = b.textNameFontSize;
  if ("" != d) {
    var j = _Tf._dc.PlayerAction,
      e = e ? ": " + _Tf._Ek._29._ca(e, a.moneyType, !0) : "";
    j._Eg != a.action && j._dh != a.action && (d = d + "" + e);
    _Tf._Ek._29.drawBlocks(this.context,
      this.position.x + b.offsetXBox, this.position.y + b.height + b.offsetYBox, b.statusWidth, b.statusHeight, f.BACCARAT_PLAYER_BLOCKS, f.BACCARAT_PLAYER_BLOCKS);
    _Tf._Ek._29.fillText(this.context, this.designPosition, d, g, h, f.PLAYER_NAME, i, !1, !1, !1, null, b.textNameFontWeight, b.statusWidth)
  }
};
_h8._2s._o4.PaigowPlayer.prototype._E0 = function (a, c) {
  if (a != _Tf._dc.PlayerState._w) {
    var b = c ? this.designPosition.playerClient : this.designPosition.player,
      d = _h8._0l._vn,
      e = this.position.x + b.width + b.offsetXBox + b.offsetXoperation,
      f = this.position.y + b.height + b.offsetYBox + b.offsetYoperation,
      g = b.textNameFontSize;
    _Tf._Ek._29.drawBlocks(this.context, this.position.x + b.offsetXBox, this.position.y + b.height + b.offsetYBox, b.statusWidth, b.statusHeight, d.BACCARAT_PLAYER_BLOCKS, d.BACCARAT_PLAYER_BLOCKS);
    _Tf._Ek._29.fillText(this.context,
      this.designPosition, _Tf._41.$("_Q5." + a), e, f, d.PLAYER_NAME, g, !1, !1, !1, null, b.textNameFontWeight, b.statusWidth)
  }
};
_h8._2s._o4.PaigowPlayer.prototype._drawStatus = function () { };
_h8._2s._o4.PaigowPlayer.prototype._drawActiveShape = function () { };
_h8._2s._o4.PaigowTimer = function (a, c, b, d) {
  _h8._2s._o4.PaigowTimer.superclass.apply(this, arguments);
  this.context = $("{0} {1}".format(b, _Tf._0l._N1._Rd)).get(0).getContext("2d");
  this.moving.angleDelta = 1;
  this.moving.angleStart = 0;
  this.moving.angleCurrent = 0;
  this.moving.angleTarget = _h8._0l._Jh._Nc._jn.timer.count - 1
};
extend(_h8._2s._o4.PaigowTimer, _Tf._Ek._2s._o4.PaigowTimer);
_h8._2s._o4.PaigowTimer.prototype.appendResources = function () {
  this.timer = _Tf._M4._np.table.getElement("timer");
  this.timerTail = _Tf._M4._np.table.getElement("timerTail");
  this.timerBack = _Tf._M4._np.table.getElement("timerBack");
  this.globalTimer = _Tf._M4._np.table.getElement("timer");
  this.globalTimerBg = _Tf._M4._np.table.getElement("globalTimerBgPaigow")
};
_h8._2s._o4.PaigowTimer.prototype.hide = function () {
  _h8._2s._o4.PaigowTimer.superclass.prototype.hide.apply(this, arguments);
  this.isShow = !1;
  _Tf._Hc._Og.isAndroidTablet() ? _Mf._ks.emit(_Ag._u7, [this.context]) : (this.clearItself(), this.clearGlobalTimer())
};
_h8._2s._o4.PaigowTimer.prototype.clearItself = function () {
  var a = this.designPosition.timerClient;
  a && this.positionCurrent && _Tf._Ek._29.fillRectToClear(this.context, this.positionCurrent.x - a.width / 2 - 4, this.positionCurrent.y - a.height / 2 - 4, a.width + 8, a.height + 8)
};
_h8._2s._o4.PaigowTimer.prototype.drawChairTimer = function () {
  if (this.positionCurrent && this.isShow && !(0 > this.moving.steps)) {
    var a = this.isClient ? this.designPosition.timerClient : this.designPosition.timer,
      c = _h8._0l._Jh._Nc._jn.timer.count >> 1,
      b = Math.round(this.moving.angleCurrent),
      d = Math.round(this.moving.angleTarget);
    this.clearItself();
    _Tf._Ek._29.drawImage(this.context, this.timerBack, this.positionCurrent.x, this.positionCurrent.y, 0, a.width, a.height, 0, 0, 0, 0, !0);
    c = b >= c ? this.timerTail : this.timer;
    this.context.save();
    this.context.beginPath();
    var e = 2 * Math.PI / 180;
    this.context.arc(this.positionCurrent.x, this.positionCurrent.y, a.width / 2, -Math.PI / 2 + e + 2 * (b / d) * Math.PI, -Math.PI / 2 + e, !0);
    this.context.lineTo(this.positionCurrent.x, this.positionCurrent.y);
    this.context.closePath();
    this.context.clip();
    _Tf._Ek._29.drawImage(this.context, c, this.positionCurrent.x, this.positionCurrent.y, 0, a.width, a.height, 0, 0, a.width, a.height, !0);
    this.context.restore()
  }
};
_h8._2s._o4.PaigowTimer.prototype.update = function () {
  if (this.moving.isMoving && this.isShow && 0 >= this.moving.steps) {
    if (this.moving.steps = -1, this.moving.isMoving = !1, this.moving.angleCurrent = this.moving.angleTarget, this.clearItself(), this.interval) clearInterval(this.interval), this.interval = null
  } else if (2 >= this.moving.steps && this.isShow) _Mf._q1.map[_Mf._q1.activeTableId].gameManager.button._Q7(), this.isShow = !1;
  else if (this.moving.maxAngleCurrent = (this.moving.stepsAll - this.moving.steps + 2) * this.moving.angleDelta,
    this.moving.angleCurrent < this.moving.maxAngleCurrent && (this.moving.angleCurrent += (this.moving.maxAngleCurrent - this.moving.angleCurrent) / (_Tf._0l.FRAME_RATE / 1.5)), this.moving.angleCurrent > this.moving.angleTarget) this.moving.angleCurrent = this.moving.angleTarget
};
_h8._2s._o4.PaigowTimer.prototype._U3 = function () {
  this.moving.steps--;
  if (0 === this.moving.steps) this.clearItself(), clearInterval(this.interval), this.interval = null
};
_h8._2s._o4.PaigowTimer.prototype.show = function (a, c) {
  if (!this.isShow) {
    this.interval && clearInterval(this.interval);
    this.isShow = !0;
    this.moving.isMoving = !0;
    this.moving.steps = c;
    this.moving.stepsAll = a;
    this.moving.angleDelta = (this.moving.angleTarget + 1) / a;
    this.moving.angleCurrent = this.moving.angleStart + this.moving.angleDelta * (a - c);
    var b = this._U3.bind(this);
    this.interval = setInterval(b, 1E3)
  }
};
_h8._2s._o4.PaigowTimer.prototype.drawGlobalTimer = function () {
  var a = this.designPosition.globalTimer,
    c = this.designPosition.globalTimer.bg,
    b = Math.round(this.designPosition.globalTimer.partsNumber * (1 - this.moving.angleCurrent / 360));
  this.clearGlobalTimer();
  if (this.isShow && !(0 > this.moving.steps)) {
    _Tf._Ek._29.drawImage(this.context, this.globalTimerBg, c.posCenter.x, c.posCenter.y, 0, c.width, c.height);
    _Tf._Ek._29.fillText(this.context, this.designPosition, b, a.posCenter.x + a.text.pos.x, a.posCenter.y + a.text.pos.y,
      a.text.color, a.text.size, null, null, null, null, null, null, null, a.text.textStrokeThickness, a.text.textStrokeColor);
    this.context.save();
    this.context.beginPath();
    var c = 2 * Math.PI / 180,
      b = Math.round(this.moving.angleCurrent),
      d = Math.round(this.moving.angleTarget);
    this.context.arc(a.posCenter.x, a.posCenter.y, a.width / 2, -Math.PI / 2 + c + 2 * (b / d) * Math.PI, -Math.PI / 2 + c, !0);
    this.context.lineTo(a.posCenter.x, a.posCenter.y);
    this.context.closePath();
    this.context.clip();
    _Tf._Ek._29.drawImage(this.context, this.timer, a.posCenter.x,
      a.posCenter.y, 0, a.width, a.height, 0, 0, a.width, a.height, !0);
    this.context.restore()
  }
};
_h8._2s._o4.PaigowTimer.prototype.clearGlobalTimer = function () {
  var a = this.designPosition.globalTimer.bg;
  a && _Tf._Ek._29.fillRectToClear(this.context, a.posCenter.x - a.width / 2, a.posCenter.y - a.height / 2, a.width, a.height)
};
_h8._2s._o4.PaigowWinTable = function () {
  _h8._2s._o4.PaigowWinTable.superclass.apply(this, arguments)
};
extend(_h8._2s._o4.PaigowWinTable, _Tf._Ek._2s._o4.PaigowWinTable);
_h8._2s._o4.PaigowWinTable.prototype.locate = function (a) {
  null === a ? this.position = this.designPosition.bank.posCenter.clone() : (this.position = this.designPosition.chairs[a].posCenter.clone(), this.position.plus(this.designPosition.chairs[a].posWinTable))
};
_h8._2s._o4.PaigowWinTable.prototype._drawMessage = function (a, c, b) {
  var d = _Tf._dc.AnimationType,
    e = _Tf._Ek._29,
    f = _h8._0l._vn,
    g = this.position.clone(),
    h = b ? this.designPosition.winTableClient : this.designPosition.winTable;
  b ? g.plus(this.designPosition.winTableClient.pos) : g.plus(this.designPosition.winTable.pos);
  a == d._21 ? (a = f.PAIGOW_WIN_TABLE_BG, c = _Tf._41.$("_b8._B7").toUpperCase()) : a == d._h7 ? (a = f.PAIGOW_WIN_TABLE_BG, c = _Tf._41.$("_b8._C7").toUpperCase()) : (c = _Tf._Ek._29._ca(a, c, !0), a = f.PAIGOW_WIN_TABLE_BG, c = _Tf._41.$("_b8._q").toUpperCase() + " " + c);
  e.drawBlocks(this.context, g.x, g.y, h.width, h.height, a, f.BJ_WIN_TABLE_BORDER, Math.round(0.05 * h.width), h.borderWidth);
  e.fillText(this.context, this.designPosition, c, g.x + h.width / 2, g.y + h.offsetYtitle, f.PAIGOW_TEXT_WIN_TABLE, h.textTitle, null, null, null, null, null, h.width, h.textFace, h.textStrokeThickness, f.BJ_TEXT_WIN_TABLE_STROKE)
};
_h8._2s._3k._Ic = function (a) {
  _h8._2s._3k._Ic.superclass.apply(this, arguments)
};
extend(_h8._2s._3k._Ic, _Tf._Ek._2s._3k._Ic);
_h8._2s._3k._Ic.prototype.hideRaiseBlock = function () {
  _Tf._N1.$(this.parentId + " " + _Tf._0l._N1._Mh).hide()
};
_h8._2s._3k._Ic.prototype._a7 = function (a) {
  this.draw(a, this.parentId + _Tf._0l._N1._Zb + "-")
};
_h8._2s._3k._gl = function (a) {
  _h8._2s._3k._gl.superclass.apply(this, arguments)
};
extend(_h8._2s._3k._gl, _Tf._Ek._2s._3k._gl);
_h8._2s._3k._gl.prototype.init = function () {
  var a = _Tf._0l._N1,
  c = this.designPosition.canvas;
  this.staticCanvas = new _Tf._Hc._Uf(this.parentId + a._Lc, c.width, c.height);
  this.gameCanvas = new _Tf._Hc._Uf(this.parentId + a._4e, c.width, c.height, _Mf.CanvasFieldInstance);
  this.middleCanvas = new _Tf._Hc._Uf(this.parentId + a._og, c.width, c.height);
  if (0 < $(this.parentId + a._hs).length) this.extraCanvas = new _Tf._Hc._Uf(this.parentId + a._hs, c.width, c.height);
  this.timerCanvas = new _Tf._Hc._Uf(this.parentId + a._Rd, c.width, c.height)
};
_h8._2s._3k._gl.prototype.clearCanvasByContext = function (a) {
  a === this.timerCanvas.getContext() ? this.timerCanvas.clear() : this.base.clearCanvasByContext.apply(this, arguments)
};
_h8._2s._3k._gl.prototype.resize = function () {
  var a = _Tf._N1,
    c = _Tf._0l._N1,
    b = a.$(this.parentId + c._pf);
  a.$(this.parentId + c._es);
  var d = a.$(this.parentId + c._Qf)[0];
  a.$(this.parentId + c._B4);
  var e = b.width(),
    f = e,
    g = b.height(),
    b = g,
    h = this.designPosition.canvas,
    i = h.width / h.height;
  e / g > i ? f = parseInt(b * i) : b = parseInt(f / i);
  g = f / h.width;
  h = b / h.height;
  this.leftMargin = parseInt((e - f) / 2);
  this.topMargin = 0;
  this.gameCanvas.replace(this.topMargin, this.leftMargin);
  this.staticCanvas.replace(this.topMargin, this.leftMargin);
  this.middleCanvas.replace(this.topMargin,
    this.leftMargin);
  this.timerCanvas.replace(this.topMargin, this.leftMargin);
  this.extraCanvas && this.extraCanvas.replace(this.topMargin, this.leftMargin);
  if (e = _h8._wc._3k[this.gameType]) g *= e.scale.x, d.setAttribute("transform", "translate(" + e.offset.x * g + "," + (this.topMargin + e.offset.y * h) + ") scale(" + g + "," + e.scale.y * h + ")");
  this.topMargin += 0 < a.$(c._j7).length ? a.$(c._j7).height() : 0;
  this.gameCanvas.resize(f, b);
  this.staticCanvas.resize(f, b);
  this.middleCanvas.resize(f, b);
  this.timerCanvas.resize(f, b);
  this.extraCanvas && this.extraCanvas.resize(f, b)
};
_h8._2s._bf._n8 = function () {
  _h8._2s._bf._n8.superclass.apply(this, arguments)
};
extend(_h8._2s._bf._n8, _Tf._Ek._2s._bf._n8);
_h8._2s._bf._n8.prototype._1a = function (a) {
  _Tf._N1._zh("", a, this.onGameServerFailedCallback.bind(this), _Tf._41.$("_j3._70"));
  $.mobile.hidePageLoadingMsg()
};
_h8._2s._bf._n8.prototype.onGameServerFailedCallback = function () {
  _Mf._Md.changePage(_Tf._0l._N1._ff.GAME_TYPE)
};
_h8._2s._o4._Na = function () {
  _h8._2s._o4._Na.superclass.apply(this, arguments)
};
extend(_h8._2s._o4._Na, _Tf._Ek._2s._o4._Na);
_h8._2s._o4._Na.prototype._zp = function () {
  _Tf._Ek._29.fillText(this.middleContext, this.designPosition, _Tf._41.$("_P7._p7"), this.position.x, this.position.y - this.designPosition.chair.textEmptyChair / 6 + this.designPosition.chair.offsetXText, _h8._0l._vn.FREE_CHAIR_TEXT, this.designPosition.chair.textEmptyChair)
};
_h8._2s._o4._Na.prototype._I9 = function () {
  _Tf._Ek._29.drawImage(this.middleContext, this.chair, this.position.x, this.position.y, this.angle, this.designPosition.chair.imageWidth, this.designPosition.chair.imageHeight)
};
_h8._2s._o4._Na.prototype._Ms = function () { };
_h8._2s._o4._Na.prototype.drawMiddle = function (a, c) {
  a && c && (this._I9(), this._zp())
};
_h8._2s._o4._Na.prototype.clearItselfOnMiddle = function (a) {
  var c = 2 * this.designPosition.chair.radius + 20,
    b = this.designPosition.player.textNameFontSize * this.designPosition.textSizeCoeff + this.designPosition.player.offsetYTextBox + 5 + this.designPosition.chair.radius / 2,
    d, c = c + 300,
    b = b + 300;
  d = this.position;
  1 == a && (d = this.designPosition.playerClient.posCenter.clone());
  _Tf._Ek._29.fillRectToClear(this.middleContext, d.x - this.designPosition.chair.radius - 250, d.y - this.designPosition.chair.radius - 250, c, b)
};
_h8._2s._o4._No = function (a, c, b) {
  _h8._2s._o4._No.superclass.apply(this, arguments)
};
extend(_h8._2s._o4._No, _Tf._Ek._2s._o4._No);
_h8._2s._o4._No.prototype._drawText = function (a, c) {
  this.isPotChip && this.base._drawText.apply(this, arguments)
};
_h8._2s._o4.Command = function () {
  _h8._2s._o4.Command.superclass.apply(this, arguments)
};
extend(_h8._2s._o4.Command, _Tf._Ek._2s._o4.Command);
_h8._2s._o4.Command.prototype.buildCheckboxTemplate = function () {
  var a = this.factory.gameType;
  if ((_Tf._dc.GameType._98(a) || _Tf._dc.GameType.isHighLow(a)) && -1 !== this.label.indexOf(" ")) this.label = this.label.replace(" ", '<div class="stud">').concat("</div>");
  this.button = _h8._wc._an.GAME_CHECKBOX.fill({
    id: this.id,
    label: this.label,
    value: this.value ? "checked" : ""
  })
};
_Tf._Ek._2s._o4.Dealer = function (a, c, b) {
  this.dealerChair = null;
  this.designPosition = _Mf._b1.getPositionByGameType(b);
  this.appendResources();
  this.locate();
  this.context = a;
  this.middleContext = c
};
_Tf._Ek._2s._o4.Dealer.prototype = {
  locate: function () {
    this.position = this.designPosition.dealerChair
  },
  getPosition: function () {
    return this.position
  },
  getContext: function () {
    return this.context
  },
  appendResources: function () {
    this.dealerChair = _Tf._M4._np.table.getElement("dealerChair")
  },
  drawMiddle: function () {
    this.clearMiddle();
    this.appendResources();
    if (this.dealerChair) {
      var a = this.getPosition();
      _Tf._Ek._29.drawImage(this.middleContext, this.dealerChair, a.posCenter.x, a.posCenter.y, 0, a.width, a.height)
    }
  },
  clearMiddle: function () {
    if (this.dealerChair) {
      var a = this.getPosition();
      _Tf._Ek._29.fillRectToClear(this.middleContext, a.posCenter.x - a.width / 2, a.posCenter.y - a.height / 2, a.width, a.height + 2)
    }
  }
};
_h8._2s._o4._43 = function (a, c, b) {
  _h8._2s._o4._43.superclass.apply(this, arguments)
};
extend(_h8._2s._o4._43, _Xl._Vn._Ek._2s._o4._43);
_h8._2s._o4._43.prototype._drawGift = function (a, c) {
  if (!_Tf._dc.GameType.isCraps(_Mf._q1.getFromMapGameTableAction().model.gameType) && this.giftImage && !_Tf._dc.GameType.isCraps(_Mf._q1.getFromMapGameTableAction().model.gameType)) {
    var b = _Tf._Ek._29,
      d = _h8._0l._vn,
      e = this.position,
      f = c ? this.designPosition.giftClient : this.designPosition.gift;
    b.drawImage(this.context, this.giftImage, e.x + f.offsetX, e.y + f.offsetY, 0, f.width || this.giftImage.width, f.height || this.giftImage.height);
    null !== f.nameYoffset && b.fillText(this.context,
      this.designPosition, a.name, e.x, e.y + f.nameYoffset, d.TEXT_WIN_TABLE, 12, !1, "", !0)
  }
};
_h8._2s._o4._0q = function (a, c, b, d, e, f) {
  _h8._2s._o4._0q.superclass.apply(this, arguments)
};
extend(_h8._2s._o4._0q, _Tf._Ek._2s._o4._0q);
_h8._2s._o4._0q.prototype._qp = function (a, c, b) {
  a = b ? this.designPosition.playerClient : this.designPosition.player;
  _Tf._Ek._29._F4(this.middleContext, _h8._0l._vn.AVATAR_BACK, this.position.x + a.width / 2 - 1, this.position.y + a.height / 2, a.avatarWidth / 2 + 1, !1);
  this.middleContext.save();
  this.middleContext.beginPath();
  this.middleContext.arc(this.position.x + a.width / 2 - 1, this.position.y + a.height / 2, a.avatarWidth / 2, 0, 2 * Math.PI, !0);
  this.middleContext.closePath();
  this.middleContext.clip();
  this.middleContext.drawImage(this.avatar,
    this.position.x + (a.width - a.avatarWidth) / 2 - 1, this.position.y + (a.height - a.avatarWidth) / 2, a.avatarWidth, a.avatarHeight);
  this.middleContext.restore()
};
_h8._2s._o4._0q.prototype._drawBlocks = function (a, c, b) {
  a = b ? this.designPosition.playerClient : this.designPosition.player;
  c = _h8._0l._vn;
  _Tf._dc.GameType._98(this.factory.gameType) ? _Tf._Ek._29.drawBlocks(this.middleContext, this.chair.nameBlock.position.left, this.chair.nameBlock.position.top, this.chair.nameBlock.position.width, this.chair.nameBlock.position.height, c.PLAYER_BLOCKS, c.PLAYER_BLOCKS_BORDER) : _Tf._Ek._29.drawBlocks(this.middleContext, this.position.x + a.offsetXBox, this.position.y + a.height + a.offsetYNameBox,
    a.width, a.statusHeight, c.PLAYER_BLOCKS, c.PLAYER_BLOCKS_BORDER)
};
_h8._2s._o4._0q.prototype._Pm = function (a, c) {
  var b = c ? this.designPosition.playerClient : this.designPosition.player;
  _Tf._dc.GameType._98(this.factory.gameType) ? _Tf._Ek._29.fillText(this.middleContext, this.designPosition, a, this.chair.nameText.position.left, this.chair.nameText.position.top, _h8._0l._vn.PLAYER_NAME, b.textNameFontSize, !1, !1, !1, !1, "", b.maxNameWidth) : _Tf._Ek._29.fillText(this.middleContext, this.designPosition, a, this.position.x + 9 * b.width / 32 + b.offsetXBox, this.position.y + b.height + b.offsetYname + b.offsetYNameBox, _h8._0l._vn.PLAYER_NAME, b.textNameFontSize, !1, !1, !1, !1, "", b.maxNameWidth)
};
_h8._2s._o4._0q.prototype._G = function (a, c) {
  var b = c ? this.designPosition.playerClient : this.designPosition.player;
  _Tf._dc.GameType._98(this.factory.gameType) ? _Tf._Ek._29.fillText(this.context, this.designPosition, a, this.chair.playerMoney.position.left, this.chair.playerMoney.position.top, _h8._0l._vn.PLAYER_CASH, b.textCashFontSize) : _Tf._Ek._29.fillText(this.context, this.designPosition, a, this.position.x + 25 * b.width / 32 + b.offsetXBox, this.position.y + b.height + b.offsetYcash + b.offsetYNameBox, _h8._0l._vn.PLAYER_CASH,
    b.textCashFontSize)
};
_h8._2s._o4._0q.prototype._uc = function (a, c) {
  if (a && a.amount) {
    var b = c ? this.designPosition.playerClient : this.designPosition.player,
      d = _h8._0l._vn,
      e = _Tf._Ek._29._ca(a.amount, a.moneyType, !0);
    _Tf._dc.GameType._98(this.factory.gameType) ? (_Tf._Ek._29.drawBlocks(this.context, this.chair.betMoney.position.left, this.chair.betMoney.position.top, this.chair.betMoney.position.width, this.chair.betMoney.position.height, d.PLAYER_BLOCKS, d.PLAYER_BLOCKS_BORDER), _Tf._Ek._29.fillText(this.context, this.designPosition, e, this.chair.betMoneyText.position.left,
      this.chair.betMoneyText.position.top, d.TEXT_CHIP, this.chair.betMoneyText.fontSize, !1, "", !1, !1, b.amountTextWeight)) : (_Tf._Ek._29.drawBlocks(this.context, this.position.x + b.offsetXBox, this.position.y + b.offsetYTextBox + b.offsetYBoxOperation, b.textAmountWidth, b.textAmountHeight, d.PLAYER_BLOCKS, d.PLAYER_BLOCKS_BORDER, Math.round(b.textAmountCornerRadius)), _Tf._Ek._29.fillText(this.context, this.designPosition, e, this.position.x + b.textAmountWidth / 2 + b.offsetXBox, this.position.y + b.offsetYTextBox + b.offsetYTextAmount + b.offsetYBoxOperation, d.TEXT_CHIP, b.textChipFontSize, !1, "", !1, !1, b.amountTextWeight));
    this._drawActionText(a, c)
  }
};
_h8._2s._o4._0q.prototype._drawActionText = function (a, c) {
  var b = c ? this.designPosition.playerClient : this.designPosition.player,
    d = a ? _Tf._41.getLocale()._6[a.action] : "",
    e = _h8._0l._vn;
  "" != d && (_Tf._dc.GameType._98(this.factory.gameType) ? (_Tf._Ek._29.drawBlocks(this.context, this.chair.actionTextBlock.position.left, this.chair.actionTextBlock.position.top, this.chair.actionTextBlock.position.width, this.chair.actionTextBlock.position.height, e.PLAYER_BLOCKS, e.PLAYER_BLOCKS), _Tf._Ek._29.fillText(this.context, this.designPosition,
    d, this.chair.actionText.position.left, this.chair.actionText.position.top, e._Yh, this.chair.actionText.fontSize)) : (_Tf._Ek._29.drawBlocks(this.context, this.position.x + b.width - b.textActionWidth + b.offsetXBox, this.position.y + b.offsetYTextBox + b.offsetYBoxOperation, b.textActionWidth, b.textActionHeight, e.PLAYER_BLOCKS, e.PLAYER_BLOCKS_BORDER, Math.round(b.textActionCornerRadius)), _Tf._Ek._29.fillText(this.context, this.designPosition, d, this.position.x + b.width - b.textActionWidth / 2 + b.offsetXBox, this.position.y + b.offsetYTextBox + b.offsetYTextAction + b.offsetYBoxOperation, e._Yh, b.textActionFontSize)))
};
_h8._2s._o4._0q.prototype._drawStatus = function () { };
_h8._2s._o4._0q.prototype._drawActiveShape = function () { };
_h8._2s._bf._U0 = function () {
  _h8._2s._bf._U0.superclass.apply(this, arguments)
};
extend(_h8._2s._bf._U0, _Xl._br._Ek._2s._bf._U0);
_h8._2s._bf._U0.prototype.drawBestHand = function (a) {
  _me.publicProfile && (a ? (a = _h8._wc._an.getBestHandString(a), _me.publicProfile.bestHand(a)) : _me.publicProfile.bestHand(_h8._wc._an.BEST_HAND_EMPTY || ""))
};
_h8._2s._bf._0p = function (a, c) {
  _h8._2s._bf._0p.superclass.apply(this, arguments)
};
extend(_h8._2s._bf._0p, _Xl._ae._Ek._2s._bf._0p);
_h8._2s._bf._0p.prototype._9j = function (a) {
  // console.log("avatar a "+ JSON.stringify(a)); this function not calling
  _me.publicProfile.clientAvatar(a && a.normal ? a.normal : _Tf._0l._A._Nc._0q);
  _Tf._Ek._29.hidePageLoadingMessage()
};
_h8._2s._bf._l7 = function () {
  _h8._2s._bf._l7.superclass.apply(this, arguments)
};
extend(_h8._2s._bf._l7, _Tf._Ek._2s._bf._l7);
_h8._2s._bf._l7.prototype.addChatMessages = function (a) {
  if ("table" == _Mf._Md.getVisiblePage()) {
    var c = [];
    _Tf._N1.$(_Tf._0l._N1._pi);
    a.forEach(function (a) {
      "undefined" !== a.authorId && 0 < a.authorId && c.push(a)
    });
    _me.chat.chatHistory.set(a, !1);
    _me.chat.miniChatHistory.set(c, !1);
    var a = document.getElementById("chat-messages-block"),
      b = document.getElementById("chat-dealer-block");
    if (null != a) a.scrollTop = a.scrollHeight;
    if (null != b) b.scrollTop = b.scrollHeight
  }
};
_h8._2s._o4._D = function (a, c, b, d) {
  _h8._2s._o4._D.superclass.apply(this, arguments);
  this.context = $("{0} {1}".format(b, _Tf._0l._N1._Rd)).get(0).getContext("2d");
  this.moving.angleDelta = 1;
  this.moving.angleStart = 0;
  this.moving.angleCurrent = 0;
  this.moving.angleTarget = _h8._0l._Jh._Nc._jn.timer.count - 1
};
extend(_h8._2s._o4._D, _Tf._Ek._2s._o4._D);
_h8._2s._o4._D.prototype.appendResources = function () {
  this.timer = _Tf._M4._np.table.getElement("timer");
  this.timerTail = _Tf._M4._np.table.getElement("timerTail");
  this.timerBack = _Tf._M4._np.table.getElement("timerBack")
};
_h8._2s._o4._D.prototype.hide = function () {
  this.base.hide.apply(this, arguments);
  _Tf._Hc._Og.isAndroidTablet() ? _Mf._ks.emit(_Ag._u7, [this.context]) : this.clearItself()
};
_h8._2s._o4._D.prototype.clearItself = function () {
  var a = this.designPosition.timerClient;
  a && this.positionCurrent && _Tf._Ek._29.fillRectToClear(this.context, this.positionCurrent.x - a.width / 2 - 4, this.positionCurrent.y - a.height / 2 - 4, a.width + 8, a.height + 8)
};
_h8._2s._o4._D.prototype.draw = function () {
  if (this.positionCurrent && this.isShow && !(0 > this.moving.steps)) {
    var a = this.isClient ? this.designPosition.timerClient : this.designPosition.timer,
      c = _h8._0l._Jh._Nc._jn.timer.count >> 1,
      b = Math.round(this.moving.angleCurrent),
      d = Math.round(this.moving.angleTarget);
    this.clearItself();
    _Tf._Ek._29.drawImage(this.context, this.timerBack, this.positionCurrent.x, this.positionCurrent.y, 0, a.width, a.height, 0, 0, 0, 0, !0);
    c = b >= c ? this.timerTail : this.timer;
    this.context.save();
    this.context.beginPath();
    var e = 2 * Math.PI / 180;
    this.context.arc(this.positionCurrent.x, this.positionCurrent.y, a.width / 2, -Math.PI / 2 + e + 2 * (b / d) * Math.PI, -Math.PI / 2 + e, !0);
    this.context.lineTo(this.positionCurrent.x, this.positionCurrent.y);
    this.context.closePath();
    this.context.clip();
    _Tf._Ek._29.drawImage(this.context, c, this.positionCurrent.x, this.positionCurrent.y, 0, a.width, a.height, 0, 0, a.width, a.height, !0);
    this.context.restore()
  }
};
_h8._2s._o4._D.prototype.update = function () {
  if (this.moving.isMoving && this.isShow && 0 >= this.moving.steps) {
    if (this.moving.steps = -1, this.moving.isMoving = !1, this.moving.angleCurrent = this.moving.angleTarget, this.clearItself(), this.interval) clearInterval(this.interval), this.interval = null
  } else if (this.moving.maxAngleCurrent = (this.moving.stepsAll - this.moving.steps + 2) * this.moving.angleDelta, this.moving.angleCurrent < this.moving.maxAngleCurrent && (this.moving.angleCurrent += (this.moving.maxAngleCurrent - this.moving.angleCurrent) / (_Tf._0l.FRAME_RATE / 1.5)), this.moving.angleCurrent > this.moving.angleTarget) this.moving.angleCurrent = this.moving.angleTarget
};
_h8._2s._o4._D.prototype._U3 = function () {
  this.moving.steps--;
  if (0 === this.moving.steps) this.clearItself(), clearInterval(this.interval), this.interval = null
};
_h8._2s._o4._D.prototype.show = function (a, c) {
  this.interval && clearInterval(this.interval);
  this.isShow = !0;
  this.moving.isMoving = !0;
  this.moving.steps = c;
  this.moving.stepsAll = a;
  this.moving.angleDelta = (this.moving.angleTarget + 1) / a;
  this.moving.angleCurrent = this.moving.angleStart + this.moving.angleDelta * (a - c);
  var b = this._U3.bind(this);
  this.interval = setInterval(b, 1E3)
};
_h8._0l._vn = {
  NEW_PLAYER: "#39C3FF",
  ACTIVE_PLAYER: "#C9FF39",
  _Yh: "#FFFFFF",
  PLAYER_CASH: "#E4D30D",
  PLAYER_NAME: "#FFFFFF",
  PLAYER_BLOCKS: "#555555",
  PLAYER_BLOCKS_BORDER: "#000000",
  CHAIR_RANK: "#FFFFFF",
  AVATAR_BACK: "#81275f",
  WIN_TABLE: "#777777",
  CHIP_TABLE: "#777777",
  _F9: "#777777",
  STATUS_TABLE: "#0071C1",
  TEXT: "#FFFFFF",
  TEXT_CHIP: "#E4D30D",
  TEXT_TABLE_MESSAGE: "#ffffff",
  TEXT_WIN_TABLE: "#000000",
  FREE_CHAIR_TEXT: "#E4D30D",
  DEFAULT: "#FFFFFF",
  TIMER_BACK: "#000000",
  TIMER_BEGIN: "#B6FF00",
  TIMER_MIDDLE: "#FFD800",
  TIMER_END: "#FF6A00",
  TIMER_BAD: "#FF2F00",
  TIMER_BORDER: "#444",
  CARD_SELECTED: "#FFFFFF",
  CHIP_SELECTED: "rgba(255,255,255,0)",
  CARD_SHOE: "#FFFFFF",
  BJ_FREE_CHAIR_TEXT: "#FFFFFF",
  BJ_PLAYER_CASH: "#4ABAFE",
  BJ_PLAYER_BLOCKS_BORDER: "#000000",
  BJ_TEXT_WIN_TABLE: "#FFFFFF",
  BJ_WIN_TABLE_BORDER: "#000000",
  BJ_WIN_TABLE_BG: "rgba(64,210,78,0.66)",
  BJ_BOOST_TABLE_BG: "rgba(182,34,0,0.66)",
  BJ_PUSH_TABLE_BG: "rgba(123,0,72,0.66)",
  BJ_TEXT_WIN_TABLE_STROKE: "#076200",
  BJ_BET_BLOCK_BG: "rgba(190,150,25,0.66)",
  BJ_BET_BLOCK_BORDER: "#1d1d1e",
  BJ_BET_TEXT_COLOR: "#FFFFFF",
  BJ_BET_TEXT_BORDER: "#593a01",
  BJ_PLAYER_BLOCKS: "#000000",
  BACCARAT_FREE_CHAIR_TEXT: "#FFFFFF",
  BACCARAT_WIN_TABLE_BG: "#000",
  BACCARAT_WIN_TABLE_BORDER: "#000",
  BACCARAT_TEXT_WIN_TABLE: "#FFFFFF",
  BACCARAT_TEXT_WIN_TABLE_STROKE: "#000",
  BACCARAT_RANK_BG: "#8e0707",
  BACCARAT_RANK_BORDER: "#4b0404",
  BACCARAT_PLAYER_CASH: "#febf01",
  BACCARAT_BET_BLOCK_BG: "rgba(190,150,25,0.66)",
  BACCARAT_BET_BLOCK_BORDER: "#1d1d1e",
  BACCARAT_BET_TEXT_COLOR: "#FFFFFF",
  BACCARAT_BET_TEXT_BORDER: "#593a01",
  BACCARAT_PLAYER_BLOCKS: "#000000",
  PAIGOW_TEXT_WIN_TABLE: "#FFFFFF",
  PAIGOW_WIN_TABLE_BG: "#000000"
};
_h8._0l.START_PAGE_FOR_APPLICATION = _Tf._0l._N1._ff._fq;
_h8._0l.START_PAGE_AFTER_LOGIN = "game-type";
hellokaushal = "holdem";
_h8._0l.START_PAGE_AFTER_RECONNECT = "lobby";
_h8._0l.PagePopupEffectsTime = 2E3;
_h8._0l.PagePopupDisplayTime = 3E3;
_h8._0l.SmartOverflow = {
  hasThumbArrows: !0,
  hasShadow: !1
};
_h8._0l.hourFormat = "24";
_h8._0l.screenSize = {
  width: 960,
  height: 640
};
_h8._0l.NEED_REDRAW_ALL_CHAIRS = !0;
_h8._0l.NEED_CLEAR_WIN_TABLE = !1;
_h8._0l.JACKPOT_AWARDED_DELAY = 4E3;
_h8._0l.DefaultAutoActions = {};
_h8._0l.DefaultAutoActions[_Tf._dc.AutoAction.__f] = !0;
_h8._0l.DefaultAutoActions[_Tf._dc.AutoAction._6d] = !0;
_h8._0l.isUseFundsThousandsSeparator = !0;
_h8._0l.positions = {
  72: "Holdem",
  74: "BlackJack",
  79: "Omaha",
  80: "OmahaHL",
  83: "Stud",
  84: "StudHL",
  86: "Baccarat",
  71: "Paigow",
  75: "Craps"
};



_Tf._hr.extendObject({
  _3f: "lobby",
  HOME_ACTIVE_CLIENT_TABLES: "home-active-client-tables",
  LOBBY_TABLES_FILTERS: "lobby-tables-filters",
  LOBBY_TABLES_FILTER_SPEED: "lobby-tables-filter-speed",
  LOBBY_TABLES_FILTER_STAKES: "lobby-tables-filter-stakes",
  LOBBY_TABLES_FILTER_BUY_IN: "lobby-tables-filter-buyin",
  LOBBY_TABLES_FILTER_PLAYERS: "lobby-tables-filter-players",
  LOBBY_TABLES_FILTER_PLAYERS_BLACKJACK: "lobby-tables-filter-players-blackjack",
  LOBBY_TABLES_FILTER_PLAYERS_BACCARAT: "lobby-tables-filter-players-baccarat",
  LOBBY_TABLES_FILTER_POT: "lobby-tables-filter-pot",
  LOBBY_TABLES_LIST: "lobby-tables-list",
  LOBBY_TABLES_SEARCH: "tables-search",
  LOBBY_TOURNAMENTS_FILTERS: "lobby-tournaments-filters",
  LOBBY_TOURNAMENTS_LIST: "lobby-tournaments-list",
  LOBBY_TOURNAMENTS_FILTER_GAME_TYPE: "lobby-tournaments-filter-game-type",
  LOBBY_TOURNAMENTS_FILTER_BUY_IN: "lobby-tournaments-filter-buyin",
  LOBBY_TOURNAMENTS_FILTER_TOURNAMENT_STATE: "lobby-tournaments-filter-tournament-state",
  LOBBY_TOURNAMENTS_FILTER_TOURNAMENT_TYPE: "lobby-tournaments-filter-tournament-type",
  _Gq: "tournament-tables",
  TOURNAMENT_PLAYERS: "tournament-players",
  PROFILE_OVERVIEW: "profile-overview",
  _u5: "profile-overview",
  PROFILE_FILTER_LOCALE: "profile-filter-locale",
  OPTIONS: "options",
  OPTIONS_LANGUAGE: "options-language",
  OPTIONS_SETTINGS: "options-settings",
  VEGAS_LOGIN: "vegas-login",
  GAME_TYPE: "game-type",
  GAME_TYPE_LOADER: "game-type-loader",
  POKER_TABLE_LIST: "poker-table-list",
  BLACK_JACK_TABLE_LIST: "black-jack-table-list",
  BACCARAT_TABLE_LIST: "baccarat-table-list",
  PAIGOW_TABLE_LIST: "paigow-table-list",
  CRAPS_TABLE_LIST: "craps-table-list"
}, _Tf._0l._N1._ff);
_Tf._hr.extendObject({
  FOOTER: "_footer",
  BLOCK_AD: "_blockad",
  PROFILE_MENU: "_profileMenu",
  LOBBY_TABLES_MENU: "_tablesMenu",
  LOGIN_MENU: "_loginMenu",
  GIFT_MENU: "_giftMenu",
  TABLE_TIMER: "_tableTimer",
  LOGIN_FOOTER: "_loginFooter"
}, _Tf._0l._N1._k9);
_Tf._hr.extendObject({
  LOBBY_BUTTONS_ROW: "#lobby-buttons-row",
  DRAG_AND_DROP_CARD: ".card",
  DRAG_AND_DROP_POPUP: "#drop-popup",
  DRAG_AND_DROP_POPUP_CLOSE: "#drop-popup-close-button",
  DRAG_AND_DROP_DROP_ZONE: ".dropzone",
  DRAG_AND_DROP_MAIN_CARD_HOLDER: "#main-card-holder",
  DRAG_AND_DROP_ACTIVE_CARD: "active-card",
  DRAG_AND_DROP_HOLDER1: "card-holder-1",
  DRAG_AND_DROP_HOLDER2: "card-holder-2",
  DRAG_AND_DROP_TO_HOLDER1: "card-to-holder-1",
  DRAG_AND_DROP_TO_HOLDER2: "card-to-holder-2",
  DRAG_AND_DROP_PLAY_BUTTON: "#play-hand-button",
  DRAG_AND_DROP_CARD_ITEM: "card-item-"
}, _Tf._0l._N1);
_h8._0l._Jh._Nc = {
  deck: {
    tplDefault: "DeviceDefault/deck/{0}.png",
    tplMobile: "DeviceDefault/deck/{0}.png"
  },
  smallDeck: {
    tplDefault: "DeviceDefault/deck-small/{0}.png",
    tplMobile: "DeviceDefault/deck-small/{0}.png"
  },
  chip: {
    tplDefault: "DeviceDefault/chip/chip-{0}.png",
    tplMobile: "DeviceDefault/chip/chip-{0}.png",
    count: 1
  },
  table: {
    tplDefault: "DeviceDefault/table.png",
    tplMobile: "DeviceDefault/table.png"
  },
  chair: {
    tplDefault: "DeviceDefault/chair.png",
    tplMobile: "DeviceDefault/chair.png"
  },
  player: {
    tplDefault: "default-avatar.png",
    tplMobile: "default-avatar.png"
  },
  dealer: {
    tplDefault: "DeviceDefault/dealer.png",
    tplMobile: "DeviceDefault/dealer.png"
  },
  _jn: {
    dealerChair: {
      tplDefault: "DeviceDefault/chair-dealer.png",
      tplMobile: "DeviceDefault/chair-dealer.png"
    },
    timer: {
      count: 360,
      tplDefault: "DeviceDefault/timer.png",
      tplMobile: "DeviceDefault/timer.png"
    },
    timerTail: {
      tplDefault: "DeviceDefault/timer.png",
      tplMobile: "DeviceDefault/timer.png"
    },
    timerBack: {
      tplDefault: "DeviceDefault/timerBack.png",
      tplMobile: "DeviceDefault/timerBack.png"
    },
    playerEmpty: {
      tplDefault: "DeviceDefault/player-empty.png",
      tplMobile: "DeviceDefault/player-empty.png"
    },
    playerBar: {
      tplDefault: "DeviceDefault/bar-back.png",
      tplMobile: "DeviceDefault/bar-back.png"
    },
    playerBarAway: {
      tplDefault: "DeviceDefault/bar-away.png",
      tplMobile: "DeviceDefault/bar-away.png"
    },
    playerBarTimer: {
      tplDefault: "DeviceDefault/bar-timer.png",
      tplMobile: "DeviceDefault/bar-timer.png"
    },
    playerBack: {
      tplDefault: "DeviceDefault/player-back.png",
      tplMobile: "DeviceDefault/player-back.png"
    },
    playerActiveBack: {
      tplDefault: "DeviceDefault/player-active-back.png",
      tplMobile: "DeviceDefault/player-active-back.png"
    },
    winTable: {
      tplDefault: "DeviceDefault/win-table.png",
      tplMobile: "DeviceDefault/win-table.png"
    },
    welcomeBack: {
      tplDefault: "DeviceDefault/player-new-back.png",
      tplMobile: "DeviceDefault/player-new-back.png"
    },
    globalTimer: {
      tplDefault: "DeviceDefault/global-timer.png",
      tplMobile: "DeviceDefault/global-timer.png"
    },
    globalTimerBg: {
      tplDefault: "DeviceDefault/global-timer-bg.png",
      tplMobile: "DeviceDefault/global-timer-bg.png"
    },
    sitDownButtonLeftBj: {
      tplDefault: "blackjack/DeviceDefault/sit-down-button-left.png",
      tplMobile: "blackjack/DeviceDefault/sit-down-button-left.png"
    },
    sitDownButtonRightBj: {
      tplDefault: "blackjack/DeviceDefault/sit-down-button-right.png",
      tplMobile: "blackjack/DeviceDefault/sit-down-button-right.png"
    },
    rankBgBj: {
      tplDefault: "blackjack/DeviceDefault/rank-bg.png",
      tplMobile: "blackjack/DeviceDefault/rank-bg.png"
    },
    smallRankBgBj: {
      tplDefault: "blackjack/DeviceDefault/small-rank-bg.png",
      tplMobile: "blackjack/DeviceDefault/small-rank-bg.png"
    },
    sitDownButtonLeftBaccarat: {
      tplDefault: "baccarat/DeviceDefault/sit-down-button-left.png",
      tplMobile: "baccarat/DeviceDefault/sit-down-button-left.png"
    },
    sitDownButtonRightBaccarat: {
      tplDefault: "baccarat/DeviceDefault/sit-down-button-right.png",
      tplMobile: "baccarat/DeviceDefault/sit-down-button-right.png"
    },
    winnerLabelBaccarat: {
      tplDefault: "baccarat/DeviceDefault/winner-label.png",
      tplMobile: "baccarat/DeviceDefault/winner-label.png"
    },
    dealerBlockBaccarat: {
      tplDefault: "baccarat/DeviceDefault/dealer-block.png",
      tplMobile: "baccarat/DeviceDefault/dealer-block.png"
    },
    playerBlockBaccarat: {
      tplDefault: "baccarat/DeviceDefault/player-block.png",
      tplMobile: "baccarat/DeviceDefault/player-block.png"
    },
    globalTimerBgBaccarat: {
      tplDefault: "baccarat/DeviceDefault/timer/global-timer-bg.png",
      tplMobile: "baccarat/DeviceDefault/timer/global-timer-bg.png"
    },
    globalTimerBgPaigow: {
      tplDefault: "paigow/DeviceDefault/timerBack.png",
      tplMobile: "paigow/DeviceDefault/timerBack.png"
    },
    globalTimerBaccarat: {
      tplDefault: "baccarat/DeviceDefault/timer/global-timer.png",
      tplMobile: "baccarat/DeviceDefault/timer/global-timer.png"
    },
    avatarCircleBaccarat: {
      tplDefault: "baccarat/DeviceDefault/avatar-circle.png",
      tplMobile: "baccarat/DeviceDefault/avatar-circle.png"
    },
    sitDownButtonCraps1: {
      tplDefault: "craps/DeviceDefault/sit-down-1.png",
      tplMobile: "craps/DeviceDefault/sit-down-1.png"
    },
    sitDownButtonCraps2: {
      tplDefault: "craps/DeviceDefault/sit-down-2.png",
      tplMobile: "craps/DeviceDefault/sit-down-2.png"
    },
    sitDownButtonCraps3: {
      tplDefault: "craps/DeviceDefault/sit-down-3.png",
      tplMobile: "craps/DeviceDefault/sit-down-3.png"
    },
    sitDownButtonCraps4: {
      tplDefault: "craps/DeviceDefault/sit-down-4.png",
      tplMobile: "craps/DeviceDefault/sit-down-4.png"
    },
    sitDownButtonCraps5: {
      tplDefault: "craps/DeviceDefault/sit-down-5.png",
      tplMobile: "craps/DeviceDefault/sit-down-5.png"
    },
    sitDownButtonCraps6: {
      tplDefault: "craps/DeviceDefault/sit-down-6.png",
      tplMobile: "craps/DeviceDefault/sit-down-6.png"
    },
    diceShadow: {
      tplDefault: "craps/dice/shadow.png",
      tplMobile: "craps/dice/shadow.png"
    },
    dice1: {
      tplDefault: "craps/dice/1.png",
      tplMobile: "craps/dice/1.png"
    },
    dice2: {
      tplDefault: "craps/dice/2.png",
      tplMobile: "craps/dice/2.png"
    },
    dice3: {
      tplDefault: "craps/dice/3.png",
      tplMobile: "craps/dice/3.png"
    },
    dice4: {
      tplDefault: "craps/dice/4.png",
      tplMobile: "craps/dice/4.png"
    },
    dice5: {
      tplDefault: "craps/dice/5.png",
      tplMobile: "craps/dice/5.png"
    },
    dice6: {
      tplDefault: "craps/dice/6.png",
      tplMobile: "craps/dice/6.png"
    }
  },
  _41: {}
};
_h8._0l._Jh._xb = {
  actions: function () {
    var a = _Tf._dc.PlayerAction,
      c = {};
    c[a._Fe] = "ante.wav";
    c[a._bk] = "bet.wav";
    c[a._S5] = "bigblind.wav";
    c[a._id] = "bringin.wav";
    c[a._pq] = "call.wav";
    c[a._B7] = "check.wav";
    c[a._x2] = "fold.wav";
    c[a._jl] = "hidewin.wav";
    c[a._Vj] = "muck.wav";
    c[a._c8] = "raise.wav";
    c[a._3b] = "showcards.wav";
    c[a._jd] = "smallblind.wav";
    return c
  }(),
  events: function () {
    var a = _Tf._dc.GameEvent,
      c = {};
    c[a._R2] = "away.wav";
    c[a._Yd] = "congratulation.wav";
    c[a.__p] = "empty.wav";
    c[a._M] = "error.wav";
    c[a._qs] = "movecard.wav";
    c[a._sm] = "movemoney.wav";
    c[a._Bp] = "tablewarning1.wav";
    c[a._bg] = "tablewarning2.wav";
    c[a._be] = "shuffling-cards.wav";
    return c
  }()
};
(function (a, c) {
  a.reduceViewModelForPage(c.HOME_ACTIVE_CLIENT_TABLES, "locale,account,menu,feedback,lobbyTablesFilters,leaderBoard,lobby,publicProfile,profile,options".split(","));
  a.reduceViewModelForPage(c.LOBBY_TABLES_FILTER_BUY_IN, "locale,account,menu,feedback,lobbyTablesFilters,leaderBoard,lobby,publicProfile,profile,options".split(","));
  a.reduceViewModelForPage(c.LOBBY_TABLES_FILTER_PLAYERS, "locale,account,menu,feedback,lobbyTablesFilters,leaderBoard,lobby,publicProfile,profile,options".split(","));
  a.reduceViewModelForPage(c.LOBBY_TABLES_FILTER_STAKES, "locale,account,menu,feedback,lobbyTablesFilters,leaderBoard,lobby,publicProfile,profile,options".split(","));
  a.reduceViewModelForPage(c.LOBBY_TABLES_FILTER_SPEED, "locale,account,menu,feedback,lobbyTablesFilters,leaderBoard,lobby,publicProfile,profile,options".split(","));
  a.reduceViewModelForPage(c.LOBBY_TABLES_LIST, "locale,account,menu,feedback,lobbyTablesFilters,leaderBoard,lobby,publicProfile,profile,options".split(","));
  a.reduceViewModelForPage(c.LOBBY_TABLES_SEARCH,
    "locale,account,menu,feedback,lobbyTablesFilters,leaderBoard,lobby,publicProfile,profile,options".split(","));
  a.reduceViewModelForPage(c.LOBBY_TABLES_FILTERS, "locale,account,menu,feedback,pros,friends,lobbyTablesFilters,achievements,gifts,home,changeableGraphics,options,changeLocale,availableLocales,currentLocale,inAppPayment,leaderBoard,lobby,publicProfile,profile,options,tablesSnap".split(","));
  a.reduceViewModelForPage(c.LOBBY_TOURNAMENTS_FILTER_BUY_IN, "locale,account,menu,feedback,lobbyTournamentsFilters,leaderBoard,lobby,publicProfile,profile,options".split(","));
  a.reduceViewModelForPage(c.LOBBY_TOURNAMENTS_FILTER_GAME_TYPE, "locale,account,menu,feedback,lobbyTournamentsFilters,leaderBoard,lobby,publicProfile,profile,options".split(","));
  a.reduceViewModelForPage(c.LOBBY_TOURNAMENTS_FILTER_TOURNAMENT_STATE, "locale,account,menu,feedback,lobbyTournamentsFilters,leaderBoard,lobby,publicProfile,profile,options".split(","));
  a.reduceViewModelForPage(c.LOBBY_TOURNAMENTS_FILTER_TOURNAMENT_TYPE, "locale,account,menu,feedback,lobbyTournamentsFilters,leaderBoard,lobby,publicProfile,profile,options".split(","));
  a.reduceViewModelForPage(c.LOBBY_TOURNAMENTS_LIST, "locale,account,menu,feedback,lobbyTournamentsFilters,leaderBoard,lobby,publicProfile,profile,options".split(","));
  a.reduceViewModelForPage(c.LOBBY_TOURNAMENTS_FILTERS, "locale,account,menu,feedback,lobbyTournamentsFilters,leaderBoard,lobby,publicProfile,profile,options".split(","));
  a.reduceViewModelForPage(c._fq, "locale,account,menu,feedback,leaderBoard,lobby,publicProfile,profile".split(","));
  a.reduceViewModelForPage(c.VEGAS_LOGIN, "locale,account,menu,feedback,leaderBoard,lobby,publicProfile,profile".split(","));
  a.reduceViewModelForPage(c._3q, "locale,account,menu,feedback,leaderBoard,lobby,publicProfile,profile".split(","));
  a.reduceViewModelForPage(c._u5, "locale,localeName,account,menu,feedback,avatars,socialAvatars,leaderBoard,lobby,publicProfile,profile,options".split(","));
  a.reduceViewModelForPage(c.PROFILE_OVERVIEW, "locale,localeName,account,menu,feedback,avatars,socialAvatars,leaderBoard,lobby,publicProfile,profile,options".split(","));
  a.reduceViewModelForPage(c.PROFILE_FILTER_LOCALE, "locale,localeName,changeLocale,availableLocales,currentLocale,account,menu,feedback,leaderBoard,lobby,publicProfile,profile,options".split(","));
  a.reduceViewModelForPage(c._1o, "locale,device,leaderBoard,lobby,publicProfile,profile,options".split(","));
  a.reduceViewModelForPage(c._2l, "locale,device,tablesSnap,menu,feedback,pros,account,achievements,friends,gifts,changeableGraphics,options,translate,changeLocale,currentLocale,availableLocales,inAppPayment,leaderBoard,lobby,publicProfile,profile,options,chat,buyChips,tableTimer,supersonic".split(","));
  a.reduceViewModelForPage(c._qa, "locale,menu,feedback,account,tournament,leaderBoard,lobby,publicProfile,profile,options".split(","));
  a.reduceViewModelForPage(c._Gq, "locale,menu,feedback,account,tournament,leaderBoard,lobby,publicProfile,profile,options".split(","));
  a.reduceViewModelForPage(c.TOURNAMENT_PLAYERS, "locale,menu,feedback,account,tournament,leaderBoard,lobby,publicProfile,profile,options".split(","))
})(_me, _Tf._0l._N1._ff);
_h8._0l._xb = new function () {
  this.Action = {
    ANTE_1: "ante1.wav",
    ANTE_2: "ante2.wav",
    ANTE_3: "ante3.wav",
    _bk: "bet.wav",
    _id: "bringin.wav",
    _pq: "call.wav",
    _B7: "check.wav",
    _x2: "fold.wav",
    _jl: "hidewin.wav",
    _Vj: "muck.wav",
    _3b: "showcards.wav",
    ALL_IN: "all_in.wav",
    BUY_IN: "buyInButton.wav",
    _qc: "UI_click.wav",
    BUY_CHIPS: "buyChips.wav"
  };
  this.Event = {
    _R2: "away.wav",
    _Yd: "winner.wav",
    __p: "empty.wav",
    ERROR_: "error.wav",
    _qs: "movecard.wav",
    _sm: "movemoney.wav",
    _Bp: "tablewarning1.wav",
    _bg: "tablewarning2.wav",
    CHANGE_ACTIVE_CHAIR: "nextPlayersTurn.wav",
    CARD_IS_DEALT_1: "deal_single_card_1.wav",
    CARD_IS_DEALT_2: "deal_single_card_2.wav",
    CARD_IS_DEALT_3: "deal_single_card_3.wav",
    _be: "shuffling-cards.wav"
  }
};
_h8._0l._xb.Map = new function () {
  var a = _Tf._dc.GameEvent,
    c = _Tf._dc.PlayerAction,
    b = _h8._0l._xb;
  this.EventSound = {};
  this.ActionSound = {};
  this.EventSound[a._R2] = b.Event._R2;
  this.EventSound[a._Yd] = b.Event._Yd;
  this.EventSound[a.__p] = b.Event.__p;
  this.EventSound[a._M] = b.Event.ERROR_;
  this.EventSound[a._qs] = b.Event._qs;
  this.EventSound[a._sm] = b.Event._sm;
  this.EventSound[a._Bp] = b.Event._Bp;
  this.EventSound[a._bg] = b.Event._bg;
  this.EventSound[a.CHANGE_ACTIVE_CHAIR] = b.Event.CHANGE_ACTIVE_CHAIR;
  this.EventSound[a._be] = b.Event._be;
  this.EventSound[a.CARD_IS_DEALT] = [b.Event.CARD_IS_DEALT_1, b.Event.CARD_IS_DEALT_2, b.Event.CARD_IS_DEALT_3];
  this.ActionSound[c._Fe] = [b.Action.ANTE_1, b.Action.ANTE_2, b.Action.ANTE_3];
  this.ActionSound[c._bk] = b.Action._bk;
  this.ActionSound[c._S5] = b.Action._bk;
  this.ActionSound[c._id] = b.Action._id;
  this.ActionSound[c._pq] = b.Action._pq;
  this.ActionSound[c._B7] = b.Action._B7;
  this.ActionSound[c._x2] = b.Action._x2;
  this.ActionSound[c._jl] = b.Action._jl;
  this.ActionSound[c._Vj] = b.Action._Vj;
  this.ActionSound[c._c8] = b.Action._bk;
  this.ActionSound[c._3b] = b.Action._3b;
  this.ActionSound[c._jd] = b.Action._bk;
  this.ActionSound[c.ALL_IN] = b.Action.ALL_IN;
  this.ActionSound[c.BUY_IN] = b.Action.BUY_IN;
  this.ActionSound[c._qc] = b.Action._qc;
  this.ActionSound[c.BUY_CHIPS] = b.Action.BUY_CHIPS
};
_h8._0l._Kj = {
  init: function () {
    var a = _Tf._41,
      c = _Tf._0l._N1._ff;
    this[c._3q] = {
      "#reg-input-address-text": a.$("_P2.__7"),
      "#reg-input-zipCode-text": a.$("_P2._G4"),
      "#reg-input-bonusCode-text": a.$("_P2._C8"),
      "#reg-input-city-text": a.$("_P2._q0"),
      "#reg-input-state-text": a.$("_P2._67"),
      "#reg-input-country-text": a.$("_P2._M7"),
      "#reg-input-phoneNumber-text": a.$("_P2._T3"),
      "#reg-input-gender-text": a.$("_P2._1"),
      "#reg-input-gender-female-text": a.$("_P2._t6"),
      "#reg-input-gender-male-text": a.$("_P2._j9"),
      "#reg-input-middleName-text": a.$("_P2._w5"),
      "#reg-input-familyName-text": a.$("_P2._w"),
      "#reg-input-firstName-text": a.$("_P2._J4"),
      "#reg-input-eMail-text": a.$("_P2._j"),
      "#reg-input-password-ver-text": a.$("_P2._C0"),
      "#reg-input-password-text": a.$("_P2._B8"),
      "#reg-input-nickName-text": a.$("_P2._L5"),
      "#reg-input-address": a.$("_P2._77"),
      "#reg-input-zipCode": a.$("_P2._Q1"),
      "#reg-input-bonusCode": a.$("_P2._98"),
      "#reg-input-city": a.$("_P2._l8"),
      "#reg-input-state": a.$("_P2._Y3"),
      "#reg-input-country": a.$("_P2._L7"),
      "#reg-input-phoneNumber": a.$("_P2._m2"),
      "#reg-input-middleName": a.$("_P2._L1"),
      "#reg-input-familyName": a.$("_P2._85"),
      "#reg-input-firstName": a.$("_P2._T4"),
      "#reg-input-eMail": a.$("_P2._l2"),
      "#reg-input-password-ver": a.$("_P2._R8"),
      "#reg-input-password": a.$("_P2._J5"),
      "#reg-input-nickName": a.$("_P2._L0")
    };
    this[c._3f] = {
      "#rebet": a.$("_F2._i8"),
      ".craps-clear-button .game-button": a.$("_6.53"),
      ".craps-roll-button .game-button": a.$("_6.52")
    }
  }
};
_h8._0l._Kj.init();
_h8._a._Tm = function () {
  _h8._a._Tm.superclass.apply(this, arguments)
};
extend(_h8._a._Tm, _Xl._7a._a._Tm);
_h8._a._Tm.prototype._Nm = function (a) {
  this.model.setLevel(a);
  this._8m();

  1 >= a.playerLevel || (_Mf.PopupManagerInstance.push(function () {
    var c = _Xl._br._0l._N1,
      b = ("" + Math.random()).substr(2),
      d = _Mf.PopupManagerInstance.onClose.bind(_Mf.PopupManagerInstance);
    $(c.SOCIAL_DIALOG_BUTTON_CLOSE + b).live(EventType._qc, function () {
      _Xl._br._N1.hideSocialDialog({
        hashConfirmForm: b,
        closeHandler: d
      })
    });

    setTimeout(_Xl._br._N1.hideSocialDialog.bind(_Xl._br._N1, {
      hashConfirmForm: b,
      closeHandler: d
    }), _Xl._br._0l.autoClosedTime);
    var e = _h8._wc._an.LEVEL_DIALOG;
    _Tf._N1._c6("#" + _Mf._Md.getVisiblePage(), e.fill({
      id: c.SOCIAL_DIALOG.substr(1) + b,
      achievedText: _Tf._41.$("_W4"),
      levelText: _Tf._41.$("_O7").format(a.playerLevel),
      idbuttonClose: c.SOCIAL_DIALOG_BUTTON_CLOSE.substr(1) + b,
      buttonClose: _Tf._41.$("_06")
    }))
  }.bind(this)), _Xl._7a._hj._d.send(_Xl._7a._0r._Tr.GET_LEVEL_BONUS, {
    data: "[]"
  }))

};

_h8._a._Tm.prototype._Lf = function (a) {
  _Mf.PopupManagerInstance.push(function () {
    var c = _Xl._br._0l._N1,
      b = ("" + Math.random()).substr(2),
      d = _Mf.PopupManagerInstance.onClose.bind(_Mf.PopupManagerInstance);
    $(c.SOCIAL_DIALOG_BUTTON_CLOSE + b).live(EventType._qc, function () {
      _Xl._br._N1.hideSocialDialog({
        hashConfirmForm: b,
        closeHandler: d
      })
    });
    setTimeout(_Xl._br._N1.hideSocialDialog.bind(_Xl._br._N1, {
      hashConfirmForm: b,
      closeHandler: d
    }), _Xl._br._0l.autoClosedTime);
    var e = _h8._wc._an.ACHIEVEMENTS_DIALOG,
      f = _Tf._41.$("_c9." + a.type);
    _Tf._N1._c6("#" + _Mf._Md.getVisiblePage(), e.fill({
      id: c.SOCIAL_DIALOG.substr(1) + b,
      earnedText: _Tf._41.$("_R0"),
      image: _Xl._7a._dc.AchievementTypeByCode[a.type],
      achievementDescription: f,
      idbuttonClose: c.SOCIAL_DIALOG_BUTTON_CLOSE.substr(1) + b,
      buttonClose: _Tf._41.$("_06")
    }))
  }.bind(this));
  this.model.achievementUp();
  this._pd()
};

_h8._a._Un._8l._hl = function (a, c, b, d, e) {
  _h8._a._Un._8l._hl.superclass.apply(this, arguments);
  this.dealerView = a.createDealerView(c, b, d)
};
extend(_h8._a._Un._8l._hl, _Tf._a._Un._8l._hl);
_h8._a._Un._8l._hl.prototype._Va = function () {
  this.dealerView.drawMiddle()
};
_h8._a.Friends = function () {
  _h8._a.Friends.superclass.apply(this, arguments)
};
extend(_h8._a.Friends, _Xl._aj._a.Friends);
_h8._a.Friends.prototype._31 = function (a, c) {
  a && 0 == a.code && this.base._31.apply(this, arguments)
};
_h8._a._Un._8l._rs = function () {
  _h8._a._Un._8l._rs.superclass.apply(this, arguments)
};
extend(_h8._a._Un._8l._rs, _Tf._a._Un._8l._rs);
_h8._a._Un._8l._rs.prototype._iq = function (a, c) {
  return _Tf._dc.GameType._98(this.gameType) ? void 0 : this.model._D5(a, c)
};
_h8._a._Un._8l._rs.prototype._ak = function (a) {
  var c = this.model,
    b = a.length;
  c.chips.forEach(function (d, e) {
    e >= b ? c._D5(e, null) : d._xi() != a[e] && d._uf(a[e])
  });
  if (!_Tf._dc.GameType._98(this.gameType)) for (var d = c.countTakedChips; d < b; d++) {
    var e = this.factory.createChipController(this.factory, this.view.getContext(), this.view.getPositionByIndex(0), -1, a[d], this.moneyType, _Tf._dc.ChipState._or, this.designPosition),
      f = this.view.getPositionByIndex(0).clone(),
      g = this.designPosition.chip;
    f.x -= g.offsetXTextBox - 30;
    f.y -= g.offsetYTextBox - 15;
    e.fixTextPosition(f);
    e.setPotChip(!0);
    this.model._ba(e)
  }
};
_h8._a._Un.__0._gl = function () {
  _h8._a._Un.__0._gl.superclass.apply(this, arguments)
};
extend(_h8._a._Un.__0._gl, _Tf._a._Un.__0._gl);
_h8._a._Un.__0._gl.prototype._9g = function (a) {
  var c = this.manager,
    b = this;
  _Tf._Ek._29.getPagePositions();
  var d = a.originalEvent.touches ? a.originalEvent.touches[0] : a,
    e = this.view.getScales();
  this.view.getMargins();
  var f = (parseInt(d.pageX) - a.positionLeft) / e.scaleX,
    g = (parseInt(d.pageY) - a.positionTop) / e.scaleY,
    h = b._Rk(),
    i = !1;
  this.model.chairs.forEach(function (a, d) {
    if (a._0b(f, g)) h && 255 === b.reservedSeat && a._8s() ? (b.reservedSeat = d, c._Kn(d), i = !0) : a._8s() || (c._T1(d, a._Sq()), i = !0)
  });
  i || _Mf._ks.emitAsync(_Ag._W9, [this.manager.tableId, f, g])
};
_h8._a._cc = function () {
  _h8._a._cc.superclass.apply(this, arguments)
};
extend(_h8._a._cc, _Xl._br._a._cc);
_h8._a._cc.prototype._cn = function (a, c) {
  this.view._3j();
  c && this._receivedPlayerProfile(c.playerId);
  if (a && 0 == a.code) {
    var b = a.value[0];
    _Xl._br._N1.showSocialDialogWithPlayerInfo(b.avatar ? b.avatar.normal : null, b.name || b.nick, '<span style="color:#ff1680;"><hr>' + _Tf._41.$("_o5") + ":</span> {0} ".format(b.level) + '<hr><span style="color:#ff1680;">' + _Tf._41.$("_x6") + ":</span> {0}".format(_Tf._Ek._29._ca(parseInt(b.balance), _Tf._dc.MoneyType._i4, !0)), "right", !0, b)
  }
};
_h8._a._Un._8l.BaccaratChair = function (a, c, b, d, e, f, g, h, i, j) {
  _h8._a._Un._8l.BaccaratChair.superclass.apply(this, arguments)
};
extend(_h8._a._Un._8l.BaccaratChair, _Xl._br._a._Un._8l.BaccaratChair);
_h8._a._Un._8l.BaccaratPlayer = function (a, c, b, d, e, f, g, h, i, j) {
  _h8._a._Un._8l.BaccaratPlayer.superclass.apply(this, arguments)
};
extend(_h8._a._Un._8l.BaccaratPlayer, _Tf._a._Un._8l.BaccaratPlayer);
_h8._a._Un._8l.BaccaratPlayer.prototype._G4 = function (a, c) {
  var b = "",
    d = this.model.money;
  0 >= d && (b = _Tf._41.$("_P7._Q8"));
  this.view.drawAfter(this.model.name, {
    moneyString: b,
    type: this.model.moneyType,
    cash: d
  }, this.model.operation, this.model.state, a, this.model.level, c)
};
_h8._a._Un._8l.BlackJackCardHolder = function () {
  _h8._a._Un._8l.BlackJackCardHolder.superclass.apply(this, arguments)
};
extend(_h8._a._Un._8l.BlackJackCardHolder, _Tf._a._Un._8l.BlackJackCardHolder);
_h8._a._Un._8l.BlackJackChair = function (a, c, b, d, e, f, g, h, i, j) {
  _h8._a._Un._8l.BlackJackChair.superclass.apply(this, arguments);
  this.chipsAmount = 0
};
extend(_h8._a._Un._8l.BlackJackChair, _Xl._br._a._Un._8l.BlackJackChair);
_h8._a._Un._8l.BlackJackChair.prototype._G4 = function () {
  this.chipsAmount && this.view.drawBetBlock(_Tf._Ek._29._ca(this.chipsAmount, this.model.moneyType, !0), this._q6());
  _h8._a._Un._8l.BlackJackChair.superclass.prototype._G4.apply(this, arguments)
};
_h8._a._Un._8l.BlackJackChair.prototype.setChipsAmount = function (a) {
  this.chipsAmount = a
};
_h8._a._Un._8l.BlackJackChair.prototype.playerBustedAction = function (a) {
  this.model.holders[a].playerBustedAction();
  this.model.winTable._40(_Tf._dc.AnimationType._t7)
};
_h8._a._Un._8l.BlackJackChair.prototype.playerPushAction = function () {
  this.model.winTable._40(_Tf._dc.AnimationType._P5)
};
_h8._a._Un._8l.BlackJackChair.prototype._j6 = function (a, c, b, d, e) {
  d = this.designPosition.chairs[this.view.realNumber];
  "undefined" == typeof b && (b = 0);
  e = e ? d.posChips[b] : d.posChipsActive;
  c ? (c = this.factory.createChipController(this.factory, this.view.getContext(), this.view.getPosition(), this.model.number, a, this.moneyType, null, this.designPosition, b), c._bq(e)) : (c = this.factory.createChipController(this.factory, this.view.getContext(), this.view.getChipPosition(b), this.model.number, a, this.moneyType, null, this.designPosition,
    b), c._Kh(e));
  this._8s() || this.model.player._j6(a);
  return c
};
_h8._a._Un._8l.BlackJackChair.prototype.setActiveBetAction = function (a, c, b, d) {
  var c = this.model.holders.length,
    e = this._q6(),
    f = this.designPosition.chairs[this.view.realNumber],
    g = this.designPosition.playerClient;
  if (b) for (a = 0; a < c; a++) this.model.ranks[a].setSplitActiveAction(b), this.model.ranks[a]._Kh(e ? g.posRanks[a] : f.posRanks[a]), this.model.holders[a].setDesignIndexAction(f, a, !1, d == a);
  else this.model.ranks[0].setSplitActiveAction(b), this.model.ranks[0]._Kh(e ? g.posRanksActive : f.posRanksActive), this.model.holders[0].setDesignIndexAction(f,
    0, !0, !1)
};
_h8._a._Un._8l.BlackJackChair.prototype._4p = function () {
  _h8._a._Un._8l.BlackJackChair.superclass.prototype._4p.apply(this, arguments);
  this.chipsAmount = 0
};
_h8._a._Un._8l.BlackJackPlayer = function (a, c, b, d, e, f, g, h, i, j) {
  _h8._a._Un._8l.BlackJackPlayer.superclass.apply(this, arguments)
};
extend(_h8._a._Un._8l.BlackJackPlayer, _Tf._a._Un._8l.BlackJackPlayer);
_h8._a._Un._8l.BlackJackPlayer.prototype._G4 = function (a, c) {
  var b = "",
    d = this.model.money;
  0 >= d && (b = _Tf._41.$("_P7._Q8"));
  this.view.drawAfter(this.model.name, {
    moneyString: b,
    type: this.model.moneyType,
    cash: d
  }, this.model.operation, this.model.state, a, this.model.level, c)
};
_h8._a._Un._8l.BlackJackTable = function (a, c, b, d, e, f, g) {
  _h8._a._Un._8l.BlackJackTable.superclass.apply(this, arguments)
};
extend(_h8._a._Un._8l.BlackJackTable, _Tf._a._Un._8l.BlackJackTable);
_h8._a._Un._8l.BlackJackTable.prototype.setActiveBetAction = function (a, c, b, d, e, f) {
  if (this.model.chips[a]) if (a = this.model.chips[a], c = a.length, f = this.designPosition.chairs[f], d) for (d = 0; d < c; d++)(b = a[d]) && b._Kh(f.posChips[d]);
  else a[0] && a[0]._Kh(f.posChipsActive)
};
_h8._a._Un._8l.BlackJackWinTable = function (a, c, b, d, e) {
  _h8._a._Un._8l.BlackJackWinTable.superclass.apply(this, arguments)
};
extend(_h8._a._Un._8l.BlackJackWinTable, _Tf._a._Un._8l.BlackJackWinTable);
_Mf._ks.addListener(_Ag._u, function (a) {
  if (_Xl._br && _Xl._br._N1.showSocialDialog) {
    for (var a = a.jackpot, c = _Mf._L2._d1(), b = null, d, e = 0, f = 0; f < a.length && null === b; f++) if (a[f].playerId == c) b = f, d = a[f].jackpotType, e = _Tf._Ek._29._ca(a[f].amount);
    if (!(null === b || d != _Tf._dc.JackpotType._O0 && d != _Tf._dc.JackpotType._Ko)) {
      var g = _Xl._br._N1.showSocialDialog(e, "jackpot-" + _Tf._dc.JackpotType.toString(d), "", e);
      setTimeout(function () {
        try {
          $(_Xl._br._0l._N1.SOCIAL_DIALOG + g).remove()
        } catch (a) { }
      }, _h8._0l.JACKPOT_AWARDED_DELAY);
      return !1
    }
  }
});
_Mf._ks.addListener(_Ag._vk, _me.account.onSigningInStatus, _me.account);
_Mf._ks.addListener(_Ag._Ah, function () {
  _Xl._Vn._hj._Le._ka();
  _Tf._Ek._29.setDirectionForCanvas()
});
_Tf._Ek._Fm._bf._X6.prototype._hr.stretchPageOnScreen = function (a) {
  var a = _Tf._N1.$("#" + a),
    c = _Mf._Ta;
  c.getScreenAction() || c.setScreenAction($(document).width(), $(document).height());
  var b = _Tf._Ek._29.getPagePositions(),
    c = b.width,
    d = b.height,
    e = b.left,
    b = b.top;
  a.width(c);
  a.height(d);
  a.css("margin-left", e + "px");
  a.css("margin-top", b + "px");
  return {
    width: c,
    height: d
  }
};
_Tf._Ek._Fm._bf._X6.prototype._r4 = function () {
  return !1 !== _Mf._ks.emit(this.page + "-on-init", arguments)
};
_Tf._Ek._Fm._bf._X6.prototype._G1 = function () {
  this._oe();
  return !1 !== _Mf._ks.emit(this.page + "-on-ready", arguments)
};
_Xl._aj._Ek._Fm._bf.Friends = function (a, c) {
  _Xl._aj._Ek._Fm._bf.Friends.superclass.apply(this, arguments)
};
extend(_Xl._aj._Ek._Fm._bf.Friends, _Tf._Ek._Fm._bf._X6);
_Xl._aj._Ek._Fm._bf.Friends.prototype._5c = function () {
  return _Mf._L2._oa() ? (_Mf._ks.emitAsync(_Ag._s4, null), !1) : !_Xl._br._hj.checkConnectionToSocialService() ? !1 : !0
};
_Xl._aj._Ek._Fm._bf.Friends.prototype._ul = function () {
  this.base._ul.apply(this, arguments) && _Xl._aj._hj._ua._y7(!0)
};
_Xl._aj._Ek._Fm._bf.Friends.prototype._G1 = function () {
  this.base._G1.apply(this, arguments) && _me.friends.friendsList.goToFirstPage()
};
_Xl._aj._Ek._Fm._bf.Friends.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._0l._N1;
    _Tf._N1.$("#{0} ".format(this.page) + a._Sd).live(EventType._qc, function () {
      _Xl._aj._hj._ua._y7(!0)
    })
  }
};
_Xl._aj._Ek._Fm._bf.Friends.prototype._t6 = function () {
  if (!this.base._t6.apply(this, arguments)) return !1;
  _me.friends.friendsList.setRefreshHandler(_Mf._Md._E8.bind(_Mf._Md));
  return !0
};
_Xl._aj._Ek._Fm._bf.Friends.prototype._jp = function (a) {
  if (!this.base._jp.apply(this, arguments)) return !1;
  _me.friends.friendsList.removeRefreshHandler();
  return !0
};
_h8._Fm._bf.HomeActiveClientTables = function (a, c) {
  _h8._Fm._bf.HomeActiveClientTables.superclass.apply(this, arguments)
};
extend(_h8._Fm._bf.HomeActiveClientTables, _Tf._Ek._Fm._bf._X6);
_h8._Fm._bf.HomeActiveClientTables._ff = _Tf._0l._N1._ff.HOME_ACTIVE_CLIENT_TABLES;
_h8._Fm._bf.HomeActiveClientTables.prototype._G1 = function () {
  this.base._G1.apply(this, arguments) && _me.lobby.activeClientTables.goToFirstPage()
};
_h8._Fm._bf.HomeActiveClientTables.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._0l._N1;
    _Tf._N1.$("#{0} ".format(this.page) + a._Sd).live(EventType._qc, function () {
      _Mf._L2._N9()
    })
  }
};
_h8._Fm._bf._n8 = function (a, c) {
  _h8._Fm._bf._n8.superclass.apply(this, arguments)
};
extend(_h8._Fm._bf._n8, _Tf._Ek._Fm._bf._X6);
_h8._Fm._bf._n8._ff = _Tf._0l._N1._ff._3f;
_h8._Fm._bf._n8.prototype._am = function () {
  if (!this.base._am.apply(this, arguments)) return !1;
  var a = $("#header-avatar-back"),
    c = $("#header-avatar .header-block-button"),
    b = c.width(),
    d = c.height(),
    b = d > b ? b : d;
  a.height(b);
  a.width(b);
  a.css("marginTop", (c.height() - b) / 2)
};
_h8._Fm._bf._n8.prototype._G1 = function () {
  if (this.base._G1.apply(this, arguments)) {
    var a = _me.achievements.experience(),
      c = _me.achievements.levelBounds().to,
      b = _me.achievements.levelBounds().from;
    _me.lobby.percent = 100 * (a - b) / (c - b);
    _Tf._Ek._29.render(_me.lobby.percent)
  }
};
_h8._Fm._bf._n8.prototype._N9 = function () {
  _Xl._aj._hj._ua.getOnlineFriendsCountAction()
};
_h8._Fm._bf.LobbyTablesFilters = function (a, c) {
  _h8._Fm._bf.LobbyTablesFilters.superclass.apply(this, arguments)
};
extend(_h8._Fm._bf.LobbyTablesFilters, _Tf._Ek._Fm._bf._X6);
_h8._Fm._bf.LobbyTablesFilters._ff = _Tf._0l._N1._ff.LOBBY_TABLES_FILTERS;
_h8._Fm._bf.LobbyTablesFilters.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._0l._N1;
    _Tf._N1.$("#{0} ".format(this.page) + a._Sd).live(EventType._qc, function () {
      _Mf._Up._fp(!0)
    })
  }
};
_h8._Fm._bf.LobbyTablesList = function (a, c) {
  _h8._Fm._bf.LobbyTablesList.superclass.apply(this, arguments)
};
extend(_h8._Fm._bf.LobbyTablesList, _Tf._Ek._Fm._bf._X6);
_h8._Fm._bf.LobbyTablesList._ff = _Tf._0l._N1._ff.LOBBY_TABLES_LIST;
_h8._Fm._bf.LobbyTablesList.prototype._G1 = function () {
  this.base._G1.apply(this, arguments) && (_me.lobby.tables.goToFirstPage(), _Mf._Up._fp(!0, !1))
};
_h8._Fm._bf.LobbyTablesList.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._0l._N1;
    _Tf._N1.$("#{0} ".format(this.page) + a._Sd).live(EventType._qc, function () {
      _Mf._Up._fp(!0, !1, null)
    })
  }
};
_h8._Fm._bf.LobbyTablesList.prototype._t6 = function () {
  if (!this.base._t6.apply(this, arguments)) return !1;
  _me.lobby.tables.setRefreshHandler(_Mf._Md._E8.bind(_Mf._Md));
  var a = _me.lobbyTablesFilters;
  if (a.wasChanged()) a.isChanged = !1, _Mf._Up._fp(!0, !1, null);
  return !0
};
_h8._Fm._bf.LobbyTablesList.prototype._jp = function (a) {
  if (!this.base._jp.apply(this, arguments)) return !1;
  _me.lobby.tables.removeRefreshHandler();
  return !0
};
_h8._Fm._bf.LobbyTablesList.prototype.onScrollPullDown = function () {
  _me.lobby.tables.hasMorePages() && (Loader.onShowStaticLoader(), _Mf._Up._fp(!0, !0, null), _me.lobby.tables.growPage(), _me.lobby.tables.update(), Loader.onHideStaticLoader())
};
_h8._Fm._bf.LobbyTablesList.prototype.initScroll = function (a, c, b) {
  b.showScrollBar = !1;
  this.base.initScroll.apply(this, arguments)
};
_h8._Fm._bf.LobbyTournamentsFilters = function (a, c) {
  _h8._Fm._bf.LobbyTournamentsFilters.superclass.apply(this, arguments)
};
extend(_h8._Fm._bf.LobbyTournamentsFilters, _Tf._Ek._Fm._bf._X6);
_h8._Fm._bf.LobbyTournamentsFilters._ff = _Tf._0l._N1._ff.LOBBY_TOURNAMENTS_FILTERS;
_h8._Fm._bf.LobbyTournamentsFilters.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._0l._N1;
    _Tf._N1.$("#{0} ".format(this.page) + a._Sd).live(EventType._qc, function () {
      _Mf._X1._r(_Mf._X1._bm())
    })
  }
};
_h8._Fm._bf.LobbyTournamentsList = function (a, c) {
  _h8._Fm._bf.LobbyTournamentsList.superclass.apply(this, arguments)
};
extend(_h8._Fm._bf.LobbyTournamentsList, _Tf._Ek._Fm._bf._X6);
_h8._Fm._bf.LobbyTournamentsList._ff = _Tf._0l._N1._ff.LOBBY_TOURNAMENTS_LIST;
_h8._Fm._bf.LobbyTournamentsList.prototype._G1 = function () {
  this.base._G1.apply(this, arguments) && _me.lobby.tournaments.goToFirstPage()
};
_h8._Fm._bf.LobbyTournamentsList.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._0l._N1;
    _Tf._N1.$("#{0} ".format(this.page) + a._Sd).live(EventType._qc, function () {
      _Mf._X1._r(_Mf._X1._bm())
    })
  }
};
_h8._Fm._bf.LobbyTournamentsList.prototype._t6 = function () {
  if (!this.base._t6.apply(this, arguments)) return !1;
  _me.lobby.tournaments.setRefreshHandler(_Mf._Md._E8.bind(_Mf._Md));
  return !0
};
_h8._Fm._bf.LobbyTournamentsList.prototype._jp = function (a) {
  if (!this.base._jp.apply(this, arguments)) return !1;
  _me.lobby.tournaments.removeRefreshHandler();
  return !0
};
_h8._Fm._bf.LobbyTournamentsList.prototype.initScroll = function (a, c, b) {
  b.showScrollBar = !1;
  this.base.initScroll.apply(this, arguments)
};
_Tf._Ek._Fm._bf.Login = function (a, c) {
  _Tf._Ek._Fm._bf.Login.superclass.apply(this, arguments)
};
extend(_Tf._Ek._Fm._bf.Login, _Tf._Ek._Fm._bf._X6);
_Tf._Ek._Fm._bf.Login._ff = _Tf._0l._N1._ff._fq;
_Tf._Ek._Fm._bf.Login.prototype._2c = function (a) {
  !1 !== _Mf._ks.emit(this.page + "-on-change", arguments) && this.pageManager.loadGameFilesAndResources(a)
};
_h8._Fm._bf._3l = function (a, c) {
  _h8._Fm._bf._3l.superclass.apply(this, arguments)
};
extend(_h8._Fm._bf._3l, _Tf._Ek._Fm._bf._X6);
_h8._Fm._bf._3l._ff = _Tf._0l._N1._ff.PROFILE_OVERVIEW;
_h8._Fm._bf._3l.prototype._am = function () {
  if (!this.base._am.apply(this, arguments)) return !1;
  var a = $(".profile-change-avatar-container"),
    c = $(".profile-change-avatar-image-container"),
    b = $(".avatar-arrow-main-field"),
    d = b.width(),
    e = a.height(),
    d = d > e ? e : d;
  b.height(d);
  c.height(d);
  b.css("marginTop", (a.height() - d) / 2);
  return !0
};
_h8._Fm._bf._3l.prototype._5c = function () {
  return _Mf._L2._oa() ? (_Mf._ks.emitAsync(_Ag._s4, null), !1) : !_Xl._br._hj.checkConnectionToSocialService() ? !1 : !0
};
_h8._Fm._bf._3l.prototype._ul = function () {
  if (!this.base._t6.apply(this, arguments)) return !1;
  _Xl._br._hj._38._C6();
  return !0
};
_h8._Fm._bf._3l.prototype._Q = function (a) {
  if (!1 === this.base._Q.apply(this, arguments)) return !1;
  var c = _Xl._br._0l._N1._ff;
  return !c ? !0 : a === c.PROFILE_ACHIEVEMENTS || a === c.PROFILE_INVENTORY || a === c.PROFILE_RECENT || a === c.PROFILE_STATUS ? !1 : !0
};
_Tf._Ek._Fm._bf._c9 = function (a, c) {
  _Tf._Ek._Fm._bf._c9.superclass.apply(this, arguments)
};
extend(_Tf._Ek._Fm._bf._c9, _Tf._Ek._Fm._bf._X6);
_Tf._Ek._Fm._bf._c9._ff = _Tf._0l._N1._ff._3q;
_Tf._Ek._Fm._bf._c9.prototype._rm = function () {
  this.base._ul.apply(this, arguments) && _Mf._ks.emit(_Ag._T5, arguments)
};
_Tf._Ek._Fm._bf._c9.prototype._ul = function () {
  if (this.base._ul.apply(this, arguments)) {
    var a = _Tf._N1,
      c = _Tf._0l._N1,
      b = _h8._wc._an,
      d = _Mf._Ta.isRegistrationRequireMinimumFields(),
      e = _Mf._Ta.RegistrationParams,
      f = _Tf._0l.isShortRegistration && d ? b.REGISTRATION_SHORT_MAP : b.REGISTRATION_MAP,
      g = "",
      h, i;
    for (i in e) if (e.hasOwnProperty(i)) {
      h = {};
      h[i] = "";
      if (e[i].show) {
        switch (i) {
          case "gender":
            g = b.REGISTRATION_GENDER;
            break;
          case "eMail":
            g = b._se;
            break;
          case "password":
            g = b._lm;
            break;
          default:
            g = b.REGISTRATION_INPUT
        }
        // alert("_lm " + JSON.stringify(b._lm));
        g = g.fill({
          name: i,
          pattern: e[i].pattern,
          required: d && e[i].need || !d && e[i].required ? "required" : ""
        });
        g = g.fill({
          value: ""
        });
        h[i] = g
      }
      f = f.fill(h)
    }
    // alert("two");
    // console.log("signup c._Pk "+ JSON.stringify(c._Pk));
    // console.log("c._Pk f"+ JSON.stringify(c.f));
    a._c6(c._Pk, f)
  }
};
_Tf._Ek._Fm._bf._c9.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._N1,
      c = _Tf._0l._N1,
      b = function () {
        var b = a.$(c._lm),
          e = a.$(c._bj);
        b.val() != e.val() ? e.addClass("invalid") : e.removeClass("invalid")
      };
      // console.log("_lm b "+ JSON.stringify(b));
    a.$(c._lm).live("keyup", b);
    a.$(c._bj).live("keyup", b)
  }
};
_Tf._Ek._Fm._bf._c9.prototype._N3 = function () {
  _Mf._Md.changePage(_Tf._0l._N1._ff._fq);
  return !0
};
_Tf._Ek._Fm._bf._l7.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._N1,
      c = _Tf._0l._N1;
    a.$(c._pk).live(EventType._qc, function () {
      var b = _me.tablesSnap.getOpenedTable();
      if (b && "undefined" !== typeof b.id && !_me.tablesSnap.isWaitingResponseOnBuyIn(b.id)) {
        _me.tablesSnap.beginToBuyIn(b.id);
        var e = _Mf._q1._5p(b.id);
        e ? (a._Lb(c._pk), a._Lb(c._4f), _Tf._Ek._29.showPageLoadingMessage(), e._5b(_me.tablesSnap.getReservedSeatIndex(b.id), _Tf._U6._29._Xh(a.val(c._ig)))) : _me.tablesSnap.cancelToBuyIn(b.id)
      }
    });
    a.$(c._4f).live(EventType._qc, function () {
      var b = _me.tablesSnap.getOpenedTable();
      if (b && "undefined" !== typeof b.id && !_me.tablesSnap.isWaitingResponseOnBuyIn(b.id)) {
        _me.tablesSnap.beginToBuyIn(b.id);
        var e = _Mf._q1._5p(b.id);
        e ? (a._Lb(c._pk), a._Lb(c._4f), _Tf._Ek._29.showPageLoadingMessage(), e._u0()) : _me.tablesSnap.cancelToBuyIn(b.id)
      }
    });
    a.$(c._nf).live(EventType._qc, function () {
      var b = _me.tablesSnap.getOpenedTable();
      if (b && "undefined" !== typeof b.id && !_me.tablesSnap.isWaitingResponseOnBuyIn(b.id)) {
        _me.tablesSnap.beginToBuyIn(b.id);
        var e = _Mf._q1._5p(b.id),
          f = _Mf._q1._Rm(b.id);
        !e || !f ? _me.tablesSnap.cancelToBuyIn(b.id) : (a._Lb(c._nf), a._Lb(c._Oe), _Tf._Ek._29.showPageLoadingMessage(), f._kk(), e._Qr(_Tf._U6._29._Xh(a.val(c._ig)), f._Um()))
      }
    });
    a.$(c._Oe).live(EventType._qc, function () {
      var b = _me.tablesSnap.getOpenedTable();
      if (b && "undefined" !== typeof b.id && !_me.tablesSnap.isWaitingResponseOnBuyIn(b.id)) {
        _me.tablesSnap.beginToBuyIn(b.id);
        var e = _Mf._q1._Rm(b.id);
        e && (a._Lb(c._nf), a._Lb(c._Oe), e._kk());
        _me.tablesSnap.cancelToBuyIn(b.id)
      }
    });
    var b = table.id;
    a.$(c._M2).live(EventType._qc, function () {
      a.$(_Tf._0l._N1._6i.format(b) + " " + c._Mh).hide()
    })
  }
};
_Tf._Ek._Fm._bf._l7.prototype._t6 = function () {
  if (this.base._t6.apply(this, arguments) && this.tableHub && this.tableHub.tableInstance) {
    var a = this.tableHub.tableInstance._m5();
    if (a && a.name) _me.tablesSnap.showTable(a) && this.tableHub.tableInstance._19(), this.tableHub = null, _Tf._Ek._29.setDirectionForCanvas(), $("#table-" + a.id + " " + _Tf._0l._N1._zg).slider()
  }
};
_Tf._Ek._Fm._bf._l7.prototype._jp = function () {
  _me.tableTimer.hideTimer();
  _me.tablesSnap.tableMenu.closeTableMenu()
};
_h8._Fm._bf.TableList = function (a, c) {
  _h8._Fm._bf.TableList.superclass.apply(this, arguments)
};
extend(_h8._Fm._bf.TableList, _Tf._Ek._Fm._bf._X6);
_h8._Fm._bf.TableList._ff = _Tf._0l._N1._ff.LOBBY_TABLES_LIST;
_h8._Fm._bf.TableList.prototype._jp = function () {
  _me.menu.isInternalSearchVisible(!1)
};
_h8._Fm._bf.TableSearch = function (a, c) {
  _h8._Fm._bf.TableSearch.superclass.apply(this, arguments)
};
extend(_h8._Fm._bf.TableSearch, _Tf._Ek._Fm._bf._X6);
_h8._Fm._bf.TableSearch._ff = _Tf._0l._N1._ff.LOBBY_TABLES_SEARCH;
_h8._Fm._bf.TableSearch.prototype._G1 = function () {
  this.base._G1.apply(this, arguments) && _me.lobby.tables.goToFirstPage()
};
_h8._Fm._bf.TableSearch.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._0l._N1;
    _Tf._N1.$("#{0} ".format(this.page) + a._Sd).live(EventType._qc, function () {
      _Tf._Ek._29.showPageLoadingMessage();
      _Mf._Up._fp(!0, !1, null)
    })
  }
};
_h8._Fm._bf.TournamentPlayers = function (a, c) {
  _h8._Fm._bf.TournamentPlayers.superclass.apply(this, arguments)
};
extend(_h8._Fm._bf.TournamentPlayers, _Tf._Ek._Fm._bf._X6);
_h8._Fm._bf.TournamentPlayers._ff = _Tf._0l._N1._ff.TOURNAMENT_PLAYERS;
_h8._Fm._bf.TournamentPlayers.prototype._G1 = function () {
  this.base._G1.apply(this, arguments) && _me.tournament.playersList.goToFirstPage()
};
_h8._Fm._bf.TournamentPlayers.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._0l._N1;
    _Tf._N1.$("#{0} ".format(this.page) + a._Sd).live(EventType._qc, function () {
      _Mf._X1.opennedTournament && _Mf._X1.opennedTournament._10()
    })
  }
};
_h8._Fm._bf.TournamentPlayers.prototype._N9 = function () {
  !1 !== _Mf._ks.emit("tournament-players-on-periodic", arguments) && _Mf._X1.opennedTournament && _Mf._X1.opennedTournament._10()
};
_h8._Fm._bf.TournamentPlayers.prototype._t6 = function () {
  if (!this.base._t6.apply(this, arguments)) return !1;
  _me.tournament.playersList.setRefreshHandler(_Mf._Md._E8.bind(_Mf._Md));
  return !0
};
_h8._Fm._bf.TournamentPlayers.prototype._jp = function (a) {
  if (!this.base._jp.apply(this, arguments)) return !1;
  _me.tournament.playersList.removeRefreshHandler();
  return !0
};
_h8._Fm._bf.TournamentTables = function (a, c) {
  _h8._Fm._bf.TournamentTables.superclass.apply(this, arguments)
};
extend(_h8._Fm._bf.TournamentTables, _Tf._Ek._Fm._bf._X6);
_h8._Fm._bf.TournamentTables._ff = _Tf._0l._N1._ff._Gq;
_h8._Fm._bf.TournamentTables.prototype._G1 = function () {
  this.base._G1.apply(this, arguments) && _me.tournament.tablesList.goToFirstPage()
};
_h8._Fm._bf.TournamentTables.prototype._r4 = function () {
  if (this.base._r4.apply(this, arguments)) {
    var a = _Tf._0l._N1;
    _Tf._N1.$("#{0} ".format(this.page) + a._Sd).live(EventType._qc, function () {
      _Mf._X1.opennedTournament && _Mf._X1.opennedTournament._10()
    })
  }
};
_h8._Fm._bf.TournamentTables.prototype._N9 = function () {
  !1 !== _Mf._ks.emit("tournament-tables-on-periodic", arguments) && _Mf._X1.opennedTournament && _Mf._X1.opennedTournament._10()
};
_h8._Fm._bf.TournamentTables.prototype._t6 = function () {
  if (!this.base._t6.apply(this, arguments)) return !1;
  _me.tournament.tablesList.setRefreshHandler(_Mf._Md._E8.bind(_Mf._Md));
  return !0
};
_h8._Fm._bf.TournamentTables.prototype._jp = function (a) {
  if (!this.base._jp.apply(this, arguments)) return !1;
  _me.tournament.tablesList.removeRefreshHandler();
  return !0
};
_Tf._Ek._Fm._bf.VegasLogin = function (a, c) {
  _Tf._Ek._Fm._bf.VegasLogin.superclass.apply(this, arguments)
};
extend(_Tf._Ek._Fm._bf.VegasLogin, _Tf._Ek._Fm._bf._X6);
_Tf._Ek._Fm._bf.VegasLogin._ff = _Tf._0l._N1._ff.VEGAS_LOGIN;
_Tf._Ek._Fm._bf.VegasLogin.prototype._N3 = function () {
  _Mf._Md.changePage(_Tf._0l._N1._ff._fq);
  return !0
};
_me.friends.selectedFriendInfo.subscribe(function (a) {
  if (null != a) a.bestHand = _h8._wc._an.getBestHandString(a.bestHand), a.cropHighestChipLevel = _Tf._Ek._29._ca(a.highestChipLevel, _Tf._dc.MoneyType._i4, !0), a.cropBiggestPotWon = _Tf._Ek._29._ca(a.biggestPotWon, _Tf._dc.MoneyType._i4, !0), a.cropFreeChips = _Tf._Ek._29._ca(a.biggestPotWon, _Tf._dc.MoneyType._i4, !0), a.levelLabel = a.level + "-" + a.levelName
});
_me.gifts.giftsTagsPage = new _c2(null, !1, 4, 4);
_me.gifts.giftsTagsByKind.virtual.subscribe(function (a) {
  _me.gifts.giftsTagsPage.set(a)
}.bind(_me.gifts));
_me.gifts.currentInventoryPage = ko.observable(_Xl._Vn._dc.GiftKind.GIFT_VIRTUAL);
_me.gifts.currentGiftKind = ko.observable(_Xl._Vn._dc.GiftKind.GIFT_VIRTUAL);
_me.gifts.openInventoryBackgrounds = function () {
  var a = _Tf._dc.GameType,
    c = _Xl._Vn._dc.GiftKind,
    b = a._O3(_me.lobby.gameType()),
    d = c.GIFT_BACKGROUND;
  if (a.isBlackJack(b)) d = c.GIFT_BLACKJACK_BACKGROUND;
  else if (a.isBaccarat(b)) d = c.GIFT_BACCARAT_BACKGROUND;
  else if (a.isPaigow(b)) d = c.GIFT_PAIGOW_BACKGROUND;
  else if (a.isPaigow(b)) d = c.GIFT_PAIGOW_BACKGROUND;
  else if (a.isCraps(b)) d = c.GIFT_CRAPS_BACKGROUND;
  _me.gifts.currentInventoryPage(d)
};
_me.gifts.openInventoryDealer = function () {
  var a = _Tf._dc.GameType,
    c = _Xl._Vn._dc.GiftKind,
    b = a._O3(_me.lobby.gameType());
  if (a.isBlackJack(b)) a = c.GIFT_BLACKJACK_DEALER;
  else if (a.isBaccarat(b)) a = c.GIFT_BACCARAT_DEALER;
  else {
    if (a.isCraps(b)) return;
    a = c.GIFT_DEALER
  }
  _me.gifts.currentInventoryPage(a)
};
_me.gifts.openInventoryVirtual = function () {
  _me.gifts.currentInventoryPage(_Xl._Vn._dc.GiftKind.GIFT_VIRTUAL)
};
_me.gifts.getCurrentGifts = function () {
  var a = _me.gifts.giftsCurrentTagByKind.virtual(),
    c = _Tf._dc.GameType,
    b = c._O3(_me.lobby.gameType()),
    d = _Xl._R6._dc.GameResourceType;
  switch (a) {
    case "2":
      return this.giftsByKind.virtual[this.giftsCurrentTagByKind.virtual()];
    case "5":
      return c.isBlackJack(b) ? this.giftsByKind[d.BLACKJACK_DEALER] : c.isBaccarat(b) ? this.giftsByKind[d.BACCARAT_DEALER] : c.isPaigow(b) ? this.giftsByKind[d.PAIGOW_DEALER] : c.isCraps(b) ? void 0 : this.giftsByKind[d.DEALER];
    case "6":
      return c.isBlackJack(b) ? this.giftsByKind[d.BLACKJACK_BACKGROUND] : c.isBaccarat(b) ? this.giftsByKind[d.BACCARAT_BACKGROUND] : c.isPaigow(b) ? this.giftsByKind[d.PAIGOW_BACKGROUND] : c.isCraps(b) ? this.giftsByKind[d.CRAPS_BACKGROUND] : this.giftsByKind[d.BACKGROUND]
  }
  return null
};
_me.gifts.getGiftKindByTag = function (a) {
  var c = _Xl._Vn._dc.GiftKind,
    b = _Tf._dc.GameType,
    d = b._O3(_me.lobby.gameType());
  switch (a) {
    case "2":
      return c.GIFT_VIRTUAL;
    case "5":
      return b.isBlackJack(d) ? c.GIFT_BLACKJACK_DEALER : b.isBaccarat(d) ? c.GIFT_BACCARAT_DEALER : b.isPaigow(d) ? c.GIFT_PAIGOW_DEALER : b.isCraps(d) ? void 0 : c.GIFT_DEALER;
    case "6":
      return b.isBlackJack(d) ? c.GIFT_BLACKJACK_BACKGROUND : b.isBaccarat(d) ? c.GIFT_BACCARAT_BACKGROUND : b.isCraps(d) ? c.GIFT_CRAPS_BACKGROUND : b.isPaigow(d) ? c.GIFT_PAIGOW_BACKGROUND : c.GIFT_BACKGROUND
  }
  return null
};
_me.gifts.hasMorePage = function () {
  var a = _me.gifts.getCurrentGifts();
  return !a ? !1 : a.hasMorePages()
};
_me.gifts.hasReducePage = function () {
  var a = _me.gifts.getCurrentGifts();
  return !a ? !1 : 1 < a.pages()
};
_me.gifts.reducePage = function () {
  var a = _me.gifts.getCurrentGifts();
  a && a.reducePage()
};
_me.gifts.selectInventoryItem = function (a, c) {
  _me.gifts.toggleGift({
    gift: a,
    indexInCollection: a.id,
    target: c.currentTarget
  })
};
_me.gifts.CheckInventoryItem = function (a, c) {
  _me.gifts.selectInventoryItem(a, c);
  _me.gifts.useGift()
};
_me.gifts.backgroundTag = ko.observable(2);
_me.gifts.changeTagBackground = function (a) {
  _me.gifts.changeTag(a);
  _me.gifts.backgroundTag(a.tag.id)
};
_me.gifts.activeBackgroundClass = function (a) {
  return _me.gifts.giftsCurrentTagByKind.virtual() == a
};
_me.gifts.activeGiftsClass = function (a) {
  return _me.gifts.giftsCurrentTagByKind.virtual() == a
};
_me.gifts.activeDealeryClass = function (a) {
  return _me.gifts.giftsCurrentTagByKind.virtual() == a
};
_me.gifts.giftsBackgroundElementsByType = ko.computed(function () {
  var a = _Tf._dc.GameType,
    c = a._O3(_me.lobby.gameType()),
    b = _Xl._Vn._dc.GiftKind;
  return a.isBlackJack(c) ? this.giftsByKind[b.GIFT_BLACKJACK_BACKGROUND].elements : a.isBaccarat(c) ? this.giftsByKind[b.GIFT_BACCARAT_BACKGROUND].elements : a.isPaigow(c) ? this.giftsByKind[b.GIFT_PAIGOW_BACKGROUND].elements : a.isCraps(c) ? this.giftsByKind[b.GIFT_CRAPS_BACKGROUND].elements : this.giftsByKind[b.GIFT_BACKGROUND].elements
}, _me.gifts);
_me.gifts.giftsDealerElementsByType = ko.computed(function () {
  var a = _Tf._dc.GameType,
    c = a._O3(_me.lobby.gameType()),
    b = _Xl._Vn._dc.GiftKind;
  return a.isBlackJack(c) ? this.giftsByKind[b.GIFT_BLACKJACK_DEALER].elements : a.isBaccarat(c) ? this.giftsByKind[b.GIFT_BACCARAT_DEALER].elements : a.isPaigow(c) ? this.giftsByKind[b.GIFT_PAIGOW_DEALER].elements : a.isCraps(c) ? void 0 : this.giftsByKind[b.GIFT_DEALER].elements
}, _me.gifts);
(function (a, c) {
  a.currentLeaderBoardPage = c.observable("leaders");
  a.openLeaders = function () {
    a.currentLeaderBoardPage("leaders")
  };
  a.openBuddies = function () {
    a.currentLeaderBoardPage("buddies")
  }
})(_me.leaderBoard, ko);
_me.achievements.experience.subscribe(function (a) {
  _me.lobby.percent = 100 * a / _me.achievements.levelBounds().to;
  _Tf._Ek._29.render(_me.lobby.percent)
});

_me.lobby.setGameType = function (a) {
  if (a) {
    this.gameType(a);
    var c = _Tf._dc.GameType._O3(a);
    _me.lobbyTablesFilters.setGameType(c);
    _me.lobbyTournamentsFilters.setGameType(a);
    _Mf._b1.setLobbyGameType(c);
    _me.lobbyTablesFilters.values.gameType() === c && _me.lobby.closeCurrentTables();
    _me.lobby.showLoader();
    _Mf._ks.emit(_Ag._Vi, [a])
  }
}.bind(_me.lobby);

// _me.lobby.setGameType = function() {
//     var Game_Name = 'holdem';
//     this.gameType(Game_Name);
//     var c = _Tf._dc.GameType._O3(Game_Name);
//     _me.lobbyTablesFilters.setGameType(c);
//     _me.lobbyTournamentsFilters.setGameType(Game_Name);
//     _Mf._b1.setLobbyGameType(c);
//     _me.lobbyTablesFilters.values.gameType() === c && _me.lobby.closeCurrentTables();
//     _me.lobby.showLoader();
//     _Mf._ks.emit(_Ag._Vi, [Game_Name])
// }.bind(_me.lobby);

_me.lobby.getGameType = function () {
  return _Mf._Up._9p()
}.bind(_me.lobby);
_me.lobby.numSteps = 10;
_me.lobby.progressElements = ko.observableArray();
_me.lobby.showLoader = function () {
  _Mf._Md.showExternalDialog(_Tf._0l._N1._ff.GAME_TYPE_LOADER);
  _me.lobby.startFakeLoaderProgres();
  _me.menu.goToLobby()
}.bind(_me.lobby);
_me.lobby.hideLoader = function () {
  _Mf._Md.closeExternalDialog(_Tf._0l._N1._ff.GAME_TYPE_LOADER)
}.bind(_me.lobby);
_me.lobby.startFakeLoaderProgres = function () {
  setTimeout(function () {
    _me.lobby.progressElements().length < _me.lobby.numSteps ? (_me.lobby.progressElements.push(0), _me.lobby.startFakeLoaderProgres()) : (_me.lobby.progressElements.removeAll(), _me.lobby.hideLoader())
  }, 500)
}.bind(_me.lobby);
_me.lobby.closeCurrentTables = function () {
  var a = _Mf._q1.map,
    c;
  for (c in a) {
    var b = _Mf._q1._5p(c);
    if (!b) {
      this.onClose(c);
      break
    }
    b.sendLeaveTableMessage()
  }
}.bind(_me.lobby);
_me.lobby.getCurrentGameType = function () {
  return _Mf._Up._9p()
}.bind(_me.lobby);
_me.lobbyTablesFilters.params = {
  gameType: {
    any: -1,
    holdem: _Tf._dc.GameType._dk,
    omaha: _Tf._dc.GameType._6e,
    omaha_hl: _Tf._dc.GameType._u9,
    stud: _Tf._dc.GameType._Ll,
    stud_hl: _Tf._dc.GameType._zj,
    $: ["holdem", "omaha", "omaha_hl", "stud", "stud_hl"]
  },
  moneyType: {
    any: -1,
    play: _Tf._dc.MoneyType._i4,
    real: _Tf._dc.MoneyType._Ok,
    $: ["any", "play", "real"]
  },
  potType: {
    any: -1,
    unlimited: _Tf._dc.PotType._Wd,
    fixed: _Tf._dc.PotType._O1,
    limited: _Tf._dc.PotType._Mn,
    $: ["any", "unlimited", "fixed", "limited"]
  },
  baseStake: {
    any: -1,
    bb2: _Tf._U6._29._Xh(1),
    bb4: _Tf._U6._29._Xh(2),
    bb10: _Tf._U6._29._Xh(5),
    bb20: _Tf._U6._29._Xh(10),
    bb50: _Tf._U6._29._Xh(25),
    bb200: _Tf._U6._29._Xh(100),
    bb400: _Tf._U6._29._Xh(200),
    $: "any,bb2,bb4,bb10,bb20,bb50,bb200,bb400".split(",")
  },
  minCash: {
    any: -1,
    biSmall: [0, _Tf._U6._29._Xh(1E3)],
    biMedium: [_Tf._U6._29._Xh(1E3), _Tf._U6._29._Xh(1E4)],
    biBig: [_Tf._U6._29._Xh(1E4), -1],
    $: ["any", "biSmall", "biMedium", "biBig"]
  },
  maxPlayer: {
    any: -1,
    pSmall: 2,
    pMedium: [3, 6],
    pBig: [7, -1],
    $: ["any", "pSmall", "pMedium", "pBig"]
  },
  maxPlayerBlackJack: {
    any: -1,
    pSmall: 1,
    pMedium: [3],
    pBig: [5],
    $: ["any", "pSmall", "pMedium", "pBig"]
  },
  maxPlayerBaccarat: {
    any: -1,
    pSmall: 1,
    pMedium: [3],
    pBig: [5],
    $: ["any", "pSmall", "pMedium", "pBig"]
  },
  baseTimeout: {
    any: -1,
    veryFast: _Tf._dc.BaseTimeout._lr,
    fast: _Tf._dc.BaseTimeout._6n,
    normal: _Tf._dc.BaseTimeout._qj,
    slow: _Tf._dc.BaseTimeout._F6,
    verySlow: _Tf._dc.BaseTimeout._xg,
    $: ["any", "fast", "normal"]
  }
};
_me.lobbyTablesFilters.values = {
  gameType: ko.observable("any"),
  moneyType: ko.observable("any"),
  potType: ko.observable("any"),
  baseStake: ko.observable("any"),
  minCash: ko.observable("any"),
  maxPlayer: ko.observable("any"),
  maxPlayerBlackJack: ko.observable("any"),
  maxPlayerBaccarat: ko.observable("any"),
  baseTimeout: ko.observable("any")
};
_me.lobbyTablesFilters.names = function (a) {
  return {
    baseStake: ko.computed(function () {
      return a.locale()._V4[this.values.baseStake()]
    }.bind(this)),
    minCash: ko.computed(function () {
      return a.locale()._a4[this.values.minCash()]
    }.bind(this)),
    maxPlayer: ko.computed(function () {
      return a.locale()._X2[this.values.maxPlayer()]
    }.bind(this)),
    maxPlayerBlackJack: ko.computed(function () {
      return a.locale()._d8[this.values.maxPlayerBlackJack()]
    }.bind(this)),
    maxPlayerBaccarat: ko.computed(function () {
      return a.locale()._Z0[this.values.maxPlayerBaccarat()]
    }.bind(this)),
    baseTimeout: ko.computed(function () {
      return a.locale()._13[this.values.baseTimeout()]
    }.bind(this)),
    potType: ko.computed(function () {
      return a.locale()._S1[this.values.potType()]
    }.bind(this))
  }
}.call(_me.lobbyTablesFilters, _me);
_me.lobbyTablesFilters.playNow = function (a) {
  return function () {
    a.tablesSnap.canAdd() ? _Mf._Up._2f(_Tf._dc.MoneyType._i4, this.getFilterParams()) : _Mf._ks.emit(_Ag._P3, null)
  }
}.call(_me.lobbyTablesFilters, _me);
_me.lobbyTournamentsFilters.params = {
  gameType: {
    any: -1,
    holdem: _Tf._dc.GameType._dk,
    omaha: _Tf._dc.GameType._6e,
    omaha_hl: _Tf._dc.GameType._u9,
    stud: _Tf._dc.GameType._Ll,
    stud_hl: _Tf._dc.GameType._zj,
    $: ["holdem", "omaha", "omaha_hl", "stud", "stud_hl"]
  },
  tournamentType: {
    any: -1,
    scheduled: _Tf._dc.TournamentType._Nd,
    sng: _Tf._dc.TournamentType._Tc,
    $: ["scheduled", "sng"]
  },
  state: {
    any: -1,
    announced: _Tf._dc.TournamentState._Qa,
    registering: _Tf._dc.TournamentState._2k,
    seating: _Tf._dc.TournamentState._Td,
    running: _Tf._dc.TournamentState._Il,
    completed: _Tf._dc.TournamentState._Kp,
    canceled: _Tf._dc.TournamentState._t5,
    $: "any,announced,registering,seating,running,completed,canceled".split(",")
  },
  buyIn: {
    any: -1,
    biZero: 0,
    biSmall: [0, _Tf._U6._29._Xh(1E3)],
    biMedium: [_Tf._U6._29._Xh(1E3), _Tf._U6._29._Xh(1E4)],
    biBig: [_Tf._U6._29._Xh(1E4), -1],
    $: ["any", "biSmall", "biMedium", "biBig"]
  }
};
_me.lobbyTournamentsFilters.values = {
  gameType: ko.observable("holdem"),
  tournamentType: ko.observable("scheduled"),
  state: ko.observable("any"),
  buyIn: ko.observable("any")
};
_me.lobbyTournamentsFilters.names = function (a) {
  return {
    tournamentType: ko.computed(function () {
      return "any" === this.values.tournamentType() ? a.locale()._m7.any : a.locale()._b6[this.params.tournamentType[this.values.tournamentType()]]
    }.bind(this)),
    state: ko.computed(function () {
      return "any" === this.values.state() ? a.locale()._i1.any : a.locale()._t[this.params.state[this.values.state()]]
    }.bind(this)),
    buyIn: ko.computed(function () {
      return a.locale()._j5[this.values.buyIn()]
    }.bind(this)),
    gameType: ko.computed(function () {
      return "any" === this.values.gameType() ? a.locale()._i1.any : a.locale()._B6[this.params.gameType[this.values.gameType()]]
    }.bind(this))
  }
}.call(_me.lobbyTournamentsFilters, _me);
(function (a) {
  a.lastLobbyPage = function () {
    return _Tf._0l._N1._ff._3f
  }.bind(_me.menu);
  a.activePage.subscribe(function (a) {
    /tables-search/.test(a) && (this.activeMenuItem("tables-search"), this.isInternalSearchVisible(!0))
  }.bind(_me.menu));
  a.likePage = function () {
    "undefined" !== typeof ExternalUrl && ExternalUrl.openUrl("fb://profile/103333046473059", "https://www.facebook.com/VegasGames");
    window.open("https://www.facebook.com/VegasGames", "_system")
  };
  a.loginToFacebook = function () {
    _Xl._Af._hj._0h.isInited && _Xl._Af._hj._0h._mj()
  };
  a.openPrivacyPolicy = function () {
    window.open("http://www.vegasgames.com/policy.htm", "_system")
  };
  a.openTermsOfService = function () {
    window.open("http://www.vegasgames.com/term_services.html", "_system")
  };
  a.openContacts = function () {
    window.open("http://www.vegasgames.com/contact.htm", "_system")
  };
  a.openLanguageSettingsDialog = function () {
    _me.options.openLanguageSettingsDialog()
  };
  a.openLearnMore = function () {
    window.open("http://vegasgames.com/vegasgames.htm", "_system")
  }
})(_me.menu);
(function (a, c) {
  c.isAutoBlindVisible = function () {
    var b = a.lobby.getGameType(),
      c = _Tf._dc.GameType;
    return b === c._6e || b === c._u9 || b === c._dk
  };
  c.isAutoMuckVisible = function () {
    var b = a.lobby.getGameType(),
      c = _Tf._dc.GameType;
    return b !== c._c && b !== c._1 && b !== c._Ak
  }
})(_me, _me.options);
_me.profile.getCropPlayCash = function () {
  var a = 0;
  if (this.details()) a = this.details().playCash;
  return "undefined" === typeof _Tf._Ek._29 ? a : _Tf._Ek._29._ca(a, _Tf._dc.MoneyType._i4, !0)
}.bind(_me.profile);
_me.profile.cropRealCash = ko.computed(function () {
  var a = 0;
  if (this.details()) a = this.details().realCash;
  return "undefined" === typeof _Tf._Ek._29 ? a : _Tf._Ek._29._ca(a, _Tf._dc.MoneyType._Ok, !0)
}.bind(_me.profile));
_me.socialAvatars.setAvatarsList = function (a) {
  // console.log("avatar Img " + JSON.stringify(a));
  for (var c = 0; c < a.length; c++) {
    if (null === a[c].resource) a[c].resource = {
      normal: null,
      large: null
    };
    if (null === a[c].resource.normal) a[c].resource.normal = _Tf._0l._A._Nc._0q;
    if (null === a[c].resource.large) a[c].resource.large = _Tf._0l._A._Nc._0q
  }
  this.availableAvatarsList.set(a);
  // console.log("avatar set " + JSON.stringify(this.availableAvatarsList));
};
_me.tablesSnap.isAutoReBuy = ko.observable(!1);
_me.tablesSnap.isAutoTopUp = ko.observable(!1);
_me.tablesSnap.sliderConfig = {
  stepTime: 150,
  fastStepTime: 50,
  fastStep: 0,
  initStep: 0,
  isPressed: !1,
  timeoutCallback: null,
  isFast: !1,
  sliderTimeout: 800
};
_me.tablesSnap.beginToBuyIn = function (a) {
  this.buyInRequest[a] = !0;
  var a = _Mf._q1._Rm(a),
    c = {
      rebuy: this.isAutoReBuy(),
      topUp: this.isAutoTopUp()
    };
  a.setBuyInAutoActions(c)
}.bind(_me.tablesSnap);
_me.tablesSnap.canOpen = function (a) {
  var c = _Tf._dc.GameType,
    b = _Mf._Up._9p();
  _Tf._0l.needCloseInactiveTables && (c.isBlackJack(b) || c._98(b)) && this.closeInactiveTables(a.id);
  c = this.openedTables();
  if (c.length < _Tf._0l.maxOpenedTables) return !0;
  for (b = 0; b < c.length; b++) if (c[b].id === a.id) return !0;
  return !1
}.bind(_me.tablesSnap);
_me.tablesSnap.goToTable = function (a) {
  this.activeTable(a);
  _Mf._Md.getPageEvent(_Mf._Md.getPermanentPage())._am();
  if (a = _Mf._q1._Aa(this.getOpenedTable().id)) this.isAutoBlind(a.isAutoActionSet(_Tf._dc.AutoAction.__f)), this.isAutoMuck(a.isAutoActionSet(_Tf._dc.AutoAction._kh)), this.isAutoReBuy(a.isBuyInAutoActionSet(_Tf._dc.AutoAction._v8)), this.isAutoTopUp(a.isBuyInAutoActionSet(_Tf._dc.AutoAction._vp)), a = _me.tablesSnap.getOpenedTable(), _Mf._q1._5p(a.id)._F7()
}.bind(_me.tablesSnap);
_me.tablesSnap.toggleAutoReBuy = function () {
  this.isAutoReBuy(!this.isAutoReBuy())
}.bind(_me.tablesSnap);
_me.tablesSnap.toggleAutoTopUp = function () {
  this.isAutoTopUp(!this.isAutoTopUp())
}.bind(_me.tablesSnap);
_me.tablesSnap.openSettingsWidgetDialog = function () {
  _Tf._N1.$(_Tf._0l._N1._T2).show()
};
_me.tablesSnap.logoutTable = function () {
  _me.menu.logout();
  _Tf._N1.$(_Tf._0l._N1._T2).hide()
}.bind(_me.tablesSnap);
_me.tablesSnap.sitOut = function () {
  var a = this.getOpenedTable();
  if (a) {
    var c = _Tf._0l._N1,
      a = "{0}{1} #{2}-{3}-{4}".format(c._6i.format(a.id), c._Zb, a.id, _Tf._dc.CommandType._Xg, _Tf._dc.AutoAction._D4);
    $(a).click()
  }
}.bind(_me.tablesSnap);
_me.tablesSnap.decreaseBuyInSlider = function () {
  this.decreaseSlider(_Tf._N1.$(_Tf._0l._N1._ig))
}.bind(_me.tablesSnap);
_me.tablesSnap.increaseBuyInSlider = function () {
  this.increaseSlider(_Tf._N1.$(_Tf._0l._N1._ig))
}.bind(_me.tablesSnap);
_me.tablesSnap.stopBuyInSlider = function () {
  this.stopSlider()
}.bind(_me.tablesSnap);
_me.tablesSnap.decreaseRaiseSlider = function () {
  var a = this.getOpenedTable();
  a && this.decreaseSlider(_Tf._N1.$("#table-" + a.id + " " + _Tf._0l._N1._zg))
}.bind(_me.tablesSnap);
_me.tablesSnap.increaseRaiseSlider = function () {
  var a = this.getOpenedTable();
  a && this.increaseSlider(_Tf._N1.$("#table-" + a.id + " " + _Tf._0l._N1._zg))
}.bind(_me.tablesSnap);
_me.tablesSnap.stopRaiseSlider = function () {
  this.stopSlider()
}.bind(_me.tablesSnap);
_me.tablesSnap.prepareSlider = function (a) {
  this.sliderConfig.isPressed = !0;
  this.sliderConfig.isPressed && this.stopSlider();
  this.sliderConfig.isPressed = !0;
  this.sliderConfig.initStep = parseInt(a.attr("step"), 10);
  this.sliderConfig.fastStep = 2 * this.sliderConfig.initStep
};
_me.tablesSnap.decreaseSlider = function (a) {
  this.prepareSlider(a);
  this._decreaseSlider(a);
  this.initSliderTimeoutCallback()
};
_me.tablesSnap.increaseSlider = function (a) {
  this.prepareSlider(a);
  this._increaseSlider(a);
  this.initSliderTimeoutCallback()
};
_me.tablesSnap._increaseSlider = function (a) {
  if (this.sliderConfig.isPressed) {
    var c = parseInt(a.val(), 10),
      b = this;
    a.val(c + (this.sliderConfig.isFast ? this.sliderConfig.fastStep : this.sliderConfig.initStep));
    a.slider("refresh");
    setTimeout(function () {
      b._increaseSlider(a)
    }, this.sliderConfig.isFast ? this.sliderConfig.fastStepTime : this.sliderConfig.stepTime)
  }
};
_me.tablesSnap._decreaseSlider = function (a) {
  if (this.sliderConfig.isPressed) {
    var c = parseInt(a.val(), 10),
      b = this;
    a.val(c - (this.sliderConfig.isFast ? this.sliderConfig.fastStep : this.sliderConfig.initStep));
    a.slider("refresh");
    setTimeout(function () {
      b._decreaseSlider(a)
    }, this.sliderConfig.isFast ? this.sliderConfig.fastStepTime : this.sliderConfig.stepTime)
  }
};
_me.tablesSnap.stopSlider = function () {
  this.sliderConfig.isPressed = !1;
  this.sliderConfig.timeoutCallback && clearTimeout(this.sliderConfig.timeoutCallback);
  this.sliderConfig.isFast = !1
};
_me.tablesSnap.initSliderTimeoutCallback = function () {
  var a = this;
  this.sliderConfig.timeoutCallback = setTimeout(function () {
    a.sliderConfig.isFast = !0
  }, this.sliderConfig.sliderTimeout)
};
_me.tablesSnap.isAllInAuto = ko.observable(!1);
_me.tablesSnap.isAllInAuto.subscribe(function (a) {
  this.isWarnAllIn(!a)
}.bind(_me.tablesSnap));
_me.tablesSnap.isWarnAllIn = ko.observable(!_me.tablesSnap.isAllInAuto());
_me.tablesSnap.isWarnAllIn.subscribe(function (a) {
  this.isAllInAuto(!a)
}.bind(_me.tablesSnap));
_me.account.isLogined.subscribe(function () {
  this.isAllInAuto(!1)
}.bind(_me.tablesSnap));
_me.tablesSnap.allInCallback = null;
_me.tablesSnap.openAllInConfirm = function (a) {
  _Mf._Md.showExternalDialog(_Tf._0l._N1._ff.ALL_IN_CONFIRM);
  this.allInCallback = a || null
}.bind(_me.tablesSnap);
_me.tablesSnap.closeAllInConfirm = function () {
  _Mf._Md.closeExternalDialog(_Tf._0l._N1._ff.ALL_IN_CONFIRM)
};
_me.tablesSnap.confirmAllInAction = function () {
  "function" === typeof this.allInCallback && this.allInCallback();
  this.closeAllInConfirm()
}.bind(_me.tablesSnap);
_me.tablesSnap.openMenuDialog = function () {
  _Mf._Md.showExternalDialog(_Tf._0l._N1._ff.TABLE_MENU)
};
_me.tablesSnap.closeMenuDialog = function () {
  _Mf._Md.closeExternalDialog(_Tf._0l._N1._ff.TABLE_MENU)
};
_me.tablesSnap.standUpMenuDialog = function () {
  this.standUp();
  this.closeMenuDialog()
}.bind(_me.tablesSnap);
_me.tablesSnap.sitOutMenuDialog = function () {
  this.sitOut();
  this.closeMenuDialog()
}.bind(_me.tablesSnap);
_me.tablesSnap.imBackMenuDialog = function () {
  this.closeMenuDialog();
  _Tf._N1.$(_Tf._0l._N1._mr).click()
}.bind(_me.tablesSnap);
_me.tablesSnap.activeTableName = ko.computed(function () {
  var a = this.getOpenedTable();
  return !a ? "" : a.name
}.bind(_me.tablesSnap));
_me.tablesSnap.goToLobbyMenuDialog = function () {
  this.closeMenuDialog();
  _me.menu.openPage("lobby")
}.bind(_me.tablesSnap);
_me.tablesSnap.closeTableMenuDialog = function () {
  this.close()
}.bind(_me.tablesSnap);
(function () {
  var a = _h8._0l;
  "undefined" !== typeof a.DefaultAutoActions && ("undefined" !== typeof a.DefaultAutoActions[_Tf._dc.AutoAction.__f] && this.isAutoBlind(a.DefaultAutoActions[_Tf._dc.AutoAction.__f]), "undefined" !== typeof a.DefaultAutoActions[_Tf._dc.AutoAction._kh] && this.isAutoMuck(a.DefaultAutoActions[_Tf._dc.AutoAction._kh]))
}).call(_me.tablesSnap);
_me.tablesSnap.hasHiddenTable = ko.computed(function () {
  return 1 < this.openedTables().length ? !0 : !1
}.bind(_me.tablesSnap));
_me.tablesSnap.getFirstHiddenTable = ko.computed(function () {
  if (!this.hasHiddenTable()) return null;
  for (var a = this.openedTables(), c = this.activeTableId(), b = 0; b < a.length; b++) {
    var d = a[b];
    if (d.id != c) return d
  }
  return null
}.bind(_me.tablesSnap));
_me.tablesSnap.firstTableIsHidden = ko.computed(function () {
  if (!this.hasHiddenTable()) return !1;
  var a = this.openedTables(),
    c = this.activeTableId();
  return a[0] && a[0].id != c
}.bind(_me.tablesSnap));
_me.tablesSnap.secondTableIsHidden = ko.computed(function () {
  if (!this.hasHiddenTable()) return !1;
  var a = this.openedTables(),
    c = this.activeTableId();
  return a[1] && a[1].id != c
}.bind(_me.tablesSnap));
_me.tablesSnap.goToFirstTable = function () {
  this.firstTableIsHidden() && this.goToTable(0)
}.bind(_me.tablesSnap);
_me.tablesSnap.goToSecondTable = function () {
  this.secondTableIsHidden() && this.goToTable(1)
}.bind(_me.tablesSnap);
(function (a) {
  a.tablesSnap.tableMenu = {
    isShowTableMenu: ko.observable(!1),
    closeTableMenu: function () {
      a.tablesSnap.tableMenu.isShowTableMenu(!1)
    },
    openProfileInventoryPage: function () {
      a.menu.openPage("profile-inventory")
    },
    openLobbyPage: function () {
      var c = a.tablesSnap.getOpenedTable();
      c ? c.gameType == _Tf._dc.GameType._d4 ? (a.tablesSnap.close(), a.tablesSnap.tableMenu.closeTableMenu()) : a.menu.goToLobby() : a.menu.goToLobby()
    },
    standUp: function () {
      a.tablesSnap.standUp();
      a.tablesSnap.tableMenu.closeTableMenu()
    },
    openOptionsDialog: function () {
      a.options.openOptionsDialog();
      a.tablesSnap.tableMenu.closeTableMenu()
    },
    toggleTableMenu: function () {
      a.tablesSnap.tableMenu.isShowTableMenu(!a.tablesSnap.tableMenu.isShowTableMenu())
    }
  }
})(_me);
_h8._wc._3k = {
  85: {
    scale: new _8n(1, 1),
    offset: new _8n(93, -613),
    width: 769,
    height: 398,
    paths: {
      33: {
        d: "m 57.857135,779.50505 40.714287,-0.71429 C 134.69146,877.2762 224.40752,950.98617 372.85714,960.21934 528.16639,959.65281 632.47155,880.10948 666.42858,778.79076 l 40,0 C 666.25354,937.66023 512.49265,996.08097 372.85714,997.71934 245.51232,995.25431 85.458591,922.10218 57.857135,779.50505 Z"
      },
      34: {
        d: "m 104.99999,779.50505 40,-0.71429 c 18.19062,37.32986 76.9333,137.5065 234.28572,142.14287 133.92054,3.21016 215.66932,-77.04175 243.57144,-141.42858 l 37.14286,0 C 648.15943,832.34858 571.24588,951.94539 377.85714,956.64791 185.00254,947.89508 117.21013,825.2918 104.99999,779.50505 Z"
      },
      35: {
        d: "m 281.42857,896.64792 18.21428,-30.00001 c 59.01319,23.61078 115.93415,18.85131 171.78572,10e-6 l 16.69643,31.16071 c -71.53067,25.61285 -140.37233,25.97193 -206.69643,-1.16071 z"
      },
      40: {
        d: "M 150.71428,779.50505 190,778.07648 c 26.74564,36.27555 58.01779,67.05661 105.71428,87.14286 l -18.21428,30 C 220.2241,869.47855 179.48719,840.75808 150.71428,779.50505 Z"
      },
      41: {
        d: "m 580.71428,779.1479 37.50002,0.17859 c -19.78944,39.07662 -65.86443,95.90588 -126.78573,116.96428 l -16.78571,-30.71429 c 36.4484,-14.98692 72.4484,-35.65358 106.07142,-86.42858 z"
      }
    }
  }
};
_h8._wc._an = {
  init: function () {
    var a = _Tf._0l._N1,
      c = _Tf._41;
    this.FACEBOOK_BUTTON_LOGIN = '<div id="{id}" class="social-label" style="cursor: pointer; width: 100%; height: 100px;">\n\t\t\t\t<div id="facebook-logo" class="social-logo"></div>\n\t\t\t\t<div id="facebook-label" class="social-label"></div>\n\t\t\t</div>'.fill({
      id: _Xl._Af._0l._N1.FACEBOOK_BUTTON_LOGIN.substr(1)
    });
    this.ERROR_MESSAGE_FORM = '<div class="page-error" id="{id}"></div>';
    this._Do = "{text}: {small}/{big}".fill({
      text: c.$("_X6._W8")
    });
    this.TOURNAMENT_TABLE_STAKES =
      "{text}: {small}/{big} {anteText}: {ante}".fill({
        text: c.$("_c6._J8"),
        anteText: c.$("_c6._F6")
      });
    this.TABLE_TABS_CARD = '<div class="{csstable}" style="{style}">&nbsp;</div>'.fill({
      csstable: a._If.substr(1),
      style: "left: {left}%; top: {top}%; background-image: url('{cardImage}');"
    });
    this.TABLE_TABS_STAKE = '<div class="{csstable}">{stake}</div>'.fill({
      csstable: a._0s.substr(1)
    });
    this.TABLE_STAKES_NO_LABEL = "{small}/{big}";
    this.TABLE_BETS_NO_LABEL = "{min}/{max}";
    this.TABLE_PAYOUT_NO_LABEL = "{first}:{last}";
    this._vs =
      "{author}: {text}\n";
    this.GAME_BUTTON = '<button data-role="none" type="button" class="{cssclass}" id="{id}" >{label}</button>';
    this.GAME_CHECKBOX = '<input type="checkbox" id="{id}" {value}/><label for="{id}" >{label}</label>';
    this.SELECT_BET_AMOUNT_BUTTON = '<div id="{id}" class="{cssclass}">{label}</div>';
    this.DICE_HISTORY_WRAPPER = '<div class="dice-history-wrapper"><div class="dice-2d-{1} dice-history-first"></div><div class="dice-2d-{2} dice-history-second"></div><div class="dice-history-sum">{3}</div></div>';
    this.STAKES_BLOCK = '<div class="stake-chips stake-chips-{1} stake-chips-value-{2}"></div>';
    this.CRAPS_PLAYER_NAME = '<div class="craps-player-name">{name}</div><div class="craps-player-balance"></div>';
    this.BUTTON_STAND_UP = '<button data-role="none" type="button" class="{cssclass}" data-inline="true" >{label}</button>'.fill({
      cssclass: a._Hl.substr(1),
      label: c.$("_l9._R1")
    });
    this.BUTTON_IM_BACK = '<button data-role="none" type="button" class="{cssclass}" >{label}</button>'.fill({
      cssclass: a._mr.substr(1),
      label: c.$("_l9._47")
    });
    this.BUTTON_JOIN_WAIT_LIST = '<button data-role="none" type="button" class="{cssclass}" >{label}</button>'.fill({
      cssclass: a._Vm.substr(1),
      label: c.$("_l9._M8")
    });
    this.BUTTON_LEAVE_WAIT_LIST = '<button data-role="none" type="button" class="{cssclass}" >{label}</button>'.fill({
      cssclass: a._dd.substr(1),
      label: c.$("_l9._G7")
    });
    this.BUTTON_ADD_MONEY = '<button data-role="none" type="button" class="{cssclass}" data-inline="true" >{label}</button>'.fill({
      cssclass: a._al.substr(1),
      label: c.$("_l9._i9")
    });
    this.BUTTON_OK_BUY_IN =
      '<div id="{id}" class="ok-button" >{label}</div>'.fill({
        id: a._pk.substr(1),
        label: c.$("_j3._Y")
      });
    this.BUTTON_CANCEL_BUY_IN = '<div id="{id}" class="cancel-button" >{label}</div>'.fill({
      id: a._4f.substr(1),
      label: c.$("_j3._76")
    });
    this.BUTTON_OK_ADD_MONEY = '<div id="{id}" class="ok-button" >{label}</div>'.fill({
      id: a._nf.substr(1),
      label: c.$("_l9._i9")
    });
    this.BUTTON_CANCEL_ADD_MONEY = '<div id="{id}" class="cancel-button" >{label}</div>'.fill({
      id: a._Oe.substr(1),
      label: c.$("_j3._76")
    });
    this.PLAYER_NAME_ON_LOBBY =
      "{nick} {left}{fname}{space}{sname}{right}";
    this.CONFIRM_FORM = '<div class="confirm-popup-back" id={id}>\n\t\t\t\t<\!--POPUP BACKGROUND: BEGIN--\>\n\t\t\t\t<div class="popup_background"></div>\n\t\t\t\t<\!--POPUP BACKGROUND: END--\>\n\t\t\t\t<\!--POPUP CONTENT: BEGIN--\>\n\t\t\t\t<div class="popup_content">\n\t\t\t\t\t<table rows="1" cols="1" width="100%" height="100%" class="confirm-holder">\n\t\t\t\t\t\t<tr><td align="center" valign="center">\n\t\t\t\t\t\t\t<div class="confirm-popup">\n\t\t\t\t\t\t\t\t<div class="confirm-textarea">{text}</div>\n\t\t\t\t\t\t\t\t<div class="confirm-buttons">\n\t\t\t\t\t\t\t\t\t<div class="enterra-button">\n\t\t\t\t\t\t\t\t\t\t<button id="{idok}" class="ok-button" data-role="none" data-inline="true" >{oktext}</button>\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="enterra-button">\n\t\t\t\t\t\t\t\t\t\t<button id="{idcancel}" class="cancel-button" data-role="none" data-inline="true" >{canceltext}</button>\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<\!--POPUP CONTENT: END--\>\n\t\t\t</div>';
    this.ALERT_FORM = '<div class="confirm-popup-back" id={id}>\n\t\t\t\t<\!--POPUP BACKGROUND: BEGIN--\>\n\t\t\t\t<div class="popup_background"></div>\n\t\t\t\t<\!--POPUP BACKGROUND: END--\>\n\t\t\t\t<\!--POPUP CONTENT: BEGIN--\>\n\t\t\t\t<div class="popup_content">\n\t\t\t\t\t<table rows="1" cols="1" width="100%" height="100%" class="confirm-holder">\n\t\t\t\t\t\t<tr><td align="center" valign="center">\n\t\t\t\t\t\t\t<div class="confirm-popup">\n\t\t\t\t\t\t\t\t<div class="confirm-textarea">{text}</div>\n\t\t\t\t\t\t\t\t<div class="confirm-buttons">\n\t\t\t\t\t\t\t\t\t<div class="enterra-button">\n\t\t\t\t\t\t\t\t\t\t<button id="{idok}" class="ok-button" data-role="none" data-inline="true" >{oktext}</button>\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t\t<\!--POPUP CONTENT: END--\>\n\t\t\t</div>';
    this.INFO_FORM = '<div class="info-form-popup-back" id={id}><table rows="1" cols="1" width="100%" height="100%">\n\t\t\t\t\t<tr><td align="center" valign="center">\n\t\t\t\t\t\t\t<div class="info-form-popup">\n\t\t\t\t\t\t\t\t<div class="info-form-textarea" id="{idtext}">{text}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table></div>';
    this.BLOCKED_INFO_FORM = '<div class="confirm-popup-back" id={id}>\n\t\t\t\t<\!--POPUP BACKGROUND: BEGIN--\>\n\t\t\t\t<div class="popup_background"></div>\n\t\t\t\t<\!--POPUP BACKGROUND: END--\>\n\t\t\t\t<\!--POPUP CONTENT: BEGIN--\>\n\t\t\t\t<div class="info-form-popup-back" id={id}>\n\t\t\t\t\t<table rows="1" cols="1" width="100%" height="100%">\n\t\t\t\t\t\t<tr><td align="center" valign="center">\n\t\t\t\t\t\t\t\t<div class="info-form-popup">\n\t\t\t\t\t\t\t\t\t<div class="info-form-textarea" id="{idtext}">{text}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table></div>\n\t\t\t\t<\!--POPUP CONTENT: END--\>\n\t\t\t</div>';
    this.INFO_ORIENTATION_FORM = '<div class="info-form-popup-back" style="display: none;" id={id}><table rows="1" cols="1" width="100%" height="100%">\n\t\t\t<tr><td align="center" valign="center">\n\t\t\t\t\t\t<div class="info-form-popup">\n\t\t\t\t\t\t\t<div class="info-form-textarea" id={idtext}>{text}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table></div>';
    this.REGISTRATION_INPUT = '<div class="row-form sign-up-row-form">\t\t\t<div class="input-row-form sign-up-input-row-form" >\t\t\t<input type="{type}" data-bind="click: test.getTypeInput.bind($data,`{id}`)"  name="{name}" id="{id}" {required} pattern="{pattern}" value="{value}" class="input-white {required}">\t\t\t</div>\t\t\t</div>';
    this.REGISTRATION_GENDER = '<div class="row-form sign-up-row-form"><fieldset data-role="controlgroup" data-type="horizontal" class="controlgroup-fieldset">\n\t\t\t\t\t<div class="sign-up-lable-row-form"><legend id="{id}-text"></legend></div>\n\t\t\t\t\t<div class="input-row-form sign-up-input-row-form">\n\t\t\t\t\t\t<input type="radio" name="{name}" id="{id}-{option1}" value="{value1}" checked="checked" />\n\t\t\t\t\t\t<label for="{id}-{option1}" class="{spanclass}"><span id="{id}-{option1}-text"></span></label>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<input type="radio" name="{name}" id="{id}-{option2}" value="{value2}"/>\n\t\t\t\t\t\t<label for="{id}-{option2}" class="{spanclass}"><span id="{id}-{option2}-text"></span></label>\n\t\t\t\t\t</div></div>\t\t\t\t</fieldset>'.fill({
      id: "reg-input-{name}",
      option1: "male",
      option2: "female",
      value1: 77,
      value2: 70,
      spanclass: "radio-span"
    });
    // data-bind="click: test.getTypeInput"
    // data - bind="click:test.getTypeInput.bind($data,{name})"
    // data-bind="click:test.test2.bind($data,'hello')"
    this.REGISTRATION_MAP = '<div class="{iclass}">{nickName}{password}{eMail}</div>\t\t\t<div class="{iclass}">{firstName}{familyName}{middleName}{gender}{phoneNumber}</div>\t\t\t<div class="{iclass}">{country}{state}{city}{address}{zipCode}</div>\t\t\t<div class="{iclass}">{bonusCode}</div>'.fill({
      iclass: "white-form sign-up-white-form"
    });
    this.REGISTRATION_SHORT_MAP = '<div class="{iclass}">{nickName}{password}{eMail}</div>'.fill({
      iclass: "white-form sign-up-white-form"
    });
    this._lm = (this.REGISTRATION_INPUT + this.REGISTRATION_INPUT.fill({
      name: "none",
      id: "{id}-ver"
    })).fill({
      required: "required",
      type: "password",
      id: "reg-input-{name}"
    });
    this._se = this.REGISTRATION_INPUT.fill({
      type: "text",
      id: "reg-input-{name}"
    });
    this.REGISTRATION_INPUT = this.REGISTRATION_INPUT.fill({
      type: "text",
      id: "reg-input-{name}"
    });
    this.SELECT_OPTIONS = '<option value="{value}">{text}</option>';
    this.SHORT_SOCIAL_DIALOG = '<div id={id} value={value} type="{type}" class="social-dialog social-dialog-{position}">\n            <div class="confirm-popup">\n                <div class="social-dialog-data-player">\n                    <div class="social-dialog-login-player">{text}</div>\n                        {data}\n                    </div>\n                <div class="social-dialog-button-player" >\n                    <div class="confirm-buttons enterra-button-custom-dialog">\n                    </div>\n                    <div class="enterra-button enterra-button-close-dialog">\n                        <button type="button" data-role="none" class="cancel-button red-button" id="{idbuttonClose}" data-inline="true" data-bind="text: locale()._l9._I0">{buttonClose}</button>\n                    </div>\n                </div>\n            </div>\n\t\t</div>';
    this.SHORT_SOCIAL_WELCOME_DIALOG = '<div id={id} value={value} type="{type}" class="social-dialog social-dialog-{position}">\n            <div class="confirm-popup">\n                <div class="social-dialog-data-player">\n                    <div class="social-dialog-login-player">{text}</div>\n                        {data}\n                    </div>\n                    <div class="social-dialog-welcome-right"></div>\n                <div class="social-dialog-button-player" >\n                    <div class="confirm-buttons enterra-button-custom-dialog">\n                    </div>\n                    <div class="enterra-button enterra-button-close-dialog">\n                        <button type="button" data-role="none" class="cancel-button red-button" id="{idbuttonClose}" data-inline="true" data-bind="text: locale()._l9._r">CONTINUE</button>\n                    </div>\n                </div>\n            </div>\n\t\t</div>';
    this.LEVEL_DIALOG = '<div id={id} class="social-dialog popup-level">\n\t\t\t<div class="confirm-popup">\n\t\t\t\t<div class="content">\n\t\t\t\t\t<div class="achieved-text">{achievedText}</div>\n\t\t\t\t\t<div class="achieved-value-text"><span>{levelText}</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="social-dialog-button-player popup-button-container">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>';
    this.ACHIEVEMENTS_DIALOG = '<div id={id} class="social-dialog popup-achievement">\n\t\t\t<div class="confirm-popup">\n\t\t\t\t<div class="content">\n\t\t\t\t\t<div class="achievements-earned-text">{earnedText}</div>\t\t\t\t\t<div class="achievements-image" style="background-image: url({url}/{image}{format})">&nbsp;</div>\t\t\t\t\t<div class="achievements-description-text"><span>{achievementDescription}</span></div>\t\t\t\t</div>\n\t\t\t\t<div class="social-dialog-button-player popup-button-container">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>'.fill({
      url: _Xl._7a._0l._xj.achievementsImages.address,
      format: _Xl._7a._0l._xj.achievementsImages.format
    });
    this.SHORT_SOCIAL_DIALOG2 = '<div id={id} value={value} type="{type}" class="social-dialog social-dialog-{position}">\n            <div class="confirm-popup">\n                <div class="social-dialog-data-player">\n                    <div class="social-dialog-login-player">{text}</div>\n                        {data}\n                    </div>\n                <div class="social-dialog-button-player" >\n                    <div class="confirm-buttons enterra-button-custom-dialog">\n                    </div>\n                    <div class="enterra-button enterra-button-close-dialog">\n                        <button type="button" data-role="none" class="cancel-button red-button" id="{idbuttonClose}" data-inline="true" data-bind="text: locale()._l9._I0">{buttonClose}</button>\n                    </div>\n                </div>\n            </div>\n\t\t</div>';
    this.PLAYER_INFO = '<div class="social-dialog-image-player">\n                <div >\n                    <img src="design/Vegas/images/player.png" width="100%"></img>\n                </div>\n            </div>\n                    <div class="social-dialog-info-player">\n                        <div class="social-dialog-text-player">{text}</div>\n                    </div>';
    this.SOCIAL_DIALOG_BUTTON = '<div class="enterra-button social-dialog-button-block" >\n\t\t\t<button type="button" data-role="none" id="{id}" class="green-button green-button-buddy-dialog" data-inline="true">{text}</button>\n\t\t</div>'
  },

  // function getTypeInput(){
  //   alert("s");
  // },

  getCardLeftPositionRatio: function (a, c) {
    return a ? 0.5 : c ? 1.5 : 1
  },
  getCardPositionOffset: function () {
    return 35.5
  },
  getVisibleCardPosition: function (a, c) {
    var a = a || 0,
      c = c || 0,
      b = this.getCardPositionOffset();
    return 5 * a + c * b
  },
  getVisibleCardTopPosition: function (a) {
    return -5 * (a % 2)
  },
  getInvisibleCardPosition: function (a, c, b) {
    a = a || 0;
    c = c || 0;
    b = b || 1;
    return this.getCardPositionOffset() * (b - 1) + 8 * a + 3 * c
  },
  getVisibleCardsCount: function (a) {
    return a ? 2 : 3
  },
  getInvisibleCardsCount: function (a, c) {
    return a ? 0 : c ? 1 : 4
  },
  getBestHandString: function (a) {
    if (a) {
      for (var a = a.split(";"), c = "", b = 0; b < a.length; b++) {
        var d = this.getObjCardByCode(parseInt(a[b]));
        if (d != _Tf._dc._W2._G7) {
          var e = this.getCardMnemonic(d.marks);
          "Jk" == d.value && (e = "");
          c += ' <span class="card-marks-' + d.marks + '">' + d.value + e + "</span>"
        }
      }
      a = c
    } else a = _h8._wc._an.BEST_HAND_EMPTY || "";
    return a
  },
  getObjCardByCode: function (a) {
    a = parseInt(a);
    return 0 > a ? _Tf._dc._W2._G7 : {
      marks: _Tf._dc._W2._Dg[a % 4],
      value: _Tf._dc._W2._ip[(a - a % 4) / 4]
    }
  },
  getCardMnemonic: function (a) {
    _Dg = {
      c: "&clubs;",
      d: "&diams;",
      h: "&hearts;",
      s: "&spades;"
    };
    return _Dg[a]
  }
};
_Tf._Ek._29.render = function (a) {
  var c = function (a, b, c, d, e, f, g) {
    a = a.getContext("2d");
    a.beginPath();
    a.moveTo(b, c);
    a.lineTo(d, e);
    a.lineWidth = f;
    a.strokeStyle = g;
    a.stroke();
    a.closePath()
  }, b = function (a, b, e, f) {
    var g = f.startAngle || 0,
      h = f.endAngle || 2 * Math.PI,
      i = f.fillArea ? 0 : f.lineWidth || 1,
      j = f.drawOuterLine || !1,
      m = f.drawInnerLine || !1;
    d(a, b, e, g, h, i);
    if (j) {
      var k = b + i / 2;
      d(a, k, f.outerLineColor || "black", g, h, f.outerLineWidth || 1)
    }
    if (m) {
      var l = b - i / 2;
      d(a, l, f.innerLineColor || "black", g, h, f.innerLineWidth || 1)
    }
    j && m && f.ioconnect && (b = f.connectLineWidth || 1, f = f.connectLineColor || "black", e = x0 = x1 = a.width / 2, i = y0 = y1 = a.height / 2, x0 = e + Math.cos(g) * l, y0 = i + Math.sin(g) * l, x1 = e + Math.cos(g) * k, y1 = i + Math.sin(g) * k, c(a, x0, y0, x1, y1, b, f), x0 = e + Math.cos(h) * l, y0 = i + Math.sin(h) * l, x1 = e + Math.cos(h) * k, y1 = i + Math.sin(h) * k, c(a, x0, y0, x1, y1, b, f))
  }, d = function (a, b, c, d, e, f) {
    var g = a.width / 2,
      h = a.height / 2,
      a = a.getContext("2d"),
      d = d || 0,
      e = e || 2 * Math.PI,
      f = f || 0;
    a.beginPath();
    a.arc(g, h, b, d, e, !1);
    f ? (a.lineWidth = f, a.strokeStyle = c, a.stroke()) : (a.fillStyle = c, a.fill());
    a.closePath()
  },
    e = document.getElementById("canvas-level-indicator");
  if (null != e) {
    (function (a) {
      null != a && a.getContext("2d").clearRect(0, 0, a.width, a.height)
    })(e);
    var a = a ? a : 0,
      a = 100 < a ? 100 : 0 > a ? 0 : a,
      f = e.getContext("2d"),
      g = f.createLinearGradient(0, 0, 0, e.height),
      h = f.createLinearGradient(0, 0, 0, e.height);
    f.scale(e.width / e.height, 1);
    f = e.height > e.width ? e.width : e.height;
    f /= 2;
    h.addColorStop(0, "#c00078");
    h.addColorStop(1, "#901880");
    b(e, f, "black", {
      fillArea: !0
    });
    b(e, f - 1, h, {
      fillArea: !0
    });
    var i = 6.5 * Math.PI / 180,
      h = -(Math.PI / 2) + i,
      j = h + (2 * Math.PI - 2 * i),
      a = h + (2 * Math.PI - 2 * i) * a / 100,
      f = f - 13.5 - 13,
      h = {
        startAngle: h,
        endAngle: j,
        fillArea: !1,
        lineWidth: 27
      };
    b(e, f, "white", h);
    h.endAngle = a;
    h.drawOuterLine = !0;
    h.drawInnerLine = !0;
    h.ioconnect = !0;
    h.outerLineColor = "#e02a0c";
    h.innerLineColor = "#e02a0c";
    h.connectLineColor = "#e02a0c";
    g.addColorStop(0, "#fed847");
    g.addColorStop(1, "#eb720e");
    b(e, f, g, h)
  }
};
_Tf._Ek._29.getPagePositions = function () {
  var a = _h8._0l.screenSize.width,
    c = _h8._0l.screenSize.height,
    b = a / c,
    d = $(window).width(),
    e = $(window).height(),
    f = d / e;
  if (_Tf._Hc._Og.isiOS()) {
    var c = screen.width < screen.height,
      g = null !== navigator.userAgent.match(/iPhone/i),
      a = c ? screen.height : screen.width,
      c = c ? screen.width : screen.height;
    if (g) g = window.devicePixelRatio, 2 < g && (g = 2), a *= g, c *= g
  } else c = _Mf._Ta.getScreenAction(), a = c.width, c = c.height;
  f > b ? a = e * b : c = d / b;
  return {
    width: a,
    height: c,
    left: (d - a) / 2,
    top: (e - c) / 2
  }
};
_Tf._Ek._29._97 = function (a, c, b) {
  var a = this.getLocalDateFromString(a),
    d = 0,
    e = 0,
    f = "",
    g = _Tf._41.getLocale()._N5,
    f = "",
    b = b || !1;
  if (!a) return "-";
  f = "undefined" === typeof c ? "undefined" === typeof g.type ? "undefined" === typeof _h8._0l.hourFormat ? "24" : _h8._0l.hourFormat : 12 == g.type ? "12" : "24" : c ? "12" : "24";
  d = a.getHours();
  e = a.getMinutes();
  if ("12" == f) if (f = g._A2, 12 < d) d -= 12, f = g._n1;
  else if (0 == d) d = 12;
  else {
    if (12 == d) d = 0, f = g._A2
  } else f = "";
  10 > e && (e = "0" + e);
  c = parseInt(a.getMonth(), 10) + 1;
  return b ? c + "-" + a.getDate() + "-" + a.getFullYear() : c + "-" + a.getDate() + "-" + a.getFullYear() + ", " + d + ":" + e + f
};
_Tf._Ek._29.getLocalDateFromString = function (a, c) {
  var b = this.getDateFromString(a);
  if (!b) return null;
  var d = b.getTime() + _Mf._Ta.getServerTimeOffset();
  b.setTime(d);
  c || b.setSeconds(0);
  return b
};