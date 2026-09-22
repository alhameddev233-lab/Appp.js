
  function one() {
            const username = "Ahmed"

            function tow() {
                const website = "youtube"
                console.log(username);

            }
            // console.log(website);
            tow()

        }

        one()

        if (true) {
            const userName = "Ahmed"
            if (userName === "Ahmed") {
                const webSite = "Youtube"
                console.log(userName + webSite);

            }
            console.log(webSite);

        }
        console.log(userName);


        // ++++++++++++++++++++ interesting ++++++++++++++++++++++++ \\



        function addone(num) {
            return num + 1
        }
        addone(5)
        const addtow = function (num) {
            return num + 2
        }

        addtow(5)

const data ={
    userName:"Ahmed",
    Price:199,

    welcomMessage :function (){
console.log(`${this.userName}, Welscome  to WebSite`);

    }
}


        console.log(this);


        const chai = () => {
            let userName = "Ahmed"
            console.log(this.userName);

        }

        // chai()

        // const abc = (num1, num2) => {
        //     return num1 + num2

        // }
        // const abc = (num1, num2) => num1 + num2
        // const abc = (num1, num2) => (num1 + num2)
        const abc = (num1, num2) => ({ name: "ahmed" })


        console.log(abc(3, 6));
