
import mongoose from 'mongoose';

// user id created manually

const counterSchema = mongoose.Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
  });
  
  const Counter = mongoose.model('Counter', counterSchema);

// how our document look like
const userSchema = mongoose.Schema({
    userId: { type: Number, unique: true },
    name: String,
    username: String,
    email: String,
    phone: Number
});

//including userid in the schema and  creating the id incrementing manually
userSchema.pre('save', function (next) {
    const doc = this;
    Counter.findByIdAndUpdate({ _id: 'userId' }, { $inc: { seq: 1 } }, { new: true, upsert: true })
      .then(function (counter) {
        doc.userId = counter.seq;
        next();
      })
      .catch(function (error) {
        return next(error);
      });
  });



const postUser = mongoose.model('user' , userSchema);

export default postUser;


