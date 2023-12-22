export type Order = {
    orderId: string 
    orderDate: Date
    customerName: string 
    shippingAdress: ShippingAdress
    status: string
}

type ShippingAdress = {
    street: string
    city: string
    state: string
    zipCode: string
}