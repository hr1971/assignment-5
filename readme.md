
1. getElemelntByid = একটিমাত্র Element.যখন একটাই ইউনিক এলিমেন্ট লাগবে.

getElementsByClassName = যখন একই ক্লাস-এর অনেকগুলো এলিমেন্ট দরকার.

querySelector = একটা এলিমেন্ট লাগবে কিন্তু খোঁজার নিয়মটা CSS-স্টাইলে.

querySelectorAll=অনেকগুলো এলিমেন্ট দরকার, আর CSS-সিলেক্টর দিয়ে টার্গেট .



2. document.createElement() → নতুন element 

প্রপার্টি / টেক্সট / অ্যাট্রিবিউট যোগ করো

appendChild() / prepend() / before() / after() / insertBefore() দিয়ে DOM-এ বসাও

3.একটা button-এ ক্লিক korle → ইভেন্ট প্রথমে ওই button-এ ধরা পড়ে, তারপর উপরে উপরে parent elements হয়ে document অব্দি চলে যায়।
এটাই Event Bubbling।


4.হাজার element-এর জন্য আলাদা event না দিয়ে শুধু parent-এ একটা listener।
DOM-এ পরে নতুন child যোগ হলেও, listener কাজ করব।

কোড ছোট, সহজে maintain করা যায়।

akta kaj jeta onekbar bar korte hoy seta ke akbare akta function kore pela.

5.event.preventDefault()= ডিফল্ট ব্রাউজার অ্যাকশন বন্ধ করে।
event.stopPropagation()=Event bubbling বা capturing বন্ধ করে।
