; ============================================================
; KeyRemapper - AutoHotkey v2
; 2026/7/10 10:33:51 | JIS 109（フル）
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
_busy_f := false
_busy_j := false

; === レイヤー定義 ===
; Layer 0: Default
; Layer 1: Layer 1
; Layer 2: Layer 2
; Layer 3: Layer 3

; === Layer 0: Default ===
#HotIf CurrentLayer == 0
  ; ModTap: Space -> tap=Space, hold=MO(1)
  ; [β] 300ms polling + _MT_anykey
  $*Space:: {
    global _busy_space, _MT_space_held, _MT_anykey, _MO_count, _MO_base, CurrentLayer
    global _busy_space
    if (_busy_space)
      return
    _busy_space := true
    _MT_space_held := false
    _MT_anykey := 0
    start := A_TickCount
    Loop {
      if !GetKeyState("Space","P") {
        if (_MT_anykey) {
    _MT_space_held := true
    _MO_count++
    if (_MO_count == 1)
      _MO_base := CurrentLayer
    CurrentLayer := 1
  KeyWait("Space")
    _MO_count--
    if (_MO_count == 0)
      CurrentLayer := _MO_base
    _busy_space := false
          return
        }
  SendInput("{Blind}{Space}")
        _busy_space := false
        return
      }
      if (_MT_anykey) {
    _MT_space_held := true
    _MO_count++
    if (_MO_count == 1)
      _MO_base := CurrentLayer
    CurrentLayer := 1
  KeyWait("Space")
    _MO_count--
    if (_MO_count == 0)
      CurrentLayer := _MO_base
    _busy_space := false
        return
      }
      if (A_TickCount - start > 300)
        break
      Sleep(1)
    }
    _MT_space_held := true
    _MO_count++
    if (_MO_count == 1)
      _MO_base := CurrentLayer
    CurrentLayer := 1
  KeyWait("Space")
    _MO_count--
    if (_MO_count == 0)
      CurrentLayer := _MO_base
    _busy_space := false
}
  ; ModTap: f -> tap=f, hold=MO(2)
  ; [β] 300ms polling + _MT_anykey
  $*f:: {
    global _busy_f, _MT_f_held, _MT_anykey, _MO_count, _MO_base, CurrentLayer
    global _busy_f
    if (_busy_f)
      return
    _busy_f := true
    _MT_f_held := false
    _MT_anykey := 0
    start := A_TickCount
    Loop {
      if !GetKeyState("f","P") {
        if (_MT_anykey) {
    _MT_f_held := true
    _MO_count++
    if (_MO_count == 1)
      _MO_base := CurrentLayer
    CurrentLayer := 2
  KeyWait("f")
    _MO_count--
    if (_MO_count == 0)
      CurrentLayer := _MO_base
    _busy_f := false
          return
        }
  SendInput("{Blind}{f}")
        _busy_f := false
        return
      }
      if (_MT_anykey) {
    _MT_f_held := true
    _MO_count++
    if (_MO_count == 1)
      _MO_base := CurrentLayer
    CurrentLayer := 2
  KeyWait("f")
    _MO_count--
    if (_MO_count == 0)
      CurrentLayer := _MO_base
    _busy_f := false
        return
      }
      if (A_TickCount - start > 300)
        break
      Sleep(1)
    }
    _MT_f_held := true
    _MO_count++
    if (_MO_count == 1)
      _MO_base := CurrentLayer
    CurrentLayer := 2
  KeyWait("f")
    _MO_count--
    if (_MO_count == 0)
      CurrentLayer := _MO_base
    _busy_f := false
}
  ; ModTap: j -> tap=j, hold=MO(3)
  ; [β] 300ms polling + _MT_anykey
  $*j:: {
    global _busy_j, _MT_j_held, _MT_anykey, _MO_count, _MO_base, CurrentLayer
    global _busy_j
    if (_busy_j)
      return
    _busy_j := true
    _MT_j_held := false
    _MT_anykey := 0
    start := A_TickCount
    Loop {
      if !GetKeyState("j","P") {
        if (_MT_anykey) {
    _MT_j_held := true
    _MO_count++
    if (_MO_count == 1)
      _MO_base := CurrentLayer
    CurrentLayer := 3
  KeyWait("j")
    _MO_count--
    if (_MO_count == 0)
      CurrentLayer := _MO_base
    _busy_j := false
          return
        }
  SendInput("{Blind}{j}")
        _busy_j := false
        return
      }
      if (_MT_anykey) {
    _MT_j_held := true
    _MO_count++
    if (_MO_count == 1)
      _MO_base := CurrentLayer
    CurrentLayer := 3
  KeyWait("j")
    _MO_count--
    if (_MO_count == 0)
      CurrentLayer := _MO_base
    _busy_j := false
        return
      }
      if (A_TickCount - start > 300)
        break
      Sleep(1)
    }
    _MT_j_held := true
    _MO_count++
    if (_MO_count == 1)
      _MO_base := CurrentLayer
    CurrentLayer := 3
  KeyWait("j")
    _MO_count--
    if (_MO_count == 0)
      CurrentLayer := _MO_base
    _busy_j := false
}
#HotIf

; === Layer 1: Layer 1 ===
#HotIf CurrentLayer == 1
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

; === ガードクリア（キーUP時） ===
  $*Space up:: {
    global _busy_space
    _busy_space := false
}
  $*f up:: {
    global _busy_f
    _busy_f := false
}
  $*j up:: {
    global _busy_j
    _busy_j := false
}


; === 以上 自動生成 ===
