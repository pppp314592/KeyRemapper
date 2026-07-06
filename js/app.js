// ============================================================
// KeyRemapper - メインアプリケーション
// ============================================================

// ---- キー定義 ----
const KEY_DEFS = [
  { id:'grave', label:'`~', category:'記号', ahk:'`' },
  { id:'1', label:'1!', category:'数字', ahk:'1' },
  { id:'2', label:'2@', labelJis:'2"', category:'数字', ahk:'2' },
  { id:'3', label:'3#', category:'数字', ahk:'3' },
  { id:'4', label:'4$', category:'数字', ahk:'4' },
  { id:'5', label:'5%', category:'数字', ahk:'5' },
  { id:'6', label:'6^', labelJis:'6&', category:'数字', ahk:'6' },
  { id:'7', label:'7&', labelJis:"7'", category:'数字', ahk:'7' },
  { id:'8', label:'8*', labelJis:'8(', category:'数字', ahk:'8' },
  { id:'9', label:'9(', labelJis:'9)', category:'数字', ahk:'9' },
  { id:'0', label:'0)', labelJis:'0', category:'数字', ahk:'0' },
  { id:'minus', label:'-_', labelJis:'-=', category:'記号', ahk:'-' },
  { id:'equal', label:'=+', category:'記号', ahk:'=' },
  { id:'q', label:'Q', category:'英字', ahk:'q' },
  { id:'w', label:'W', category:'英字', ahk:'w' },
  { id:'e', label:'E', category:'英字', ahk:'e' },
  { id:'r', label:'R', category:'英字', ahk:'r' },
  { id:'t', label:'T', category:'英字', ahk:'t' },
  { id:'y', label:'Y', category:'英字', ahk:'y' },
  { id:'u', label:'U', category:'英字', ahk:'u' },
  { id:'i', label:'I', category:'英字', ahk:'i' },
  { id:'o', label:'O', category:'英字', ahk:'o' },
  { id:'p', label:'P', category:'英字', ahk:'p' },
  { id:'a', label:'A', category:'英字', ahk:'a' },
  { id:'s', label:'S', category:'英字', ahk:'s' },
  { id:'d', label:'D', category:'英字', ahk:'d' },
  { id:'f', label:'F', category:'英字', ahk:'f' },
  { id:'g', label:'G', category:'英字', ahk:'g' },
  { id:'h', label:'H', category:'英字', ahk:'h' },
  { id:'j', label:'J', category:'英字', ahk:'j' },
  { id:'k', label:'K', category:'英字', ahk:'k' },
  { id:'l', label:'L', category:'英字', ahk:'l' },
  { id:'z', label:'Z', category:'英字', ahk:'z' },
  { id:'x', label:'X', category:'英字', ahk:'x' },
  { id:'c', label:'C', category:'英字', ahk:'c' },
  { id:'v', label:'V', category:'英字', ahk:'v' },
  { id:'b', label:'B', category:'英字', ahk:'b' },
  { id:'n', label:'N', category:'英字', ahk:'n' },
  { id:'m', label:'M', category:'英字', ahk:'m' },
  { id:'comma', label:',<', category:'記号', ahk:',' },
  { id:'dot', label:'.>', category:'記号', ahk:'.' },
  { id:'slash', label:'/?', category:'記号', ahk:'/' },
  { id:'semicolon', label:';:', labelJis:';+', category:'記号', ahk:'sc027' },
  { id:'quote', label:"'\"", category:'記号', ahk:"'" },
  { id:'lbracket', label:'[{', category:'記号', ahk:'[' },
  { id:'rbracket', label:']}', category:'記号', ahk:']' },
  { id:'backslash', label:'\\|', category:'記号', ahk:'\\' },

  // JIS 固有キー
  { id:'hankaku', label:'半角/全角', category:'JIS', ahk:'SC029' },
  { id:'yen', label:'¥|', category:'JIS', ahk:'\\' },
  { id:'caret', label:'^~', category:'JIS', ahk:'sc00d' },
  { id:'at_mark', label:'@', category:'JIS', ahk:'SC01A' },
  { id:'lbracket_jis', label:'[{', category:'JIS', ahk:'[' },
  { id:'colon_jis', label:':*', labelJis:':*', category:'JIS', ahk:"'" },
  { id:'rbracket_jis', label:']}', category:'JIS', ahk:']' },
  { id:'ro', label:'\\ _', category:'JIS', ahk:'SC073' },
  { id:'muhenkan', label:'無変換', category:'JIS', ahk:'SC07B' },
  { id:'henkan', label:'変換', category:'JIS', ahk:'SC079' },
  { id:'kana', label:'カタカナ', category:'JIS', ahk:'SC07D' },

  { id:'esc', label:'Esc', category:'操作', ahk:'Escape' },
  { id:'tab', label:'Tab', category:'操作', ahk:'Tab' },
  { id:'caps', label:'Caps', category:'操作', ahk:'CapsLock' },
  { id:'backspace', label:'Bksp', category:'操作', ahk:'Backspace' },
  { id:'enter', label:'Enter', category:'操作', ahk:'Enter' },
  { id:'space', label:'Space', category:'操作', ahk:'Space' },
  { id:'delete', label:'Del', category:'操作', ahk:'Delete' },
  { id:'insert', label:'Ins', category:'操作', ahk:'Insert' },
  { id:'home', label:'Home', category:'操作', ahk:'Home' },
  { id:'end', label:'End', category:'操作', ahk:'End' },
  { id:'pgup', label:'PgUp', category:'操作', ahk:'PgUp' },
  { id:'pgdn', label:'PgDn', category:'操作', ahk:'PgDn' },
  { id:'prtsc', label:'PrtSc', category:'操作', ahk:'PrintScreen' },
  { id:'scroll', label:'ScrLk', category:'操作', ahk:'ScrollLock' },
  { id:'pause', label:'Pause', category:'操作', ahk:'Pause' },
  { id:'menu', label:'Menu', category:'操作', ahk:'AppsKey' },

  { id:'f1', label:'F1', category:'Fn', ahk:'F1' },
  { id:'f2', label:'F2', category:'Fn', ahk:'F2' },
  { id:'f3', label:'F3', category:'Fn', ahk:'F3' },
  { id:'f4', label:'F4', category:'Fn', ahk:'F4' },
  { id:'f5', label:'F5', category:'Fn', ahk:'F5' },
  { id:'f6', label:'F6', category:'Fn', ahk:'F6' },
  { id:'f7', label:'F7', category:'Fn', ahk:'F7' },
  { id:'f8', label:'F8', category:'Fn', ahk:'F8' },
  { id:'f9', label:'F9', category:'Fn', ahk:'F9' },
  { id:'f10', label:'F10', category:'Fn', ahk:'F10' },
  { id:'f11', label:'F11', category:'Fn', ahk:'F11' },
  { id:'f12', label:'F12', category:'Fn', ahk:'F12' },

  { id:'lshift', label:'LShift', category:'修飾', ahk:'LShift' },
  { id:'rshift', label:'RShift', category:'修飾', ahk:'RShift' },
  { id:'lctrl', label:'LCtrl', category:'修飾', ahk:'LCtrl' },
  { id:'rctrl', label:'RCtrl', category:'修飾', ahk:'RCtrl' },
  { id:'lalt', label:'LAlt', category:'修飾', ahk:'LAlt' },
  { id:'ralt', label:'RAlt', category:'修飾', ahk:'RAlt' },
  { id:'lwin', label:'LWin', category:'修飾', ahk:'LWin' },
  { id:'rwin', label:'RWin', category:'修飾', ahk:'RWin' },

  { id:'up', label:'↑', category:'操作', ahk:'Up' },
  { id:'down', label:'↓', category:'操作', ahk:'Down' },
  { id:'left', label:'←', category:'操作', ahk:'Left' },
  { id:'right', label:'→', category:'操作', ahk:'Right' },

  { id:'n0', label:'N0', category:'テンキー', ahk:'Numpad0' },
  { id:'n1', label:'N1', category:'テンキー', ahk:'Numpad1' },
  { id:'n2', label:'N2', category:'テンキー', ahk:'Numpad2' },
  { id:'n3', label:'N3', category:'テンキー', ahk:'Numpad3' },
  { id:'n4', label:'N4', category:'テンキー', ahk:'Numpad4' },
  { id:'n5', label:'N5', category:'テンキー', ahk:'Numpad5' },
  { id:'n6', label:'N6', category:'テンキー', ahk:'Numpad6' },
  { id:'n7', label:'N7', category:'テンキー', ahk:'Numpad7' },
  { id:'n8', label:'N8', category:'テンキー', ahk:'Numpad8' },
  { id:'n9', label:'N9', category:'テンキー', ahk:'Numpad9' },
  { id:'ndot', label:'N.', category:'テンキー', ahk:'NumpadDot' },
  { id:'nplus', label:'N+', category:'テンキー', ahk:'NumpadAdd' },
  { id:'nminus', label:'N-', category:'テンキー', ahk:'NumpadSub' },
  { id:'nmult', label:'N*', category:'テンキー', ahk:'NumpadMult' },
  { id:'ndiv', label:'N/', category:'テンキー', ahk:'NumpadDiv' },
  { id:'nenter', label:'NEnt', category:'テンキー', ahk:'NumpadEnter' },
  { id:'nlock', label:'NumLk', category:'テンキー', ahk:'NumLock' },

  // メディアキー
  { id:'volume_up', label:'VolUp', category:'メディア', ahk:'Volume_Up' },
  { id:'volume_down', label:'VolDown', category:'メディア', ahk:'Volume_Down' },
  { id:'volume_mute', label:'VolMute', category:'メディア', ahk:'Volume_Mute' },
  { id:'media_next', label:'Next曲', category:'メディア', ahk:'Media_Next' },
  { id:'media_prev', label:'前曲', category:'メディア', ahk:'Media_Prev' },
  { id:'media_play', label:'再生/停止', category:'メディア', ahk:'Media_Play_Pause' },
  { id:'media_stop', label:'停止', category:'メディア', ahk:'Media_Stop' },

  // 記号（Shift+数字などで入力される文字）
  { id:'exclaim', label:'!', category:'記号', ahk:'!' },
  { id:'dquote', label:'"', category:'記号', ahk:'"' },
  { id:'hash', label:'#', category:'記号', ahk:'#' },
  { id:'dollar', label:'$', category:'記号', ahk:'$' },
  { id:'percent', label:'%', category:'記号', ahk:'%' },
  { id:'ampersand', label:'&', category:'記号', ahk:'&' },
  { id:'asterisk', label:'*', category:'記号', ahk:'*' },
  { id:'lparen', label:'(', category:'記号', ahk:'(' },
  { id:'rparen', label:')', category:'記号', ahk:')' },
  { id:'underscore', label:'_', category:'記号', ahk:'_' },
  { id:'plus', label:'+', category:'記号', ahk:'+' },
  { id:'less_than', label:'<', category:'記号', ahk:'<' },
  { id:'greater_than', label:'>', category:'記号', ahk:'>' },
  { id:'colon', label:':', category:'記号', ahk:':' },
  { id:'question', label:'?', category:'記号', ahk:'?' },
  { id:'at_sign', label:'@', category:'記号', ahk:'@' },
  { id:'caret_sym', label:'^', category:'記号', ahk:'^' },
  { id:'tilde', label:'~', category:'記号', ahk:'~' },
  { id:'pipe', label:'|', category:'記号', ahk:'|' },
];

