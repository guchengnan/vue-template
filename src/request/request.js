// 引入axios
import axios from "axios";

// 这里未使用default导出，是为了以后的扩展，便于导出多个方法
export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    // 这里定义每次请求的公共数据，例如全局请求头，api根地址，过期时间等
    // 具体参数可参考axios的官方文档
    baseURL: "http://localhost:3000",
    timeout: 5000,
  });

  // 拦截请求，如果获取某个请求需要携带一些额外数据
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      console.log(err);
    }
  );

  // 拦截响应
  instance.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );

  // 发送请求
  return instance(config);
}
