const shows = [
  {
    image:"https://thumbnails.cbsig.net/_x/w1920/CBS_Production_Entertainment_VMS/2020/09/26/1795806787939/NICKELODEON_DOUG_041_286370_1920x1080.jpg", title:"Doug", year:"1991–1994", era:"classic", type:"animation", creator:"Jim Jinkins", poster:"assets/posters/00.svg",
    producer:"Jumbo Pictures / Nickelodeon (Nickelodeon seasons)", budget:"Not publicly disclosed",
    tags:["First Nicktoons","Coming-of-age"], color:"linear-gradient(145deg,#62c8ff,#3955a7)",
    description:"Doug Funnie navigates school, friendship, family and his imagination in Bluffington. The series helped establish Nickelodeon's original-animation identity.",
    why:"Its quiet, everyday storytelling made ordinary childhood problems feel like big adventures.",
    source:"https://en.wikipedia.org/wiki/Doug_(TV_series)"
  },
  {
    image:"https://knect365.imgix.net/uploads/HT-rugrats-02-jef-160809-16x9-992-be4288def00164e63cc44f83bad085b1.jpg?auto=format&fit=max", title:"Rugrats", year:"1991–2004", era:"classic", type:"animation", creator:"Arlene Klasky, Gábor Csupó & Paul Germain", poster:"assets/posters/01.svg",
    producer:"Klasky Csupo / Nickelodeon", budget:"Not publicly disclosed",
    tags:["Classic","Family","Imagination"], color:"linear-gradient(145deg,#ff8f3d,#ffcf33)",
    description:"Tommy, Chuckie, Angelica, Phil and Lil turn everyday life into giant adventures through a child's-eye view of the world.",
    why:"The show mixed comedy with surprisingly thoughtful ideas about childhood, family and imagination.",
    source:"https://en.wikipedia.org/wiki/Rugrats"
  },
  {
    title:"Rocko's Modern Life", year:"1993–1996", era:"classic", type:"animation", creator:"Joe Murray", poster:"assets/posters/02.svg",
    producer:"Joe Murray Productions / Nickelodeon", budget:"Not publicly disclosed",
    tags:["Satire","Weird","90s"], color:"linear-gradient(145deg,#53c7a4,#197f72)",
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Rocko%27s_Modern_Life_-_Rocko_as_seen_in_season_2.png",
    description:"Rocko is a mild-mannered wallaby trying to survive modern life with friends Heffer and Filburt.",
    why:"Its absurd visual comedy and layered jokes gave it a distinctive identity among 1990s cartoons.",
    source:"https://en.wikipedia.org/wiki/Rocko%27s_Modern_Life"
  },
  {
    image:"https://wallpapercat.com/w/full/7/4/3/737820-1920x1080-desktop-full-hd-hey-arnold-background-image.jpg", title:"Hey Arnold!", year:"1996–2004", era:"classic", type:"animation", creator:"Craig Bartlett", poster:"assets/posters/03.svg",
    producer:"Snee-Oosh, Inc. / Nickelodeon", budget:"Not publicly disclosed",
    tags:["City life","Friendship","Heart"], color:"linear-gradient(145deg,#ffbe38,#e85d2a)",
    description:"Football-headed Arnold and his friends grow up in a diverse urban neighborhood, dealing with school, family and complicated friendships.",
    why:"Under the jokes, it often explored empathy, loneliness, family problems and growing up.",
    source:"https://en.wikipedia.org/wiki/Hey_Arnold!"
  },
  {
    image:"https://thumbnails.cbsig.net/_x/w1200/CBS_Production_Entertainment_VMS/2020/09/27/1796039235888/NICKELODEON_THEWILDTHORNBERRYS_012_286390_1920x1080.jpg", title:"The Wild Thornberrys", year:"1998–2004", era:"classic", type:"animation", creator:"Arlene Klasky, Gábor Csupó, Steve Pepoon, David Silverman & Stephen Sustarsic", poster:"assets/posters/04.svg",
    producer:"Klasky Csupo / Nickelodeon", budget:"Not publicly disclosed",
    tags:["Adventure","Wildlife"], color:"linear-gradient(145deg,#7fc94a,#28754a)",
    description:"Eliza Thornberry travels the world with her documentary-making family and has the unusual ability to talk to animals.",
    why:"It combined family comedy with travel, wildlife and environmental themes.",
    source:"https://en.wikipedia.org/wiki/The_Wild_Thornberrys"
  },
  {
    image:"https://static.wikia.nocookie.net/spongebob/images/0/0a/Help_Wanted_086.png/revision/latest/scale-to-width-down/1200?cb=20191210005508", title:"SpongeBob SquarePants", year:"1999–present", era:"classic", type:"animation", creator:"Stephen Hillenburg", poster:"assets/posters/05.svg",
    producer:"Nickelodeon Animation Studio", budget:"Not publicly disclosed",
    tags:["Iconic","Comedy","Global"], color:"linear-gradient(145deg,#ffd72f,#35b6e9)",
    description:"Optimistic sea sponge SpongeBob lives in Bikini Bottom with Patrick, Squidward, Sandy, Mr. Krabs and the rest of the underwater crew.",
    why:"Its surreal comedy, memorable characters and enormous cultural footprint made it one of Nickelodeon's defining franchises.",
    source:"https://www.nickanimation.com/content/spongebob-squarepants/"
  },
  {
    image:"https://s3.amazonaws.com/intanibase/iad_screenshots/1999/14670/30logo.jpg", title:"The Fairly OddParents", year:"2001–2017", era:"2000s", type:"animation", creator:"Butch Hartman", poster:"assets/posters/06.svg",
    producer:"Frederator Studios / Nickelodeon", budget:"Not publicly disclosed",
    tags:["Magic","Comedy","2000s"], color:"linear-gradient(145deg,#4fbbff,#7e4cff)",
    image:"https://images.sr.roku.com/idType/roku/context/trc/id/7987d0aa204354858bf6b22dcc4e983b/images/titan/assets/aHR0cHM6Ly9zdGF0aWMtZGVsaXZlcnkuc3Iucm9rdS5jb20vMzVlMTQ3ZDgtNDkxOS00NDYxLWFmNTEtYmVjMTk3NmMxZjhkL2ltYWdlcy9UaGVfRmFpcmx5X09kZFBhcmVudHNfMDAwMTQ3X1JPS1VfU1ZPRF9Cb3hjb3Zlci5qcGc.jpg",
    description:"Timmy Turner receives two fairy godparents who can grant wishes — usually creating even bigger problems for him.",
    why:"The wish-based premise produced endless comedy while giving the show a colorful visual identity.",
    source:"https://en.wikipedia.org/wiki/The_Fairly_OddParents"
  },
  {
    image:"https://clip.cafe/clipimg/we-eagerly-await-one-of-uh.jpg", title:"Jimmy Neutron", year:"2002–2006", era:"2000s", type:"animation", creator:"John A. Davis", poster:"assets/posters/07.svg",
    producer:"DNA Productions / O Entertainment / Nickelodeon", budget:"Series budget not publicly disclosed",
    tags:["Science","Adventure","CGI"], color:"linear-gradient(145deg,#253d98,#55d8ff)",
    description:"Child genius Jimmy Neutron uses homemade inventions to solve problems in Retroville — often causing even bigger ones.",
    why:"It brought computer-generated animation, science jokes and kid-friendly sci-fi adventures into the Nicktoons lineup.",
    source:"https://en.wikipedia.org/wiki/The_Adventures_of_Jimmy_Neutron,_Boy_Genius"
  },
  {
    image:"https://images.plex.tv/photo?scale=2&size=large-480&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FqewIDYGbF3r5xUnipqBAxhAsxuR.jpg", title:"Danny Phantom", year:"2004–2007", era:"2000s", type:"animation", creator:"Butch Hartman", poster:"assets/posters/08.svg",
    producer:"Frederator Studios / Nickelodeon", budget:"Not publicly disclosed",
    tags:["Superhero","Ghosts","Action"], color:"linear-gradient(145deg,#0c1824,#69ff32)",
    image:"https://images.plex.tv/photo?scale=2&size=large-480&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FqewIDYGbF3r5xUnipqBAxhAsxuR.jpg",
    description:"A teenager becomes half-ghost after an accident and secretly protects Amity Park from supernatural threats.",
    why:"It stood out for its darker action-adventure tone, ghost mythology and superhero-style storytelling.",
    source:"https://en.wikipedia.org/wiki/Danny_Phantom"
  },
  {
    image:"https://s.yimg.com/lo/mysterio/api/8DF85A189122AF7A64605682F665D12D09ABAA4580E7FB2AC6A04798356A7F8F/subgraphmysterio/resizefill_w976_h548%3Bquality_80%3Bformat_webp/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Ftvline.com%2F67be426bf892351d3d599aa8a774bb35", title:"Avatar: The Last Airbender", year:"2005–2008", era:"2000s", type:"animation", creator:"Michael Dante DiMartino & Bryan Konietzko", poster:"assets/posters/09.svg",
    producer:"Nickelodeon Animation Studio", budget:"Not publicly disclosed",
    tags:["Fantasy","World-building","Adventure"], color:"linear-gradient(145deg,#ff8b35,#dd3f28)",
    description:"Aang, the last Air Nomad and Avatar, must master the four elements and restore balance to a world transformed by war.",
    why:"Its serialized story, character development, world-building and themes gave it unusual depth for a children's animated series.",
    source:"https://en.wikipedia.org/wiki/Avatar:_The_Last_Airbender"
  },
  {
    image:"https://img.tvspielfilm.de/83/8c/d5/5485aea3e4b01fab43d58c83.jpeg?im=Crop%2Crect%3D%280%2C0%2C4560%2C3001%29%2Cgravity%3DCenter%3BResize%2Cwidth%3D632", title:"iCarly", year:"2007–2012", era:"2000s", type:"live", creator:"Dan Schneider", poster:"assets/posters/10.svg",
    producer:"Schneider's Bakery / Nickelodeon", budget:"Not publicly disclosed",
    tags:["Live action","Web culture","Comedy"], color:"linear-gradient(145deg,#ff55a8,#7b54ff)",
    description:"Carly, Sam and Freddie create their own web show while juggling school, friendship, family and increasingly ridiculous situations.",
    why:"It captured the early internet-video era and turned a web-show premise into a major Nickelodeon sitcom.",
    source:"https://en.wikipedia.org/wiki/ICarly"
  },
  {
    image:"https://s3.amazonaws.com/intanibase/iad_screenshots/2018/50953/7logo.jpg", title:"The Loud House", year:"2016–present", era:"modern", type:"animation", creator:"Chris Savino", poster:"assets/posters/11.svg",
    producer:"Nickelodeon Animation Studio", budget:"Not publicly disclosed",
    tags:["Modern","Family","Comedy"], color:"linear-gradient(145deg,#7bd8ff,#6a5cff)",
    description:"Lincoln Loud is the middle child and only boy in a family of eleven children, making everyday life anything but quiet.",
    why:"Its large ensemble creates lots of different personalities and family dynamics while keeping a fast comedy rhythm.",
    source:"https://en.wikipedia.org/wiki/The_Loud_House"
  },
  {
    image:"https://m.media-amazon.com/images/M/MV5BZmI1NmUyM2QtODNmYS00ZDEzLTg3NWUtOGE1YWZmNDdhNTUyXkEyXkFqcGc%40._V1_.jpg", title:"Glitch Techs", year:"2020–2021", era:"modern", type:"animation", creator:"Eric Robles & Dan Milano", poster:"assets/posters/12.svg",
    producer:"Nickelodeon Animation Studio / Netflix", budget:"Not publicly disclosed",
    tags:["Gaming","Action","Tech"], color:"linear-gradient(145deg,#0d152e,#ff2e83)",
    description:"Two teenagers secretly work as Glitch Techs, hunting escaped video-game creatures in the real world.",
    why:"Its gaming references, energetic action and digital aesthetic made it feel different from traditional Nicktoons.",
    source:"https://en.wikipedia.org/wiki/Glitch_Techs"
  },
  {
    image:"https://bilder.fernsehserien.de/epg/epg-archiv/2021/03/21/532f20411441a1a10edf4f0a077a1abdda001ebe_c-w-970.jpg.jpg", title:"Drake & Josh", year:"2004–2007", era:"2000s", type:"live", creator:"Dan Schneider", poster:"assets/posters/13.svg",
    producer:"Schneider's Bakery / Nickelodeon", budget:"Not publicly disclosed",
    tags:["Live action","Sitcom","Comedy"], color:"linear-gradient(145deg,#f3a32f,#e84c39)",
    description:"Two very different teenagers become stepbrothers and try to survive school, family, friends and each other's completely different personalities.",
    why:"The mismatched-brothers setup created a steady stream of visual comedy and memorable sitcom situations.",
    source:"https://en.wikipedia.org/wiki/Drake_%26_Josh"
  },
  {
    image:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/408f80089d3afce51625f169b0193f22e4765f2b04a51ea985a3f3fd48808e3d._V_SX1080_.jpg", title:"Henry Danger", year:"2014–2020", era:"modern", type:"live", creator:"Dan Schneider & Dana Olsen", poster:"assets/posters/14.svg",
    producer:"Schneider's Bakery / Nickelodeon", budget:"Not publicly disclosed",
    tags:["Live action","Superhero","Comedy"], color:"linear-gradient(145deg,#20a9ff,#3c3b8f)",
    description:"Teenager Henry Hart secretly becomes Kid Danger, sidekick to superhero Captain Man, while trying to keep his double life under control.",
    why:"It combined superhero action with sitcom comedy and became a major part of Nickelodeon's 2010s live-action lineup.",
    source:"https://en.wikipedia.org/wiki/Henry_Danger"
  }
];

