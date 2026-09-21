const tinderUser = new Object()

console.log(tinderUser);

 // Object Part-2 
        
        // const tinderUser = {}

        tinderUser.id = "123abc"
        tinderUser.name = "Sam"
        tinderUser.isLogin = false

        console.log(tinderUser);

        const regularUser = {
            email: "AlhmedDev@gmail.com",
            fullname: {
                userFullname: "Ahmed AL-Hamed",
                location: "Pune",


            }
        }
        console.log(regularUser.fullname.userFullname);
        console.log(regularUser.fullname.location);

        let obj1 = { 1: "A", 2: "B", }
        let obj2 = { 3: "C", 4: "D" }
        let obj4 = { 5: "e", 6: "f" }

        let obj3 = { ...obj1, ...obj2, ...obj4 }
        console.log(obj3);

        console.log(Object.keys(tinderUser));
        console.log(Object.values(tinderUser));
        console.log(Object.entries(tinderUser));
        console.log(tinderUser.hasOwnProperty("isLogin"));