##vue2+webpack+router项目构建（详细步骤）
---

## <font color="blue"> 基础篇-基本架构 </font>

### 创建项目
1. 创建项目文件夹：如，vue2-webpack
2. 初始化项目，生成package.json文件：
	`npm init`

### 安装项目依赖（不指定版本的话，默认安装最新版）
3. 安装vue
	`npm install --save vue`
4. 安装打包工具webpack，webpack-dev-server(是一个小型的node.js Express服务器,它使用webpack-dev-middleware中间件来为通过webpack打包生成的资源文件提供Web服务)
	`npm install --save-dev webpack webpack-dev-server`
5. 安装babel(将es6的语法编译成浏览器认识的语法es5)
	`npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-plugin-transform-runtime babel-preset-stage-0`
6. 安装vue组件处理器vue-loader，vue-template-compiler（解析.vue后缀文件）
	`npm install --save-dev vue-loader vue-template-compiler`
7. 安装css样式处理器css-loader style-loader（解析css）
	`npm install --save-dev css-loader style-loader`
8. 安装文件、图片处理器url-loader file-loader
	`npm install --save-dev url-loader file-loader`
9. 安装sass样式预处理器（选择你想用的样式预处理器，安装对应的sass/less/...等等）
	`npm install --save-dev sass-loader node-sass`
10. 安装路由(按项目需要，是否选择安装。多页/单页应用)
	`npm install --save-dev vue-router`


###其他安装依赖
注：因之后在webpack配置过程中，考虑到其他方面，样式抽离、webpack.congfig合并、解决跨平台设置NODE_ENV的问题、按需加载等等添加了相关的依赖包。如：
1. `cross-env`: 解决跨平台设置NODE_ENV的问题
2. `extract-text-webpack-plugin`: 样式抽离
3. `html-webpack-plugin`: 生成html文件
4. `webpack-merge`: 配置分离，不同的环境配置不同的内容
5. `clean-webpack-plugin`: 清除生成的release文件夹
6. `assets-webpack-plugin`: 缓存，不重复打包第三方库


### 项目结构
1. build文件夹：webpack配置的相关内容
2. node_modules: 安装的依赖包
3. release：生成的相关文件存放位置
4. src：主文件件，assets(存放相关的图片、样式、字体等)、components(组件存放位置)、views(页面存放位置)、app.vue(主页面)、index.js(入口文件)、routes(配置相关路由的地方(按需加载))
5. .babelrc：es6转化es5
6. .gitignore：提交git时忽视的文件
7. index.html：页面模板
8. package.json: 管理安装包及项目配置相关信息
9. README.md: 说明

### 启动项目准备：
1. 在启动之前，需要安装相关依赖包，如果之前有相关包没有安装的话，可以直接输入以下命令
	`npm i` 或 `npm install`
2. 启动之前，需要先打包第三方文件库，即生成dll文件夹。
	`npm run dll`

### 启动
1. 启动命令：
	`npm run dev`
2. 访问以下链接：
	[http://localhost:8080/release/index.html](http://localhost:8080/release/index.html)

### 打包
	`npm run build`


## <font color="blue"> 提升篇-添加eslint代码巡检 </font>

添加代码巡检（即代码校验，eslint、jslint、jshint等）有两种方式，一种是写shell脚本，一种是安装pre-commit库。
本项目中应该的是后者。

### 安装流程（本次使用的是eslint校验）
1. 全局安装eslint，并且安装其他巡检包
	`npm i eslint -g`
	`npm i eslint eslint-plugin-html babel-eslint --save-dev`
2. eslint初始化，按项目或是编写风格回答相关问题，以完成初始化
	`eslint --init`
3. 编辑.eslintrc.js文件，定义相关校验规则
4. 之后选择巡检方式
#### 安装pre-commit库来添加代码巡检
4.1. 安装pre-commit
	`npm i pre-commit --save-dev`
4.2. 在package.json文件中的scripts下增加相关命令，如：
	`"lint": "eslint --ext .vue,.js ./src",`
	`"fix": "eslint --fix --ext .vue,.js ./src",`
4.3 在package.json文件中添加pre-commit参数，数组值为scripts中要执行的命令。
	`"pre-commit": ["precommit-msg", "lint"],`

#### 通过shell脚本的方式来添加代码巡检
4.1 在vue2-webpack/.git/hooks下新建pre-commit钩子。
4.2 编辑pre-commit文件，添加shell脚本。

    #!/bin/sh

    files=$(git diff --cached --name-only --diff-filter=ACM | grep "\.js$")

    if [ "$files" = "" ]; then
        exit 0
    fi

    pass=true

    echo "pre-commit checks..."

    for file in ${files}; do
        flag=$file;
        while read line
        do
            flag=`echo "$flag" | grep -v $line`
            flag=$flag
        done < '.eslintignore'

        if [ "$flag" != "" ];then
            echo "$flag"
            result=$(eslint ${file})
            if [ "$result" != "" ]; then
                echo "\033[31mESLint Failed: ${file}\033[0m"
                echo "$result"
                pass=false
            else
                echo "\033[32mESLint OK: ${file}\033[0m"
            fi
        fi

    done

    echo "\nJavaScript validation complete\n"
    if ! $pass; then
        echo "\033[41mCHECKED FAILED:\033[0m Your commit contains files that should pass ESLint but do not. Please fix the ESLint errors and try again.\n"
        exit 1
    else
        echo "\033[42mCHECKED SUCCEEDED\033[0m\n"
        exit 0

    fi
