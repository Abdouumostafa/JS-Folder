const reviewerName = document.querySelector(".reviewer-name");
const reviewText = document.querySelector(".review-text");
const nextBtn = document.querySelector(".rightBtn");
const prevBtn = document.querySelector(".leftBtn");
const currentRev = document.querySelector(".currentRev");

const reviewsData = [
  {
    name: "Ahmed Mousa",
    text: "Great Service! Would highly recommend to others",
  },
  {
    name: "Mohammed Ayman",
    text: "Very Great Teamwork! They gave me very good website",
  },
  {
    name: "Farida Mohammed",
    text: "I'm very pleased to deal with this organization and always and they are so professional",
  },
  {
    name: "Seif Tarek",
    text: "It's the first time to be 100% satisfied of a service!! Thanks Double A",
  },
];

let currentIndex = 0;

const showRev = () => {
  for (let i = 0; i < reviewsData.length; i++) {
    reviewerName.innerHTML = reviewsData[currentIndex].name;
    reviewText.innerHTML = reviewsData[currentIndex].text;
  }
};
showRev();

const theCurrentReviewNumber = () =>
  (currentRev.innerHTML = `${currentIndex + 1} / ${reviewsData.length}`);
theCurrentReviewNumber();

nextBtn.addEventListener("click", () => {
  if (currentIndex === 3) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  showRev();
  theCurrentReviewNumber();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = 3;
  } else {
    currentIndex--; 
  }
  showRev();
  theCurrentReviewNumber();
});