const KEY_DEF_MAP = {};
KEY_DEFS.forEach(k => KEY_DEF_MAP[k.id] = k);

// ---- キーボードレイアウト（セクション分割） ----
const LAYOUTS = {
  ansi104: {
    name:'ANSI 104（フル）',
    fnRow: [
      { id:'esc', w:1 },
      { gap:0.5 },
      { id:'f1', w:1 }, { id:'f2', w:1 }, { id:'f3', w:1 }, { id:'f4', w:1 },
      { gap:0.25 },
      { id:'f5', w:1 }, { id:'f6', w:1 }, { id:'f7', w:1 }, { id:'f8', w:1 },
      { gap:0.25 },
      { id:'f9', w:1 }, { id:'f10', w:1 }, { id:'f11', w:1 }, { id:'f12', w:1 },
      { gap:0.25 },
      { id:'prtsc', w:1 }, { id:'scroll', w:1 }, { id:'pause', w:1 },
    ],
    mainRows: [
      [
        { id:'grave', w:1 }, { id:'1', w:1 }, { id:'2', w:1 }, { id:'3', w:1 },
        { id:'4', w:1 }, { id:'5', w:1 }, { id:'6', w:1 }, { id:'7', w:1 },
        { id:'8', w:1 }, { id:'9', w:1 }, { id:'0', w:1 }, { id:'minus', w:1 },
        { id:'equal', w:1 }, { id:'backspace', w:2 },
      ],
      [
        { id:'tab', w:1.5 },
        { id:'q', w:1 }, { id:'w', w:1 }, { id:'e', w:1 }, { id:'r', w:1 },
        { id:'t', w:1 }, { id:'y', w:1 }, { id:'u', w:1 }, { id:'i', w:1 },
        { id:'o', w:1 }, { id:'p', w:1 }, { id:'lbracket', w:1 }, { id:'rbracket', w:1 },
        { id:'backslash', w:1.5 },
      ],
      [
        { id:'caps', w:1.75 },
        { id:'a', w:1 }, { id:'s', w:1 }, { id:'d', w:1 }, { id:'f', w:1 },
        { id:'g', w:1 }, { id:'h', w:1 }, { id:'j', w:1 }, { id:'k', w:1 },
        { id:'l', w:1 }, { id:'semicolon', w:1 }, { id:'quote', w:1 },
        { id:'enter', w:2.25 },
      ],
      [
        { id:'lshift', w:2.25 },
        { id:'z', w:1 }, { id:'x', w:1 }, { id:'c', w:1 }, { id:'v', w:1 },
        { id:'b', w:1 }, { id:'n', w:1 }, { id:'m', w:1 },
        { id:'comma', w:1 }, { id:'dot', w:1 }, { id:'slash', w:1 },
        { id:'rshift', w:2.75 },
      ],
      [
        { id:'lctrl', w:1.25 },
        { id:'lwin', w:1.25 },
        { id:'lalt', w:1.25 },
        { id:'space', w:6.25 },
        { id:'ralt', w:1.25 },
        { id:'rwin', w:1.25 },
        { id:'menu', w:1.25 },
        { id:'rctrl', w:1.25 },
      ],
    ],
    navRows: [
      [ { id:'insert', w:1 }, { id:'home', w:1 }, { id:'pgup', w:1 } ],
      [ { id:'delete', w:1 }, { id:'end', w:1 }, { id:'pgdn', w:1 } ],
      [ { gap:1 }, { id:'up', w:1 }, { gap:1 } ],
      [ { id:'left', w:1 }, { id:'down', w:1 }, { id:'right', w:1 } ],
    ],
    numpadGrid: [
      { id:'nlock', col:1, row:1 }, { id:'ndiv', col:2, row:1 },
      { id:'nmult', col:3, row:1 }, { id:'nminus', col:4, row:1 },
      { id:'n7', col:1, row:2 }, { id:'n8', col:2, row:2 },
      { id:'n9', col:3, row:2 }, { id:'nplus', col:4, row:2, h:2 },
      { id:'n4', col:1, row:3 }, { id:'n5', col:2, row:3 },
      { id:'n6', col:3, row:3 },
      { id:'n1', col:1, row:4 }, { id:'n2', col:2, row:4 },
      { id:'n3', col:3, row:4 }, { id:'nenter', col:4, row:4, h:2 },
      { id:'n0', col:1, row:5, w:2 }, { id:'ndot', col:3, row:5 },
    ],
  },

  jis109: {
    name:'JIS 109（フル）',
    fnRow: [
      { id:'esc', w:1 },
      { gap:0.5 },
      { id:'f1', w:1 }, { id:'f2', w:1 }, { id:'f3', w:1 }, { id:'f4', w:1 },
      { gap:0.25 },
      { id:'f5', w:1 }, { id:'f6', w:1 }, { id:'f7', w:1 }, { id:'f8', w:1 },
      { gap:0.25 },
      { id:'f9', w:1 }, { id:'f10', w:1 }, { id:'f11', w:1 }, { id:'f12', w:1 },
      { gap:0.25 },
      { id:'prtsc', w:1 }, { id:'scroll', w:1 }, { id:'pause', w:1 },
    ],
    mainRows: [
      [
        { id:'hankaku', w:1 }, { id:'1', w:1 }, { id:'2', w:1 }, { id:'3', w:1 },
        { id:'4', w:1 }, { id:'5', w:1 }, { id:'6', w:1 }, { id:'7', w:1 },
        { id:'8', w:1 }, { id:'9', w:1 }, { id:'0', w:1 }, { id:'minus', w:1 },
        { id:'caret', w:1 }, { id:'yen', w:1 },         { id:'backspace', w:1.25 },
      ],
      [
        { id:'tab', w:1.5 },
        { id:'q', w:1 }, { id:'w', w:1 }, { id:'e', w:1 }, { id:'r', w:1 },
        { id:'t', w:1 }, { id:'y', w:1 }, { id:'u', w:1 }, { id:'i', w:1 },
        { id:'o', w:1 }, { id:'p', w:1 }, { id:'at_mark', w:1 },
        { id:'lbracket_jis', w:1 },
        { gap:0.5 },
        { id:'enter', w:1, h:2 },
      ],
      [
        { id:'caps', w:1.75 },
        { id:'a', w:1 }, { id:'s', w:1 }, { id:'d', w:1 }, { id:'f', w:1 },
        { id:'g', w:1 }, { id:'h', w:1 }, { id:'j', w:1 }, { id:'k', w:1 },
        { id:'l', w:1 }, { id:'semicolon', w:1 },
        { id:'colon_jis', w:1 },
        { id:'rbracket_jis', w:1 },
        { gap:0.5 },
      ],
      [
        { id:'lshift', w:2.25 },
        { id:'z', w:1 }, { id:'x', w:1 }, { id:'c', w:1 }, { id:'v', w:1 },
        { id:'b', w:1 }, { id:'n', w:1 }, { id:'m', w:1 },
        { id:'comma', w:1 }, { id:'dot', w:1 }, { id:'slash', w:1 },
        { id:'ro', w:1 }, { id:'rshift', w:2.25 },
      ],
      [
        { id:'lctrl', w:1 },
        { id:'lwin', w:1 },
        { id:'lalt', w:1.25 },
        { id:'muhenkan', w:1 },
        { id:'space', w:5 },
        { id:'henkan', w:1 },
        { id:'kana', w:1 },
        { id:'ralt', w:1.25 },
        { id:'rwin', w:1 },
        { id:'menu', w:1 },
        { id:'rctrl', w:1 },
        { gap:0.5 },
      ],
    ],
    navRows: [
      [ { id:'insert', w:1 }, { id:'home', w:1 }, { id:'pgup', w:1 } ],
      [ { id:'delete', w:1 }, { id:'end', w:1 }, { id:'pgdn', w:1 } ],
      [ { gap:1 }, { id:'up', w:1 }, { gap:1 } ],
      [ { id:'left', w:1 }, { id:'down', w:1 }, { id:'right', w:1 } ],
    ],
    numpadGrid: [
      { id:'nlock', col:1, row:1 }, { id:'ndiv', col:2, row:1 },
      { id:'nmult', col:3, row:1 }, { id:'nminus', col:4, row:1 },
      { id:'n7', col:1, row:2 }, { id:'n8', col:2, row:2 },
      { id:'n9', col:3, row:2 }, { id:'nplus', col:4, row:2, h:2 },
      { id:'n4', col:1, row:3 }, { id:'n5', col:2, row:3 },
      { id:'n6', col:3, row:3 },
      { id:'n1', col:1, row:4 }, { id:'n2', col:2, row:4 },
      { id:'n3', col:3, row:4 }, { id:'nenter', col:4, row:4, h:2 },
      { id:'n0', col:1, row:5, w:2 }, { id:'ndot', col:3, row:5 },
    ],
  },
};

