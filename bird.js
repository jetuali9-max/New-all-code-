// ===================== BIRD (Kip) — Bangla-only companion =====================
// Honest note: real speechSynthesis voice availability, gender, and quality depend entirely
// on the user's OS/browser-installed voices. We select the best available bn-* voice and
// clearly cannot guarantee a specific "youthful female" voice exists on every device.

const BIRD_MSG = {
  greet: [
    "হাই! আমি কিপ 🐦 চলো একসাথে কোড শিখি!",
    "কেমন আছো? আজকে কী শিখবে?",
    "স্বাগতম! নিচে থেকে একটা ভাষা বেছে নাও।",
  ],
  mistake: [
    "তুমি মনে হয় ভুল করতেছো 😅 আরেকবার দেখো।",
    "একটু গণ্ডগোল আছে মনে হচ্ছে 🤔 চেক করো তো।",
    "এইখানে একটা ছোট ভুল আছে, চিন্তা নেই, ঠিক করে ফেলো 💪",
  ],
  fixed: [
    "ইয়েস! ঠিকভাবে কাজ করছে! 🎉",
    "বাহ, ঠিক করে ফেলেছো! দারুণ! 🥳",
    "চমৎকার! এখন কোনো এরর নেই ✨",
  ],
  learned: [
    "ওয়াও! তুমি এটা শিখে ফেলেছো! ❤️",
    "সুপার! আরেকটা টপিক শেষ! 🎉",
    "গ্রেট জব! তুমি প্রতিদিন ভালো করছো 💪",
  ],
  encourage: [
    "আবার চেষ্টা করো, তুমি পারবে! 💪",
    "থেমে যেও না, প্র্যাকটিস করতে থাকো 😊",
    "প্রতিটা ভুল থেকেই শেখা যায়, চালিয়ে যাও!",
  ],
  idle: [
    "তুমি কি জানো, প্র্যাকটিস করলেই কোডিং সহজ লাগে? 😊",
    "একটু বিরতি নাও, তারপর আবার শুরু করো!",
    "আমি এখানেই আছি, দরকার হলে ডেকো 🙂",
  ],
  playful: [
    "তুমি কি জানো, আমি তোমায় অনেক ভালোবাসি? ❤️",
    "তুমি কি আমাকে ভালোবাসো? 🙈",
    "চলো একটু নাচি! 💃",
  ],
};
let lastCategory = {};
function pickMsg(category){
  const list = BIRD_MSG[category] || BIRD_MSG.idle;
  let choice;
  do { choice = list[Math.floor(Math.random()*list.length)]; } while (list.length>1 && choice===lastCategory[category]);
  lastCategory[category] = choice;
  return choice;
}

const Bird = {
  audioEnabled: false,
  voice: null,
  danceTimer: null,
  el: { avatar:null, text:null, mute:null },

  init(){
    this.el.avatar = document.getElementById('birdAvatar');
    this.el.text = document.getElementById('birdText');
    this.el.mute = document.getElementById('birdMute');
    this.pickVoice();
    if (typeof speechSynthesis !== 'undefined') {
      speechSynthesis.onvoiceschanged = ()=> this.pickVoice();
    }
    this.el.mute.addEventListener('click', ()=>{
      this.audioEnabled = !this.audioEnabled;
      this.el.mute.classList.toggle('off', !this.audioEnabled);
      this.el.mute.textContent = this.audioEnabled ? '🔊' : '🔈';
      if (this.audioEnabled) this.speak("অডিও চালু হয়েছে!");
    });
    document.getElementById('birdTapArea').addEventListener('click', ()=>{
      window.openBirdPanel && window.openBirdPanel();
    });
    this.say('greet', 'happy');
    setInterval(()=> this.maybeIdleOrDance(), 45000);
  },

  pickVoice(){
    if (typeof speechSynthesis === 'undefined') return;
    const voices = speechSynthesis.getVoices();
    this.voice = voices.find(v=> /^bn/i.test(v.lang)) || null;
  },

  speak(text){
    if (!this.audioEnabled) return;
    if (typeof speechSynthesis === 'undefined') return;
    try{
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu,''));
      if (this.voice) u.voice = this.voice;
      u.lang = this.voice ? this.voice.lang : 'bn-BD';
      u.pitch = 1.15; u.rate = 1.0;
      speechSynthesis.speak(u);
    }catch(e){}
  },

  setExpression(mood){
    this.el.avatar.classList.remove('talk','dance','happy');
    const glyphs = { happy:'😄', mistake:'😅', fixed:'🎉', learned:'🥰', encourage:'💪', idle:'🙂', playful:'🥰', dance:'💃' };
    this.el.avatar.textContent = glyphs[mood] || '🐦';
    void this.el.avatar.offsetWidth;
    this.el.avatar.classList.add(mood==='dance' ? 'dance' : (mood==='learned'||mood==='fixed'||mood==='playful' ? 'happy' : 'talk'));
    setTimeout(()=>{ this.el.avatar.textContent='🐦'; this.el.avatar.classList.remove('talk','dance','happy'); }, mood==='dance'? 3200:1800);
  },

  say(category, mood){
    const msg = pickMsg(category);
    this.el.text.innerHTML = `<span class="bn">${msg}</span>`;
    this.setExpression(mood || category);
    this.speak(msg);
  },

  reactMistake(){ this.say('mistake','mistake'); },
  reactFixed(){ this.say('fixed','fixed'); },
  reactLearned(){ this.say('learned','learned'); },
  reactEncourage(){ this.say('encourage','encourage'); },

  maybeIdleOrDance(){
    if (document.hidden) return;
    const roll = Math.random();
    if (roll < 0.15) this.dance();
    else if (roll < 0.5) this.say('idle','idle');
  },

  dance(){
    this.say('playful','dance');
    this.playJingle();
  },

  // A small generated jingle via Web Audio API — no external/copyrighted audio file needed.
  // Still respects autoplay policy: only plays if the user has enabled audio (a user gesture).
  playJingle(){
    if (!this.audioEnabled) return;
    try{
      const ctx = new (window.AudioContext||window.webkitAudioContext)();
      const notes = [523.25,587.33,659.25,783.99,659.25,523.25];
      notes.forEach((freq,i)=>{
        const o = ctx.createOscillator(); const g = ctx.createGain();
        o.type='triangle'; o.frequency.value=freq;
        o.connect(g); g.connect(ctx.destination);
        const t = ctx.currentTime + i*0.18;
        g.gain.setValueAtTime(0.001,t); g.gain.linearRampToValueAtTime(0.12,t+0.02); g.gain.linearRampToValueAtTime(0.001,t+0.16);
        o.start(t); o.stop(t+0.18);
      });
    }catch(e){}
  }
};
