const User = require("../models/User");

const UserData = {
  _id: 1,
  name: "Jamshid",
  email: "hasanovj682@gmail.com",
  password: "jaedeedededed",
};

const Users = [{ ...UserData }];

const resolvers = {
  Query: {
    //     getUser: async (args) => {
    //     return await User.findOne({_id: args._id})
    //   },
    getAllUsers: async () => {
      return await User.find();
    },
    getUser: async (parent, args, context, info) => {
      return await User.find({name: args.getbyName.name});
    },
  },
  Mutation: {
    async createUser(parent, args, context, info) {
      return await User.create({ ...args.data });
    },
    async updateUser(parent,args,context,info) {
        const {_id,data} = args;
        const updatedUser = await User.findByIdAndUpdate({_id},{...data});
        return updatedUser;
    },
    async deleteUser(parent,{_id},context,info) {
        await User.findByIdAndRemove({_id});
        return true;
    }
  },
};

module.exports = resolvers;
