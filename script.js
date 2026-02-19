let navBar = document.querySelector("nav");
let body = document.querySelector("body");
let openNavBarBtn = document.querySelector(".open-btn");
let closeNavBarBtn = document.querySelector(".close-btn");

if (screen.width <= 767) {
  navBar.style.left = "-100%";
  body.style.width = 100 + "%";
  openNavBarBtn.classList.remove("hide");
}

// function when close navbar btn clicked
function closeNavBar() {
  navBar.style.left = -100 + "%";
  body.style.width = 100 + "%";

  setTimeout(() => {
    openNavBarBtn.classList.remove("hide");
  }, 100);
}
// function when open navbar btn clicked
function openNavBar() {
  if (screen.width <= 767) {
    navBar.style.left = "-0%";
    body.style.width = 100 + "%";
    openNavBarBtn.classList.add("hide");
    navBar.style.width = "100%";
  } else {
    body.style.width = 70 + "%";
    navBar.style.left = 0;
    console.log(navBar);
    openNavBarBtn.classList.add("hide");
  }
  pagesTitles.forEach((pt) => {
    pt.style.fontSize = "15px";
  });
}

// mouse cursor
let mouse = document.querySelector(".mouse");
window.addEventListener("mousemove", (e) => {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
});

// my projects array
let projects = {
  data: [
    {
      num: 5,
      name: "Movie Website",
      img: "./photo/movieWebSite.png",
      language: "JS",
      link: "https://shahdahmed55.github.io/Movie-Website/",
      tools: "HTML | SCSS | js",
      codeOnGit:
        "https://github.com/shahdAhmed55/Movie-Website?tab=readme-ov-file",
    },
    {
      num: 6,
      name: "Youtube Thumbnails Downloader",
      img: "./photo/youtubeDownload.png",
      language: "JS",
      link: "https://shahdahmed55.github.io/Youtube-Thumbnails-downloader/",
      tools: "HTML | css | js",
      codeOnGit:
        "https://github.com/shahdAhmed55/Youtube-Thumbnails-downloader",
    },
    {
      num: 0,
      name: "Wooster",
      img: "./photo/css project.png",
      language: "CSS",
      link: "https://shahdahmed55.github.io/2-second-HTML_CSS-template/",
      tools: "HTML | CSS",
      codeOnGit:
        "https://github.com/shahdAhmed55/2-second-HTML_CSS-template?tab=readme-ov-file",
    },
    // 2
    {
      num: 1,
      name: "Lugx",
      img: "./photo/css project2.png",
      language: "CSS",
      link: "https://shahdahmed55.github.io/3-third-HTML_CSS-template/",
      tools: "HTML | CSS",
      codeOnGit:
        "https://github.com/shahdAhmed55/3-third-HTML_CSS-template?tab=readme-ov-file",
    },
    // 3
    {
      num: 2,
      name: "Anime",
      img: "./photo/css project3.png",
      language: "CSS",
      link: "https://shahdahmed55.github.io/4-fourth-HTML_CSS-template/",
      tools: "HTML | CSS",
      codeOnGit: "https://github.com/shahdAhmed55/4-fourth-HTML_CSS-template",
    },
    // 4
    {
      num: 3,
      name: "FoodFunday",
      img: "./photo/sass project.png",
      language: "SCSS",
      link: "https://shahdahmed55.github.io/1-first-project-sass/",
      tools: "HTML | SCSS",
      codeOnGit:
        "https://github.com/shahdAhmed55/1-first-project-sass?tab=readme-ov-file",
    },
    // 5
    {
      num: 4,
      name: "Parista",
      img: "./photo/sass project2.png",
      language: "SCSS",
      link: "https://shahdahmed55.github.io/second-sass-template/",
      tools: "HTML | SCSS",
      codeOnGit: "https://github.com/shahdAhmed55/second-sass-template",
    },
  ],
};

// create project box function
let projectContainer = document.querySelector(".projects .boxes");
function createBox() {
  let projectContent = `
       <div class="box All ${project.language}">
            <div class="img">
                <img class="pro-img" src="${project.img}" alt="">
                <span class= "git hide">
                    <a href="${project.codeOnGit}" >
                    <img src="./photo/github.png" alt="">
                    </a>
                    </span>
            </div>
            <div class="project-infos">
                <div class="project-name">
                    <h4>${project.name}</h4>
                           <div class="tools">
                    <span>${project.tools}</span>
                </div>
                </div>
                <div class="open-project-btn">
                  <a href="${project.link}">
                           <img  src="./photo/icons8-open-link.svg" alt="">
                    </a>
                </div>
            </div>
        </div>
   `;

  projectContainer.innerHTML += projectContent;
}

// add create box function to each project in projects array
for (project of projects.data) {
  createBox();
}
let projectPage = document.querySelector("#projects-page");
let filterBar = projectPage.querySelector(".filter-bar");
let sections = document.querySelectorAll("section");
let lis = document.querySelectorAll("li a");
let pagesTitles = document.querySelectorAll(".title");
let githubCodes = document.querySelectorAll(".git");

