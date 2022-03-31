//
//  ---------------  don't cheat smh  ---------------
//

const words = ['HAPPY', 'WOMAN', 'INNER', 'FEEDS', 'MINDS', 'CHARM', 'BELLY', 'CLAIM', 'FEELS', 'SPEED', 'DOING', 'ASKED', 'OWNED', 'CHECK', 'STATE', 'JESSE', 'MODEL', 'GOTTA', 'RANGE', 'ALLEY', 'UNTIL', 'HORSE', 'PATHS', 'LIGHT', 'DREAM', 'GREEN', 'ORDER', 'CHICK', 'BOUND', 'SATAN', 'TIRED', 'HEARD', 'MERIT', 'CRAVE', 'GRAIL', 'MARKS', 'MIXER', 'SEEMS', 'KNOWS', 'FEVER', 'ASIDE', 'WANTS', 'CHRIS', 'ANONS', 'THIRD', 'ALTAR', 'WAVES', 'START', 'NUMBE', 'SHOWS', 'READY', 'SPLIT', 'AGENT', 'DOUBT', 'CRAWL', 'IDEAS', 'APART', 'STEER', 'HARSH', 'WOULD', 'COULD', 'NEVER', 'CHASE', 'SLAVE', 'DRANK', 'HILLS', 'PHONE', 'KNEEL', 'CAUSE', 'PHASE', 'SOCIA', 'WAKES', 'REACH', 'LOVED', 'DITCH', 'WORDS', 'PULSE', 'TOUCH', 'SPACE', 'MEETS', 'OTHER', 'DRAWN', 'RESTS', 'LOVER', 'RHYME', 'POINT', 'PEACE', 'UPSET', 'YOUNG', 'BLADE', 'SAUNA', 'RELAY', 'FOLKS', 'SUCKS', 'FRONT', 'SCENT', 'SPELL', 'IMAGE', 'LOVES', 'MIXED', 'BONNY', 'WHOLE', 'PRIDE', 'SKIES', 'PARTY', 'THREE', 'DYING', 'QUEEN', 'ALIVE', 'PILLS', 'WORST', 'KNIFE', 'LAUGH', 'DEVIL', 'TYPES', 'WATCH', 'CROSS', 'TREAD', 'AVOID', 'AGAIN', 'CATCH', 'PLANS', 'SIGHT', 'LIKED', 'SHARE', 'INSID', 'WORTH', 'HEAVE', 'ANIME', 'PRESS', 'COMES', 'LABEL', 'SIGNS', 'TONIC', 'PRICE', 'LATER', 'SHOTS', 'CHAOS', 'REPAY', 'SHADE', 'SHINE', 'AFTER', 'HEAVY', 'ROUND', 'SLEEP', 'FOUND', 'HEART', 'KNEES', 'LANES', 'FLAME', 'HURTS', 'CRAZY', 'GIRLS', 'BLANK', 'LEAST', 'FAULT', 'ALONE', 'MIGHT', 'NAMES', 'KNOCK', "NAOMI", 'EVERY', 'BOBBY', 'SLANG', 'HONDA', 'BUMPS', 'NYATA', 'PERSO', 'WROTE', 'SUPER', 'SHUTS', 'RAZOR', 'BATED', 'GLASS', 'TIMES', 'SHELL', 'LUGER', 'ODDLY', 'DAILY', 'RADIO', 'STILL', 'GUILT', 'LIMBS', 'OHTWO', 'OFFER', 'FADED', 'SWEAR', 'PORCH', 'BEAST', 'COAST', 'WHICH', 'HOURS', 'BENDS', 'KINDA', 'THING', 'OFTEN', 'SNAKE', 'VEINS', 'FUNNY', 'AWAKE', 'FRAME', 'SEVEN', 'SATUR', 'MOUTH', 'NIGHT', 'VICES', 'TITLE', 'AWARE', 'HOLDS', 'RAUCH', 'MOORS', 'BOARD', 'ROBIN', 'SOBER', 'TAKES', 'FIRST', 'MOONS', 'STUCK', 'SINCE', 'NAILS', 'METAL', 'ONSET', 'COURT', 'WALLS', 'SHAKE', 'MIDST', 'CARES', 'JESUS', 'STAYS', 'VIDEO', 'TRUTH', 'QUICK', 'GIVES', 'FIGHT', 'DROVE', 'YEARS', 'OUIJA', 'CARDS', 'JAMES', 'FLESH', 'LIKES', 'SMOKE', 'WANNA', 'PAPER', 'SABER', 'TRUCK', 'BRING', 'PILOT', 'LIARS', 'CARRY', 'HAVEN', 'KANYE', 'AGONY', 'REPLY', 'KEEPS', 'WITCH', 'ENDED', 'BEATS', 'CHEST', 'CLOSE', 'CLUBS', 'TWICE', 'LADEN', 'BLOGS', 'NEEDS', 'HIGHS', 'CAVED', 'BORED', 'TAKEN', 'STUFF', 'DROPS', 'PIECE', 'SHAME', 'RIDES', 'STARE', 'FALLS', 'BREAK', 'WORKS', 'RAGER', 'TIGHT', 'PEAKS', 'COLOR', 'TELLS', 'DREAD', 'HELLO', 'GONNA', 'OCEAN', 'GREAT', 'SORRY', 'GUCCI', 'ANNOY', 'MEANT', 'THINK', 'LUCID', 'LYING', 'WICCA', 'FORTH', 'VAGUE', 'BEACH', 'FETID', 'VAPID', 'CURSE', 'DEATH', 'FOLDS', 'ROUGH', 'CYBER', 'MONTH', 'GRASP', 'CHILD', 'PLAIN', 'TRAIN', 'SONGS', 'THESE', 'CANDY', 'CLAMS', 'GOING', 'OUTTA', 'PLEAD', 'WHILE', 'ABOVE', 'THOSE', 'RULER', 'LAURA', 'SPOKE', 'LEAVE', 'AGREE', 'SPEAK', 'BONES', 'MOVES', 'CRUEL', 'MAKES', 'MOVED', 'PINES', 'PUMPS', 'SHOOT', 'TRIES', 'FLORA', 'BROKE', 'TEASE', 'LACEY', 'GUESS', 'CELLS', 'PUNCH', 'PROUD', 'HANDS', 'SENSE', 'ALONG', 'WHITE', 'THERE', 'SPEND', 'DANCE', 'JEANS', 'UNDER', 'SHIRT', 'MONEY', 'WRITE', 'CROWD', 'STONE', 'TRULY', 'GIVEN', 'WRONG', 'CHOKE', 'RIGHT', 'ANGEL', 'ARISE', 'HABIT', 'COFFE', 'CHOSE', 'THEIR', 'RAISE', 'DRAGS', 'WHOSE', 'PAINT', 'TURNS', 'HOUSE', 'LAPSE', 'SPENT', 'TONGU', 'SCARY', 'LIVES', 'TREES', 'SOUPY', 'FAUNA', 'BLACK', 'WATER', 'BRAIN', 'MAGIC', 'HONOR', 'THANK', 'SPILL', 'STAND', 'SCARS', 'COORS', 'AHEAD', 'DRIES', 'LEADS', 'LIVED', 'SWEET', 'BEAMS', 'VOICE', 'TENSE', 'TRUST', 'LOOKS', 'PLAYS', 'CALLS', 'ALBUM', 'WORLD', 'STARS', 'SIREN', 'DOYOU', 'PANIC', 'FINAL', 'SPINE', 'MOODY', 'THREW', 'SOUND', 'ABOUT', 'PARTS', 'KNOWN', 'SILLY', 'GUISE', 'WINTE', 'MELTS', 'REACT', 'TASTE', 'STEAD', 'SALES', 'CLEAN', 'RINGS', 'DRIVE', 'RELAX', 'MISTY', 'PLACE', 'DRINK', 'TEARS', 'TODAY', 'PLANE', 'WHERE', 'FADES', 'BANDS', 'CLEAR', 'VODKA', 'COUNT', 'DROWN', 'TYING', 'PULLS', 'MARCH', 'TIGER', 'SHOUL', 'SHOVE', 'HONEY', 'MILES', 'SIGIL', 'TRIED', 'BLOOD', 'FAILS', 'MAYBE', 'TEXTS', 'GRAVE', 'FORCE', 'WRIST', 'ALIGN', 'THROW', 'BEING', 'TRACK', 'DOVES', 'DRUGS', 'YOURS', 'FLOOR', 'SEVER'];
let dateToday;
const finalDate = getFinalDate();
let match;
if (document.cookie.match(/id=(.+)~/)) match = document.cookie.match(/id=(.+)\~/)[1];
else {
    match = crypto.randomUUID();
    document.cookie = "id=" + match + "~;expires=Thu, 1 Jan 2026 12:00:00 UTC";
}
const id = match;