// ---- アプリケーション状態 ----
const state = {
  layout: 'ansi104',
  layers: [
    { name:'Default', mappings:{} },
    { name:'Layer 1', mappings:{} },
  ],
  activeLayer: 0,
  remapTarget: null,
};

function getLayout() { return LAYOUTS[state.layout]; }

// ---- レイヤー管理 ----
function addLayer() {
  const idx = state.layers.length;
  state.layers.push({ name:`Layer ${idx}`, mappings:{} });
  renderLayerList();
}

function deleteLayer(idx) {
  if (state.layers.length <= 1) return;
  state.layers.splice(idx, 1);
  if (state.activeLayer >= state.layers.length) {
    state.activeLayer = state.layers.length - 1;
  }
  renderLayerList();
  renderKeyboard();
}

function setActiveLayer(idx) {
  state.activeLayer = idx;
  renderLayerList();
  renderKeyboard();
}

function renameLayer(idx, name) {
  state.layers[idx].name = name;
  renderLayerList();
}

function getAllPhysicalKeys() {
  const layout = getLayout();
  const keys = [];
  (layout.fnRow || []).forEach(k => { if (k.id) keys.push(k.id); });
  (layout.mainRows || []).forEach(row =>
    row.forEach(k => { if (k.id) keys.push(k.id); })
  );
  (layout.navRows || []).forEach(row =>
    row.forEach(k => { if (k.id) keys.push(k.id); })
  );
  (layout.numpadGrid || []).forEach(k => { if (k.id) keys.push(k.id); });
  return keys;
}

