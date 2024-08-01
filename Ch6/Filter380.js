// Write a program to create function based ReactJS app having an array of 6 people having 
// mentioned age [70,83,38,65,49,94] and display list of people whose age is greater than 60 
// using filter method. Also display total count of people whose age is greater than 60 on the 
// same page
function Filter380() {

    const arr = [70, 83, 38, 65, 49, 94]

    const newarr = arr.filter(n => n > 60)

    return (
        <>
            {
                newarr.map((d) => {
                    return (
                        <>
                            <h2>ages:{d}</h2>

                        </>

                    )
                })
            }

       <h2>count:{newarr.length}</h2>
        </>



    )
}

export default Filter380;