import { useRoutes } from 'react-router-dom';
import "../src/style/reset.less";
import route from './router/IndexRouter'
import './App.css'

function App(){
  const element = useRoutes(route)

  return <div>
     {/* 引用路由表 */}
     {element}
  </div>
}
export default App