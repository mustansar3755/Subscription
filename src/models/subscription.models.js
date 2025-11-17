import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Subscription Name is required"],
      minLength: 2,
      trim: true,
      maxLength: 100,
    },
    price: {
      type: Number,
      required: [true, "Subascription price is required."],
      min: [0, "Price must me greater than 0"],
    },
    currency: {
      type: String,
      enum: ["USD", "PKR", "EUR"],
      default: "USD",
    },
    frequency: {
      type: String,
      enum: ["daily", "weeekly", "monthly", "years"],
    },
    category: {
      type: String,
      enum: ["Sports", "News", "Finance", "LifeStyle", "Technology", "Others"],
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "cancelled", "required"],
      default: "active",
    },
    startDate: {
      type: Date,
      required: true,
      validate: {
        validator: (value) => value <= new Date(),
        message: "Start date must be in past",
      },
    },
    renewalDate: {
      type: Date,
      validate: {
        validator: function (value) {
          return value > this.startDay;
        },
        message: "Renewal date must be after the start date.",
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

// Auto-calculate renewal date if missing
subscriptionSchema.pre("save", function (next) {
  if (!this.renewalDate) {
    const renewalPeriod = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    };

    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(
      this.renewalDate.getDate() + renewalPeriod[this.frequency]
    );
  }
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
