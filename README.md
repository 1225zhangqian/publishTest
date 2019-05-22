# publishTest


🎉 从0开始搭建react项目，完成组件封装，在npm上发布组件库
  ```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npm run sass && babel src -d lib",
    "start": "webpack-dev-server --open",
    "sass": "node-sass src/style/index.scss lib/style/index.scss"
  }
   ```
   此处执行npm run build 执行了两个命令
   用babel打包js ，用sass打包scss
   打包后的文件没有压缩
