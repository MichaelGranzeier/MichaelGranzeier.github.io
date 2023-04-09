function AboutMe(){
  document.getElementById("main").innerHTML = `
  <h1>Michael Granzeier</h1>
  <section id="Skills">
      <h2>About Me</h2>
      <h4>My Skills</h4>
      <p>C# • .NET • EF Core • JavaScript • MVC • HTML • CSS (Flexbox and Grid) • TDD • Agile (Scrum) • Webpack • Object Oriented Programming (OOP) • JSON • REST APIs • Responsive Design / Mobile • Relational Databases • Source Control / GitHub • Bootstrap</p>            
      <P>I have been interested in the wonders of technology from a young age. It was no surprise that I would end up a student at We Can Code IT to pursue my career in something I love most.
          From sauntering to coding, I began my informal "training" from my teenage years. After serving in the US Army, I used the resources afforded to me and the skills and connections I acquired to finally pursue formal learning for my pathway into the fascinating career of software development.</P>
      <P>I was born and raised in Pittsburgh PA, being one of nine children. I learned early on the foundation of duty, respect, responsibility, and obligation. These character traits have formed the kind of student and worker I am today. I value learning and feel it is the purpose of life. That is what I love about the field so much, the ability to expand beyond preconceived ideas and limits.</P>
      <p>I hope to work in an environment where I am part of a team, forever learning, growing, and teaching as we complete our common goals.</p>
  </section>`
}

function MyProjects(){
  document.getElementById("main").innerHTML = `
  <h1>Michael Granzeier</h1>
  <section id="MyProjects">
  <h2>Projects</h2>
  <p>These are my Project displaying my ability to write code.</p>
  <div id="Projects">
      <article>
          <a href="https://github.com/MichaelGranzeier/FizzBuzz">FizzBuzz</a>
          <img src="images/FizzBuzz Image.jpg" alt="Words saying FizzBuzz.">
          <p>A demonstration of a basic understanding of programming.</p>
      </article>
      <article>
          <a href="https://github.com/2022-Summer-Cohort/m1-loops-MichaelGranzeier">Loops</a>
          <img src="images/Loop.jpg" alt="a red and a blue arrows in a circle pointing clockwise.">
          <p>A demonstration of my understanding of loops.</p>
      </article>
      <article>
          <a href="https://github.com/2022-Summer-Cohort/m1-virtual-pet-MichaelGranzeier">Virtual Pet</a>
          <img src="/images/dog-houses-pet-sitting-kennel-clip-art-dog.png" alt="Dog in a dog house with a dog bowl in front.">
          <p>A demonstration of my knowledge and understanding of C#.</p>
      </article>
      <article>
          <a href="https://github.com/MichaelGranzeier/MichaelGranzeier.github.io">Portfolio</a>
          <img src="images/Portfolio.png" alt="file bag full of files.">
          <p>A demonstration of my HTML, JaveScript and CSS skills.</p>
      </article>
      <article>
          <a href="https://github.com/2022-Summer-Cohort/m3-blog-platform-MichaelGranzeier">Blog Platform</a>
          <img src="images/Blog Image.jpg" alt="A blue and a green chat bobble with the green one saying Blog.">
          <p>A demonstration of my MVC knowledge and skills.</p>
      </article>
      <article>
          <a href="https://github.com/2022-Summer-Cohort/m3-reviews-site-coding-bytes">Reviews Site</a>
          <img src="images/Review.jpg" alt="A blue chat bobble saying reviews with five stars under the word.">
          <p>A demonstration of my ability to work in a group of three.</p>
      </article>
      <article>
          <a href="https://github.com/2022-Summer-Cohort/m4-donut-maker-MichaelGranzeier">Donut Maker</a>
          <img src="images/Donut.png" alt="A donut with pink frosting and multicolored sprinkles">
          <p>A demonstration of my knowledge of JavaScript.</p>
      </article>
      <article>
          <a href="https://github.com/2022-Summer-Cohort/m5-web-api-MichaelGranzeier">Web-API</a>
          <img src="images/Web-API.jpg" alt="blue outline of a gear with api writen in the middle">
          <p>A demonstration of my ability to use APIs.</p>
      </article>
      <article>
          <a href="https://github.com/2022-Summer-Cohort/m5-album-collections-blackshirts">Album-Collections</a>
          <img src="images/album collection.jpg" alt="four records with music notes in front">
          <p>A demonstration of my ability work in a team to create a rest API.</p>
      </article>
      <article>
          <a href="https://github.com/2022-Summer-Cohort/Summer2022-MoodPlus">MoodPlus</a>
          <img src="images/moodplusv10.png" alt="Two hands holding up a tree.">
          <p>A group prject that shows my ability to work in large groups.</p>
      </article>
      <article>
          <a href="https://github.com/MichaelGranzeier/Hamurabi">Hammurabi</a>
          <img src="images/Hammurabi.png" alt="A black and white picture of hammurabi.">
          <p>A prject that shows my ability to work on my own with JS.</p>
      </article>
  </div>
</section>`

document.getElementById("Projects").style.color = "black";
}

//mode buttons
function nm(){
    document.body.style.backgroundColor = "black"
    document.getElementById("main").style.color = "green";
    document.getElementById("Projects").style.color = "black";
}
    
function dm(){
    document.body.style.backgroundColor = "white"
    document.getElementById("main").style.color = "black";
}

//modal

const modalOne = document.getElementById("navModal");
modalOne.style.display = "none";

// Get the button that opens the modal
const btnOne = document.getElementById("nav");

// Get the <span> element that closes the modal
const spanOne = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnOne.onclick = function() {
  modalOne.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanOne.onclick = function() {
  modalOne.style.display = "none";
}