let boxes = document.querySelectorAll(".projects .boxes .box");
let filterBtns = document.querySelectorAll(".filterBtn");
function findBox(filterBtn) {
  boxes.forEach((box) => {
    if (box.className.includes(filterBtn.getAttribute("id"))) {
      box.classList.remove("hide");
    } else {
      box.classList.add("hide");
    }
  });
}

// filter btn on click
filterBtns.forEach((filterBtn) => {
  filterBtn.addEventListener("click", () => {
    activeBtn();
    projectContainer.style.transform = "translateY(-50px)";
    filterBtn.classList.add("active");
    if (!document.startViewTransition) {
      findBox(filterBtn);
    }
    document.startViewTransition(() => {
      findBox(filterBtn);
      setTimeout(() => {
        projectContainer.style.transform = "translateX(0%)";
      }, 100);
    });
  });
});

filterBtns[0].classList.add("active");

// active filter btn
function activeBtn() {
  filterBtns.forEach((el) => {
    el.classList.remove("active");
    el.addEventListener("click", () => {
      el.classList.add("active");
    });
  });
}

//
pagesTitles.forEach((projectTitle) => {
  projectTitle.style.transform = "translateX(-400%)";
});

// animation onscroll
window.onscroll = () => {
  if (window.scrollY >= projectPage.offsetTop - 300) {
    filterBar.style.transform = "translateX(0%)";
    projectContainer.style.transform = "translateX(0%)";
  } else {
    filterBar.style.transform = "translateY(800%)";
    projectContainer.style.transform = "translateY(400%)";
  }
  if (screen.width >= 767) {
    //!
    activeLiWhilescroll();
  }
  sections.forEach((sec) => {
    if (
      window.scrollY >= sec.offsetTop - 400 &&
      window.screenY < sec.offsetTop + sec.offsetHeight
    ) {
      pagesTitles.forEach((projectTitle, i) => {
        if (pagesTitles[i].className.includes(sec.getAttribute("id"))) {
          pagesTitles[i].style.transform = "translateX(0%)";
        }
      });
    }
  });
};

// active li while scroll
function activeLiWhilescroll() {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 290;
    let Height = section.offsetHeight;
    let id = section.querySelector("id");
    if (top >= offset && top < offset + Height) {
      lis.forEach((li) => {
        li.classList.remove("activeNavLi");
        let sliceEnd = li.getAttribute("href").length;
        if (
          li.getAttribute("href").slice(1, sliceEnd) ===
          section.getAttribute("id")
        ) {
          li.childNodes[0].classList.add("scroll-animation");
        } else {
          li.childNodes[0].classList.remove("scroll-animation");
        }
      });
    }
  });
}

lis.forEach((li) => {
  if (screen.width <= 767) {
    li.parentElement.style.textAlign = "center";
    li.addEventListener("click", () => {
      navBar.style.left = "-100%";
      openNavBarBtn.classList.remove("hide");
    });
  }
});

// show hithub icon when hover any project

boxes.forEach((box, i) => {
  box.addEventListener("mouseenter", () => {
    mouseEnterShowGit(i);
  });
  box.addEventListener("mouseleave", () => {
    mouseLeaveHideGit(i);
  });
});
function mouseEnterShowGit(i) {
  githubCodes[i].classList.remove("hide");
  setTimeout(() => {
    githubCodes[i].style.right = "50%";
  }, 10);
}

function mouseLeaveHideGit(i) {
  githubCodes[i].classList.add("hide");
  setTimeout(() => {
    githubCodes[i].style.right = "0%";
  }, 10);
}

// add my skills to skills box at introdaction section
let skillsContainer = document.querySelector(".box.skills .skills-down");
console.log(skillsContainer);
let skills = {
  data: [
    {
      language: "html",
      progress: "90%",
      img: "./photo/skills&lagueges/html-5.png",
    },
    {
      language: "CSS",
      progress: "85%",
      img: "./photo/skills&lagueges/css-3.png",
    },
    {
      language: "SASS",
      progress: "82%",
      img: "./photo/skills&lagueges/sass.png",
    },
    {
      language: "C++",
      progress: "75%",
      img: "./photo/skills&lagueges/c-.png",
    },
    {
      language: "JS",
      progress: "69%",
      img: "./photo/skills&lagueges/js.png",
    },
    // {
    //   language: "Tailwind",
    //   progress: "59%",
    // },
  ],
};

for (let skill of skills.data) {
  addSkill(skill);
}

function addSkill(skill) {
  let skillcontainerDiv = document.createElement("div");
  skillcontainerDiv.classList.add("skill");
  skillcontainerDiv.classList.add(skill.language);
  skillsContainer.append(skillcontainerDiv);

  let skillContent = `
          <div class="skill-name-img">
                  <img class="skill-img" src="${skill.img}"></img>
          </div>
          <div class="timeLine">
                <span class="progress" style= "width:${skill.progress}"></span>
          </div>
          <span style="background-color: #09fbff; border-radius:100% ; padding: 3px ; color:#191834">${skill.progress}</span>
    
  `;
  skillcontainerDiv.innerHTML = skillContent;
}