function setLayerAllDefault() {
  state.layers[state.activeLayer].mappings = {};
  renderKeyboard();
}

function setLayerAllTransparent() {
  const keys = getAllPhysicalKeys();
  const mappings = state.layers[state.activeLayer].mappings;
  keys.forEach(k => { mappings[k] = 'transparent'; });
  renderKeyboard();
}

function setLayerUnmappedDefault() {
  const keys = getAllPhysicalKeys();
  const mappings = state.layers[state.activeLayer].mappings;
  keys.forEach(k => { if (!mappings[k]) delete mappings[k]; });
  renderKeyboard();
}

function setLayerUnmappedTransparent() {
  const keys = getAllPhysicalKeys();
  const mappings = state.layers[state.activeLayer].mappings;
  keys.forEach(k => { if (!mappings[k]) mappings[k] = 'transparent'; });
  renderKeyboard();
}

function renderLayerList() {
  const ul = document.getElementById('layer-list');
  ul.innerHTML = '';
  state.layers.forEach((layer, i) => {
    const li = document.createElement('li');
    li.className = i === state.activeLayer ? 'active' : '';
    li.innerHTML =
      `<input class="layer-name" value="${layer.name}"` +
      ` onfocus="this.select()" onchange="renameLayer(${i}, this.value)"` +
      ` onclick="event.stopPropagation(); setActiveLayer(${i})">` +
      `<button class="layer-del" onclick="event.stopPropagation(); deleteLayer(${i})" title="削除">✕</button>`;
    li.onclick = () => setActiveLayer(i);
    ul.appendChild(li);
  });
}

// ---- キーボード描画 ----
function renderKeyboard() {
  const kb = document.getElementById('keyboard');
  const layout = getLayout();
  const showTx = document.getElementById('toggle-tx').checked;
  kb.innerHTML = '';

  // Fn 行
  if (layout.fnRow && layout.fnRow.length) {
    const fnSec = document.createElement('div');
    fnSec.className = 'kb-fn-section';
    fnSec.appendChild(createRow(layout.fnRow, showTx));
    kb.appendChild(fnSec);
  }

  // メイン + 右側
  const body = document.createElement('div');
  body.className = 'kb-body';

  // メイン部
  const mainSec = document.createElement('div');
  mainSec.className = 'kb-section';
  layout.mainRows.forEach(r => mainSec.appendChild(createRow(r, showTx)));
  body.appendChild(mainSec);

  // Nav 部
  if (layout.navRows && layout.navRows.length) {
    const navSec = document.createElement('div');
    navSec.className = 'kb-section';
    const navLabel = document.createElement('div');
    navLabel.className = 'kb-section-label';
    navLabel.textContent = 'NAV';
    navSec.appendChild(navLabel);
    layout.navRows.forEach(r => navSec.appendChild(createRow(r, showTx)));
    body.appendChild(navSec);
  }

  // テンキー部（CSS Grid で縦長対応）
  if (layout.numpadGrid && layout.numpadGrid.length) {
    const npSec = document.createElement('div');
    npSec.className = 'kb-section numpad-grid';
    npSec.style.gridTemplateColumns = 'repeat(4, 46px)';
    npSec.style.gridTemplateRows = 'repeat(5, 44px)';
    const npLabel = document.createElement('div');
    npLabel.className = 'kb-section-label';
    npLabel.textContent = 'TENKEY';
    npLabel.style.gridColumn = '1 / -1';
    npSec.appendChild(npLabel);
    layout.numpadGrid.forEach(kd => {
      const el = document.createElement('div');
      el.className = 'kb-key';
      el.dataset.keyId = kd.id;
      el.style.gridColumn = `${kd.col} / span ${kd.w || 1}`;
      el.style.gridRow = `${kd.row} / span ${kd.h || 1}`;

      const physLabel = document.createElement('span');
      physLabel.className = 'key-label';
      const pk = KEY_DEF_MAP[kd.id];
      physLabel.textContent = pk ? keyLabel(pk) : kd.id;
      el.appendChild(physLabel);

      const mapping = getEffectiveMapping(kd.id, state.activeLayer);
      if (mapping) {
        if (mapping.type === 'transparent' && showTx) {
          el.classList.add('transparent');
          el.appendChild(labelSpan('key-mapping', '透過'));
        } else if (mapping.type === 'layer') {
          el.classList.add('layer-switch');
          el.appendChild(labelSpan('key-mapping', 'MO(' + mapping.layer + ')'));
        } else if (mapping.type === 'none') {
          el.classList.add('none');
          el.appendChild(labelSpan('key-mapping', '無効'));
        } else if (mapping.type === 'modtap') {
          el.classList.add('modtap');
          const tk = KEY_DEF_MAP[mapping.tap];
          el.appendChild(labelSpan('key-mapping', tk ? keyLabel(tk) : mapping.tap));
          if (mapping.holdType === 'layer') {
            el.appendChild(labelSpan('key-mapping-sub', 'MO(' + mapping.holdLayer + ')(長)'));
          } else {
            const hk = KEY_DEF_MAP[mapping.hold];
            el.appendChild(labelSpan('key-mapping-sub', (hk ? keyLabel(hk) : mapping.hold) + '(長)'));
          }
        } else if (mapping.type === 'key') {
          el.classList.add('mapped');
          const mk = KEY_DEF_MAP[mapping.keyId];
          el.appendChild(labelSpan('key-mapping', mk ? keyLabel(mk) : mapping.keyId));
        }
      }
      el.onclick = () => openRemapDialog(state.activeLayer, kd.id);
      npSec.appendChild(el);
    });
    body.appendChild(npSec);
  }

  kb.appendChild(body);
}

