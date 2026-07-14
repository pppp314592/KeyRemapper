; ============================================================
; KeyRemapper - AutoHotkey v2
; 2026/7/14 20:46:53 | JIS 109（フル）
; ============================================================

#SingleInstance Force
#Warn

; === レイヤー状態 ===
CurrentLayer := 0
_MT_anykey := 0
_MO_base := 0
_MO_count := 0

; === ガード変数 ===
_busy_space := false
_busy_caret := false
_busy_q := false
_busy_v := false

; === レイヤー定義 ===
; Layer 0: Default
; Layer 1: Layer 1
; Layer 2: Layer 2
; Layer 3: Layer 3

; === Layer 0: Default ===
#HotIf CurrentLayer == 0
  ; ModTap: Space -> tap=Space, hold=MO(1)
  ; Critical〜30msブロック
  $*Space:: {
    global _busy_space, _MT_space_held, _MT_anykey, _MO_count, _MO_base, CurrentLayer
    global _busy_space
    if (_busy_space)
      return
    _busy_space := true
    _MT_space_held := false
    _MT_anykey := 0
    _MO_count++
    if (_MO_count == 1)
      _MO_base := CurrentLayer
    _prev := CurrentLayer
    CurrentLayer := 1
    Critical
    Sleep(1)
    Sleep(1)
    Critical 0
  SetTimer(_MT_space_chk,-300)
  KeyWait("Space")
  SetTimer(_MT_space_chk,0)
    CurrentLayer := _prev
    _MO_count--
    if (!_MT_space_held && !_MT_anykey) {
      SendInput("{Blind}{Space}")
    }
    _busy_space := false
}
  _MT_space_chk() {
    global _MT_space_held
    _MT_space_held := true
  }
  ; ModTap: sc00d -> tap=sc00d, hold=MO(3)
  ; Critical〜30msブロック
  $*sc00d:: {
    global _busy_caret, _MT_caret_held, _MT_anykey, _MO_count, _MO_base, CurrentLayer
    global _busy_caret
    if (_busy_caret)
      return
    _busy_caret := true
    _MT_caret_held := false
    _MT_anykey := 0
    _MO_count++
    if (_MO_count == 1)
      _MO_base := CurrentLayer
    _prev := CurrentLayer
    CurrentLayer := 3
    Critical
    Sleep(1)
    Sleep(1)
    Critical 0
  SetTimer(_MT_caret_chk,-300)
  KeyWait("sc00d")
  SetTimer(_MT_caret_chk,0)
    CurrentLayer := _prev
    _MO_count--
    if (!_MT_caret_held && !_MT_anykey) {
      SendInput("{Blind}{sc00d}")
    }
    _busy_caret := false
}
  _MT_caret_chk() {
    global _MT_caret_held
    _MT_caret_held := true
  }
  ; ModTap: q -> tap=q, hold=MO(2)
  ; Critical〜30msブロック
  $*q:: {
    global _busy_q, _MT_q_held, _MT_anykey, _MO_count, _MO_base, CurrentLayer
    global _busy_q
    if (_busy_q)
      return
    _busy_q := true
    _MT_q_held := false
    _MT_anykey := 0
    _MO_count++
    if (_MO_count == 1)
      _MO_base := CurrentLayer
    _prev := CurrentLayer
    CurrentLayer := 2
    Critical
    Sleep(1)
    Sleep(1)
    Critical 0
  SetTimer(_MT_q_chk,-300)
  KeyWait("q")
  SetTimer(_MT_q_chk,0)
    CurrentLayer := _prev
    _MO_count--
    if (!_MT_q_held && !_MT_anykey) {
      SendInput("{Blind}{q}")
    }
    _busy_q := false
}
  _MT_q_chk() {
    global _MT_q_held
    _MT_q_held := true
  }
#HotIf

; === Layer 1: Layer 1 ===
#HotIf CurrentLayer == 1
  $*v:: {
    global _busy_v, _MT_anykey, _MO_count, _MO_base, CurrentLayer
    global _busy_v
    if (_busy_v)
      return
    _busy_v := true
    _MO_count++
    if (_MO_count == 1)
      _MO_base := CurrentLayer
    _prev := CurrentLayer
    CurrentLayer := 2
    _MT_anykey := 1
  KeyWait("v")
    CurrentLayer := _prev
    _MO_count--
    _busy_v := false
}
  $*0:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F10}")
}
  $*1:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F1}")
}
  $*2:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F2}")
}
  $*3:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F3}")
}
  $*4:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F4}")
}
  $*5:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F5}")
}
  $*6:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F6}")
}
  $*7:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F7}")
}
  $*8:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F8}")
}
  $*9:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F9}")
}
  $*i:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Up}")
}
  $*j:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Left}")
}
  $*k:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Down}")
}
  $*l:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Right}")
}
  $*p:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Backspace}")
}
  $*SC028:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}]")
}
  $*u:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Home}")
}
  $*o:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{End}")
}
  $*q:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}1")
}
  $*w:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}2")
}
  $*e:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}3")
}
  $*r:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}4")
}
  $*t:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}5")
}
  $*n:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{SC07B}")
}
  $*m:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{SC079}")
}
  $*/:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{SC073}")
}
  $*a:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}6")
}
  $*s:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}7")
}
  $*d:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}8")
}
  $*f:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}9")
}
  $*g:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}0")
}
  $*sc00d:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F12}")
}
  $*-:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F11}")
}
  $*h:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Delete}")
}
  $*y:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Escape}")
}
  $*SC01A:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}[")
}
  $*[:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Volume_Down}")
}
  $*]:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Volume_Up}")
}
  $*z:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}-")
}
  $*x:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{sc00d}")
}
  $*c:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}\")
}
  $*sc027:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Enter}")
}
  $*,:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}<")
}
  $*.:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}>")
}
#HotIf

; === Layer 2: Layer 2 ===
#HotIf CurrentLayer == 2
  $*Space:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Numpad0}")
}
  $*j:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Numpad4}")
}
  $*m:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Numpad1}")
}
  $*,:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Numpad2}")
}
  $*.:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Numpad3}")
}
  $*k:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Numpad5}")
}
  $*l:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Numpad6}")
}
  $*u:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Numpad7}")
}
  $*i:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Numpad8}")
}
  $*o:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Numpad9}")
}
  $*p:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Backspace}")
}
  $*n:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{Numpad0}")
}
  $*sc027:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{NumpadEnter}")
}
#HotIf

; === Layer 3: Layer 3 ===
#HotIf CurrentLayer == 3
  $*q:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F1}")
}
  $*w:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F2}")
}
  $*e:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F3}")
}
  $*r:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F4}")
}
  $*t:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F5}")
}
  $*a:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F6}")
}
  $*s:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F7}")
}
  $*d:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F8}")
}
  $*f:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F9}")
}
  $*g:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F10}")
}
  $*z:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F11}")
}
  $*x:: {
    global _MT_anykey
    _MT_anykey := 1
  SendInput("{Blind}{F12}")
}
#HotIf

; === キーリピート抑制 ===
#HotIf _busy_space
  $*Space:: {
}
#HotIf
#HotIf _busy_caret
  $*sc00d:: {
}
#HotIf
#HotIf _busy_q
  $*q:: {
}
#HotIf
#HotIf _busy_v
  $*v:: {
}
#HotIf


; === 以上 自動生成 ===
