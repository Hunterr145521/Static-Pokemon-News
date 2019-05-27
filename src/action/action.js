export   const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id // which is equivalent to id:id
    }
}