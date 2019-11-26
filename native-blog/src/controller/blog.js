const getList = (author, keyword) => {
    // 先返回假数据 格式是正确的
    return [
        {
            id: 1,
            title: '标题1',
            content: '内容1',
            createTime: 1574755912966,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题2',
            content: '内容2',
            createTime: 1574755962139,
            author: 'lisi'
        }
    ]
}

const getDetail = (id) => {
    return {
        id: 1,
        title: '标题1',
        content: '内容1',
        createTime: 1574755912966,
        author: 'zhangsan'
    }
}

const newBlog = (blogData = {}) => {
    console.log('newBlog blogData: ', blogData)
    return {
        id: 3,
        title: '标题3',
        content: '内容3',
        createTime: 1574755912966,
        author: '小淘气'
    }
}

const updateBlog = (id, blogData = {}) => {
    console.log('updateBlog blogData: ', id, blogData)
    return true
}
const delBlog = (id = {}) => {
    console.log('delBlog: ', id);
    return true
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}