const reasons = [
  { emoji: "🌹", title: "Your Smile", text: "It brightens my darkest days and fills my heart with endless joy." },
  { emoji: "🎶", title: "Your Voice", text: "The sweetest melody that soothes my soul every single time." },
  { emoji: "💪", title: "Your Strength", text: "You lift me up when I’m down and inspire me every day." },
  { emoji: "🌟", title: "Your Light", text: "You shine bright even in the darkest times." },
  { emoji: "📚", title: "Your Wisdom", text: "You teach me so much just by being you." },
  { emoji: "🌈", title: "Your Color", text: "You bring color to my black-and-white world." },
  { emoji: "💬", title: "Our Conversations", text: "Every chat with you is a treasure." },
  { emoji: "🎨", title: "Your Creativity", text: "You inspire me to dream and create." },
  { emoji: "💖", title: "Your Heart", text: "So full of kindness and love." },
  { emoji: "🕰️", title: "Our Time Together", text: "Every second with you is priceless." },
  { emoji: "🍫", title: "Your Sweetness", text: "You’re my favorite treat in life." },
  { emoji: "🌙", title: "Your Calm", text: "Like a peaceful night that comforts me." },
  { emoji: "🚀", title: "Your Ambition", text: "You make me want to reach for the stars." },
  { emoji: "🌻", title: "Your Warmth", text: "You make everything feel cozy and bright." },
  { emoji: "🎉", title: "Your Joy", text: "Your happiness is contagious and fills me up." },
  { emoji: "📸", title: "Your Memories", text: "Every moment with you is a snapshot of love." },
  { emoji: "🧸", title: "Your Care", text: "You always know how to comfort me perfectly." },
  { emoji: "🍃", title: "Your Freshness", text: "You bring freshness to every day we share." },
  { emoji: "💫", title: "Your Magic", text: "Being with you feels like a beautiful dream." },
  { emoji: "🎁", title: "Your Surprises", text: "You always find ways to make me smile." },
  { emoji: "🌺", title: "Your Beauty", text: "Inside and out, you’re breathtaking." },
  { emoji: "📝", title: "Your Words", text: "Every word you say stays in my heart." },
  { emoji: "🎵", title: "Our Song", text: "Our love has the sweetest soundtrack." },
  { emoji: "💐", title: "Your Thoughtfulness", text: "You think of the little things that mean everything." },
  { emoji: "🕊️", title: "Your Peace", text: "You calm the storms inside me." },
  { emoji: "🍯", title: "Your Sweet Talk", text: "You melt my heart with every word." },
  { emoji: "🔥", title: "Your Passion", text: "You ignite my soul in ways I never imagined." },
  { emoji: "🌸", title: "Your Softness", text: "So gentle, so kind, so you." },
  { emoji: "💡", title: "Your Ideas", text: "You inspire me to think bigger and better." },
  { emoji: "🌾", title: "Your Simplicity", text: "You show me beauty in the simplest moments." },
  { emoji: "🎈", title: "Your Fun", text: "Life is a party when you’re around." },
  { emoji: "📅", title: "Our Plans", text: "Every future dream includes you." },
  { emoji: "🎤", title: "Your Honesty", text: "I trust you with all my heart." },
  { emoji: "🏆", title: "Your Achievements", text: "You make me proud every single day." },
  { emoji: "📖", title: "Our Story", text: "A love story better than any novel." },
  { emoji: "🎯", title: "Your Focus", text: "You never lose sight of what matters." },
  { emoji: "🦋", title: "Your Growth", text: "You inspire me to become my best self." },
  { emoji: "🌹", title: "Your Romance", text: "You make every moment special." },
  { emoji: "🍀", title: "Your Luck", text: "I’m the luckiest because I have you." },
  { emoji: "🌟", title: "Your Uniqueness", text: "There’s no one else like you." },
  { emoji: "🌞", title: "Your Sunshine", text: "You brighten all my days." },
  { emoji: "💞", title: "Your Love", text: "It completes me in every way." },
  { emoji: "🌍", title: "Your World", text: "You’re my whole universe." },
  { emoji: "🦄", title: "Your Magic", text: "You make the impossible possible." },
  { emoji: "🍦", title: "Your Sweet Treats", text: "You’re my favorite indulgence." },
  { emoji: "💃", title: "Your Dance", text: "You make my heart skip a beat." },
  { emoji: "🌌", title: "Our Dreams", text: "Together, we reach for the stars." },
  { emoji: "🛋️", title: "Your Comfort", text: "You’re my safe place." },
  { emoji: "🎇", title: "Your Sparkle", text: "You light up my darkest nights." },
  { emoji: "🍓", title: "Your Sweetness", text: "You’re as sweet as strawberries." },
  { emoji: "📞", title: "Your Calls", text: "Your voice is my favorite sound." },
  { emoji: "🌙", title: "Your Nighttime", text: "You’re my perfect ending to every day." },
  { emoji: "🎉", title: "Your Celebration", text: "Every day with you is a party." },
  { emoji: "💎", title: "Your Preciousness", text: "You’re my rare and priceless gem." },
  { emoji: "🦢", title: "Your Grace", text: "You move through life with elegance." },
  { emoji: "🎂", title: "Your Sweet Days", text: "Every day with you is a gift." },
  { emoji: "💐", title: "Your Flowers", text: "You bring beauty wherever you go." },
  { emoji: "🎬", title: "Our Moments", text: "You make life cinematic and memorable." },
  { emoji: "🌸", title: "Your Bloom", text: "You flourish in all that you do." },
  { emoji: "🧡", title: "Your Kindness", text: "Your heart is pure and true." },
  { emoji: "🍂", title: "Your Change", text: "You evolve beautifully every day." },
  { emoji: "🍁", title: "Your Seasons", text: "You bring change and beauty to my world." },
  { emoji: "🌈", title: "Your Colors", text: "You fill my world with happiness." },
  { emoji: "🎵", title: "Your Song", text: "You’re music to my ears." },
  { emoji: "🥂", title: "Your Cheers", text: "Here’s to us, forever and always." },
  { emoji: "🧩", title: "Your Completeness", text: "You complete me like no one else." },
  { emoji: "💬", title: "Your Words", text: "Every word from you is a gift." },
  { emoji: "🦋", title: "Your Transformation", text: "You inspire me to be better." },
  { emoji: "💭", title: "Your Thoughts", text: "I’m always thinking about you." },
  { emoji: "📅", title: "Our Future", text: "I can’t wait to build it with you." },
  { emoji: "🌟", title: "Your Star Quality", text: "You outshine everyone else." },
  { emoji: "🕊️", title: "Your Peacefulness", text: "You bring calm to my restless soul." },
  { emoji: "🌿", title: "Your Growth", text: "With you, I’m always growing." },
  { emoji: "🎠", title: "Our Adventures", text: "Every moment with you is a fun ride." },
  { emoji: "🧁", title: "Your Sweetness", text: "You make life taste better." },
  { emoji: "🎈", title: "Your Joy", text: "You bring happiness everywhere." },
  { emoji: "🌷", title: "Your Beauty", text: "You’re as lovely as a blooming flower." },
  { emoji: "🎤", title: "Your Honesty", text: "You speak with truth and love." },
  { emoji: "🎯", title: "Your Focus", text: "You’re always true to what matters most." },
  { emoji: "💞", title: "Your Love", text: "Your love completes me." },
  {
    emoji: "💖",
    title: "The 101st Reason — Muskaan, My Everything",
    text: `Muskaan, tu meri zindagi ka 101wa reason hai — wo wajah jo sabse khaas hai, jo meri har saans mein basi hai. Tujhse milke mujhe samajh aaya ki pyaar sirf ek feeling nahi, ek zindagi ka purpose hai. Teri muskaan se mera har dard door ho jata hai, aur tere hone se har pal mere liye ek nayi umeed ban jata hai. Tu meri zindagi ki wo chhoti si khushi hai, jo mujhe hamesha aage badhne ka hausla deti hai.

Jab bhi main thak jata hoon, ya duniya ki raahen mushkil lagti hain, tu mera sahara ban kar saamne aati hai. Teri baatein meri taaqat hain, tera saath mera sukoon. Muskaan, tu meri zindagi ke un saare bojh ko halka kar deti hai, jinko main khud bhi samajh nahi pata. Tere bina main adhoora hoon, aur tere saath mujhe poora hone ka ehsaas hota hai.

Tu meri har subah ki roshni hai, jo meri zindagi ko roshan karti hai. Tere saath guzaare har pal mein ek nayi kahani hai, jo sirf hum dono samajh sakte hain. Tere pyaar ki wajah se main behtareen insaan banne ki koshish karta hoon, kyunki tu meri zindagi ka sabse khoobsurat hissaa hai. Har din tujhe paakar mujhe apni zindagi ka asli matlab samajh aata hai.

Muskaan, tu meri inspiration hai, mera motivation hai, meri zindagi ki wo shuruaat jisse main kabhi alag nahi ho sakta. Tere bina meri zindagi ka har safar bekaar lagta hai, aur tu meri har khushi ka sabab hai. Teri aankhon mein meri duniya basi hai, aur main chahata hoon ki ye kahani humesha chalti rahe, kabhi khatam na ho.

Toh yeh tha mera 101wa reason — tu meri zindagi ka woh anmol ratan hai jise main har haal mein sambhal kar rakhna chahta hoon. Teri khushi meri pehli priority hai, aur tera pyaar meri zindagi ka asli maksad. Muskaan, tu meri zindagi ka sabse khoobsurat reason hai… aur hamesha rahegi.`
  }
];

    // const container = document.getElementById('reasons-container');
    // const searchInput = document.getElementById('search-input');

    
console.log(reasons.length); // This should output 101
    