function random(seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function getFinalDate() {
    const currentDate = new Date();
    dateToday = new Date((typeof currentDate === "string" ? new Date(currentDate) : (currentDate)).toLocaleString("en-US", {timeZone: "Europe/London"}));
    const dateFormated = String(dateToday.getFullYear()) + String(dateToday.getMonth()+1) + String(dateToday.getDate());
    
    return Number(dateFormated);
}

function getAnswerIndex() {
    return Math.floor(random(finalDate)*words.length);
}

async function encryptCookie(value) {
    let charCodeCookie = new String();

    for (char of value) charCodeCookie += char.charCodeAt();

    const encrypted = await aesGcmEncrypt(charCodeCookie, id);
    return encrypted.replaceAll("=","_");
}

async function decryptCookie(encrypted) {
    const decrypted = await aesGcmDecrypt(encrypted, id);
    let cookieText = new String();

    for (let i = 0, j = 0; i < decrypted.length/2; i++, j=i*2) cookieText += String.fromCharCode(Number(decrypted[j] + decrypted[j+1]));
    
    return cookieText;
}

function getCookieVars(value) {
    const varsInit = value.match(/\w+\.\w+:/g);
    let vars = new Object();

    for (keyVal of varsInit) {
        const matches = keyVal.match(/(\w+)\.(\w+):/);
        const [tempKey, tempValue] = [matches[1], matches[2]];
        vars[tempKey] = tempValue;
    }
    return vars;
}

async function getCookies() {
    const originalCookies = document.cookie.split(";");
    
    if (originalCookies == '') {
        cookies = {
            STATE: {
                name: "STATE=",
                THEME: theme,
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0
            },
            SECONDARY: {
                name: "SECONDARY=",
                DATE: null,
                LETTERS: null,
                COLOURS: null,
                LOST: null,
            }
        }
        return cookies;
    }
    
    for (originalCookie of originalCookies) {
        const matches = originalCookie.match(/(\w+)=(.+)/);
        const [tempKey, tempValue] = [matches[1], matches[2]];
        if (tempKey == "id") continue;
        cookies[tempKey] = new Object();
        cookies[tempKey].encrypted = tempValue;
    }

    for (let [key, value] of Object.entries(cookies)) {
        cookies[key].decrypted = await decryptCookie(cookies[key].encrypted.replaceAll("_","="));
        cookies[key] = getCookieVars(cookies[key].decrypted);
    }

    return cookies;
}

async function setCookies(cookie) {
    let toEncrypt, date;
    if (cookie.name == "STATE=") {
        toEncrypt = "THEME." + cookie.THEME + ":1." + cookie[1] + ":2." + cookie[2] + ":3." + cookie[3] + ":4." + cookie[4] + ":5." + cookie[5] + ":6." + cookie[6] + ":";
        date = (new Date());
        date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
        date = date.toUTCString();
    }
    else if (cookie.name == "SECONDARY=") {
        toEncrypt = "LETTERS." + guessesStr + ":COLOURS." + prioritiesStr + ":GAME." + gameState + ":DATE." + getFinalDate() + ":";
        date = (new Date());
        date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
        date = date.toUTCString();
    }
    const cookieStr = await encryptCookie(toEncrypt);
    document.cookie = cookie.name + cookieStr + ";expires=" + date;
}


/**
 * Encrypts plaintext using AES-GCM with supplied password, for decryption with aesGcmDecrypt().
 *                                                                      (c) Chris Veness MIT Licence
 *
 * @param   {String} plaintext - Plaintext to be encrypted.
 * @param   {String} password - Password to use to encrypt plaintext.
 * @returns {String} Encrypted ciphertext.
 *
 * @example
 *   const ciphertext = await aesGcmEncrypt('my secret text', 'pw');
 *   aesGcmEncrypt('my secret text', 'pw').then(function(ciphertext) { console.log(ciphertext); });
 */
 async function aesGcmEncrypt(plaintext, password) {
    const pwUtf8 = new TextEncoder().encode(password);                                 // encode password as UTF-8
    const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8);                      // hash the password

    const iv = crypto.getRandomValues(new Uint8Array(12));                             // get 96-bit random iv
    const ivStr = Array.from(iv).map(b => String.fromCharCode(b)).join('');            // iv as utf-8 string

    const alg = { name: 'AES-GCM', iv: iv };                                           // specify algorithm to use

    const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['encrypt']); // generate key from pw

    const ptUint8 = new TextEncoder().encode(plaintext);                               // encode plaintext as UTF-8
    const ctBuffer = await crypto.subtle.encrypt(alg, key, ptUint8);                   // encrypt plaintext using key

    const ctArray = Array.from(new Uint8Array(ctBuffer));                              // ciphertext as byte array
    const ctStr = ctArray.map(byte => String.fromCharCode(byte)).join('');             // ciphertext as string

    return btoa(ivStr+ctStr);                                                          // iv+ciphertext base64-encoded
}


