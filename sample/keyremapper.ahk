; ============================================================
; KeyRemapper - AutoHotkey v1
; 2026/7/8 12:00:55 | JIS 109（フル）
; ============================================================

#SingleInstance Force
#Persistent
#NoEnv
#MaxThreadsPerHotkey, 20
#Warn

; === レイヤー状態 ===
global CurrentLayer := 0
global _MT_anykey := 0
global _MO_base := 0
global _MO_count := 0

; === ガード変数 ===
_busy_space := false
_busy_f := false
_busy_semicolon := false

; === レイヤー定義 ===
; Layer 0: Default
; Layer 1: Layer 1
; Layer 2: Layer 2

; === Layer 0: Default ===
#If (CurrentLayer = 0)
  ; ModTap: Space -> tap=Space, hold=MO(1)
  $Space::
    global _busy_space
    if (_busy_space)
      return
    _busy_space := true
    _MT_space_held := false
    _MT_anykey := 0
    _MO_count++
    if (_MO_count = 1)
      _MO_base := CurrentLayer
    CurrentLayer := 1
  SetTimer, _MT_space_chk, -300
  KeyWait, Space
  SetTimer, _MT_space_chk, Off
    _MO_count--
    if (_MO_count = 0)
      CurrentLayer := _MO_base
    if (!_MT_space_held && !_MT_anykey) {
      SendInput {Blind}{Space}
    }
  return
  _MT_space_chk:
    _MT_space_held := true
  return
  ; ModTap: f -> tap=f, hold=MO(2)
  $f::
    global _busy_f
    if (_busy_f)
      return
    _busy_f := true
    _MT_f_held := false
    _MT_anykey := 0
    _MO_count++
    if (_MO_count = 1)
      _MO_base := CurrentLayer
    CurrentLayer := 2
  SetTimer, _MT_f_chk, -300
  KeyWait, f
  SetTimer, _MT_f_chk, Off
    _MO_count--
    if (_MO_count = 0)
      CurrentLayer := _MO_base
    if (!_MT_f_held && !_MT_anykey) {
      SendInput {Blind}{f}
    }
  return
  _MT_f_chk:
    _MT_f_held := true
  return
  ; ModTap: sc027 -> tap=sc027, hold=MO(2)
  $sc027::
    global _busy_semicolon
    if (_busy_semicolon)
      return
    _busy_semicolon := true
    _MT_semicolon_held := false
    _MT_anykey := 0
    _MO_count++
    if (_MO_count = 1)
      _MO_base := CurrentLayer
    CurrentLayer := 2
  SetTimer, _MT_semicolon_chk, -300
  KeyWait, sc027
  SetTimer, _MT_semicolon_chk, Off
    _MO_count--
    if (_MO_count = 0)
      CurrentLayer := _MO_base
    if (!_MT_semicolon_held && !_MT_anykey) {
      SendInput {Blind}{sc027}
    }
  return
  _MT_semicolon_chk:
    _MT_semicolon_held := true
  return
#If

