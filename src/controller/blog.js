const getList = (author, keyword) => {
    // 返回正确格式的假数据
    return [
        {
            id: 1,
            title: '标题1',
            content: '内容1',
            createTime: 1546610491112,
            author: 'Tom'
        },
        {
            id: 2,
            title: '标题2',
            content: '内容2',
            createTime: 1546610411112,
            author: 'Jerry'
        }
    ]
}

const getDetail = (id) => {
    // 返回正确格式的假数据
    return [
        {
            id: 1,
            title: '标题1',
            content: '内容1',
            createTime: 1546610491112,
            author: 'Tom'
        }
    ]
}

const newBlog = (blogData = {}) => {
    //blogData 是一个博客对象，包含 title content 属性

    return {
        id: 3 //表示新建博客，插入到数据表里面的 id
    }
}

const updateBlog = (id, blogData = {}) => {
    // id 就是要更新博客的 id
    // blogData 是一个博客对象，包含title content 属性

    return true;
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog
}