/**
 * Decrypts ciphertext encrypted with aesGcmEncrypt() using supplied password.
 *                                                                      (c) Chris Veness MIT Licence
 *
 * @param   {String} ciphertext - Ciphertext to be decrypted.
 * @param   {String} password - Password to use to decrypt ciphertext.
 * @returns {String} Decrypted plaintext.
 *
 * @example
 *   const plaintext = await aesGcmDecrypt(ciphertext, 'pw');
 *   aesGcmDecrypt(ciphertext, 'pw').then(function(plaintext) { console.log(plaintext); });
 */
async function aesGcmDecrypt(ciphertext, password) {
    const pwUtf8 = new TextEncoder().encode(password);                                 // encode password as UTF-8
    const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8);                      // hash the password

    const ivStr = atob(ciphertext).slice(0,12);                                        // decode base64 iv
    const iv = new Uint8Array(Array.from(ivStr).map(ch => ch.charCodeAt(0)));          // iv as Uint8Array

    const alg = { name: 'AES-GCM', iv: iv };                                           // specify algorithm to use

    const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['decrypt']); // generate key from pw

    const ctStr = atob(ciphertext).slice(12);                                          // decode base64 ciphertext
    const ctUint8 = new Uint8Array(Array.from(ctStr).map(ch => ch.charCodeAt(0)));     // ciphertext as Uint8Array
    // note: why doesn't ctUint8 = new TextEncoder().encode(ctStr) work?

    try {
        const plainBuffer = await crypto.subtle.decrypt(alg, key, ctUint8);            // decrypt ciphertext using key
        const plaintext = new TextDecoder().decode(plainBuffer);                       // plaintext from ArrayBuffer
        return plaintext;                                                              // return the plaintext
    } catch (e) {
        throw new Error('Decrypt failed');
    }
}