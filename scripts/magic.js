//
//  ---------------  don't cheat smh  ---------------
//

const words = ['VOICE', 'GREAT', 'BENDS', 'BRAIN', 'PANIC', 'WICCA', 'VIDEO', 'BONES', 'GLASS', 'OWNED', 'SOBER', 'GOING', 'SNAKE', 'FRAME', 'SPENT', 'FALLS', 'MARKS', 'SHIRT', 'COMES', 'SHADE', 'PAINT', 'GUCCI', 'SIGIL', 'MARCH', 'DROWN', 'LADEN', 'SMOKE', 'RADIO', 'MOONS', 'DOUBT', 'FAULT', 'REPLY', 'PRIDE', 'BLOGS', 'FADED', 'SONGS', 'TWICE', 'VODKA', 'WAKES', 'CHAOS', 'REACH', 'SHOWS', 'METAL', 'SIGHT', 'CHILD', 'GIVES', 'JEANS', 'LIMBS', 'LABEL', 'FOUND', 'MINDS', 'SHOVE', 'MOUTH', 'LIARS', 'SPILL', 'DREAD', 'VAPID', 'MIDST', 'RHYME', 'THROW', 'TONIC', 'FORCE', 'DRANK', 'HEAVY', 'STUFF', 'TASTE', 'SLANG', 'HONOR', 'WORST', 'CHRIS', 'PLAIN', 'WALLS', 'SKIES', 'RELAY', 'TRIES', 'BROKE', 'NOTHI', 'SHOUL', 'LEAST', 'NUMBE', 'THING', 'ANNOY', 'ONSET', 'DOING', 'CARRY', 'FUNNY', 'TRIED', 'CROWD', 'CHICK', 'LIKED', 'RULER', 'WRITE', 'RAGER', 'LAURA', 'WRIST', 'COLOR', 'LEADS', 'OUTTA', 'ANONS', 'MEANT', 'RIDES', 'TRACK', 'BELLY', 'LOVES', 'CHOKE', 'WATER', 'WHERE', 'YOURS', 'PHASE', 'STUCK', 'NEVER', 'BEATS', 'WAVES', 'PARTY', 'SEEMS', 'MERIT', 'TODAY', 'ODDLY', 'SOUND', 'LYING', 'SOCIA', 'PORCH', 'HARSH', 'HAPPY', 'HEARD', 'KNOWS', 'RELAX', 'SHUTS', 'WANTS', 'LACEY', 'STARS', 'FIRST', 'CEILI', 'ROUND', 'HOLDS', 'COUNT', 'QUICK', 'TIMES', 'PARTS', 'BOUND', 'SPELL', 'ASIDE', 'HEAVE', 'GIRLS', 'CRAWL', 'FEELI', 'DREAM', 'PULSE', 'MAYBE', 'LIKES', 'CYBER', 'FEELS', 'CAUSE', 'STAND', 'CANDY', 'LIGHT', 'CRUEL', 'KEEPS', 'BEAMS', 'CALLS', 'TRULY', 'GONNA', 'PUNCH', 'NAOMI', 'STEAD', 'THINK', 'ALONG', 'UNTIL', 'SEVEN', 'GUILT', 'TRUST', 'DANCE', 'TREAD', 'PILLS', 'THERE', 'BLANK', 'TENSE', 'FAILS', 'BLADE', 'SHOTS', 'JESSE', 'COULD', 'TURNS', 'EVERY', 'FOLKS', 'SCENT', 'SUCKS', 'GIVEN', 'STARE', 'RANGE', 'GRAVE', 'MIXER', 'PATHS', 'COURT', 'ROBIN', 'TOUCH', 'HANDS', 'BEACH', 'PHONE', 'IDEAS', 'GRASP', 'THESE', 'HURTS', 'DROVE', 'GUESS', 'TEARS', 'HABIT', 'GRAIL', 'AGENT', 'DROPS', 'MILES', 'NIGHT', 'SWEAR', 'THREW', 'ABOUT', 'BORED', 'LIVED', 'CARES', 'MAGIC', 'CATCH', 'ORDER', 'DRAGS', 'ALLEY', 'SIGNS', 'DYING', 'PIECE', 'SHOOT', 'LAUGH', 'TONGU', 'SPEAK', 'CHECK', 'WINTE', 'STATE', 'ALIGN', 'PRICE', 'SPOKE', 'CLUBS', 'AFTER', 'ALTAR', 'SLAVE', 'WOULD', 'WORLD', 'HONEY', 'DEATH', 'KNOWN', 'WANNA', 'SHAME', 'SOUPY', 'BANDS', 'OUIJA', 'PLANS', 'OCEAN', 'RINGS', 'GOTTA', 'CROSS', 'YEARS', 'BEING', 'AVOID', 'PILOT', 'SPINE', 'HIGHS', 'STILL', 'GOLDI', 'MONEY', 'TRAIN', 'MODEL', 'TAKES', 'SPEED', 'MAKES', 'LOVER', 'TEXTS', 'AGONY', 'TRYNA', 'SCARS', 'THIRD', 'LUCID', 'KNEEL', 'ANIME', 'WORKS', 'REPAY', 'CIROC', 'DITCH', 'CLAIM', 'RAISE', 'DRAWN', 'NAILS', 'GUISE', 'FLESH', 'THEIR', 'NEEDS', 'CLOSE', 'WRONG', 'CHEST', 'SUPER', 'MONTH', 'FEVER', 'SENSE', 'HOURS', 'JESUS', 'SPEND', 'WHOLE', 'PULLS', 'ROUGH', 'PAPER', 'FORTH', 'UNDER', 'TEASE', 'BEAST', 'THANK', 'CRAVE', 'FLORA', 'DRIVE', 'AHEAD', 'LEAVE', 'MOVED', 'COAST', 'IMAGE', 'ENDED', 'PERSO', 'ALBUM', 'TIGHT', 'STEER', 'CAVED', 'SAUNA', 'INSID', 'DRUGS', 'ALIVE', 'NAMES', 'THREE', 'SORRY', 'COFFE', 'WHILE', 'CHARM', 'SABER', 'SHELL', 'SCARY', 'CRAZY', 'FAUNA', 'HAVEN', 'SHARE', 'FADES', 'HILLS', 'MIXED', 'DRIES', 'BLOOD', 'MARKI', 'MISTY', 'VISIO', 'SIREN', 'BLACK', 'VAGUE', 'SPLIT', 'AGREE', 'BONNY', 'OHTWO', 'RIGHT', 'SHAKE', 'CLEAN', 'BEATI', 'NYATA', 'TRUCK', 'PEACE', 'CLEAR', 'REACT', 'CHOSE', 'VEINS', 'SWEET', 'CHASE', 'MOORS', 'PLACE', 'SHINE', 'BREAK', 'ASKED', 'HORSE', 'POINT', 'PINES', 'VICES', 'TREES', 'TRUTH', 'STONE', 'ANGEL', 'WHITE', 'FEEDS', 'DOYOU', 'ALONE', 'TIGER', 'WORTH', 'HELLO', 'KANYE', 'CURSE', 'PRESS', 'DEVIL', 'WHICH', 'RAZOR', 'SATUR', 'BATED', 'START', 'WHOSE', 'CARDS', 'OFFER', 'SATAN', 'READY', 'WATCH', 'LOVED', 'QUEEN', 'DAILY', 'MOVES', 'AWAKE', 'BUMPS', 'BRING', 'LUGER', 'BOBBY', 'APART', 'PUMPS', 'PLEAD', 'TELLS', 'SEVER', 'TAKEN', 'PLAYS', 'DOVES', 'HOUSE', 'JAMES', 'PLANE', 'KNEES', 'DRINK', 'FLAME', 'PEAKS', 'SALES', 'LANES', 'HEART', 'FETID', 'MOODY', 'PROUD', 'SILLY', 'MELTS', 'LOOKS', 'MIGHT', 'KNIFE', 'TYPES', 'KINDA', 'HONDA', 'WITCH', 'OTHER', 'AGAIN', 'TIRED', 'FOLDS', 'LIVES', 'SLEEP', 'CELLS', 'STAYS', 'MEETS', 'TYING', 'TITLE', 'SPACE', 'FRONT', 'OFTEN', 'GREEN', 'ABOVE', 'WROTE', 'UPSET', 'WOMAN', 'WORDS', 'SINCE', 'INNER', 'KNOCK', 'YOUNG', 'RESTS', 'FIGHT', 'CLAMS', 'RAUCH', 'COORS', 'LAPSE', 'LATER', 'FINAL', 'AWARE', 'THOSE'];
const finalDate = getFinalDate();

