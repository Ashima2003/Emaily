const express=require('express');
const mongoose=require('mongoose');
const cookieSession=require('cookie-session');
const passport=require('passport');
const bodyParser=require('body-parser');
const keys=require('./config/keys.js');
require('./models/user.js');
require('./services/passport.js');
const app=express();



mongoose.connect(keys.mongoURI);

app.use(bodyParser.json());
app.use(cookieSession({
    maxAge:30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes.js')(app);
require('./routes/billingRoutes.js')(app);

app.get('/googlef77e1fbd8da8fc58.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'googlef77e1fbd8da8fc58.html'));
  });
  
const PORT=process.env.PORT || 5000;
app.listen(PORT);