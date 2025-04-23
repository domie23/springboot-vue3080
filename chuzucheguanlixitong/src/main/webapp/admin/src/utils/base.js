const base = {
    get() {
        return {
            url : "http://localhost:8080/chuzucheguanlixitong/",
            name: "chuzucheguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/chuzucheguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "出租车管理系统"
        } 
    }
}
export default base
