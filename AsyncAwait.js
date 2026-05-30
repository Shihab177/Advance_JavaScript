async function test(){
    const response = await fetch("json/student_dat1a.json");
    const students = await response.json();

    return students;
}

test().then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
});

async function test() {
    try {
        const response = await fetch("json/student_data.json");
        const students = await response.json();
        return students;
    } catch (error) {
        console.error("ডেটা আনতে সমস্যা হয়েছে:", error);
    }
}


const finalData = await test();
console.log(finalData);