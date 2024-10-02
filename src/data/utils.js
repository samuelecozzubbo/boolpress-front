const getCategory = (post) => {
    if(post.category){
        return post.category.name;
    }
    return 'Nessuna categoria';
}

const getTags = (post) => {
    if(post.tags.length){
        //SOLUZIONE CORTA ED EFFICACE MA COMPLESSA
        return post.tags.map(tag=> tag.name).join(', ');
        //SOLUZIONE PIU' FACILE MA LUNGA
        // let tagString = '';
        // post.tags.forEach((tag,index) => {
        //     tagString += tag.name;
        //     if (index < post.tags.length - 1) {
        //         tagString += ', ';
        //     }
        // });
        // return tagString;
    }else{
        return 'Nessun Tag';
    }
}

const formatData = (date) => {
    return new Date(date).toLocaleDateString();
}

//export non default e poi importo in Blog e metto in data di blog
export{getCategory, getTags, formatData}
