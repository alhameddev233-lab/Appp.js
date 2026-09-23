 const userEmail = "A@gmail.com"
        if (userEmail) {
            console.log("Got  User Eamil");
        } else {
            console.log("Don't Have User Email");

        }
        // falsy value
        // false,0,-0, BigInt 0n, null,undefind ,nan


        // Truthy
        //true ,"0",'false', " ",[],{},function(){}


        // if (userEmail.length === 0) {
        //     console.log("Array is Empty");

        // }

        const empytObejct = {}
        if (Object.keys(empytObejct).length === 0) {
            console.log("Objcet is Empty");

        }

          // Nullish Coalescing Operator (??) : Null Undefind

        let val1;
        val1 = 5 ?? 10;

        console.log(val1);

        
        /// Terniary  Operator

        /// Condition ? true:false

        const iceTeaPrice = 100
        iceTeaPrice >= 80 ? console.log("less than  80") : console.log("More than 80");