const grid = document.getElementById("showGrid");
const search = document.getElementById("searchInput");
const filters = document.getElementById("filters");
const empty = document.getElementById("emptyState");
const modal = document.getElementById("modal");
const modalPoster = document.getElementById("modalPoster");
const modalTitle = document.getElementById("modalTitle");
const modalKicker = document.getElementById("modalKicker");
const modalDescription = document.getElementById("modalDescription");
const modalFacts = document.getElementById("modalFacts");
const modalWhy = document.getElementById("modalWhy");
const sourceLink = document.getElementById("sourceLink");
const toast = document.getElementById("toast");

let activeFilter = "all";

function posterStyle(show){
  const image = show.image || show.poster;

  if (image) {
    return `style="background-image: url('${image}'); background-size: cover; background-position: center;"`;
  }

  return `style="background: ${show.color}"`;
}

function render(){
  const term = search.value.trim().toLowerCase();
  const result = shows.filter(s => {
    const matchesFilter = activeFilter === "all" ||
      s.era === activeFilter || s.type === activeFilter;
    const haystack = `${s.title} ${s.creator} ${s.tags.join(" ")} ${s.description}`.toLowerCase();
    return matchesFilter && haystack.includes(term);
  });

  grid.innerHTML = result.map((s,i) => `
    <article class="show-card" data-index="${shows.indexOf(s)}" tabindex="0" aria-label="Open ${s.title}">
      <div class="poster ${(s.image || s.poster) ? "has-image" : ""}" ${posterStyle(s)}>
        <span class="badge">${s.type === "live" ? "LIVE ACTION" : "ANIMATED"}</span>
        <div class="poster-title">${s.title}</div>
      </div>
      <div class="card-body">
        <div class="card-meta"><span>${s.year}</span><span>${s.era === "classic" ? "90s" : s.era === "2000s" ? "00s" : "NEW"}</span></div>
        <h3>${s.title}</h3>
        <p>${s.description}</p>
        <div class="tag-row">${s.tags.slice(0,2).map(t=>`<span class="tag">${t}</span>`).join("")}</div>
      </div>
    </article>
  `).join("");

  empty.style.display = result.length ? "none" : "block";
  document.getElementById("showCount").textContent = shows.length;

  document.querySelectorAll(".show-card").forEach(card => {
    card.addEventListener("click",()=>openModal(Number(card.dataset.index)));
    card.addEventListener("keydown",e=>{if(e.key==="Enter")openModal(Number(card.dataset.index))});
  });
}

