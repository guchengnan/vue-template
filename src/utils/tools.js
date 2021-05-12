const Tools = {
	// 支持过期时间的本地存储
	webStorage: {
		getStorage(key) {
			/*
			 * key: 本地存储的键名
			 * */
			const content = localStorage.getItem(key)
			if (!content) return false
			const {
				value,
				expire
			} = JSON.parse(content)
			if (new Date().getTime() - expire > 0) { // 数据已过期
				return false
			}
			return value
		},
		setStorage: function(key, value, expire) {
			/*
			 * key: 存储键名
			 * value: 存储内容
			 * expire: 过期时间,如2020-10-10 00:00:00
			 * */
			const content = {
				value,
				expire: new Date(expire).getTime()
			}
			localStorage.setItem(key, JSON.stringify(content))
		},
		clearStorage: function(key) {
			/*
			 * key: true表示清除全部本地存储,具体键名表示清除具体的某一项
			 * */
			if (typeof(key) === 'boolean') {
				localStorage.clear()
				return
			}
			localStorage.removeItem(key)
		}
	},
	// 校检拓展名
	checkFileType(fileType, fileTypes = []) {
		/*
		 * fileType: 校检的文件拓展名
		 * fileTypes: 合法的文件拓展名
		 * */
		const fileTypesBYO = ['doc', 'docs', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'pdf']
		const fileTypesGroup = fileTypesBYO.concat(fileTypes)
		return fileTypesGroup.some(v => {
			return v.toLocaleLowerCase() === fileType.toLocaleLowerCase()
		})
	},
	// 视口调整开启该模式单位为px
	resizeViewport(targetWidth) {
		const realWidth = window.screen.width
		const scale = realWidth / targetWidth
		const meta = document.createElement('meta')
		meta.name = 'viewport'
		meta.content =
			`width=device-width,initial-scale=${scale},minimum-scale=${scale},maximum-scale=${scale},user-scalable=no`
		document.getElementsByTagName('head')[0].appendChild(meta)
	},
	// 格式化日期
	formatDate(fmt, date = new Date()) {
		let res;
		const obj = {
			"Y+": date.getFullYear().toString(),
			"m+": (date.getMonth() + 1).toString(),
			"d+": date.getDate().toString(),
			"H+": date.getHours().toString(),
			"M+": date.getMinutes().toString(),
			"S+": date.getSeconds().toString()
		};
		for (let k in obj) {
			res = new RegExp("(" + k + ")").exec(fmt);
			if (res) {
				fmt = fmt.replace(res[1], (res[1].length == 1) ? (obj[k]) : (obj[k].padStart(res[1].length, "0")))
			};
		};
		return fmt;
	}
}
export default Tools
