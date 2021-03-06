import * as react from 'react'
import * as reactDom from 'react-dom'

import ReactJSX = JSX // our reference to the JSX namespace

export type ReactComponentChild = react.ReactNode
  | object
  | string
  | number
  | boolean
  | null
  | undefined

declare global {
  namespace FullCalendarVDom {
    export import Ref = react.Ref
    export import RefObject = react.RefObject
    export import ComponentType = react.ComponentType
    export import VNode = react.ReactNode
    export import Context = react.Context
    export import Component = react.Component
    export type ComponentChild = ReactComponentChild
    export type ComponentChildren = ReactComponentChild | ReactComponentChild[]
    export import createElement = react.createElement
    export import render = reactDom.render
    export import createRef = react.createRef
    export import Fragment = react.Fragment
    export import createContext = react.createContext
    export type VUIEvent = react.UIEvent
    export function flushToDom(): void
  }
  namespace createElement {
    export import JSX = ReactJSX // preact exports the h.JSX namespace whereas react has it global. use preact's technique
  }
}

window.FullCalendarVDom = {
  Component: react.Component,
  createElement: react.createElement,
  render: reactDom.render,
  createRef: react.createRef,
  Fragment: react.Fragment,
  createContext: react.createContext,
  flushToDom
}

export function flushToDom() {
  // always sync from top-level
}