function labelSpan(cls, text) {
  const s = document.createElement('span'); s.className = cls; s.textContent = text; return s;
}

function keyLabel(pk) {
  if (!pk) return '?';
  return state.layout === 'jis109' && pk.labelJis ? pk.labelJis : pk.label;
}

function createKeyEl(keyDef, showTx) {
  const el = document.createElement('div');
  el.className = 'kb-key';
  el.dataset.keyId = keyDef.id;
  el.style.width = (keyDef.w * 46) + 'px';
  if (keyDef.h && keyDef.h > 1) {
    el.style.height = (keyDef.h * 44 + (keyDef.h - 1) * 4) + 'px';
    el.style.marginBottom = -((keyDef.h - 1) * 44 + (keyDef.h - 1) * 4) + 'px';
    el.classList.add('tall');
  }

  const physLabel = document.createElement('span');
  physLabel.className = 'key-label';
  const pk = KEY_DEF_MAP[keyDef.id];
  physLabel.textContent = pk ? keyLabel(pk) : keyDef.id;
  el.appendChild(physLabel);

  const mapping = getEffectiveMapping(keyDef.id, state.activeLayer);
  if (mapping) {
    if (mapping.type === 'transparent') {
      if (showTx) {
        el.classList.add('transparent');
        const ml = document.createElement('span');
        ml.className = 'key-mapping';
        ml.textContent = '透過';
        el.appendChild(ml);
      }
    } else if (mapping.type === 'layer') {
      el.classList.add('layer-switch');
      const ml = document.createElement('span');
      ml.className = 'key-mapping';
      ml.textContent = 'MO(' + mapping.layer + ')';
      el.appendChild(ml);
    } else if (mapping.type === 'none') {
      el.classList.add('none');
      const ml = document.createElement('span');
      ml.className = 'key-mapping';
      ml.textContent = '無効';
      el.appendChild(ml);
    } else if (mapping.type === 'modtap') {
      el.classList.add('modtap');
      const tk = KEY_DEF_MAP[mapping.tap];
      el.appendChild(labelSpan('key-mapping', tk ? keyLabel(tk) : mapping.tap));
      if (mapping.holdType === 'layer') {
        el.appendChild(labelSpan('key-mapping-sub', 'MO(' + mapping.holdLayer + ')(長)'));
      } else {
        const hk = KEY_DEF_MAP[mapping.hold];
        el.appendChild(labelSpan('key-mapping-sub', (hk ? keyLabel(hk) : mapping.hold) + '(長)'));
      }
    } else if (mapping.type === 'key') {
      el.classList.add('mapped');
      const ml = document.createElement('span');
      ml.className = 'key-mapping';
      const mk = KEY_DEF_MAP[mapping.keyId];
      ml.textContent = mk ? keyLabel(mk) : mapping.keyId;
      el.appendChild(ml);
    }
  }

  el.onclick = () => openRemapDialog(state.activeLayer, keyDef.id);
  return el;
}

function createRow(rowDefs, showTx) {
  const rowDiv = document.createElement('div');
  rowDiv.className = 'kb-row';
  rowDefs.forEach(kd => {
    if (kd.gap) {
      const gap = document.createElement('div');
      gap.className = 'kb-key gap';
      gap.style.width = (kd.gap * 46) + 'px';
      gap.style.minWidth = 'auto';
      rowDiv.appendChild(gap);
    } else {
      rowDiv.appendChild(createKeyEl(kd, showTx));
    }
  });
  return rowDiv;
}

function getEffectiveMapping(keyId, layerIdx) {
  const layer = state.layers[layerIdx];
  if (!layer) return null;
  const raw = layer.mappings[keyId];
  if (!raw) return null;

  if (raw === 'transparent') return { type:'transparent' };
  if (raw === 'none') return { type:'none' };
  if (raw.startsWith('layer:')) {
    const target = parseInt(raw.split(':')[1]);
    return { type:'layer', layer:target };
  }
  if (raw.startsWith('modtap:')) {
    const parts = raw.split(':');
    if (parts[2] === 'layer') {
      return { type:'modtap', tap:parts[1], holdType:'layer', holdLayer:parseInt(parts[3]) };
    }
    return { type:'modtap', tap:parts[1], holdType:'key', hold:parts[2] };
  }
  return { type:'key', keyId:raw };
}

// ---- リマップダイアログ ----
let dialogKeyList = [];
let modtapTarget = 'tap'; // 'tap' or 'hold'

function openRemapDialog(layerIdx, keyId) {
  state.remapTarget = { layerIdx, keyId };
  const pk = KEY_DEF_MAP[keyId];
  document.getElementById('remap-physical-label').textContent = pk ? keyLabel(pk) : keyId;
  document.getElementById('remap-title').textContent =
    state.layers[layerIdx].name + ' - キー割当';

  const current = state.layers[layerIdx].mappings[keyId];
  updateCurrentLabel(current);

  document.getElementById('remap-type-select').value = getTypeFromRaw(current);
  document.getElementById('remap-key-search').value = '';
  document.getElementById('remap-modtap-tap').value = '';
  document.getElementById('remap-modtap-hold').value = '';
  onRemapTypeChange();

  // 現在のキー割当を選択状態にする
  const type = getTypeFromRaw(current);
  if (type === 'key' && current) {
    setTimeout(() => {
      const t = document.querySelector(`.remap-key-item[data-key-id="${current}"]`);
      if (t) t.classList.add('selected');
    }, 50);
  }
  if (type === 'modtap') {
    const parts = current.split(':');
    const holdType = parts[2] === 'layer' ? 'layer' : 'key';
    document.getElementById('remap-modtap-hold-type').value = holdType;
    setTimeout(() => {
      const t1 = document.querySelector(`#remap-modtap-tap-list .remap-key-item[data-key-id="${parts[1]}"]`);
      if (t1) t1.classList.add('selected');
      if (holdType === 'key') {
        const t2 = document.querySelector(`#remap-modtap-hold-list .remap-key-item[data-key-id="${parts[2]}"]`);
        if (t2) t2.classList.add('selected');
      }
    }, 50);
    document.getElementById('remap-modtap-hold-key').classList.toggle('hidden', holdType !== 'key');
    document.getElementById('remap-modtap-hold-layer').classList.toggle('hidden', holdType !== 'layer');
    if (holdType === 'layer') {
      const sel = document.getElementById('remap-modtap-layer-choice');
      sel.innerHTML = '';
      state.layers.forEach((l, i) => {
        if (i !== state.remapTarget.layerIdx) {
          const opt = document.createElement('option');
          opt.value = i;
          opt.textContent = l.name;
          sel.appendChild(opt);
        }
      });
      if (parts[3]) sel.value = parts[3];
    }
  }

  document.getElementById('remap-dialog').classList.remove('hidden');
}

