const data = [
  {
    title: "Introduction to Global Academy",
    content:
      "It is the aim of Global Academy to provide K-12 education that every student deserves. We, at Global School, appreciate diversity and realize that each student is different and should be treated as a unique individual. Our constant endeavor is to help each student realize their full potential and discover new horizons in learning.",
    type: "about",
    link: "/about/introduction",
  },
  {
    title: "Chairman's Message",
    content:
      "Dear Parents, Students, and Friends of Global Academy, it is with immense pride and pleasure that I welcome you to our esteemed institution. At Global Academy, we are committed to providing a nurturing and stimulating environment where every child can thrive academically, socially, and emotionally.",
    type: "about",
    link: "/about/chairman-message",
  },
  {
    title: "XIXII Management Stream Program",
    content:
      "Our XIXII Management Stream program is designed to provide students with a solid foundation in business and management principles. The curriculum is structured to foster critical thinking, problem-solving, and leadership skills, preparing students for successful careers in the global marketplace.",
    type: "program",
    link: "/programs/management",
  },
  {
    title: "Pre-School Program",
    content:
      "Our Pre-School program focuses on creating a joyful and engaging learning experience for young children. We emphasize play-based learning to develop essential skills such as communication, socialization, and creativity. Our experienced educators provide a safe and supportive environment where children can explore and discover at their own pace.",
    type: "program",
    link: "/programs/preschool",
  },
  {
    title: "Recent Event: Annual Sports Day",
    content:
      "The recent Annual Sports Day was a resounding success, filled with excitement and camaraderie. Students participated in a variety of sports and games, showcasing their athletic talents and team spirit. The event highlighted our commitment to promoting physical fitness and a healthy lifestyle among our students.",
    type: "event",
    link: "/events/sports-day",
  },
  {
    title: "Payment Notice for Upcoming Term",
    content:
      "This is to notify all parents and guardians that the payment for the upcoming term is due by [Date]. Please ensure timely payment to avoid any disruption to your child's education. Details regarding the payment process and available payment options can be found on our website or by contacting the school office.",
    type: "notice",
    link: "/notices/payment",
  },
  {
    title: "Admission Open for 2024",
    content:
      "Global Academy is now accepting admissions for the academic year 2024. We welcome students from diverse backgrounds to join our vibrant learning community. Our admission process is designed to be transparent and straightforward. Visit our website or contact our admission office for more information and to apply.",
    type: "admission",
    link: "/admissions/2024",
  },
  {
    title: "Message From M.D",
    content:
      "As the Managing Director of Global Academy, I am delighted to share our vision of providing quality education that empowers students to become lifelong learners and responsible global citizens. We are dedicated to fostering a culture of excellence, innovation, and inclusivity.",
    type: "about",
    link: "/about/md-message",
  },
  {
    title: "Principal's Message",
    content:
      "Welcome to Global Academy, where we believe in nurturing the potential of every student. Our dedicated faculty and staff are committed to providing a holistic education that focuses on academic excellence, character development, and personal growth. We strive to create a supportive and challenging environment where students can thrive and succeed.",
    type: "about",
    link: "/about/principal-message",
  },
  {
    title: "Team",
    content:
      "Our team at Global Academy consists of experienced educators, administrators, and support staff who are passionate about education and dedicated to the success of our students. We work collaboratively to provide a nurturing and stimulating learning environment that fosters academic excellence and personal growth.",
    type: "about",
    link: "/about/team",
  },
  {
    title: "Primary School I – V",
    content:
      "Our Primary School program for grades I to V focuses on building a strong foundation in core subjects such as mathematics, science, and languages. We emphasize experiential learning and hands-on activities to make learning engaging and meaningful for our young learners.",
    type: "program",
    link: "/programs/primary",
  },
  {
    title: "Secondary School VI – X",
    content:
      "Our Secondary School program for grades VI to X prepares students for higher education and future careers. We offer a comprehensive curriculum that includes a wide range of subjects and extracurricular activities. Our goal is to develop well-rounded individuals who are equipped with the knowledge and skills to succeed in a rapidly changing world.",
    type: "program",
    link: "/programs/secondary",
  },
];

const searchInput = document.querySelector('input[type="text"]');
const searchButton = document.querySelector("button");
const resultsContainer = document.getElementById("searchResults");

function displayAll() {
  resultsContainer.innerHTML = "";
  data.forEach((item) => {
    const resultItem = document.createElement("div");
    resultItem.innerHTML = `
            <h3><a href="${item.link}">${item.title}</a></h3>
            <p>${item.content}</p>
            <p>Type: ${item.type}</p>
            <hr>
        `;
    resultsContainer.appendChild(resultItem);
  });
}

searchButton.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  if (query) {
    const results = data.filter((item) => {
      const titleMatch = item.title
        .toLowerCase()
        .split(" ")
        .some((word) => word.startsWith(query));
      const contentMatch = item.content
        .toLowerCase()
        .split(" ")
        .some((word) => word.startsWith(query));
      return titleMatch || contentMatch;
    });
    displayResults(results);
  } else {
    displayAll(); // Show all elements if no query
  }
});

function displayResults(results) {
  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    resultsContainer.innerHTML = "<p>No results found.</p>";
    return;
  }

  results.forEach((item) => {
    const resultItem = document.createElement("div");
    resultItem.innerHTML = `
            <h3><a href="${item.link}">${item.title}</a></h3>
            <p>${item.content}</p>
            <p>Type: ${item.type}</p>
            <hr>
        `;
    resultsContainer.appendChild(resultItem);
  });
}

// Initial display of all elements
displayAll();
