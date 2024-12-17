import * as Yup from "yup";

export const SellProductSchema = Yup.object().shape({
    productName: Yup.string().required("Product name is required"),
    amount: Yup.string().required("Amount is required"),
    paymentStatus: Yup.string().required("Payment status required"),
});

export const NewShopSchema = Yup.object().shape({
    shopName: Yup.string().required("Shop name is required"),
    location: Yup.string().required("Location is required"),
    description: Yup.string().required("Description required"),
    shopImage: Yup.string().required("Image required"),
});

export const NewItemSchema = Yup.object().shape({
    itemName: Yup.string().required("Item name is required"),
    category: Yup.string().required("Category is required"),
});

export const NewEmployeeSchema = Yup.object().shape({
    employeeName: Yup.string().required("Name is required"),
    phoneNumber: Yup.string().required("Number is required"),
    password: Yup.string().required("Password is required"),
});