function closeRemapDialog() {
  document.getElementById('remap-dialog').classList.add('hidden');
  state.remapTarget = null;
}

function getTypeFromRaw(raw) {
  if (!raw) return 'key';
  if (raw === 'transparent') return 'transparent';
  if (raw === 'none') return 'none';
  if (raw.startsWith('layer:')) return 'layer';
  if (raw.startsWith('modtap:')) return 'modtap';
  return 'key';
}

function onRemapTypeChange() {
  const type = document.getElementById('remap-type-select').value;
  document.getElementById('remap-key-select').classList.toggle('hidden', type !== 'key');
  document.getElementById('remap-modtap-select').classList.toggle('hidden', type !== 'modtap');
  document.getElementById('remap-layer-select').classList.toggle('hidden', type !== 'layer');

  if (type === 'key') {
    populateKeyList('remap-key-list', '', null);
  }
  if (type === 'modtap') {
    document.getElementById('remap-modtap-hold-type').value = 'key';
    document.getElementById('remap-modtap-hold-key').classList.remove('hidden');
    document.getElementById('remap-modtap-hold-layer').classList.add('hidden');
    populateKeyList('remap-modtap-tap-list', '', 'modtap');
    populateKeyList('remap-modtap-hold-list', '', 'modtap');
  }
  if (type === 'layer') {
    const sel = document.getElementById('remap-layer-choice');
    sel.innerHTML = '';
    state.layers.forEach((l, i) => {
      if (i !== state.remapTarget.layerIdx) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = l.name;
        sel.appendChild(opt);
      }
    });
  }
}

function populateKeyList(containerId, filter, mode) {
  const container = document.getElementById(containerId);
  const f = filter.toLowerCase();
  let keys = KEY_DEFS.filter(k => {
    const searchLabel = state.layout === 'jis109' && k.labelJis ? k.labelJis.toLowerCase() : k.label.toLowerCase();
    return k.id.includes(f) || searchLabel.includes(f) || k.category.includes(f);
  });
  if (keys.length > 200) keys = keys.slice(0, 200);
  container.innerHTML = '';
  keys.forEach(k => {
    const div = document.createElement('div');
    div.className = 'remap-key-item';
    div.dataset.keyId = k.id;
    const dispLabel = state.layout === 'jis109' && k.labelJis ? k.labelJis : k.label;
    div.innerHTML = `<span>${dispLabel}</span><span class="rk-label">${k.category}</span>`;

    if (mode === 'modtap') {
      const current = state.layers[state.remapTarget.layerIdx].mappings[state.remapTarget.keyId];
      if (current && current.startsWith('modtap:')) {
        const parts = current.split(':');
        if (containerId === 'remap-modtap-tap-list' && parts[1] === k.id) div.classList.add('selected');
        if (containerId === 'remap-modtap-hold-list' && parts[2] !== 'layer' && parts[2] === k.id) div.classList.add('selected');
      }
    } else {
      const current = state.layers[state.remapTarget.layerIdx].mappings[state.remapTarget.keyId];
      if (current === k.id) div.classList.add('selected');
    }

    div.onclick = () => {
      container.querySelectorAll('.remap-key-item').forEach(el => el.classList.remove('selected'));
      div.classList.add('selected');
    };
    container.appendChild(div);
  });
}

function onRemapSearch() {
  const q = document.getElementById('remap-key-search').value;
  populateKeyList('remap-key-list', q, null);
}

function onModTapHoldTypeChange() {
  const type = document.getElementById('remap-modtap-hold-type').value;
  document.getElementById('remap-modtap-hold-key').classList.toggle('hidden', type !== 'key');
  document.getElementById('remap-modtap-hold-layer').classList.toggle('hidden', type !== 'layer');
  if (type === 'key') {
    populateKeyList('remap-modtap-hold-list', '', 'modtap');
  }
  if (type === 'layer') {
    const sel = document.getElementById('remap-modtap-layer-choice');
    sel.innerHTML = '';
    state.layers.forEach((l, i) => {
      if (i !== state.remapTarget.layerIdx) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = l.name;
        sel.appendChild(opt);
      }
    });
  }
}

function onModTapSearch() {
  const tq = document.getElementById('remap-modtap-tap').value;
  populateKeyList('remap-modtap-tap-list', tq, 'modtap');
  const holdType = document.getElementById('remap-modtap-hold-type').value;
  if (holdType === 'key') {
    const hq = document.getElementById('remap-modtap-hold').value;
    populateKeyList('remap-modtap-hold-list', hq, 'modtap');
  }
}

function applyRemap() {
  if (!state.remapTarget) return;
  const { layerIdx, keyId } = state.remapTarget;
  const type = document.getElementById('remap-type-select').value;

  let raw;
  if (type === 'transparent') raw = 'transparent';
  else if (type === 'none') raw = 'none';
  else if (type === 'layer') {
    const target = document.getElementById('remap-layer-choice').value;
    raw = 'layer:' + target;
  } else if (type === 'modtap') {
    const tapSel = document.querySelector('#remap-modtap-tap-list .remap-key-item.selected');
    const tap = tapSel ? tapSel.dataset.keyId : keyId;
    const holdType = document.getElementById('remap-modtap-hold-type').value;
    if (holdType === 'layer') {
      const layerTarget = document.getElementById('remap-modtap-layer-choice').value;
      raw = 'modtap:' + tap + ':layer:' + layerTarget;
    } else {
      const holdSel = document.querySelector('#remap-modtap-hold-list .remap-key-item.selected');
      const hold = holdSel ? holdSel.dataset.keyId : 'lctrl';
      raw = 'modtap:' + tap + ':' + hold;
    }
  } else {
    const selected = document.querySelector('#remap-key-list .remap-key-item.selected');
    raw = selected ? selected.dataset.keyId : keyId;
  }

  state.layers[layerIdx].mappings[keyId] = raw;
  closeRemapDialog();
  renderKeyboard();
}

