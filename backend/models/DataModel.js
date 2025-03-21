const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  Contract: Number,
  CustItm_Sl: Number,
  Sales_Order: Number,
  Item_Slno: Number,
  Status: String,
  Sales_Order_Date: String,
  Purchase_Order: String,
  Purchase_Date: String,
  Division: Number,
  Document_Type: String,
  Sold_To_Party_Name: String,
  City_Of_Supply: String,
  Delivery_Date: String,
  Original_Delivery_Date: String,
  LD_Effect: String,
  Item_LD_Effect: String,
  Material_No: String,
  Description: String,
  Ordered_Qty: Number,
  Item_Price: mongoose.Types.Decimal128,
  Ordered_Value: mongoose.Types.Decimal128,
  Delivered: mongoose.Types.Decimal128,
  Pending_Qty: Number,
  Pending_Value: mongoose.Types.Decimal128,
  Currency: String,
  Industry_Group: String,
  Inco: String,
  Inco_Terms: String,
  Project_Description: String,
  Material_Price_Type: String,
  Scheduled_Delivery_Date: String,
  Planned_Delivery_Date: String,
  Project_Short_Text: String,
  Customer_Short_Text: String,
});

const DataModel = mongoose.model("Data", dataSchema);

module.exports = DataModel;
