class EmailNotification {
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

class SMSNotification extends EmailNotification {
    constructor (notificationId,createdTime,content,phoneNumber){
        super (notificationId,createdTime,content);
        this.phoneNumber = phoneNumber;
    }

    send(){
        console.log(`Notification has been sent to ${this.phoneNumber}`);
    };

}

const test1 = new EmailNotification("1234",15.30,"abcde","test1@gmail.com");
 test1.send();

 const test2 = new SMSNotification("1234",15.30,"abcde","0897654321");
 test2.send();