function clearRemap() {
  if (!state.remapTarget) return;
  const { layerIdx, keyId } = state.remapTarget;
  delete state.layers[layerIdx].mappings[keyId];
  closeRemapDialog();
  renderKeyboard();
}

function updateCurrentLabel(raw) {
  const el = document.getElementById('remap-current-label');
  if (!raw) {
    el.textContent = '-';
    el.className = 'key-badge';
    return;
  }
  const type = getTypeFromRaw(raw);
  if (type === 'transparent') {
    el.textContent = '透過';
    el.className = 'key-badge mapped';
  } else if (type === 'none') {
    el.textContent = '無効';
    el.className = 'key-badge';
  } else if (type === 'layer') {
    el.textContent = 'MO(' + raw.split(':')[1] + ')';
    el.className = 'key-badge mapped';
  } else if (type === 'modtap') {
    const parts = raw.split(':');
    const tk = KEY_DEF_MAP[parts[1]];
    if (parts[2] === 'layer') {
      el.textContent = (tk ? keyLabel(tk) : parts[1]) + '/MO' + parts[3];
    } else {
      const hk = KEY_DEF_MAP[parts[2]];
      el.textContent = (tk ? keyLabel(tk) : parts[1]) + '/' + (hk ? keyLabel(hk) : parts[2]);
    }
    el.className = 'key-badge mapped';
  } else {
    const mk = KEY_DEF_MAP[raw];
    el.textContent = mk ? keyLabel(mk) : raw;
    el.className = 'key-badge mapped';
  }
}

// ---- JSON 入出力 ----
function exportJSON() {
  const data = {
    version: 1,
    keyboard: state.layout,
    layers: state.layers.map(l => ({
      name: l.name,
      mappings: { ...l.mappings }
    }))
  };
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type:'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'keyremapper-config.json';
  a.click();
  URL.revokeObjectURL(url);
}