function openModal(index){
  const s = shows[index];
  modalTitle.textContent = s.title;
  modalKicker.textContent = `${s.year} • ${s.type === "live" ? "Live action" : "Animation"}`;
  modalDescription.textContent = s.description;
  modalWhy.textContent = s.why;
  modalFacts.innerHTML = `
    <div class="fact"><span>Creator(s)</span><strong>${s.creator}</strong></div>
    <div class="fact"><span>Producer / Studio</span><strong>${s.producer}</strong></div>
    <div class="fact"><span>Production budget</span><strong>${s.budget}</strong></div>
    <div class="fact"><span>Era</span><strong>${s.era === "classic" ? "1990s classic" : s.era === "2000s" ? "2000s" : "2010s–present"}</strong></div>
  `;
  const poster = s.image || s.poster;
  if(poster){
    modalPoster.style.backgroundImage = `url('${poster}')`;
    modalPoster.style.background = "";
    modalPoster.innerHTML = "";
  } else {
    modalPoster.style.background = s.color;
    modalPoster.style.backgroundImage = "";
    modalPoster.innerHTML = `<div style="height:100%;display:grid;place-items:center;color:#fff;font:800 3rem 'Baloo 2';padding:30px;text-align:center">${s.title}</div>`;
  }
  sourceLink.href = s.source;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
}

function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}

function showToast(message){
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.t);
  showToast.t = setTimeout(()=>toast.classList.remove("show"),3000);
}

filters.addEventListener("click", e=>{
  const btn = e.target.closest(".filter");
  if(!btn)return;
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  activeFilter = btn.dataset.filter;
  render();
});

search.addEventListener("input", render);
document.getElementById("closeModal").addEventListener("click",closeModal);
document.getElementById("modalBackdrop").addEventListener("click",closeModal);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

document.getElementById("randomBtn").addEventListener("click",()=>{
  const index = Math.floor(Math.random()*shows.length);
  openModal(index);
});

document.getElementById("factsBtn").addEventListener("click",()=>{
  const facts = [
    "The original Nicktoons launched in 1991 with Doug, Rugrats and The Ren & Stimpy Show.",
    "Nickelodeon commissioned eight short animated pilots during the early Nicktoons development process.",
    "SpongeBob premiered on July 17, 1999 and was created by marine-biology-trained animator Stephen Hillenburg.",
    "Television budgets are often kept private, so this archive deliberately avoids making up figures.",
    "Nickelodeon opened its dedicated animation studio in Burbank in 1998."
  ];
  showToast(facts[Math.floor(Math.random()*facts.length)]);
});

render();
