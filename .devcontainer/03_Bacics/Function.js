  // function abc() {
        //     console.log("Ahmed");

        // }

        // abc()

        function add(Number1, Number2) {
            let result = Number1 + Number2
            return result
        }
        let result = add(5, 5)
        console.log("Reslut :", result);

        const user = {
            itemName: "Appple",
            price: 400,
        }


        function handleobject(anyitems) {
            console.log(`itesmName is ${anyitems.itemName} and price is ${anyitems.price}`);


        }


        // handleobject(user)
        handleobject({
            itemName: "Mango",
            price: 200
        })

        let array = [200, 300, 400, 100,]

        function returnSeconValue(getArry) {
            return getArry[1]


        }
        // console.log(returnSeconValue(array));
        console.log(returnSeconValue([200, 400, 500, 1000]));

