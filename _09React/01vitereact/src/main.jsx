import { createElement } from "react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App | arka</h1>
    </div>
  )
}
const anotherUser = "chai aur react";

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const reactElement = createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
  anotherUser
);

createRoot(document.getElementById('root')).render(
  anotherElement
)
