import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 바이탈 체크는 당분간 console.log로 하자.. GA4 사용법에 대한 감이 아직 안섰다.
// GA4 요놈을 gtag 로 사용해야 될까? firebase 를 써야할까?
// 아예 대놓고 firebase 로 안내하던데.. 바뀐건가?
// Vital 지원하기 위해선 일단 gtag가 유력해 보이는데 일단 두 문서를 읽어보자.
// 확실한건 이제 react-ga 같은건 쓰지 않는게 좋다는것. 신기술 호환성이 너무 안 좋다.
reportWebVitals(console.log)
