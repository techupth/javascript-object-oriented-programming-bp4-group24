class Notification{
    constructor (notificationId,createdTime,content,receiver){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send(){
        console.log(`Notification has been sent to ${this.receiver}`);
    };
}




class EmailNotification extends Notification {
    constructor (notificationId,createdTime,content,receiver){
        super (notificationId,createdTime,content,receiver);
    }
 }

class SMSNotification extends Notification {
    constructor (notificationId,createdTime,content,receiver){
        super (notificationId,createdTime,content,receiver);
    }

}

const test1 = new EmailNotification("1234",15.30,"abcde","test1@gmail.com");
 test1.send();

 const test2 = new SMSNotification("1234",15.30,"abcde","0897654321");
 test2.send();

 