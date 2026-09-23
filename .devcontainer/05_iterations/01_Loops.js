      //// Iterations ////
        //For loops

        // let array = 0;

        for (let i = 0; i <= 10; i++) {
            const element = i;
            if (element == 5) {
                // console.log("5 is Best Number");


            }
            // console.log(element);

        }

        for (let i = 0; i <= 10; i++) {
            console.log(`Outer Loops Value: ${i}`);

            for (let u = 0; u <= 20; u++) {
                // console.log(`Inner Loops Value: ${u} and Inner loops ${i}`);
                console.log(i + '*' + u + '=' + i * u);


            }
        }

        let Hero = ["Iron Man", "Hulk", "Thor"]

        for (let index = 0; index < Hero.length; index++) {
            const element = Hero[index];
            console.log(element);


        }

        // break  & continue

        // for (let index = 1; index <= 20; index++) {
        //     if (index == 5) {
        //         console.log(`Detected 5 `);
        //         break


        //     }
        //     console.log(`Value of is ${index}`);

        // }

        for (let index = 1; index <= 20; index++) {
            if (index == 5) {
                console.log(`Detected 5 `);
                continue


            }
            console.log(`Value of is ${index}`);

        }
