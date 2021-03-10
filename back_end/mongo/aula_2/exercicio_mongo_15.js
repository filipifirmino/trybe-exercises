db.superheroes.find({
    $and: [{
        $or: [
            {'aspects.weight':{ $gte: 180}} , {'aspects.weight':{$lte: 200}},
            {'race': 'human'} , {'race':'mutantes'}

        ]
    },
    {
        'publisher': { $ne : 'DC Comics '}
    }
]   
});

// db.superheroes.find({
//     $and: [
//       {
//         $or: [ {'aspects.weight':{ $gte: 180, $lte: 200}} ]
//       },
      
//       {
//         $or: [ {'race':'human'}, {'race':'mutantes'}]
//       },

//       {'publisher': { $ne : 'DC Comics '}}
//   ] 
// }) ;