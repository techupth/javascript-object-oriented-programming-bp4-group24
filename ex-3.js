//  Start coding here
class User {
    constructor (id,name,email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

class Postlist {
    constructor (posts){
        this.posts = [];
    }
    addPost(post){
        return this.posts.push(post);
    }

    sharePost(postTitle){
        return console.log(`You've shared post ${postTitle} to your friend.
        `);
    }
}

class Post {
    constructor (id,title,content,comments){
        this.id=id;
        this.title=title;
        this.content=content;
        this.comments=[];
    }

    addComment(comment){
        return this.comments.push(comment);
    };
}

class Comment {
    constructor (id,content,createdBy,like){
        this.id=id;
        this.content=content;
        this.createdBy = createdBy;
        this.like = 0;
    }

    addLike(like){
        this.like = this.like+1;
        return this.like;
    }
}

class Facebook {
    constructor (groupList,pageList){
        this.groupList=[];
        this.pageList=[];
    }

    addGroup(group){
        return this.groupList.push(group);
    }
    addPage(page){
        return this.pageList.push(page);
    }
}

class FacebookPage{
    constructor(name){
        this.name=name;
    }    
}

class FacebookGroup {
    constructor(name){
        this.name=name;
    }
}

class Notification {
    constructor(id){
       this.id=id;
    }

    send(commentCreatedBy,postTitle){
        return console.log(`Notification: ${commentCreatedBy} has just commented on this post—${postTitle}`)
    }
}

const user1 = new User("1","Sarin","test@email.com");
const post1 =new Post("1","My First Post","Hello World",);
const comment1 = new Comment("1","Nice Post","Jay");
post1.addComment(comment1);
comment1.addLike();
comment1.addLike();

const postList =new Postlist();
console.log(postList);
postList.addPost(post1);
console.log(postList);
postList.sharePost(post1.title);

const fbPage = new FacebookPage("My Page");
const fbGroup = new FacebookGroup("My Group");
const facebook = new Facebook();
facebook.addPage(fbPage);
facebook.addGroup(fbGroup);
console.log(facebook);

const notification = new Notification("1");
notification.send(comment1.createdBy,post1.title);
