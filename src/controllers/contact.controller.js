exports.create = function(require, request) {
    return request.send({message: 'create handler'});
};

exports.findAllCLothes = function(require, request) {
    return request.send({message: 'findAllCLothes handler'});
};

exports.findOneClothes = function(require, request) {
    return request.send({message: 'findOneClothes handler'});
};

exports.UpdateClothes = function(require, request) {
    return request.send({message: 'UpdateClothes handler'});
};

exports.DeleteCLothes = function(require, request) {
    return request.send({message: 'DeleteCLothes handler'});
};

exports.DeleteAllClothes = function(require, request) {
    return request.send({message: 'DeleteAllClothes handler'});
};

exports.findAllFavoriteClothes = function(require, request) {
    return request.send({message: 'findAllFavoriteClothes handler'});
};