function importJSON() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (data.version && data.layers) {
          if (data.keyboard && LAYOUTS[data.keyboard]) {
            state.layout = data.keyboard;
            document.getElementById('kb-layout-select').value = data.keyboard;
          }
          state.layers = data.layers.map(l => ({
            name: l.name || 'Layer',
            mappings: l.mappings || {}
          }));
          state.activeLayer = 0;
          renderLayerList();
          renderKeyboard();
        } else {
          alert('JSONフォーマットが不正です。');
        }
      } catch(err) {
        alert('JSON解析エラー: ' + err.message);
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

// ---- AHK 生成 ----
function generateAHK() {
  let script = '';
  script += `; ============================================================\n`;
  script += `; KeyRemapper - 生成された AutoHotkey スクリプト\n`;
  script += `; 生成日時: ${new Date().toLocaleString()}\n`;
  script += `; キーボード: ${getLayout().name}\n`;
  script += `; ============================================================\n\n`;
  script += `#SingleInstance Force\n`;
  script += `#Persistent\n`;
  script += `#NoEnv\n`;
  script += `#Warn\n`;
  script += `#MaxThreadsPerHotkey, 20\n\n`;
  script += `; === レイヤー状態 ===\n`;
  script += `global CurrentLayer := 0\n`;
  script += `global _MT_anykey := 0\n`;
  script += `global _MO_base := 0\n`;
  script += `global _MO_count := 0\n\n`;

  // ガード変数（KeyWait使用ハンドラ用）
  const guardKeys = new Set();
  state.layers.forEach((layer) => {
    Object.entries(layer.mappings).forEach(([phys, mapping]) => {
      if (mapping.startsWith('layer:') || mapping.startsWith('modtap:'))
        guardKeys.add(phys);
    });
  });
  if (guardKeys.size > 0) {
    script += `; === ガード変数 ===\n`;
    guardKeys.forEach(phys => {
      const safe = phys.replace(/[^a-zA-Z0-9_]/g, '_');
      script += `_busy_${safe} := false\n`;
    });
    script += `\n`;
  }

  // レイヤー定義コメント
  script += `; === レイヤー定義 ===\n`;
  state.layers.forEach((l, i) => { script += `; Layer ${i}: ${l.name}\n`; });
  script += `\n`;

  // AHK セーフなキー名
  function ahkName(keyId) {
    const map = {
      grave:'SC029', minus:'-', equal:'=', lbracket:'[', rbracket:']',
      backslash:'\\', semicolon:'sc027', quote:"'", comma:',', dot:'.', slash:'/',
    };
    const k = KEY_DEF_MAP[keyId];
    if (!k) return keyId;
    if (map[keyId]) return map[keyId];
    return k.ahk;
  }

  // === レイヤーマッピング（#If 内） — $* 統一 ===
  for (let li = 0; li < state.layers.length; li++) {
    const layer = state.layers[li];
    const entries = Object.entries(layer.mappings);
    const moKeys = entries.filter(([_, m]) => m.startsWith('layer:'));
    const modtapMappings = entries.filter(([_, m]) => m.startsWith('modtap:'));
    const keyMappings = entries.filter(([_, mapping]) => {
      return typeof mapping === 'string' && !mapping.startsWith('layer:') && !mapping.startsWith('modtap:') && mapping !== 'transparent' && mapping !== 'none';
    });
    if (moKeys.length === 0 && modtapMappings.length === 0 && keyMappings.length === 0) continue;

    script += `; === Layer ${li}: ${layer.name} ===\n`;
    script += `#If (CurrentLayer = ${li})\n`;

    // MO keys
    moKeys.forEach(([phys, mapping]) => {
      const keyName = ahkName(phys);
      const safePhys = phys.replace(/[^a-zA-Z0-9_]/g, '_');
      const targetLayer = parseInt(mapping.split(':')[1]);
      script += `  $*${keyName}::\n`;
      script += `    global _busy_${safePhys}\n`;
      if (li === 0) {
        script += `    if GetKeyState("Shift") or GetKeyState("Ctrl") or GetKeyState("Alt") or GetKeyState("LWin") or GetKeyState("RWin")\n`;
        script += `    {\n`;
        script += `      Send {Blind}{${keyName}}\n`;
        script += `      return\n`;
        script += `    }\n`;
      }
      script += `    if (_busy_${safePhys})\n`;
      script += `      return\n`;
      script += `    _busy_${safePhys} := true\n`;
      script += `    _MO_count++\n`;
      script += `    if (_MO_count = 1)\n`;
      script += `      _MO_base := CurrentLayer\n`;
      script += `    CurrentLayer := ${targetLayer}\n`;
      script += `    _MT_anykey := 1\n`;
      script += `    KeyWait, ${keyName}\n`;
      script += `    _MO_count--\n`;
      script += `    if (_MO_count = 0)\n`;
      script += `      CurrentLayer := _MO_base\n`;
      script += `  return\n`;
    });

    // ModTap mappings
    modtapMappings.forEach(([phys, mapping]) => {
      const parts = mapping.split(':');
      const physName = ahkName(phys);
      const tapName = ahkName(parts[1]);
      const tapSend = `{${tapName}}`;
      const safePhys = phys.replace(/[^a-zA-Z0-9_]/g, '_');
      script += `  ; ModTap: ${physName} -> tap=${tapName}`;
      if (parts[2] === 'layer') {
        script += `, hold=MO(${parts[3]})\n`;
        script += `  $*${physName}::\n`;
        script += `    global _busy_${safePhys}\n`;
        if (li === 0) {
          script += `    if GetKeyState("Shift") or GetKeyState("Ctrl") or GetKeyState("Alt") or GetKeyState("LWin") or GetKeyState("RWin")\n`;
          script += `    {\n`;
          script += `      Send {Blind}{${physName}}\n`;
          script += `      return\n`;
          script += `    }\n`;
        }
        script += `    if (_busy_${safePhys})\n`;
        script += `      return\n`;
        script += `    _busy_${safePhys} := true\n`;
        script += `    _MT_${safePhys}_held := false\n`;
        script += `    _MT_anykey := 0\n`;
        script += `    _MO_count++\n`;
        script += `    if (_MO_count = 1)\n`;
        script += `      _MO_base := CurrentLayer\n`;
        script += `    CurrentLayer := ${parts[3]}\n`;
        script += `    SetTimer, _MT_${safePhys}_chk, -300\n`;
        script += `    KeyWait, ${physName}\n`;
        script += `    SetTimer, _MT_${safePhys}_chk, Off\n`;
        script += `    _MO_count--\n`;
        script += `    if (_MO_count = 0)\n`;
        script += `      CurrentLayer := _MO_base\n`;
        script += `    if (!_MT_${safePhys}_held && !_MT_anykey) {\n`;
        script += `      SendInput {Blind}${tapSend}\n`;
        script += `    }\n`;
        script += `  return\n`;
        script += `  _MT_${safePhys}_chk:\n`;
        script += `    _MT_${safePhys}_held := true\n`;
        script += `  return\n`;
      } else {
        const holdName = ahkName(parts[2]);
        script += `, hold=${holdName}\n`;
        script += `  $*${physName}::\n`;
        script += `    global _busy_${safePhys}\n`;
        if (li === 0) {
          script += `    if GetKeyState("Shift") or GetKeyState("Ctrl") or GetKeyState("Alt") or GetKeyState("LWin") or GetKeyState("RWin")\n`;
          script += `    {\n`;
          script += `      Send {Blind}{${physName}}\n`;
          script += `      return\n`;
          script += `    }\n`;
        }
        script += `    if (_busy_${safePhys})\n`;
        script += `      return\n`;
        script += `    _busy_${safePhys} := true\n`;
        script += `    _MT_anykey := 1\n`;
        script += `    KeyWait, ${physName}, T0.2\n`;
        script += `    if (ErrorLevel) {\n`;
        script += `      Send {Blind}{${holdName} DownR}\n`;
        script += `      KeyWait, ${physName}\n`;
        script += `      Send {Blind}{${holdName} Up}\n`;
        script += `    } else {\n`;
        script += `      SendInput {Blind}${tapSend}\n`;
        script += `    }\n`;
        script += `  return\n`;
      }
    });

    // Regular mappings
    if (keyMappings.length > 0) {
      const modSet = new Set(['LCtrl','LShift','LAlt','LWin','RCtrl','RShift','RAlt','RWin']);
      keyMappings.forEach(([phys, mapping]) => {
        const physName = ahkName(phys);
        const mapName = ahkName(mapping);
        if (physName !== mapName) {
          if (modSet.has(mapName)) {
            script += `  $*${physName}::\n`;
            script += `    _MT_anykey := 1\n`;
            script += `    Send {Blind}{${mapName} DownR}\n`;
            script += `  return\n`;
            script += `  $*${physName} up::\n`;
            script += `    Send {Blind}{${mapName} Up}\n`;
            script += `  return\n`;
          } else {
            script += `  $*${physName}::\n`;
            script += `    _MT_anykey := 1\n`;
            script += `    SendInput {Blind}{${mapName}}\n`;
            script += `  return\n`;
          }
        }
      });
    }

    script += `#If\n\n`;
  }

  // === $key up:: ガードクリア ===
  if (guardKeys.size > 0) {
    script += `; === ガードクリア（キーUP時） ===\n`;
    guardKeys.forEach(phys => {
      const keyName = ahkName(phys);
      const safe = phys.replace(/[^a-zA-Z0-9_]/g, '_');
      script += `$${keyName} up::\n`;
      script += `  _busy_${safe} := false\n`;
      script += `return\n`;
    });
    script += `\n`;
  }

  script += `\n; === 以上 自動生成 ===\n`;

  // 確認ダイアログを表示
  const overlay = document.getElementById('ahk-overlay');
  const textarea = document.getElementById('ahk-text');
  textarea.value = script;
  textarea.scrollTop = 0;

  const saveBtn = document.getElementById('ahk-save-btn');

  const cleanup = () => {
    overlay.classList.add('hidden');
  };

  // BOM付きUTF-8（AHK v1文字化け対策）
  const prepareBlob = () => {
    const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
    const enc = new TextEncoder().encode(script);
    const combined = new Uint8Array(bom.length + enc.length);
    combined.set(bom); combined.set(enc, bom.length);
    return new Blob([combined], { type:'text/plain;charset=utf-8' });
  };

  const downloadBlob = (blob, name) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
  };

  saveBtn.onclick = () => {
    const blob = prepareBlob();
    downloadBlob(blob, 'keyremapper.ahk');
    cleanup();
  };

  document.getElementById('ahk-close-btn').onclick = cleanup;
  document.getElementById('ahk-cancel-btn').onclick = cleanup;

  overlay.classList.remove('hidden');
}

// ---- 初期化 ----
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('kb-layout-select').addEventListener('change', (e) => {
    state.layout = e.target.value;
    renderKeyboard();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeRemapDialog();
    if (e.key === 'Enter' && !e.target.matches('input, select, textarea')
        && !document.getElementById('remap-dialog').classList.contains('hidden')) {
      applyRemap();
    }
  });

  renderLayerList();
  renderKeyboard();
});
