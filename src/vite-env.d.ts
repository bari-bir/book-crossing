/// <reference types="vite/client" />

interface Window {
  ReactNativeWebView: any;
}

interface IResponse {
  result_code: number, 
  result_msg: string, 
}

interface KonvaMouseEvent extends React.MouseEvent<HTMLElement> {
  target: KonvaTextEventTarget
}