const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jai690:Lamaquina10@practice.pzjne.mongodb.net/corrupcion')
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))

