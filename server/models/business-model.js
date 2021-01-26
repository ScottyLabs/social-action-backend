const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Business = new Schema(
    {
        name: { type: String, required: true },
        website: { type: String, required: true },
        type: { type: [String], required: true },
    },
    { timestamps: true },
)

var Member = mongoose.model('businesses', Business);

function pipe(database){

    const pipeline = [
        {
            '$sample': {
              'size': 1
            }
        }
    ];
    
    const aggCursor = database.aggregate(pipeline, function( err, data ) {

        if ( err )
          throw err;
    
        console.log( JSON.stringify( data, undefined, 2 ) );
    
      });
}

// pipe(Member);

module.exports = Member;