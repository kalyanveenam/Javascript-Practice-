var address=[];
let storeAddress=(userName,...addressToBeStored)=>{

address.push({user: userName, addressToBeStored:addressToBeStored})
 return address;


}
let Address1={

    "street":"street1",
    "State":"Telangana",
    "pincode": 500043
}
let Address2={
    "street": "street1",
    "State": "Telangana",
    "pincode": 500043
}

let storedAddress=storeAddress("kalyan", Address1, Address2);
console.log(storedAddress)