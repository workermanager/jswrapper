// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var wrapper_pb = require('./wrapper_pb.js');

function serialize_wrapper_Message(arg) {
  if (!(arg instanceof wrapper_pb.Message)) {
    throw new Error('Expected argument of type wrapper.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wrapper_Message(buffer_arg) {
  return wrapper_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wrapper_Void(arg) {
  if (!(arg instanceof wrapper_pb.Void)) {
    throw new Error('Expected argument of type wrapper.Void');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wrapper_Void(buffer_arg) {
  return wrapper_pb.Void.deserializeBinary(new Uint8Array(buffer_arg));
}


var MessageQueueService = exports.MessageQueueService = {
  pop: {
    path: '/wrapper.MessageQueue/Pop',
    requestStream: false,
    responseStream: false,
    requestType: wrapper_pb.Void,
    responseType: wrapper_pb.Message,
    requestSerialize: serialize_wrapper_Void,
    requestDeserialize: deserialize_wrapper_Void,
    responseSerialize: serialize_wrapper_Message,
    responseDeserialize: deserialize_wrapper_Message,
  },
  monitor: {
    path: '/wrapper.MessageQueue/Monitor',
    requestStream: false,
    responseStream: true,
    requestType: wrapper_pb.Void,
    responseType: wrapper_pb.Message,
    requestSerialize: serialize_wrapper_Void,
    requestDeserialize: deserialize_wrapper_Void,
    responseSerialize: serialize_wrapper_Message,
    responseDeserialize: deserialize_wrapper_Message,
  },
};

exports.MessageQueueClient = grpc.makeGenericClientConstructor(MessageQueueService);
