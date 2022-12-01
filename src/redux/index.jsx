//1. 导入createStore方法
import { createStore } from "redux";
//2. 创建一个reducer纯函数的方法, state初始化数据， actions修改数据行为
const reducer = function (state, actions) {
    //定义初始化的数据
    if (!state) {
        state = {
            count: 10,
        }
    }
    //定义actions的逻辑代码区域，处理逻辑的信息
    // switch (actions.type) {
    //     //调用执行+1的逻辑
    //     case "PLUS":
    //         return {
    //             ...state,
    //             count: state.count + actions.payload,
    //         }
    //         break;
    //     case "JIAN":
    //         return {
    //             ...state,
    //             count:state.count-actions.payload
    //         }
    //         break;
    //     default:
    //         return {
    //             ...state
    //         }
    // }
}
//创建store的对象
const store = createStore(reducer);
//抛出store的对象值
export default store