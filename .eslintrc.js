module.exports = {
    "extends": "eslint:recommended",
    "parser":"babel-eslint",
    "parserOptions":{
        "sourceType":"module",
        "ecmaFeatures":{
            "jsx":true
        }
    },
    "env":{
        "es6":true,
        "browser": true,
        "commonjs":true,
        "node":true
    },
    "globals":{
        "store":false,
        "Vue":true,
        "Vuex":true
    },
    "plugins":['html'],
    "rules":{
        "semi": [2, "always"], // 语句强制分号结尾
        "quotes": [2, "single"], //建议使用单引号
        "no-inner-declarations": [0, "both"], //不建议在{}代码块内部声明变量或函数
        "no-extra-boolean-cast": 0, // 多余的感叹号转布尔型
        "no-extra-semi": 2, // 多余的分号
        // "no-extra-parens": 2, // 多余的括号
        "no-empty": 0, // 空代码块
        "no-use-before-define": [2, "nofunc"], // 使用前未定义
        // "complexity": [2, 20], // 圈复杂度大于20 警告
        "space-before-blocks": [0, "always"], // 不以新行开始的块{前面要有2空格
        "space-before-function-paren": [0, "always"], // 函数定义时括号前面有2空格
        "spaced-comment": 0, // 注释风格 2空格什么的
        "space-infix-ops": 2, // 中缀操作符周围 有2空格
        "space-in-parens": [0, "never"], // 小括号里面要不要有空格
        "radix": 0, // parseInt必须指定第二个参数
        //"operator-linebreak": [2, "before"], // 换行时运算符在行尾还是行首
        // "one-var-declaration-per-line": 2,
        "max-len": [0, 200, 4], // 字符串最大长度
        "key-spacing": [2, {
            "beforeColon": false,
            "afterColon": true
        }], // 对象字面量中冒号的前后空格
        "indent": [0, 4], // 缩进风格
        "no-multiple-empty-lines": [1, {
            "max": 2
        }], // 空行最多不能超过2行
        "no-multi-str": 2, // 字符串不能用\换行
        "no-mixed-spaces-and-tabs": [2, false], // 禁止混用tab和空格
        "no-console": 2, // 禁止使用console
        "no-const-assign": 2, // 禁止修改const声明的变量

        //常见错误
        "comma-dangle": [2, "never"], // 定义数组或对象最后多余的逗号
        "no-debugger": 2, // debugger 调试代码未删除
        "no-constant-condition": 2, // 常量作为条件
        "no-dupe-args": 2, // 参数重复
        "no-dupe-keys": 2, // 对象属性重复
        "no-duplicate-case": 2, // case重复
        "no-empty-character-class": 2, // 正则无法匹配任何值
        "no-invalid-regexp": 2, // 无效的正则
        "no-func-assign": 2, // 函数被赋值
        "valid-typeof": 2, // 无效的类型判断
        "no-unreachable": 2, // 不可能执行到的代码
        "no-unexpected-multiline": 2, // 行尾缺少分号可能导致一些意外情况
        "no-sparse-arrays": 2, // 数组中多出逗号
        "no-shadow-restricted-names": 2, // 关键词与命名冲突
        "no-undef": 0, // 变量未定义
        "no-unused-vars": 0, // 变量定义后未使用 jsx 处理不了……
        "no-cond-assign": 2, // 条件语句中禁止赋值操作
        "no-native-reassign": 2, // 禁止覆盖原生对象

        //代码风格优化
        "no-else-return": 0, // 在else代码块中return，else是多余的
        "no-multi-spaces": 2, // 不允许多个空格
        "block-scoped-var": 0, // 变量定义后未使用
        "consistent-return": 2, // 函数返回值可能是不同类型
        "accessor-pairs": 2, // object gettertter方法需要成对出现
        "dot-location": [2, "property"], // 换行调用对象方法  点操作符应写在行首
        "no-lone-blocks": 2, // 多余的{}嵌套
        "no-labels": 2, // 无用的标记
        "no-extend-native": 2, // 禁止扩展原生对象
        "no-floating-decimal": 2, // 浮点型需要写全 禁止.2 或 2.写法
        "no-loop-func": 2, // 禁止在循环体中定义函数
        "no-new-func": 2, // 禁止new Function(...) 写法
        "no-self-compare": 2, // 不允与自己比较作为条件
        "no-sequences": 2, // 禁止可能导致结果不明确的逗号操作符
        "no-throw-literal": 2, // 禁止抛出一个直接量 应是Error对象
        "no-return-assign": [2, "always"], // 不允return时有赋值操作
        "no-redeclare": [0, {
            "builtinGlobals": true
        }], // 不允许重复声明
        "no-unused-expressions": [0, {
            "allowShortCircuit": true,
            "allowTernary": true
        }], // 未使用的表达式
        "no-useless-call": 2, // 无意义的函数call或apply
        "no-useless-concat": 2, // 无意义的string concat
        "no-void": 2, // 禁用void
        "no-with": 2, // 禁用with
        "no-warning-comments": [2, {
            "terms": ["fixme", "any other term"],
            "location": "anywhere"
        }], // 标记未写注释
        "curly": [2, "all"], // if、else、while、for代码块用{}包围
    }
};