const generateMessage=(e,a,t,s)=>({text:e,user_email:a,chatroom:s,user_name:t,createdAt:(new Date).getTime()}),generateLocationMessage=(e,a,t,s)=>({url:e,user_email:a,chatroom:s,user_name:t,createdAt:(new Date).getTime()});module.exports={generateMessage:generateMessage,generateLocationMessage:generateLocationMessage};