function random(seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function getFinalDate() {
    const date = new Date((typeof (new Date()) === "string" ? new Date((new Date())) : (new Date())).toLocaleString("en-US", {timeZone: "Europe/London"}));
    const dateFormated = date.toLocaleString().slice(0,-13).split("/");
    
    let finalDateStr = new String();
    dateFormated.reverse().forEach(number => finalDateStr += number);
    
    return Number(finalDateStr);
}

function getAnswerIndex() {
    return Math.floor(random(finalDate)*words.length);
}

async function encryptCookie(value) {
    let charCodeCookie = new String();

    for (char of value) charCodeCookie += char.charCodeAt();

    const encrypted = await aesGcmEncrypt(charCodeCookie,finalDate);
    return encrypted.replaceAll("=","_");;
}

async function decryptCookie(encrypted) {
    const decrypted = await aesGcmDecrypt(encrypted, finalDate);
    let cookieText = new String();

    for (let i = 0, j = 0; i < decrypted.length/2; i++, j=i*2) cookieText += String.fromCharCode(Number(decrypted[j] + decrypted[j+1]));
    
    return cookieText;
}

function getCookieVars(value) {
    const varsInit = value.match(/\w+\.\w+/g);
    let vars = new Object();
    for (keyVal of varsInit) {
        const matches = keyVal.match(/(\w+)\.(\w+)/);
        const [tempKey, tempValue] = [matches[1], matches[2]];
        vars[tempKey] = tempValue;
    }
    return vars;
}

async function getCookies() {
    const originalCookies = a.match(/\w+=.+;/);
    if (!originalCookies) return null;
    let cookies = new Object();
    for (originalCookie of originalCookies) {
        const matches = originalCookie.slice(0,originalCookie.length-1).match(/(\w+)=(.+)/);
        const [tempKey, tempValue] = [matches[1], matches[2]];
        cookies[tempKey] = new Object();
        cookies[tempKey].encrypted = tempValue;
    }

    for (let [key, value] of Object.entries(cookies)) {
        cookies[key].decrypted = await decryptCookie(cookies[key].encrypted.replaceAll("_","="));
        cookies[key].vars = getCookieVars(cookies[key].decrypted);
    }
    return cookies;
}

function setTriesCookie(tries) {

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