//在这个位置配置webpack的编译过程

//通过输出对象告诉webpack的编译过程
//webpack也是基于node.js的插件，所以呢，需要使用common.js规范

//向外暴露webpack的配置对象
module.exports = {
	//入口文件
	entry: './js/style.js',
	//输出文件
	output: {
		path: __dirname, //__dirname是nodejs的全局变量,指的是当前路径
		filename: 'js/app.js'
	}
}

