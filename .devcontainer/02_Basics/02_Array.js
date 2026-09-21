 //Array Part-2

        const marvle_heros = ["Iron Man", "Hulk", "Thor"]
        const dc_heros = ["SuperMan", "Flash", "Batman"]

        // marvle_heros.push(dc_heros)

        // console.log(marvle_heros);
        // console.log(marvle_heros[3][1]);
        // let all = marvle_heros.concat(dc_heros)
        // console.log(all);


        // let all_New = [...marvle_heros, ...dc_heros]
        // console.log("New", all_New);


        let another_arry = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
        let real_another_arry = another_arry.flat(Infinity)
        console.log(real_another_arry);

        console.log(Array.isArray("Ahmed"));
        console.log(Array.from("Ahmed"));
        console.log(Array.from({ name: "Ahmed" }));  //interesting 



        let score1 = 100
        let score2 = 200
        let score3 = 300
        console.log(Array.of(score1, score2, score3));