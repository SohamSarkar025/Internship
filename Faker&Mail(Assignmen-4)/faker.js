
//  3. Fake Data Generation
// Q3. Using the @faker-js/faker package, generate 10 fake user profiles with the following fields:
// •	Full name
// •	Email
// •	Phone number
// •	Address
// •	Save them in an array and log them to the console.

const {faker} = require('@faker-js/faker');
const fs =  require('fs')

const generateFakeUserData =(num)=>{
    const users=[];
    for(let i=0;i<=num-1;i++){
        const user = {
            id:i+1,
            name:faker.person.fullName(),
            email:faker.internet.email(),
            phone:faker.phone.number(),
            adress:{
                street:faker.location.streetAddress(),
                city:faker.location.city(),
                country:faker.location.country()
            },
            create_at:faker.date.past().toISOString()
        }
        users.push(user)
    }
    return users
}
const user_fakeData= generateFakeUserData(10);
fs.writeFileSync("fake_users.json",JSON.stringify(user_fakeData,null,2))
console.log("fake json user data is created successfully")


// Read the JSON file asynchronously
fs.readFile('fake_users.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    const users = JSON.parse(data);
    users.forEach(user => {
      console.log(`Name: ${user.name}, Email: ${user.email}`);
    });
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});