; === Layer 1: Layer 1 ===
#If (CurrentLayer = 1)
  $0::
    _MT_anykey := 1
  SendInput {Blind}{F10}
  return
  $1::
    _MT_anykey := 1
  SendInput {Blind}{F1}
  return
  $2::
    _MT_anykey := 1
  SendInput {Blind}{F2}
  return
  $3::
    _MT_anykey := 1
  SendInput {Blind}{F3}
  return
  $4::
    _MT_anykey := 1
  SendInput {Blind}{F4}
  return
  $5::
    _MT_anykey := 1
  SendInput {Blind}{F5}
  return
  $6::
    _MT_anykey := 1
  SendInput {Blind}{F6}
  return
  $7::
    _MT_anykey := 1
  SendInput {Blind}{F7}
  return
  $8::
    _MT_anykey := 1
  SendInput {Blind}{F8}
  return
  $9::
    _MT_anykey := 1
  SendInput {Blind}{F9}
  return
  $i::
    _MT_anykey := 1
  SendInput {Blind}{Up}
  return
  $j::
    _MT_anykey := 1
  SendInput {Blind}{Left}
  return
  $k::
    _MT_anykey := 1
  SendInput {Blind}{Down}
  return
  $l::
    _MT_anykey := 1
  SendInput {Blind}{Right}
  return
  $p::
    _MT_anykey := 1
  SendInput {Blind}{Backspace}
  return
  $'::
    _MT_anykey := 1
  SendInput {Blind}{]}
  return
  $u::
    _MT_anykey := 1
  SendInput {Blind}{Home}
  return
  $o::
    _MT_anykey := 1
  SendInput {Blind}{End}
  return
  $q::
    _MT_anykey := 1
  SendInput {Blind}{1}
  return
  $w::
    _MT_anykey := 1
  SendInput {Blind}{2}
  return
  $e::
    _MT_anykey := 1
  SendInput {Blind}{3}
  return
  $r::
    _MT_anykey := 1
  SendInput {Blind}{4}
  return
  $t::
    _MT_anykey := 1
  SendInput {Blind}{5}
  return
  $n::
    _MT_anykey := 1
  SendInput {Blind}{SC07B}
  return
  $m::
    _MT_anykey := 1
  SendInput {Blind}{SC079}
  return
  $/::
    _MT_anykey := 1
  SendInput {Blind}{SC073}
  return
  $a::
    _MT_anykey := 1
  SendInput {Blind}{6}
  return
  $s::
    _MT_anykey := 1
  SendInput {Blind}{7}
  return
  $d::
    _MT_anykey := 1
  SendInput {Blind}{8}
  return
  $f::
    _MT_anykey := 1
  SendInput {Blind}{9}
  return
  $g::
    _MT_anykey := 1
  SendInput {Blind}{0}
  return
  $sc00d::
    _MT_anykey := 1
  SendInput {Blind}{F12}
  return
  $-::
    _MT_anykey := 1
  SendInput {Blind}{F11}
  return
  $h::
    _MT_anykey := 1
  SendInput {Blind}{Delete}
  return
  $SC01A::
    _MT_anykey := 1
  SendInput {Blind}{[}
  return
  $[::
    _MT_anykey := 1
  SendInput {Blind}{Volume_Up}
  return
  $]::
    _MT_anykey := 1
  SendInput {Blind}{Volume_Down}
  return
  $z::
    _MT_anykey := 1
  SendInput {Blind}{-}
  return
  $x::
    _MT_anykey := 1
  SendInput {Blind}{sc00d}
  return
  $c::
    _MT_anykey := 1
  SendInput {Blind}{\}
  return
  $sc027::
    _MT_anykey := 1
  SendInput {Blind}{Enter}
  return
  $,::
    _MT_anykey := 1
  SendInput {Blind}{<}
  return
  $.::
    _MT_anykey := 1
  SendInput {Blind}{>}
  return
#If

; === Layer 2: Layer 2 ===
#If (CurrentLayer = 2)
  $Space::
    _MT_anykey := 1
  SendInput {Blind}{Numpad0}
  return
  $j::
    _MT_anykey := 1
  SendInput {Blind}{Numpad4}
  return
  $m::
    _MT_anykey := 1
  SendInput {Blind}{Numpad1}
  return
  $,::
    _MT_anykey := 1
  SendInput {Blind}{Numpad2}
  return
  $.::
    _MT_anykey := 1
  SendInput {Blind}{Numpad3}
  return
  $k::
    _MT_anykey := 1
  SendInput {Blind}{Numpad5}
  return
  $l::
    _MT_anykey := 1
  SendInput {Blind}{Numpad6}
  return
  $u::
    _MT_anykey := 1
  SendInput {Blind}{Numpad7}
  return
  $i::
    _MT_anykey := 1
  SendInput {Blind}{Numpad8}
  return
  $o::
    _MT_anykey := 1
  SendInput {Blind}{Numpad9}
  return
  $p::
    _MT_anykey := 1
  SendInput {Blind}{Backspace}
  return
  $sc027::
    _MT_anykey := 1
  SendInput {Blind}{NumpadEnter}
  return
#If

; === ガードクリア（キーUP時） ===
  $Space up::
    _busy_space := false
  return
  $f up::
    _busy_f := false
  return
  $sc027 up::
    _busy_semicolon := false
  return


; === 以上 自動生成 ===
