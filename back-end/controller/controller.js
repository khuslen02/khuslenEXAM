exports.todo = async (request, response, ) => {
    if(
        !request.body?.todo
        ){
        response
        .status(400)
        .json({message:`error`});
    }
    const ToDo =await User.create({...request.body});
    response
    .status(201)
    .json({message:`succes`,data: todo});
    };
