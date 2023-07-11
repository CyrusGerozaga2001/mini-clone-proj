let lang = {
  english: {
    india: "Netflix Ph",
    "ul-1-a1": "FAQ",
    "ul-1-a2": "Investor Relation",
    "ul-1-a3": "Privacy",
    "ul-1-a4": "Speed Test",
    "ul-1-a5": "Helps",
    "ul-1-a6": "Jobs",
    "ul-1-a7": "Cookies Prefernace",
    "ul-1-a8": "Legal Notice",
    "ul-2-a1": "Account",
    "ul-2-a2": "Ways to Watch",
    "ul-2-a3": "Corporate Information",
    "ul-2-a4": "Netflix Originals",
    "ul-2-a5": "Media Centers",
    "ul-2-a6": "Terms of Uses",
    "ul-2-a7": "Contact Us",
    "footer-p": 'Questions? Call 000-800-040-1843',
    "email-btn-2": "Get started",
    "text-p1":
      "Ready to watch? Enter your email to create or restart your membership.",
    "sec-5-span-5": "How do I cancel?",
    "sec-5-p-5":
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    "sec-5-span-4": "Where can I watch?",
    "sec-5-p-4":
      "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    "sec-5-span-3": "What I can Watch on Netflix?",
    "sec-5-p-3":
      "Netflix has an extensive library of feature films,documentaries,TV, shows, anime, award-winning Netflix originals,and more. Watch as much as you want, anytime you want.",
    "sec-5-span-2": "How much dose netflix costs?",
    "sec-5-p-2":
      " Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.",
    "sec-5-span-1": "What is NetFlix?",
    "sec-5-p-1":
      "   Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br /> You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    "sec-5-h1": "Frequently Asked Questions",
    "download-text-h4":
      "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
    "download-text-h1": "Create profiles for childern.",
    "sec-4-h4":
      " Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    "sec-4-h1": "Watch everywhere.",
    "sec-3-h4":
      "Save your favourites easily and always have something to watch.",
    "sec-3-h1": "Download your shows to watch offline.",
    "sec-2-h4":
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    "sec-2-h1": "Enjoy on your TV.",
    "email-btn": "Get started",
    "main-text-h5":
      " Ready to watch? Enter your email to create or restart your membership.",
    "main-text-h4": "Watch anywhere. Cancel anytime.",
    "main-text-h2": "shows and more.",
    "main-text-h1": "Unlimited movies, TV",
    "sign-in-btn": "Sign In",
  },
  
};

document.getElementById("lang").addEventListener("change", (e) => {
  const selected_lang = e.target.value;
  const data = lang[selected_lang];
  for (let element in data) {
    if (data.hasOwnProperty(element)) {
      content = data[element];
      console.log(element, content);
      document.getElementById(element).innerText = content;
    }
  }
});
