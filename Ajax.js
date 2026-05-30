// AJAX-এর পূর্ণরূপ হলো Asynchronous JavaScript and XML।
// সহজ কথায়, এটি কোনো একটি নির্দিষ্ট টেকনোলজি বা প্রোগ্রামিং ল্যাঙ্গুয়েজ নয়, বরং এটি কয়েকটি টেকনোলজির (যেমন: JavaScript, HTML, DOM এবং XMLHttpRequest) সম্মিলিত একটি ওয়েব ডেভেলপমেন্ট টেকনিক।

// এর মূল কাজ হলো—পুরো ওয়েব পেজটি রিলোড বা রিফ্রেশ না করে ব্যাকগ্রাউন্ডে সার্ভারের সাথে ডাটা আদান-প্রদান করা।

// XML-এর পূর্ণরূপ হলো eXtensible Markup Language।

// সহজ কথায়, এটি একটি মার্কআপ ল্যাঙ্গুয়েজ (HTML-এর মতো) যা কোনো ডাটা বা তথ্যকে সুন্দরভাবে সাজিয়ে (Structure), সংরক্ষণ (Store) এবং এক সিস্টেম থেকে অন্য সিস্টেমে আদান-প্রদান (Transfer) করার জন্য ব্যবহার করা হয়।


// JSON-এর পূর্ণরূপ হলো JavaScript Object Notation।

// সহজ কথায়, JSON হলো ডাটা বা তথ্য আদান-প্রদান এবং সংরক্ষণ করার একটি অত্যন্ত জনপ্রিয় ও হালকা ওজনের (Lightweight) টেক্সট ফরম্যাট।

// আপনি যখন ফ্রন্টএন্ড (যেমন: React/Next.js) থেকে ব্যাকএন্ডে (যেমন: Node.js/Express) কোনো ডাটা পাঠান, অথবা ব্যাকএন্ড থেকে ফ্রন্টএন্ডে ডাটা নিয়ে আসেন, তখন সেই ডাটাটি JSON ডাটা হিসেবে যাতায়াত করে।

var xhttp = new XMLHttpRequest();

// সার্ভার যখন রেসপন্স পাঠাবে, তখন এই ফাংশনটি অটোমেটিক ট্রিগার হবে
xhttp.onreadystatechange = function() {
    // 4 মানে রিকোয়েস্ট কমপ্লিট, আর 200 মানে সার্ভার সাকসেসফুলি রেসপন্স করেছে
    if (this.readyState == 4 && this.status == 200) {
       // সার্ভার থেকে আসা ডাটাটি প্রিন্ট করা হলো
       console.log(this.responseText); 
    }
};

xhttp.open("GET", "filename.txt", true);
xhttp.send();

// GET Request: ডাটা আনার জন্য
fetch("https://api.example.com/products")
  .then((response) => {
    if (!response.ok) {
      throw new Error("নেটওয়ার্ক রেসপন্স ঠিক ছিল না!");
    }
    return response.json();
  })
  .then((data) => {
    console.log("প্রোডাক্ট লিস্ট:", data);
  })
  .catch((error) => {
    console.error("AJAX রিকোয়েস্টে সমস্যা হয়েছে:", error);
  });

// একটি এসিনক্রোনাস ফাংশন তৈরি করা
async function getProducts() {
  try {
    const response = await fetch("https://api.example.com/products");

    if (!response.ok) {
      throw new Error("ডাটা আনতে সমস্যা হয়েছে!");
    }

    const data = await response.json(); // ডাটা পার্স হওয়া পর্যন্ত অপেক্ষা করা
    console.log("সফলভাবে পাওয়া ডাটা:", data);
  } catch (error) {
    console.error("এরর হ্যান্ডলিং:", error.message);
  }
}

getProducts();


async function createPost() {
    const newPost = {
        title: "MERN Stack Development",
        body: "Learning AJAX with Fetch API"
    };

    try {
        const response = await fetch('https://api.example.com/posts', {
            method: 'POST', // রিকোয়েস্ট মেথড
            headers: {
                'Content-Type': 'application/json' // সার্ভারকে বলা হচ্ছে আমরা JSON পাঠাচ্ছি
            },
            body: JSON.stringify(newPost) // অবজেক্টকে স্ট্রিংয়ে কনভার্ট করে পাঠানো
        });

        const result = await response.json();
        console.log("সার্ভার রেসপন্স (ডাটা সেভ হয়েছে):", result);
    } catch (error) {
        console.error("POST রিকোয়েস্ট ফেইল করেছে:", error);
    }
}

createPost();
