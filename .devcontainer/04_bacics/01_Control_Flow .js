 /// ===============Control_Flow ++++++++

        // if \\

        const temparature = 54;
        if (temparature === 50) {
            console.log("Less then 50%");
        } else {
            console.log('temparature is Greater than %50');

        }
        // <,> <=,>=, ==, !=, ===, !==/

        const score = 200;
        if (score > 100) {
            const power = "fly"
            console.log(`User Power: ${power}`);


        }


        const balance = 1000;

        if (balance < 500) {
            console.log("less than ");
        } else if (balance < 750) {
            console.log("less than ");
        } else if (balance < 900) {
            console.log("less than ");

        } else {
            console.log("less than 1200 ");

        }

        if (balance > 500) console.log("test");

         const userLoggedin = true;
        const userLoggedFromGoogle = false;
        const userLoggedFromEmail = true;
        const debitCard = true;

        if (userLoggedin && debitCard) {
            console.log("Allow to by items");

        }

        if (userLoggedFromGoogle || userLoggedFromEmail) {
            console.log("user Logged in");

        }