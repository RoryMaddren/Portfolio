
document.addEventListener("DOMContentLoaded", () => {
  // === FUNCTION: Initialize button fade logic ===
  function initOverlayButtons(root = document) {
    const writtenSection = root.querySelector(".content-port");
    if (!writtenSection) return;

    const viewPhotoBtn = root.querySelector(".chapter-selector .view-photo");
    const relatedBtn = root.querySelector(".related-entries");
    const chapterSplitterBtn = root.querySelector(".chapter-splitter");
    const chapterSplitterText = chapterSplitterBtn?.querySelector("p");

    const allButtons = [viewPhotoBtn, relatedBtn, chapterSplitterBtn].filter(Boolean);
    const originalContent = writtenSection.innerHTML;
    let activeButton = null;

    // === Fade swap animation ===
    function fadeSwap(element, newContent) {
      element.classList.remove("show");
      setTimeout(() => {
        element.innerHTML = newContent;
        requestAnimationFrame(() => element.classList.add("show"));
      }, 800);
    }

    function setActiveButton(button) {
      allButtons.forEach(btn => {
        const target = btn === chapterSplitterBtn ? chapterSplitterText : btn;
        target.style.color = btn === button ? "white" : "grey";
      });
      activeButton = button;
    }

    function resetButtons() {
      allButtons.forEach(btn => {
        const target = btn === chapterSplitterBtn ? chapterSplitterText : btn;
        target.style.color = "";
      });
      activeButton = null;
    }

    // --- Button actions ---
    if (viewPhotoBtn) {
  viewPhotoBtn.addEventListener("click", () => {
    // Map overlay IDs to their corresponding photo content
    const photoMap = {
      "entry-02-overlay": {
        title: "My Grandparents — 23.04.2004",
        src: "./images/entry-imgs-full/full-img/cara-full.png"
      },
      "rorys-entry-overlay": {
        title: "My Mum — 29.01.1979",
        src: "./images/entry-imgs-full/full-img/rory-full.png"
      },
      "matts-entry-overlay": {
        title: "Garry — 22.10.2005",
        src: "./images/entry-imgs-full/full-img/matt-full.png"
      },
      "eifel-overlay": {
        title: "Me and Her — 03.04.2008",
        src: "./images/entry-imgs-full/full-img/eiffel-full.png"
      },
      "jef-overlay": {
        title: "Me with my sister — 19.09.2020",
        src: "./images/entry-imgs-full/full-img/jeffritz-full.png"
      },
      "prim-overlay": {
        title: "Old Photo of My Dad — 15.04.1968",
        src: "./images/entry-imgs-full/full-img/prim-full-2.png"
      },
      "eilish-overlay": {
        title: "Eilish — 12.09.2024",
        src: "./images/entry-imgs-full/full-img/eilish-full.png"
      },
      "sandy-overlay": {
        title: "Old Shot of My Dad — 11.09.2011",
        src: "./images/entry-imgs-full/full-img/sandy-full.png"
      },
      "josh-overlay": {
        title: "My Mum and Dad — 12.01.1986",
        src: "./images/entry-imgs-full/full-img/josh-full.png"
      },
      "liam-overlay": {
        title: "Liam — 15.04.1990",
        src: "./images/entry-imgs-full/full-img/liam-full.png"
      },
      "mehmet-overlay": {
        title: "Mehmet — 15.04.1990",
        src: "./images/entry-imgs-full/full-img/alt-full.png"
      },
      "zak-overlay": {
        title: "My Dad Back in the Day — 12.07.1978",
        src: "./images/entry-imgs-full/full-img/zak-full.png"
      }
    };

      const overlayId = root.id;
    const photo = photoMap[overlayId];

    if (photo) {
      fadeSwap(
        writtenSection,
        `<p class="photograph-title">${photo.title}</p>
         <img class="photograph" src="${photo.src}" alt="photograph" style="max-width:100%;">`
      );
    } else {
      // fallback to original content if overlay ID not mapped
      fadeSwap(writtenSection, originalContent);
    }



        setActiveButton(viewPhotoBtn);
      });
    }

    if (relatedBtn) {
      relatedBtn.addEventListener("click", () => {
        fadeSwap(
          writtenSection,
          `<div class="change-all">
            <div class="individual-entry">
              <p class="text-entry-opened-entry">
              I live away from my dad, he lives a few hours away from me. After my parents split a few years ago, he realised that he wasn’t in the right place for him, so he’s gone off in his own journey to find his place in the world I suppose...
              </p>
        <div class="triggers-opened-entry">
                <p class="triggers-on">ABUSE</p>
                <p class="triggers-on">GRIEF</p>
              </div>
              <div class="categories-entry-opened-entry">
                <p>PARENTAL SEPARATION</p>
                <p>WRITTEN ENTRY</p>
                <p>WORD COUNT — 389</p>
                <p>SEPARATION - 2 YEARS</p>
              </div>
              <div class="entry-info">
                <p class="entry-number-text">Entry 08</p>
                <p class="date-of-entry">08.08.25</p>
              </div>
              <div class="entry-buttons-opened-entry">
                <div class="audio-button-off"><p>PLAY AUDIO</p></div>
                <div class="open-entry-button button-stylings"><p>OPEN FULL ENTRY</p></div>
              </div>
            </div>
          </div>`
        );
        setActiveButton(relatedBtn);
      });
    }

    if (chapterSplitterBtn) {
      chapterSplitterBtn.addEventListener("click", () => {
        if (activeButton === chapterSplitterBtn) {
          fadeSwap(writtenSection, originalContent);
          resetButtons();
        } else {
          fadeSwap(writtenSection, originalContent);
          setActiveButton(chapterSplitterBtn);
        }
      });
    }

    // --- Hover effects ---
    allButtons.forEach(btn => {
      const target = btn === chapterSplitterBtn ? chapterSplitterText : btn;
      btn.addEventListener("mouseenter", () => (target.style.color = "white"));
      btn.addEventListener("mouseleave", () => {
        target.style.color = btn === activeButton ? "white" : "grey";
      });
    });

    writtenSection.classList.add("fade", "show");
  }

  // === Initialize buttons for the main page ===
  initOverlayButtons(document);

  // === MATTS ENTRY OVERLAY ===
  const mattsEntryButton = document.getElementById("matts-entry-open-button");

  const mattsOverlay = document.createElement("div");
  mattsOverlay.id = "matts-entry-overlay";
  Object.assign(mattsOverlay.style, {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(11, 11, 11, 0.807)",
    overflowY: "auto",
    opacity: "0",
    visibility: "hidden",
    transition: "opacity 0.6s ease, visibility 0.6s ease",
    backdropFilter: "blur(5px)",
    zIndex: "9000"
  });

  document.body.appendChild(mattsOverlay);

  mattsOverlay.innerHTML = `
    <div class="matts-entry-content">
      <div class="entry-view-lines"><span></span><span></span><span></span><span></span><span></span><span></span></div>
      <div class="overlay-piece">
       <div class="top-line-pieces">
    <div class="entry-details">
        <h1 class="entry-title">Entry — 03</h1>
        <span class="small-details-underneath">
            <p class="date-of-entry">09.11.2025</p>
                <p>&bull;</p>
            <p class="time-of-entry">Entry Time 04:21AM</p>
        </span>
    </div>
          <span class="close-overlay-button-span"><p>CLOSE ENTRY</p><img class="cross-img" src="./images/entry-page/x.png" alt="X"/></span>
        </div>
       <div class="second-line-pieces">
<div class="categories-opened-entry">
<p>WRITTEN ENTRY</p>
<p>03:34:52</p>
<p>SEPARATION, 8.5 YEARS</p>
<p>POOR CONNECTION</p>
<p>&bull;</p>
<p>FRIEND SEPARATION</p>
</div>
          <div class="chapter-selector">
            <span class="chapter-splitter"><p>View Entry</p><p class="read-through-percent"></p></span>
            <p class="related-entries">Related Entries</p>
            <p class="view-photo">View Photo</p>
          </div>
          <div class="content-port">
            <div class="written-section-2">
              <h3 class="transcript-heading">No Way of Knowing:</h3>
                 <p class="entry-writing">I live away from family friend of me and my mums, his name was Garry. He moved to Australia when I was younger... probably about 8-9 years ago — and we ended up staying here in New Zealand.
<br><br>
I think when we he left it was quite hard, even though at the time Id liked to have thought I took in stride, but I think it was actually quite hard since I saw him about every Sunday. I grew up in a single parent household, so I think those simple things he did for me — like going out for lunch or doing some kind of simple activity together was really important to me, just having that central male role model.
<br><br>
At the time I thought — in that sort of “I’ll be all good”, kind of way, but I missed that kind of guidance he gave me. He taught me a lot about I suppose... the more male-oriented type things my mum wasn’t able to... he was kind of like a bloke’s-bloke so I think after he left I just didn’t learn a lot of stuff that I would’ve if he was still around in that type of vain.
Even now I don’t know how to do a lot of those things, like working on a car, fixing things, all that...
<br><br>
(As I said)I haven’t seen him in 8-9 years and so I have no idea how he’s doing, but I have no idea if he’s even alive. He wasn’t super old but he did have a lot of bad habits, like he was a smoker, just stuff like that.
<br><br>
Sometimes I sit there and think - I wonder what hes up to, but I have no way of knowing. I think with the separation and not really being able to contact him there is just no way to know, and he was never the type to have social media or anything so without his number or just seeing him its not really possible.
<br><br>
Honestly I wasn’t that great of a kid, I was pretty ignorant and thought I knew more than I did. So I didn’t really appreciate the things he did for me growing up until years after... As a kid I din’t give him a whole lot, he (did a lot) he even he took me on trips. Just things he didn’t have to do. Stuff that really opened my perspective, so I would say thats a big regret of mine — never being able to thank him in that way for all of those things I took for granted. 

            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  mattsEntryButton.addEventListener("click", e => {
    e.preventDefault();
    mattsOverlay.style.visibility = "visible";
    mattsOverlay.style.opacity = "1";
    document.body.style.overflow = "hidden";
    initOverlayButtons(mattsOverlay);
  });

  function closeMattsOverlay() {
    mattsOverlay.style.opacity = "0";
    setTimeout(() => {
      mattsOverlay.style.visibility = "hidden";
      document.body.style.overflow = "auto";
    }, 600);
  }

  mattsOverlay.addEventListener("click", e => {
    if (
      e.target.closest(".close-overlay-button") ||
      e.target.classList.contains("cross-img") ||
          e.target.matches(".close-overlay-button-span p") ||
      e.target.classList.contains("close-overlay-button-span")
    ) {
      closeMattsOverlay();
    }
  });

  // === RORY’S ENTRY OVERLAY ===
  const rorysEntryButton = document.getElementById("rorys-entry-open-button");

  const rorysOverlay = document.createElement("div");
  rorysOverlay.id = "rorys-entry-overlay";
  Object.assign(rorysOverlay.style, {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(11, 11, 11, 0.807)",
    overflowY: "auto",
    opacity: "0",
    visibility: "hidden",
    transition: "opacity 0.6s ease, visibility 0.6s ease",
    backdropFilter: "blur(5px)",
    zIndex: "9000"
  });

  document.body.appendChild(rorysOverlay);

  rorysOverlay.innerHTML = `
    <div class="rorys-entry-content">
      <div class="entry-view-lines"><span></span><span></span><span></span><span></span><span></span><span></span></div>
      <div class="overlay-piece">
        <div class="top-line-pieces">
          <div class="entry-details">
            <h1 class="entry-title">Entry — 01</h1>
            <span class="small-details-underneath">
              <p class="date-of-entry">06.08.2025</p><p>&bull;</p><p class="time-of-entry">Entry Time 11:53PM</p>
            </span>
          </div>
          <span class="close-overlay-button-span"><p>CLOSE ENTRY</p><img class="cross-img" src="./images/entry-page/x.png" alt="X"/></span>
        </div>
        <div class="second-line-pieces">
          <div class="categories-opened-entry">
            <p>WRITTEN ENTRY</p><p>412 WORDS</p><p>SEPARATION, 8 YEARS</p><p>MODERATELY CONNECTED</p><p>&bull;</p><p>PARENTAL SEPARATION</p>
          </div>
          <div class="chapter-selector">
            <span class="chapter-splitter"><p>View Entry</p><p class="read-through-percent"></p></span>
            <p class="related-entries">Related Entries</p>
            <p class="view-photo">View Photo</p>
          </div>
          <div class="content-port">
            <div class="written-section-2">
              <h3 class="transcript-heading">Fax Machine Drawings</h3>
              <p class="entry-writing">Growing up, I spent a lot of time away from both parents, but mainly though it was with my dad. It was pretty complicated and I think it was in some ways really unique to me in how the separation was, and in a lot of ways really similar to a lot of people.
<br><br>
My parents divorced when I was younger, around 6 or 7 years old, I remember them being together but only a few memories here and there, and a lot of them weren’t great. They fought a lot and the main reason my mum chose to leave is because he started to get really abusive with us, and as soon as teachers at school were getting concerned about the bruises my brother kept showing up with she decided she had it was time to leave.
<br><br>
We lived in Australia at the time and my mum decided to move back to New Zealand when it happen and left my dad there. So that made the relationship I had with him after that really distant, as well as really strange.
<br><br>
He came over to visit when he could, did the phone call thing, all that type of stuff. I have a really specific memory of when I learnt how to use the fax/photo copier and I would fax him these drawings I drew in sharpie, and he would fax some them back in between work. They were really simple drawings but we were just trying to draw funny little pictures we thought would make the other one laugh. I feel like that memory really impacted me.
<br><br>
I remember feeling like it was a part of my life that really spring boarded my love for drawing and art. Just coming from this small happen-stance instance, but I think about that memory a lot. I can acknowledge now that while its a really nice and unique memory its also not that normal to have to talk to your dad like that, and it’s more strange to think back on it now than anything.
<br><br>
Id say my relationship with him now its quite strained though. We just aren’t that similar. I don’t hate him, we’re friendly enough. Its just a lot different to how it was and I do feel that he doesn’t have the same type of interest in my life as he does for his own. I’m old enough now to think thats okay, and while things could be better, I’m completely fine with the way that it is.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  rorysEntryButton.addEventListener("click", e => {
    e.preventDefault();
    rorysOverlay.style.visibility = "visible";
    rorysOverlay.style.opacity = "1";
    document.body.style.overflow = "hidden";
    initOverlayButtons(rorysOverlay);
  });

  function closeRorysOverlay() {
    rorysOverlay.style.opacity = "0";
    setTimeout(() => {
      rorysOverlay.style.visibility = "hidden";
      document.body.style.overflow = "auto";
    }, 600);
  }

  rorysOverlay.addEventListener("click", e => {
    if (
      e.target.closest(".close-overlay-button") ||
      e.target.classList.contains("cross-img") ||
          e.target.matches(".close-overlay-button-span p") ||
      e.target.classList.contains("close-overlay-button-span")
    ) {
      closeRorysOverlay();
    }
  });






  // === ENTRY 02 OVERLAY ===
  const entry02Button = document.getElementById("entry-02-open-button");

  const entry02Overlay = document.createElement("div");
  entry02Overlay.id = "entry-02-overlay";
  Object.assign(entry02Overlay.style, {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(11, 11, 11, 0.807)",
    overflowY: "auto",
    opacity: "0",
    visibility: "hidden",
    transition: "opacity 0.6s ease, visibility 0.6s ease",
    backdropFilter: "blur(5px)",
    zIndex: "9000"
  });

  document.body.appendChild(entry02Overlay);

  entry02Overlay.innerHTML = `
    <div class="caras-entry-content">
      <div class="entry-view-lines"><span></span><span></span><span></span><span></span><span></span><span></span></div>
      <div class="overlay-piece">
        <div class="top-line-pieces">
         <div class="entry-details">
        <h1 class="entry-title">Entry — 02</h1>
        <span class="small-details-underneath">
            <p class="date-of-entry">23.09.2025</p>
                <p>&bull;</p>
            <p class="time-of-entry">Entry Time 09:51PM</p>
        </span>
    </div>
          <span class="close-overlay-button-span"><p>CLOSE ENTRY</p><img class="cross-img" src="./images/entry-page/x.png" alt="X"/></span>
        </div>
<div class="second-line-pieces">
<div class="categories-opened-entry">
<p>AUDIO ENTRY</p>
<p>03:34:01</p>
<p>SEPARATION, 12 YEARS</p>
<p>POOR CONNECTION</p>
<p>&bull;</p>
<p>GRANDPARENT SEPARATION</p>
</div>
          <div class="chapter-selector">
            <span class="chapter-splitter"><p>View Entry</p><p class="read-through-percent"></p></span>
            <p class="related-entries">Related Entries</p>
            <p class="view-photo">View Photo</p>
          </div>








          <div class="content-port">
            <div class="written-section-2">
              <h3 class="transcript-heading">Extended Guilt</h3>
                 <p class="entry-writing">I am separated form my grandparents, they live in the UK. I originally lived in the UK as well, and I moved to New Zealand, which is basically on the other side of the world — with a very big time difference. So the only time I could speak the them is either really early in the morning or really late at night.
<br><br>
I was too young to understand originally, but once I got older I felt really guilty because there had been so much time since I had properly talked to them. There was just a disconnect and we weren’t as close as we used to be.
So I felt a lot of guilt and a lot of sadness because we used to be really close, when we lived together. 
<br><br>
Then later on, they passed away... and that gave me a whole myriad of extended grief and guilt, because I never got to really say goodbye, and they never really knew me that well after I grew up.
<br><br>
When I went over to go to my grandads funeral they had a photo of us up on the fridge so they were always thinking about us but I hadn’t really seen or spoken to them for such a long time and thats my biggest regret - not being able to say goodbye to my grandad. 
<br><br>
It’s the same with my grandma, she passed soon after and during the covid lock downs so we couldn’t even attend. I felt so far away. It plagues me, not being able to say goodbye. I hope that they knew I loved them.
<br><br>
<br><br>

A lot of my family is still in the UK now, and I still feel really largely separated from them, and while I’m older and I have the ability to reach out though social media and such like, I still find it really difficult to reach out. Like I don’t really know my family anymore. We have a reasonable relationship, its just really distant...
<br><br>
Because of social media I am still able to interact with their posts and it doesn't have to be direct communication, especially because of the time difference it helps. But I don’t really interact more than liking and the occasional Christmas or birthday message. I regret a lot not reaching out more, but I am not sure how to do that either... How to start that conversation. especially because im so different now, I have changed a lot as a person — so its hard to do that without a post to interact with. I can’t just message them and ask how its going... as much as I want to — and I regret that.
</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  entry02Button.addEventListener("click", e => {
    e.preventDefault();
    entry02Overlay.style.visibility = "visible";
    entry02Overlay.style.opacity = "1";
    document.body.style.overflow = "hidden";
    initOverlayButtons(entry02Overlay);
  });

  function closeEntry02Overlay() {
    entry02Overlay.style.opacity = "0";
    setTimeout(() => {
      entry02Overlay.style.visibility = "hidden";
      document.body.style.overflow = "auto";
    }, 600);
  }

  entry02Overlay.addEventListener("click", e => {
    if (
      e.target.closest(".close-overlay-button") ||
      e.target.classList.contains("cross-img") ||
          e.target.matches(".close-overlay-button-span p") ||
      e.target.classList.contains("close-overlay-button-span")
    ) {
      closeEntry02Overlay();
    }
  });








// === Eifel ===
const eifelButton = document.getElementById("eifel-open-button");

const eifelOverlay = document.createElement("div");
eifelOverlay.id = "eifel-overlay";
Object.assign(eifelOverlay.style, {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(11, 11, 11, 0.807)",
  overflowY: "auto",
  opacity: "0",
  visibility: "hidden",
  transition: "opacity 0.6s ease, visibility 0.6s ease",
  backdropFilter: "blur(5px)",
  zIndex: "9000"
});

document.body.appendChild(eifelOverlay);

eifelOverlay.innerHTML = `
    <div class="rorys-entry-content">
      <div class="entry-view-lines"><span></span><span></span><span></span><span></span><span></span><span></span></div>
      <div class="overlay-piece">
           <div class="top-line-pieces">
    <div class="entry-details">
        <h1 class="entry-title">Entry — 04</h1>
        <span class="small-details-underneath">
            <p class="date-of-entry">07.15.2025</p>
                <p>&bull;</p>
            <p class="time-of-entry">Entry Time 03:45PM</p>
        </span>
    </div>
          <span class="close-overlay-button-span"><p>CLOSE ENTRY</p><img class="cross-img" src="./images/entry-page/x.png" alt="X"/></span>
        </div>
       <div class="second-line-pieces">
<div class="categories-opened-entry">
<p>AUDIO ENTRY</p>
<p>03:34:52</p>
<p>SEPARATION, 10 YEARS</p>
<p>CLOSE CONNECTION</p>
<p>&bull;</p>
<p>FRIEND SEPARATION</p>
</div>
          <div class="chapter-selector">
            <span class="chapter-splitter"><p>View Entry</p><p class="read-through-percent"></p></span>
            <p class="related-entries">Related Entries</p>
            <p class="view-photo">View Photo</p>
          </div>
          <div class="content-port">
            <div class="written-section-2">
              <h3 class="transcript-heading">Still Going Strong</h3>
                  <p class="entry-writing">I am currently separated form one of my childhood best friends. 

I moved away from my home country and so did she (to a different country) so we both left in a way. I left because my family wanted to find a better lifestyle. My parents felt that Indonesia wasn’t a very good place to grow up in and my brother was severely bullied while we were there, and they felt that it was probably because of the social cues and society norms of the area. We didn't speak Indonesian, and he was really out of place there so he was bullied a lot for that. My parents felt that moving countries would fix that.
<br><br>
I wasn't worried about the distance and how that would effect our relationship but as time went on I didn't realise how hard it would be to maintain that type of relationship with her. We’re still friends now but there were a lot of bumps along the way. She relied on me heavily as an anchor for herself when she began to struggle with her own friendships... I was the only constant in her life, and so when I wasn’t there anymore we ended up having a pretty big fight over it.
<br><br>
But I was also experiencing a lot of burnout and stress with high school and trying to keep my grades high, that I became very closed off, and didn’t want to talk to anyone. I think to her that must’ve felt like I wasn’t talking to just her and I didn’t value our friendship as much as she did. (It would’ve) Felt a little once sided I guess. Especially since I only talked to her through text because of the distance... I just stopped texting.
<br><br>
But we were able to talk about it and after I explained why I was acting that way we were able to get past it. When I think about it now, it was really crucial for our relationship. Because we sort of understand now how the other person works, if anything it solidified that our relationship is still strong — and while I do feel bad about the times — I didn’t put as much effort in tot the relationship as she did... and I regret making her feel that way. 
In my mind I was just focusing on just trying to get through high school. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  eifelButton.addEventListener("click", e => {
    e.preventDefault();
    eifelOverlay.style.visibility = "visible";
    eifelOverlay.style.opacity = "1";
    document.body.style.overflow = "hidden";
    initOverlayButtons(eifelOverlay);
  });

  function closeEifelOverlay() {
    eifelOverlay.style.opacity = "0";
    setTimeout(() => {
      eifelOverlay.style.visibility = "hidden";
      document.body.style.overflow = "auto";
    }, 600);
  }

  eifelOverlay.addEventListener("click", e => {
    if (
      e.target.closest(".close-overlay-button") ||
      e.target.classList.contains("cross-img") ||
          e.target.matches(".close-overlay-button-span p") ||
      e.target.classList.contains("close-overlay-button-span")
    ) {
      closeEifelOverlay();
    }
  });





// === JEF ENTRY OVERLAY ===
const jefButton = document.getElementById("jef-entry-open-button");

const jefOverlay = document.createElement("div");
jefOverlay.id = "jef-overlay";
Object.assign(jefOverlay.style, {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(11, 11, 11, 0.807)",
  overflowY: "auto",
  opacity: "0",
  visibility: "hidden",
  transition: "opacity 0.6s ease, visibility 0.6s ease",
  backdropFilter: "blur(5px)",
  zIndex: "9000"
});

document.body.appendChild(jefOverlay);

jefOverlay.innerHTML =  `
    <div class="jefs-entry-content">
      <div class="entry-view-lines"><span></span><span></span><span></span><span></span><span></span><span></span></div>
      <div class="overlay-piece">
        <div class="top-line-pieces">
    <div class="entry-details">
        <h1 class="entry-title">Entry — 05</h1>
        <span class="small-details-underneath">
            <p class="date-of-entry">08.08.2025</p>
                <p>&bull;</p>
            <p class="time-of-entry">Entry Time 12:24PM</p>
        </span>
    </div>
          <span class="close-overlay-button-span"><p>CLOSE ENTRY</p><img class="cross-img" src="./images/entry-page/x.png" alt="X"/></span>
        </div>
       <div class="second-line-pieces">
<div class="categories-opened-entry">
<p>WRITTEN ENTRY</p>
<p>386 WORDS</p>
<p>SEPARATION, 8.5 YEARS</p>
<p>POOR CONNECTION</p>
<p>&bull;</p>
<p>FRIEND SEPARATION</p>
</div>
          <div class="chapter-selector">
            <span class="chapter-splitter"><p>View Entry</p><p class="read-through-percent"></p></span>
            <p class="related-entries">Related Entries</p>
            <p class="view-photo">View Photo</p>
          </div>
          <div class="content-port">
            <div class="written-section-2">
              <h3 class="transcript-heading">A Feeling of Loneliness</h3>
            <p class="entry-writing">I am currently separated from my younger siblings because my mum decided to go to Australia for work and brought them with her. I am studying here in New Zealand at the moment so because of that I wasn’t able to go as well.
<br><br>
I was really upset at the time because me and my siblings are like the three musketeers, so I had this feeling of loneliness and like apart of me was missing because we were so close. Just that feeling of missing my best friends and not having that closeness with them. Because of it I have felt like I have missed these massive milestones in there lives. Knowing my sister is turning 16 and about to graduate college and I am not there to celebrate those milestones just adds to everything you know?
<br><br>
I talk to them through text and over the phone but because of how young they are the conversations never amount to much, and usually are quite shallow overall. Most of our communication is just over the phone playing games, and never really goes much in to whats really happening in our lives. So theres this a sort of disconnect in making new memories with them.
<br><br>
They aren’t planning on coming back to New Zealand, so the burden to see them again is a bit on me. I am planning on going over but as it stands at the moment things are too busy with uni and the rest of life to do that right now.
<br><br>
Our relationship is still okay, we’re still close, but cause they’re so young its just really hard to speak to them. So its definitely harder now, and I just don’t really know whats going on in their lives. That part I think has been really hard for me especially.
<br><br>
It’s given me a better sense of care for my siblings, and whats happening in their lives. I think I regret not taking advantage of the time I had with them when they were here. I assumed that they would always be in New Zealand and that I would always have that time with them. So now that they aren’t here I really feel that. I’ve been thinking about that a lot recently.</p>
</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  jefButton.addEventListener("click", e => {
    e.preventDefault();
    jefOverlay.style.visibility = "visible";
    jefOverlay.style.opacity = "1";
    document.body.style.overflow = "hidden";
    initOverlayButtons(jefOverlay);
  });

  function closeJefOverlay() {
    jefOverlay.style.opacity = "0";
    setTimeout(() => {
      jefOverlay.style.visibility = "hidden";
      document.body.style.overflow = "auto";
    }, 600);
  }

  jefOverlay.addEventListener("click", e => {
    if (
      e.target.closest(".close-overlay-button") ||
      e.target.classList.contains("cross-img") ||
          e.target.matches(".close-overlay-button-span p") ||
      e.target.classList.contains("close-overlay-button-span")
    ) {
      closeJefOverlay();
    }
  });










// === PRIM ENTRY OVERLAY ===
const primButton = document.getElementById("prim-entry-open-button");

const primOverlay = document.createElement("div");
primOverlay.id = "prim-overlay";
Object.assign(primOverlay.style, {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(11, 11, 11, 0.807)",
  overflowY: "auto",
  opacity: "0",
  visibility: "hidden",
  transition: "opacity 0.6s ease, visibility 0.6s ease",
  backdropFilter: "blur(5px)",
  zIndex: "9000"
});

document.body.appendChild(primOverlay);

primOverlay.innerHTML = `
  <div class="prim-content">
    <div class="entry-view-lines"><span></span><span></span><span></span><span></span><span></span><span></span></div>
    <div class="overlay-piece">
       <div class="top-line-pieces">
    <div class="entry-details">
        <h1 class="entry-title">Entry — 06</h1>
        <span class="small-details-underneath">
            <p class="date-of-entry">08.03.2025</p>
                <p>&bull;</p>
            <p class="time-of-entry">Entry Time 01:24AM</p>
        </span>
    </div>
          <span class="close-overlay-button-span"><p>CLOSE ENTRY</p><img class="cross-img" src="./images/entry-page/x.png" alt="X"/></span>
        </div>


<div class="second-line-pieces">
<div class="categories-opened-entry">
<p>WRITTEN ENTRY</p>
<p>386 WORDS</p>
<p>SEPARATION, 4 YEARS</p>
<p>POOR CONNECTION</p>
<p>&bull;</p>
<p>PARENTAL SEPARATION</p>
</div>
        <div class="chapter-selector">
          <span class="chapter-splitter"><p>View Entry</p><p class="read-through-percent"></p></span>
          <p class="related-entries">Related Entries</p>
          <p class="view-photo">View Photo</p>
        </div>
        <div class="content-port">
          <div class="written-section-2">
            <h3 class="transcript-heading">Distant Skype Calls</h3>
 <p class="entry-writing">I currently live away from my dad.
When I was younger him and my mum divorced and my mum went back to live in New Zealand while my dad stayed in Australia to work.
<br><br>
That happen when I was very young but he’s never really been around after that. He would come over for holidays and birthdays but outside of that I never really saw him... Even now I don’t talk to him very much, and when I do — he appears to be in his own world and doesn’t want a lot to do with me.
<br><br>
Its difficult but I have never known a time with him actually around, so its always been this way for me. I have thought about what it would be like if we were together more but I don’t think it would’ve been better based on what siblings have said, but its still just something I think about sometimes.
<br><br>


I don’t even really consider him related to me a lot of the time. Ultimately I could never imagine a world where we were all a family, that connection just doesn’t make sense to my brain and even that makes me feel like the odd one out. Both of my brothers had that experience and I didn’t. I think based on the abuse they mention happening, it would’ve been bad but in my mind the family is all together and more happy. 
<br><br>

I felt like an outsider a lot when I was younger because of the whole thing, because none of my friends had that relationship with their parents. I would have to call my dad on special occasions at school on Skype, and I always felt weird doing it. I always felt everyone else did as well, but because he was so far away (Australia) it kind of had to be that way.
<br><br>
I remember when we’d go over to see him in Australia, I would find it hard to say goodbye to my mum, and when it was time to go back I would then find it hard to say goodbye to dad, and I feel like that has left some kind of effect on me. Constantly saying goodbye to one parent and never knowing when I would get to see the other. I can’t say for sure its the reason but now whenever I leave someone I have an underlying fear I will never see them again, if I leave someone I’ll have really bad thoughts, like they might die or something will happen. I think that comes from that and not being able to really comprehend it when I was younger, I just didn’t understand if I would ever see them again and that sort of snuck into my head now. Even though I know its stupid I can’t help but think that way.
<br><br>
When he would come to my school camps I thought he was the best person. I was always exited for him to come to my things I was doing. Then I would find it really hard when he had to leave. He came to a horse riding lesson once, and I started crying on the horse and no one else really understood it. So in that way I felt really alone in the whole thing. Then as I got older, it was hard to deny he just wasn’t that great of a person.
<br><br>
Now if we have a conversation its rarely good, and its usually about some business hes been working on thats going to take off soon, which is something I have heard my whole life, sometimes he asks about me but its never for long. But thats just sort of the way it is now.
</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

primButton.addEventListener("click", e => {
  e.preventDefault();
  primOverlay.style.visibility = "visible";
  primOverlay.style.opacity = "1";
  document.body.style.overflow = "hidden";
  initOverlayButtons(primOverlay);
});

function closePrimOverlay() {
  primOverlay.style.opacity = "0";
  setTimeout(() => {
    primOverlay.style.visibility = "hidden";
    document.body.style.overflow = "auto";
  }, 600);
}

primOverlay.addEventListener("click", e => {
  if (
    e.target.closest(".close-overlay-button-span") ||
        e.target.matches(".close-overlay-button-span p") ||
    e.target.classList.contains("cross-img")
  ) {
    closePrimOverlay();
  }
});







// === EILISH ENTRY OVERLAY ===
const eilishButton = document.getElementById("eilish-entry-open-button");

const eilishOverlay = document.createElement("div");
eilishOverlay.id = "eilish-overlay";
Object.assign(eilishOverlay.style, {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(11, 11, 11, 0.807)",
  overflowY: "auto",
  opacity: "0",
  visibility: "hidden",
  transition: "opacity 0.6s ease, visibility 0.6s ease",
  backdropFilter: "blur(5px)",
  zIndex: "9000"
});

document.body.appendChild(eilishOverlay);

eilishOverlay.innerHTML = `
  <div class="eilish-content">
    <div class="entry-view-lines"><span></span><span></span><span></span><span></span><span></span><span></span></div>
    <div class="overlay-piece">
     <div class="top-line-pieces">
    <div class="entry-details">
        <h1 class="entry-title">Entry — 07</h1>
        <span class="small-details-underneath">
            <p class="date-of-entry">09.08.25</p>
                <p>&bull;</p>
            <p class="time-of-entry">Entry Time 11:44AM</p>
        </span>
    </div>
          <span class="close-overlay-button-span"><p>CLOSE ENTRY</p><img class="cross-img" src="./images/entry-page/x.png" alt="X"/></span>
        </div>


<div class="second-line-pieces">
<div class="categories-opened-entry">
<p>WRITTEN ENTRY</p>
<p>414 WORDS</p>
<p>SEPARATION, 6 MONTHS</p>
<p>POOR CONNECTION</p>
<p>&bull;</p>
<p>PARTNER SEPARATION</p>
</div>

<div class="chapter-selector">
<span class="chapter-splitter"><p>View Entry</p>
<p class="read-through-percent"></p></span>
<p class="related-entries">Related Entries</p>
<!--<p class="connecting-effects">Connecting Effects</p>-->
<p class="view-photo">View Photo</p>
</div>

<div class="content-port">





    <div class="written-section-2">
    <h3 class="transcript-heading">Immediate Messages</h3>
    <p class="entry-writing">So I was separated from is my partner, Lewis — and we were and are still to an extent very codependent on each other, but he had to spent a lot of time back in England to visit his niece a while back and for financial reasons I couldn’t go with him.
<br><br>
When it was leading up to the leaving, I thought it was okay but that night he left I kept having all of these irrational thoughts, like what if the plane crashes or something bad happens and I never see him again. I found myself getting quite emotional about it all, so I was weirdly upset and annoyed at him, even thought the reason was so stupid.
<br><br>
When he did finally go I just had to learn to cope with it, count down the days until he would come back. I remember going into this state of just trying to get through the day as quick as possible so that then the time go faster. But that also makes you feel selfish, you have this feeling of “I want this to go fast for me even though I want it to be slow for him so he can have that time with his family.” It was really complicated in that way.
<br><br>
During that time I went in to a state of complete vulnerability. I would get really sad if I didn’t get immediate messages back even though we were messaging so often and there was such a big time difference between us. I look back at that time and I just think it sounds so pathetic, but thats just how it was. Because there the most precious thing in your life your brain does weird things.
<br><br>
I think in our situation because we were in such a strong relationship, when we spend that time apart we can realise that we do have these really intense feelings, and I feel very fortunate because of that, and realising that just makes everything better. Sometimes whens hes away I do get annoyed but its only for a split second, and its more at the situation then at him.
<br><br>
I suppose that separation has shown me that I can be on my own, and that does strengthen us when we are together, and because I’m around him so much. I think that type of separation, in my case where we are so connected or co-dependant — you could say I think it is good to do for yourself, every time one of us leaves and comes back we say “lets never do that again, I never want to do that again” but I also do feel those times are sort of needed in a way.

</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

eilishButton.addEventListener("click", e => {
  e.preventDefault();
  eilishOverlay.style.visibility = "visible";
  eilishOverlay.style.opacity = "1";
  document.body.style.overflow = "hidden";
  initOverlayButtons(eilishOverlay);
});

function closeEilishOverlay() {
  eilishOverlay.style.opacity = "0";
  setTimeout(() => {
    eilishOverlay.style.visibility = "hidden";
    document.body.style.overflow = "auto";
  }, 600);
}

eilishOverlay.addEventListener("click", e => {
  if (
    e.target.closest(".close-overlay-button-span") ||
        e.target.matches(".close-overlay-button-span p") ||
    e.target.classList.contains("cross-img")
  ) {
    closeEilishOverlay();
  }
});





// === SANDY ENTRY OVERLAY ===
const sandyButton = document.getElementById("sandy-entry-open-button");

const sandyOverlay = document.createElement("div");
sandyOverlay.id = "sandy-overlay";
Object.assign(sandyOverlay.style, {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(11, 11, 11, 0.807)",
  overflowY: "auto",
  opacity: "0",
  visibility: "hidden",
  transition: "opacity 0.6s ease, visibility 0.6s ease",
  backdropFilter: "blur(5px)",
  zIndex: "9000"
});

document.body.appendChild(sandyOverlay);

sandyOverlay.innerHTML = `
  <div class="sandy-content">
    <div class="entry-view-lines"><span></span><span></span><span></span><span></span><span></span><span></span></div>
    <div class="overlay-piece">
         <div class="top-line-pieces">
    <div class="entry-details">
        <h1 class="entry-title">Entry — 08</h1>
        <span class="small-details-underneath">
            <p class="date-of-entry">08.08.25</p>
                <p>&bull;</p>
            <p class="time-of-entry">Entry Time 11:44AM</p>
        </span>
    </div>
        <span class="close-overlay-button-span"><p>CLOSE ENTRY</p><img class="cross-img" src="./images/entry-page/x.png" alt="X"/></span>
      </div>
     <div class="second-line-pieces">
<div class="categories-opened-entry">
<p>WRITTEN ENTRY</p>
<p>389 WORDS</p>
<p>SEPARATION, 2 YEARS</p>
<p>MODERATE CONNECTION</p>
<p>&bull;</p>
<p>PARENTAL SEPARATION</p>
</div>
        <div class="chapter-selector">
          <span class="chapter-splitter"><p>View Entry</p><p class="read-through-percent"></p></span>
          <p class="related-entries">Related Entries</p>
          <p class="view-photo">View Photo</p>
        </div>
        <div class="content-port">
          <div class="written-section-2">
            <h3 class="transcript-heading">A Few Hours Away:</h3>
                <p class="entry-writing">

I live away from my dad, he lives a few hours away from me. After my parents split a few years ago, he realised that he wasn’t in the right place for him, so he’s gone off in his own journey to find his place in the world I suppose.
<br><br>
At first I felt really upset and not sure what to do with my emotions. I was unsure and slightly angry, but as time has moved on I’ve become more understanding and I get now why hes gone, and why we have to be apart now. I have just come to terms with things and have more understanding on our relationship I guess.
<br><br>
Overall having a separation with him has caused some strain though. Because we don’t have the ability to just spend time in each others presence, and our communication isn’t great either. So I found that we just don’t really talk very often, and we aren’t that close anymore. 
<br><br>
We only call maybe once a month a this point and feels like every time that the distance gets drawn out longer and longer, and it just gets harder I suppose, because of that distance.
<br><br>
I don’t find it easy to call either, I’m quite a closed off person and I don’t see myself moving closer to him anytime soon either. I am not sure where everything will go in terms of that.
<br><br>
I feel like over time, as I get older, our relationship is getting slightly stronger, but in that being said, maybe thinking about it - it could be weakening and I am just not thinking about it enough. Sometimes I think about how little we speak, and that I might regret it one day. It’s something I feel that I want to work on, but its difficult with just only online communication so I’m not sure about any of it at this stage.
</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

sandyButton.addEventListener("click", e => {
  e.preventDefault();
  sandyOverlay.style.visibility = "visible";
  sandyOverlay.style.opacity = "1";
  document.body.style.overflow = "hidden";
  initOverlayButtons(sandyOverlay);
});

function closeSandyOverlay() {
  sandyOverlay.style.opacity = "0";
  setTimeout(() => {
    sandyOverlay.style.visibility = "hidden";
    document.body.style.overflow = "auto";
  }, 600);
}

sandyOverlay.addEventListener("click", e => {
  if (
    e.target.closest(".close-overlay-button-span") ||
    e.target.matches(".close-overlay-button-span p")
||
    e.target.classList.contains("cross-img")
  ) {
    closeSandyOverlay();
  }
});





// === JOSH ENTRY OVERLAY ===
const joshButton = document.getElementById("josh-entry-open-button");

const joshOverlay = document.createElement("div");
joshOverlay.id = "josh-overlay";
Object.assign(joshOverlay.style, {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(11, 11, 11, 0.807)",
  overflowY: "auto",
  opacity: "0",
  visibility: "hidden",
  transition: "opacity 0.6s ease, visibility 0.6s ease",
  backdropFilter: "blur(5px)",
  zIndex: "9000"
});

document.body.appendChild(joshOverlay);

joshOverlay.innerHTML = `
  <div class="josh-content">
    <div class="entry-view-lines"><span></span><span></span><span></span><span></span><span></span><span></span></div>
    <div class="overlay-piece">
       <div class="top-line-pieces">
    <div class="entry-details">
        <h1 class="entry-title">Entry — 09</h1>
        <span class="small-details-underneath">
            <p class="date-of-entry">11.09.25</p>
                <p>&bull;</p>
            <p class="time-of-entry">Entry Time 01:32PM</p>
        </span>
    </div>
        <span class="close-overlay-button-span"><p>CLOSE ENTRY</p><img class="cross-img" src="./images/entry-page/x.png" alt="X"/></span>
      </div>
     <div class="second-line-pieces">
<div class="categories-opened-entry">
<p>WRITTEN ENTRY</p>
<p>487 WORDS</p>
<p>SEPARATION, 5 YEARS</p>
<p>POOR CONNECTION</p>
<p>&bull;</p>
<p>PARENTAL SEPARATION</p>
</div>
        <div class="chapter-selector">
          <span class="chapter-splitter"><p>View Entry</p><p class="read-through-percent"></p></span>
          <p class="related-entries">Related Entries</p>
          <p class="view-photo">View Photo</p>
        </div>
        <div class="content-port">
          <div class="written-section-2">
            <h3 class="transcript-heading">A Pause in Life</h3>
             <p class="entry-writing">
I have moved away from my dad, because he’s unhealthy for me. Whenever I get close to him, every time I try, as much as I want to, he damages me. Unfortunately I have just come to the conclusion that having any type relationship with him at all is impossible, at least for me.
As much as I want to have a relationship with him, that puts a pause on my life.
<br><br>
I felt for such a long time I was really reliant on him as a person, I’m not especially sure why, that’s just the effect he had, but once I decided I can’t do it anymore I had so much more energy, and I just felt a lot better. But it also wasn’t easy. It felt like trying to remove this glue from you, I couldn’t seem to fully rid that feeling from myself.
<br><br>
After I met my partner she made me realised all of the things that he did that were so unhealthy. So she really helped things be easier, there isn’t that strain that I had before when I tried to step away.
<br><br>
I tried to make a relationship work, but every time I did, it backfired, so I’m at the point where I just can’t. 
I really tried, but it just doesn’t work with him, and understanding that for me was really hard. I think because he is this central figure in my life. Like he is my dad, and I have this feeling of “I should have a relationship with him”. But for me it cant be that way. As sad as it is, thats the healthiest path for me.
<br><br>
Its a cold pain, but you are doing whats best to protect yourself, it just doesn’t always feel that way.
<br><br>
He was never really present for a lot of my life, he doesn’t finically support any of us, me or my siblings, he’s extremely opinionated, and he isn’t a particularly good role model. Everyone will tell that. A lot of my memories associated with him are really just trying to get away form that. But for some reason knowing that doesn’t make it any easier.</p>

          </div>
        </div>
      </div>
    </div>
  </div>
`;

joshButton.addEventListener("click", e => {
  e.preventDefault();
  joshOverlay.style.visibility = "visible";
  joshOverlay.style.opacity = "1";
  document.body.style.overflow = "hidden";
  initOverlayButtons(joshOverlay);
});

function closeJoshOverlay() {
  joshOverlay.style.opacity = "0";
  setTimeout(() => {
    joshOverlay.style.visibility = "hidden";
    document.body.style.overflow = "auto";
  }, 600);
}

joshOverlay.addEventListener("click", e => {
  if (
    e.target.closest(".close-overlay-button-span") ||
    e.target.matches(".close-overlay-button-span p") ||
    e.target.classList.contains("cross-img")
  ) {
    closeJoshOverlay();
  }
});







// === ZAK ENTRY OVERLAY ===
const zakButton = document.getElementById("zak-entry-open-button");

const zakOverlay = document.createElement("div");
zakOverlay.id = "zak-overlay";
Object.assign(zakOverlay.style, {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(11, 11, 11, 0.807)",
  overflowY: "auto",
  opacity: "0",
  visibility: "hidden",
  transition: "opacity 0.6s ease, visibility 0.6s ease",
  backdropFilter: "blur(5px)",
  zIndex: "9000"
});

document.body.appendChild(zakOverlay);

zakOverlay.innerHTML = `
  <div class="zak-content">
    <div class="entry-view-lines"><span></span><span></span><span></span><span></span><span></span><span></span></div>
    <div class="overlay-piece">
         <div class="top-line-pieces">
    <div class="entry-details">
        <h1 class="entry-title">Entry — 12</h1>
        <span class="small-details-underneath">
            <p class="date-of-entry">12.11.25</p>
                <p>&bull;</p>
            <p class="time-of-entry">Entry Time 07:29PM</p>
        </span>
    </div>
        <span class="close-overlay-button-span"><p>CLOSE ENTRY</p><img class="cross-img" src="./images/entry-page/x.png" alt="X"/></span>
      </div>
<div class="second-line-pieces">
<div class="categories-opened-entry">
<p>AUDIO ENTRY</p>
<p>AUDIO LENGTH — 02:35:52</p>
<p>SEPARATION, 1 YEAR</p>
<p>CLOSE CONNECTION</p>
<p>&bull;</p>
<p>PARENTAL SEPARATION</p>
</div>
        <div class="chapter-selector">
          <span class="chapter-splitter"><p>View Entry</p><p class="read-through-percent"></p></span>
          <p class="related-entries">Related Entries</p>
          <p class="view-photo">View Photo</p>
        </div>
        <div class="content-port">
          <div class="written-section-2">
            <h3 class="transcript-heading">Small Things</h3>
         <p class="entry-writing">
My mum, they moved to Dunedin and they bought a house down there so to stay at uni im here now still. They were sort of supposed to support me during this time, and then I had to move out.
<br><br>
But mainly I was quite sad to have them going. You know? they’re quite far off now.
<br><br>
If you see ur parents once or twice a year you’ll only see them a little before they’re gone for good. I think about that a lot now. Yeah it definitely different. I don’t talk to them nearly as much as i used to and now its more... organised you could say? Its not like they can just come out and chat to me when im working on stuff in the garage like they used to. My mum used to do that a lot and shed always tie it back to some story from her own life.
<br><br>
I think thats the thing I miss the most, is just showing them stuff I have been up to. When you have this project and you get to explain how its made the inner workings and all that.
<br><br>
Overall I wouldn't say its strengthened my relationship with them. They’re my parents so its mostly the same in that way. Its definitely different though, but when I go down and visit it still feels the same.
<br><br>
I don’t really have a support system, its a remote system you could say. Being allowed to live there came with a lot of benefits, and the relationship now with support is a lot more transactional, - like you have to ask about for money if you’re struggling where as before I didn’t really have that issue.
<br><br>
It was simple stuff like soap, random food if I didn’t have anything, the small things you miss just kind of add up you know.
<br><br>
Its just different now, the casual conversation aren’t really a thing anymore when your not in person.
<br><br>
When I lived there we had a coffee together and just chat about random things, and that just doesn't really happen now.
          </div>
        </div>
      </div>
    </div>
  </div>
`;

zakButton.addEventListener("click", e => {
  e.preventDefault();
  zakOverlay.style.visibility = "visible";
  zakOverlay.style.opacity = "1";
  document.body.style.overflow = "hidden";
  initOverlayButtons(zakOverlay);
});

function closeZakOverlay() {
  zakOverlay.style.opacity = "0";
  setTimeout(() => {
    zakOverlay.style.visibility = "hidden";
    document.body.style.overflow = "auto";
  }, 600);
}

zakOverlay.addEventListener("click", e => {
  if (
    e.target.closest(".close-overlay-button-span") ||
        e.target.matches(".close-overlay-button-span p") ||
    e.target.classList.contains("cross-img")
  ) {
    closeZakOverlay();
  }
});
});