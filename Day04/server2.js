
const {faker} = require('@faker-js/faker');
const fs =  require('fs')

const generateFakeUserData =(num)=>{
    const users=[];
    for(let i=0;i<=num-1;i++){
        const user = {
            id:i+1,
            name:faker.name.firstName(),
            email:faker.internet.email(),
            phone:faker.phone.number(),
            adress:{
                street:faker.address.streetAddress(),
                city:faker.address.city(),
                country:faker.address.country()
            },
            create_at:faker.date.past().toISOString()
        }
        users.push(user)
    }
    return users
}
const user_fakeData= generateFakeUserData(50);
fs.writeFileSync("store_fake_user_data.json",JSON.stringify(user_fakeData,null,2))
console.log("fake json user data is created successfully")