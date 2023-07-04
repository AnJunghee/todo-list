const quotes = [
    {
        quote: "성공의 8할은 일단 출석하는 것이다.",
        author: "Woody Allen",
    },
    {
        quote: "성공한 사람이 될 수 있는데 왜 평범한 이에 머무르려 하는가?",
        author: "Bertolt Brecht",
    },
    {
        quote: "현명한 자라면 찾아낸 기회보다 더 많은 기회를 만들 것이다.",
        author: "Sir Francis Bacon",
    },
    {
        quote: "이 세상에 보장된 것은 아무것도 없으며 오직 기회만 있을 뿐이다.",
        author: "General Douglas MacArthur",
    },
    {
        quote: "남에게 이기는 방법의 하나는 예의범절로 이기는 것이다.",
        author: "Josh Billings",
    },
    {
        quote: "우리가 할 수 있기 전에 배워야 하는 일들을, 우리는 하면서 배운다.",
        author: "Aristotle",
    },
    {
        quote: "지식이 없는 성실은 허약하고 쓸모 없다. 성실이 없는 지식은 위험하고 두려운 것이다.",
        author: "Samuel Johnson",
    },
    {
        quote: "두려움은 희망 없이 있을 수 없고 희망은 두려움없이 있을 수 없다.",
        author: "Baruch Spinoza",
    },
    {
        quote: "지금이 제일 비참하다고 할 수 있는 동안은 아직 제일 비참한 게 아니다.",
        author: "William Shakespeare",
    },
    {
        quote: "우리가 무슨 생각을 하느냐가 우리가 어떤 사람이 되는지를 결정한다.",
        author: "Oprah Winfrey",
    },
]

const quote = document.querySelector("#quote span:first-child"); //명언
const author = document.querySelector("#quote span:last-child"); //작가

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //랜덤 숫자

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;