
const express  = require('express');
const app = express();
const body_parser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet=require('helmet');
const compression=require('compression');
const User=require('./model/user');
const Message=require('./model/message');
const GroupUser=require('./model/groupUser');
const Group=require('./model/group');

app.use(body_parser.json());
app.use(cors());


dotenv.config();
const userRoutes=require('../Backend/router/user');
const messageRoutes=require('../Backend/router/message');
const chatRoutes=require('./router/chat');

User.hasMany(Message);
Message.belongsTo(User);


app.use(helmet());
app.use(compression());
const data_base = require('./config/database');


app.use('/user',userRoutes);
app.use('/message',messageRoutes);
app.use('/chat',chatRoutes);

Group.belongsToMany(User, {through: GroupUser});
User.belongsToMany(Group, {through: GroupUser});

Group.hasMany(Message);
Message.belongsTo(Group);



//data_base.sync({force: true})
data_base.sync()
    .then(() => {
        app.listen(process.env.PORT || 5000);
        console.log('app is running')
    })
    .catch(err => console.log(err));


